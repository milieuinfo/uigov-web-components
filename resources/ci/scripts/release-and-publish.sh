#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: release-and-publish.sh'
cd uigov-web-components

echo 'pwd'
pwd
echo 'ls -la'
ls -la

# get branch name
gitRefName=$(git rev-parse --abbrev-ref HEAD)
echo using $gitRefName as gitRefName

# determine the branch type
develop_branch=false
release_branch=false

if [[ ${gitRefName} == *"develop"* ]] || [[ ${gitRefName} == *"bugfix"* ]];
  then
    echo "develop branch detected - beta release"
    develop_branch=true
fi

if [[ ${gitRefName} == *"release"* ]];
  then
    echo "release branch detected - release"
    release_branch=true
fi

if [[ ${develop_branch} == false ]] && [[ ${release_branch} == false ]];
  then
    echo "no develop or release branch detected - stopping build"
    exit 0
fi

# de build mag niet lopen als de laatste commit boodschap [skip ci] bevat
last_commit=$(git log -1 --pretty=%B | cat)
skip_ci="[skip ci]"
if [[ ${last_commit} == *"$skip_ci"* ]];
  then
    echo "de meest recente commit bevat [skip ci] - de build stopt"
    exit 2
fi

# op Bamboo bevat secret_github_token het GitHub PAT met de juiste rechten
if [ -z ${secret_github_token+x} ];
  then
    echo "secret_github_token is NIET gezet"
  else
    export GITHUB_TOKEN=${secret_github_token}
    echo "secret_github_token als GITHUB_TOKEN gezet, OK"
fi

# het GITHUB_TOKEN is nodig, ofwel rechtstreeks gezet ofwel via bamboo.secret_github_token
if [ -z ${GITHUB_TOKEN+x} ];
  then
    echo "GITHUB_TOKEN is NIET gezet, NOK - stop"
    exit 1
  else
    echo "GITHUB_TOKEN is gezet, OK"
fi

# the remote set by Bamboo is not authenticated, so remove the remote and add one with authentication
echo 'git remote rm origin'
git remote rm origin
echo 'git remote add origin https://${secret_github_token}@github.com/milieuinfo/uigov-web-components.git'
git remote add origin https://${secret_github_token}@github.com/milieuinfo/uigov-web-components.git
echo 'git fetch --prune origin'
git fetch --prune origin
echo 'git pull origin ${gitRefName}'
git pull origin ${gitRefName}
# the git fetch is necessary -> otherwise semantic-release is unaware of the previous version
# this gives 'does not point to a valid object!' errors - they can be ignored
echo 'delete all local git tags'
git tag -d $(git tag -l)
echo 'fetch all remote git tags'
git fetch --tags

GITHUB_USER=kspeltix
GITHUB_EMAIL=kris.speltincx@vlaanderen.be
#GITHUB_TOKEN=ghp_
git config user.name ${GITHUB_USER}
git config user.name
git config user.email ${GITHUB_EMAIL}
git config user.email
echo using ${GITHUB_TOKEN} as GITHUB_TOKEN

echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact

if [[ ${release_branch} == true ]];
  then
    echo "semantic-release - voorbereiding"
    cp .releaserc-release .releaserc
fi

if [[ ${develop_branch} == true ]];
  then
    echo "semantic-develop - voorbereiding"
    cp .releaserc-develop .releaserc
fi

echo "semantic-release - uitvoering"
npx semantic-release --no-ci

echo "variabelen bepalen en zetten"
nextRelease_version=$(npm pkg get version | sed 's/"//g')
echo using $nextRelease_version as nextRelease_version

#rootsemver=$(echo $nextRelease_version | cut -d '.' -f1-3)
#echo using $rootsemver as rootsemver

#pagesSubPath=$gitRefName/$nextRelease_version
#echo using $pagesSubPath as pagesSubPath

# releasen van de packages
cd dist/libs

# opkuisen van de packages
rm -rf ./map/**/*.wctest.*
rm -rf ./components/**/stories
rm -rf ./elements/**/stories
rm -rf ./map/**/stories
rm -rf ./sections/**/stories

# de feitelijke release actie is afhankelijk van de branch

if [[ ${release_branch} == true ]];
  then
    echo "publiceren van de npm packages naar de DOMG repository"
    cd ./common/utilities && npm version $nextRelease_version && npm publish
    cd ../../elements && npm version $nextRelease_version && npm publish
    cd ../components && npm version $nextRelease_version && npm publish
    cd ../sections && npm version $nextRelease_version && npm publish
    cd ../map && npm version $nextRelease_version && npm publish
    cd ../support/test-support && npm version $nextRelease_version && npm publish
    cd ../../..
fi

if [[ ${develop_branch} == true ]];
  then
    echo "pack van de npm packages - beschikbaar via artifact"
    cd ./common/utilities && npm version $nextRelease_version && npm pack
    cd ../../elements && npm version $nextRelease_version && npm pack
    cd ../components && npm version $nextRelease_version && npm pack
    cd ../sections && npm version $nextRelease_version && npm pack
    cd ../map && npm version $nextRelease_version && npm pack
    cd ../support/test-support && npm version $nextRelease_version && npm pack
    cd ../../..
fi

echo "update domg-wc-sections met versie nummer en maak er een tgz van"
# het versie nummer toevoegen aan de 'fat-js'
cd ./fat-libs/sections/lib
mv domg-wc-sections.js domg-wc-sections-${nextRelease_version}.js
mv domg-wc-sections.js.map domg-wc-sections-${nextRelease_version}.js.map
mv domg-wc-sections.min.js domg-wc-sections-${nextRelease_version}.min.js
# een tar maken om via artifactory op de cdn te krijgen
tar cfz ../domg-wc-sections-${nextRelease_version}.tgz .

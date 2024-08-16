#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: release-and-publish.sh'
cd uigov-web-components

# get branch name
gitRefName=$(git rev-parse --abbrev-ref HEAD)
echo using $gitRefName as gitRefName

# determine the branch type
develop_branch=false
release_branch=false

if [[ ${gitRefName} == *"develop"* ]] || [[ ${gitRefName} == *"bugfix"* ]];
  then
    echo "--------------------------------------"
    echo "develop branch detected - beta release"
    echo "--------------------------------------"
    develop_branch=true
fi

if [[ ${gitRefName} == *"release"* ]];
  then
    echo "---------------------------------"
    echo "release branch detected - release"
    echo "---------------------------------"
    release_branch=true
fi

if [[ ${develop_branch} == false ]] && [[ ${release_branch} == false ]];
  then
    echo "no develop or release branch detected - stopping build"
    exit 0
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
git remote rm origin &> /dev/null
echo 'git remote add origin https://${secret_github_token}@github.com/milieuinfo/uigov-web-components.git'
git remote add origin https://${secret_github_token}@github.com/milieuinfo/uigov-web-components.git &> /dev/null
echo 'git fetch --prune origin'
git fetch --prune origin &> /dev/null
echo 'git pull origin ${gitRefName}'
git config pull.ff only
git pull origin ${gitRefName}
# the git fetch is necessary -> otherwise semantic-release is unaware of the previous version
# this gives 'does not point to a valid object!' errors - they can be ignored
echo 'delete all local git tags'
git tag -d $(git tag -l) &> /dev/null
echo 'fetch all remote git tags'
git fetch --all --tags --force &> /dev/null

GITHUB_USER=kspeltix
GITHUB_EMAIL=kris.speltincx@vlaanderen.be
echo 'git config user.name'
git config user.name ${GITHUB_USER}
git config user.name
echo 'git config user.email'
git config user.email ${GITHUB_EMAIL}
git config user.email

echo "npm install - no 'ci' to avoid the clean"
set +e
npm install --save-exact 2> buffer-stderr.txt 1> buffer-stdout.txt
if [ $? -eq 0 ]
  then
    echo "npm install - success"
  else
    echo "npm install - error - buffer-stderr.txt" >&2
    cat buffer-stderr.txt >&2
    cat buffer-stdout.txt >&2
    set -e
    exit 1
fi
set -e

if [[ ${release_branch} == true ]];
  then
    echo "semantic-release - '.releaserc-release' script wordt gebruikt"
    cp ./resources/ci/release/.releaserc-release .releaserc
fi

if [[ ${develop_branch} == true ]];
  then
    echo "semantic-release - '.releaserc-develop' script wordt gebruikt"
    cp ./resources/ci/release/.releaserc-develop .releaserc
fi

echo "semantic-release - uitvoering"
npx semantic-release --no-ci

echo "variabelen bepalen en zetten"
nextRelease_version=$(npm pkg get version | sed 's/"//g')
echo using $nextRelease_version as nextRelease_version

# de feitelijke release actie is afhankelijk van de branch

set +e
if [[ ${release_branch} == true ]];
  then
    echo "publiceren van de npm packages naar de DOMG 'local-npm' repository"
    npm run libs:pack:release -- $nextRelease_version
    npm run libs:publish
fi
if [ $? -eq 0 ]
  then
    echo "publiceren van de npm packages naar de DOMG 'local-npm' repository - success"
  else
    echo "publiceren van de npm packages naar de DOMG 'local-npm' repository - error - buffer-stderr.txt" >&2
    cat buffer-stderr.txt >&2
    cat buffer-stdout.txt >&2
    set -e
    exit 1
fi
set -e

set +e
if [[ ${develop_branch} == true ]];
  then
    echo "publiceren van de npm packages naar de DOMG 'snapshot-npm' repository"
    npm run libs:pack:develop -- $nextRelease_version
    npm run libs:publish
fi
if [ $? -eq 0 ]
  then
    echo "publiceren van de npm packages naar de DOMG 'snapshot-npm' repository - success"
  else
    echo "publiceren van de npm packages naar de DOMG 'snapshot-npm' repository - error - buffer-stderr.txt" >&2
    cat buffer-stderr.txt >&2
    cat buffer-stdout.txt >&2
    set -e
    exit 1
fi
set -e

cd ..

echo "update domg-wc met versie nummer en maak er een tgz van"
# het versie nummer toevoegen aan de 'fat-js'
cd ./fat-lib
mv domg-wc.js domg-wc-${nextRelease_version}.js
mv domg-wc.js.map domg-wc-${nextRelease_version}.js.map
mv domg-wc.min.js domg-wc-${nextRelease_version}.min.js
# een tar maken
tar cfz ../domg-wc-${nextRelease_version}.tgz .
cd ..

if [[ ${release_branch} == true ]];
  then
    # curl is niet meer geïnstalleerd in de cypress docker-image
    apt-get -y update; apt-get -y install curl
    # de tar uploaden naar artifactory (om het op de cdn te krijgen) - via curl omdat er geen package.json is
    echo "upload-file 'domg-wc-${nextRelease_version}.tgz' naar artifactory"
    curl --user "${acd_repository_debian_login}:${acd_repository_bamboo_password}" \
     --upload-file domg-wc-${nextRelease_version}.tgz \
     -v -X PUT "${acd_repository_url}/local-generic/domg/domg-wc-${nextRelease_version}.tgz"
fi

cd ..

# builden van Storybook
echo "build Storybook"
set +e
npm run storybook:build &> /dev/null
if [ $? -eq 0 ]
then
  echo "Storybook succesvol gebouwd"
else
  echo "fout bij het bouwen van Storybook" >&2
  set -e
  exit 1
fi
set -e

# tgz van Storybook maken
echo "tgz''en van Storybook"
set +e
cd ./dist/apps/storybook
tar cfz ../storybook-${nextRelease_version}.tgz .
if [ $? -eq 0 ]
  then
    echo "Storybook succesvol in een tgz gestoken"
  else
    echo "fout bij het tgz''en van Storybook" >&2
    set -e
    exit 1
fi
set -e

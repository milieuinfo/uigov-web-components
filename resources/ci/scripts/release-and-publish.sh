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
git tag -d $(git tag -l) > /dev/null
echo 'fetch all remote git tags'
git fetch --all --tags --force > /dev/null

GITHUB_USER=kspeltix
GITHUB_EMAIL=kris.speltincx@vlaanderen.be
#GITHUB_TOKEN=ghp_
git config user.name ${GITHUB_USER}
git config user.name
git config user.email ${GITHUB_EMAIL}
git config user.email
echo using ${GITHUB_TOKEN} as GITHUB_TOKEN

echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact 2> buffer-stderr.txt 1> buffer-stdout.txt
if [ $? -eq 0 ]
  then
    echo "npm install - success"
  else
    echo "npm install - error - buffer-stderr.txt" >&2
    cat buffer-stderr.txt>&2
    sleep 2
fi

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
rm -rf ./form/**/stories
rm -rf ./map/**/stories
rm -rf ./qlik/**/stories
rm -rf ./sections/**/stories

# in de package.json bestanden - daar waar nodig - de juiste versie zetten
toReplace=DOMG-WC-VERSION
# de OSX versie is als volgt: sed -i '' "s,$toReplace,$nextRelease_version," **/package.json
# maar die '' geeft natuurlijk een probleem in de build - vandaar
sed -i "s,$toReplace,$nextRelease_version," ./*/package.json
sed -i "s,$toReplace,$nextRelease_version," ./*/*/package.json

# om tree-shaking correct te laten werken moeten sideEffects in de root-barrel-file uitgeschakeld worden
#  -> het lijkt niet mogelijk om dit via een exclude te doen - dit werkt niet: ["!(./index.js)"]
#  -> dus expliciet specifieren van alle files in minimum 1 subfolder + eventueel de 'andere' root-files
echo "sideEffects zetten in de package.json bestanden"
cd ./common/utilities
npm pkg delete type --json
npm pkg set sideEffects='["./*/**"]' --json
cd ../../common/storybook
npm pkg delete type --json
npm pkg set sideEffects='["./*/**", "./stories.helper.*"]' --json
cd ../../elements
npm pkg delete type --json
npm pkg set sideEffects='["./*/**"]' --json
cd ../components
npm pkg delete type --json
npm pkg set sideEffects='["./*/**"]' --json
cd ../form
npm pkg delete type --json
npm pkg set sideEffects='["./*/**"]' --json
cd ../sections
npm pkg delete type --json
npm pkg set sideEffects='["./*/**"]' --json
cd ../map
npm pkg delete type --json
npm pkg set sideEffects='["./*/**", "./vl-map.*"]' --json
cd ../qlik
npm pkg delete type --json
npm pkg set sideEffects='["./*/**"]' --json
cd ../support/test-support
npm pkg delete type --json
npm pkg set sideEffects='["./*/**"]' --json
cd ../..

# de feitelijke release actie is afhankelijk van de branch

if [[ ${release_branch} == true ]];
  then
    echo "publiceren van de npm packages naar de DOMG 'local-npm' repository"
    cd ./common/utilities && npm publish
    cd ../../common/storybook && npm publish
    cd ../../elements && npm publish
    cd ../components && npm publish
    cd ../form && npm publish
    cd ../sections && npm publish
    cd ../map  && npm publish
    cd ../qlik  && npm publish
    cd ../support/test-support && npm publish
    cd ../..
fi

if [[ ${develop_branch} == true ]];
  then
    echo "publiceren van de npm packages naar de DOMG 'snapshot-npm' repository"
    cd ./common/utilities
    npm pkg set publishConfig.registry='https://repo.omgeving.vlaanderen.be/artifactory/api/npm/snapshot-npm/'
    npm publish
    cd ../../common/storybook
    npm pkg set publishConfig.registry='https://repo.omgeving.vlaanderen.be/artifactory/api/npm/snapshot-npm/'
    npm publish
    cd ../../elements
    npm pkg set publishConfig.registry='https://repo.omgeving.vlaanderen.be/artifactory/api/npm/snapshot-npm/'
    npm publish
    cd ../components
    npm pkg set publishConfig.registry='https://repo.omgeving.vlaanderen.be/artifactory/api/npm/snapshot-npm/'
    npm publish
    cd ../form
    npm pkg set publishConfig.registry='https://repo.omgeving.vlaanderen.be/artifactory/api/npm/snapshot-npm/'
    npm publish
    cd ../sections
    npm pkg set publishConfig.registry='https://repo.omgeving.vlaanderen.be/artifactory/api/npm/snapshot-npm/'
    npm publish
    cd ../map
    npm pkg set publishConfig.registry='https://repo.omgeving.vlaanderen.be/artifactory/api/npm/snapshot-npm/'
    npm publish
    cd ../qlik
    npm pkg set publishConfig.registry='https://repo.omgeving.vlaanderen.be/artifactory/api/npm/snapshot-npm/'
    npm publish
    cd ../support/test-support
    npm pkg set publishConfig.registry='https://repo.omgeving.vlaanderen.be/artifactory/api/npm/snapshot-npm/'
    npm publish
    cd ../..
fi

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
npm run storybook:build &> /dev/null
if [ $? -eq 0 ]
then
  echo "Storybook succesvol gebouwd"
else
  echo "fout bij het bouwen van Storybook" >&2
fi

# tgz van Storybook maken
echo "maak een tgz van Storybook"
cd ./dist/apps/storybook
tar cfz ../storybook-${nextRelease_version}.tgz .
if [ $? -eq 0 ]
  then
    echo "Storybook succesvol in een tgz gestoken"
  else
    echo "fout bij het tgz''en van Storybook" >&2
fi

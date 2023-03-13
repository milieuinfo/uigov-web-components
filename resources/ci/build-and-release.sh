#!/bin/bash

# om dit script te gebruiken: start de docker container op met `docker compose up`
#
# om lokaal (om script snippets te testen):
# te kunnen releasen, moet de branch remote bestaan !!!
# -> anders krijg je een rare fout mbt 'branches'
# alle GitHub rechten te hebben dien je een omgevingsvariabele te zetten conform
# -> export GITHUB_TOKEN=ghp_...
# een volledige semantic release te doen moet je 'no ci' specifiëren
# -> npx semantic-release --no-ci
#
# als je dit script lokaal test en bij semantic release fouten krijgt rond 'would clobber existing tag',
# -> doe dan `git fetch --tags --force`

# exit bij een fout
set -e

echo using ${test_token} as test_token

cd uigov-web-components

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

echo "git remote -v"
git remote -v

GITHUB_USER=kspeltix
GITHUB_EMAIL=kris.speltincx@vlaanderen.be
#GITHUB_TOKEN=ghp_
git config user.name ${GITHUB_USER}
git config user.name
git config user.email ${GITHUB_EMAIL}
git config user.email
echo using ${GITHUB_TOKEN} as GITHUB_TOKEN

echo "npm ci"
npm ci
echo "build-apps-libs-and-storybook"
npx nx build
npm run build:all
npx nx build-storybook storybook
#echo "perform-all-unit-tests"
#npx nx run-many --all --target=test --parallel --maxParallel=4 --skip-nx-cache
#echo "perform-all-web-tests"
#npx nx wct map
#echo "e2e-test-storybook"
#npm run storybook:ci-test

#echo "genereer mochawesome raport"
#mkdir dist/cypress/apps/storybook-e2e/mochawesome
#npx mochawesome-merge dist/cypress/apps/storybook-e2e/mochawesome-reports/*.json > dist/cypress/apps/storybook-e2e/mochawesome/output.json
#npx marge dist/cypress/apps/storybook-e2e/mochawesome/output.json --reportDir dist/cypress/apps/storybook-e2e/mochawesome --inline --reportFilename index.html --reportPageTitle "Storybook e2e tests" --reportTitle "UIG Web Components - Storybook e2e tests"

echo "semantic-release - voorbereiding"
cp .releaserc-release .releaserc
echo "semantic-release - uitvoering"
npx semantic-release --no-ci

echo "variabelen bepalen en zetten"
nextRelease_version=$(npm pkg get version | sed 's/"//g')
echo using $nextRelease_version as nextRelease_version

rootsemver=$(echo $nextRelease_version | cut -d '.' -f1-3)
echo using $rootsemver as rootsemver

gitRefName=$(git rev-parse --abbrev-ref HEAD)
echo using $gitRefName as gitRefName

pagesSubPath=$gitRefName/$nextRelease_version
echo using $pagesSubPath as pagesSubPath

echo "publiceren van de npm packages naar de DOMG repository"
cd dist/libs
echo path: $(pwd)
cd ./common/utilities && npm version $nextRelease_version && npm publish
cd ../../elements && npm version $nextRelease_version && npm publish
cd ../components && npm version $nextRelease_version && npm publish
cd ../sections && npm version $nextRelease_version && npm publish
cd ../map && npm version $nextRelease_version && npm publish
cd ../support/test-support && npm version $nextRelease_version && npm publish
cd ../../../..

echo "de baseHref zetten van playground"
toReplace=$(echo href=\"/\")
baseHref=$(echo href=\"/uigov-pages/build-apps/$pagesSubPath/playground/\")
echo using $baseHref as baseHref
sed -i'.bak' "s,$toReplace,$baseHref," dist/apps/playground/index.html

echo "de versie zetten van playground"
toReplace=__UIG-VERSION__
newVersion=$nextRelease_version
sed -i'.bak' "s,$toReplace,$newVersion," dist/apps/playground/index.html

echo "publiceren op github-pages"
mkdir build
git clone https://$GITHUB_TOKEN@github.com/milieuinfo/uigov-pages.git build/uigov-pages
mkdir -p build/uigov-pages/build-apps/$pagesSubPath
# copy all the files to repo folder
cp -R dist/apps/playground build/uigov-pages/build-apps/$pagesSubPath
cp -R dist/apps/storybook build/uigov-pages/build-apps/$pagesSubPath
# add all untracked files
cd build/uigov-pages/build-apps
git add -A
cd ..
# commit local
git config user.name ${GITHUB_USER}
git config user.email ${GITHUB_EMAIL}
git commit -m "update because of release $nextRelease_version"
# push to remote
git push

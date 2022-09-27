#git clone -b feature/UIG-2122-setup https://github.com/milieuinfo/uig.git

cd web-components
#rm package-lock.json
#rm -rf dist

echo "npm install"
npm install --verbose
echo "running test - npx nx test"
npx nx test
echo "running build - npx nx build"
npx nx build
echo "running Cypress tests - npm run storybook:ci-test"
npm run storybook:ci-test

mkdir dist/cypress/apps/storybook-e2e/mochawesome
npx mochawesome-merge dist/cypress/apps/storybook-e2e/mochawesome-reports/*.json > dist/cypress/apps/storybook-e2e/mochawesome/output.json
npx marge dist/cypress/apps/storybook-e2e/mochawesome/output.json --reportDir dist/cypress/apps/storybook-e2e/mochawesome --inline --reportFilename index.html --reportPageTitle "Storybook e2e tests" --reportTitle "UIG Webcomponents - Storybook e2e tests"


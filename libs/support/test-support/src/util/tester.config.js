import yargs from 'yargs';

const { argv } = yargs(process.argv);

const operatingSystems = {
    mac: { name: 'OS X', version: 'Catalina' },
    windows: { name: 'Windows', version: '10' },
};

const browsers = [
    { name: 'chrome', isActive: argv.chrome, version: '98.0', os: operatingSystems.windows },
    { name: 'firefox', isActive: argv.firefox, version: '83.0', os: operatingSystems.windows },
    { name: 'edge', isActive: argv.edge, version: '86.0', os: operatingSystems.windows },
    { name: 'safari', isActive: argv.safari, version: 'latest', os: operatingSystems.mac },
    { name: 'opera', isActive: argv.opera, version: 'latest', os: operatingSystems.windows },
];

const activeBrowser =
    browsers.find((browser) => browser.isActive) || browsers.find((browser) => browser.name === 'chrome');

const sbRoot = argv.local ? '' : 'storybook-static/';
const basePort = argv.local ? '8081' : '8080';
const host = argv.grid ? 'tests' : 'localhost';

export const testerConfig = {
    osName: activeBrowser.os.name,
    osVersion: activeBrowser.os.version,
    browserName: activeBrowser.name,
    browserVersion: activeBrowser.version,
    browserstack: argv.browserstack,
    gridEnabled: argv.grid,
    gridUrl: 'http://selenium-hub:4444/wd/hub',
    baseUrl: `http://${host}:${basePort}/src/`,
    sbUrl: `http://${host}:8080/${sbRoot}iframe.html`,
};

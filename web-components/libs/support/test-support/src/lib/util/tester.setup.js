import { By, Key, Builder } from 'selenium-webdriver';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { testerConfig } from './tester.config.js';

// TODO: hoe wordt dit gebruikt ? hoe te exporteren ?

chai.use(chaiAsPromised);
chai.config.includeStack = true; // turn on stack trace

let driver;

before((done) => {
    if (testerConfig.gridEnabled) {
        driver = new Builder().usingServer(testerConfig.gridUrl).forBrowser(testerConfig.browserName).build();
    } else {
        driver = new Builder().forBrowser(testerConfig.browserName).build();
    }
    done();
});

after((done) => {
    try {
        driver.close().then(() => {
            done();
        });
    } catch (e) {
        process.exit();
    }
});

const getDriver = () => driver;
const { assert } = chai;

export { By, Key, assert, getDriver };

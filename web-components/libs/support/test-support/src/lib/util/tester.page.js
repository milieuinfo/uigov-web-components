import axeBuilder from 'axe-webdriverjs';

export class Page {
    constructor(driver) {
        this.driver = driver;
    }

    async load(url) {
        await this.driver.get(url);
        await this.driver.manage().window().maximize();
    }

    async hasWcagIssues() {
        const report = await axeBuilder(this.driver).analyze();
        const {violations} = report;
        if (violations && violations.length > 0) {
            violations.map((violation, index) => console.error(`WCAG issue ${index}: ${violation.description}`));
            return true;
        }
        return false;
    }
}

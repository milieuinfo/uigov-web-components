import { VlElementTester } from '../../base/vl-element.tester';

class VlTitleTester extends VlElementTester {
    async isSansFont() {
        return this.hasAttribute('sans');
    }

    async hasBorder() {
        return this.hasAttribute('has-border');
    }

    async isAlt() {
        return this.hasAttribute('alt');
    }

    async hasNoSpaceBottom() {
        return this.hasAttribute('no-space-bottom');
    }

    async isH(headerNumber) {
        return (await this.getTagName()) === `h${headerNumber}`;
    }
}

export class VlH1Tester extends VlTitleTester {}
export class VlH2Tester extends VlTitleTester {}
export class VlH3Tester extends VlTitleTester {}
export class VlH4Tester extends VlTitleTester {}
export class VlH5Tester extends VlTitleTester {}
export class VlH6Tester extends VlTitleTester {}

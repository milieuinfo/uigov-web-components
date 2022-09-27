import { VlElementTester } from '../../base/vl-element.tester';

export class VlIconTester extends VlElementTester {
    constructor(driver, selector) {
        super(driver, selector);
    }

    get _iconPrefix() {
        return 'vl-vi-';
    }

    async getType() {
        const classList = await this.getClassList();
        return classList.find((clazz) => clazz.startsWith(this._iconPrefix)).substring(this._iconPrefix.length);
    }

    async isBefore() {
        return this.hasAttribute('before');
    }

    async isAfter() {
        return this.hasAttribute('after');
    }

    async getSize() {
        return this.getAttribute('size');
    }

    async isSmallSize() {
        return (await this.getSize()) === 'small';
    }

    async isLargeSize() {
        return (await this.getSize()) === 'large';
    }

    async isLight() {
        return this.hasAttribute('light');
    }

    async is90Degrees() {
        return this.hasAttribute('90deg');
    }

    async is180Degrees() {
        return this.hasAttribute('180deg');
    }
}

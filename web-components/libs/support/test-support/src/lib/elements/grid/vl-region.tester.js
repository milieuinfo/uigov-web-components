import { VlElementTester } from '../../base/vl-element.tester';

export class VlRegionTester extends VlElementTester {
    async hasNoSpace() {
        return this._hasClass('no-space');
    }

    async hasNoSpaceBottom() {
        return this._hasClass('no-space-bottom');
    }

    async hasNoSpaceTop() {
        return this._hasClass('no-space-top');
    }

    async isAlt() {
        return this._hasClass('alt');
    }

    async isOverlap() {
        return this._hasClass('overlap');
    }

    async isSmall() {
        return this._hasClass('small');
    }

    async isMedium() {
        return this._hasClass('medium');
    }

    async hasBorder() {
        return this._hasClass('bordered');
    }

    async _hasClass(name) {
        return this.hasClass(`${this._classPrefix}${name}`);
    }

    get _classPrefix() {
        return 'vl-region--';
    }
}

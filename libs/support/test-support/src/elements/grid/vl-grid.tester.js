import { VlElementTester } from '../../base/vl-element.tester';

export class VlGridTester extends VlElementTester {
    async isStacked() {
        return this._hasClass('is-stacked');
    }

    async isStackedLarge() {
        return this._hasClass('is-stacked-large');
    }

    async isStackedSmall() {
        return this._hasClass('is-stacked-small');
    }

    async isHorizontallyStartAligned() {
        return this._hasClass('align-start');
    }

    async isHorizontallyCenterAligned() {
        return this._hasClass('align-center');
    }

    async isHorizontallyEndAligned() {
        return this._hasClass('align-end');
    }

    async isHorizontallyAlignedWithSpaceBetween() {
        return this._hasClass('align-space-between');
    }

    async isHorizontallyAlignedWithSpaceAround() {
        return this._hasClass('align-space-around');
    }

    async isVerticallyTopAligned() {
        return this._hasClass('v-top');
    }

    async isVerticallyCenterAligned() {
        return this._hasClass('v-center');
    }

    async isVerticallyBottomAligned() {
        return this._hasClass('v-bottom');
    }

    async isVerticallyStretched() {
        return this._hasClass('v-stretch');
    }

    async _hasClass(name) {
        return this.hasClass(`${this._classPrefix}${name}`);
    }

    get _classPrefix() {
        return 'vl-grid--';
    }
}

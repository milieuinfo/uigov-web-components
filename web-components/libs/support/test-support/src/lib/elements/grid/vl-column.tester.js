import { VlElementTester } from '../../base/vl-element.tester';

export class VlColumnTester extends VlElementTester {
    async getSize() {
        return this._getMinSize();
    }

    async getMaxSize() {
        return this._getMaxSize();
    }

    async getMediumSize() {
        return this._getMinSize('m');
    }

    async getMediumMaxSize() {
        return this._getMaxSize('m');
    }

    async getSmallSize() {
        return this._getMinSize('s');
    }

    async getSmallMaxSize() {
        return this._getMaxSize('s');
    }

    async getExtraSmallSize() {
        return this._getMinSize('xs');
    }

    async getExtraSmallMaxSize() {
        return this._getMaxSize('xs');
    }

    async getPush() {
        const pushMatcher = new RegExp(`${this._pushClassPrefix}(\\d+)-\\d+`);
        const [pushSize] = await this._parseMatchingClass(pushMatcher);
        return pushSize;
    }

    async _getMinSize(responsiveModifier) {
        const size = await this._getSize(responsiveModifier);
        if (size) {
            return size.min;
        }
    }

    async _getMaxSize(responsiveModifier) {
        const size = await this._getSize(responsiveModifier);
        if (size) {
            return size.max;
        }
    }

    async _getSize(responsiveModifier) {
        const sizeMatcher = new RegExp(
            `^${this._columnClassPrefix}(\\d+)-(\\d+)${this.__responsiveModifierClassPostfix(responsiveModifier)}$`
        );
        const [min, max] = await this._parseMatchingClass(sizeMatcher);
        return { min: min, max: max };
    }

    __responsiveModifierClassPostfix(responsiveModifier) {
        return responsiveModifier ? `--${responsiveModifier}` : '';
    }

    async _parseMatchingClass(classMatcher) {
        const clazz = await this._getFirstMatchingClass(classMatcher.test.bind(classMatcher));
        const result = classMatcher.exec(clazz) || [];
        return result.slice(1);
    }

    async _getFirstMatchingClass(matcher) {
        const classes = await this._getClasses(matcher);
        if (classes && classes.length > 0) {
            return classes[0];
        }
    }

    async _getClasses(matcher) {
        const classes = await this.getClassList();
        return classes.filter(matcher);
    }

    get _columnClassPrefix() {
        return 'vl-col--';
    }

    get _pushClassPrefix() {
        return 'vl-push--';
    }
}

import { VlElementTester } from '../../../base/vl-element.tester';

export class VlMapLayerStyleTester extends VlElementTester {
    async getColor() {
        return this.getAttribute('color');
    }

    async getBorderColor() {
        return this.getAttribute('border-color');
    }

    async getBorderSize() {
        return this.getAttribute('border-size');
    }

    async getTextColor() {
        return this.getAttribute('text-color');
    }

    async getTextBackgroundColor() {
        return this.getAttribute('text-background-color');
    }

    async getTextSize() {
        return this.getAttribute('text-size');
    }

    async getTextBorderColor() {
        return this.getAttribute('text-border-color');
    }

    async getTextBorderSize() {
        return this.getAttribute('text-border-size');
    }

    async getTextFeatureAttributeName() {
        return this.getAttribute('text-feature-attribute-name');
    }

    async getTextOffsetX() {
        return this.getAttribute('text-offset-x');
    }

    async getTextOffsetY() {
        return this.getAttribute('text-offset-y');
    }
}

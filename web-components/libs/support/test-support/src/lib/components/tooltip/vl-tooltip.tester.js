import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlTooltipTester extends VlElementTester {
    async _getPlacement() {
        return this.getAttribute('placement');
    }

    async _isPlacement(position) {
        return (await this._getPlacement()) === position;
    }

    async isStatic() {
        return this.hasAttribute('static');
    }

    async isTop() {
        return this._isPlacement('top');
    }

    async isRight() {
        return this._isPlacement('right');
    }

    async isBottom() {
        return this._isPlacement('bottom');
    }

    async isLeft() {
        return this._isPlacement('left');
    }

    async isLargeTooltip() {
        const tooltip = await this._getTooltipElement();

        return tooltip.hasClass('vl-tooltip--large');
    }

    async isDisplayed() {
        if (await this.isStatic()) {
            return super.isDisplayed();
        } else {
            const tooltip = await this._getTooltipElement();
            if (tooltip) {
                return tooltip.isDisplayed();
            } else {
                return false;
            }
        }
    }

    async _getTooltipId() {
        const parent = await this.parent();
        return parent.getAttribute('aria-describedby');
    }

    async _getTooltipElement() {
        const tooltipId = await this._getTooltipId();
        const parent = await this.parent();
        const parentParent = await parent.parent();

        try {
            const tooltip = await parentParent.findElement(By.css(`#${tooltipId}`));
            return new VlElementTester(this.driver, tooltip);
        } catch {
            return undefined;
        }
    }
}

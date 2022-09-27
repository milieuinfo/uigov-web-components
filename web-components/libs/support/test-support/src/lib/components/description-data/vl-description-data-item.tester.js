import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlDescriptionDataItemTester extends VlElementTester {
    async getLabel() {
        return (await this._getLabel()).getText();
    }

    async getValue() {
        return (await this._getValue()).getText();
    }

    async getSlotLabel() {
        return (await this._getSlotLabel()).getText();
    }

    async getSlotValue() {
        return (await this._getSlotValue()).getText();
    }

    async _getLabel() {
        return this.getElementInShadow(this, '.vl-description-data__label');
    }

    async _getValue() {
        return this.getElementInShadow(this, '.vl-description-data__value');
    }

    async _getSlotLabel() {
        return this.findElement(By.css('[slot=label]'));
    }

    async _getSlotValue() {
        return this.findElement(By.css('[slot=value]'));
    }
}

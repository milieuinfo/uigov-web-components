import { By } from '../../util/tester.setup';
import { VlSelectOptionTester } from './vl-select-option.tester';

export class VlSelectOptionGroupTester {
    constructor(groupItem = {}, dressed = false, options = []) {
        this.groupItem = groupItem;
        this._options = options;
        this.dressed = dressed;
    }

    async getLabel() {
        if (this.dressed) {
            const heading = await this.groupItem.findElement(By.css('.vl-select__heading'));
            const textContent = await heading.getAttribute('textContent');
            return textContent.trim();
        } else {
            return this.groupItem.getAttribute('label');
        }
    }

    get options() {
        return this._options.map((option) => {
            return new VlSelectOptionTester(option, this.dressed);
        });
    }
}

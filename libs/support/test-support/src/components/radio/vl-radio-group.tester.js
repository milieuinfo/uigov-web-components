import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlRadioTester } from './vl-radio.tester';

export class VlRadioGroupTester extends VlElementTester {
    async getRadios() {
        const elements = await this.findElements(By.css('vl-radio'));
        return Promise.all(elements.map((element) => new VlRadioTester(this.driver, element)));
    }

    async getRadio(number) {
        return this._getRadio(number);
    }

    async hasFocus() {
        const radios = await this.getRadios();
        const radiosFocus = await Promise.all(radios.map((radio) => radio.hasFocus()));
        return radiosFocus.includes(true);
    }

    async _getRadio(number) {
        const id = await this.getAttribute('id');
        const element = await this.findElement(By.css(`#${id}-radio-${number}`));
        return new VlRadioTester(this.driver, element);
    }
}

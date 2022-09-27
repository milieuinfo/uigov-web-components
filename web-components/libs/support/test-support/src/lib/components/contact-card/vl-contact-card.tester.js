import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlInfoblockTester } from '../infoblock/vl-infoblock.tester';
import { VlPropertiesTester } from '../../elements/properties/vl-properties.tester';

export class VlContactCardTester extends VlElementTester {
    async getInfoblockElement() {
        return new VlInfoblockTester(this.driver, await this._getSlotElement('info'));
    }

    async getPropertiesElement() {
        return new VlPropertiesTester(this.driver, await this._getSlotElement('properties'));
    }

    async _getSlotElement(name) {
        const slot = await this.shadowRoot.findElement(By.css(`slot[name="${name}"]`));
        const elements = await this.getAssignedElements(slot);
        return elements[0];
    }
}

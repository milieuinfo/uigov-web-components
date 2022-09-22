import { VlElementTester } from '../../../base/vl-element.tester';
import { VlCheckboxTester } from '../../../components/checkbox/vl-checkbox.tester';
import { By } from '../../../util/tester.setup';

export class VlMapLayerSwitcherTester extends VlElementTester {
    async getCheckboxForLayer(name) {
        const element = await this.findElement(By.css(`[data-vl-layer="${name}"]`));
        return new VlCheckboxTester(this.driver, element);
    }

    async getCheckboxes() {
        const elements = await this.findElements(By.css(`[data-vl-layer]`));
        return Promise.all(elements.map((element) => new VlCheckboxTester(this.driver, element)));
    }
}

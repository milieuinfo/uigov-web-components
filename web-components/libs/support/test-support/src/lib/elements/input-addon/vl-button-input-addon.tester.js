import { By } from '../../util/tester.setup';
import { VlInputAddonTester } from './vl-input-addon.tester';
import { VlIconTester } from '../icon/vl-icon.tester';

export class VlButtonInputAddonTester extends VlInputAddonTester {
    async getIcon() {
        const icon = await this.findElement(By.css(this.selector + ' [is="vl-icon"]'));
        if (icon) {
            return new VlIconTester(this.driver, icon);
        }
    }
}

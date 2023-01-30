import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlInfotextTester extends VlElementTester {
    async getValue() {
        return this.findElement(By.css('div[data-vl-value]'));
    }

    async getText() {
        return this.findElement(By.css('div[data-vl-text]'));
    }

    async isBadge() {
        const childrenWithBadgeClass = await this.findElements(By.css('.vl-infotext--badge'));
        return childrenWithBadgeClass.length > 0;
    }
}

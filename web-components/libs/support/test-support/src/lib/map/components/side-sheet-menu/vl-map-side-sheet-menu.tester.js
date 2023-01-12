import { By } from '../../../util/tester.setup';
import { VlElementTester } from '../../../base/vl-element.tester';
import { VlMapSideSheetMenuItemTester } from '../side-sheet-menu-item/vl-map-side-sheet-menu-item.tester';

export class VlMapSideSheetMenuTester extends VlElementTester {
    async getMenuItem(number) {
        const menuItems = await this.getMenuItems();
        return menuItems[--number];
    }

    async getMenuItems() {
        const menuItems = await this.findElements(By.css('vl-map-side-sheet-menu-item'));
        return Promise.all(menuItems.map((menuItem) => new VlMapSideSheetMenuItemTester(this.driver, menuItem)));
    }
}

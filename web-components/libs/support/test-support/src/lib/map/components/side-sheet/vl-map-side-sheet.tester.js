import { VlSideSheetTester } from '../../../components/side-sheet/vl-side-sheet.tester';
import { VlMapSideSheetMenuTester } from '../side-sheet-menu/vl-map-side-sheet-menu.tester';
import { By } from '../../../util/tester.setup';

export class VlMapSideSheetTester extends VlSideSheetTester {
    async getMenu() {
        const menu = await this.findElement(By.css('vl-map-side-sheet-menu'));
        return new VlMapSideSheetMenuTester(this.driver, menu);
    }
}

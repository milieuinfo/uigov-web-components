import { VlElementTester } from '../../base/vl-element.tester';

export class VlSideNavigationToggle extends VlElementTester {
    async isActive() {
        return this.hasClass('js-vl-scrollspy-active');
    }
}

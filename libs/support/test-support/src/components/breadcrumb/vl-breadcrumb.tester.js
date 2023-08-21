import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlBreadcrumbTester extends VlElementTester {
    async getLink(number) {
        const links = await this.getLinks();
        return links[number - 1];
    }

    async getLinks() {
        const links = await this.findElements(By.css('vl-breadcrumb-item'));
        return Promise.all(links.map((link) => new VlElementTester(this.driver, link)));
    }
}

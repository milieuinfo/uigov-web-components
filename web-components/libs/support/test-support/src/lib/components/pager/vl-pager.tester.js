import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export default class VlPagerTester extends VlElementTester {
    async isAlignedCenter() {
        return this.hasAttribute('align-center');
    }

    async isAlignedRight() {
        return this.hasAttribute('align-right');
    }

    async isAlignedLeft() {
        const isAlignedCenter = await this.isAlignedCenter();
        const isAlignedRight = await this.isAlignedRight();
        return !isAlignedCenter && !isAlignedRight;
    }

    async isPaginationDisabled() {
        return this.hasAttribute('pagination-disabled');
    }

    async getTotalItems() {
        const bounds = await this._getBounds();
        return bounds.totalItems;
    }

    async _getBounds() {
        const bounds = await this.shadowRoot.findElement(By.css('#bounds'));
        const text = await bounds.getText();
        const regExp = /(\d+)-(\d+) van (\d+)/;
        const result = regExp.exec(text);
        return {
            minimum: result[1],
            maximum: result[2],
            totalItems: result[3],
        };
    }

    async getCurrentPage() {
        const label = await this.shadowRoot.findElement(By.css('[data-vl-pager-page] label'));
        return label.getText();
    }

    async getItemsPerPage() {
        const range = await this.getRange();
        return range.maximum - range.minimum + 1;
    }

    async getRange() {
        const bounds = await this._getBounds();
        return {
            minimum: bounds.minimum,
            maximum: bounds.maximum,
        };
    }

    async goToNextPage() {
        const volgendeLink = await this._pageForwardLink();
        return volgendeLink.click();
    }

    async goToPreviousPage() {
        const vorigeLink = await this._pageBackLink();
        return vorigeLink.click();
    }

    async goToFirstPage() {
        if ((await this.getCurrentPage()) != 1) {
            return this.goToPage(1);
        }
    }

    async goToLastPage() {
        const number = Math.ceil((await this.getTotalItems()) / (await this.getItemsPerPage()));
        return this.goToPage(number);
    }

    async goToPage(number) {
        if ((await this.getCurrentPage) != number) {
            await this._navigateUntilPagenumberIsVisible(number);
            const page = await this._getPageLink(number);
            return page.click();
        }
    }

    async isPageBackDisplayed() {
        return (await this._pageBackLink()).isDisplayed();
    }

    async isPageNextDisplayed() {
        return (await this._pageForwardLink()).isDisplayed();
    }

    async _navigateUntilPagenumberIsVisible(pageNumber) {
        if (!(await this._isPageNumberVisible(pageNumber))) {
            await this.goToNextPage();
            return await this._navigateUntilPagenumberIsVisible(pageNumber);
        }
    }

    async _isPageNumberVisible(pageNumber) {
        const visiblePageLinks = await this._getAllVisiblePageLinks();
        for (const visiblePageLink of visiblePageLinks) {
            const visiblePageNumber = await visiblePageLink.getText();
            if (visiblePageNumber == pageNumber) {
                return true;
            }
        }
        return false;
    }

    async _getPageLink(number) {
        return this.shadowRoot.findElement(By.css(`[data-vl-pager-page="${number}"] a`));
    }

    async _getAllVisiblePageLinks() {
        return this.shadowRoot.findElements(By.css('[data-vl-pager-page] a'));
    }

    async _getAllVisiblePageNumbers() {
        return this.shadowRoot.findElements(By.css('[data-vl-pager-page]'));
    }

    async _pageForwardLink() {
        return this.shadowRoot.findElement(By.css('#page-forward-link'));
    }

    async _pageBackLink() {
        return this.shadowRoot.findElement(By.css('#page-back-link'));
    }

    async reset() {
        return this.goToFirstPage();
    }
}

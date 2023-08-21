import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';

export class VlAutocompleteTester extends VlElementTester {
    async getPlaceHolder() {
        const input = await this.getElementInShadow(this, 'input');
        return input.getAttribute('placeholder');
    }

    async _getInput() {
        const inputElement = await this.getElementInShadow(this, 'input');
        return new VlElementTester(this.driver, inputElement);
    }

    async getValue() {
        const inputVlElement = await this._getInput();
        return inputVlElement.getAttribute('value');
    }

    async getLabel() {
        const input = await this.getElementInShadow(this, 'label');
        return input.getText();
    }

    async assertHasClearIcon() {
        await this.waitUntilShadowDomElementsCount(this, '.uig-autocomplete__clear', 1);
    }

    async assertHasNoClearIcon() {
        await this.waitUntilShadowDomElementsCount(this, '.uig-autocomplete__clear', 0);
    }

    async clickOnClearIcon() {
        const element = await this._getClearIcon();
        await element.click();
    }

    async _getClearIcon() {
        const element = await this.getElementInShadow(this, '.uig-autocomplete__clear');
        return new VlElementTester(this.driver, element);
    }

    async isDisabled() {
        return this.hasAttribute('disabled');
    }

    async setInputValue(value) {
        const input = await this.getElementInShadow(this, 'input');

        const actions = this.driver.actions();
        await actions.click(input).sendKeys(value).perform();

        await this.driver.sleep(1000);
    }

    async assertSuggestionsCount(count) {
        await this.waitUntilShadowDomElementsCount(this, `ul.vl-autocomplete__list li.uig-autocomplete-item`, count);
    }

    async getSuggestions() {
        await this.waitUntilShadowDomElementLocated(this, 'div.vl-autocomplete:not([hidden])');
        const list = await this.findShadowDomElements(this, `ul.vl-autocomplete__list li.uig-autocomplete-item`);
        const asyncItemInfos = [];
        list.forEach((e) => {
            asyncItemInfos.push(this.getItemInfo(e));
        });
        return Promise.all(asyncItemInfos).then((items) => items);
    }

    async getGroupInfos() {
        await this.waitUntilShadowDomElementLocated(this, 'div.vl-autocomplete:not([hidden])');
        const list = await this.findShadowDomElements(this, `ul.vl-autocomplete__list li.uig-autocomplete-group`);
        return Promise.all(list.map(this.getGroupInfo)).then((g) => g);
    }

    async getGroupIndex(groupName) {
        const groups = await this.getGroupInfos();
        const group = groups.find((g) => g.name === groupName);
        return group.index;
    }

    async getGroupInfo(e) {
        const name = await e.getText();
        const index = await e.getAttribute('groupindex');

        return { name, index };
    }

    async getGroupNames() {
        const groups = await this.getGroupInfos();
        return groups.map((g) => g.name);
    }

    async getSuggestionsOfGroup(groupName) {
        const groupIndex = await this.getGroupIndex(groupName);
        await this.waitUntilShadowDomElementLocated(this, 'div.vl-autocomplete:not([hidden])');

        const list = await this.findShadowDomElements(
            this,
            `ul.vl-autocomplete__list li.uig-autocomplete-item[groupindex='${groupIndex}']`
        );

        const asyncItemInfos = [];
        list.forEach((e) => {
            asyncItemInfos.push(this.getItemInfo(e));
        });

        return Promise.all(asyncItemInfos).then((items) => items);
    }

    async getItemTitleInfo(e) {
        const title = await e.getText();

        return { title };
    }

    async getItemInfo(item) {
        const itemInfo = {};

        try {
            itemInfo.title = await this.getItemProperty(item, 'uig-autocomplete_title');
        } catch (e) {
            // title is optional, do nothing if item cannot be found
        }

        try {
            itemInfo.subtitle = await this.getItemProperty(item, 'uig-autocomplete_subtitle');
        } catch (e) {
            // subtitle is optional, do nothing if item cannot be found
        }

        try {
            itemInfo.value = await this.getItemProperty(item, 'uig-autocomplete_value');
        } catch (e) {
            // value is optional, do nothing if item cannot be found
        }

        return itemInfo;
    }

    async getItemProperty(item, propertyClassName) {
        const titleElement = await item.findElement(By.css(`span[class*='${propertyClassName}']`));
        return titleElement.getText();
    }
}

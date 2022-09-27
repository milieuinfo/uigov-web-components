import { By, Key } from '../../util/tester.setup';
import { VlSelectTester } from '../select/vl-select.tester';
import { VlMultiselectItemTester } from './vl-multiselect-item.tester';
import { VlMultiselectItemModel } from './vl-multiselect-item.model';
import { VlMultiselectPillTester } from './vl-multiselect-pill.tester';

export class VlMultiselectTester extends VlSelectTester {
    async _getRoot() {
        return this.findElement(By.xpath('../..'));
    }

    async _closeDropdown() {
        const body = await this.driver.findElement(By.css('body'));
        return body.sendKeys(Key.ESCAPE);
    }

    async _getInput() {
        const root = await this.findElement(By.xpath('..'));
        return root.findElement(By.css('input.vl-input-field'));
    }

    async _getItemList() {
        const root = await this._getRoot();
        return root.findElement(By.css('.vl-select__list > div'));
    }

    async _toItem(pillOrMultiselectItem) {
        const value = await pillOrMultiselectItem.value();
        const text = await pillOrMultiselectItem.text();
        const isSelected = await pillOrMultiselectItem.isSelected();
        return new VlMultiselectItemModel(value, text, isSelected, pillOrMultiselectItem);
    }

    async _getUnselectedItems() {
        const selectList = await this._getItemList();
        const items = await selectList.findElements(By.css('.vl-select__item'));
        return Promise.all(
            items.map(async (item) => {
                return new VlMultiselectItemTester(item);
            })
        );
    }

    async _getSelectedItems() {
        const root = await this._getRoot();
        const selectedItems = await root.findElements(By.css('.vl-pill'));
        return Promise.all(
            selectedItems.map(async (item) => {
                return new VlMultiselectPillTester(item);
            })
        );
    }

    async _enterSearchText(searchText) {
        const input = await this._getInput();
        return input.sendKeys(searchText);
    }

    async _values() {
        const listItem = await this.getAllItems();
        return Promise.all(listItem.map((item) => item.value));
    }

    async _hasPartialValue(value) {
        const values = await this._values();
        return !!values.find((v) => v.indexOf(value) > -1);
    }

    async getSelectedItems() {
        const pills = await this._getSelectedItems();
        return Promise.all(pills.map((pill) => this._toItem(pill)));
    }

    async getUnselectedItems() {
        const multiselectItems = await this._getUnselectedItems();
        return Promise.all(multiselectItems.map((multiselectItem) => this._toItem(multiselectItem)));
    }

    async getAllItems() {
        const unselectedItems = await this.getUnselectedItems();
        const selectedItems = await this.getSelectedItems();
        return unselectedItems.concat(selectedItems);
    }

    async select(item) {
        const multiselect = await new VlSelectTester(this.driver, this);
        await multiselect.selectByValue(item.value);
        return this._closeDropdown();
    }

    async unselect(item) {
        const pills = await this._getSelectedItems();
        const mappedPills = await Promise.all(
            pills.map(async (pill) => {
                const text = await pill.text();
                return { text: text, pill: pill };
            })
        );
        const filteredPills = mappedPills.find((p) => p.text === item.text);
        if (!filteredPills) {
            throw new Error('Item met text "' + item.text + '" kan niet gevonden worden!');
        }
        await filteredPills.pill.remove();
    }

    async searchByPartialText(text) {
        const hasPartialValue = await this._hasPartialValue(text);
        if (!hasPartialValue) {
            throw new Error('Waarde ' + text + ' niet gevonden in de dropdown!');
        }
        return this._enterSearchText(text);
    }

    async getNumberOfSearchResults() {
        const selectList = await this._getItemList();
        const searchResults = await selectList.findElements(By.css('div'));
        return searchResults.length;
    }

    async isError() {
        return this.hasAttribute('error');
    }

    async isSuccess() {
        return this.hasAttribute('success');
    }

    async isDisabled() {
        return this.hasAttribute('disabled');
    }

    async isGrouped() {
        const itemList = await this._getItemList();
        const selectGroups = await itemList.findElements(By.css('.vl-select__group'));
        return selectGroups.length > 0;
    }

    async hasHeadings() {
        const itemList = await this._getItemList();
        const headings = await itemList.findElements(By.css('.vl-select__heading'));
        return headings.length > 0;
    }
}

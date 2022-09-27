export class VlSelectOptionTester {
    constructor(optionItem = {}, dressed = false) {
        this.optionItem = optionItem;
        this.dressed = dressed;
    }

    click() {
        return this.optionItem.click();
    }

    async getValue() {
        if (this.dressed) {
            return this.optionItem.getAttribute('data-value');
        } else {
            return this.optionItem.getAttribute('value');
        }
    }

    async getLabel() {
        const textContent = await this.optionItem.getAttribute('textContent');
        return textContent.trim();
    }
}

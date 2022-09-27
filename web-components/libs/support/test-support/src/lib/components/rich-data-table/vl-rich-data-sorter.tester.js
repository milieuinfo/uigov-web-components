import { VlElementTester } from '../../base/vl-element.tester';
import { VlIconTester } from '../../elements/icon/vl-icon.tester';
import { By } from '../../util/tester.setup';

export class VlRichDataSorterTester extends VlElementTester {
    async isDescending() {
        return this._hasDirectionIcon('arrow-up');
    }

    async isAscending() {
        return this._hasDirectionIcon('arrow-down');
    }

    async isUnsorted() {
        const container = await this.shadowRoot;
        return container.hasClass('vl-u-visually-hidden');
    }

    async getPriority() {
        const priorityLabel = await this._getPriorityLabel();
        return priorityLabel.getText();
    }

    async _hasDirectionIcon(expectedIconType) {
        const iconType = await this._getDirectionIconType();
        return iconType === expectedIconType;
    }

    async _getDirectionIcon() {
        const element = await this.shadowRoot.findElement(By.css('#direction'));
        return new VlIconTester(this.driver, element);
    }

    async _getDirectionIconType() {
        const icon = await this._getDirectionIcon();
        return icon.getType();
    }

    async _getPriorityLabel() {
        return this.shadowRoot.findElement(By.css('#priority'));
    }
}

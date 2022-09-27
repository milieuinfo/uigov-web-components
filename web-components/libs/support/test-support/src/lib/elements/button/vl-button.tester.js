import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlIconTester } from '../icon/vl-icon.tester';

export class VlButtonTester extends VlElementTester {
    async getIcon() {
        const icon = await this.findElement(By.css('[is="vl-icon"]'));
        if (icon) {
            return new VlIconTester(this.driver, icon);
        }
    }

    async isError() {
        return this.hasAttribute('error');
    }

    async isBlock() {
        return this.hasAttribute('block');
    }

    async isLarge() {
        return this.hasAttribute('large');
    }

    async isWide() {
        return this.hasAttribute('wide');
    }

    async isNarrow() {
        return this.hasAttribute('narrow');
    }

    async isLoading() {
        return this.hasAttribute('loading');
    }

    async isSecondary() {
        return this.hasAttribute('secondary');
    }

    async isTertiary() {
        return this.hasAttribute('tertiary');
    }

    async hasIcon() {
        try {
            await this.getIcon();
            return true;
        } catch (e) {
            return false;
        }
    }
}

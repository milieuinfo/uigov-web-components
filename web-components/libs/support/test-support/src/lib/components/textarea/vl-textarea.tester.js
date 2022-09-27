import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { Key } from '../../util/tester.setup';
import { testerConfig } from '../../util/tester.config';
import { VlModalTester } from '../modal/vl-modal.tester';
import { getOS } from '../../util/tester.helper';

export class VlTextareaTester extends VlElementTester {
    async setValue(text) {
        await this.clear();
        await this.sendKeys(text);
    }

    async getValue() {
        const rich = await this.isRich();

        if (rich) {
            await this._switchToWysiwygiframe();
            const body = await this._wysiwygBodyElement();
            const html = await body.getAttribute('innerHTML');
            await this._switchToDefault();
            return html;
        }
        await this.driver.executeScript('arguments[0].editor && arguments[0].editor.save()', this);
        return this.getAttribute('value');
    }

    async getChild(selector, parent) {
        // Use for rich textarea
        let parentElement = parent;

        await this._switchToWysiwygiframe();
        if (!parent) {
            parentElement = await this._wysiwygBodyElement();
        }
        const childElement = await parentElement.findElement(By.css(selector));
        await this._switchToDefault();
        return childElement;
    }

    async getNthChild(nth, selector, parent) {
        // Use for rich textarea
        let parentElement = parent;
        await this._switchToWysiwygiframe();
        if (!parent) {
            parentElement = await this._wysiwygBodyElement();
        }
        const childElement = await parentElement.findElement(By.css(`${selector}:nth-of-type(${nth})`));
        await this._switchToDefault();
        return childElement;
    }

    async getChildValue(child) {
        // Use for rich textarea
        await this._switchToWysiwygiframe();
        const html = await child.getAttribute('innerHTML');
        await this._switchToDefault();
        return html;
    }

    async isBlock() {
        return this.hasAttribute('data-vl-block');
    }

    async isError() {
        return this.hasAttribute('data-vl-error');
    }

    async isSuccess() {
        return this.hasAttribute('data-vl-success');
    }

    async isDisabled() {
        return this.hasAttribute('disabled');
    }

    async isFocus() {
        return this.hasAttribute('data-vl-focus');
    }

    async isRich() {
        return this.hasAttribute('data-vl-rich');
    }

    async clear() {
        const rich = await this.isRich();
        if (rich) {
            await this._switchToWysiwygiframe();
            const body = await this._wysiwygBodyElement();
            await body.clear();
            await this._switchToDefault();
        } else {
            await super.clear();
        }
    }

    async sendKeys(text) {
        const rich = await this.isRich();
        if (rich) {
            await this._switchToWysiwygiframe();
            const body = await this._wysiwygBodyElement();
            testerConfig.browserName === 'chrome' || testerConfig.browserName === 'edge'
                ? await body.sendKeys('')
                : await body.click();
            await body.sendKeys(text);
            await this._switchToDefault();
        } else {
            await super.sendKeys(text);
        }
    }

    async copyPasteValue() {
        const os = await getOS(this.driver);
        const cmdCtrl = os === 'Windows' ? Key.CONTROL : Key.COMMAND;

        const rich = await this.isRich();
        if (rich) {
            await this._switchToWysiwygiframe();
            const body = await this._wysiwygBodyElement();
            testerConfig.browserName === 'chrome' ? await body.sendKeys('') : await body.click();

            const actions = this.driver.actions();

            await actions.keyDown(Key.SHIFT).sendKeys(Key.ARROW_UP).keyUp(Key.SHIFT).perform();
            if (os === 'Mac OS') {
                await actions.keyDown(Key.COMMAND).sendKeys('c').keyUp(Key.COMMAND).perform();
            } else if (os === 'Linux') {
                await actions
                    .keyDown(Key.CONTROL)
                    .keyDown(Key.SHIFT)
                    .sendKeys('c')
                    .keyUp(Key.CONTROL)
                    .keyUp(Key.SHIFT)
                    .perform();
            } else {
                await actions.keyDown(Key.CONTROL).sendKeys('c').keyUp(Key.CONTROL).perform();
            }
            await actions.sendKeys(Key.ARROW_RIGHT);
            if (os === 'Mac OS') {
                await actions.keyDown(Key.COMMAND).sendKeys('v').keyUp(Key.COMMAND).perform();
            } else if (os === 'Linux') {
                await actions
                    .keyDown(Key.CONTROL)
                    .keyDown(Key.SHIFT)
                    .sendKeys('v')
                    .keyUp(Key.CONTROL)
                    .keyUp(Key.SHIFT)
                    .perform();
            } else {
                await actions.keyDown(Key.CONTROL).sendKeys('v').keyUp(Key.CONTROL).perform();
            }

            await this._switchToDefault();
        } else {
            await this.sendKeys(Key.SHIFT, Key.ARROW_UP);
            await this.sendKeys(cmdCtrl, 'c');
            await this.sendKeys(Key.ARROW_RIGHT);
            await this.sendKeys(cmdCtrl, 'v');
        }
    }

    async selectValue() {
        const rich = await this.isRich();
        if (rich) {
            await this._switchToWysiwygiframe();
            const body = await this._wysiwygBodyElement();
            testerConfig.browserName === 'chrome' ? await body.sendKeys('') : await body.click();
            await body.sendKeys(Key.SHIFT, Key.ARROW_UP);
            await this._switchToDefault();
        } else {
            await this.sendKeys(Key.SHIFT, Key.ARROW_UP);
        }
    }

    async activateBold() {
        await this._activateToolbar('Bold');
    }

    async activateItalic() {
        await this._activateToolbar('Italic');
    }

    async activateUnderline() {
        await this._activateToolbar('Underline');
    }

    async activateH1() {
        await this._activateH(1);
    }

    async activateH2() {
        await this._activateH(2);
    }

    async activateH3() {
        await this._activateH(3);
    }

    async activateH4() {
        await this._activateH(4);
    }

    async activateH5() {
        await this._activateH(5);
    }

    async activateH6() {
        await this._activateH(6);
    }

    async activateStrikethrough() {
        await this._activateToolbar('Strikethrough');
    }

    async activateBlockquote() {
        await this._activateToolbar('Blockquote');
    }

    async addLink() {
        await this._clickToolbar('Link');
    }

    async addHorizontalLine() {
        await this._clickToolbar('Horizontal line');
    }

    async addNumberedList() {
        await this._clickToolbarList('Numbered list');
    }

    async addList() {
        await this._clickToolbarList('Bullet list');
    }

    async deactivateBold() {
        await this._deactivateToolbar('Bold');
    }

    async deactivateItalic() {
        await this._deactivateToolbar('Italic');
    }

    async deactivateUnderline() {
        await this._deactivateToolbar('Underline');
    }

    async deactivateStrikethrough() {
        await this._deactivateToolbar('Strikethrough');
    }

    async deactivateBlockquote() {
        await this._deactivateToolbar('Blockquote');
    }

    async getLinkToolbarModal() {
        const parent = await this._parentElement();
        const element = await parent.findElement(By.css('vl-textarea-modal'));
        return new VlModalTester(this.driver, element.shadowRoot);
    }

    async _parentElement() {
        return this.findElement(By.xpath('..'));
    }

    async _wysiwygElement() {
        const parent = await this._parentElement();
        return parent.findElement(By.css('.tox-tinymce'));
    }

    async _wysiwygToolbarButton(type) {
        const wysiwyg = await this._wysiwygElement();
        return wysiwyg.findElement(By.css(`button.tox-tbtn[aria-label="${type}"]`));
    }

    async _wysiwygToolbarListButton(type) {
        const wysiwyg = await this._wysiwygElement();
        return wysiwyg.findElement(By.css(`div.tox-split-button[aria-label="${type}"]`));
    }

    async _wysiwygBodyElement() {
        return this.driver.findElement(By.css('#tinymce'));
    }

    async _activateToolbar(type) {
        const button = await this._wysiwygToolbarButton(type);
        const active = await button.getAttribute('aria-pressed');
        if (active == 'false') {
            await button.click();
        }
    }

    async _activateH(number) {
        await this._activateToolbar(`Heading ${number}`);
    }

    async _clickToolbar(type) {
        const button = await this._wysiwygToolbarButton(type);
        await button.click();
    }

    async _clickToolbarList(type) {
        const button = await this._wysiwygToolbarListButton(type);
        await button.click();
    }

    async _deactivateToolbar(type) {
        const button = await this._wysiwygToolbarButton(type);
        const active = await button.getAttribute('aria-pressed');
        if (active == 'true') {
            await button.click();
        }
    }

    async _switchToWysiwygiframe() {
        const wysiwyg = await this._wysiwygElement();
        const iframe = await wysiwyg.findElement(By.css('iframe'));
        await this.driver.switchTo().frame(iframe);
    }

    async _switchToDefault() {
        await this.driver.switchTo().defaultContent();
    }
}

import { VlElementTester } from '../../base/vl-element.tester';
import { By } from '../../util/tester.setup';
import { VlInputFieldTester } from '../../elements/input-field/vl-input-field.tester';
import { VlMonthSelectTester } from './vl-month-select.tester';
import { VlYearInputTester } from './vl-year-input.tester';

export class VlDatepickerTester extends VlElementTester {
    async isOpen() {
        try {
            const flatpickr = await this._getFlatpicker();
            return flatpickr.hasClass('open');
        } catch (error) {
            return false;
        }
    }

    async open() {
        if (!(await this.isOpen())) {
            const button = await this._getToggleButton();
            await button.click();
        }
    }

    async close() {
        if (await this.isOpen()) {
            (await this._getToggleButton()).click();
        }
    }

    async setAm() {
        const meridian = await this._getMeridian();
        if (meridian === 'pm') {
            await this._toggleMeridian();
        }
    }

    async setPm() {
        const meridian = await this._getMeridian();
        if (meridian === 'am') {
            await this._toggleMeridian();
        }
    }

    async getInputValue() {
        const input = await this.shadowRoot.findElement(By.css('#input'));
        return input.getAttribute('value');
    }

    async getVisualisedValue() {
        const input = await this.shadowRoot.findElement(By.css('.js-vl-datepicker-input:not(#input)'));
        return input.getAttribute('value');
    }

    async selectHour(hour) {
        await this.open();
        const input = await new VlElementTester(this.driver, await this._getHourInput());
        await this._setValueInTicker(input, hour);
    }

    async selectMinutes(minutes) {
        await this.open();
        const input = await new VlElementTester(this.driver, await this._getMinuteInput());
        await this._setValueInTicker(input, minutes);
    }

    async selectDay(day) {
        await this.open();
        const dayElement = await this._getDayElementByText(day);
        await dayElement.click();
    }

    async selectRange(from, to) {
        await this.selectDay(from);
        await this.selectDay(to);
    }

    async selectMonth(month) {
        await this.open();
        const select = await this._getMonthSelect();
        await select.select(month);
    }

    async selectYear(year) {
        await this.open();
        const ticker = await this._getYearElement();
        await this._setValueInTicker(ticker, year);
    }

    async getIcon() {
        return this.shadowRoot.findElement(By.css('#icon'));
    }

    async getFormat() {
        return this.getAttribute('format');
    }

    async getMinDate() {
        return this.getAttribute('min-date');
    }

    async getMaxDate() {
        return this.getAttribute('max-date');
    }

    async getType() {
        return this.getAttribute('type');
    }

    async getVisualisationFormat() {
        return this.getAttribute('visual-format');
    }

    async isAmPmDatepicker() {
        return this.hasAttribute('am-pm');
    }

    async isError() {
        return this.hasAttribute('error');
    }

    async isSuccess() {
        return this.hasAttribute('success');
    }

    async getSelectedDay() {
        const element = await this._getSelectedDayElement();
        return element.getText();
    }

    async getSelectedMonth() {
        const element = await this._getMonthSelect();
        return element.value();
    }

    async getSelectedYear() {
        const element = await this._getYearInput();
        return element.value();
    }

    async setValue(value) {
        const input = await this._getInputElement();
        await input.setValue(value);
        await this.driver.executeScript(`arguments[0].dispatchEvent(new Event('change'))`, input);
    }

    async _getMonthSelect() {
        const select = await this.shadowRoot.findElement(By.css('select.flatpickr-monthDropdown-months'));
        return new VlMonthSelectTester(this.driver, select);
    }

    async _getYearInput() {
        const element = await this.shadowRoot.findElement(By.css('.numInput'));
        return new VlYearInputTester(this.driver, element);
    }

    async _getToggleButton() {
        return this.shadowRoot.findElement(By.css('#button'));
    }

    async _getFlatpicker() {
        return this.shadowRoot.findElement(By.css('.flatpickr-calendar'));
    }

    async _getSelectedDayElement() {
        return this.shadowRoot.findElement(By.css('.flatpickr-day.selected'));
    }

    async _getDayElements() {
        return this.shadowRoot.findElements(By.css('span.flatpickr-day:not(.prevMonthDay):not(.nextMonthDay)'));
    }

    async _getYearElement() {
        return this.shadowRoot.findElement(By.css('.cur-year'));
    }

    async _getMeridianElement() {
        return this.shadowRoot.findElement(By.css('.flatpickr-am-pm'));
    }

    async _getInputElement() {
        return new VlInputFieldTester(this.driver, await this.shadowRoot.findElement(By.id('input')));
    }

    async _getDayElementByText(text) {
        const dayElements = await this._getDayElements();
        const dayMap = await Promise.all(
            dayElements.map(async (dayElement) => {
                const text = await dayElement.getText();
                return {
                    text: text,
                    webElement: dayElement,
                };
            })
        );
        const match = dayMap.find((dayElement) => {
            return dayElement.text == text;
        });
        if (match) {
            return match.webElement;
        } else {
            throw new Error('Dag niet gevonden!');
        }
    }

    async _getHourInput() {
        return this.shadowRoot.findElement(By.css('input.flatpickr-hour'));
    }

    async _getMinuteInput() {
        return this.shadowRoot.findElement(By.css('input.flatpickr-minute'));
    }

    async _increase(ticker) {
        const tickerWrapper = await ticker.findElement(By.xpath('..'));
        await tickerWrapper.hover();
        const arrowUp = await tickerWrapper.findElement(By.css('span.arrowUp'));
        await arrowUp.click();
    }

    async _increaseWith(ticker, times) {
        for (let index = 0; index < times; index++) {
            await this._increase(ticker);
        }
    }

    async _decreaseWith(ticker, times) {
        for (let index = 0; index < times; index++) {
            await this._decrease(ticker);
        }
    }

    async _decrease(ticker) {
        const tickerWrapper = await ticker.findElement(By.xpath('..'));
        await tickerWrapper.hover();
        const arrowDown = await tickerWrapper.findElement(By.css('span.arrowDown'));
        await arrowDown.click();
    }

    async _calculateDifference(value, originalValue) {
        const difference = Math.floor(value - originalValue);
        return Math.abs(difference);
    }

    async _setValueInTicker(ticker, value) {
        const tickerStep = Number(await ticker.getAttribute('step')) || 1;
        const originalValue = Number(await ticker.getAttribute('value'));
        const difference = await this._calculateDifference(value, originalValue);
        const times = difference / tickerStep;
        if (value > originalValue) {
            await this._increaseWith(ticker, times);
        } else {
            await this._decreaseWith(ticker, times);
        }
    }

    async _getMeridian() {
        const element = await this._getMeridianElement();
        const meridian = await element.getText();
        return meridian.toLowerCase();
    }

    async _toggleMeridian() {
        const element = await this._getMeridianElement();
        await element.click();
    }
}

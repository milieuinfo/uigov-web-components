import { html, nothing } from 'lit';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { DatepickerDefaults, VlDatepickerComponent } from './vl-datepicker.component';
import { VlErrorMessageComponent } from '../error-message';

registerWebComponents([VlDatepickerComponent, VlErrorMessageComponent]);

// function that returns the current date in the format Y-m-d
const createDateString = ({
    selectedYear,
    selectedDay,
    selectedMonth,
    format,
}: {
    selectedYear?: number;
    selectedMonth?: number;
    selectedDay?: number;
    format?: 'Y-m-d' | 'd-m-Y' | 'd/m/Y';
}) => {
    const date = new Date();
    const year = selectedYear ? selectedYear : date.getFullYear();
    const month = selectedMonth ? selectedMonth : date.getMonth() + 1;
    const day = selectedDay ? selectedDay : date.getDate();
    // if day is less than 10, add a 0 in front of it
    const dayString = day < 10 ? `0${day}` : `${day}`;
    switch (format) {
        case 'Y-m-d':
            return `${year}-${month}-${dayString}`;
        case 'd-m-Y':
            return `${dayString}-${month}-${year}`;
        case 'd/m/Y':
            return `${dayString}/${month}/${year}`;
        default:
            return `${dayString}.${month}.${year}`;
    }
};

describe('story vl-datepicker', () => {
    it('should mount', () => {
        cy.mount(html`<vl-datepicker-next></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').shadow();
    });

    it('should be accessible', () => {
        cy.mount(
            html`
                <label id="label-for-date" for="date">Datum: </label>
                <vl-datepicker-next id="date" name="date" label="date"></vl-datepicker-next>
            `
        );

        cy.injectAxe();
        cy.checkA11y('vl-datepicker-next');
    });

    it('should open the datepicker on button click', () => {
        cy.mount(html`<vl-datepicker-next></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').shadow().find('button#button').click();
        cy.get('vl-datepicker-next').shadow().find('.flatpickr-calendar').should('be.visible');
    });

    it('should set id', () => {
        cy.mount(html`<vl-datepicker-next id="test-id"></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.id', 'test-id');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.id', 'test-id');
    });

    it('should set name', () => {
        cy.mount(html`<vl-datepicker-next name="test-name"></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.attr', 'name', 'test-name');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.attr', 'name', 'test-name');
    });

    it('should set label', () => {
        cy.mount(html`<vl-datepicker-next label="test-label"></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.attr', 'label', 'test-label');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.attr', 'aria-label', 'test-label');
    });

    it('should set block', () => {
        cy.mount(html`<vl-datepicker-next block></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.attr', 'block');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--block');
    });

    it('should set required', () => {
        cy.mount(html`<vl-datepicker-next required></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.attr', 'required');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.attr', 'required');
    });

    it('should set disabled', () => {
        cy.mount(html`<vl-datepicker-next disabled></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.attr', 'disabled');
        cy.get('vl-datepicker-next').should('be.disabled');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--disabled');
        cy.get('vl-datepicker-next').shadow().find('input').should('be.disabled');
    });

    it('should set readonly', () => {
        cy.mount(html`<vl-datepicker-next readonly></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.attr', 'readonly');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.attr', 'readonly');
    });

    it('should set error', () => {
        cy.mount(html`<vl-datepicker-next error></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.attr', 'error');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--error');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.attr', 'error');
    });

    it('should set success', () => {
        cy.mount(html`<vl-datepicker-next success></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.attr', 'success');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--success');
    });

    it('should set readonly', () => {
        cy.mount(html`<vl-datepicker-next readonly></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.attr', 'readonly');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.attr', 'readonly');
    });

    it('should set date in format', () => {
        const format = 'Y-m-d';
        cy.mount(html`<vl-datepicker-next format=${format}></vl-datepicker-next>`);

        const testDate = createDateString({ selectedDay: 15, format: format });
        cy.get('vl-datepicker-next').shadow().find('button#button').click();
        cy.get('vl-datepicker-next').shadow().find('.flatpickr-calendar').find('.flatpickr-day').contains('15').click();
        cy.get('vl-datepicker-next').should('have.value', testDate);
    });

    it('should set visual format', () => {
        const date = '01.11.2021';
        const visualFormattedDate = '01.11.2021';
        cy.mount(html`<vl-datepicker-next visual-format="Y-m-d" value=${date}></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').shadow().find('input').should('have.value', visualFormattedDate);
    });

    it('should set value in visual format', () => {
        const date = '01.11.2021';
        const formattedDate = createDateString({
            selectedDay: 1,
            selectedMonth: 11,
            selectedYear: 2021,
            format: 'Y-m-d',
        });
        cy.mount(html`<vl-datepicker-next visual-format="Y-m-d" value=${date}></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.attr', 'value', date);
        cy.get('vl-datepicker-next').shadow().find('input:not([type="hidden"])').should('have.value', formattedDate);
    });

    it('should set selected date', () => {
        const date = '01.11.2021';
        cy.mount(html`<vl-datepicker-next selected-date=${date}></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.value', date);
    });

    it('should set min date', () => {
        const minDate = createDateString({ selectedDay: 15 });
        cy.mount(html`<vl-datepicker-next min-date=${minDate}></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').shadow().find('button#button').click();
        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('span.flatpickr-day')
            .contains('14')
            .and('contain.class', 'flatpickr-disabled');
    });

    it('should set max date', () => {
        const maxDate = createDateString({ selectedDay: 20 });
        cy.mount(html`<vl-datepicker-next max-date=${maxDate}></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').shadow().find('button#button').click();
        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.flatpickr-day')
            .contains('21')
            .and('contain.class', 'flatpickr-disabled');
    });

    it('should set min time', () => {
        const minTime = '09:15';
        cy.mount(html`<vl-datepicker-next type="time" min-time=${minTime}></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').shadow().find('button#button').click();
        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-hour')
            .should('have.value', '09');

        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-minute')
            .should('have.value', '15');

        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-minute + .arrowUp')
            .click();

        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-minute')
            .should('have.value', '20');

        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-minute + .arrowUp + .arrowDown')
            .click()
            .click()
            .click();

        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-minute')
            .should('have.value', '15');
    });

    it('should set max time', () => {
        const maxTime = '16:45';
        cy.mount(html`<vl-datepicker-next type="time" max-time=${maxTime}></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').shadow().find('button#button').click();

        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-hour')
            .should('have.value', '16');
        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-minute')
            .should('have.value', '45');

        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-minute + .arrowUp')
            .click();

        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-minute')
            .should('have.value', '45');

        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-minute + .arrowUp + .arrowDown')
            .click();

        cy.get('vl-datepicker-next')
            .shadow()
            .find('.flatpickr-calendar')
            .find('.numInput.flatpickr-minute')
            .should('have.value', '40');
    });
});

const mountDatepickerInForm = ({ selectedDate, block, required }: typeof DatepickerDefaults) => {
    cy.mount(html`
        <div class="container">
            <form id="form" class="vl-form">
                <div class="vl-form-grid vl-form-grid--is-stacked">
                    <div class="vl-col--3-12">
                        <label class="vl-form__label vl-form__label--block" for="geboortedatum">
                            Geboortedatum: *
                        </label>
                    </div>
                    <div class="vl-col--9-12">
                        <vl-datepicker-next
                            id="geboortedatum"
                            name="geboortedatum"
                            ?block=${block}
                            ?required=${required}
                            selected-date=${selectedDate || nothing}
                        >
                        </vl-datepicker-next>
                        <vl-error-message-next input="geboortedatum" state="valueMissing">
                            Gelieve een geboortedatum in te vullen.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-col--9-12 vl-push--3-12">
                        <div class="vl-action-group">
                            <button class="vl-button" type="submit">Verstuur</button>
                            <button class="vl-button" type="reset">Reset</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `);
};

describe('story vl-datepicker in form', () => {
    it.skip('should reset datepicker', () => {
        mountDatepickerInForm({ ...DatepickerDefaults, block: true });

        cy.get('vl-datepicker-next').shadow();

        // test that should check if the datepicker is reset to the initial value
        cy.get('vl-datepicker-next').should('have.value', '');

        cy.get('vl-datepicker-next').invoke('attr', 'value', '21.12.2023');
        cy.get('vl-datepicker-next').should('have.value', '21.12.2023');

        cy.get('button[type="reset"]').click();
        cy.get('vl-datepicker-next').should('have.value', '');
    });

    it('should reset datepicker with initial value', () => {
        const initialValue = '02.12.2023';
        mountDatepickerInForm({ ...DatepickerDefaults, selectedDate: initialValue, block: true });

        cy.get('vl-datepicker-next').shadow();

        cy.get('vl-datepicker-next').should('have.value', initialValue);

        cy.get('vl-datepicker-next').invoke('attr', 'value', '21.12.2023');
        cy.get('vl-datepicker-next').should('have.value', '21.12.2023');

        cy.get('button[type="reset"]').click();
        cy.get('vl-datepicker-next').should('have.value', initialValue);
    });
});

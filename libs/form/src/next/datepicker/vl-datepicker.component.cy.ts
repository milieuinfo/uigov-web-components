import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlErrorMessageComponent } from '../error-message';
import { VlDatepickerComponent, datepickerDefaults } from './vl-datepicker.component';
import { html, nothing } from 'lit';

registerWebComponents([VlDatepickerComponent, VlErrorMessageComponent]);

/**
 * Deze functie maakt een datumstring aan in het formaat Y-m-d, d-m-Y of d/m/Y.
 * @param selectedYear
 * @param selectedDay
 * @param selectedMonth
 * @param format
 */
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
    // als de dag kleiner is dan 10, voeg een 0 toe voor de dag
    const dayString = day < 10 ? `0${day}` : `${day}`;
    const monthString = month < 10 ? `0${month}` : `${month}`;

    switch (format) {
        case 'Y-m-d':
            return `${year}-${monthString}-${dayString}`;
        case 'd-m-Y':
            return `${dayString}-${monthString}-${year}`;
        case 'd/m/Y':
            return `${dayString}/${monthString}/${year}`;
        default:
            return `${dayString}.${monthString}.${year}`;
    }
};

describe('component - vl-datepicker-next', () => {
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

        cy.get('vl-datepicker-next').shadow().find('button#toggle-calendar').click();
        cy.get('vl-datepicker-next').shadow().find('.flatpickr-calendar').should('be.visible');
    });

    it('should set id', () => {
        cy.mount(html`<vl-datepicker-next id="test-id"></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').should('have.id', 'test-id');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.id', 'test-id');
    });

    it('should set name', () => {
        cy.mount(html`<vl-datepicker-next name="test-name" label="geboortedatum"></vl-datepicker-next>`);
        cy.injectAxe();

        cy.get('vl-datepicker-next').should('have.attr', 'name', 'test-name');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.attr', 'name', 'test-name');
        cy.checkA11y('vl-datepicker-next');
    });

    it('should set label', () => {
        cy.mount(html`<vl-datepicker-next label="test-label"></vl-datepicker-next>`);
        cy.injectAxe();

        cy.get('vl-datepicker-next').should('have.attr', 'label', 'test-label');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.attr', 'aria-label', 'test-label');
        cy.checkA11y('vl-datepicker-next');
    });

    it('should set block', () => {
        cy.mount(html`<vl-datepicker-next block label="geboortedatum"></vl-datepicker-next>`);
        cy.injectAxe();

        cy.get('vl-datepicker-next').should('have.attr', 'block');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--block');
        cy.checkA11y('vl-datepicker-next');
    });

    it('should set required', () => {
        cy.mount(html`<vl-datepicker-next required label="geboortedatum"></vl-datepicker-next>`);
        cy.injectAxe();

        cy.get('vl-datepicker-next').should('have.attr', 'required');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.attr', 'required');
        cy.checkA11y('vl-datepicker-next');
    });

    it('should set disabled', () => {
        cy.mount(html`<vl-datepicker-next disabled label="geboortedatum"></vl-datepicker-next>`);
        cy.injectAxe();

        cy.get('vl-datepicker-next').should('have.attr', 'disabled');
        cy.get('vl-datepicker-next').should('be.disabled');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--disabled');
        cy.get('vl-datepicker-next').shadow().find('input').should('be.disabled');
        cy.checkA11y('vl-datepicker-next');
    });

    it('should set readonly', () => {
        cy.mount(html`<vl-datepicker-next readonly label="geboortedatum"></vl-datepicker-next>`);
        cy.injectAxe();

        cy.get('vl-datepicker-next').should('have.attr', 'readonly');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.attr', 'readonly');
        cy.checkA11y('vl-datepicker-next');
    });

    it('should set error', () => {
        cy.mount(html`<vl-datepicker-next error label="geboortedatum"></vl-datepicker-next>`);
        cy.injectAxe();

        cy.get('vl-datepicker-next').should('have.attr', 'error');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--error');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.attr', 'error');
        cy.checkA11y('vl-datepicker-next');
    });

    it('should set success', () => {
        cy.mount(html`<vl-datepicker-next success label="geboortedatum"></vl-datepicker-next>`);
        cy.injectAxe();

        cy.get('vl-datepicker-next').should('have.attr', 'success');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--success');
        cy.checkA11y('vl-datepicker-next');
    });

    it('should set date in format', () => {
        const format = 'Y-m-d';
        cy.mount(html`<vl-datepicker-next format=${format}></vl-datepicker-next>`);

        const testDate = createDateString({ selectedDay: 15, format: format });
        cy.get('vl-datepicker-next').shadow().find('button#toggle-calendar').click();
        cy.get('vl-datepicker-next').shadow().find('.flatpickr-calendar').find('.flatpickr-day').contains('15').click();
        cy.get('vl-datepicker-next').should('have.value', testDate);
    });

    it('should set prefilled date', () => {
        const date = '01.11.2021';
        cy.mount(html`<vl-datepicker-next value=${date} label="startdatum"></vl-datepicker-next>`);
        cy.injectAxe();

        cy.get('vl-datepicker-next').should('have.value', date);
        cy.checkA11y('vl-datepicker-next');
    });

    it('should set min date', () => {
        const minDate = createDateString({ selectedDay: 15 });
        cy.mount(html`<vl-datepicker-next min-date=${minDate}></vl-datepicker-next>`);

        cy.get('vl-datepicker-next').shadow().find('button#toggle-calendar').click();
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

        cy.get('vl-datepicker-next').shadow().find('button#toggle-calendar').click();
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

        cy.get('vl-datepicker-next').shadow().find('button#toggle-calendar').click();
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

        cy.get('vl-datepicker-next').shadow().find('button#toggle-calendar').click();

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

    it('should set range', () => {
        cy.mount(html`<vl-datepicker-next type="range"></vl-datepicker-next>`);
        cy.injectAxe();

        const startDate = createDateString({ selectedDay: 15 });
        const endDate = createDateString({ selectedDay: 25 });

        cy.get('vl-datepicker-next').shadow().find('button#toggle-calendar').click();
        cy.get('vl-datepicker-next').shadow().find('.flatpickr-calendar').find('.flatpickr-day').contains('15').click();
        cy.get('vl-datepicker-next').shadow().find('.flatpickr-calendar').find('.flatpickr-day').contains('25').click();

        cy.get('vl-datepicker-next').should('have.value', `${startDate} tot en met ${endDate}`);
    });

    it('should dispatch vl-input event on input', () => {
        cy.mount(html`<vl-datepicker-next></vl-datepicker-next>`);
        cy.createStubForEvent('vl-datepicker-next', 'vl-input');

        cy.get('vl-datepicker-next').shadow().find('button#toggle-calendar').click();
        cy.get('vl-datepicker-next').shadow().find('.flatpickr-calendar').find('.flatpickr-day').contains('15').click();
        cy.get('@vl-input')
            .should('have.been.calledTwice')
            .its('secondCall.args.0.detail')
            .should('deep.equal', { value: createDateString({ selectedDay: 15 }) });
    });

    it('should dispatch vl-valid event on valid input', () => {
        cy.mount(html`<vl-datepicker-next required></vl-datepicker-next>`);
        cy.createStubForEvent('vl-datepicker-next', 'vl-valid');

        cy.get('vl-datepicker-next').shadow().find('button#toggle-calendar').click();
        cy.get('vl-datepicker-next').shadow().find('.flatpickr-calendar').find('.flatpickr-day').contains('15').click();
        cy.get('@vl-valid')
            .should('have.been.calledOnce')
            .its('firstCall.args.0.detail')
            .should('deep.equal', { value: createDateString({ selectedDay: 15 }) });
    });
});

const mountDatepickerInForm = ({ value, disabled, block, required }: typeof datepickerDefaults) => {
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
                            ?disabled=${disabled}
                            value=${value || nothing}
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

describe('component - vl-datepicker-next - in form', () => {
    it('should reset datepicker with initial value', () => {
        const initialValue = '02.12.2023';
        mountDatepickerInForm({ ...datepickerDefaults, value: initialValue, block: true });
        cy.get('form').then((form$) => {
            form$.on('submit', (e) => {
                e.preventDefault();
            });
        });
        cy.injectAxe();

        cy.get('vl-datepicker-next').shadow();
        cy.get('vl-datepicker-next').should('have.value', initialValue);
        cy.checkA11y('vl-datepicker-next');

        cy.get('vl-datepicker-next').invoke('attr', 'value', '21.12.2023');
        cy.get('vl-datepicker-next').should('have.value', '21.12.2023');

        cy.get('button[type="reset"]').click();
        cy.get('vl-datepicker-next').should('have.value', initialValue);
        cy.checkA11y('vl-datepicker-next');
    });

    it('should process required validation', () => {
        mountDatepickerInForm({ ...datepickerDefaults, required: true });
        cy.get('form').then((form$) => {
            form$.on('submit', (e) => {
                e.preventDefault();
            });
        });
        cy.injectAxe();

        cy.get('vl-datepicker-next').shadow().find('input').should('not.have.class', 'vl-input-field--error');

        cy.get('button[type="submit"]').click();
        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--error');
        cy.checkA11y('vl-datepicker-next');

        cy.get('vl-datepicker-next').shadow().find('button#toggle-calendar').click();
        cy.get('vl-datepicker-next').shadow().find('.flatpickr-calendar').find('.flatpickr-day').contains('15').click();
        cy.get('vl-datepicker-next').should('have.value', createDateString({ selectedDay: 15 }));

        cy.get('button[type="submit"]').click();
        cy.get('vl-datepicker-next').shadow().find('input').should('not.have.class', 'vl-input-field--error');
        cy.checkA11y('vl-datepicker-next');
    });

    it('should process disabled validation', () => {
        mountDatepickerInForm({ ...datepickerDefaults, disabled: true });
        cy.get('form').then((form$) => {
            form$.on('submit', (e) => {
                e.preventDefault();
            });
        });
        cy.injectAxe();

        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--disabled');

        cy.get('button[type="submit"]').click();
        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--disabled');
        cy.checkA11y('vl-datepicker-next');

        cy.get('vl-datepicker-next')
            .shadow()
            .find('button#toggle-calendar')
            .should('have.class', 'vl-input-addon--disabled');
        cy.get('vl-datepicker-next').shadow().find('input').should('have.class', 'vl-input-field--disabled');

        cy.get('button[type="submit"]').click();
        cy.checkA11y('vl-datepicker-next');
    });
});

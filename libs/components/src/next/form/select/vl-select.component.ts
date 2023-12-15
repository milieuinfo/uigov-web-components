import { CSSResult, PropertyDeclarations, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FormControl, FormControlDefaults } from '../form-control/FormControl';
import Choices, { Choice, Options, DEFAULT_CLASSNAMES, Item } from 'choices.js';
import { inputFieldStyle } from '@domg/govflanders-style/component';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import selectUigStyle from './styles/vl-select.uig-css';
import selectStyle from './styles/vl-select.css';
import multiselectStyle from './styles/vl-multiselect.css';

export type SelectOption = Choice;

export const SelectPosition = {
    AUTO: 'auto',
    TOP: 'top',
    BOTTOM: 'bottom',
} as const;
export type SelectPosition = (typeof SelectPosition)[keyof typeof SelectPosition];

export const SelectDefaults = {
    ...FormControlDefaults,
    options: [] as SelectOption[],
    placeholder: '',
    deletable: false,
    multiple: false,
    search: false,
    position: SelectPosition.AUTO as SelectPosition,
    resultLimit: 4,
    noResultsText: 'Geen resultaten gevonden',
    noChoicesText: 'Geen resterende opties gevonden',
    searchPlaceholder: 'Zoek item',
};

@customElement('vl-select-next')
export class VlSelectComponent extends FormControl {
    // Properties
    private options: SelectOption[] = SelectDefaults.options;
    private placeholder = SelectDefaults.placeholder;
    private deletable = SelectDefaults.deletable;
    private multiple = SelectDefaults.multiple;
    private search = SelectDefaults.search;
    private position: SelectPosition = SelectDefaults.position;
    private resultLimit = SelectDefaults.resultLimit;
    private noResultsText = SelectDefaults.noResultsText;
    private noChoicesText = SelectDefaults.noChoicesText;
    private searchPlaceholder = SelectDefaults.searchPlaceholder;

    // Variables
    choices: Choices | null = null;
    private initialOptions: SelectOption[] = [];
    private value = '';

    static get styles(): CSSResult[] {
        return [resetStyle, baseStyle, inputFieldStyle, selectStyle, multiselectStyle, selectUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            options: { type: Array },
            placeholder: { type: String },
            deletable: { type: Boolean },
            multiple: { type: Boolean },
            search: { type: Boolean },
            position: { type: String },
            resultLimit: { type: Number, attribute: 'result-limit' },
            noResultsText: { type: String, attribute: 'no-results-text' },
            noChoicesText: { type: String, attribute: 'no-choices-text' },
            searchPlaceholder: { type: String, attribute: 'search-placeholder' },
        };
    }

    firstUpdated(changedProperties: Map<string, unknown>): void {
        super.firstUpdated(changedProperties);

        this.choices = new Choices(this.validationTarget!, this.getChoicesConfig());
        this.initialOptions = [...JSON.parse(JSON.stringify(this.options))];

        setTimeout(() => {
            // Fix voor Choices.js dropdown te openen in een Shadow DOM
            const choicesElement = this.shadowRoot!.querySelector('.js-vl-select');
            choicesElement!.addEventListener('click', this.onClickChoices);
        }, 0);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        const choicesElement = this.shadowRoot!.querySelector('.js-vl-select');
        choicesElement?.removeEventListener('click', this.onClickChoices);
    }

    updated(changedProperties: Map<string, unknown>): void {
        super.updated(changedProperties);

        if (!this.choices) {
            return;
        }

        if (changedProperties.has('options')) {
            this.choices.clearStore();
            this.choices.setChoices(this.getOptions(), 'value', 'label', true);
            this.onChange();
        }

        if (changedProperties.has('disabled')) {
            if (this.disabled) {
                this.choices.disable();
            } else {
                this.choices.enable();
            }
        }

        if (changedProperties.has('deletable')) {
            this.choices.config.removeItemButton = this.deletable;
            this.choices.config.removeItems = this.deletable;
        }
    }

    render(): TemplateResult {
        const classes = {
            'vl-select': !this.multiple,
            'vl-multiselect': this.multiple,
            'vl-select--disabled': this.disabled,
            'vl-select--error': this.isInvalid || this.error,
            'vl-select--success': this.success,
        };

        return html`
            <select
                id=${this.id}
                name=${this.name || this.id}
                class=${classMap(classes)}
                aria-label=${this.label}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?multiple=${this.multiple}
                @change=${this.onChange}
            ></select>
        `;
    }

    get validationTarget(): HTMLSelectElement | null | undefined {
        return this.shadowRoot?.querySelector('select');
    }

    resetFormControl(): void {
        super.resetFormControl();

        this.options = [...this.initialOptions];
    }

    private getChoicesConfig(): Partial<Options> {
        return {
            shouldSort: false,
            removeItemButton: this.deletable,
            removeItems: this.deletable,
            searchEnabled: this.search,
            placeholder: !!this.placeholder,
            placeholderValue: this.placeholder,
            position: this.position,
            searchResultLimit: this.resultLimit,
            noResultsText: this.noResultsText,
            noChoicesText: this.noChoicesText,
            searchPlaceholderValue: this.searchPlaceholder,
            classNames: {
                ...DEFAULT_CLASSNAMES,
                containerOuter: 'js-vl-select',
                containerInner: 'vl-select__inner',
                input: 'vl-input-field',
                inputCloned: 'vl-input-field-cloned',
                list: 'vl-select__list',
                listItems: 'vl-select__list--multiple',
                listSingle: 'vl-select__list--single',
                listDropdown: 'vl-select__list--dropdown',
                item: 'vl-select__item',
                itemSelectable: 'vl-select__item--selectable',
                itemDisabled: 'vl-select__item--disabled',
                itemChoice: 'vl-select__item--choice',
                placeholder: 'vl-select__placeholder',
                group: 'vl-select__group',
                groupHeading: 'vl-select__heading',
                button: 'vl-select__button',
            },
            callbackOnCreateTemplates: (template) => {
                return {
                    containerOuter: () => {
                        return template(
                            `<div
                                class="js-vl-select vl-vi vl-vi-nav-down"
                                data-type="${this.multiple ? 'select-multiple' : 'select-one'}"
                                ${this.search ? 'aria-autocomplete="list"' : ''}
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false" 
                                tabindex="0"
                                aria-controls="vl-select__list"
                                aria-label="${
                                    this.multiple ? 'selecteer één of meerdere opties' : 'selecteer één optie'
                                }">
                            </div>`
                        );
                    },
                    item: (_config: Partial<Options>, data: Item) => {
                        if (this.deletable) {
                            return template(
                                `<div class="
                                    vl-select__item
                                    ${data.highlighted ? 'is-highlighted' : ''}
                                    ${!data.disabled ? 'vl-select__item--selectable' : ''}
                                    ${this.multiple ? 'vl-pill' : ''}
                                    ${data.placeholder ? 'vl-select__placeholder' : ''}"
                                    data-item
                                    data-id="${data.id}"
                                    data-value="${data.value}"
                                    ${data.disabled ? 'aria-disabled="true"' : 'data-deletable'}
                                >
                                    <span>${data.label}</span>
                                    <button class="vl-pill__close" data-button aria-label="verwijder">
                                        ${
                                            this.multiple
                                                ? `<span class="vl-pill__close__icon" aria-hidden="true"></span>`
                                                : ''
                                        }
                                    </button>
                                </div>`
                            );
                        }

                        return template(`
                            <div class="vl-select__item
                                ${data.highlighted ? 'is-highlighted' : 'vl-select__item--selectable'}
                                ${this.multiple ? 'vl-pill' : ''}
                                ${data.placeholder ? 'vl-select__placeholder' : ''}"
                                data-item
                                data-id="${data.id}"
                                data-value="${data.value}"
                                ${data.disabled ? 'aria-disabled="true"' : ''}
                            >
                                ${data.label}
                            </div>
                        `);
                    },

                    itemList: () => {
                        if (!this.multiple) {
                            return template(`<div class="vl-input-field"></div>`);
                        }

                        return template(`<div class="vl-input-field vl-select__list--multiple"></div>`);
                    },
                    input: () => {
                        return template(
                            `<input type="text" class="vl-input-field vl-input-field-cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="zoek item">`
                        );
                    },
                    dropdown: () => {
                        return template(
                            `<div class="vl-select__list vl-select__list--dropdown" role="group" id="vl-select__list"></div>`
                        );
                    },
                    choiceList: () => {
                        return template(
                            `<div class="vl-select__list" role="listbox" aria-label="item lijst" tabindex="0"></div>`
                        );
                    },
                };
            },
        };
    }

    private getOptions(): SelectOption[] {
        const options = [...this.options];

        if (this.placeholder && !this.multiple) {
            const placeholderOption: SelectOption = {
                value: '',
                label: this.placeholder,
                placeholder: true,
                disabled: true,
                selected: true,
            };
            options.unshift(placeholderOption);
        }

        return options;
    }

    private onChange(): void {
        const selectedOptions: NodeListOf<HTMLOptionElement> = this.shadowRoot!.querySelectorAll('option:checked');
        const selectedValues = Array.from(selectedOptions).map((option) => option.value);
        const value = selectedValues.join(';') || '';

        if (this.value !== value) {
            this.value = value;
            this.setValue(value);
            this.dispatchEvent(new CustomEvent('vl-select', { bubbles: true, composed: true, detail: { value } }));
            // requestUpdate() nodig om invalid state te updaten als het veld gemarkeerd is als invalid
            this.requestUpdate();
        }
    }

    private onClickChoices = (event: Event): void => {
        event.stopPropagation();

        if (!this.disabled) {
            this.choices?.showDropdown();
        }
    };
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-select-next': VlSelectComponent;
    }
}

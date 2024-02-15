import { CSSResult, PropertyDeclarations, TemplateResult, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import * as choices from 'choices.js';
import { Choice, Options, Item } from 'choices.js';
import { iconStyle, inputFieldStyle } from '@domg/govflanders-style/component';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import selectUigStyle from './styles/vl-select.uig-css';
import selectStyle from './styles/vl-select.css';
import multiselectStyle from './styles/vl-multiselect.css';
import { FormControl, formControlDefaults } from '../form-control/form-control';
import { webComponent } from '@domg-wc/common-utilities';

// web-dev-server (rollup) fix: ambiguous indirect export
const DEFAULT_CLASSNAMES = choices.DEFAULT_CLASSNAMES;
const Choices = choices.default;
type Choices = choices.default;

export type SelectOption = Choice;

export const SelectPosition = {
    AUTO: 'auto',
    TOP: 'top',
    BOTTOM: 'bottom',
} as const;
export type SelectPosition = (typeof SelectPosition)[keyof typeof SelectPosition];

export const selectDefaults = {
    ...formControlDefaults,
    options: [] as SelectOption[],
    placeholder: '' as string,
    deletable: false as boolean,
    multiple: false as boolean,
    search: false as boolean,
    position: SelectPosition.AUTO as SelectPosition,
    resultLimit: 4 as number,
    noResultsText: 'Geen resultaten gevonden' as string,
    noChoicesText: 'Geen resterende opties gevonden' as string,
    searchPlaceholder: 'Zoek item' as string,
} as const;

@webComponent('vl-select-next')
export class VlSelectComponent extends FormControl {
    // Properties
    options = selectDefaults.options;

    // Attributes
    private placeholder = selectDefaults.placeholder;
    private deletable = selectDefaults.deletable;
    private multiple = selectDefaults.multiple;
    private search = selectDefaults.search;
    private position = selectDefaults.position;
    private resultLimit = selectDefaults.resultLimit;
    private noResultsText = selectDefaults.noResultsText;
    private noChoicesText = selectDefaults.noChoicesText;
    private searchPlaceholder = selectDefaults.searchPlaceholder;

    // State
    private value = '';

    // Variables
    private choices: Choices | null = null;
    private initialOptions: SelectOption[] = [];

    static get styles(): CSSResult[] {
        return [resetStyle, baseStyle, inputFieldStyle, selectStyle, multiselectStyle, iconStyle, selectUigStyle];
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
            value: { type: String, state: true },
        };
    }

    firstUpdated(changedProperties: Map<string, unknown>) {
        super.firstUpdated(changedProperties);

        this.choices = new Choices(this.validationTarget!, this.getChoicesConfig());
        this.initialOptions = [...JSON.parse(JSON.stringify(this.options))];

        setTimeout(() => {
            // Fix voor Choices.js dropdown te openen in een Shadow DOM
            this.getChoicesElement()?.addEventListener('click', this.onClickChoices);

            // Fix voor Choices.js dropdown te openen als er geklikt wordt op het label
            this.internals.labels[0]?.addEventListener('click', this.onClickChoices);

            // Fix voor required validator
            if (!this.value) {
                this.setValue('');
            }

            // Fix voor Choices.js search event dat niet afgevuurd wordt als de search value verwijderd wordt.
            this.choices?.input?.element?.addEventListener('input', this.onSearchInput);
        }, 0);
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        if (!this.choices) {
            return;
        }

        if (changedProperties.has('options')) {
            this.choices.clearStore();
            this.choices.setChoices(this.getOptions(), 'value', 'label', true);
            this.onChange();
        }

        if (changedProperties.has('value')) {
            const detail = { value: this.value };

            this.setValue(this.value);
            this.dispatchEvent(new CustomEvent('vl-select', { bubbles: true, composed: true, detail }));
            this.dispatchEventIfValid(detail);
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

        if (changedProperties.has('error')) {
            (this.internals as ElementInternals).setValidity({ customError: this.error }, 'custom-error');
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.getChoicesElement()?.removeEventListener('click', this.onClickChoices);
        this.internals.labels[0]?.removeEventListener('click', this.onClickChoices);
        this.choices?.input?.element?.removeEventListener('input', this.onSearchInput);
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
                id=${this.id || nothing}
                name=${this.name || nothing}
                class=${classMap(classes)}
                aria-label=${this.label || nothing}
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

    resetFormControl() {
        super.resetFormControl();

        this.options = [...this.initialOptions];
    }

    getSelectedValues(): string[] {
        const selectedOptions = (this.validationTarget! as HTMLSelectElement).selectedOptions;
        return (
            Array.from(selectedOptions)
                // Filter placeholder optie eruit
                .filter((option) => option.value)
                .map((option) => option.value)
        );
    }

    private getChoicesElement(): HTMLElement | null {
        return this.shadowRoot?.querySelector('.js-vl-select') as HTMLElement | null;
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
                                    <button class="vl-pill__close ${
                                        !this.multiple ? 'vl-vi vl-vi-close' : ''
                                    }" data-button aria-label="verwijder">
                                        ${
                                            this.multiple
                                                ? `<span class="vl-pill__close__icon vl-vi vl-vi-close" aria-hidden="true"></span>`
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

    private onChange() {
        const selectedValues = this.getSelectedValues();
        this.value = selectedValues.join(';') || '';
    }

    private onClickChoices = (event: Event) => {
        event.stopPropagation();

        if (!this.disabled) {
            this.choices?.showDropdown();
        }
    };

    private onSearchInput = (event: Event) => {
        const value = (event?.target as HTMLInputElement)?.value;
        this.dispatchEvent(new CustomEvent('vl-select-search', { bubbles: true, composed: true, detail: { value } }));
    };
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-select-next': VlSelectComponent;
    }
}

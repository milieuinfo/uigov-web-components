import { CSSResult, PropertyDeclarations, TemplateResult, html, nothing } from 'lit';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyle, resetStyle } from '@domg/govflanders-style/common';
import { FormControl, formControlDefaults } from '../form-control/form-control';
import { webComponent } from '@domg-wc/common-utilities';
import selectStyle from './styles/vl-select.dv-css';
import selectUigStyle from './styles/vl-select.uig-css';
import { iconStyle } from '@domg/govflanders-style/component';

export type SelectOption = {
    value: string;
    label?: string;
    group?: string;
    selected?: boolean;
    disabled?: boolean;
};

export const selectDefaults = {
    ...formControlDefaults,
    options: [] as SelectOption[],
    block: false as boolean,
    placeholder: '' as string,
    autocomplete: '' as string,
    notDeletable: false as boolean,
} as const;

@webComponent('vl-select-next')
export class VlSelectComponent extends FormControl {
    // Properties
    options = selectDefaults.options;

    // Attributes
    private block = selectDefaults.block;
    private placeholder = selectDefaults.placeholder;
    private autocomplete = selectDefaults.autocomplete;
    private notDeletable = selectDefaults.notDeletable;

    // State
    private value = '';

    // Variables
    private initialOptions = [] as SelectOption[];
    private DEFAULT_GROUP_LABEL = 'Overig';

    static get styles(): CSSResult[] {
        return [resetStyle, baseStyle, selectStyle, iconStyle, selectUigStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            options: { type: Array },
            block: { type: Boolean },
            readonly: { type: Boolean },
            placeholder: { type: String },
            autocomplete: { type: String },
            notDeletable: { type: Boolean, attribute: 'not-deletable' },
            value: { type: String, state: true },
        };
    }

    connectedCallback() {
        super.connectedCallback();

        const selectedOption = this.getSelectedOption();
        this.value = selectedOption?.value || '';
        this.initialOptions = JSON.parse(JSON.stringify(this.options));
    }

    updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        if (changedProperties.has('options')) {
            const selectedOption = this.getSelectedOption();
            this.value = selectedOption?.value || '';
        }

        if (changedProperties.has('value')) {
            const detail = { value: this.value };

            this.setValue(this.value);
            this.dispatchEvent(new CustomEvent('vl-select', { composed: true, bubbles: true, detail }));
            this.dispatchEventIfValid(detail);
        }
    }

    render(): TemplateResult {
        const containerClasses = {
            'vl-select__container': true,
            'vl-select__container--block': this.block,
        };
        const selectClasses = {
            'vl-select': true,
            'vl-select--disabled': this.disabled,
            'vl-select--error': this.isInvalid || this.error,
            'vl-select--success': this.success,
            'vl-select--block': this.block,
        };
        const hasValue = this.value !== '';
        const hasGroups = this.options.some((option) => option.group);

        return html`
            <div class=${classMap(containerClasses)}>
                <select
                    id=${this.id || nothing}
                    name=${this.name || nothing}
                    class=${classMap(selectClasses)}
                    aria-label=${this.label || nothing}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${live(this.value)}
                    autocomplete=${this.autocomplete || nothing}
                    @change=${this.onChange}
                >
                    ${this.placeholder ? this.renderPlaceholder(hasValue) : nothing}
                    ${hasGroups ? this.renderGroupedOptions() : this.renderSelectOptions(this.options)}
                </select>
                ${hasValue && !this.notDeletable ? this.renderClearButton() : nothing}
                <span class="vl-icon vl-vi vl-vi-nav-down" aria-hidden="true"></span>
            </div>
        `;
    }

    renderPlaceholder(hasValue: boolean): TemplateResult {
        return html`<option class="vl-select__placeholder" value="" ?selected=${!hasValue} disabled>
            ${this.placeholder}
        </option>`;
    }

    renderClearButton(): TemplateResult {
        return html`
            <button
                class="vl-select__button"
                aria-label=${`Verwijder ${this.label} keuze ${this.getSelectedOption()?.label || this.value || ''}`}
                @click=${this.clearValue}
            >
                <span class="vl-icon vl-vi vl-vi-close" aria-hidden="true"></span>
            </button>
        `;
    }

    renderGroupedOptions(): TemplateResult[] {
        const groupedOptions = this.getGroupedOptions();

        return Object.entries(groupedOptions).map(([group, options]) => {
            return html`<optgroup label=${group}>${this.renderSelectOptions(options)}</optgroup>`;
        });
    }

    renderSelectOptions(options: SelectOption[]): TemplateResult[] {
        return options.map((option) => {
            return html`<option
                value=${option.value}
                ?selected=${this.value === option.value}
                ?disabled=${option.disabled}
            >
                ${option.label || option.value}
            </option>`;
        });
    }

    get validationTarget(): HTMLSelectElement | undefined | null {
        return this.shadowRoot?.querySelector('select');
    }

    resetFormControl() {
        super.resetFormControl();

        // We maken de options array leeg en vullen deze op met de initialOptions zodat de referentie van de array hetzelfde blijft.
        // Anders zou bij een volgende render de opties array opgevat worden als veranderd.
        while (this.options.length) {
            this.options.pop();
        }
        this.initialOptions.forEach((option) => this.options.push({ ...option }));
        // Aangezien we de referentie van de array niet veranderen, moeten we expliciet een update aanvragen voor de options array.
        this.requestUpdate('options');
    }

    private onChange(event: Event & { target: HTMLSelectElement }) {
        this.value = event?.target?.value;
    }

    private clearValue() {
        this.value = '';
    }

    private getSelectedOption(): SelectOption | undefined {
        // Zoek de laatste optie met selected true, dit is dezelfde werking als een native select element.
        return [...this.options].reverse().find((option) => option.selected);
    }

    private getGroupedOptions(): Record<string, SelectOption[]> {
        const groupedOptions = this.options.reduce((groups, option) => {
            const group = option.group || this.DEFAULT_GROUP_LABEL;

            if (!groups[group]) {
                groups[group] = [option];
            } else {
                groups[group].push(option);
            }

            return groups;
        }, {} as Record<string, SelectOption[]>);

        return groupedOptions;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-select-next': VlSelectComponent;
    }
}

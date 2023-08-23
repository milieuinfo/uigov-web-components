import { webComponentConditional } from '@domg-wc/common-utilities';
import { VlSelect } from '../select/vl-select.element';
import { elementStyles } from '../vl-elements.uig-css';

@elementStyles()
@webComponentConditional('vl-select', 'vl-multiselect', { extends: 'select' })
export class VlMultiSelect extends VlSelect {
    static get readyEvent() {
        return 'VlMultiSelectReady';
    }

    connectedCallback() {
        this.classList.add('vl-multiselect');
        this.setAttribute('multiple', '');
        this.setAttribute('data-vl-multiselect', '');

        const hasSelected = this.hasSelected();
        if (!hasSelected) this.value = undefined;

        super.connectedCallback();
    }

    hasSelected() {
        const options = Array.from(this.querySelectorAll('option'));

        return options.some((option: any) => {
            return option.hasAttribute('selected');
        });
    }

    /**
     * Geeft de ready event naam.
     *
     * @return {string}
     */
    get readyEvent() {
        return VlMultiSelect.readyEvent;
    }

    /**
     * Zet het geselecteerd option element op basis van de option value.
     *
     * @param {string} values - De option value van het option element dat gekozen moet worden.
     * @return {void}
     */
    set values(values) {
        values.forEach((value) => {
            super.value = value;
        });
    }

    /**
     * Geeft de waarde van de geselecteerde option elementen.
     *
     * @return {string[]}
     */
    get values() {
        return [...this.selectedOptions].map((option) => {
            return option.value || '';
        });
    }

    get _dataVlSelectAttribute() {
        return this.getAttribute('data-vl-multiselect');
    }

    get _inputElement() {
        return this.parentElement.querySelector('input');
    }

    /**
     * Geef focus aan het select input element.
     */
    focus() {
        this._inputElement.focus();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-multiselect': VlMultiSelect;
    }
}

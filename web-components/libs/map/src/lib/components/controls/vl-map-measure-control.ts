import { webComponent } from '@domg-wc/common-utilities';
import '@domg-wc/components';
import { LitElement } from 'lit';
import { unByKey } from 'ol/Observable';
import { CONTROL_TYPE, IDENTIFIER } from '../../vl-map.model';
import { VlMapControl } from './vl-map-control.mixin';

@webComponent('vl-map-measure-control')
export class VlMapMeasureControl extends VlMapControl(LitElement) {
    constructor() {
        super();
        this.controlElement = document.createElement('vl-toggle-button');
        // TODO: When upgrading component versions; replace text by icon
        // this.controlElement.icon = 'ruler';
        // this.controlElement.textHidden = true;
        this.controlElement.innerText = 'Meten';
        this.identifier = IDENTIFIER.MEASURE;
        this.type = CONTROL_TYPE.ACTION;
    }

    connectedCallback() {
        super.connectedCallback();
        this.clickListener = this.controlElement.addEventListener('click', () => this.handleMeasureControlClick());
    }

    getAction() {
        return this.map.getActionWithIdentifier(this.identifier);
    }

    handleMeasureControlClick() {
        const measureAction = this.getAction();

        if (measureAction) {
            if (this.controlElement.active) {
                measureAction.element.deactivate();
            } else {
                measureAction.element.activate();
            }
        }
    }

    setActive(set) {
        this.controlElement.active = set;
    }

    setDisabled(set) {
        this.controlElement.disabled = set;
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        unByKey(this.clickListener);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-measure-control': VlMapMeasureControl;
    }
}

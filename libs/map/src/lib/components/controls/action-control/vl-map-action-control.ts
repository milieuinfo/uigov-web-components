import { PropertyDeclarations } from 'lit';
import { BaseLitElement, webComponent } from '@domg-wc/common-utilities';
import { VlMapControl } from '../vl-map-control.mixin';
import { VlMapAction } from '../../action/vl-map-action';

@webComponent('vl-map-action-control')
export class VlMapActionControl extends VlMapControl(BaseLitElement) {
    private actionId = '';
    private icon = '';
    private label = '';
    public active = false;

    static get properties(): PropertyDeclarations {
        return {
            actionId: {
                type: String,
                attribute: 'data-vl-action-id',
            },
            icon: {
                type: String,
                attribute: 'data-vl-icon',
            },
            label: {
                type: String,
                attribute: 'data-vl-label',
            },
        };
    }

    connectedCallback(): void {
        this.controlElement = document.createElement('vl-toggle-button');
        this.controlElement.active = false; // Set controlElement.active to turn it into a controlled toggle button (see VlToggleButtonComponent).
        this.controlElement.addEventListener('click', () => this.handleClickToggle());

        if (this.icon) {
            this.controlElement.setAttribute('data-vl-icon', this.icon);
        }

        if (this.label) {
            this.controlElement.innerText = this.label;
        } else {
            this.controlElement.setAttribute('data-vl-text-hidden', '');
        }

        super.connectedCallback();
    }

    activate(): void {
        this.active = true;

        if (this.controlElement) {
            this.controlElement.active = true;
        }

        if (this.action) {
            this.action.active = true;
        }
    }

    deactivate(): void {
        this.active = false;

        if (this.controlElement) {
            this.controlElement.active = false;
        }

        if (this.action) {
            this.action.active = false;
        }
    }

    private get action(): VlMapAction | null | undefined {
        return this.closest('vl-map')?.querySelector(`#${this.actionId}`);
    }

    private handleClickToggle(): void {
        if (!this.active) {
            this.activate();
        } else {
            this.deactivate();
        }

        this.dispatchEvent(
            new CustomEvent('change-control', {
                detail: {
                    isActive: this.active,
                },
            })
        );
    }
}

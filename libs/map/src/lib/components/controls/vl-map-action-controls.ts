import { css, CSSResult, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './style/vl-map-controls.scss';
import { VlMapActionControl } from './action-control/vl-map-action-control';

@customElement('vl-map-action-controls')
export class VlMapActionControls extends LitElement {
    static get styles(): CSSResult[] {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.actionControls.forEach((control) => {
            control.addEventListener('change-control', (event: CustomEvent) => {
                const actionId = control.getAttribute('data-vl-action-id');
                this.handleActionControlChange(actionId, event);
            });
        });
    }

    render(): TemplateResult {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }

    private get actionControls(): VlMapActionControl[] {
        return this.querySelectorAll('vl-map-action-control') as unknown as VlMapActionControl[];
    }

    private handleActionControlChange(actionId: string, event: CustomEvent): void {
        if (event.detail?.isActive) {
            [...this.actionControls]
                .filter((control) => control.getAttribute('data-vl-action-id') !== actionId)
                .filter((control) => control.active)
                .forEach((control) => control.deactivate());
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-map-action-controls': VlMapActionControls;
    }
}

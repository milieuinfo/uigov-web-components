import '@webcomponents/scoped-custom-element-registry';
import { html, LitElement, PropertyDeclarations } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { VlStepsComponent } from '../vl-steps.component';
import { VlStepComponent } from '../vl-step.component';
import { VlDurationStepComponent } from '../vl-duration-step.component';

@customElement('vl-scoped-next')
export class ScopedComponent extends ScopedElementsMixin(LitElement) {
    private component: object | null = null;

    static get scopedElements() {
        return {
            'vl-steps': VlStepsComponent,
            'vl-step': VlStepComponent,
            'vl-duration-step': VlDurationStepComponent,
        };
    }

    static get properties(): PropertyDeclarations {
        return {
            component: { type: Object },
        };
    }

    render() {
        return html`${this.component}`;
    }
}

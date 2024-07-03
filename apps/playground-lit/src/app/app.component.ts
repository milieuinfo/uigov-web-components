import { registerWebComponents } from '@domg-wc/common-utilities';
import { LitElement, html, CSSResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { introductionStyle } from '@domg-wc/components/styles';

@customElement('app-component')
export class AppComponent extends LitElement {
    static {
        registerWebComponents([]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [introductionStyle];
    }

    render() {
        return html`
            <p class="vl-introduction-next vl-introduction-next--bold">
                Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed
                posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus.
            </p>
        `;
    }
}

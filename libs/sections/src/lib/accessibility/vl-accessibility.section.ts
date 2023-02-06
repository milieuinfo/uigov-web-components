import '@domg-wc/elements';
import '@domg-wc/components';
import { html, LitElement, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AccessibilityProperties, COMPLIANCE_STATUS, EVALUATION_STATUS, Limitations } from './vl-accessibility.model';
import { header } from './child/header.section';
import { title } from './child/title.section';
import { content } from './child/content.section';
import styles from './style/vl-accessibility.scss';

@customElement('vl-accessibility')
export class VlAccessibility extends LitElement {
    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    static get properties() {
        return {
            application: {
                type: String,
                attribute: 'data-vl-application',
                reflect: true,
            },
            compliance: {
                type: String,
                attribute: 'data-vl-compliance',
                reflect: true,
            },
            date: {
                type: String,
                attribute: 'data-vl-date',
                reflect: true,
            },
            dateModified: {
                type: String,
                attribute: 'data-vl-date-modified',
                reflect: true,
            },
            disableBackLink: {
                type: Boolean,
                attribute: 'data-vl-disable-back-link',
                reflect: true,
            },
            evaluation: {
                type: String,
                attribute: 'data-vl-evaluation',
                reflect: true,
            },
            version: {
                type: String,
                attribute: 'data-vl-version',
                reflect: true,
            },
            limitations: {
                type: Object,
            },
        };
    }

    private application: string;
    private compliance: COMPLIANCE_STATUS;
    private date: string;
    private dateModified: string;
    private disableBackLink: boolean;
    private evaluation: EVALUATION_STATUS;
    private version: string;
    private limitations?: Limitations;

    constructor() {
        super();

        this.application = 'deze applicatie';
        this.compliance = 'PARTIALLY_COMPLIANT';
        this.date = '20 juli 2021';
        this.dateModified = '20 juli 2021';
        this.disableBackLink = false;
        this.evaluation = 'NOT_EVALUATED';
        this.version = '1.0.0';
    }

    render() {
        const props: AccessibilityProperties = {
            application: this.application,
            compliance: this.compliance,
            date: this.date,
            dateModified: this.dateModified,
            disableBackLink: this.disableBackLink,
            evaluation: this.evaluation,
            version: this.version,
            limitations: this.limitations,
        };

        return html`${header(props)} ${title(props)} ${content(props)}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-accessibility': VlAccessibility;
    }
}

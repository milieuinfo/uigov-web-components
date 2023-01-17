import '@domg-wc/components';
import '@domg-wc/elements';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { content } from './child/content.section';
import { header } from './child/header.section';
import { title } from './child/title.section';
import styles from './style/vl-accessibility.scss';
import { COMPLIANCE_STATUS, EVALUATION_STATUS } from './vl-accessibility.model';

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
            version: { type: String, attribute: 'data-vl-version', reflect: true },
            application: {
                type: String,
                attribute: 'data-vl-application',
                reflect: true,
            },
            date: { type: String, attribute: 'data-vl-date', reflect: true },
            dateModified: {
                type: String,
                attribute: 'data-vl-date-modified',
                reflect: true,
            },
            compliance: {
                type: String,
                attribute: 'data-vl-compliance',
                reflect: true,
            },
            evaluation: {
                type: String,
                attribute: 'data-vl-evaluation',
                reflect: true,
            },
            limitations: {
                type: Object,
            },
        };
    }

    private version: string;
    private application: string;
    private date: string;
    private dateModified: string;
    private compliance: COMPLIANCE_STATUS;
    private evaluation: EVALUATION_STATUS;
    private limitations: any;

    constructor() {
        super();
        this.version = '1.0.0';
        this.application = 'deze applicatie';
        this.date = '20 juli 2021';
        this.dateModified = '20 juli 2021';
        this.compliance = COMPLIANCE_STATUS.PARTIALLY_COMPLIANT;
        this.evaluation = EVALUATION_STATUS.NOT_EVALUATED;
    }

    render() {
        const props = {
            version: this.version,
            date: this.date,
            application: this.application,
            evaluationStatus: this.evaluation,
            complianceStatus: this.compliance,
            dateModified: this.dateModified,
            limitations: this.limitations,
        };
        return html`${header()} ${title(props)} ${content(props)}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-accessibility': VlAccessibility;
    }
}

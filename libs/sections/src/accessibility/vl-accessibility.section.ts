import { BaseLitElement, registerWebComponents } from '@domg-wc/common-utilities';
import { VlFunctionalHeaderComponent } from '@domg-wc/components';
import { vlElementsStyle } from '@domg-wc/elements';
import { type PropertyDeclarations, CSSResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { content } from './child/content.section';
import { header } from './child/header.section';
import { title } from './child/title.section';
import { AccessibilityProperties, COMPLIANCE_STATUS, EVALUATION_STATUS, Limitations } from './vl-accessibility.model';

@customElement('vl-accessibility')
export class VlAccessibility extends BaseLitElement {
    static {
        // TODO verbeteren ihkv UIG-2740
        registerWebComponents([VlFunctionalHeaderComponent]);
    }

    static get styles(): CSSResult[] {
        return vlElementsStyle;
    }

    static get properties(): PropertyDeclarations {
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

        this.allowCustomCSS = false;
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

        return html` <slot name="header">${header(props)}</slot> ${title(props)} ${content(props)} `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-accessibility': VlAccessibility;
    }
}

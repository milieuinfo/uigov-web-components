import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { vlElementsStyle } from '@domg-wc/elements';
import { VlAccordionComponent, VlCascaderComponent, VlInfoTile } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common-utilities';
import appElementStyle from './app.element.css';
import { cascaderItemTemplates } from './vl-cascader.templates';
import { getItemList } from './vl-cascader.utils';
import { nodeData } from './vl-cascader.data';
import { COMPLIANCE_STATUS, EVALUATION_STATUS } from '@domg-wc/sections';

import { type InaccessibleContentProps, inaccessibleContent, VlAccessibility } from '@domg-wc/sections';

@customElement('app-element')
export class AppElement extends LitElement {
    static {
        registerWebComponents([VlCascaderComponent, VlInfoTile, VlAccordionComponent]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [appElementStyle, vlElementsStyle];
    }

    // TODO - add data-vl-open
    render(): TemplateResult {
        const baseProps: InaccessibleContentProps = {
            compliance: COMPLIANCE_STATUS.FULLY_COMPLIANT,
            evaluation: EVALUATION_STATUS.NOT_EVALUATED,
            limitations: {
                withTiming: ['Limitation 1', 'Limitation 2'],
                withoutTiming: ['Limitation 3', 'Limitation 4'],
                outsideApplicableLaw: ['Limitation 5', 'Limitation 6'],
            },
        };
        return html`
            <main>
                ${inaccessibleContent(baseProps)}
                <vl-side-sheet
                    data-vl-left
                    data-vl-custom-css=${'.vl-layout {padding:0px} .vl-region{padding:10px} .vl-region:first-child{padding:0} :host #vl-side-sheet {padding:0} :host {--vl-side-sheet-width: 600px;}'}
                >
                    <h4 is="vl-h4" class="vl-title--has-border">Kies uit kantoren</h4>
                    <vl-cascader .items=${nodeData} .itemListFn=${getItemList} .templates=${cascaderItemTemplates}>
                    </vl-cascader>
                </vl-side-sheet>
            </main>
        `;
    }
}

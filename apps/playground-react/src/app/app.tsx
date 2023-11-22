import { VlAccordionComponent, VlCascaderComponent, VlInfoTile } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { vlElementsStyle } from '@domg-wc/elements';
import './app.module.css';
import React, { DOMAttributes } from 'react';
import { createComponent } from '@lit-labs/react';
import { cascaderItemTemplates } from './vl-cascader.templates';
import { getItemList } from './vl-cascader.utils';
import { nodeData } from './vl-cascader.data';

document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];
registerWebComponents([VlInputFieldComponent, VlErrorMessageComponent, VlTextareaComponent]);

export function App() {
    return (
        <main>
            <vl-side-sheet
                data-vl-left
                data-vl-open
                data-vl-custom-css=".vl-layout {padding:0} .vl-region{padding:0} .vl-region:first-child{padding:0} :host #vl-side-sheet {padding:0} :host {--vl-side-sheet-width: 600px;}"
            >
                <h4 is="vl-h4" data-vl-has-border={true}>
                    Kies uit kantoren
                </h4>
                <VlCascader items={nodeData} itemListFn={getItemList} templates={cascaderItemTemplates}></VlCascader>
            </vl-side-sheet>
        </main>
    );
}

export default App;

declare module 'react' {
    interface VlErrorMessageAttributes<T> extends DOMAttributes<T> {
        input: string;
        state: string;
    }

    interface VlInputFieldAttributes<T> extends DOMAttributes<T> {
        id: string;
        name: string;
        type?: string;
        block?: boolean;
        required?: boolean;
        value?: string;
        pattern?: string;
        'min-length'?: number;
        'max-length'?: number;
        min?: number;
        max?: number;
        onInput?: FormEventHandler<T>;
        onReset?: FormEventHandler<T>;
    }

    interface VlTextareaAttributes<T> extends DOMAttributes<T> {
        id: string;
        name: string;
        type?: string;
        block?: boolean;
        required?: boolean;
        value?: string;
        minLength?: number;
        maxLength?: number;
        rows?: number;
        cols?: number;
    }
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'vl-error-message-next': React.DetailedHTMLProps<React.VlErrorMessageAttributes<HTMLElement>, HTMLElement>;
            'vl-input-field-next': React.DetailedHTMLProps<React.VlInputFieldAttributes<HTMLElement>, HTMLElement>;
            'vl-textarea-next': React.DetailedHTMLProps<React.VlTextareaAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

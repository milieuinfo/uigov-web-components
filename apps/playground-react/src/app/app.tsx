import { registerWebComponents } from '@domg-wc/common-utilities';
import { vlElementsStyle } from '@domg-wc/elements';
import './app.module.css';
import React from 'react';

document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];
registerWebComponents([]);

export function App() {
    return <></>
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
            'vl-checkbox-next': React.DetailedHTMLProps<React.VlInputFieldAttributes<HTMLElement>, HTMLElement>;
            'vl-input-field-next': React.DetailedHTMLProps<React.VlInputFieldAttributes<HTMLElement>, HTMLElement>;
            'vl-textarea-next': React.DetailedHTMLProps<React.VlTextareaAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

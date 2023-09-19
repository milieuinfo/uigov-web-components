import { useState } from 'react';
import { vlElementsStyle } from '@domg-wc/elements';
import { VlStepsComponent } from '@domg-wc/components/next/steps';
import { registerWebComponents } from '@domg-wc/common-utilities';
import './app.module.css';

document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];
registerWebComponents([VlStepsComponent]);

export function App() {
    const [showStep2, setShowStep2] = useState(false);
    const [showStep3, setShowStep3] = useState(false);

    const customCSS = '.vl-step__icon { color: red; background-color: blue; }';

    return (
        <vl-steps-next>
            <vl-step-next>
                <span slot="icon">1</span>
                <span slot="title">Stap 1</span>
                <span slot="subtitle">Vul je voornaam in</span>
                <span slot="content">
                    <input is="vl-input-field" type="text" />
                    <button is="vl-button" onClick={() => setShowStep2(true)}>
                        Werk stap 1 af!
                    </button>
                </span>
            </vl-step-next>
            {showStep2 && (
                <vl-step-next>
                    <span slot="icon">2</span>
                    <span slot="title">Stap 2</span>
                    <span slot="subtitle">Vul je achternaam in</span>
                    <span slot="content">
                        <input is="vl-input-field" type="text" />
                        <button is="vl-button" onClick={() => setShowStep3(true)}>
                            Werk stap 2 af!
                        </button>
                    </span>
                </vl-step-next>
            )}
            {showStep3 && (
                <vl-step-next data-vl-custom-CSS={customCSS}>
                    <span slot="icon">3</span>
                    <span slot="title">Stap 3</span>
                    <span slot="content">Klaar!</span>
                </vl-step-next>
            )}
        </vl-steps-next>
    );
}

export default App;

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'vl-steps-next': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'vl-step-next': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

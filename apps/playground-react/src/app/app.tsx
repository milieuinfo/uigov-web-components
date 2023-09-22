import { VlPopoverComponent } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common-utilities';
import './app.module.css';

registerWebComponents([VlPopoverComponent]);

export function App() {
    return (
        <div>
            <a is="vl-link" id="btn-acties">
                Acties
            </a>
            <vl-popover data-vl-for="btn-acties" data-vl-placement="bottom-start">
                <ul is="vl-link-list">
                    <li is="vl-link-list-item">
                        <a is="vl-link">Voeg gebruiker toe.</a>
                    </li>
                    <li is="vl-link-list-item">
                        <a is="vl-link">Voeg adres toe.</a>
                    </li>
                </ul>
            </vl-popover>
        </div>
    );
}

export default App;

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'vl-popover': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

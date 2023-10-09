import { VlPopoverActionComponent, VlPopoverActionListComponent, VlPopoverComponent } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common-utilities';
import './app.module.css';
import { DOMAttributes } from 'react';

registerWebComponents([VlPopoverActionComponent, VlPopoverActionListComponent, VlPopoverComponent]);

export function App() {
    return (
        <main>
            <a is="vl-link" id="btn-acties">
                Acties
            </a>
            <vl-popover
                for="btn-acties"
                placement="bottom-start"
                onClick={(event: Event) => {
                    const actionElement = event.target as VlPopoverActionComponent;
                    if (actionElement instanceof VlPopoverActionComponent) {
                        // do action
                        console.log('vl-popover-action clicked > ' + actionElement.action);
                    }
                }}
            >
                <vl-popover-action-list>
                    <vl-popover-action icon="search" action="search">
                        Zoeken
                    </vl-popover-action>
                    <vl-popover-action icon="bell" action="report">
                        Rapportenoverzicht
                    </vl-popover-action>
                    <vl-popover-action icon="pin" action="locate">
                        Vind locatie
                    </vl-popover-action>
                </vl-popover-action-list>
            </vl-popover>
        </main>
    );
}

export default App;

declare module 'react' {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        for?: string;
        placement?: string;
        icon?: string;
        action?: string;
        onClick?: (event) => void;
    }
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'vl-popover': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'vl-popover-action-list': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'vl-popover-action': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

import { VlCascaderComponent, CascaderItem, TemplateFn, VlInfoTile, VlAccordionComponent } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common-utilities';
import './app.module.css';
import React, { DOMAttributes } from 'react';
import { html } from 'lit-html';
import { createComponent } from '@lit-labs/react';

registerWebComponents([VlCascaderComponent, VlInfoTile, VlAccordionComponent]);

export const VlCascader = createComponent({
    tagName: 'vl-cascader',
    elementClass: VlCascaderComponent,
    react: React,
});

export function App() {
    const nodeData: CascaderItem[] = [
        {
            label: 'Level 1 - A',
            children: [
                {
                    label: 'Level 2 - A',
                    templateType: 'stad',
                    children: [
                        {
                            label: 'Level 3 - A',
                            children: [
                                {
                                    label: 'Level 4 - A',
                                    templateType: 'provincie',
                                },
                                {
                                    label: 'Level 4 - B',
                                    templateType: 'provincie',
                                },
                            ],
                        },
                        {
                            label: 'Level 3 - B',
                            templateType: 'provincie',
                        },
                    ],
                },
                {
                    label: 'Level 2 - B',
                    templateType: 'provincie',
                },
                {
                    label: 'Level 2 - C',
                    templateType: 'provincie',
                },
            ],
        },
        {
            label: 'Level 1 - B',
        },
        {
            label: 'Level 1 - C',
            narrowDown: true,
            data: {
                requestParams: 'level1C-id',
            },
            templateType: 'stad',
        },
    ];

    const fetchNodes = async (item: CascaderItem): Promise<CascaderItem[]> => {
        await new Promise((res) => setTimeout(res, 3000));
        const id = item.label;
        return [
            {
                label: id + ' ' + new Date().getHours(),
                children: [
                    {
                        label: id + ' ' + new Date().getMinutes(),
                        children: [
                            {
                                label: id + ' ' + new Date().getTime(),
                                narrowDown: true,
                                data: {
                                    requestParams: 'level1C-id',
                                },
                            },
                            {
                                label: '[- ' + id + ' -]',
                                templateType: 'provincie',
                            },
                        ],
                    },
                    {
                        label: id + ' ' + new Date().getMinutes(),
                    },
                ],
            },
            {
                label: id + ' ' + new Date().getMinutes(),
                children: [
                    {
                        label: id + ' ' + new Date().getTime(),
                        narrowDown: true,
                        data: {
                            requestParams: 'level - deeper',
                        },
                    },
                    {
                        label: '[- ' + id + ' -]',
                        templateType: 'provincie',
                    },
                ],
            },
            {
                label: id + ' ' + new Date().getMinutes(),
            },
        ];
    };

    const nodeTemplates = new Map<string, TemplateFn>([
        [
            'stad',
            (item, navigate) => html`
                <div>inhoud</div>
                <button
                    is="vl-button"
                    @click=${() => {
                        navigate(item);
                    }}
                >
                    ${item.label + (item.children || item.narrowDown ? ' > there is more ' : '')}
                </button>
            `,
        ],
    ]);

    return (
        <main>
            <vl-side-sheet data-vl-left data-vl-custom-css="" data-vl-open>
                <h4 is="vl-h4">Kies uit kantoren</h4>
                <VlCascader items={nodeData} itemListFn={fetchNodes} templates={nodeTemplates}></VlCascader>
            </vl-side-sheet>
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
            'vl-cascader': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'vl-side-sheet': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

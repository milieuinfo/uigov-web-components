import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { vlElementsStyle } from '@domg-wc/elements';
import { CascaderItem, TemplateFn, VlInfoTile, VlCascaderComponent, VlAccordionComponent } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common-utilities';
import appElementStyle from './app.element.css';

@customElement('app-element')
export class AppElement extends LitElement {
    static {
        registerWebComponents([VlCascaderComponent, VlInfoTile, VlAccordionComponent]);
    }

    static get styles(): (CSSResult | CSSResult[])[] {
        return [appElementStyle, vlElementsStyle];
    }

    render(): TemplateResult {
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

        // kijken eventueel enkel literal meegeven
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

        return html`
            <main>
                <vl-side-sheet data-vl-left data-vl-custom-css="" data-vl-open>
                    <vl-cascader .items=${nodeData} .itemListFn=${fetchNodes} .templates=${nodeTemplates}>
                    </vl-cascader>
                </vl-side-sheet>
            </main>
        `;
    }
}

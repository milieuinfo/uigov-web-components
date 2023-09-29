import { CascaderItem, TemplateFn, VlAccordionComponent, VlCascaderComponent, VlInfoTile } from '@domg-wc/components';
import { registerWebComponents } from '@domg-wc/common-utilities';
import './app.element.scss';
import { html } from 'lit-html';

export class AppElement extends HTMLElement {
    static {
        registerWebComponents([VlCascaderComponent, VlInfoTile, VlAccordionComponent]);
    }

    nodeData: CascaderItem[] = [
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
            data: { requestParams: 'level1C-id' },
            templateType: 'stad',
        },
    ];

    fetchNodes = async (item: CascaderItem): Promise<CascaderItem[]> => {
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

    nodeTemplates = new Map<string, TemplateFn>([
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

    constructor() {
        super();
        this.innerHTML = `
                        <main>
                            <vl-side-sheet data-vl-left data-vl-custom-css="" data-vl-open>
                                <vl-cascader id="cascader" ></vl-cascader>
                            </vl-side-sheet>
                        </main>
        `;
    }

    connectedCallback(): void {
        const cascader: VlCascaderComponent = this.querySelector('#cascader');
        cascader.items = this.nodeData;
        cascader.itemListFn = this.fetchNodes;
        cascader.templates = this.nodeTemplates;
    }
}
customElements.define('app-element', AppElement);

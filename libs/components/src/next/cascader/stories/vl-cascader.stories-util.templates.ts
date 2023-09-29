import { TemplateFn } from '../vl-cascader.model';
import { html } from 'lit-html';
import { nothing } from 'lit';

export const cascaderItemTemplates = new Map<string, TemplateFn>([
    [
        'provincie',
        (item, processNarrowDown) => {
            const hasChildren = item.children || item.narrowDown;
            return html`
                <div class="vl-cascader-item">
                    <h3>${item.label}</h3>
                    <a
                        is="vl-link"
                        class="vl-link--bold vl-cascader-link space-between"
                        @click=${() => processNarrowDown(item)}
                    >
                        <span>
                            ${item.children
                                ? 'Bekijk deelgemeentes '
                                : item.narrowDown
                                ? 'Haal deelgemeentes op'
                                : 'Actie'}
                            ${item.children?.length
                                ? html` <vl-annotation>( ${item.children.length} )</vl-annotation> `
                                : nothing}
                        </span>
                        ${hasChildren ? html` <span is="vl-icon" data-vl-icon="arrow-right-fat"></span> ` : ''}
                    </a>
                </div>
            `;
        },
    ],
]);

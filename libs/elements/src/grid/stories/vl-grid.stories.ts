import { html } from 'lit-html';
import '../vl-grid.element';
import { gridDefaultArgs, gridDefaultArgTypes } from './vl-grid.stories-arg';

export default {
    title: 'Elements/grid',
    args: gridDefaultArgs,
    argTypes: gridDefaultArgTypes,
};

export const gridDefault = ({
    background,
    stacked,
    stackedSmall,
    stackedLarge,
    alignStart,
    alignCenter,
    alignEnd,
    alignSpaceBetween,
    alignSpaceAround,
    vTop,
    vCenter,
    vBottom,
    vStretch,
    content,
    columnsAmount,
    columnSize,
}: typeof gridDefaultArgs) => {
    const column = html` <div is="vl-column" data-vl-size=${columnSize}>
        <div style="background: ${background}">
            <p>${content}</p>
        </div>
    </div>`;
    const columns = [null, ...new Array(columnsAmount - 1)];
    return html` <section is="vl-region">
        <div is="vl-layout">
            <div
                is="vl-grid"
                ?data-vl-is-stacked=${stacked}
                ?data-vl-is-stacked-small=${stackedSmall}
                ?data-vl-is-stacked-large=${stackedLarge}
                ?data-vl-align-start=${alignStart}
                ?data-vl-align-center=${alignCenter}
                ?data-vl-align-end=${alignEnd}
                ?data-vl-align-space-between=${alignSpaceBetween}
                ?data-vl-align-space-around=${alignSpaceAround}
                ?data-vl-v-top=${vTop}
                ?data-vl-v-center=${vCenter}
                ?data-vl-v-bottom=${vBottom}
                ?data-vl-v-stretch=${vStretch}
                data-cy="grid"
            >
                ${columns.map(() => column)}
            </div>
        </div>
    </section>`;
};
gridDefault.storyName = 'vl-grid - default';

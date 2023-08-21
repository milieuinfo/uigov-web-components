import { html } from 'lit-html';
import '../vl-grid.element';
import { gridColumnBaseArgTypes, gridColumnDefaultArgs, gridColumnDefaultArgTypes } from './vl-grid-column.stories-arg';

export default {
    title: 'Elements/grid',
    args: gridColumnDefaultArgs,
    argTypes: gridColumnDefaultArgTypes,
};

export const gridColumn = ({ push, content }: typeof gridColumnDefaultArgs) => html` <section is="vl-region">
    <div is="vl-layout">
        <div is="vl-grid">
            <div is="vl-column" data-vl-push=${push}>${content}</div>
        </div>
    </div>
</section>`;
gridColumn.storyName = 'vl-grid - column';

const disableArgTypes = () =>
    Object.keys(gridColumnBaseArgTypes).reduce(
        (previous, current) => ({
            ...previous,
            [current]: { control: { disable: current !== 'push' } },
        }),
        {}
    );

gridColumn.argTypes = {
    ...disableArgTypes(),
};

export const gridColumnCustomSizes = ({
    size,
    maxSize,
    mediumSize,
    mediumMaxSize,
    smallSize,
    smallMaxSize,
    extraSmallSize,
    extraSmallMaxSize,
    push,
    content,
}: typeof gridColumnDefaultArgs) => html` <section is="vl-region">
    <div is="vl-layout">
        <div is="vl-grid">
            <div
                is="vl-column"
                data-vl-size=${size}
                data-vl-max-size=${maxSize}
                data-vl-medium-size=${mediumSize}
                data-vl-medium-max-size=${mediumMaxSize}
                data-vl-small-size=${smallSize}
                data-vl-small-max-size=${smallMaxSize}
                data-vl-extra-small-size=${extraSmallSize}
                data-vl-extra-small-max-size=${extraSmallMaxSize}
                data-vl-push=${push}
            >
                ${content}
            </div>
        </div>
    </div>
</section>`;
gridColumnCustomSizes.storyName = 'vl-grid - column custom sizes';

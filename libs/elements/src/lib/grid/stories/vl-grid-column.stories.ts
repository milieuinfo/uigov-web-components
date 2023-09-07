import { html } from 'lit-html';
import '../vl-grid.element';
import { gridColumnArgTypes, gridColumnArgs } from './vl-grid-column.stories-arg';
import { Meta } from '@storybook/web-components';
import { story } from '@domg-wc/common-storybook';

export default {
    title: 'Elements/grid',
    args: gridColumnArgs,
    argTypes: gridColumnArgTypes,
    parameters: {
        controls: { sort: 'none' },
    },
} as Meta<typeof gridColumnArgs>;

export const GridColumn = story(
    gridColumnArgs,
    ({
        size,
        maxSize,
        push,
        mediumSize,
        mediumMaxSize,
        mediumPush,
        smallSize,
        smallMaxSize,
        smallPush,
        extraSmallSize,
        extraSmallMaxSize,
        extraSmallPush,
    }) => html`
        <div is="vl-grid">
            <div
                is="vl-column"
                data-vl-size=${size}
                data-vl-max-size=${maxSize}
                data-vl-push=${push}
                data-vl-medium-size=${mediumSize}
                data-vl-medium-max-size=${mediumMaxSize}
                data-vl-medium-push=${mediumPush}
                data-vl-small-size=${smallSize}
                data-vl-small-max-size=${smallMaxSize}
                data-vl-small-push=${smallPush}
                data-vl-extra-small-size=${extraSmallSize}
                data-vl-extra-small-max-size=${extraSmallMaxSize}
                data-vl-extra-small-push=${extraSmallPush}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda dignissimos doloremque
                eos est eveniet fugiat illo illum impedit, libero nam, omnis optio praesentium qui quod ratione vel
                voluptas voluptatibus?
            </div>
        </div>
    `
);
GridColumn.storyName = 'vl-grid - column';

import { html } from 'lit-html';
import '../vl-grid.element';
import { gridRegionArgs, gridRegionArgTypes } from './vl-grid-region.stories-arg';

export default {
    title: 'Elements/grid',
    args: gridRegionArgs,
    argTypes: gridRegionArgTypes,
};

export const gridRegionDefault = ({
    content,
    alt,
    noSpace,
    noSpaceBottom,
    noSpaceTop,
    small,
    medium,
    bordered,
}: typeof gridRegionArgs) =>
    html` <section
        is="vl-region"
        ?data-vl-alt=${alt}
        ?data-vl-no-space=${noSpace}
        ?data-vl-no-space-bottom=${noSpaceBottom}
        ?data-vl-no-space-top=${noSpaceTop}
        ?data-vl-small=${small}
        ?data-vl-medium=${medium}
        ?data-vl-bordered=${bordered}
    >
        <div is="vl-layout" class="vl-layout">
            <div is="vl-grid">
                <div is="vl-column">${content}</div>
            </div>
        </div>
    </section>`;
gridRegionDefault.storyName = 'vl-grid - region default';

export const gridRegionOverlap = ({
    content,
    alt,
    noSpace,
    noSpaceBottom,
    noSpaceTop,
    small,
    medium,
    bordered,
    overlap,
}: typeof gridRegionArgs) =>
    html` <section
        is="vl-region"
        ?data-vl-alt=${alt}
        ?data-vl-no-space=${noSpace}
        ?data-vl-no-space-bottom=${noSpaceBottom}
        ?data-vl-no-space-top=${noSpaceTop}
        ?data-vl-small=${small}
        ?data-vl-medium=${medium}
        ?data-vl-bordered=${bordered}
        ?data-vl-overlap=${overlap}
    >
        <div is="vl-layout" class="vl-layout">
            <div is="vl-grid">
                <div is="vl-column">${content}</div>
            </div>
        </div>
    </section>`;
gridRegionOverlap.storyName = 'vl-grid - region overlap';

gridRegionOverlap.argTypes = {
    overlap: {
        control: {
            disable: false,
        },
    },
};

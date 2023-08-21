import { html } from 'lit-html';
import { mapSideSheetArgs, mapSideSheetArgTypes } from './vl-map-side-sheet.stories-arg';
import { Meta } from '@storybook/web-components';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import mapSideSheetDoc from './vl-map-side-sheet.stories-doc.mdx';
import { story, storyArgs, storyArgTypes } from '@domg-wc/common-storybook';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-side-sheet';
import '../vl-map-side-sheet-menu';
import '../vl-map-side-sheet-menu-item';

export default {
    title: 'map/side-sheet',
    args: storyArgs(mapSideSheetArgs),
    argTypes: storyArgTypes(mapSideSheetArgTypes),
    parameters: {
        docs: {
            page: mapSideSheetDoc,
        },
    },
} as Meta<typeof mapSideSheetArgs>;

export const MapSideSheetDefault = story(
    mapSideSheetArgs,
    ({ right, enableSwipe, defaultSlot, toggleText, tooltipText, customIcon, iconPlacement, hideToggleButton }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray /></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet
                ?data-vl-right=${right} 
                ?data-vl-enable-swipe=${enableSwipe}
                data-vl-toggle-text=${toggleText}
                data-vl-tooltip-text=${tooltipText}
                data-vl-custom-icon=${customIcon}
                data-vl-icon-placement=${iconPlacement}
                ?data-vl-hide-toggle-button=${hideToggleButton}
                >
                    ${unsafeHTML(defaultSlot)}
            </vl-map-side-sheet>
        </vl-map>
    `
);
MapSideSheetDefault.storyName = 'vl-map-side-sheet - default';
MapSideSheetDefault.args = {
    defaultSlot: '<div>Plaats hier je zijpaneel content.</div>',
};

export const MapSideSheetMenuItem = story(
    mapSideSheetArgs,
    ({
        right,
        enableSwipe,
        title,
        href,
        defaultSlot,
        toggleText,
        tooltipText,
        customIcon,
        iconPlacement,
        hideToggleButton,
    }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet
                ?data-vl-right=${right}
                ?data-vl-enable-swipe=${enableSwipe}
                data-vl-toggle-text=${toggleText}
                data-vl-tooltip-text=${tooltipText}
                data-vl-custom-icon=${customIcon}
                data-vl-icon-placement=${iconPlacement}
                ?data-vl-hide-toggle-button=${hideToggleButton}
            >
                <vl-map-side-sheet-menu>
                    <vl-map-side-sheet-menu-item data-vl-title=${title} data-vl-href=${href}>
                        ${unsafeHTML(defaultSlot)}
                    </vl-map-side-sheet-menu-item>
                </vl-map-side-sheet-menu>
            </vl-map-side-sheet>
        </vl-map>
    `
);
MapSideSheetMenuItem.storyName = 'vl-map-side-sheet - menu item';
MapSideSheetMenuItem.args = {
    defaultSlot: '<div>Plaats hier je zijpaneel content.</div>',
};

export const MapSideSheetDual = story(
    mapSideSheetArgs,
    ({ enableSwipe, defaultSlot }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>${unsafeHTML(defaultSlot)}</vl-map-side-sheet>
            <vl-map-side-sheet data-vl-right ?data-vl-enable-swipe=${enableSwipe}
                >${unsafeHTML(defaultSlot)}</vl-map-side-sheet
            >
        </vl-map>
    `
);
MapSideSheetDual.storyName = 'vl-map-side-sheet - dual';
MapSideSheetDual.args = {
    defaultSlot: '<div>Plaats hier je zijpaneel content.</div>',
};

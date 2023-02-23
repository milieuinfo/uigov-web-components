import { html, nothing } from 'lit-html';
import { mapSideSheetArgs, mapSideSheetArgTypes } from './vl-map-side-sheet.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import mapSideSheetDoc from './vl-map-side-sheet.stories-doc.mdx';
import { filterOutClasses } from '@domg-wc/common-utilities';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-side-sheet';
import '../vl-map-side-sheet-menu';
import '../vl-map-side-sheet-menu-item';

export default {
    title: 'map/side-sheet',
    parameters: {
        docs: {
            page: mapSideSheetDoc,
            transformSource: filterOutClasses,
        },
    },
    argTypes: mapSideSheetArgTypes,
} as Meta<typeof mapSideSheetArgs>;

// Wijkt af van de andere componenten die een template gebruiken voor hun stories omdat de HTML van deze stories verschilt van elkaar.

export const MapSideSheetDefault: StoryFn<typeof mapSideSheetArgs> = ({ right, enableSwipe, defaultSlot }) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray /></vl-map-baselayer-grb-gray>
        <vl-map-side-sheet ?data-vl-right=${right} ?enable-swipe=${enableSwipe}>
            ${unsafeHTML(defaultSlot)}
        </vl-map-side-sheet>
    </vl-map>
`;
MapSideSheetDefault.storyName = 'vl-map-side-sheet - default';
MapSideSheetDefault.args = {
    right: mapSideSheetArgs.right,
    enableSwipe: mapSideSheetArgs.enableSwipe,
    // Zet title op 'nothing' zodat de child-attributen boven de slots getoond worden in de controls.
    // @ts-ignore: Negeer de type-check van title.
    title: nothing,
    defaultSlot: mapSideSheetArgs.defaultSlot,
};

export const MapSideSheetDual: StoryFn<typeof mapSideSheetArgs> = ({ enableSwipe, defaultSlot }) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-side-sheet>${unsafeHTML(defaultSlot)}</vl-map-side-sheet>
        <vl-map-side-sheet ?data-vl-right=${true} ?enable-swipe=${enableSwipe}>
            ${unsafeHTML(defaultSlot)}
        </vl-map-side-sheet>
    </vl-map>
`;
MapSideSheetDual.storyName = 'vl-map-side-sheet - dual';
MapSideSheetDual.args = {
    enableSwipe: mapSideSheetArgs.enableSwipe,
    // Zet title op 'nothing' zodat de child-attributen boven de slots getoond worden in de controls.
    // @ts-ignore: Negeer de type-check van title.
    title: nothing,
    defaultSlot: mapSideSheetArgs.defaultSlot,
};

export const MapSideSheetMenuItem: StoryFn<typeof mapSideSheetArgs> = ({
    right,
    enableSwipe,
    title,
    href,
    defaultSlot,
}) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-side-sheet ?data-vl-right=${right} ?enable-swipe=${enableSwipe}>
            <vl-map-side-sheet-menu>
                <vl-map-side-sheet-menu-item data-vl-title=${title || nothing} data-vl-href=${href || nothing}>
                    ${unsafeHTML(defaultSlot)}
                </vl-map-side-sheet-menu-item>
            </vl-map-side-sheet-menu>
        </vl-map-side-sheet>
    </vl-map>
`;
MapSideSheetMenuItem.storyName = 'vl-map-side-sheet - menu item';
MapSideSheetMenuItem.args = mapSideSheetArgs;

import { html } from 'lit-html';
import { Meta, StoryFn } from '@storybook/web-components';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-current-location';
import { mapCurrentLocationArgs, mapCurrentLocationArgTypes } from './vl-map-current-location.stories-arg';
import mapCurrentLocationDoc from './vl-map-current-location.stories-doc.mdx';
import { setDefaultArgsToNothing } from '@domg-wc/common-storybook';

export default {
    title: 'map/current-location',
    args: mapCurrentLocationArgs,
    argTypes: mapCurrentLocationArgTypes,
    parameters: {
        docs: {
            page: mapCurrentLocationDoc,
        },
    },
} as Meta<typeof mapCurrentLocationArgs>;

export const MapCurrentLocationDefault: StoryFn<typeof mapCurrentLocationArgs> = (args) => {
    const { tooltip, zoom } = setDefaultArgsToNothing(args, mapCurrentLocationArgs);

    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-current-location data-vl-tooltip=${tooltip} data-vl-zoom=${zoom}></vl-map-current-location>
        </vl-map>
    `;
};
MapCurrentLocationDefault.storyName = 'vl-map-current-location - default';

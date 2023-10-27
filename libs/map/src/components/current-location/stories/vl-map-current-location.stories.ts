import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-current-location';
import { mapCurrentLocationArgs, mapCurrentLocationArgTypes } from './vl-map-current-location.stories-arg';
import mapCurrentLocationDoc from './vl-map-current-location.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/current-location',
    tags: ['autodocs'],
    args: storyArgs(mapCurrentLocationArgs),
    argTypes: storyArgTypes(mapCurrentLocationArgTypes),
    parameters: {
        docs: {
            page: mapCurrentLocationDoc,
        },
    },
} as Meta<typeof mapCurrentLocationArgs>;

export const MapCurrentLocationDefault = story(
    mapCurrentLocationArgs,
    ({ tooltip, zoom }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-current-location data-vl-tooltip=${tooltip} data-vl-zoom=${zoom}></vl-map-current-location>
        </vl-map>
    `
);
MapCurrentLocationDefault.storyName = 'vl-map-current-location - default';

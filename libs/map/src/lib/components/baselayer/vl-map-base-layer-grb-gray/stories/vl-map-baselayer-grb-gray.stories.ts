import { html } from 'lit-html';
import '../../../../vl-map';
import '../vl-map-base-layer-grb-gray';
import { Meta } from '@storybook/web-components';
import mapBaselayerGrbGrayDoc from './vl-map-baselayer-grb-gray.stories-doc.mdx';
import { mapBaselayerArgs } from '../../stories/vl-map-baselayer.stories-arg';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/baselayer/baselayer-grb-gray',
    args: storyArgs({}),
    argTypes: storyArgTypes({}),
    parameters: {
        docs: {
            page: mapBaselayerGrbGrayDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta<typeof mapBaselayerArgs>;

export const MapBaselayerGrbGrayDefault = story(
    {},
    () => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `
);
MapBaselayerGrbGrayDefault.storyName = 'vl-map-baselayer-grb-gray - default';

export const MapBaselayerGrbGrayBackgroundLayer = story(
    {},
    () => html`
        <vl-map>
            <vl-map-baselayer-grb-gray data-vl-background-layer></vl-map-baselayer-grb-gray>
        </vl-map>
    `
);
MapBaselayerGrbGrayBackgroundLayer.storyName = 'vl-map-baselayer-grb-gray - background layer';
import { html } from 'lit-html';
import '../../../../vl-map';
import '../vl-map-base-layer-grb';
import { Meta } from '@storybook/web-components';
import mapBaselayerGrbDoc from './vl-map-baselayer-grb.stories-doc.mdx';
import { mapBaselayerArgs } from '../../stories/vl-map-baselayer.stories-arg';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/baselayer/baselayer-grb',
    tags: ['autodocs'],
    args: storyArgs({}),
    argTypes: storyArgTypes({}),
    parameters: {
        docs: {
            page: mapBaselayerGrbDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta<typeof mapBaselayerArgs>;

export const MapBaselayerGrbDefault = story(
    {},
    () => html`
        <vl-map>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
        </vl-map>
    `
);
MapBaselayerGrbDefault.storyName = 'vl-map-baselayer-grb - default';

export const MapBaselayerGrbBackgroundLayer = story(
    {},
    () => html`
        <vl-map>
            <vl-map-baselayer-grb data-vl-background-layer></vl-map-baselayer-grb>
        </vl-map>
    `
);
MapBaselayerGrbBackgroundLayer.storyName = 'vl-map-baselayer-grb - background layer';

import { html } from 'lit-html';
import '../../../../vl-map';
import '../vl-map-base-layer-grb-ortho';
import mapBaselayerGrbOrthoDoc from './vl-map-baselayer-grb-ortho.stories-doc.mdx';
import { Meta } from '@storybook/web-components';
import { mapBaselayerArgs } from '../../stories/vl-map-baselayer.stories-arg';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/baselayer/baselayer-grb-ortho',
    tags: ['autodocs'],
    args: storyArgs({}),
    argTypes: storyArgTypes({}),
    parameters: {
        docs: {
            page: mapBaselayerGrbOrthoDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta<typeof mapBaselayerArgs>;

export const MapBaselayerGrbOrthoDefault = story(
    {},
    () => html`
        <vl-map>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    `
);
MapBaselayerGrbOrthoDefault.storyName = 'vl-map-baselayer-grb-ortho - default';

export const MapBaselayerGrbOrthoBackgroundLayer = story(
    {},
    () => html`
        <vl-map>
            <vl-map-baselayer-grb-ortho data-vl-background-layer></vl-map-baselayer-grb-ortho>
        </vl-map>
    `
);
MapBaselayerGrbOrthoBackgroundLayer.storyName = 'vl-map-baselayer-grb-ortho - background layer';

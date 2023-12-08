import { story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../../../vl-map';
import '../vl-map-base-layer';
import { mapBaselayerArgs, mapBaselayerArgTypes } from './vl-map-baselayer.stories-arg';
import mapBaselayerDoc from './vl-map-baselayer.stories-doc.mdx';

export default {
    title: 'map/baselayer',
    tags: ['autodocs'],
    args: mapBaselayerArgs,
    argTypes: mapBaselayerArgTypes,
    parameters: {
        docs: {
            page: mapBaselayerDoc,
        },
    },
} as Meta<typeof mapBaselayerArgs>;

const Template = story(
    mapBaselayerArgs,
    ({ backgroundLayer, layer, title, type, url }) => html`
        <vl-map>
            <vl-map-baselayer
                ?data-vl-background-layer=${backgroundLayer}
                data-vl-layer=${layer}
                data-vl-title=${title}
                data-vl-type=${type}
                data-vl-url=${url}
            ></vl-map-baselayer>
        </vl-map>
    `
);

export const MapBaselayerDefault = Template.bind({});
MapBaselayerDefault.storyName = 'vl-map-baselayer - default';
MapBaselayerDefault.args = {
    layer: 'grb_bsk',
    title: 'GRB basis laag',
    type: 'wmts',
    url: 'https://geo.api.vlaanderen.be/GRB/wmts',
};

export const MapBaselayerBackgroundLayer = Template.bind({});
MapBaselayerBackgroundLayer.storyName = 'vl-map-baselayer - background layer';
MapBaselayerBackgroundLayer.args = {
    backgroundLayer: true,
    layer: 'grb_bsk',
    title: 'GRB basis laag',
    type: 'wmts',
    url: 'https://geo.api.vlaanderen.be/GRB/wmts',
};

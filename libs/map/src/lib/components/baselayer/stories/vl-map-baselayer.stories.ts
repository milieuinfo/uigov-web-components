import { html } from 'lit-html';
import '../../../vl-map';
import '../vl-map-base-layer';
import { Meta, StoryFn } from '@storybook/web-components';
import { mapBaselayerArgTypes, mapBaselayerArgs } from './vl-map-baselayer.stories-arg';
import mapBaselayerDoc from './vl-map-baselayer.stories-doc.mdx';
import { setDefaultArgsToNothing } from '@domg-wc/common-storybook';

export default {
    title: 'map/baselayer',
    args: mapBaselayerArgs,
    argTypes: mapBaselayerArgTypes,
    parameters: {
        docs: {
            page: mapBaselayerDoc,
        },
    },
} as Meta<typeof mapBaselayerArgs>;

const Template: StoryFn<typeof mapBaselayerArgs> = (args) => {
    const { backgroundLayer, layer, title, type, url } = setDefaultArgsToNothing(args, mapBaselayerArgs);

    return html`
        <vl-map>
            <vl-map-baselayer
                ?data-vl-background-layer=${backgroundLayer}
                data-vl-layer=${layer}
                data-vl-title=${title}
                data-vl-type=${type}
                data-vl-url=${url}
            ></vl-map-baselayer>
        </vl-map>
    `;
};

export const MapBaselayerDefault: StoryFn<typeof mapBaselayerArgs> = Template.bind({});
MapBaselayerDefault.storyName = 'vl-map-baselayer - default';
MapBaselayerDefault.args = {
    ...mapBaselayerArgs,
    layer: 'grb_bsk',
    title: 'GRB basis laag',
    type: 'wmts',
    url: 'https://geo.api.vlaanderen.be/GRB/wmts',
};

export const MapBaselayerBackgroundLayer: StoryFn<typeof mapBaselayerArgs> = Template.bind({});
MapBaselayerBackgroundLayer.storyName = 'vl-map-baselayer - background layer';
MapBaselayerBackgroundLayer.args = {
    ...mapBaselayerArgs,
    backgroundLayer: true,
    layer: 'grb_bsk',
    title: 'GRB basis laag',
    type: 'wmts',
    url: 'https://geo.api.vlaanderen.be/GRB/wmts',
};

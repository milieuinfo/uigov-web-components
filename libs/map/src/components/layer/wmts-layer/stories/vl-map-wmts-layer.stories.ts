import { html } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-wmts-layer';
import { Meta } from '@storybook/web-components';
import { mapWmtsLayerArgTypes, mapWmtsLayerArgs } from './vl-map-wmts-layer.stories-arg';
import mapWmtsLayerDoc from './vl-map-wmts-layer.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/layer/wmts-layer',
    args: storyArgs(mapWmtsLayerArgs),
    argTypes: storyArgTypes(mapWmtsLayerArgTypes),
    parameters: {
        docs: {
            page: mapWmtsLayerDoc,
        },
    },
} as Meta<typeof mapWmtsLayerArgs>;

export const MapWmtsLayerDefault = story(
    mapWmtsLayerArgs,
    ({ hidden, layer, maxResolution, minResolution, name, opacity, url }) =>
        html`
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wmts-layer
                    ?data-vl-hidden=${hidden}
                    data-vl-layer=${layer}
                    data-vl-max-resolution=${maxResolution}
                    data-vl-min-resolution=${minResolution}
                    data-vl-name=${name}
                    data-vl-opacity=${opacity}
                    data-vl-url=${url}
                >
                </vl-map-wmts-layer>
            </vl-map>
        `
);
MapWmtsLayerDefault.storyName = 'vl-map-wmts-layer - default';
MapWmtsLayerDefault.args = {
    name: 'GRB Wegenkaart',
    layer: 'grb_sel',
    url: 'https://geo.api.vlaanderen.be/GRB/wmts',
};
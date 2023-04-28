import { html } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-wmts-layer';
import { Meta, StoryFn } from '@storybook/web-components';
import { mapWmtsLayerArgTypes, mapWmtsLayerArgs } from './vl-map-wmts-layer.stories-arg';
import mapWmtsLayerDoc from './vl-map-wmts-layer.stories-doc.mdx';
import { setDefaultArgsToNothing } from '@domg-wc/common-utilities';

export default {
    title: 'map/layer/wmts-layer',
    args: mapWmtsLayerArgs,
    argTypes: mapWmtsLayerArgTypes,
    parameters: {
        docs: {
            page: mapWmtsLayerDoc,
        },
    },
} as Meta<typeof mapWmtsLayerArgs>;

export const MapWmtsLayerDefault: StoryFn<typeof mapWmtsLayerArgs> = (args) => {
    const { hidden, layer, maxResolution, minResolution, name, opacity, url } = setDefaultArgsToNothing(
        args,
        mapWmtsLayerArgs
    );

    return html`
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
    `;
};
MapWmtsLayerDefault.storyName = 'vl-map-wmts-layer - default';
MapWmtsLayerDefault.args = {
    ...mapWmtsLayerArgs,
    name: 'GRB Wegenkaart',
    layer: 'grb_sel',
    url: 'https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts',
};

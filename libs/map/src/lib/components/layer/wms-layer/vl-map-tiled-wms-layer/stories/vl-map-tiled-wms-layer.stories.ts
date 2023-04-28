import { html } from 'lit-html';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-tiled-wms-layer';
import { mapWmsLayerArgs, mapWmsLayerArgTypes } from '../../stories/vl-map-wms-layer.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import mapTiledWmsLayerDoc from './vl-map-tiled-wms-layer.stories-doc.mdx';
import { setDefaultArgsToNothing } from '@domg-wc/common-utilities';

export default {
    title: 'map/layer/wms-layer/tiled-wms-layer',
    args: mapWmsLayerArgs,
    argTypes: mapWmsLayerArgTypes,
    parameters: {
        docs: {
            page: mapTiledWmsLayerDoc,
        },
    },
} as Meta<typeof mapWmsLayerArgs>;

export const MapTiledWmsLayerDefault: StoryFn<typeof mapWmsLayerArgs> = (args) => {
    const { hidden, layers, maxResolution, minResolution, name, opacity, styles, url, version } =
        setDefaultArgsToNothing(args, mapWmsLayerArgs);

    return html`
        <vl-map>
            <vl-map-tiled-wms-layer
                ?data-vl-hidden=${hidden}
                data-vl-layers=${layers}
                data-vl-max-resolution=${maxResolution}
                data-vl-min-resolution=${minResolution}
                data-vl-name=${name}
                data-vl-opacity=${opacity}
                data-vl-styles=${styles}
                data-vl-url=${url}
                data-vl-version=${version}
            >
            </vl-map-tiled-wms-layer>
        </vl-map>
    `;
};
MapTiledWmsLayerDefault.storyName = 'vl-map-tiled-wms-layer - default';
MapTiledWmsLayerDefault.args = {
    ...mapWmsLayerArgs,
    layers: 'GEM_GRENS',
    name: 'Gemeentegrenzen',
    url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms',
};

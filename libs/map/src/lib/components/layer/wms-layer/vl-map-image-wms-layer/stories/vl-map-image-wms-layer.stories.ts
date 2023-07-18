import { html } from 'lit-html';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-image-wms-layer';
import { Meta, StoryFn } from '@storybook/web-components';
import { mapWmsLayerArgs, mapWmsLayerArgTypes } from '../../stories/vl-map-wms-layer.stories-arg';
import mapImageWmsLayerDoc from './vl-map-image-wms-layer.stories-doc.mdx';
import { setDefaultArgsToNothing } from '@domg-wc/common-storybook';

export default {
    title: 'map/layer/wms-layer/image-wms-layer',
    args: mapWmsLayerArgs,
    argTypes: mapWmsLayerArgTypes,
    parameters: {
        docs: {
            page: mapImageWmsLayerDoc,
        },
    },
} as Meta<typeof mapWmsLayerArgs>;

export const MapImageWmsLayerDefault: StoryFn<typeof mapWmsLayerArgs> = (args) => {
    const { hidden, layers, maxResolution, minResolution, name, opacity, styles, url, version } =
        setDefaultArgsToNothing(args, mapWmsLayerArgs);

    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-image-wms-layer
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
            </vl-map-image-wms-layer>
        </vl-map>
    `;
};
MapImageWmsLayerDefault.storyName = 'vl-map-image-wms-layer - default';
MapImageWmsLayerDefault.args = {
    ...mapWmsLayerArgs,
    name: 'Beschermingszones',
    layers: 'grondwater:beschermingszones_2014',
    url: 'https://www.dov.vlaanderen.be/geoserver/wms',
};

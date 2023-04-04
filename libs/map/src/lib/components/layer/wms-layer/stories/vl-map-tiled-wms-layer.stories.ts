import { html, nothing } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-tiled-wms-layer';
import { wmsLayerArgTypes, wmsLayerArgs } from './vl-map-wms-layer.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';

export default {
    title: 'map/layer/wms-layer',
    args: wmsLayerArgs,
    argTypes: wmsLayerArgTypes,
} as Meta<typeof wmsLayerArgs>;

export const tiledWmsLayerDefault: StoryFn<typeof wmsLayerArgs> = ({
    hidden,
    layers,
    maxResolution,
    minResolution,
    name,
    opacity,
    styles,
    url,
    version,
}) => html`
    <vl-map>
        <vl-map-tiled-wms-layer
            ?data-vl-hidden=${hidden}
            data-vl-layers=${layers || nothing}
            data-vl-max-resolution=${maxResolution ?? nothing}
            data-vl-min-resolution=${minResolution ?? nothing}
            data-vl-name=${name || nothing}
            data-vl-opacity=${opacity !== 1 ? opacity : nothing}
            data-vl-styles=${styles || nothing}
            data-vl-url=${url || nothing}
            data-vl-version=${version || nothing}
        >
        </vl-map-tiled-wms-layer>
    </vl-map>
`;
tiledWmsLayerDefault.storyName = 'vl-map-tiled-wms-layer - default';
tiledWmsLayerDefault.args = {
    ...wmsLayerArgs,
    layers: 'GEM_GRENS',
    name: 'Gemeentegrenzen',
    url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms',
};

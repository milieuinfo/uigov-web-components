import { html, nothing } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-image-wms-layer';
import { wmsLayerArgTypes, wmsLayerArgs } from './vl-map-wms-layer.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';

export default {
    title: 'map/layer/wms-layer',
    args: wmsLayerArgs,
    argTypes: wmsLayerArgTypes,
} as Meta<typeof wmsLayerArgs>;

export const imageWmsLayerDefault: StoryFn<typeof wmsLayerArgs> = ({
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
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-image-wms-layer
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
        </vl-map-image-wms-layer>
    </vl-map>
`;
imageWmsLayerDefault.storyName = 'vl-map-image-wms-layer - default';
imageWmsLayerDefault.args = {
    ...wmsLayerArgs,
    layers: 'grondwater:beschermingszones_2014',
    name: 'Beschermingszones',
    opacity: 0.7,
    url: 'https://www.dov.vlaanderen.be/geoserver/wms',
};

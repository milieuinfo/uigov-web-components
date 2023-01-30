import { html } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-tiled-wms-layer';
import { wmsLayerArgTypes } from './vl-map-wms-layer.stories-arg';
import { layerArgTypes } from '../../stories/vl-map-layer.stories-arg';

export default {
    title: 'map/layer/wms-layer',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    argTypes: { ...wmsLayerArgTypes, ...layerArgTypes },
};

export const tiledWmsLayerDefault = () => html`
    <vl-map>
        <vl-map-tiled-wms-layer
            data-vl-name="Gemeentegrenzen"
            data-vl-version="1.3.0"
            data-vl-opacity="1"
            data-vl-url="https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms"
            data-vl-layers="GEM_GRENS"
        >
        </vl-map-tiled-wms-layer>
    </vl-map>
`;
tiledWmsLayerDefault.storyName = 'vl-map-tiled-wms-layer - default';

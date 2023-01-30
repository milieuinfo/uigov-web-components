import { html } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-image-wms-layer';
import { wmsLayerArgTypes } from './vl-map-wms-layer.stories-arg';
import { layerArgTypes } from '../../stories/vl-map-layer.stories-arg';

export default {
    title: 'map/layer/wms-layer',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    argTypes: { ...wmsLayerArgTypes, ...layerArgTypes },
};

export const imageWmsLayerDefault = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-image-wms-layer
            data-vl-name="Beschermingszones"
            data-vl-version="1.3.0"
            data-vl-opacity="0.7"
            data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
            data-vl-layers="grondwater:beschermingszones_2014"
        >
        </vl-map-image-wms-layer>
    </vl-map>
`;
imageWmsLayerDefault.storyName = 'vl-map-image-wms-layer - default';

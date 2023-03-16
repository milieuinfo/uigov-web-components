import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../../layer/vector-layer/vl-map-features-layer';
import '../../layer-style/vl-map-layer-circle-style';
import '../../controls/vl-map-action-controls';
import '../../controls/measure-control/vl-map-measure-control';
import '../vl-map-legend';
import {
    legendSingleFeaturesLayerSingleStyleArgs,
    legendSingleFeaturesLayerSingleStyleArgTypes,
} from './vl-map-legend-single-features-layer-single-style.stories-arg';

export default {
    title: 'map/legend',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: legendSingleFeaturesLayerSingleStyleArgs,
    argTypes: legendSingleFeaturesLayerSingleStyleArgTypes,
};

export const legendSingleFeaturesLayerSingleStyle = (props) => {
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147055.0, 197908.0],
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [141000.0, 200908.0],
                },
            },
        ],
    };

    return html` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features} data-vl-name="Laag 1">
            <vl-map-layer-circle-style
                data-vl-name="Openbaar onderzoek"
                data-vl-color="#ffe615"
                data-vl-size="5"
                data-vl-border-color="#000"
                data-vl-border-size="1"
            ></vl-map-layer-circle-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-legend
            data-vl-placement="${props.placement}"
            top="${ifDefined(props.top)}"
            right="${ifDefined(props.right)}"
            bottom="${ifDefined(props.bottom)}"
            left="${ifDefined(props.left)}"
        ></vl-map-legend>
    </vl-map>`;
};
legendSingleFeaturesLayerSingleStyle.storyName = 'vl-map-legend - single features single style';

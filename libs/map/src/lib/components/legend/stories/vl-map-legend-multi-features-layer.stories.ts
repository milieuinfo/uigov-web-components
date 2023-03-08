import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../../layer/vector-layer/vl-map-features-layer';
import '../../layer-style/vl-map-layer-circle-style';
import '../../controls/vl-map-action-controls';
import '../../controls/vl-map-measure-control';
import '../vl-map-legend';
import {
    legendMultiFeaturesLayerArgs,
    legendMultiFeaturesLayerArgTypes,
} from './vl-map-legend-multi-features-layer.stories-arg';

export default {
    title: 'map/legend',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: legendMultiFeaturesLayerArgs,
    argTypes: legendMultiFeaturesLayerArgTypes,
};

export const legendMultiFeaturesLayer = (props) => {
    const features1 = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147055.0, 197908.0],
                },
                properties: {
                    featureCharacter: 'O',
                    zIndex: '1',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147075.0, 197908.0],
                },
                properties: {
                    featureCharacter: 'O',
                    zIndex: '2',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147095.0, 197908.0],
                },
                properties: {
                    featureCharacter: 'O',
                    zIndex: '3',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147105.0, 197908.0],
                },
                properties: {
                    featureCharacter: 'O',
                    zIndex: '4',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147106.0, 197908.0],
                },
                properties: {
                    featureCharacter: 'O',
                    zIndex: '5',
                },
            },
        ],
    };

    const features2 = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [141000.0, 200908.0],
                },
                properties: {
                    featureCharacter: 'B',
                    zIndex: '5',
                },
            },
        ],
    };

    const features3 = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [153055.0, 203908.0],
                },
                properties: {
                    featureCharacter: 'A',
                    zIndex: '5',
                },
            },
        ],
    };
    return html` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features1} data-vl-name="Openbare onderzoeken laag">
            <vl-map-layer-circle-style
                data-vl-color="#ffe615"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-border-size="1"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${features2} data-vl-name="Beslissingen laag">
            <vl-map-layer-circle-style
                data-vl-name="Beslissing"
                data-vl-color="red"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-border-size="1"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${features3}>
            <vl-map-layer-circle-style
                data-vl-color="green"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-border-size="1"
                data-vl-text-size="bold 14px"
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
legendMultiFeaturesLayer.storyName = 'vl-map-legend - multi features layer';

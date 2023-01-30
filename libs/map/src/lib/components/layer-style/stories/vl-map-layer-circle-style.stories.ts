import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../../layer/vector-layer/vl-map-features-layer';
import '../vl-map-layer-circle-style';
import { layerCircleStyleArgTypes } from './vl-map-layer-circle-style.stories-arg';

export default {
    title: 'map/layer-style',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    argTypes: layerCircleStyleArgTypes,
};

export const layerCircleStyleDefault = () => {
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
        ],
    };
    return html` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features}>
            <vl-map-layer-circle-style
                data-vl-color="#ffe615"
                data-vl-size="5"
                data-vl-border-color="#000"
                data-vl-border-size="1"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
    </vl-map>`;
};
layerCircleStyleDefault.storyName = 'vl-map-layer-circle-style - default';

export const layerCircleStyleClusteredFeaturesWithLabels = () => {
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147055.0, 197108.0],
                },
                properties: {
                    label: 'Punt 1',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147155.0, 197208.0],
                },
                properties: {
                    label: 'Punt 2',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147255.0, 197308.0],
                },
                properties: {
                    label: 'Punt 3',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147355.0, 197308.0],
                },
                properties: {
                    label: 'Punt 4',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147455.0, 197408.0],
                },
                properties: {
                    label: 'Punt 5',
                },
            },
        ],
    };

    return html` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer data-vl-cluster data-vl-cluster-distance="100" .features=${features}>
            <vl-map-layer-circle-style
                data-vl-color="#ffe615"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-border-size="1"
                data-vl-text-feature-attribute-name="label"
                data-vl-text-color="black"
                data-vl-text-size="20px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
    </vl-map>`;
};
layerCircleStyleClusteredFeaturesWithLabels.storyName = 'vl-map-layer-circle-style - clustered features';

export const layerCircleStyleNonClusteredFeaturesWithLabels = () => {
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147055.0, 197108.0],
                },
                properties: {
                    label: 'Punt 1',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147155.0, 197208.0],
                },
                properties: {
                    label: 'Punt 2',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147255.0, 197308.0],
                },
                properties: {
                    label: 'Punt 3',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147355.0, 197308.0],
                },
                properties: {
                    label: 'Punt 4',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147455.0, 197408.0],
                },
                properties: {
                    label: 'Punt 5',
                },
            },
        ],
    };

    return html` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features}>
            <vl-map-layer-circle-style
                data-vl-color="#ffe615"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-border-size="1"
                data-vl-text-feature-attribute-name="label"
                data-vl-text-color="black"
                data-vl-text-size="20px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
    </vl-map>`;
};
layerCircleStyleNonClusteredFeaturesWithLabels.storyName = 'vl-map-layer-circle-style - non clustered features';

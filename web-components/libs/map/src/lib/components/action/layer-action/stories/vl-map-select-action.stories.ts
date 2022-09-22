import { mapSelectActionArgs, mapSelectActionArgTypes } from './vl-map-select-action.stories-arg';
import { html } from 'lit';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer';
import '../vl-map-select-action';

export default {
    title: 'map/layer-actions',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: mapSelectActionArgs,
    argTypes: mapSelectActionArgTypes,
};

export const selectActionDefault = ({ active }) => {
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                id: 1,
                geometry: { type: 'Point', coordinates: [147055.0, 197908.0] },
            },
            {
                type: 'Feature',
                id: 2,
                geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
            },
            {
                type: 'Feature',
                id: 3,
                geometry: { type: 'Point', coordinates: [151055.0, 201908.0] },
            },
        ],
    };

    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${features}>
                <vl-map-select-action .active=${active}></vl-map-select-action>
            </vl-map-features-layer>
        </vl-map>
    `;
};
selectActionDefault.storyName = 'vl-map-select-action - default';

export const selectActionWithDefaultActive = () => {
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                id: 1,
                geometry: { type: 'Point', coordinates: [147055.0, 197908.0] },
            },
            {
                type: 'Feature',
                id: 2,
                geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
            },
            {
                type: 'Feature',
                id: 3,
                geometry: { type: 'Point', coordinates: [151055.0, 201908.0] },
            },
        ],
    };

    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${features}>
                <vl-map-select-action data-vl-default-active></vl-map-select-action>
            </vl-map-features-layer>
        </vl-map>
    `;
};
selectActionWithDefaultActive.storyName = 'vl-map-select-action - with default active';
selectActionWithDefaultActive.argTypes = {
    active: {
        control: {
            disable: true,
        },
    },
};

export const selectActionWithClustering = ({ active }) => {
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                id: 1,
                geometry: { type: 'Point', coordinates: [147055.0, 197908.0] },
            },
            {
                type: 'Feature',
                id: 2,
                geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
            },
            {
                type: 'Feature',
                id: 3,
                geometry: { type: 'Point', coordinates: [151055.0, 201908.0] },
            },
        ],
    };

    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer data-vl-cluster data-vl-cluster-distance="100" .features=${features}>
                <vl-map-select-action .active=${active} data-vl-cluster></vl-map-select-action>
            </vl-map-features-layer>
        </vl-map>
    `;
};
selectActionWithClustering.storyName = 'vl-map-select-action - with clustering';

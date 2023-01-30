import { html } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-features-layer';
import { featuresLayerArgTypes } from './vl-map-features-layer.stories-arg';

export default {
    title: 'map/layer/vector-layer',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    argTypes: featuresLayerArgTypes,
};

export const featuresLayerDefault = () => {
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                id: 1,
                geometry: { type: 'Point', coordinates: [210000, 190000] },
            },
            {
                type: 'Feature',
                id: 2,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [170000, 170000],
                        [150000, 206000],
                    ],
                },
            },
            {
                type: 'Feature',
                id: 3,
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [44000, 171000],
                            [100000, 171000],
                            [100000, 205000],
                            [44000, 205000],
                            [44000, 171000],
                        ],
                    ],
                },
            },
        ],
    };

    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${features}></vl-map-features-layer>
        </vl-map>
    `;
};
featuresLayerDefault.storyName = 'vl-map-features-layer - default';

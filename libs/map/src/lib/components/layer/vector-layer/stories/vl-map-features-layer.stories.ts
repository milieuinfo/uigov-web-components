import { html, nothing } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-features-layer';
import { featuresLayerArgs, featuresLayerArgTypes } from './vl-map-features-layer.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';

export default {
    title: 'map/layer/vector-layer',
    args: featuresLayerArgs,
    argTypes: featuresLayerArgTypes,
} as Meta<typeof featuresLayerArgs>;

export const featuresLayerDefault: StoryFn<typeof featuresLayerArgs> = ({
    autoExtent,
    autoExtentMaxZoom,
    cluster,
    clusterDistance,
    features,
    hidden,
    maxResolution,
    minResolution,
    name,
    opacity,
    featuresProp,
}) => {
    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer
                ?data-vl-auto-extent=${autoExtent}
                data-vl-auto-extent-max-zoom=${autoExtentMaxZoom || nothing}
                ?data-vl-cluster=${cluster}
                data-vl-cluster-distance=${clusterDistance || nothing}
                data-vl-features=${features || nothing}
                .features=${featuresProp}
                ?data-vl-hidden=${hidden}
                data-vl-max-resolution=${maxResolution ?? nothing}
                data-vl-min-resolution=${minResolution ?? nothing}
                data-vl-name=${name || nothing}
                data-vl-opacity=${opacity !== 1 ? opacity : nothing}
            ></vl-map-features-layer>
        </vl-map>
    `;
};
featuresLayerDefault.storyName = 'vl-map-features-layer - default';
featuresLayerDefault.args = {
    ...featuresLayerArgs,
    featuresProp: {
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
    },
};

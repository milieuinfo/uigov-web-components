import { mapActionArgs, mapActionArgTypes } from '../../stories/vl-map-action.stories-arg';
import { html } from 'lit';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer';
import '../../../layer-style/vl-map-layer-style';
import '../vl-map-delete-action';

export default {
    title: 'map/action/layer-action',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: mapActionArgs,
    argTypes: mapActionArgTypes,
};

export const deleteActionDefault = ({ active }) => {
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
            <vl-map-features-layer .features=${features}>
                <vl-map-delete-action .active=${active}></vl-map-delete-action>
            </vl-map-features-layer>
        </vl-map>
    `;
};
deleteActionDefault.storyName = 'vl-map-delete-action - default';

export const deleteActionWithCustomStyle = ({ active }) => {
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
                        [150000, 162000],
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
            <vl-map-features-layer .features=${features}>
                <vl-map-delete-action .active=${active}>
                    <vl-map-layer-style
                        data-vl-text-color="#000"
                        data-vl-color="#FFE615"
                        data-vl-border-color="#FFE615"
                    ></vl-map-layer-style>
                </vl-map-delete-action>
            </vl-map-features-layer>
        </vl-map>
    `;
};
deleteActionWithCustomStyle.storyName = 'vl-map-delete-action - with custom style';

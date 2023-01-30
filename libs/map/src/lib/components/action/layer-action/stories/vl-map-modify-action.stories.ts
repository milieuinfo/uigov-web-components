import { mapModifyActionArgs, mapModifyActionArgTypes } from './vl-map-modify-action.stories-arg';
import { html } from 'lit';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer';
import '../../../layer/vector-layer/vl-map-wfs-layer';
import '../../../layer-style/vl-map-layer-style';
import '../vl-map-modify-action';

export default {
    title: 'map/action/layer-action',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: mapModifyActionArgs,
    argTypes: mapModifyActionArgTypes,
};

export const modifyActionDefault = ({ active }) => {
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                id: 1,
                geometry: { type: 'Point', coordinates: [157836.54, 190879.51] },
            },
            {
                type: 'Feature',
                id: 2,
                geometry: { type: 'Point', coordinates: [152161.53, 212358.26] },
            },
            {
                type: 'Feature',
                id: 3,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [157836.54, 190879.51],
                        [152161.53, 212358.26],
                    ],
                },
            },
            {
                type: 'Feature',
                id: 4,
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [104896.56, 193972.22],
                            [157836.54, 190879.51],
                            [152161.53, 212358.26],
                            [173780.97, 174292.43],
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
                <vl-map-modify-action .active=${active}></vl-map-modify-action>
            </vl-map-features-layer>
        </vl-map>
    `;
};
modifyActionDefault.storyName = 'vl-map-modify-action - default';

export const modifyActionWithSnapping = ({ active, snapping, snappingPixelTolerance }) => {
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                id: 1,
                geometry: { type: 'Point', coordinates: [151285.5138477709, 211586.43498009123] },
            },
        ],
    };

    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${features} data-vl-auto-extent>
                <vl-map-modify-action
                    .active=${active}
                    ?data-vl-snapping=${snapping}
                    data-vl-snapping-pixel-tolerance=${snappingPixelTolerance}>
                    <vl-map-wfs-layer
                        data-vl-name="Stromend waterlichamen"
                        data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                        data-vl-layers="owl_l"
                        data-vl-max-resolution="4">
                </vl-map-modify-action>
            </vl-map-features-layer>
        </vl-map>
    `;
};
modifyActionWithSnapping.storyName = 'vl-map-modify-action - with snapping';

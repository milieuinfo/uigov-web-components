import { html } from 'lit';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../../../layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import '../../../../layer-style/vl-map-layer-style';
import '../../../../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import '../vl-map-modify-action';
import { mapModifyActionArgs, mapModifyActionArgTypes } from './vl-map-modify-action.stories-arg';
import mapModifyActionDoc from './vl-map-modify-action.stories-doc.mdx';
import { Meta } from '@storybook/web-components';
import { story, storyArgs, storyArgTypes } from '@domg-wc/common-storybook';

export default {
    title: 'map/action/layer-action/modify-action',
    args: storyArgs(mapModifyActionArgs),
    argTypes: storyArgTypes(mapModifyActionArgTypes),
    parameters: {
        docs: {
            page: mapModifyActionDoc,
        },
    },
} as Meta<typeof mapModifyActionArgs>;

export const MapModifyActionDefault = story(mapModifyActionArgs, ({ active, defaultActive }) => {
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                id: 1,
                geometry: {
                    type: 'Point',
                    coordinates: [127836.54, 200879.51],
                },
            },
            {
                type: 'Feature',
                id: 2,
                geometry: {
                    type: 'Point',
                    coordinates: [122161.53, 185358.26],
                },
            },
            {
                type: 'Feature',
                id: 3,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [107836.54, 170879.51],
                        [102161.53, 192358.26],
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
                            [147055.0, 197908.0],
                            [157055.0, 197908.0],
                            [157055.0, 187908.0],
                            [147055.0, 187908.0],
                            [147055.0, 197908.0],
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
                <vl-map-modify-action .active=${active} ?data-vl-default-active=${defaultActive}></vl-map-modify-action>
                <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
                <vl-map-layer-circle-style data-vl-border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `;
});
MapModifyActionDefault.storyName = 'vl-map-modify-action - default';
MapModifyActionDefault.args = {
    active: true,
};

export const MapModifyActionSnapping = story(
    mapModifyActionArgs,
    ({ active, defaultActive, snapping, snappingPixelTolerance }) => {
        const features = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    id: 1,
                    geometry: {
                        type: 'Point',
                        coordinates: [151285.5138477709, 211586.43498009123],
                    },
                },
            ],
        };

        return html`
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-features-layer .features=${features}>
                    <vl-map-modify-action
                        .active=${active}
                        ?data-vl-default-active=${defaultActive}
                        ?data-vl-snapping=${snapping}
                        data-vl-snapping-pixel-tolerance=${snappingPixelTolerance}
                    >
                        <vl-map-wfs-layer
                            data-vl-name="Stromend waterlichamen"
                            data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                            data-vl-layers="owl_l"
                            data-vl-max-resolution="4"
                        ></vl-map-wfs-layer>
                    </vl-map-modify-action>
                    <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
                    <vl-map-layer-circle-style data-vl-border-size="2"></vl-map-layer-circle-style>
                </vl-map-features-layer>
            </vl-map>
        `;
    }
);
MapModifyActionSnapping.storyName = 'vl-map-modify-action - snapping';
MapModifyActionSnapping.args = {
    active: true,
    snapping: true,
    snappingPixelTolerance: 1000,
};

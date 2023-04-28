import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../baselayer/vl-map-base-layer-grb/vl-map-base-layer-grb';
import '../../baselayer/vl-map-base-layer-grb-ortho/vl-map-base-layer-grb-ortho';
import '../../overview-map/vl-map-overview-map';
import '../../side-sheet/vl-map-side-sheet';
import '../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import '../../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import '../../layer/wmts-layer/vl-map-wmts-layer';
import '../../layer/wms-layer/vl-map-tiled-wms-layer/vl-map-tiled-wms-layer';
import '../vl-map-layer-switcher';
import { storyControlTemplates, mapLayersToAddOrRemove } from './vl-map-layer-switcher.stories-templates';
import { Meta, StoryFn } from '@storybook/web-components';
import mapLayerSwitcherDoc from './vl-map-layer-switcher.stories-doc.mdx';
import { dynamicLayerSwitcherImplementation } from './vl-map-layer-switcher.stories-utils';

export default {
    title: 'map/layer-switcher',
    parameters: {
        controls: {
            hideNoControlsWarning: true,
        },
        docs: {
            page: mapLayerSwitcherDoc,
        },
    },
} as Meta;

export const MapLayerSwitcherDefault: StoryFn = () => {
    const features1 = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
            },
        ],
    };
    const features2 = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [154055.0, 199908.0] },
            },
        ],
    };
    const features3 = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [159055.0, 199908.0] },
            },
        ],
    };

    return html`
        <vl-map>
            <vl-map-side-sheet>
                <vl-map-layer-switcher></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-overview-map></vl-map-overview-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
            <vl-map-features-layer data-vl-name="Kaartlaag 1" .features=${features1}>
                <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer data-vl-name="Kaartlaag 2" .features=${features2}>
                <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer data-vl-name="Kaartlaag 3" .features=${features3}>
                <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-wmts-layer
                data-vl-url="https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts"
                data-vl-layer="grb_sel"
                data-vl-name="WMTS kaartlaag"
            >
            </vl-map-wmts-layer>
            <vl-map-tiled-wms-layer
                data-vl-name="WMS kaartlaag"
                data-vl-version="1.3.0"
                data-vl-opacity="1"
                data-vl-url="https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms"
                data-vl-layers="GEM_GRENS"
            >
            </vl-map-tiled-wms-layer>
            <vl-map-wfs-layer
                data-vl-name="WFS kaartlaag"
                data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                data-vl-layers="owl_l"
                data-vl-max-resolution="8"
            >
            </vl-map-wfs-layer>
        </vl-map>
    `;
};
MapLayerSwitcherDefault.storyName = 'vl-map-layer-switcher - default';

export const MapLayerSwitcherSpecialisedOptions = () => {
    const features1 = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
            },
        ],
    };
    const features2 = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [154055.0, 199908.0] },
            },
        ],
    };
    const features3 = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [159055.0, 199908.0] },
            },
        ],
    };

    return html`
        <vl-map>
            <vl-map-side-sheet>
                <vl-map-layer-switcher>
                    <vl-checkbox data-vl-label="Kaartlaag" data-vl-layer="layer-1"></vl-checkbox>
                </vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-overview-map></vl-map-overview-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
            <vl-map-features-layer data-vl-name="layer-1" .features=${features1}>
                <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer data-vl-name="layer-2" .features=${features2}>
                <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer data-vl-name="layer-3" .features=${features3}>
                <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `;
};
MapLayerSwitcherSpecialisedOptions.storyName = 'vl-map-layer-switcher - specialised options';

export const MapLayerSwitcherResolutionOption = () => {
    const features1 = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [149055.0, 199908.0] },
            },
        ],
    };
    const features2 = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [154055.0, 199908.0] },
            },
        ],
    };

    return html`
        <vl-map>
            <vl-map-side-sheet>
                <vl-map-layer-switcher>
                    <vl-checkbox data-vl-label="Kaartlaag" data-vl-layer="layer"></vl-checkbox>
                    <vl-checkbox data-vl-label="Kaartlaag met resolutie" data-vl-layer="resolution-layer"></vl-checkbox>
                </vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-overview-map></vl-map-overview-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
            <vl-map-features-layer data-vl-name="layer" .features=${features1}>
                <vl-map-layer-circle-style></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                data-vl-name="resolution-layer"
                data-vl-min-resolution="128"
                data-vl-max-resolution="256"
                .features=${features2}
            >
                <vl-map-layer-circle-style></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `;
};
MapLayerSwitcherResolutionOption.storyName = 'vl-map-layer-switcher - resolution option';

export const MapLayerSwitcherDynamic = () => {
    const layerIds = ['zwart', 'geel', 'rood'];
    const { handleAddLayerForId, handleRemoveLayerForId } = dynamicLayerSwitcherImplementation();

    return html`
        ${storyControlTemplates(layerIds, handleAddLayerForId, handleRemoveLayerForId)} ${mapLayersToAddOrRemove()}
        <vl-map id="map-dynamic-layers">
            <vl-map-side-sheet id="dynamic-layer-switcher">
                <vl-map-layer-switcher></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-overview-map></vl-map-overview-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    `;
};
MapLayerSwitcherDynamic.storyName = 'vl-map-layer-switcher - dynamic';

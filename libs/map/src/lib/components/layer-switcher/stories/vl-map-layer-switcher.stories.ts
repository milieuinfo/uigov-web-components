import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../side-sheet/vl-map-side-sheet';
import '../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import '../vl-map-layer-switcher';
import { storyControlTemplates, mapLayersToAddOrRemove } from './vl-map-layer-switcher.stories-templates';
import { Meta, StoryFn } from '@storybook/web-components';
import mapLayerSwitcherDoc from './vl-map-layer-switcher.stories-doc.mdx';
import { dynamicLayerSwitcherImplementation } from './vl-map-layer-switcher.stories-utils';
import { mapLayerSwitcherArgTypes, mapLayerSwitcherArgs } from './vl-map-layer-switcher.stories-arg';
import { setDefaultArgsToNothing } from '@domg-wc/common-storybook';

export default {
    title: 'map/layer-switcher',
    args: mapLayerSwitcherArgs,
    argTypes: mapLayerSwitcherArgTypes,
    parameters: {
        docs: {
            page: mapLayerSwitcherDoc,
        },
    },
} as Meta<typeof mapLayerSwitcherArgs>;

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

const Template: StoryFn<typeof mapLayerSwitcherArgs> = (args) => {
    const { title, layers } = setDefaultArgsToNothing(args, mapLayerSwitcherArgs);

    return html`
        <vl-map>
            <vl-map-side-sheet>
                <vl-map-layer-switcher data-vl-title=${title} .layers=${layers}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer data-vl-name="Kaartlaag 1" .features=${features1}>
                <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer data-vl-name="Kaartlaag 2" .features=${features2}>
                <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer data-vl-name="Kaartlaag 3" .features=${features3}>
                <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            </vl-map-wmts-layer>
            </vl-map-wfs-layer>
        </vl-map>
    `;
};

export const MapLayerSwitcherDefault: StoryFn<typeof mapLayerSwitcherArgs> = Template.bind({});
MapLayerSwitcherDefault.storyName = 'vl-map-layer-switcher - default';

export const MapLayerSwitcherSubselection: StoryFn<typeof mapLayerSwitcherArgs> = Template.bind({});
MapLayerSwitcherSubselection.storyName = 'vl-map-layer-switcher - subselection';
MapLayerSwitcherSubselection.args = {
    layers: ['Kaartlaag 1', 'Kaartlaag 2'],
};

export const MapLayerSwitcherResolutions: StoryFn<typeof mapLayerSwitcherArgs> = (args) => {
    const { title, layers } = setDefaultArgsToNothing(args, mapLayerSwitcherArgs);

    return html`
        <vl-map>
            <vl-map-side-sheet>
                <vl-map-layer-switcher data-vl-title=${title} .layers=${layers}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer
                data-vl-name="Kaartlaag met resolutie 1"
                data-vl-min-resolution="0"
                data-vl-max-resolution="90"
                .features=${features1}
            >
                <vl-map-layer-circle-style data-vl-color="black"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                data-vl-name="Kaartlaag met resolutie 2"
                data-vl-min-resolution="90"
                data-vl-max-resolution="180"
                .features=${features2}
            >
                <vl-map-layer-circle-style data-vl-color="yellow"></vl-map-layer-circle-style>
            </vl-map-features-layer>
            <vl-map-features-layer
                data-vl-name="Kaartlaag met resolutie 3"
                data-vl-min-resolution="180"
                data-vl-max-resolution="270"
                .features=${features3}
            >
                <vl-map-layer-circle-style data-vl-color="red"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `;
};
MapLayerSwitcherResolutions.storyName = 'vl-map-layer-switcher - resolutions';

export const MapLayerSwitcherDynamic: StoryFn<typeof mapLayerSwitcherArgs> = (args) => {
    const { title, layers } = setDefaultArgsToNothing(args, mapLayerSwitcherArgs);
    const layerIds = ['zwart', 'geel', 'rood'];
    const { handleAddLayerForId, handleRemoveLayerForId } = dynamicLayerSwitcherImplementation();

    return html`
        ${storyControlTemplates(layerIds, handleAddLayerForId, handleRemoveLayerForId)} ${mapLayersToAddOrRemove()}
        <vl-map id="map-dynamic-layers">
            <vl-map-side-sheet>
                <vl-map-layer-switcher data-vl-title=${title} .layers=${layers}></vl-map-layer-switcher>
            </vl-map-side-sheet>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `;
};
MapLayerSwitcherDynamic.storyName = 'vl-map-layer-switcher - dynamic layers';

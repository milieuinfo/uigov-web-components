import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../layer-style/vl-map-layer-style';
import '../../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import '../../action/draw-action/measure-action/vl-map-measure-action';
import '../../controls/vl-map-action-controls';
import '../../controls/measure-control/vl-map-measure-control';
import '../vl-map-legend';
import { Meta, StoryFn } from '@storybook/web-components';
import { mapLegendArgTypes, mapLegendArgs } from './vl-map-legend.stories-arg';
import mapLegendDoc from './vl-map-legend.stories-doc.mdx';
import { setDefaultArgsToNothing } from '@domg-wc/common-utilities';

export default {
    title: 'map/legend',
    args: mapLegendArgs,
    argTypes: mapLegendArgTypes,
    parameters: {
        docs: {
            page: mapLegendDoc,
        },
    },
} as Meta<typeof mapLegendArgs>;

export const MapLegendMultipleFeaturesLayers: StoryFn<typeof mapLegendArgs> = (args) => {
    const { bottom, left, placement, right, top } = setDefaultArgsToNothing(args, mapLegendArgs);
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
                    featureCharacter: 'W',
                    zIndex: '5',
                },
            },
        ],
    };

    return html` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-features-layer data-vl-name="Measurements">
            <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${features1} data-vl-name="Openbare onderzoeken">
            <vl-map-layer-circle-style
                data-vl-color="#ffe615"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-border-size="1"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${features2} data-vl-name="Beslissingen">
            <vl-map-layer-circle-style
                data-vl-color="red"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-border-size="1"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${features3} data-vl-name="Wateroppervlaktes">
            <vl-map-layer-circle-style
                data-vl-color="green"
                data-vl-size="10"
                data-vl-border-color="#000"
                data-vl-text-feature-attribute-name="featureCharacter"
                data-vl-border-size="1"
                data-vl-text-size="bold 14px"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-legend
            data-vl-placement=${placement}
            bottom=${bottom}
            top=${top}
            right=${right}
            left=${left}
        ></vl-map-legend>
    </vl-map>`;
};
MapLegendMultipleFeaturesLayers.storyName = 'vl-map-legend - multiple features-layers';

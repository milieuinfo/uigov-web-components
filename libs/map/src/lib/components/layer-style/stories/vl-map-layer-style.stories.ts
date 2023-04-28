import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../vl-map-layer-style';
import { mapLayerStyleArg, mapLayerStyleArgTypes } from './vl-map-layer-style.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import mapLayerStyleDoc from './vl-map-layer-style.stories-doc.mdx';
import { setDefaultArgsToNothing } from '@domg-wc/common-utilities';

export default {
    title: 'map/layer-style',
    args: mapLayerStyleArg,
    argTypes: mapLayerStyleArgTypes,
    parameters: {
        docs: {
            page: mapLayerStyleDoc,
        },
    },
} as Meta<typeof mapLayerStyleArg>;

const Template: StoryFn<typeof mapLayerStyleArg> = (args) => {
    const {
        borderColor,
        borderSize,
        color,
        name,
        textBackgroundColor,
        textBorderColor,
        textBorderSize,
        textColor,
        textFeatureAttributeName,
        textOffsetX,
        textOffsetY,
        textSize,
    } = setDefaultArgsToNothing(args, mapLayerStyleArg);

    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
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
                properties: { label: 'Text' },
            },
        ],
    };

    return html` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features}>
            <vl-map-layer-style
                data-vl-border-color=${borderColor}
                data-vl-border-size=${borderSize}
                data-vl-color=${color}
                data-vl-name=${name}
                data-vl-text-background-color=${textBackgroundColor}
                data-vl-text-border-color=${textBorderColor}
                data-vl-text-border-size=${textBorderSize}
                data-vl-text-color=${textColor}
                data-vl-text-feature-attribute-name=${textFeatureAttributeName}
                data-vl-text-offset-x=${textOffsetX}
                data-vl-text-offset-y=${textOffsetY}
                data-vl-text-size=${textSize}
            >
            </vl-map-layer-style>
        </vl-map-features-layer>
    </vl-map>`;
};
export const MapLayerStyleDefault: StoryFn<typeof mapLayerStyleArg> = Template.bind({});
MapLayerStyleDefault.storyName = 'vl-map-layer-style - default';

export const MapLayerStyleText: StoryFn<typeof mapLayerStyleArg> = Template.bind({});
MapLayerStyleText.storyName = 'vl-map-layer-style - text';
MapLayerStyleText.args = {
    ...mapLayerStyleArg,
    textColor: 'rgba(255, 255, 255, 1)',
    textFeatureAttributeName: 'label',
    textSize: '12px',
};

export const MapLayerStyleLegend: StoryFn<typeof mapLayerStyleArg> = (args) => {
    const {
        borderColor,
        borderSize,
        color,
        name,
        textBackgroundColor,
        textBorderColor,
        textBorderSize,
        textColor,
        textFeatureAttributeName,
        textOffsetX,
        textOffsetY,
        textSize,
    } = setDefaultArgsToNothing(args, mapLayerStyleArg);

    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
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
                properties: { label: 'Text' },
            },
        ],
    };

    return html` <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features}>
            <vl-map-layer-style
                data-vl-border-color=${borderColor}
                data-vl-border-size=${borderSize}
                data-vl-color=${color}
                data-vl-name=${name}
                data-vl-text-background-color=${textBackgroundColor}
                data-vl-text-border-color=${textBorderColor}
                data-vl-text-border-size=${textBorderSize}
                data-vl-text-color=${textColor}
                data-vl-text-feature-attribute-name=${textFeatureAttributeName}
                data-vl-text-offset-x=${textOffsetX}
                data-vl-text-offset-y=${textOffsetY}
                data-vl-text-size=${textSize}
            >
            </vl-map-layer-style>
        </vl-map-features-layer>
        <vl-map-legend></vl-map-legend>
    </vl-map>`;
};
MapLayerStyleLegend.storyName = 'vl-map-layer-style - legend';
MapLayerStyleLegend.args = {
    ...mapLayerStyleArg,
    name: 'Laag 1',
};

import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import '../vl-map-legend';
import { Meta, StoryFn } from '@storybook/web-components';
import { mapLegendArgTypes, mapLegendArgs } from './vl-map-legend.stories-arg';
import mapLegendDoc from './vl-map-legend.stories-doc.mdx';
import { setDefaultArgsToNothing } from '@domg-wc/common-storybook';

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

export const MapLegendFeaturesLayer: StoryFn<typeof mapLegendArgs> = (args) => {
    const { bottom, left, placement, right, top } = setDefaultArgsToNothing(args, mapLegendArgs);
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [147055.0, 197908.0],
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [141000.0, 200908.0],
                },
            },
        ],
    };

    return html` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features} data-vl-name="Laag 1">
            <vl-map-layer-circle-style
                data-vl-name="Openbaar onderzoek"
                data-vl-color="#ffe615"
                data-vl-size="5"
                data-vl-border-color="#000"
                data-vl-border-size="1"
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
MapLegendFeaturesLayer.storyName = 'vl-map-legend - features-layer';

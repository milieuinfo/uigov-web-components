import { html } from 'lit';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import '../../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import '../vl-map-legend';
import { mapLegendArgTypes, mapLegendArgs } from './vl-map-legend.stories-arg';
import mapLegendDoc from './vl-map-legend.stories-doc.mdx';
import { Meta } from '@storybook/web-components';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/legend',
    args: storyArgs(mapLegendArgs),
    argTypes: storyArgTypes(mapLegendArgTypes),
    parameters: {
        docs: {
            page: mapLegendDoc,
        },
    },
} as Meta<typeof mapLegendArgs>;

export const MapLegendWmsLayer = story(
    mapLegendArgs,
    ({ bottom, left, placement, right, top }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                data-vl-layers="grondwater:beschermingszones_2014"
                data-vl-name="Beschermingszones"
                data-vl-url="https://www.dov.vlaanderen.be/geoserver/wms"
            ></vl-map-tiled-wms-layer>
            <vl-map-legend
                data-vl-placement=${placement}
                bottom=${bottom}
                top=${top}
                right=${right}
                left=${left}
            ></vl-map-legend>
        </vl-map>
    `
);
MapLegendWmsLayer.storyName = 'vl-map-legend - wms-layer';

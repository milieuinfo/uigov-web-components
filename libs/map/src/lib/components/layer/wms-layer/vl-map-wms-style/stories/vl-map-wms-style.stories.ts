import { html } from 'lit-html';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-wms-style';
import '../../vl-map-tiled-wms-layer/vl-map-tiled-wms-layer';
import { Meta, StoryFn } from '@storybook/web-components';
import { mapWmsStyleArgs, mapWmsStyleArgTypes } from './vl-map-wms-style.stories-arg';
import mapWmsStyleDoc from './vl-map-wms-style.stories-doc.mdx';

export default {
    title: 'map/layer/wms-layer/wms-style',
    args: mapWmsStyleArgs,
    argTypes: mapWmsStyleArgTypes,
    parameters: {
        docs: {
            page: mapWmsStyleDoc,
        },
    },
} as Meta<typeof mapWmsStyleArgs>;

export const MapWmsStyleDefault: StoryFn<typeof mapWmsStyleArgs> = ({ sld }) => {
    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-tiled-wms-layer
                data-vl-name="Overstromingsgevaarkaarten"
                data-vl-version="1.1.0"
                data-vl-url="https://geoservice.waterinfo.be/wms"
                data-vl-layers="Overstromingsgevaarkaarten-PLUVIAAL:overstroombaar_gebied_PLU_noCC,Overstromingsgevaarkaarten-FLUVIAAL:overstroombaar_gebied_FLU_noCC"
            >
                <vl-map-wms-style data-vl-sld=${sld}></vl-map-wms-style>
            </vl-map-tiled-wms-layer>
        </vl-map>
    `;
};
MapWmsStyleDefault.storyName = 'vl-map-wms-style - default';

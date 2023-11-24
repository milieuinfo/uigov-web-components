import { html } from 'lit-html';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-wms-style';
import '../../vl-map-tiled-wms-layer/vl-map-tiled-wms-layer';
import { Meta } from '@storybook/web-components';
import { mapWmsStyleArgs, mapWmsStyleArgTypes } from './vl-map-wms-style.stories-arg';
import mapWmsStyleDoc from './vl-map-wms-style.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/layer/wms-layer/wms-style',
    tags: ['autodocs'],
    args: storyArgs(mapWmsStyleArgs),
    argTypes: storyArgTypes(mapWmsStyleArgTypes),
    parameters: {
        docs: {
            page: mapWmsStyleDoc,
        },
    },
} as Meta<typeof mapWmsStyleArgs>;

export const MapWmsStyleDefault = story(mapWmsStyleArgs, ({ sld }) => {
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
});
MapWmsStyleDefault.storyName = 'vl-map-wms-style - default';
MapWmsStyleDefault.args = {
    sld: `<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd">
    <NamedLayer>
        <Name>Overstromingsgevaarkaarten-PLUVIAAL:overstroombaar_gebied_PLU_noCC</Name>
        <UserStyle>
            <FeatureTypeStyle>
                <Rule>
                    <RasterSymbolizer>
                        <Opacity>1</Opacity>
                        <ColorMap type="values">
                            <ColorMapEntry color="#800080" quantity="10.0"/>
                            <ColorMapEntry color="#FFFFFF" quantity="100.0" opacity="0"/>
                            <ColorMapEntry color="#FFFFFF" quantity="1000.0" opacity="0"/>
                        </ColorMap>
                    </RasterSymbolizer>
                </Rule>
            </FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
    <NamedLayer>
        <Name>Overstromingsgevaarkaarten-FLUVIAAL:overstroombaar_gebied_FLU_noCC</Name>
        <UserStyle>
            <FeatureTypeStyle>
                <Rule>
                    <RasterSymbolizer>
                        <Opacity>1</Opacity>
                        <ColorMap type="values">
                            <ColorMapEntry color="#800080" quantity="10.0"/>
                            <ColorMapEntry color="#FFFFFF" quantity="100.0" opacity="0"/>
                            <ColorMapEntry color="#FFFFFF" quantity="1000.0" opacity="0"/>
                        </ColorMap>
                    </RasterSymbolizer>
                </Rule>
            </FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
  </StyledLayerDescriptor>`,
};

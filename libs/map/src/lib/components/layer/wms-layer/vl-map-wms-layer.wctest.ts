import { awaitUntil } from '@domg-wc/common-utilities';
import { assert, fixture, html } from '@open-wc/testing';
import '../../../vl-map';
import './vl-map-wms-style/vl-map-wms-style';
import './vl-map-image-wms-layer/vl-map-image-wms-layer';
import './vl-map-tiled-wms-layer/vl-map-tiled-wms-layer';

const mapFixture = async () => fixture(html` <vl-map></vl-map> `);

const wmsLayersFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-image-wms-layer data-vl-url="http://dummy/wms" data-vl-layers="layer1,layer2">
            </vl-map-image-wms-layer>

            <vl-map-tiled-wms-layer data-vl-url="http://dummy/wms" data-vl-layers="layer1,layer2">
            </vl-map-tiled-wms-layer>
        </vl-map>
    `);

const wmsLayersHiddenFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-image-wms-layer data-vl-url="http://dummy/wms" data-vl-layers="layer1,layer2" data-vl-hidden>
            </vl-map-image-wms-layer>

            <vl-map-tiled-wms-layer data-vl-url="http://dummy/wms" data-vl-layers="layer1,layer2" data-vl-hidden>
            </vl-map-tiled-wms-layer>
        </vl-map>
    `);

const wmsLayersSldFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-image-wms-layer data-vl-url="http://dummy/wms" data-vl-layers="layer1,layer2">
                <vl-map-wms-style
                    data-vl-sld='
            <StyledLayerDescriptor>
              <NamedLayer>
                <Name>ns:laagnaam</Name>
                <UserStyle>
                  <FeatureTypeStyle>
                    <Rule>
                      <RasterSymbolizer>
                        <ColorMap type="values">
                          <ColorMapEntry color="#800080" quantity="10.0"/>
                          <ColorMapEntry color="#FFFFFF" quantity="100.0"/>
                          <ColorMapEntry color="#FFFFFF" quantity="1000.0"/>
                        </ColorMap>
                      </RasterSymbolizer>
                    </Rule>
                  </FeatureTypeStyle>
                </UserStyle>
              </NamedLayer>
            </StyledLayerDescriptor>'
                >
                </vl-map-wms-style>
            </vl-map-image-wms-layer>

            <vl-map-tiled-wms-layer data-vl-url="http://dummy/wms" data-vl-layers="layer1,layer2">
                <vl-map-wms-style
                    data-vl-sld='
            <StyledLayerDescriptor>
              <NamedLayer>
                <Name>ns:laagnaam</Name>
                <UserStyle>
                  <FeatureTypeStyle>
                    <Rule>
                      <RasterSymbolizer>
                        <ColorMap type="values">
                          <ColorMapEntry color="#800080" quantity="10.0"/>
                          <ColorMapEntry color="#FFFFFF" quantity="100.0"/>
                          <ColorMapEntry color="#FFFFFF" quantity="1000.0"/>
                        </ColorMap>
                      </RasterSymbolizer>
                    </Rule>
                  </FeatureTypeStyle>
                </UserStyle>
              </NamedLayer>
            </StyledLayerDescriptor>'
                >
                </vl-map-wms-style>
            </vl-map-tiled-wms-layer>
        </vl-map>
    `);

describe('vl-map-wms-layer', () => {
    const LAYER_SELECTOR = '[data-vl-is-layer]';

    const getLayers = (map) => Array.from(map.querySelectorAll(LAYER_SELECTOR));

    it('de kaartlaag zal pas angemaakt worden na constructie zodat op moment van constructie nog niet al de attributen gekend moeten zijn', async () => {
        const types = ['image', 'tiled'];
        const map: any = await mapFixture();

        await Promise.all(
            types.map(async (type, index) => {
                const layer: any = document.createElement(`vl-map-${type}-wms-layer`);
                layer.setAttribute('data-vl-url', 'http://dummy/wms-adjusted');
                layer.setAttribute('data-vl-layers', 'layer1');
                layer.setAttribute('data-vl-styles', 'style1,style2');
                layer.setAttribute('data-vl-version', '1.1.1');
                layer.setAttribute('data-vl-opacity', '0.75');
                layer.setAttribute('data-vl-min-resolution', '10');
                layer.setAttribute('data-vl-max-resolution', '1000');
                layer.setAttribute('data-vl-name', 'adjusted');
                assert.isUndefined(layer.source);
                assert.isUndefined(layer.layer);
                map.appendChild(layer);
                await new Promise<void>((resolve) => {
                    setTimeout(() => {
                        assert.isDefined(layer.source);
                        assert.isDefined(layer.layer);
                        resolve();
                    });
                });
            })
        );

        assert.equal(map.map.getLayers().getLength(), types.length);
    });

    it('de kaartlaag kan bij creatie op hidden gezet worden', async () => {
        const mapVisible: any = await wmsLayersFixture();
        const mapHidden: any = await wmsLayersHiddenFixture();
        await mapVisible.ready;
        await mapHidden.ready;
        getLayers(mapVisible).forEach((element: any) => assert.isTrue(element.layer.getVisible()));
        getLayers(mapHidden).forEach((element: any) => assert.isFalse(element.layer.getVisible()));
    });

    it('de kaartlaag kan een sld body bevatten die overeenkomt met het data-vl-sld attribuut van de onderliggende vl-map-wms-style', async () => {
        const mapSld: any = await wmsLayersSldFixture();
        await mapSld.ready;
        await Promise.all(
            getLayers(mapSld).map(async (element: any) => {
                await awaitUntil(() => element.ready).then(() => {
                    assert.include(element.source.getParams().SLD_BODY, 'StyledLayerDescriptor');
                    assert.equal(
                        element.source.getParams().SLD_BODY,
                        element.querySelector(':scope > vl-map-wms-style').getAttribute('data-vl-sld')
                    );
                });
            })
        );
    });
});

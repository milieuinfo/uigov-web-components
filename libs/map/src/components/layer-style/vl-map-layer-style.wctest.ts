import { awaitUntil } from '@domg-wc/common-utilities';
import { assert, fixture, html } from '@open-wc/testing';
import '../../vl-map';
import '../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import './vl-map-layer-style';
import './vl-map-layer-circle-style/vl-map-layer-circle-style';

const mapLayerStyleFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-style></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapLayerStyleMetTextFeatureAttributeNameFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-style data-vl-text-feature-attribute-name="label"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapLayerStyleMetPropertiesFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-style
                    data-vl-color="rgba(255,0,0,0.5)"
                    data-vl-border-color="rgba(255,255,100,1)"
                    data-vl-border-size="2"
                    data-vl-text-feature-attribute-name="label"
                    data-vl-text-background-color="rgba(0,0,255,0.2)"
                    data-vl-text-border-color="rgba(0,255,0,1)"
                    data-vl-text-border-size="3"
                    data-vl-text-color="rgba(255,0,0,1)"
                    data-vl-text-offset-x="10"
                    data-vl-text-offset-y="-10"
                    data-vl-text-size="13px"
                ></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapLayerStyleMetMeerdereStijlenFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-style id="map-layer-style-red" data-vl-color="rgba(255,0,0,0.8)"></vl-map-layer-style>
                <vl-map-layer-style id="map-layer-style-green" data-vl-color="rgba(0,255,0,0.8)"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapLayerCircleStyleFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-circle-style></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map-layer-style', () => {
    const styles = [
        {
            tag: 'vl-map-layer-style',
            fixture: mapLayerStyleFixture,
        },
        {
            tag: 'vl-map-layer-circle-style',
            fixture: mapLayerCircleStyleFixture,
        },
    ];

    it('de style wordt goed geconfigureerd met default properties', async () => {
        const element: any = await mapLayerStyleFixture();
        const vlMapLayerStyleElement = element.querySelector('vl-map-layer-style');
        assert.equal(vlMapLayerStyleElement.color, 'rgba(2, 85, 204, 0.8)');
        assert.equal(vlMapLayerStyleElement.borderColor, 'rgba(2, 85, 204, 1)');
        assert.equal(vlMapLayerStyleElement.borderSize, 1);
        assert.equal(vlMapLayerStyleElement.textBackgroundColor, 'rgba(0, 0, 0, 0)');
        assert.equal(vlMapLayerStyleElement.textBorderColor, 'rgba(255, 255, 255, 0)');
        assert.equal(vlMapLayerStyleElement.textBorderSize, 1);
        assert.equal(vlMapLayerStyleElement.textColor, '#FFF');
        assert.equal(vlMapLayerStyleElement.textFeatureAttributeName, null);
        assert.equal(vlMapLayerStyleElement.featureAttributeName, null);
        assert.equal(vlMapLayerStyleElement.featureAttributeValue, null);
        assert.equal(vlMapLayerStyleElement.textOffsetX, 0);
        assert.equal(vlMapLayerStyleElement.textOffsetY, 0);
        assert.equal(vlMapLayerStyleElement.textSize, '10px');
        const style = vlMapLayerStyleElement.style();
        assert.equal(style.getFill().getColor(), 'rgba(2, 85, 204, 0.8)');
        assert.equal(style.getStroke().getColor(), 'rgba(2, 85, 204, 1)');
        assert.equal(style.getStroke().getWidth(), 1);
        assert.equal(style.getText().getFill().getColor(), '#FFF');
        assert.equal(style.getText().getOffsetX(), '0');
        assert.equal(style.getText().getOffsetY(), '0');
        assert.equal(style.getText().getFont(), '10px "Flanders Art Sans",sans-serif');
        assert.equal(style.getText().getBackgroundFill().getColor(), 'rgba(0, 0, 0, 0)');
        assert.equal(style.getText().getStroke().getColor(), 'rgba(255, 255, 255, 0)');
        assert.equal(style.getText().getStroke().getWidth(), 1);
        assert.equal(style.getText().getText(), '');
    });

    it('de style geeft null terug als de stijl niet valid is voor een feature', async () => {
        await Promise.all(
            styles.map(async (style) => {
                const element: any = await style.fixture();
                const styleElement = element.querySelector(style.tag);
                styleElement.appliesTo = () => false;
                assert.isNull(styleElement.style());
            })
        );
    });

    it('de style geeft niet null terug als de stijl valid is', async () => {
        await Promise.all(
            styles.map(async (style) => {
                const element: any = await style.fixture();
                const styleElement = element.querySelector(style.tag);
                styleElement.appliesTo = () => true;
                assert.isNotNull(styleElement.style());
            })
        );
    });

    it('als er een featureAttributeName gedefinieerd is, zal de tekst stijl ook beschikbaar zijn', async () => {
        const element: any = await mapLayerStyleMetTextFeatureAttributeNameFixture();
        const vlMapLayerStyleElement = element.querySelector('vl-map-layer-style');
        assert.equal(vlMapLayerStyleElement.textFeatureAttributeName, 'label');
        const style = vlMapLayerStyleElement.style({
            get: (property) => property + 1,
        });
        assert.equal(style.getText().getFill().getColor(), '#FFF');
        assert.equal(style.getText().getOffsetX(), '0');
        assert.equal(style.getText().getOffsetY(), '0');
        assert.equal(style.getText().getFont(), '10px "Flanders Art Sans",sans-serif');
        assert.equal(style.getText().getBackgroundFill().getColor(), 'rgba(0, 0, 0, 0)');
        assert.equal(style.getText().getStroke().getColor(), 'rgba(255, 255, 255, 0)');
        assert.equal(style.getText().getStroke().getWidth(), 1);
        assert.equal(style.getText().getText(), 'label1');
    });

    it('de style wordt goed geconfigureerd met aangepaste properties', async () => {
        const element: any = await mapLayerStyleMetPropertiesFixture();
        const vlMapLayerStyleElement = element.querySelector('vl-map-layer-style');
        assert.equal(vlMapLayerStyleElement.color, 'rgba(255,0,0,0.5)');
        assert.equal(vlMapLayerStyleElement.borderColor, 'rgba(255,255,100,1)');
        assert.equal(vlMapLayerStyleElement.borderSize, 2);
        assert.equal(vlMapLayerStyleElement.textBackgroundColor, 'rgba(0,0,255,0.2)');
        assert.equal(vlMapLayerStyleElement.textBorderColor, 'rgba(0,255,0,1)');
        assert.equal(vlMapLayerStyleElement.textBorderSize, 3);
        assert.equal(vlMapLayerStyleElement.textColor, 'rgba(255,0,0,1)');
        assert.equal(vlMapLayerStyleElement.textFeatureAttributeName, 'label');
        assert.equal(vlMapLayerStyleElement.textOffsetX, '10');
        assert.equal(vlMapLayerStyleElement.textOffsetY, '-10');
        assert.equal(vlMapLayerStyleElement.textSize, '13px');
        const style = vlMapLayerStyleElement.style({
            get: (property) => property + 2,
        });
        assert.equal(style.getFill().getColor(), 'rgba(255,0,0,0.5)');
        assert.equal(style.getStroke().getColor(), 'rgba(255,255,100,1)');
        assert.equal(style.getStroke().getWidth(), 2);
        assert.equal(style.getText().getFill().getColor(), 'rgba(255,0,0,1)');
        assert.equal(style.getText().getOffsetX(), '10');
        assert.equal(style.getText().getOffsetY(), '-10');
        assert.equal(style.getText().getFont(), '13px "Flanders Art Sans",sans-serif');
        assert.equal(style.getText().getBackgroundFill().getColor(), 'rgba(0,0,255,0.2)');
        assert.equal(style.getText().getStroke().getColor(), 'rgba(0,255,0,1)');
        assert.equal(style.getText().getStroke().getWidth(), 3);
        assert.equal(style.getText().getText(), 'label2');
    });

    it('de correcte stijl kan opgevraagd worden bij een laag met meerdere stijlen', async () => {
        const element: any = await mapLayerStyleMetMeerdereStijlenFixture();
        element.querySelector('#map-layer-style-red').appliesTo = (feature) => feature.get('status') === 'red';
        element.querySelector('#map-layer-style-green').appliesTo = (feature) => feature.get('status') === 'green';

        const vlMapLayerElement = element.querySelector('vl-map-features-layer');
        await awaitUntil(() => vlMapLayerElement._styles.length > 0);
        const styleRed = vlMapLayerElement.style({ get: () => 'red' });
        const styleGreen = vlMapLayerElement.style({ get: () => 'green' });
        const styleOnbestaand = vlMapLayerElement.style({
            get: () => 'orange',
        });

        assert.equal(styleRed.length, 1);
        assert.equal(styleRed[0].getFill().getColor(), 'rgba(255,0,0,0.8)');
        assert.equal(styleGreen.length, 1);
        assert.equal(styleGreen[0].getFill().getColor(), 'rgba(0,255,0,0.8)');
        assert.equal(styleOnbestaand.length, 0);
    });
});

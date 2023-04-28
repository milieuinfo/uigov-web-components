import { awaitUntil } from '@domg-wc/common-utilities';
import { VlMapLayerCircleStyle } from './vl-map-layer-circle-style';
import { assert, fixture, html } from '@open-wc/testing';
import OlFeature from 'ol/Feature';
import OlPoint from 'ol/geom/Point';
import OlStyle from 'ol/style/Style';
import OlStyleStroke, { Options as StrokeOptions } from 'ol/style/Stroke';
import OlStyleFill from 'ol/style/Fill';
import OlStyleCircle, { Options as CircleOptions } from 'ol/style/Circle';
import { OpenLayersUtil } from '../../../utils/ol-util';
import '../../../vl-map';
import '../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import './vl-map-layer-circle-style';

const mapLayerCircleStyleFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-circle-style></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapLayerCircleStylePropertiesFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-circle-style
                    data-vl-color="#fff"
                    data-vl-text-color="#000"
                    data-vl-size="1"
                    data-vl-text-offset-x="2"
                    data-vl-text-offset-y="3"
                    data-vl-border-color="#123"
                    data-vl-border-size="4"
                    data-vl-cluster-text-color="#456"
                    data-vl-cluster-color="#789"
                ></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapLayerCircleStyleMetTextFeatureAttributeNameFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-circle-style data-vl-text-feature-attribute-name="label"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);

describe('vl-map-layer-circle-style', () => {
    it('de style wordt goed geconfigureerd met default properties', async () => {
        const map: any = await mapLayerCircleStyleFixture();
        const styleElement: VlMapLayerCircleStyle = map.querySelector('vl-map-layer-circle-style');
        assert.equal(styleElement.color, 'rgba(2, 85, 204, 0.8)');
        assert.equal(styleElement.textColor, '#FFF');
        assert.equal(styleElement.textOffsetX, 0);
        assert.equal(styleElement.textOffsetY, 0);
        assert.equal(styleElement.size, 5);
        assert.equal(styleElement.borderColor, 'rgba(0, 0, 0, 0)');
        assert.equal(styleElement.borderSize, 1);
        assert.equal(styleElement.clusterTextColor, '#FFF');
        assert.equal(styleElement.clusterColor, 'rgba(2, 85, 204, 1)');
    });

    it('de style wordt goed geconfigureerd met aangepaste properties', async () => {
        const map: any = await mapLayerCircleStylePropertiesFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        assert.equal(styleElement.color, '#fff');
        assert.equal(styleElement.textColor, '#000');
        assert.equal(styleElement.textOffsetX, 2);
        assert.equal(styleElement.textOffsetY, 3);
        assert.equal(styleElement.size, 1);
        assert.equal(styleElement.borderColor, '#123');
        assert.equal(styleElement.borderSize, 4);
        assert.equal(styleElement.clusterTextColor, '#456');
        assert.equal(styleElement.clusterColor, '#789');
    });

    it('de gegenereerde style komt overeen met de ingestelde properties', async () => {
        const map: any = await mapLayerCircleStylePropertiesFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        const style = styleElement.style();
        const imageStyle = style.getImage();
        const stroke = imageStyle.getStroke();
        const text = style.getText();
        assert.equal(imageStyle.getFill().getColor(), '#fff');
        assert.equal(text.getFill().getColor(), '#000');
        assert.equal(text.getOffsetX(), 2);
        assert.equal(text.getOffsetY(), 3);
        assert.equal(imageStyle.getRadius(), 1);
        assert.equal(stroke.getColor(), '#123');
        assert.equal(stroke.getWidth(), 4);
        assert.isTrue(imageStyle instanceof OlStyleCircle);
    });

    it('de style wordt gezet bij het parent element', async () => {
        const map: any = await mapLayerCircleStyleFixture();
        const layerElement = map.querySelector('vl-map-features-layer');
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        await awaitUntil(() => layerElement._styles.length > 0);
        assert.deepEqual(layerElement.style('feature')[0], styleElement.style('feature'));
    });

    it('indien er meerdere features binnen een bepaalde afstand liggen van elkaar zullen ze geclusterd weergegeven worden en zal het aantal features in de cluster weergegeven worden', async () => {
        const map: any = await mapLayerCircleStyleFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        const feature1 = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        const feature2 = new OlFeature({
            geometry: new OlPoint([109101, 204176]),
        });
        const features = OpenLayersUtil.createClusterFeaturesObject([feature1, feature2]);
        const style = styleElement.style(features);
        const textStyle = style.getText();
        assert.equal(textStyle.getText(), features.get('features').length);
    });

    it('de cluster grootte is afhankelijk van het aantal features in de cluster', async () => {
        const map: any = await mapLayerCircleStylePropertiesFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        const feature = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });

        const generateFeaturesArray = (feature, quantity) => {
            const features = [];
            for (let i = 0; i < quantity; i++) {
                features.push(feature);
            }
            return features;
        };

        let style = styleElement.style(OpenLayersUtil.createClusterFeaturesObject([feature]));
        assert.equal(style.getImage().getRadius(), 1);

        style = styleElement.style(OpenLayersUtil.createClusterFeaturesObject(generateFeaturesArray(feature, 10)));
        assert.equal(style.getImage().getRadius(), 2);

        style = styleElement.style(OpenLayersUtil.createClusterFeaturesObject(generateFeaturesArray(feature, 100)));
        assert.equal(style.getImage().getRadius(), 3);
    });

    it('indien al de features binnen een cluster een identieke cirkel custom style hebben, zal de cluster deze style overnemen', async () => {
        const map: any = await mapLayerCircleStylePropertiesFixture();
        const layerElement = map.querySelector('vl-map-features-layer');
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        const featureFillColor = '#fff';
        const featureStrokeColor = '#123';
        const featureStrokeWidth = 10;
        const featureRadius = 5;
        const featureRadius2 = 6;
        const featurePoints = 15;
        const featureStyle = new OlStyle({
            image: new OlStyleCircle(<CircleOptions>{
                fill: new OlStyleFill({
                    color: featureFillColor,
                }),
                stroke: new OlStyleStroke({
                    color: featureStrokeColor,
                    width: featureStrokeWidth,
                }),
                radius: featureRadius,
                radius2: featureRadius2,
                points: featurePoints,
            }),
        });
        const feature1 = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        const feature2 = new OlFeature({
            geometry: new OlPoint([109101, 204176]),
        });
        feature1.setStyle(featureStyle);
        feature2.setStyle(featureStyle);
        const features = [feature1, feature2];
        layerElement.setAttribute('data-vl-cluster', '');

        const style = styleElement.style(OpenLayersUtil.createClusterFeaturesObject(features));
        const clusterMultiplier = Math.max(1.5, features.length.toString().length);
        const styleImage = style.getImage();
        const styleImageFill = styleImage.getFill();
        const styleImageStroke = styleImage.getStroke();
        assert.equal(styleImageFill.getColor(), featureFillColor);
        assert.equal(styleImageStroke.getColor(), featureStrokeColor);
        assert.equal(styleImage.getRadius(), featureRadius * clusterMultiplier);
        assert.isTrue(styleImage instanceof OlStyleCircle);
    });

    it('indien de features binnen een cluster een verschillende cirkel style hebben, zal de cluster de gedefinieerde cluster kleur krijgen', async () => {
        const map: any = await mapLayerCircleStylePropertiesFixture();
        const layerElement = map.querySelector('vl-map-features-layer');
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        const clusterKleur = '#789';
        const clusterTekstKleur = '#456';
        styleElement.clusterKleur = clusterKleur;
        styleElement.clusterTekstKleur = clusterTekstKleur;
        const feature1 = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        const feature2 = new OlFeature({
            geometry: new OlPoint([109101, 204176]),
        });

        feature1.setStyle(
            new OlStyle({
                image: new OlStyleCircle(<CircleOptions>{
                    fill: new OlStyleFill({
                        color: 'rgba(1, 2, 3, 1)',
                    }),
                    stroke: new OlStyleStroke(<StrokeOptions>{
                        color: 'rgba(2, 3, 4, 1)',
                        width: 10,
                    }),
                    radius: 5,
                    radius2: 6,
                    points: 15,
                }),
            })
        );

        feature2.setStyle(
            new OlStyle({
                image: new OlStyleCircle(<CircleOptions>{
                    fill: new OlStyleFill({
                        color: 'rgba(2, 3, 4, 1)',
                    }),
                    stroke: new OlStyleStroke(<StrokeOptions>{
                        color: 'rgba(3, 4, 5, 1)',
                        width: 11,
                    }),
                    radius: 6,
                    radius2: 7,
                    points: 16,
                }),
            })
        );
        const features = [feature1, feature2];
        layerElement.setAttribute('data-vl-cluster', '');

        const style = styleElement.style(OpenLayersUtil.createClusterFeaturesObject(features));
        const clusterMultiplier = Math.max(1.5, features.length.toString().length);
        const styleImage = style.getImage();
        const styleImageFill = styleImage.getFill();
        const styleImageStroke = styleImage.getStroke();
        const styleText = style.getText();
        const styleTextFill = styleText.getFill();
        assert.equal(styleImageFill.getColor(), clusterKleur);
        assert.equal(styleImageStroke.getColor(), styleElement.borderColor);
        assert.equal(styleImage.getRadius(), styleElement.size * clusterMultiplier);
        assert.equal(styleTextFill.getColor(), clusterTekstKleur);
        assert.isTrue(styleImage instanceof OlStyleCircle);
    });

    it('indien de features binnen een cluster geen cirkel custom style hebben, zal de cluster de standaard laag style krijgen', async () => {
        const map: any = await mapLayerCircleStyleFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        const feature1 = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        const feature2 = new OlFeature({
            geometry: new OlPoint([109101, 204176]),
        });

        const features = [feature1, feature2];

        const style = styleElement.style(OpenLayersUtil.createClusterFeaturesObject(features));
        const clusterMultiplier = Math.max(1.5, features.length.toString().length);
        const styleImage = style.getImage();
        const styleImageFill = styleImage.getFill();
        const styleImageStroke = styleImage.getStroke();
        const styleText = style.getText();
        const styleTextFill = styleText.getFill();
        assert.equal(styleImageFill.getColor(), styleElement.color);
        assert.equal(styleImageStroke.getColor(), styleElement.borderColor);
        assert.equal(styleImage.getRadius(), styleElement.size * clusterMultiplier);
        assert.equal(styleTextFill.getColor(), styleElement.clusterTextColor);
        assert.isTrue(styleImage instanceof OlStyleCircle);
    });

    it('wanneer als feature een niet-feature object wordt meegegeven, kan de style functie er mee om', async () => {
        const map: any = await mapLayerCircleStyleFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');

        const style = styleElement.style(1);
        const styleImage = style.getImage();
        const styleImageFill = styleImage.getFill();
        const styleImageStroke = styleImage.getStroke();
        const styleText = style.getText();
        const styleTextFill = styleText.getFill();
        assert.equal(styleImageFill.getColor(), styleElement.color);
        assert.equal(styleImageStroke.getColor(), styleElement.borderColor);
        assert.equal(styleImage.getRadius(), styleElement.size);
        assert.equal(styleTextFill.getColor(), styleElement.clusterTextColor);
        assert.isTrue(styleImage instanceof OlStyleCircle);
    });

    it('als er een featureAttributeName gedefinieerd is, zal de tekst stijl ook beschikbaar zijn', async () => {
        const element: any = await mapLayerCircleStyleMetTextFeatureAttributeNameFixture();
        const vlMapLayerStyleElement = element.querySelector('vl-map-layer-circle-style');
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

    it('als er geen featureAttributeName gedefinieerd is én indien er geen features binnen een bepaalde afstand liggen van elkaar zullen ze niet geclusterd weergegeven worden en zal er geen tekst stijl beschikbaar zijn', async () => {
        const map: any = await mapLayerCircleStyleFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        assert.equal(styleElement.textFeatureAttributeName, null);

        const feature = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        feature.set('label', 'feature1');

        const features = OpenLayersUtil.createClusterFeaturesObject([feature]);
        const style = styleElement.style(features);
        const textStyle = style.getText();
        assert.equal(textStyle.getText(), '');
    });

    it('als er een featureAttributeName gedefinieerd is én indien er geen features binnen een bepaalde afstand liggen van elkaar zullen ze niet geclusterd weergegeven worden en zal de tekst stijl ook beschikbaar zijn', async () => {
        const map: any = await mapLayerCircleStyleMetTextFeatureAttributeNameFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        assert.equal(styleElement.textFeatureAttributeName, 'label');

        const feature1 = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        feature1.set('label', 'feature1');

        const feature2 = new OlFeature({
            geometry: new OlPoint([109101, 204176]),
        });
        feature2.set('label', 'feature2');

        const features1 = OpenLayersUtil.createClusterFeaturesObject([feature1]);
        const style1 = styleElement.style(features1);
        const textStyle1 = style1.getText();
        assert.equal(textStyle1.getText(), 'feature1');

        const features2 = OpenLayersUtil.createClusterFeaturesObject([feature2]);
        const style2 = styleElement.style(features2);
        const textStyle2 = style2.getText();
        assert.equal(textStyle2.getText(), 'feature2');
    });

    it('als er geen featureAttributeName gedefinieerd is én indien er meerdere features binnen een bepaalde afstand liggen van elkaar zullen ze geclusterd weergegeven worden en zal het aantal features in de cluster weergegeven worden', async () => {
        const map: any = await mapLayerCircleStyleFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        assert.equal(styleElement.textFeatureAttributeName, null);

        const feature1 = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        feature1.set('label', 'feature1');

        const feature2 = new OlFeature({
            geometry: new OlPoint([109101, 204176]),
        });
        feature2.set('label', 'feature2');

        const features = OpenLayersUtil.createClusterFeaturesObject([feature1, feature2]);
        const style = styleElement.style(features);
        const textStyle = style.getText();
        assert.equal(textStyle.getText(), '2');
    });

    it('als er een featureAttributeName gedefinieerd is én indien er meerdere features binnen een bepaalde afstand liggen van elkaar zullen ze geclusterd weergegeven worden en zal het aantal features in de cluster weergegeven worden', async () => {
        const map: any = await mapLayerCircleStyleMetTextFeatureAttributeNameFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        assert.equal(styleElement.textFeatureAttributeName, 'label');

        const feature1 = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        feature1.set('label', 'feature1');

        const feature2 = new OlFeature({
            geometry: new OlPoint([109101, 204176]),
        });
        feature2.set('label', 'feature2');

        const features = OpenLayersUtil.createClusterFeaturesObject([feature1, feature2]);
        const style = styleElement.style(features);
        const textStyle = style.getText();
        assert.equal(textStyle.getText(), '2');
    });

    it('als er geen featureAttributeName gedefinieerd is én clustering is niet ingeschakeld moet de er geen label van de feature weergegeven', async () => {
        const map: any = await mapLayerCircleStyleFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        assert.equal(styleElement.textFeatureAttributeName, null);

        const feature = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        feature.set('label', 'feature');

        const style = styleElement.style(feature);
        const textStyle = style.getText();
        assert.equal(textStyle.getText(), '');
    });

    it('als er een featureAttributeName gedefinieerd is én clustering is niet ingeschakeld moet de label van de feature goed weergegeven worden', async () => {
        const map: any = await mapLayerCircleStyleMetTextFeatureAttributeNameFixture();
        const styleElement = map.querySelector('vl-map-layer-circle-style');
        assert.equal(styleElement.textFeatureAttributeName, 'label');

        const feature = new OlFeature({
            geometry: new OlPoint([109100, 204175]),
        });
        feature.set('label', 'feature');

        const style = styleElement.style(feature);
        const textStyle = style.getText();
        assert.equal(textStyle.getText(), 'feature');
    });
});

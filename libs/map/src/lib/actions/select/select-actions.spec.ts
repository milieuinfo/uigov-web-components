import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Style from 'ol/style/Style';
import { VlSelectActions } from './select-actions';
import { VlSelectAction } from './select-action';

describe('select actions', () => {
    it('select actions is een select action', () => {
        const selectActions = new VlSelectActions([{}], null, {});
        expect(selectActions instanceof VlSelectAction).toBe(true);
    });

    it('select actions bevat de layers en configuraties', () => {
        const feature1 = new Feature();
        const feature2 = new Feature();
        const layer1 = new VectorLayer({
            source: new VectorSource({
                features: [feature1],
            }),
        });
        const layer2 = new VectorLayer({
            source: new VectorSource({
                features: [feature2],
            }),
        });
        const style1 = new Style();
        const style2 = new Style();
        const hoverStyle1 = new Style();
        const hoverStyle2 = new Style();
        const layerConfiguraties = [
            {
                layer: layer1,
                style: style1,
                hoverStyle: hoverStyle1,
            },
            {
                layer: layer2,
                style: style2,
                hoverStyle: hoverStyle2,
            },
        ];
        const onSelect = jest.fn();
        const selectActions = new VlSelectActions(layerConfiguraties, onSelect);
        expect(selectActions.layerConfiguraties).toBe(layerConfiguraties);
        expect(selectActions.layers).toEqual([layer1, layer2]);
    });

    it('select actions kan een custom filter bevatten', () => {
        const layer1 = new VectorLayer({
            source: new VectorSource({
                features: [new Feature()],
            }),
        });
        const layerConfiguraties = [
            {
                layer: layer1,
                style: new Style(),
                hoverStyle: new Style(),
            },
        ];
        const onSelect = jest.fn();
        const filter = jest.fn();
        const options = {
            filter,
        };
        const feature = jest.fn();
        const selectActions = new VlSelectActions(layerConfiguraties, onSelect, options);
        // @ts-ignore
        selectActions.filter(feature, layer1);
        expect(filter).toHaveBeenCalledWith(feature);
    });

    it('kan de selectie en hover stijl per kaartlaag definiëren', () => {
        const selectieStyle1 = (feature1: Feature<any>) => new Style();
        const selectieStyle2 = (feature2: Feature<any>) => {
            new Style();
        };
        const hoverStyle1 = (feature1: Feature<any>) => new Style();
        const hoverStyle2 = (feature2: Feature<any>) => new Style();
        const feature1 = new Feature();
        const feature2 = new Feature();
        const layerConfiguraties = [
            {
                layer: new VectorLayer({
                    source: new VectorSource({
                        features: [feature1],
                    }),
                }),
                style: selectieStyle1,
                hoverStyle: hoverStyle1,
            },
            {
                layer: new VectorLayer({
                    source: new VectorSource({
                        features: [feature2],
                    }),
                }),
                style: selectieStyle2,
                hoverStyle: hoverStyle2,
            },
        ];
        const selectActions = new VlSelectActions(layerConfiguraties, null, {});
        expect(selectActions.style(feature1)).toEqual(selectieStyle1(feature1));
        expect(selectActions.style(feature2)).toEqual(selectieStyle2(feature2));
        expect(selectActions.hoverStyle(feature1)).toEqual(hoverStyle1(feature1));
        expect(selectActions.hoverStyle(feature2)).toEqual(hoverStyle2(feature2));
    });

    it('zal per kaartlaag terugvallen op de selectie stijl indien er geen hover stijl gedefinieerd is', () => {
        const selectieStyle1 = (feature1: Feature<any>) => new Style();
        const selectieStyle2 = (feature2: Feature<any>) => {
            new Style();
        };
        const feature1 = new Feature();
        const feature2 = new Feature();
        const layerConfiguraties = [
            {
                layer: new VectorLayer({
                    source: new VectorSource({
                        features: [feature1],
                    }),
                }),
                style: selectieStyle1,
            },
            {
                layer: new VectorLayer({
                    source: new VectorSource({
                        features: [feature2],
                    }),
                }),
                style: selectieStyle2,
            },
        ];
        const selectActions = new VlSelectActions(layerConfiguraties, null, {});
        expect(selectActions.hoverStyle(feature1)).toEqual(selectieStyle1(feature1));
        expect(selectActions.hoverStyle(feature2)).toEqual(selectieStyle2(feature2));
    });

    it('kan de selectie en hover stijl niet bepalen als die niet gedefinieerd is', () => {
        const feature = new Feature();
        const layerConfiguraties = [
            {
                layer: new VectorLayer({
                    source: new VectorSource({
                        features: [feature],
                    }),
                }),
            },
        ];
        const selectActions = new VlSelectActions(layerConfiguraties);
        expect(selectActions.style(feature)).toBeUndefined();
        expect(selectActions.hoverStyle(feature)).toBeUndefined();
    });

    it('kan de selectie en hover stijl niet bepalen als de layer niet gekend is', () => {
        const feature = new Feature();
        const selectActions = new VlSelectActions([]);
        expect(selectActions.style(feature)).toBeNull();
        expect(selectActions.hoverStyle(feature)).toBeNull();
    });

    it('kan features markeren en demarkeren', () => {
        const feature1 = new Feature();
        const feature2 = new Feature();
        const feature3 = new Feature();
        feature1.setId(1);
        feature2.setId(2);
        feature3.setId(3);
        const selectActions = new VlSelectActions([
            {
                layer: new VectorLayer({
                    source: new VectorSource({
                        features: [feature1, feature2],
                    }),
                }),
            },
            {
                layer: new VectorLayer({
                    source: new VectorSource({
                        features: [feature3],
                    }),
                }),
            },
        ]);

        selectActions.markFeatureWithId(1);
        expect(selectActions.isMarked(feature1)).toBe(true);
        expect(selectActions.markInteraction.getFeatures().getLength()).toBe(1);
        selectActions.markFeatureWithId(2);
        expect(selectActions.isMarked(feature2)).toBe(true);
        expect(selectActions.markInteraction.getFeatures().getLength()).toBe(2);
        selectActions.markFeatureWithId(3);
        expect(selectActions.isMarked(feature3)).toBe(true);
        expect(selectActions.markInteraction.getFeatures().getLength()).toBe(3);
        selectActions.demarkAllFeatures();
        expect(selectActions.markInteraction.getFeatures().getLength()).toBe(0);
        expect(selectActions.isMarked(feature1)).toBe(false);
        expect(selectActions.isMarked(feature2)).toBe(false);
    });

    it('kan clusters markeren en demarkeren', () => {
        const feature1 = new Feature();
        const feature2 = new Feature();
        const feature3 = new Feature();
        const feature4 = new Feature();
        feature1.setId(1);
        feature2.setId(2);
        feature3.setId(3);
        feature4.setId(4);
        const cluster1 = new Feature();
        const cluster2 = new Feature();
        const cluster3 = new Feature();
        cluster1.set('features', [feature1, feature2]);
        cluster2.set('features', [feature3]);
        cluster3.set('features', [feature4]);
        const layer1 = new VectorLayer({
            source: new VectorSource({
                features: [cluster1, cluster2],
            }),
        });
        const layer2 = new VectorLayer({
            source: new VectorSource({
                features: [cluster3],
            }),
        });
        const selectActions = new VlSelectActions([
            {
                layer: layer1,
            },
            {
                layer: layer2,
            },
        ]);
        selectActions.markFeatureWithId(1);
        expect(selectActions.isMarked(cluster1)).toBe(true);
        expect(selectActions.isMarked(cluster2)).toBe(false);
        expect(selectActions.isMarked(cluster3)).toBe(false);
        expect(selectActions.markInteraction.getFeatures().getLength()).toBe(1);
        selectActions.markFeatureWithId(2);
        expect(selectActions.isMarked(cluster1)).toBe(true);
        expect(selectActions.isMarked(cluster2)).toBe(false);
        expect(selectActions.isMarked(cluster3)).toBe(false);
        selectActions.markFeatureWithId(4);
        expect(selectActions.isMarked(cluster1)).toBe(true);
        expect(selectActions.isMarked(cluster2)).toBe(false);
        expect(selectActions.isMarked(cluster3)).toBe(true);
        selectActions.demarkAllFeatures();
        expect(selectActions.isMarked(cluster1)).toBe(false);
        expect(selectActions.isMarked(cluster2)).toBe(false);
        expect(selectActions.isMarked(cluster3)).toBe(false);
    });
});

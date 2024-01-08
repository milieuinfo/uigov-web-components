import { Collection as OlCollection, Feature, Feature as OlFeature } from 'ol';
import { click, never, pointerMove } from 'ol/events/condition';
import { Select as OlSelect } from 'ol/interaction';
import { FilterFunction as OlFilterFunction, SelectEvent as OlSelectEvent } from 'ol/interaction/Select';
import { ActionOptions, OlVectorLayerType } from '../../vl-map.model';
import { VlBaseMapAction } from '../mapaction';

export class VlSelectAction extends VlBaseMapAction {
    public selectInteraction: OlSelect;
    public hoverInteraction: OlSelect;
    public markInteraction: OlSelect;
    public filter: OlFilterFunction;
    public selectedFeature: OlFeature;
    public getLayer: () => OlVectorLayerType;
    public cluster: boolean;
    public selectInteractionFilter: (feature, layer?) => boolean;
    public hoverInteractionFilter: (feature, layer) => boolean;
    // Gebruikt protected naamgeving maar moet public zijn omdat het in een .spec bestand gebruikt wordt.
    public _fixClusterBehaviorListener: () => void;
    protected onSelect: (...args: any[]) => void;

    constructor(layer?: OlVectorLayerType, onSelect?: (...args: any[]) => void, options?: ActionOptions) {
        const cluster = options && options.cluster;
        const filter = options && options.filter ? options.filter : () => true;
        const style = options ? options.style : null;
        const hoverStyle = options ? options.hoverStyle || style : style;
        const layers = Array.isArray(layer) ? layer : [layer];

        const selectInteractionFilter = (feature: OlFeature, layer: OlVectorLayerType) => {
            this.selectInteraction.getFeatures().clear();
            return this.filter(feature, layer);
        };

        const hoverInteractionFilter = (feature: OlFeature, layer: OlVectorLayerType) => {
            const isSelected = this.selectInteraction.getFeatures().getArray().indexOf(feature) !== -1;
            return this.filter(feature, layer) && !isSelected;
        };

        const hoverInteraction = new OlSelect({
            filter: hoverInteractionFilter,
            condition: pointerMove,
            style: hoverStyle,
            layers,
        });

        const markInteraction = new OlSelect({
            condition: never,
            style,
            layers,
        });

        const selectInteraction = new OlSelect({
            filter: selectInteractionFilter,
            condition: click,
            style,
            layers,
            multi: true,
        });

        super([markInteraction, selectInteraction, hoverInteraction]);

        this.cluster = cluster;
        this.filter = filter;
        this.layer = layer;
        this.style = style;
        this.hoverStyle = hoverStyle;
        this.hoverInteraction = hoverInteraction;
        this.markInteraction = markInteraction;
        this.selectInteraction = selectInteraction;

        this.hoverInteraction.on('select', () => {
            const element = this.map.getTargetElement();
            if (this.hoverInteraction.getFeatures().getLength() > 0) {
                element.style.cursor = 'pointer';
            } else {
                element.style.cursor = '';
            }
            this.map.render();
        });

        this.selectedFeature = null;

        this.getLayer = () => layer;
        this.onSelect = onSelect;

        this.selectInteraction.on('select', this._selectHandler);
        this.selectInteractionFilter = selectInteractionFilter;
        this.hoverInteractionFilter = hoverInteractionFilter;
    }

    _selectHandler = (event: OlSelectEvent) => {
        const nextFeature = (features: OlCollection<OlFeature>): OlFeature => {
            const index = features.getArray().indexOf(this.selectedFeature);
            let next = index + 1;
            if (next > features.getLength() - 1) {
                next = 0;
            }
            return features.getArray()[next];
        };

        this.markInteraction.getFeatures().clear();
        if (this.selectInteraction.getFeatures().getLength() > 0) {
            if (this.selectInteraction.getFeatures().getLength() === 1) {
                this.selectedFeature = this.selectInteraction.getFeatures().getArray()[0];
            } else {
                this.selectedFeature = nextFeature(this.selectInteraction.getFeatures());
            }
        } else {
            this.selectedFeature = null;
        }

        this._onSelectHandler(event);
        this.map.render();
    };

    _onSelectHandler = (event: OlSelectEvent) => {
        if (!this.onSelect) return;

        if (this.selectedFeature) {
            this.onSelect(this.selectedFeature, event, this.getLayer());
        } else {
            this.onSelect();
        }
    };

    _fixClusterBehavior(): void {
        if (this.selectedFeature) {
            const features = (this.selectedFeature.get('features') as OlFeature[]) || [this.selectedFeature];
            this.selectInteraction.getFeatures().clear();
            this.markInteraction.getFeatures().clear();
            if (features) {
                features.forEach((feature) => {
                    if (feature.getId()) {
                        this.markFeatureWithId(feature.getId());
                    }
                });
            }
        }
    }

    getClusterWithFeatureId(clusters: OlFeature[], id: string | number): OlFeature | void {
        for (let i = 0; i < clusters.length; i++) {
            const features = clusters[i].get('features') as OlFeature[];
            if (features && this.getFeatureById(features, id)) {
                return clusters[i];
            }
        }
    }

    getFeatureById(features: OlFeature[], id: string | number): OlFeature | void {
        for (let i = 0; i < features.length; i++) {
            if (features[i].getId() === id) {
                return features[i];
            }
        }
    }

    clearFeatures(): void {
        this.selectInteraction.getFeatures().clear();
        this.markInteraction.getFeatures().clear();
        this.hoverInteraction.getFeatures().clear();
    }

    activate(): void {
        if (this.cluster && this.map) {
            this._fixClusterBehaviorListener = () => this._fixClusterBehavior();
            this.map.on('moveend', this._fixClusterBehaviorListener);
            this.selectInteraction.on('select', this._fixClusterBehaviorListener);
        }
        super.activate();
    }

    deactivate(): void {
        if (this._fixClusterBehaviorListener) {
            this.map.un('moveend', this._fixClusterBehaviorListener);
            this.selectInteraction.un('select', this._fixClusterBehaviorListener);
        }
        this.clearFeatures();
        super.deactivate();
    }

    selectFeature(feature: OlFeature): void {
        this.selectInteraction.getFeatures().push(feature);
        // TODO: Zorg ervoor dat dispatchEvent een OL BaseEvent afvuurt, onderstaande manier behouden voor backwards-compatibility.
        this.selectInteraction.dispatchEvent({
            type: 'select',
            // @ts-ignore: negeer feature property, OL BaseEvent heeft geen feature property
            feature,
        });
    }

    getSelectedFeatures(): OlCollection<OlFeature> {
        return this.selectInteraction.getFeatures();
    }

    deselect(): void {
        this.selectedFeature = null;
    }

    markFeatureWithId(id: string | number, layer?: OlVectorLayerType) {
        layer = layer || this.layer;
        const feature =
            layer.getSource().getFeatureById(id) || this.getClusterWithFeatureId(layer.getSource().getFeatures(), id);
        if (feature && feature instanceof Feature) {
            if (this.markInteraction.getFeatures().getArray().indexOf(feature) === -1) {
                this.markInteraction.getFeatures().push(feature);
            }
        }
    }

    isMarked(feature: OlFeature): boolean {
        let marked = false;
        this.markInteraction.getFeatures().forEach((selectedFeature) => {
            if (selectedFeature === feature) {
                marked = true;
            }
        });
        return marked;
    }

    demarkAllFeatures(): void {
        this.markInteraction.getFeatures().clear();
    }
}

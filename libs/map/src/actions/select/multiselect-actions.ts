import { VlSelectActions } from './select-actions';
import { SelectEvent as OlSelectEvent } from 'ol/interaction/Select';
import { ActionOptions, OlVectorLayerType } from '../../vl-map.model';

export class VlMultiselectActions extends VlSelectActions {
    public getLayers: () => OlVectorLayerType[];

    constructor(layers: OlVectorLayerType[], onSelect?: (...args: any[]) => void, options?: ActionOptions) {
        super(layers, onSelect, options);

        this.getLayers = (): OlVectorLayerType[] => {
            const layers = [];
            this.getSelectedFeatures()?.forEach((feature) => {
                layers.push(this.getLayerByFeature(this.layers, feature));
            });
            return layers;
        };
    }

    _onSelectHandler = (event: OlSelectEvent) => {
        if (!this.onSelect) return;

        if (this.getSelectedFeatures().getLength() > 0) {
            this.onSelect(this.getSelectedFeatures().getArray().slice(), event, this.getLayers());
        } else {
            this.onSelect([]);
        }
    };

    // Overrides `_fixClusterBehavior` from VlSelectActions,
    // Does nothing in `VlMultiselectActions`.
    _fixClusterBehavior(): void {}
}

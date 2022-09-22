import { Modify } from 'ol/interaction';
import { VlSnapInteraction } from '../snap/snap-interaction';
import { VlSelectAction } from '../select/select-action';

export class VlModifyAction extends VlSelectAction {
  constructor(layer, onModify, options = {}) {
    super(layer, null, {
      filter: options.filter,
    });

    this.options = options;

    this.modifyInteraction = new Modify({
      features: this.selectInteraction.getFeatures(),
    });

    this.addInteraction(this.modifyInteraction);

    if (options && options.snapping) {
      const snappingOptions = { ...options.snapping };
      if (snappingOptions.layer) {
        this.addInteraction(new VlSnapInteraction(snappingOptions.layer.getSource(), options.snapping));
      } else {
        this.addInteraction(new VlSnapInteraction(layer.getSource(), options.snapping));
      }
    }

    this.modifyInteraction.on('modifystart', (event) => {
      this.currentGeometryBeingModified = event.features.getArray()[0].getGeometry().clone();
    });

    this.modifyInteraction.on('modifyend', (event) => {
      event.features.forEach((feature) => {
        onModify(feature, (feature) => {
          feature.setGeometry(this.currentGeometryBeingModified);
        });
      });
    });
  }

  activate() {
    if (this.options.snapping && this.options.snapping.layer) {
      this.map.addLayer(this.options.snapping.layer);
    }
    super.activate();
  }

  deactivate() {
    if (this.options.snapping && this.options.snapping.layer) {
      this.map.removeLayer(this.options.snapping.layer);
    }
    super.deactivate();
  }
}

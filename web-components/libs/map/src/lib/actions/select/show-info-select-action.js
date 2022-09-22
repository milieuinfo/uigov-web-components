import { VlSelectAction } from './select-action';
import { VlTooltips } from '../tooltips';

export class VlShowInfoSelectAction extends VlSelectAction {
  constructor(layer, infoPromise, loadingMessage, doneLoading, tooltipOptions) {
    super(layer, (feature, event) => {
      if (feature) {
        const coordinate = feature.getGeometry().getClosestPoint(event.mapBrowserEvent.coordinate);
        this.tooltips.showTooltip(this.map, feature, coordinate, tooltipOptions);
      }
    });

    this.tooltips = new VlTooltips(layer, infoPromise, loadingMessage, doneLoading);
    this.layer = layer;
  }

  clear() {
    this.tooltips.clear(this.map);
  }

  deactivate() {
    this.clear();
    this.layer.setVisible(this.visible);
    super.deactivate();
  }

  activate() {
    this.visible = this.layer.getVisible();
    this.layer.setVisible(true);
    super.activate();
  }
}

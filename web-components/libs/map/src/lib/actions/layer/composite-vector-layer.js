import OlVectorLayer from 'ol/layer/Vector';
import { VlCompositeVectorSource } from '../source/composite-vector-source';

export class VlCompositeVectorLayer extends OlVectorLayer {
  constructor(wfsLayers, options = {}) {
    super({
      title: options.title,
      source: new VlCompositeVectorSource(wfsLayers.map((layer) => layer.getSource())),
      updateWhileAnimating: true,
      updateWhileInteracting: true,
      minResolution: wfsLayers.map((layer) => layer.getMinResolution()).reduce((x, y) => Math.min(x, y)),
      maxResolution: wfsLayers.map((layer) => layer.getMaxResolution()).reduce((x, y) => Math.max(x, y)),
    });
  }
}

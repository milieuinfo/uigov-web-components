import { VlSelectAction } from './select-action';

export class VlSelectActions extends VlSelectAction {
  constructor(layerConfiguraties, onSelect, options) {
    const layers = layerConfiguraties.map((layerConfiguratie) => layerConfiguratie.layer);

    const style = (feature) => {
      const layer = this._getLayer(feature);
      const style = this._getLayerStyle(layer);
      return style && typeof style === 'function' ? style(feature) : style;
    };

    const hoverStyle = (feature) => {
      const layer = this._getLayer(feature);
      const style = this._getLayerHoverStyle(layer);
      return style && typeof style === 'function' ? style(feature) : style;
    };

    const filter = (feature, layer) => {
      let layerFilter = false;
      this.layers.forEach((_layer) => {
        if (_layer == layer) {
          layerFilter = true;
        }
      });
      if (options && options.filter) {
        return layerFilter && options.filter(feature);
      }
      return layerFilter;
    };

    super(layers, onSelect, {
      filter,
      style,
      hoverStyle,
    });

    this.layerConfiguraties = layerConfiguraties;
    this.layers = layers;
    this.style = style;
    this.hoverStyle = hoverStyle;
    this.filter = filter;
  }

  _getLayer(feature) {
    return this.layers.find((layer) => layer.getSource().getFeatures().indexOf(feature) !== -1);
  }

  _getLayerStyle(layer, type) {
    const layerConfiguratie = this.layerConfiguraties.find((layerConfiguratie) => layerConfiguratie.layer === layer);
    return layerConfiguratie ? layerConfiguratie[type || 'style'] : null;
  }

  _getLayerHoverStyle(layer) {
    return this._getLayerStyle(layer, 'hoverStyle') || this._getLayerStyle(layer);
  }

  markFeatureWithId(id, layer) {
    if (layer) {
      super.markFeatureWithId(id, layer);
    } else {
      this.layers.forEach((layer) => {
        super.markFeatureWithId(id, layer);
      });
      // todo refactor! : this is wrong: what if multiple features have same id but different layer?
    }
  }
}

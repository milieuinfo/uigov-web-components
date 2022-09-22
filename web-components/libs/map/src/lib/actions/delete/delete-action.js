import { Fill, Stroke, Style, Circle } from 'ol/style';
import { VlBoxSelectAction } from '../select/box-select-action';

export class VlDeleteAction extends VlBoxSelectAction {
  constructor(layer, onDelete, options = {}) {
    const defaultStyle = new Style({
      fill: new Fill({
        color: 'rgba(241, 174, 174, 0.26)',
      }),
      stroke: new Stroke({
        color: '#db3434',
        width: 1,
      }),
      image: new Circle({
        radius: 4,
        stroke: new Stroke({
          color: '#db3434',
          width: 1,
        }),
        fill: new Fill({
          color: 'rgba(241, 174, 174, 0.26)',
        }),
      }),
    });

    const removeFeature = (feature) => {
      if (feature && (feature.getId() == null || layer.getSource().getFeatureById(feature.getId()) === feature)) {
        layer.getSource().removeFeature(feature);
      }
    };

    const clearAndRender = () => {
      this.clearFeatures();
      this.map.render();
    };

    super(
      layer,
      (features) => {
        if (onDelete && onDelete != null) {
          onDelete(
            features,
            (feature) => {
              removeFeature(feature);
              clearAndRender();
            },
            () => {
              clearAndRender();
            },
          );
        } else {
          features.forEach((feature) => {
            removeFeature(feature);
          });
          clearAndRender();
        }
      },
      {
        style: options.style || defaultStyle,
        filter: options.filter,
      },
    );
  }
}

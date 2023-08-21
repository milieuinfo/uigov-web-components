import GeometryType from 'ol/geom/GeometryType';
import { VlDrawAction } from './draw-action';

export class VlDrawPolygonAction extends VlDrawAction {
  constructor(layer, onDraw, options = {}) {
    super(layer, GeometryType.POLYGON, onDraw, options);
  }
}

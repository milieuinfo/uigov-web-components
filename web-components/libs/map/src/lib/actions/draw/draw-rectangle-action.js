import { Polygon } from 'ol/geom';
import GeometryType from 'ol/geom/GeometryType';
import { VlDrawAction } from './draw-action';

export class VlDrawRectangleAction extends VlDrawAction {
  constructor(layer, onDraw, options = {}) {
    options.maxPoints = 2;
    options.geometryFunction = (coordinates, geometry) => {
      if (!geometry) {
        geometry = new Polygon([]);
      }
      const start = coordinates[0];
      const end = coordinates[1];
      geometry.setCoordinates([[start, [start[0], end[1]], end, [end[0], start[1]], start]]);
      return geometry;
    };
    super(layer, GeometryType.LINE_STRING, onDraw, options);
  }
}

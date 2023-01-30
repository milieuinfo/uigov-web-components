import { Polygon } from 'ol/geom';
import GeometryType from 'ol/geom/GeometryType';
import { VlDrawAction } from './draw-action';

export class VlDrawRectangleAction extends VlDrawAction {
    constructor(layer, onDraw, _options: any = {}) {
        const geometryFunction = (coordinates, geometry) => {
            if (!geometry) {
                geometry = new Polygon([]);
            }
            const start = coordinates[0];
            const end = coordinates[1];
            geometry.setCoordinates([[start, [start[0], end[1]], end, [end[0], start[1]], start]]);
            return geometry;
        };
        const options = {
            ..._options,
            maxPoints: 2,
            geometryFunction,
        };
        super(layer, GeometryType.LINE_STRING, onDraw, options);
    }
}

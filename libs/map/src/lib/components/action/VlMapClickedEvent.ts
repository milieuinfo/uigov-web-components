import { Coordinate } from 'ol/coordinate';
import { ProjectionLike } from 'ol/proj';

const eventType = 'vl-map-clicked';

export class VlMapClickedEvent extends Event {
    static eventType = eventType;
    readonly coordinate: Coordinate;
    readonly resolution: number;
    readonly projection: ProjectionLike;

    constructor(coordinate: Coordinate, resolution: number, projection: ProjectionLike) {
        super(eventType, { bubbles: true });
        this.coordinate = coordinate;
        this.resolution = resolution;
        this.projection = projection;
    }
}

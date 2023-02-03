import { Coordinate } from 'ol/coordinate';
import { Pixel } from 'ol/pixel';
import { Extent } from 'ol/extent';

const eventType = 'vl-map-clicked';

export class VlMapClickedEvent extends Event {
    static eventType = eventType;
    readonly coordinate: Coordinate;
    readonly pixel: Pixel;
    readonly currentBoundingBox: Extent;

    constructor(coordinate: Coordinate, pixel: Pixel, currentBoundingBox: Extent) {
        super(eventType, { bubbles: true });
        this.coordinate = coordinate;
        this.pixel = pixel;
        this.currentBoundingBox = currentBoundingBox;
    }
}

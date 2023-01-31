import {Coordinate} from "ol/coordinate";
import {Pixel} from "ol/pixel";
import {Extent} from "ol/extent";


const eventType = 'vl-map-clicked';

export class VlMapClickedEvent extends Event {
    static eventType = eventType;
    private readonly _coordinate: Coordinate;
    private readonly _pixel: Pixel;
    private readonly _currentBoundingBox: Extent;


    constructor(coordinate: Coordinate, pixel: Pixel, currentBoundingBox: Extent) {
        super(eventType, { bubbles: true });
        this._coordinate = coordinate;
        this._pixel = pixel;
        this._currentBoundingBox = currentBoundingBox;
    }


    get coordinate(): Coordinate {
        return this._coordinate;
    }

    get pixel(): Pixel {
        return this._pixel;
    }

    get currentBoundingBox(): Extent {
        return this._currentBoundingBox;
    }

}

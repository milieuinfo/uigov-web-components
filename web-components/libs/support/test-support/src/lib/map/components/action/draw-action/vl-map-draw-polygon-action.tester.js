import { VlMapDrawActionTester } from './vl-map-draw-action.tester.js';

export class VlMapDrawPolygonActionTester extends VlMapDrawActionTester {
    async draw(...coordinates) {
        await super.draw(async () => {
            coordinates =
                coordinates.length > 0 ?
                    coordinates :
                    [
                        {x: 152293, y: 212145},
                        {x: 152295, y: 212145},
                        {x: 152295, y: 212142},
                        {x: 152293, y: 212143},
                    ];
            const map = await this.getMap();
            const actions = this.driver.actions();
            for (let i = 0; i < coordinates.length; i++) {
                const coordinate = coordinates[i];
                const pixel = await map.getPixelFromCoordinate([coordinate.x, coordinate.y]);
                if (i + 1 < coordinates.length) {
                    await actions.move({origin: map, x: pixel.x, y: pixel.y}).click();
                } else {
                    await actions.move({origin: map, x: pixel.x, y: pixel.y}).doubleClick().perform();
                }
            }
        });
    }
}

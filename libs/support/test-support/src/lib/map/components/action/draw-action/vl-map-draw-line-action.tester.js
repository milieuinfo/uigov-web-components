import { VlMapDrawActionTester } from './vl-map-draw-action.tester.js';

export class VlMapDrawLineActionTester extends VlMapDrawActionTester {
    async draw(c1 = { x: 152121, y: 212415 }, c2 = { x: 152093, y: 212343 }) {
        await super.draw(async () => {
            const map = await this.getMap();
            const pixel1 = await map.getPixelFromCoordinate([c1.x, c1.y]);
            const pixel2 = await map.getPixelFromCoordinate([c2.x, c2.y]);
            await map.driver
                .actions()
                .move({ origin: map, x: pixel1.x, y: pixel1.y })
                .click()
                .move({ origin: map, x: pixel2.x, y: pixel2.y })
                .doubleClick()
                .perform();
        });
    }
}

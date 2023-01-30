import { VlMapDrawActionTester } from './vl-map-draw-action.tester.js';

export class VlMapDrawPointActionTester extends VlMapDrawActionTester {
    async draw({ x = 153276, y = 212023 } = { x: 153276, y: 212023 }) {
        await super.draw(async () => {
            const map = await this.getMap();
            const pixel = await map.getPixelFromCoordinate([x, y]);
            const actions = this.driver.actions();
            await actions.move({ origin: map, x: pixel.x, y: pixel.y }).click().perform();
        });
    }
}

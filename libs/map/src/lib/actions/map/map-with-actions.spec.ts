import DragRotate from 'ol/interaction/DragRotate';
import DoubleClickZoom from 'ol/interaction/DoubleClickZoom';
import KeyboardPan from 'ol/interaction/KeyboardPan';
import KeyboardZoom from 'ol/interaction/KeyboardZoom';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import PinchZoom from 'ol/interaction/PinchZoom';
import PinchRotate from 'ol/interaction/PinchRotate';
import DragPan from 'ol/interaction/DragPan';
import DragZoom from 'ol/interaction/DragZoom';
import Collection from 'ol/Collection';
import Interaction from 'ol/interaction/Interaction';
import VectorSource from 'ol/source/Vector';
import { VlMapWithActions } from './map-with-actions';
import { VlBaseMapAction } from '../mapaction';
import { VlDrawLineAction } from '../draw/draw-line-action';

// TODO: Review timeout
// Use to wait for map action to be activated because of timeout for activating a mapaction in map-with-actions
function sleep() {
    return new Promise((resolve) => setTimeout(resolve, VlMapWithActions.CLICK_COUNT_TIMEOUT + 10));
}

describe('map with actions', () => {
    let map;

    class VlTestMapWithActions extends VlMapWithActions {
        getDefaultActiveAction() {
            return undefined;
        }

        getCurrentActiveAction() {
            return undefined;
        }

        activateDefaultAction() {
            return undefined;
        }
    }


    it('can add a new action to the map', async () => {
        map = new VlTestMapWithActions({
            disableEscapeKey: false,
            disableKeyboard: false,
            disableMouseWheelZoom: false,
            disableRotation: false
        });

        expect(map.actions.length).toBe(0);

        const newAction = new VlBaseMapAction([new Interaction(), new Interaction()]);

        map.addAction(newAction);
        await sleep();

        expect(map.actions.length).toBe(1);
        expect(map.getInteractions().getLength()).toBe(11); // 9 by default from OL + 2 in the action
    });

    it('can remove an action from the map', async () => {
        map = new VlTestMapWithActions({
            disableEscapeKey: false,
            disableKeyboard: false,
            disableMouseWheelZoom: false,
            disableRotation: false
        });

        const newAction = new VlBaseMapAction([new Interaction(), new Interaction()]);
        newAction.element = {
            reset: () => {},
        };

        map.addAction(newAction);
        await sleep();

        map.removeAction(newAction);

        expect(map.actions.length).toBe(0);
        expect(map.actions.indexOf(newAction)).toBe(-1);
    });

    it('if the action to be removed is the current action, the default is activated', async () => {
        map = new VlTestMapWithActions({
            disableEscapeKey: false,
            disableKeyboard: false,
            disableMouseWheelZoom: false,
            disableRotation: false
        });

        const activateDefaultActionSpy = jest.spyOn(map, 'activateDefaultAction').mockClear();
        const newAction = new VlBaseMapAction([new Interaction(), new Interaction()]);
        newAction.element = {
            reset: () => {},
        };

        map.addAction(newAction);
        await sleep();

        map.activateAction(newAction);
        await sleep();

        map.removeAction(newAction);

        expect(activateDefaultActionSpy).toHaveBeenCalled();
    });


    it('when creating a map with actions, standard functionality is added to the map that on escape the first map action gets activated when no action is active', () => {
        map = new VlTestMapWithActions({
            disableEscapeKey: false,
            disableKeyboard: false,
            disableMouseWheelZoom: false,
            disableRotation: false
        });

        jest.spyOn(map, 'activateDefaultAction');

        const event = new KeyboardEvent('keydown', {keyCode: 27});
        document.body.dispatchEvent(event);

        expect(map.activateDefaultAction).toHaveBeenCalled();
    });

    it('when creating a map, and adding an action, standard functionality is added to the map that on escape the current active action gets stopped when an action is active', async () => {
        const source = new VectorSource({});

        const layer = {
            getSource: () => source,
        };
        map = new VlTestMapWithActions({
            disableEscapeKey: false,
            disableKeyboard: false,
            disableMouseWheelZoom: false,
            disableRotation: false
        });

        const drawLineAction = new VlDrawLineAction(layer, () => {}, {});
        map.addAction(drawLineAction);

        jest.spyOn(drawLineAction, 'stop');

        map.activateAction(drawLineAction);
        await sleep();

        const currentActiveActionStub = jest.spyOn(map, 'getCurrentActiveAction').mockReturnValue(drawLineAction);

        const event = new KeyboardEvent('keydown', {keyCode: 27});
        document.body.dispatchEvent(event);

        expect(drawLineAction.stop).toHaveBeenCalled();

        currentActiveActionStub.mockReset();
    });

    it('if desired, the standard escape functionality can be disabled', () => {
        const map = new VlTestMapWithActions({
            disableKeyboard: false, disableMouseWheelZoom: false, disableRotation: false,
            disableEscapeKey: true
        });

        const activateDefaultActionStub = jest.spyOn(map, 'activateDefaultAction').mockImplementation();
        expect(map.activateDefaultAction).not.toHaveBeenCalled();

        const event = new KeyboardEvent('keydown', {keyCode: 27});
        document.body.dispatchEvent(event);

        expect(map.activateDefaultAction).not.toHaveBeenCalled();

        activateDefaultActionStub.mockReset();
    });

    it('if desired, the standard rotation functionality can be disabled', () => {
        const map = new VlTestMapWithActions({
            disableEscapeKey: false, disableKeyboard: false, disableMouseWheelZoom: false,
            disableRotation: true
        });

        expect(map.getInteractions().getLength()).toBe(7); // 9-2=7
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof DoubleClickZoom).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof KeyboardPan).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof KeyboardZoom).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof MouseWheelZoom).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof PinchZoom).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof DragPan).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof DragZoom).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof DragRotate).length,
        ).toBe(0);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof PinchRotate).length,
        ).toBe(0);
    });

    it('if desired, extra interactions can be added when creating a map with actions', () => {
        const map = new VlTestMapWithActions({
            disableEscapeKey: false, disableKeyboard: false, disableMouseWheelZoom: false,
            interactions: new Collection([new PinchZoom(), new PinchRotate()]),
            disableRotation: true
        });

        expect(map.getInteractions().getLength()).toBe(9); // 9-2+2=9
    });

    it('if desired, zooming with the mouse wheel can be turned off', () => {
        const map = new VlTestMapWithActions({
            disableEscapeKey: false, disableKeyboard: false, disableRotation: false,
            disableMouseWheelZoom: true
        });

        expect(map.getInteractions().getLength()).toBe(8);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof DragRotate).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof DoubleClickZoom).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof KeyboardPan).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof KeyboardZoom).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof MouseWheelZoom).length,
        ).toBe(0);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof PinchZoom).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof PinchRotate).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof DragPan).length,
        ).toBe(1);
        expect(
            map
                .getInteractions()
                .getArray()
                .filter((interaction) => interaction instanceof DragZoom).length,
        ).toBe(1);
    });
});

export { UigConfig, type Preferences } from './config/uig-config';
export { BaseLitElement, onChildListChange, buildSpan, buildDiv, buildLabel, buildData } from './internal';
export { MARGINS, PADDINGS, ICON_PLACEMENT } from './constants/constants';
export {
    webComponent,
    webComponentCustom,
    webComponentPromised,
    webComponentConditional,
} from './decorator/decorators';
export {
    registerWebComponents,
    defineWebComponent,
    awaitScript,
    sleep,
    awaitUntil,
    debounce,
    throttle,
    findDeepestElementThroughShadowRoot,
    findNodesForSlot,
} from './util/utils';
export { BaseElementOfType, BaseHTMLElement, type Class, type VL, unwrap, define } from './legacy';

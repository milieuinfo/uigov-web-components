import { define } from '@domg-lib/common-utilities';
import { InputAddonBaseElementOfType } from './base/input-addon-base.element';

/**
 * VlButtonInputAddon
 * @class
 * @classdesc Gebruik de vl-button-input-addon in combinatie met de vl-input-group webcomponent. Deze combinatie
 *  zorgt er voor dat men een button heeft die naast de input in vl-input-group staat.
 *
 * @extends HTMLButtonElement
 * @mixes vlInputAddonElement
 */
export class VlButtonInputAddon extends InputAddonBaseElementOfType(HTMLButtonElement) {}

// TODO: misschien vl-input-addon-button noemen of onder button steken ?
define('vl-button-input-addon', VlButtonInputAddon, { extends: 'button' });

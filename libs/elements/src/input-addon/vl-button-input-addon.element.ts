import { webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';
import { InputAddonBaseElementOfType } from './base/input-addon-base.element';

@elementStyles()
@webComponent('vl-button-input-addon', { extends: 'button' })
export class VlButtonInputAddon extends InputAddonBaseElementOfType(HTMLButtonElement) {}

// TODO: misschien vl-input-addon-button noemen of onder button steken ?
declare global {
    interface HTMLElementTagNameMap {
        'vl-button-input-addon': VlButtonInputAddon;
    }
}

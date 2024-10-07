import { webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';
import { InputAddonBaseElementOfType } from './base/input-addon-base.element';
import './vl-button-input-addon.element';

@elementStyles()
@webComponent('vl-input-addon', { extends: 'p' })
export class VlInputAddonElement extends InputAddonBaseElementOfType(HTMLParagraphElement) {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-addon': VlInputAddonElement;
    }
}

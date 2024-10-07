import { webComponent } from '@domg-wc/common';
import { elementStyles } from '../vl-elements.uig-css';
import { BaseButtonOfType } from './base/base-button.element';

@elementStyles()
@webComponent('vl-button', { extends: 'button' })
export class VlButtonElement extends BaseButtonOfType(HTMLButtonElement) {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-button': VlButtonElement;
    }
}

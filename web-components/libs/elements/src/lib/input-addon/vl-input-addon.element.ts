import { webComponent } from '@domg-wc/common-utilities';
import { InputAddonBaseElementOfType } from './base/input-addon-base.element';
import './vl-button-input-addon.element';

/**
 * VlInput-addon
 * @class
 * @classdesc Gebruik de input-addon in combinatie met de vl-ui-input-group webcomponent. Deze combinatie zorgt ervoor
 *  dat de gebruiker extra informatie ontvangt over de inhoud of de vorm van de inhoud dat ingevuld moet worden.
 *
 * @extends HTMLParagraphElement
 * @mixes vlInputAddonElement
 */
@webComponent('vl-input-addon', { extends: 'p' })
export class VlInputAddonElement extends InputAddonBaseElementOfType(HTMLParagraphElement) {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-input-addon': VlInputAddonElement;
    }
}

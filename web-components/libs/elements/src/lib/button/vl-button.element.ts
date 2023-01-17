import { webComponent } from '@domg-wc/common-utilities';
import { BaseButtonOfType } from './base/base-button.element';

/**
 * VlButton
 * @class
 * @classdesc Gebruik de vl-button om een CTA toe te voegen. Het type call-to-action wordt bepaald door het label of de pictogram.
 *
 * @extends HTMLButtonElement
 * @mixes VlButtonBaseElement
 *
 * @property {boolean} data-vl-error - Attribuut wordt gebruikt om het belang of de gevolgen van een actie te benadrukken.
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om ervoor te zorgen dat de knop getoond wordt als een block element en bijgevol de breedte van de parent zal aannemen.
 * @property {boolean} data-vl-large - Attribuut wordt gebruikt om de aandacht van de gebruiker te trekken door de font-size te vergroten.
 * @property {boolean} data-vl-wide - Attribuut zorgt ervoor dat de knop breder op het scherm zal getoond worden.
 * @property {boolean} data-vl-narrow - Attribuut zorgt ervoor dat de knop smaller op het scherm zal getoond worden.
 * @property {boolean} data-vl-loading - Attribuut wordt gebruikt om aan de gebruiker aan te geven dat zijn actie momenteel verwerkt wordt.
 * @property {boolean} data-vl-secondary - Attribuut wordt gebruikt in combinatie met een gewone knop om alternatieve acties te voorzien.
 * @property {boolean} data-vl-tertiary - Attribuut wordt gebruikt in combinatie met gewone en secondary knoppen om alternatieve acties te voorzien.
 */

@webComponent('vl-button', { extends: 'button' })
export class VlButtonElement extends BaseButtonOfType(HTMLButtonElement) {}

declare global {
    interface HTMLElementTagNameMap {
        'vl-button': VlButtonElement;
    }
}

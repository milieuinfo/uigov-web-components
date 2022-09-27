import { define } from '@domg-lib/common-utilities';
import { BaseButtonOfType } from './base/base-button.element';

/**
 * VlLinkButton
 * @class
 * @classdesc Gebruik de vl-link-button om een CTA toe te voegen.
 *
 * @extends HTMLAnchorElement
 */
export class VlLinkButtonElement extends BaseButtonOfType(HTMLAnchorElement) {}

define('vl-link-button', VlLinkButtonElement, { extends: 'a' });

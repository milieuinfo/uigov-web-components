import { define } from '@domg-wc/common-utilities';
import { BaseTitleOfType } from './base/base-title.element';

export class VlH3Element extends BaseTitleOfType {}

define('vl-h3', VlH3Element, { extends: 'h3' });

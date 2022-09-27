import { define } from '@domg-lib/common-utilities';
import { BaseTitleOfType } from './base/base-title.element';

export class VlH4Element extends BaseTitleOfType {}

define('vl-h4', VlH4Element, { extends: 'h4' });

import { define } from '@domg-wc/common-utilities';
import { BaseTitleOfType } from './base/base-title.element';

export class VlH2Element extends BaseTitleOfType {}

define('vl-h2', VlH2Element, { extends: 'h2' });

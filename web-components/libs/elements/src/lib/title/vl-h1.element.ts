import { define } from '@domg-wc/common-utilities';
import { BaseTitleOfType } from './base/base-title.element';

export class VlH1Element extends BaseTitleOfType {}

define('vl-h1', VlH1Element, { extends: 'h1' });

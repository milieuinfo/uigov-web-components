import { documentStyle, iconListStyle, spotlightStyle } from '@domg/govflanders-style/component';
import { CSSResult } from 'lit/development';
import { vlElementsStyle } from '@domg-wc/elements';

export default [...vlElementsStyle, spotlightStyle, documentStyle, iconListStyle] as CSSResult[];

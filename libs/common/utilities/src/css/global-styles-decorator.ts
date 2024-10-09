import { vlFlexStyles } from '@domg-wc/common-utilities/css/flex/vl-flex.css';
import base from './base.css';
import fonts from './font/fonts.css';
import colors from './vars/colors.var.css';
import general from './vars/general.var.css';
import spacing from './vars/spacing.var.css';
import typography from './vars/typography.var.css';

const globalStyles = [colors, general, spacing, typography, fonts, base, vlFlexStyles];

export class RegisterGlobalStyles {
    static registered = false;

    static register() {
        if (!this.registered) {
            document.adoptedStyleSheets = [
                ...document.adoptedStyleSheets,
                ...(globalStyles.map((style) => style.styleSheet) as CSSStyleSheet[]),
            ];
            this.registered = true;
            console.log('RegisterGlobalStyles: global styling toegevoegd aan het document');
        }
    }
}

export const globalStylesNext =
    () =>
    // eslint-disable-next-line @typescript-eslint/ban-types
    (constructor: Function) => {
        RegisterGlobalStyles.register();
    };

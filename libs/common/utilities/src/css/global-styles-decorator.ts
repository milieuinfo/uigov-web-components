import { UigConfig } from '../config/uig-config';
import colors from './vars/colors.var.css';
import general from './vars/general.var.css';
import spacing from './vars/spacing.var.css';
import typography from './vars/typography.var.css';
import fonts from './font/fonts.css';
import base from './base.css';

const globalStyles = [colors, general, spacing, typography, fonts, base];

class RegisterGlobalStyles {
    static registered = false;

    static register() {
        if (UigConfig.getPreferences().autoRegisterStyles && !this.registered) {
            document.adoptedStyleSheets = [
                ...document.adoptedStyleSheets,
                ...(globalStyles.map((style) => style.styleSheet) as CSSStyleSheet[]),
            ];
            this.registered = true;
            console.log('RegisterGlobalStyles: global (next) styling toegevoegd aan het document');
        }
    }
}

export const globalStylesNext =
    () =>
    // eslint-disable-next-line @typescript-eslint/ban-types
    (constructor: Function) => {
        RegisterGlobalStyles.register();
    };

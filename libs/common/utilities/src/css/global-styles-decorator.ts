import { baseStyles } from './base/styles/vl-base.css';
import { colorStyles } from './base/styles/vl-color.css';
import { generalStyles } from './base/styles/vl-general.css';
import { typographyStyles } from './base/styles/vl-typography.css';
import { fontStyles } from './base/fonts/vl-fonts.css';
import { vlGroupStyles } from './group/vl-group.css';
import { spacingStyles } from './space/vl-spacing.css';

const globalStyles = [
    colorStyles,
    generalStyles,
    spacingStyles,
    typographyStyles,
    fontStyles,
    baseStyles,
    vlGroupStyles,
];

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

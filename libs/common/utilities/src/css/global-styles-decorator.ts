import { baseStyles } from './common/styles/vl-base.css';
import { colorStyles } from './common/styles/vl-color.css';
import { generalStyles } from './common/styles/vl-general.css';
import { typographyStyles } from './common/styles/vl-typography.css';
import { fontStyles } from './common/fonts/vl-fonts.css';
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

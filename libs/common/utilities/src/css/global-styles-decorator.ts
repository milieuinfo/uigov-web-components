import { baseStyles } from './base/style/vl-base.css';
import { colorStyles } from './base/style/vl-color.css';
import { generalStyles } from './base/style/vl-general.css';
import { mediaScreenStyles } from './base/style/vl-media-screen.css';
import { typographyStyles } from './base/style/vl-typography.css';
import { fontStyles } from './base/font/vl-font.css';
import { vlGroupStyles } from './group/vl-group.css';
import { spacingStyles } from './space/vl-spacing.css';

const globalStyles = [
    mediaScreenStyles,
    fontStyles,
    colorStyles,
    generalStyles,
    spacingStyles,
    typographyStyles,
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

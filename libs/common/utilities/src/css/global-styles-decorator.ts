import { vlBaseStyles } from './base/var/vl-base.css';
import { vlColorStyles } from './base/var/vl-color.css';
import { vlGeneralStyles } from './base/var/vl-general.css';
import { vlMediaScreenStyles } from './base/var/vl-media-screen.css';
import { vlTypographyStyles } from './base/var/vl-typography.css';
import { vlFontStyles } from './base/font/vl-font.css';
import { vlGroupStyles } from './group/vl-group.css';
import { vlSpacingStyles } from './space/vl-spacing.css';

const globalStyles = [
    vlMediaScreenStyles,
    vlFontStyles,
    vlColorStyles,
    vlGeneralStyles,
    vlSpacingStyles,
    vlTypographyStyles,
    vlBaseStyles,
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

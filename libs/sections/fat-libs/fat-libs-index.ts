import { registerWebComponents } from '@domg-wc/common-utilities';
import {
    VlAccessibility,
    VlCookieConsent,
    VlCookieConsentOptIn,
    VlCookieStatement,
    VlFooter,
    VlHeader,
    VlPrivacy,
} from '@domg-wc/sections';
import { default as vlElementsStyle } from '../../elements/src/vl-elements.uig-css';

registerWebComponents([
    VlAccessibility,
    VlCookieConsent,
    VlCookieConsentOptIn,
    VlCookieStatement,
    VlFooter,
    VlHeader,
    VlPrivacy,
]);

console.info(
    'webcomponents registered: vl-accessibility, vl-cookie-consent, vl-cookie-consent-opt-in,' +
        ' vl-cookie-statement, vl-footer, vl-header, vl-privacy'
);

(document as any).adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];

console.info("vlElementsStyle's added to the document");

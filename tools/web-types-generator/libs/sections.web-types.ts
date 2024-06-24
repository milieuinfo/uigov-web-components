import { accessibilityArgTypes } from '../../../libs/sections/src/accessibility/stories/vl-accessibility.stories-arg';
import { cookieConsentArgTypes } from '../../../libs/sections/src/cookie-consent/stories/vl-cookie-consent.stories-arg';
import { cookieStatementArgTypes } from '../../../libs/sections/src/cookie-statement/stories/vl-cookie-statement.stories-arg';
import { footerArgTypes } from '../../../libs/sections/src/footer/stories/vl-footer.stories-arg';
import { headerArgTypes } from '../../../libs/sections/src/header/stories/vl-header.stories-arg';
import { privacyArgTypes } from '../../../libs/sections/src/privacy/stories/vl-privacy.stories-arg';
import { addWebTypes } from './util.web-types';

export const sectionsWebTypes = [
    addWebTypes(
        'vl-accessibility',
        accessibilityArgTypes,
        '../../libs/sections/src/accessibility/stories/vl-accessibility.stories-doc.mdx',
        '/docs/sections-accessibility--documentatie'
    ),
    addWebTypes(
        'vl-cookie-consent',
        cookieConsentArgTypes,
        '../../libs/sections/src/cookie-consent/stories/vl-cookie-consent.stories-doc.mdx',
        '/docs/sections-cookie-consent--documentatie'
    ),
    addWebTypes('vl-cookie-consent-opt-in', null, null, '/docs/sections-cookie-consent--documentatie'),
    addWebTypes(
        'vl-cookie-statement',
        cookieStatementArgTypes,
        '../../libs/sections/src/cookie-statement/stories/vl-cookie-statement.stories-doc.mdx',
        '/docs/sections-cookie-statement--documentatie'
    ),
    addWebTypes('vl-authentication-cookie', null, null, '/docs/sections-cookie-statement--documentatie'),
    addWebTypes('vl-cookie', null, null, '/docs/sections-cookie-statement--documentatie'),
    addWebTypes('vl-header-authentication-cookie', null, null, '/docs/sections-cookie-statement--documentatie'),
    addWebTypes('vl-header-cookie', null, null, '/docs/sections-cookie-statement--documentatie'),
    addWebTypes('vl-jsessionid-cookie', null, null, '/docs/sections-cookie-statement--documentatie'),
    addWebTypes('vl-sticky-session-cookie', null, null, '/docs/sections-cookie-statement--documentatie'),
    addWebTypes(
        'vl-footer',
        footerArgTypes,
        '../../libs/sections/src/footer/stories/vl-footer.stories-doc.mdx',
        '/docs/sections-footer--documentatie'
    ),
    addWebTypes(
        'vl-header',
        headerArgTypes,
        '../../libs/sections/src/header/stories/vl-header.stories-doc.mdx',
        '/docs/sections-header--documentatie'
    ),
    addWebTypes(
        'vl-privacy',
        privacyArgTypes,
        '../../libs/sections/src/privacy/stories/vl-privacy.stories-doc.mdx',
        '/docs/sections-privacy--documentatie'
    ),
];

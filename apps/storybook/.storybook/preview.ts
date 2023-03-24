import { formatHTML } from '@domg-wc/common-utilities';
import { CSSResult } from 'lit';
import './docs-styling.css';
import { resetStyle, baseStyle, typographyStyle } from '@domg/govflanders-style/common';
import elementsStyle from '../../../libs/elements/src/lib/vl-elements.uig-css';

document.adoptedStyleSheets = [
    resetStyle.styleSheet,
    typographyStyle.styleSheet,
    baseStyle.styleSheet,
    ...elementsStyle.map((style) => style.styleSheet),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
        expanded: true,
        sort: 'alpha',
    },
    docs: {
        transformSource: formatHTML,
    },
};

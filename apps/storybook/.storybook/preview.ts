import { formatHTML, filterOutClasses } from '@domg-wc/common-storybook';
import './docs-styling.css';
import vlElementsStyle from '../../../libs/elements/src/vl-elements.uig-css';

document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];

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
        transformSource: (input: string) => formatHTML(filterOutClasses(input)),
    },
};

// Hacky way of clicking on Docs button on first load of page.
// https://github.com/storybookjs/storybook/issues/13128
function clickDocsButtonOnFirstLoad() {
    window.removeEventListener('load', clickDocsButtonOnFirstLoad);
    try {
        const docsButtonSelector = window.parent.document.evaluate(
            "//button[contains(., 'Docs')]",
            window.parent.document,
            null,
            XPathResult.ANY_TYPE,
            null
        );
        const button = docsButtonSelector.iterateNext();
        button.click();
    } catch (error) {
        // Do nothing if it wasn't able to click on Docs button.
    }
}

window.addEventListener('load', clickDocsButtonOnFirstLoad);

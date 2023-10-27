import { filterOutClasses, formatHTML } from '@domg-wc/common-storybook';
import { registerWebComponents } from '@domg-wc/common-utilities';
import 'reflect-metadata';
import { VlIconElement } from '../../../libs/elements/src';
// import vlElementsStyle from '../../../libs/elements/src/vl-elements.uig-css';

// document.adoptedStyleSheets = [...vlElementsStyle.map((style) => style.styleSheet)];

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

// zonder deze import missen initieel de iconen, ze verschijnen dan wel maar pas na 30 seconden - onduidelijk waarom
// een gevolg is ook dat de vlElementsStyle's op de document.adoptedStyleSheets gezet worden
registerWebComponents([VlIconElement]);

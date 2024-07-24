import {
    filterOutStoryClasses,
    filterOutClasses,
    filterOutDataCy,
    filterOutStoryStyleTags,
    formatHTML,
} from '@domg-wc/common-storybook';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { VlIconElement } from '@domg-wc/elements';
import './styles.css';
import 'reflect-metadata';
import { VlAlert } from '@domg-wc/components';
import Deprecated from './Deprecated';

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
        components: { Deprecated },
        transformSource: (input: string, { id }: { id: string }) => {
            console.log('transformSource storyContext id', id);
            // if id starts with `styles-` then return the input without any transformation
            if (id.startsWith('styles-')) {
                return formatHTML(filterOutStoryStyleTags(filterOutStoryClasses(input)));
            } else if (id.startsWith('elements-')) {
                return formatHTML(filterOutDataCy(filterOutClasses(input)));
            } else {
                return formatHTML(filterOutStoryClasses(input));
            }
        },
    },
};

// zonder deze import missen initieel de iconen, ze verschijnen dan wel maar pas na 30 seconden - onduidelijk waarom
// een gevolg is ook dat de vlElementsStyle's op de document.adoptedStyleSheets gezet worden
registerWebComponents([VlIconElement, VlAlert]);

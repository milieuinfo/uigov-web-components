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
import { Alert } from './blocks';
import DocumentationTemplate from './documentation-template.mdx';
import { Preview } from '@storybook/web-components';

export const preview: Preview = {
    parameters: {
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
            components: { Alert },
            transformSource: (input: string, { id }: { id: string }) => {
                // als id begint met `styles-` dan geef de input terug zonder enige transformatie
                if (id.startsWith('styles-')) {
                    return formatHTML(filterOutStoryStyleTags(filterOutStoryClasses(input)));
                } else if (id.startsWith('elements-')) {
                    return formatHTML(filterOutDataCy(filterOutClasses(input)));
                } else {
                    return formatHTML(filterOutStoryClasses(input));
                }
            },
            page: DocumentationTemplate,
        },
    },
};

// zonder deze import missen initieel de iconen, ze verschijnen dan wel maar pas na 30 seconden - onduidelijk waarom
// een gevolg is ook dat de vlElementsStyle's op de document.adoptedStyleSheets gezet worden
registerWebComponents([VlIconElement, VlAlert]);

export default preview;

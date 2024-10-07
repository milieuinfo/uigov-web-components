import {
    filterOutClasses,
    filterOutDataCy,
    filterOutStoryClasses,
    filterOutStoryStyleTags,
    formatHTML,
} from '@domg-wc/common-storybook';
import { registerWebComponents } from '@domg-wc/common';
import { VlAlert } from '@domg-wc/components';
import { VlIconElement } from '@domg-wc/elements';
import './styles.css';
import 'reflect-metadata';
import { VluxAlert } from './vlux-alert/vlux-alert.component';
import { VluxMetaData } from './vlux-meta-data/vlux-meta-data.component';
import VluxDocument from './vlux-document/vlux-document.template.mdx';

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
        components: { VluxAlert, VluxMetaData },
        transformSource: (input: string, { id }: { id: string }) => {
            // als id begint met `styles-` geef dan de input terug zonder enige transformatie
            if (id.startsWith('styles-')) {
                return formatHTML(filterOutStoryStyleTags(filterOutStoryClasses(input)));
            } else if (id.startsWith('elements-')) {
                return formatHTML(filterOutDataCy(filterOutClasses(input)));
            } else {
                return formatHTML(filterOutStoryClasses(input));
            }
        },
        page: VluxDocument,
    },
};

// zonder deze import missen initieel de iconen, ze verschijnen dan wel maar pas na 30 seconden - onduidelijk waarom
// een gevolg is ook dat de vlElementsStyle's op de document.adoptedStyleSheets gezet worden
registerWebComponents([VlIconElement, VlAlert]);

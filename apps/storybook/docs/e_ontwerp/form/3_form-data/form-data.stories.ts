import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import formDataDoc from './form-data.stories-doc.mdx';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { FormDataComponent } from './form-data.component';

registerWebComponents([FormDataComponent]);

export default {
    title: 'Ontwerp/Form/FormData',
    tags: ['autodocs'],
    component: 'form data',
    parameters: {
        docs: {
            page: formDataDoc,
        },
    },
} as Meta;

export const FormDataStory = () => html`<vl-form-data></vl-form-data>`;

import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import customValidationDoc from './custom-validation.stories-doc.mdx';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { FormCustomValidationComponent } from './custom-validation.component';

registerWebComponents([FormCustomValidationComponent]);

export default {
    title: 'Ontwerp/Form/Custom validation',
    tags: ['autodocs'],
    component: 'custom validation',
    parameters: {
        docs: {
            page: customValidationDoc,
        },
    },
} as Meta;

export const CustomValidation = () => html`<vl-form-custom-validation></vl-form-custom-validation>`;

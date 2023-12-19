import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import customValidationDoc from './custom-validation.stories-doc.mdx';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { CustomValidationFormComponent } from './custom-validation.component';

registerWebComponents([CustomValidationFormComponent]);

export default {
    title: 'Applicatief/Voorbeelden/form/custom-validation',
    component: 'custom validation',
    parameters: {
        docs: {
            page: customValidationDoc,
        },
    },
} as Meta;

export const CustomValidation = () => html`<vl-custom-validation-form></vl-custom-validation-form>`;

import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import formDemoDoc from './form-demo.stories-doc.mdx';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { FormDemoComponent } from './form-demo.component';

registerWebComponents([FormDemoComponent]);

export default {
    title: 'Ontwerp/Form/Demo',
    tags: ['autodocs'],
    component: 'form demo',
    parameters: {
        docs: {
            page: formDemoDoc,
        },
    },
} as Meta;

export const Demo = () => html`<vl-form-demo></vl-form-demo>`;

import { story } from '@domg-wc/common-storybook';
import { errorMessageArgs, errorMessageArgTypes } from './vl-error-message.stories-arg';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import errorMessageDocs from './vl-error-message.stories-doc.mdx';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '../vl-error-message.component';

export default {
    title: 'Components-next/form/error-message-next',
    tags: ['autodocs'],
    args: errorMessageArgs,
    argTypes: errorMessageArgTypes,
    parameters: {
        docs: {
            page: errorMessageDocs,
        },
    },
} as Meta<typeof errorMessageArgs>;

export const ErrorMessageDefault = story(errorMessageArgs, ({ input, state, show, defaultSlot }) => {
    return html` <vl-error-message-next input=${input} state=${state} ?show=${show}
        >${unsafeHTML(defaultSlot)}</vl-error-message-next
    >`;
});
ErrorMessageDefault.storyName = 'vl-error-message-next - default';
ErrorMessageDefault.args = {
    show: true,
    defaultSlot: 'Dit is een error message.',
};

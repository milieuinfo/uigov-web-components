import { html } from 'lit-html';
import { textArgs, textArgTypes } from './vl-text.stories-arg';
import { Meta } from '@storybook/web-components';
import { story } from '@domg-wc/common-storybook';
import '../vl-text.element';

export default {
    title: 'Elements/text',
    tags: ['autodocs'],
    args: textArgs,
    argTypes: textArgTypes,
} as Meta<typeof textArgs>;

export const TextDefault = story(
    textArgs,
    ({ hidden, content, success, warning, error }: typeof textArgs) =>
        html`
            <span
                ?data-vl-visually-hidden=${hidden}
                ?data-vl-success=${success}
                ?data-vl-warning=${warning}
                ?data-vl-error=${error}
                is="vl-text"
            >
                ${content}
            </span>
        `
);
TextDefault.storyName = 'vl-text - default';
TextDefault.args = {
    content: 'Tekst',
};

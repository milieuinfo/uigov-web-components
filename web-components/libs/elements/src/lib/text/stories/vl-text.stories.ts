import { html } from 'lit-html';
import '../vl-text.element';
import { textArgs, textArgTypes } from './vl-text.stories-arg';

export default {
    title: 'Elements/text',
    args: textArgs,
    argTypes: textArgTypes,
};

export const textDefault = ({ hidden, content }: typeof textArgs) =>
    html`<span ?data-vl-visually-hidden=${hidden} is="vl-text" data-cy="text-default">${content}</span>`;
textDefault.storyName = 'vl-text - default';

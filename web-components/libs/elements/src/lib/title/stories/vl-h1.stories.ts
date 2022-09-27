import { html } from 'lit-html';
import '../vl-h1.element';
import { titleArgs, titleArgTypes } from './vl-title.stories-arg';

export default {
    title: 'Elements/title',
    args: titleArgs,
    argTypes: titleArgTypes,
};

export const titleH1 = ({ border, content, sans, alt, noSpaceBottom }: typeof titleArgs) =>
    html`<h1
        is="vl-h1"
        ?data-vl-has-border=${border}
        ?data-vl-sans=${sans}
        ?data-vl-alt=${alt}
        ?data-vl-no-space-bottom=${noSpaceBottom}
        data-cy="h1"
    >
        ${content}
    </h1>`;
titleH1.storyName = 'vl-title - h1';

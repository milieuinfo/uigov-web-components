import { html } from 'lit-html';
import '../vl-h3.element';
import { titleArgs, titleArgTypes } from './vl-title.stories-arg';

export default {
    title: 'Elements/title',
    args: titleArgs,
    argTypes: titleArgTypes,
};

export const titleH3 = ({ border, content, sans, alt, noSpaceBottom }: typeof titleArgs) =>
    html`<h3
        is="vl-h3"
        ?data-vl-has-border=${border}
        ?data-vl-sans=${sans}
        ?data-vl-alt=${alt}
        ?data-vl-no-space-bottom=${noSpaceBottom}
        data-cy="h3"
    >
        ${content}
    </h3>`;
titleH3.storyName = 'vl-title - h3';

import { html } from 'lit-html';
import '../vl-h6.element';
import { titleArgs, titleArgTypes } from './vl-title.stories-arg';

export default {
    title: 'Elements/title',
    args: titleArgs,
    argTypes: titleArgTypes,
};

export const titleH6 = ({ border, content, sans, alt, noSpaceBottom }: typeof titleArgs) =>
    html`<h6
        is="vl-h6"
        ?data-vl-has-border=${border}
        ?data-vl-sans=${sans}
        ?data-vl-alt=${alt}
        ?data-vl-no-space-bottom=${noSpaceBottom}
        data-cy="h6"
    >
        ${content}
    </h6>`;
titleH6.storyName = 'vl-title - h6';

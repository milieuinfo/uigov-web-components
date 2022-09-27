import { html } from 'lit-html';
import '../vl-h5.element';
import { titleArgs, titleArgTypes } from './vl-title.stories-arg';
import { titleH4 } from './vl-h4.stories';

export default {
    title: 'Elements/title',
    args: titleArgs,
    argTypes: titleArgTypes,
};

export const titleH5 = ({ border, content, sans, alt, noSpaceBottom }: typeof titleArgs) =>
    html`<h5
        is="vl-h5"
        ?data-vl-has-border=${border}
        ?data-vl-sans=${sans}
        ?data-vl-alt=${alt}
        ?data-vl-no-space-bottom=${noSpaceBottom}
        data-cy="h5"
    >
        ${content}
    </h5>`;
titleH5.storyName = 'vl-title - h5';

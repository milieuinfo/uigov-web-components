import { html } from 'lit-html';
import '../vl-h6.element';
import { titleArgs, titleArgTypes } from './vl-title.stories-arg';

export default {
    id: 'Elements/title/h6',
    title: 'Elements/title [deprecated]/h6',
    tags: ['autodocs'],
    args: titleArgs,
    argTypes: titleArgTypes,
    parameters: {
        templateData: {
            alertText:
                'Gebruik de [vl-title-next](/docs/components-next-title--documentatie), in v2.0.0 verdwijnt deze component.',
        },
    },
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

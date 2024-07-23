import { html } from 'lit-html';
import '../vl-h3.element';
import { titleArgs, titleArgTypes } from './vl-title.stories-arg';

export default {
    id: 'Elements/title/h3',
    title: 'Elements/title [deprecated]/h3',
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

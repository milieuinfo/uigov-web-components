import { html } from 'lit-html';
import '../vl-h2.element';
import { titleArgs, titleArgTypes } from './vl-title.stories-arg';

export default {
    id: 'Elements/title/h2',
    title: 'Elements/title [deprecated]/h2',
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

export const titleH2 = ({ border, content, sans, alt, noSpaceBottom }: typeof titleArgs) =>
    html`<h2
        is="vl-h2"
        ?data-vl-has-border=${border}
        ?data-vl-sans=${sans}
        ?data-vl-alt=${alt}
        ?data-vl-no-space-bottom=${noSpaceBottom}
        data-cy="h2"
    >
        ${content}
    </h2>`;
titleH2.storyName = 'vl-title - h2';

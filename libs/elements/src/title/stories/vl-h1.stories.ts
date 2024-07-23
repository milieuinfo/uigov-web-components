import { html } from 'lit-html';
import '../vl-h1.element';
import { titleArgs, titleArgTypes } from './vl-title.stories-arg';

export default {
    id: 'Elements/title/h1',
    title: 'Elements/title [deprecated]/h1',
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

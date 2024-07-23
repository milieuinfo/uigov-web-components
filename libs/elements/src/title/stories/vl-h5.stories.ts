import { html } from 'lit-html';
import '../vl-h5.element';
import { titleArgs, titleArgTypes } from './vl-title.stories-arg';

export default {
    id: 'Elements/title/h5',
    title: 'Elements/title [deprecated]/h5',
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

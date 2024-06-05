import { html } from 'lit-html';
import '../vl-h4.element';
import { titleArgs, titleArgTypes } from './vl-title.stories-arg';

export default {
    id: 'Elements/title/h4',
    title: 'Elements/title [deprecated]/h4',
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

export const titleH4 = ({ border, content, sans, alt, noSpaceBottom }: typeof titleArgs) =>
    html`<h4
        is="vl-h4"
        ?data-vl-has-border=${border}
        ?data-vl-sans=${sans}
        ?data-vl-alt=${alt}
        ?data-vl-no-space-bottom=${noSpaceBottom}
        data-cy="h4"
    >
        ${content}
    </h4>`;
titleH4.storyName = 'vl-title - h4';

import { html, nothing } from 'lit-html';
import '../vl-input-slider.component';
import { Meta, StoryFn } from '@storybook/web-components';
import { inputSliderArgs, inputSliderArgTypes } from './vl-input-slider.stories-arg';
import inputSliderDoc from './vl-input-slider.stories-doc.mdx';

export default {
    title: 'Components/input-slider',
    args: inputSliderArgs,
    argTypes: inputSliderArgTypes,
    parameters: {
        docs: {
            page: inputSliderDoc,
        },
    },
} as Meta<typeof inputSliderArgs>;

export const InputSliderDefault: StoryFn<typeof inputSliderArgs> = ({
    initialValue,
    maxValue,
    minValue,
    onChangeValue,
}) =>
    html`
        <vl-input-slider
            data-vl-initial-value=${initialValue || nothing}
            ${
                /* 
                Houd dit magisch nummer in sync met de default waarde van maxValue in vl-input-slider.component.ts.
                Dit zorgt ervoor dat als de maxValue van de story overeenkomt met de default maxValue dit attribuut niet getoond wordt bij de source in de docs.*/ ''
            }
            data-vl-max-value=${maxValue !== 100 ? maxValue : nothing}
            data-vl-min-value=${minValue || nothing}
            @vl-change-value=${(event: CustomEvent) => onChangeValue(event.detail)}
        ></vl-input-slider>
    `;
InputSliderDefault.storyName = 'vl-input-slider - default';

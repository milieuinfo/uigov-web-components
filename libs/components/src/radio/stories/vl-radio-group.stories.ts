import { story, storyArgs, storyArgTypes } from '@domg-wc/common-storybook';
import { registerWebComponents } from '@domg-wc/common-utilities';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { VlRadioGroup } from '../vl-radio-group.component';
import { VlRadio } from '../vl-radio.component';
import radioDoc from './vl-radio.stories-doc.mdx';

registerWebComponents([VlRadio, VlRadioGroup]);

export default {
    title: 'Components/radio',
    tags: ['autodocs'],
    args: storyArgs({}),
    argTypes: storyArgTypes({}),
    parameters: {
        docs: {
            page: radioDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta;

export const RadioGroupDefault = story(
    {},
    () => html`
        <vl-radio-group id="radio-group-1">
            <vl-radio id="radio-group-1-radio-1" data-vl-label="Ja" data-vl-value="yes"></vl-radio>
            <vl-radio id="radio-group-1-radio-2" data-vl-label="Nee" data-vl-value="no"></vl-radio>
        </vl-radio-group>
    `
);
RadioGroupDefault.storyName = 'vl-radio-group - default';

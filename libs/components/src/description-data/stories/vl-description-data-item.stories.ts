import { html } from 'lit-html';
import '../vl-description-data-item.component';
import { descriptionDataItemArgs, descriptionDataItemArgTypes } from './vl-description-data-item.stories-arg';
import { Meta } from '@storybook/web-components';
import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';

export default {
    title: 'Components/description-data/description-data-item',
    tags: ['autodocs'],
    args: storyArgs(descriptionDataItemArgs),
    argTypes: storyArgTypes(descriptionDataItemArgTypes),
    parameters: {
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta<typeof descriptionDataItemArgs>;

export const descriptionDataItemDefault = ({ label, value }: typeof descriptionDataItemArgs) =>
    html` <vl-description-data-item data-vl-label=${label} data-vl-value=${value}></vl-description-data-item>`;
descriptionDataItemDefault.storyName = 'vl-description-data-item - default';

export const descriptionDataItemWithSlotElements = ({ labelSlotText, valueSlotText }: typeof descriptionDataItemArgs) =>
    html` <vl-description-data-item>
        <span slot="label">${labelSlotText}</span>
        <span slot="value">${valueSlotText}</span>
    </vl-description-data-item>`;
descriptionDataItemWithSlotElements.storyName = 'vl-description-data-item - with slot elements';
descriptionDataItemWithSlotElements.argTypes = {
    label: {
        control: {
            disable: true,
        },
    },
    value: {
        control: {
            disable: true,
        },
    },
    labelSlotText: {
        control: {
            disable: false,
        },
    },
    valueSlotText: {
        control: {
            disable: false,
        },
    },
};

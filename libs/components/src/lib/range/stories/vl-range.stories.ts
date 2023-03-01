import { html, nothing } from 'lit-html';
import '../vl-range.component';
import { rangeArgs, rangeArgTypes } from './vl-range.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';
import rangeDoc from './vl-range.stories-doc.mdx';

export default {
    title: 'Components/range',
    args: rangeArgs,
    argTypes: rangeArgTypes,
    parameters: {
        docs: { page: rangeDoc },
    },
} as Meta<typeof rangeArgs>;

const Template: StoryFn<typeof rangeArgs> = ({ maxLabel, maxValue, minLabel, minValue }) => html`
    <vl-range
        data-vl-max-label=${maxLabel || nothing}
        data-vl-max-value=${maxValue || nothing}
        data-vl-min-label=${minLabel || nothing}
        data-vl-min-value=${minValue || nothing}
    >
    </vl-range>
`;
export const RangeDefault = Template.bind({});
RangeDefault.storyName = 'vl-range - default';

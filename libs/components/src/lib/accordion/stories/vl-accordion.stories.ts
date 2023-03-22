import { html, nothing } from 'lit-html';
import '../vl-accordion.component';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Meta, StoryFn } from '@storybook/web-components';
import { accordionArgs, accordionArgTypes } from './vl-accordion.stories-arg';
import accordionDoc from './vl-accordion.stories-doc.mdx';
import { filterOutClasses, formatHTML } from '@domg-wc/common-utilities';

export default {
    title: 'Components/accordion',
    argTypes: accordionArgTypes,
    parameters: {
        docs: {
            page: accordionDoc,
            transformSource: (input: string) => {
                return formatHTML(filterOutClasses(input));
            },
        },
    },
} as Meta<typeof accordionArgs>;

const Template: StoryFn<typeof accordionArgs> = ({
    bold,
    closeToggleText,
    contentPadding,
    disabled,
    openToggleText,
    toggleText,
    defaultSlot,
    titleSlot,
    onToggle,
}) => html`
    <vl-accordion
        ?data-vl-bold=${bold}
        data-vl-content-padding=${contentPadding || nothing}
        data-vl-close-toggle-text=${closeToggleText ?? nothing}
        ?data-vl-disabled=${disabled}
        data-vl-open-toggle-text=${openToggleText ?? nothing}
        data-vl-toggle-text=${toggleText ?? nothing}
        @vl-on-toggle=${(event: CustomEvent) => onToggle(event.detail)}
    >
        ${unsafeHTML(defaultSlot)}${unsafeHTML(titleSlot)}
    </vl-accordion>
`;

export const AccordionDefault = Template.bind({});
AccordionDefault.storyName = 'vl-accordion - default';
AccordionDefault.args = {
    bold: accordionArgs.bold,
    contentPadding: accordionArgs.contentPadding,
    disabled: accordionArgs.disabled,
    toggleText: accordionArgs.toggleText,
    defaultSlot: accordionArgs.defaultSlot,
};

export const AccordionDynamicToggle = Template.bind({});
AccordionDynamicToggle.storyName = 'vl-accordion - dynamic toggle';
AccordionDynamicToggle.args = {
    bold: accordionArgs.bold,
    closeToggleText: accordionArgs.closeToggleText,
    contentPadding: accordionArgs.contentPadding,
    disabled: accordionArgs.disabled,
    openToggleText: accordionArgs.openToggleText,
    defaultSlot: accordionArgs.defaultSlot,
};

export const AccordionTitleSlot = Template.bind({});
AccordionTitleSlot.storyName = 'vl-accordion - title slot';
AccordionTitleSlot.args = {
    bold: accordionArgs.bold,
    contentPadding: accordionArgs.contentPadding,
    disabled: accordionArgs.disabled,
    titleSlot: accordionArgs.titleSlot,
    defaultSlot: accordionArgs.defaultSlot,
};

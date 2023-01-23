import { html, nothing } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Meta, StoryFn } from '@storybook/web-components';
import { accordionArgs, accordionArgTypes } from './vl-accordion.stories-arg';
import accordionDoc from './vl-accordion.stories-doc.mdx';
import '../vl-accordion.component';

export default {
    title: 'Components/accordion',
    argTypes: accordionArgTypes,
    parameters: {
        docs: { page: accordionDoc },
    },
} as Meta<typeof accordionArgs>;

const Template: StoryFn<typeof accordionArgs> = ({
    toggleText,
    openToggleText,
    closeToggleText,
    defaultSlot,
    titleSlot,
}) => html`
    <vl-accordion
        data-vl-toggle-text=${toggleText ?? nothing}
        data-vl-open-toggle-text=${openToggleText ?? nothing}
        data-vl-close-toggle-text=${closeToggleText ?? nothing}
    >
        ${unsafeHTML(titleSlot)}${unsafeHTML(defaultSlot)}
    </vl-accordion>
`;

export const AccordionDefault = Template.bind({});
AccordionDefault.storyName = 'vl-accordion - default';
AccordionDefault.args = {
    toggleText: accordionArgs.toggleText,
    defaultSlot: accordionArgs.defaultSlot,
};

export const AccordionTitleSlot = Template.bind({});
AccordionTitleSlot.storyName = 'vl-accordion - title slot';
AccordionTitleSlot.args = {
    // Zet toggleText op 'nothing' zodat de attributen vanboven in de controls getoond worden ipv de slots.
    // @ts-ignore: Negeer de type-check van toggleText.
    toggleText: nothing,
    titleSlot: accordionArgs.titleSlot,
    defaultSlot: accordionArgs.defaultSlot,
};

export const AccordionDynamicToggle = Template.bind({});
AccordionDynamicToggle.storyName = 'vl-accordion - dynamic toggle';
AccordionDynamicToggle.args = {
    openToggleText: accordionArgs.openToggleText,
    closeToggleText: accordionArgs.closeToggleText,
    defaultSlot: accordionArgs.defaultSlot,
};

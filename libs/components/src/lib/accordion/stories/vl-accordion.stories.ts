import { html, nothing } from 'lit-html';
import '../vl-accordion.component';
import '../vl-accordion-list.component';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Meta, StoryFn } from '@storybook/web-components';
import { accordionArgs, accordionArgTypes } from './vl-accordion.stories-arg';
import accordionDoc from './vl-accordion.stories-doc.mdx';

export default {
    title: 'Components/accordion',
    argTypes: accordionArgTypes,
    parameters: {
        docs: { page: accordionDoc },
    },
} as Meta<typeof accordionArgs>;

const Template: StoryFn<typeof accordionArgs> = ({
    closeToggleText,
    openToggleText,
    toggleText,
    defaultSlot,
    titleSlot,
}) => html`
    <vl-accordion
        data-vl-close-toggle-text=${closeToggleText ?? nothing}
        data-vl-open-toggle-text=${openToggleText ?? nothing}
        data-vl-toggle-text=${toggleText ?? nothing}
    >
        ${unsafeHTML(defaultSlot)}${unsafeHTML(titleSlot)}
    </vl-accordion>
`;

const AccordionListTemplate: StoryFn<any> = () => html`
    <vl-accordion-list data-vl-bordered="true">
        <vl-accordion data-vl-toggle-text="Accordion nummer 1"> Inhoud accordion nummer 1 </vl-accordion>
        <vl-accordion data-vl-toggle-text="Accordion nummer 2"> Inhoud accordion nummer 2 </vl-accordion>
        <vl-accordion data-vl-toggle-text="Accordion nummer 3 (nested)">
            Inhoud accordion nummer 3
            <vl-accordion-list data-vl-bordered="true">
                <vl-accordion data-vl-toggle-text="Accordion nummer 3.1"> Inhoud accordion nummer 3.1 </vl-accordion>
                <vl-accordion data-vl-toggle-text="Accordion nummer 3.2"> Inhoud accordion nummer 3.2 </vl-accordion>
            </vl-accordion-list>
        </vl-accordion>
    </vl-accordion-list>
    <hr />
    <vl-accordion-list>
        <vl-accordion data-vl-toggle-text="Accordion nummer 1 (no border)">
            Inhoud accordion nummer 1 (no border)
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Accordion nummer 2 (no border)">
            Inhoud accordion nummer 2 (no border)
        </vl-accordion>
        <vl-accordion data-vl-toggle-text="Accordion nummer 3 (no border, nested)">
            Inhoud accordion nummer 3 (no border)
            <vl-accordion-list>
                <vl-accordion data-vl-toggle-text="Accordion nummer 3.1">
                    Inhoud accordion nummer 3.1 (no border)
                </vl-accordion>
                <vl-accordion data-vl-toggle-text="Accordion nummer 3.2">
                    Inhoud accordion nummer 3.2 (no border)
                </vl-accordion>
            </vl-accordion-list>
        </vl-accordion>
    </vl-accordion-list>
`;

export const AccordionDefault = Template.bind({});
AccordionDefault.storyName = 'vl-accordion - default';
AccordionDefault.args = {
    toggleText: accordionArgs.toggleText,
    defaultSlot: accordionArgs.defaultSlot,
};

export const AccordionDynamicToggle = Template.bind({});
AccordionDynamicToggle.storyName = 'vl-accordion - dynamic toggle';
AccordionDynamicToggle.args = {
    openToggleText: accordionArgs.openToggleText,
    closeToggleText: accordionArgs.closeToggleText,
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

export const AccordionListDefault = AccordionListTemplate.bind({});
AccordionListDefault.storyName = 'vl-accordion-list - default';
AccordionListDefault.args = {};

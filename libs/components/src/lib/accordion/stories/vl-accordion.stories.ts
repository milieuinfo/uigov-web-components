import { html } from 'lit-html';
import '../vl-accordion.component';
import { accordionArgs, accordionArgTypes } from './vl-accordion.stories-arg';

export default {
    title: 'Components/accordion',
    args: accordionArgs,
    argTypes: accordionArgTypes,
};

export const accordionDefault = ({ toggleText, content }: typeof accordionArgs) => html` <vl-accordion
    data-vl-toggle-text=${toggleText}
    data-cy="accordion"
>
    <span>${content}</span>
</vl-accordion>`;
accordionDefault.storyName = 'vl-accordion - default';
accordionDefault.argTypes = {
    openToggleText: { table: { disable: true } },
    closedToggleText: { table: { disable: true } },
};

export const accordionWithTitleSlot = ({ toggleText, content }: typeof accordionArgs) => html`
    <vl-accordion data-cy="accordion-with-title-slot">
        <span slot="title">${toggleText}</span>
        <span>${content}</span>
    </vl-accordion>
`;
accordionWithTitleSlot.storyName = 'vl-accordion - with title slot';
accordionWithTitleSlot.argTypes = {
    openToggleText: { table: { disable: true } },
    closedToggleText: { table: { disable: true } },
    toggleText: {
        name: 'title (slot)',
    },
};

export const accordionDynamicToggle = ({
    toggleText,
    content,
    openToggleText,
    closedToggleText,
}: typeof accordionArgs) => html`
    <vl-accordion
        data-vl-toggle-text=${toggleText}
        data-vl-open-toggle-text=${openToggleText}
        data-vl-close-toggle-text=${closedToggleText}
        data-cy="accordion"
    >
        <span>${content}</span>
    </vl-accordion>
`;
accordionDynamicToggle.storyName = 'vl-accordion - dynamic toggle';

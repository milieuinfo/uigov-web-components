import { html } from 'lit-html';
import '../vl-accordion.component';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Meta } from '@storybook/web-components';
import { accordionArgs, accordionArgTypes } from './vl-accordion.stories-arg';
import accordionDoc from './vl-accordion.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'Components/accordion',
    args: storyArgs(accordionArgs),
    argTypes: storyArgTypes(accordionArgTypes),
    parameters: {
        docs: {
            page: accordionDoc,
        },
    },
} as Meta<typeof accordionArgs>;

const Template = story(
    accordionArgs,
    ({
        bold,
        closeToggleText,
        contentPadding,
        disabled,
        icon,
        openToggleText,
        toggleText,
        defaultSlot,
        titleSlot,
        onToggle,
    }) => html`
        <vl-accordion
            ?data-vl-bold=${bold}
            data-vl-content-padding=${contentPadding}
            data-vl-close-toggle-text=${closeToggleText}
            data-vl-icon=${icon}
            ?data-vl-disabled=${disabled}
            data-vl-open-toggle-text=${openToggleText}
            data-vl-toggle-text=${toggleText}
            @vl-on-toggle=${(event: CustomEvent) => onToggle(event.detail)}
        >
            ${unsafeHTML(defaultSlot)}${unsafeHTML(titleSlot)}
        </vl-accordion>
    `
);

export const AccordionDefault = Template.bind({});
AccordionDefault.storyName = 'vl-accordion - default';
AccordionDefault.args = {
    toggleText: 'Lees meer over de onderwijsdoelstelling',
    defaultSlot:
        '<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>',
};

export const AccordionDynamicToggle = Template.bind({});
AccordionDynamicToggle.storyName = 'vl-accordion - dynamic toggle';
AccordionDynamicToggle.args = {
    closeToggleText: 'Sluit de onderwijsdoelstelling',
    openToggleText: 'Open de onderwijsdoelstelling',
    defaultSlot:
        '<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>',
};

export const AccordionIcon = Template.bind({});
AccordionIcon.storyName = 'vl-accordion - icon';
AccordionIcon.args = {
    toggleText: 'Lees meer over de onderwijsdoelstelling',
    icon: 'university',
    defaultSlot:
        '<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>',
};

export const AccordionTitleSlot = Template.bind({});
AccordionTitleSlot.storyName = 'vl-accordion - title slot';
AccordionTitleSlot.args = {
    defaultSlot:
        '<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>',
    titleSlot: '<span slot="title">Lees meer over de onderwijsdoelstelling</span>',
};

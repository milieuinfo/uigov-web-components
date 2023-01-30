import { html } from 'lit-html';
import '../vl-infoblock.component';
import { infoblockArgs, infoblockArgTypes } from './vl-infoblock.stories-arg';

export default {
    title: 'Components/infoblock',
    args: infoblockArgs,
    argTypes: infoblockArgTypes,
};

const infoblockTemplate = ({ title, content, type, icon }: typeof infoblockArgs) =>
    html`
        <vl-infoblock slot="info" data-vl-title=${title} data-vl-type=${type} data-vl-icon=${icon} data-cy="infoblock"
            >${content}
        </vl-infoblock>
    `;

export const infoblockContact = infoblockTemplate.bind({}) as any;
infoblockContact.args = {
    title: 'Contactenlijst',
    content: 'Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.',
    type: 'contact',
};
infoblockContact.storyName = 'vl-infoblock - contact';

export const infoblockPublications = infoblockTemplate.bind({}) as any;
infoblockPublications.args = {
    title: 'Contracten',
    content: 'Hieronder bevindt zich een overzicht van al uw contracten binnen de Vlaamse Overheid',
    type: 'publications',
};
infoblockPublications.storyName = 'vl-infoblock - publications';

export const infoblockFAQ = infoblockTemplate.bind({}) as any;
infoblockFAQ.args = {
    title: 'Veelgestelde vragen',
    content: 'Hieronder bevindt zich een overzicht van alle veelgestelde vragen binnen de Vlaamse Overheid.',
    type: 'faq',
};
infoblockFAQ.storyName = 'vl-infoblock - faq';

export const infoblockNews = infoblockTemplate.bind({}) as any;
infoblockNews.args = {
    title: 'Nieuwsberichten',
    content: 'Hieronder bevindt zich een overzicht van alle nieuwsberichten binnen de Vlaamse Overheid.',
    type: 'news',
};
infoblockNews.storyName = 'vl-infoblock - news';

export const infoblockTimeline = infoblockTemplate.bind({}) as any;
infoblockTimeline.args = {
    title: 'Archief',
    content: 'Hieronder bevindt zicht een overzicht van alle gearchiveerde berichten binnen de Vlaamse Overheid.',
    type: 'timeline',
};
infoblockTimeline.storyName = 'vl-infoblock - time line';

export const infoblockQuestion = infoblockTemplate.bind({}) as any;
infoblockQuestion.args = {
    title: 'Overheidsdiensten',
    content: 'Hieronder bevindt zicht een overzicht van alle overheidsdiensten binnen de Vlaamse Overheid.',
    type: 'question',
};
infoblockQuestion.storyName = 'vl-infoblock - question';

export const infoblockCustomIcon = infoblockTemplate.bind({}) as any;
infoblockCustomIcon.storyName = 'vl-infoblock - custom icon';
infoblockCustomIcon.args = {
    title: 'Evenementen',
    content: 'Hieronder bevindt zicht een overzicht van alle evenementen binnen de Vlaamse Overheid.',
    icon: 'calendar',
};
infoblockCustomIcon.argTypes = {
    icon: {
        control: {
            disable: false,
        },
    },
};

export const infoblockWithSlotElements = ({ title, content, type }: any) => html`
    <vl-infoblock data-vl-type=${type} data-cy="infoblock-with-slot-elements">
        <h2 is="vl-h2" slot="title">${title}</h2>
        ${content}
    </vl-infoblock>
`;
infoblockWithSlotElements.storyName = 'vl-infoblock - with slot elements';
infoblockWithSlotElements.args = {
    title: 'Titel via slot',
    content: 'Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.',
    type: 'contact',
};
infoblockWithSlotElements.argTypes = {
    title: {
        name: 'title (slot)',
    },
};

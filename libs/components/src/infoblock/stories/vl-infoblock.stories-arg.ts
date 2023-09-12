import { ArgTypes } from '@storybook/web-components';

export const infoblockArgs = {
    title: '',
    content: '',
    type: '',
    icon: '',
};

export const infoblockArgTypes: ArgTypes<typeof infoblockArgs> = {
    type: {
        name: 'data-vl-type',
        options: ['contact', 'publications', 'faq', 'news', 'timeline', 'question'],
        description: 'Er kan een vast icoon gekozen worden (contact, publications, faq, news, timeline, question).',
        control: 'select',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: infoblockArgs.type },
        },
    },
    title: {
        name: 'data-vl-title',
        description: 'Attribuut dat wordt gebruikt om de titel van de infoblock te zetten.',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: infoblockArgs.title },
        },
    },
    icon: {
        name: 'data-vl-icon',

        options: ['calendar', 'programming-bug', 'key'],
        description:
            'Attribuut dat wordt gebruikt om een icoon vooraan aan de titel toe te voegen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.',
        control: {
            type: 'select',
            disable: true,
        },
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: infoblockArgs.icon },
        },
    },
    content: {
        name: 'content (for demo purposes)',
        table: {
            type: { summary: 'string' },
        },
    },
};

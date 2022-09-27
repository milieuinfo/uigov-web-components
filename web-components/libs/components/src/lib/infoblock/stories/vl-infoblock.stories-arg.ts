export const infoblockArgs = {
    title: '',
    content: '',
    type: '',
    icon: '',
};

export const infoblockArgTypes = {
    type: {
        name: 'data-vl-type',
        type: 'select',
        options: ['contact', 'publications', 'faq', 'news', 'timeline', 'question'],
        description: 'Er kan een vast icoon gekozen worden (contact, publications, faq, news, timeline, question).',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '' },
        },
    },
    title: {
        name: 'data-vl-title',
        type: { summary: 'string' },
        description: 'Attribuut dat wordt gebruikt om de titel van de infoblock te zetten.',
        table: {
            defaultValue: { summary: '' },
        },
    },
    icon: {
        name: 'data-vl-icon',
        type: 'select',
        options: ['calendar', 'programming-bug', 'key'],
        description:
            'Attribuut dat wordt gebruikt om een icoon vooraan aan de titel toe te voegen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.',
        control: {
            disable: true,
        },
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '' },
        },
    },
    content: {
        name: 'content (for demo purposes)',
        type: { summary: 'string' },
    },
};

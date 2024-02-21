import { CONTROLS, defaultArgs, defaultArgTypes, getSelectControlOptions, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const infoblockArgs = {
    ...defaultArgs,
    title: '',
    content: '',
    type: '',
    icon: '',
};

export const infoblockArgTypes: ArgTypes<typeof infoblockArgs> = {
    ...defaultArgTypes(),
    type: {
        name: 'data-vl-type',
        control: { type: CONTROLS.SELECT },
        options: ['contact', 'publications', 'faq', 'news', 'timeline', 'question'],
        description: 'Er kan een vast icoon gekozen worden (contact, publications, faq, news, timeline, question).',
        table: {
            type: {
                summary: getSelectControlOptions(['contact', 'publications', 'faq', 'news', 'timeline', 'question']),
            },
            defaultValue: { summary: infoblockArgs.type },
        },
    },
    title: {
        name: 'data-vl-title',
        description: 'Attribuut dat wordt gebruikt om de titel van de infoblock te zetten.',
        table: {
            type: { summary: TYPES.STRING },
            defaultValue: { summary: infoblockArgs.title },
        },
    },
    icon: {
        name: 'data-vl-icon',
        control: {
            type: CONTROLS.SELECT,
            disable: true,
        },
        options: ['calendar', 'programming-bug', 'key'],
        description:
            'Attribuut dat wordt gebruikt om een icoon vooraan aan de titel toe te voegen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.',
        table: {
            type: { summary: getSelectControlOptions(['calendar', 'programming-bug', 'key']) },
            defaultValue: { summary: infoblockArgs.icon },
        },
    },
    content: {
        name: 'content (for demo purposes)',
        table: {
            type: { summary: TYPES.STRING },
        },
    },
};

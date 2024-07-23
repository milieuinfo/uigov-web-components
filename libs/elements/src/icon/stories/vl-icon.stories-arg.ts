import '../vl-icon.element';
import { CONTROLS, getSelectControlOptions } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const iconArgs = {
    icon: 'calendar',
    size: '',
    link: '',
    light: false,
    rotate: false,
    fullRotate: false,
    before: false,
    after: false,
    content: 'Lorem ipsum dolor sit amet',
};

export const iconArgTypes: ArgTypes<typeof iconArgs> = {
    icon: {
        name: 'data-vl-icon',
        control: { type: CONTROLS.SELECT },
        options: ['calendar', 'chat-help', 'key'],
        description: 'Attribuut wordt gebruikt om aan te geven welk icoon getoond moet worden.',
        table: {
            defaultValue: { summary: '' },
            type: { summary: getSelectControlOptions(['calendar', 'chat-help', 'key', '']) },
        },
    },
    size: {
        name: 'data-vl-size',
        control: { type: CONTROLS.SELECT },
        options: ['small', 'large'],
        description:
            'Attribuut wordt gebruikt om het icoon te verkleinen (80%) of te vergroten (120%) ten opzichte van de parent.',
        table: {
            type: { summary: getSelectControlOptions(['small', 'large', '']) },
            defaultValue: { summary: '' },
        },
    },
    light: {
        name: 'data-vl-light',
        description: 'Attribuut wordt gebruikt om het icoon een lichte kleur te geven.',
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    rotate: {
        name: 'data-vl-90deg',
        description: 'Attribuut wordt gebruikt om het icoon 90 graden te roteren.',
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    fullRotate: {
        name: 'data-vl-180deg',
        description: 'Attribuut wordt gebruikt om het icoon 180 graden te roteren.',
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    before: {
        name: 'data-vl-before',
        description:
            'Attribuut wordt gebruikt wanneer het icoon voor een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.',
        control: {
            disable: true,
        },
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    after: {
        name: 'data-vl-after',
        description:
            'Attribuut wordt gebruikt wanneer het icoon achter een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.',
        control: {
            disable: true,
        },
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    link: {
        name: 'data-vl-link',
        description:
            'Attribuut moet gebruikt worden wanneer het icoon binnen een a tag gebruikt wordt zodat de stijl goed is.',
        control: {
            disable: true,
        },
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' },
        },
    },
    content: {
        name: 'content (for demo purposes)',
        table: { summary: 'string' },
    },
};

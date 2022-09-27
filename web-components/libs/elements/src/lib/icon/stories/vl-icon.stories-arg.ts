import '../vl-icon.element';

export const iconArgs = {
    icon: 'calendar',
    size: '',
    light: false,
    rotate: false,
    fullRotate: false,
    before: false,
    after: false,
    content: 'Lorem ipsum dolor sit amet',
};

export const iconArgTypes = {
    icon: {
        name: 'data-vl-icon',
        control: {
            type: 'select',
            options: ['calendar', 'chat-help', 'key'],
        },
        description: 'Attribuut wordt gebruikt om aan te geven welk icoon getoond moet worden.',
        table: {
            defaultValue: { summary: '' },
        },
    },
    size: {
        name: 'data-vl-size',
        control: {
            type: 'select',
            options: ['small', 'large'],
        },
        description:
            'Attribuut wordt gebruikt om het icoon te verkleinen (80%) of te vergroten (120%) ten opzichte van de parent.',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '' },
        },
    },
    light: {
        name: 'data-vl-light',
        type: { summary: 'boolean' },
        description: 'Attribuut wordt gebruikt om het icoon een lichte kleur te geven.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    rotate: {
        name: 'data-vl-90deg',
        type: { summary: 'boolean' },
        description: 'Attribuut wordt gebruikt om het icoon 90 graden te roteren.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    fullRotate: {
        name: 'data-vl-180deg',
        type: { summary: 'boolean' },
        description: 'Attribuut wordt gebruikt om het icoon 180 graden te roteren.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    before: {
        name: 'data-vl-before',
        type: { summary: 'boolean' },
        description:
            'Attribuut wordt gebruikt wanneer het icoon voor een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.',
        control: {
            disable: true,
        },
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    after: {
        name: 'data-vl-after',
        type: { summary: 'boolean' },
        description:
            'Attribuut wordt gebruikt wanneer het icoon achter een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.',
        control: {
            disable: true,
        },
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    link: {
        name: 'data-vl-link',
        type: { summary: 'boolean' },
        description:
            'Attribuut moet gebruikt worden wanneer het icoon binnen een a tag gebruikt wordt zodat de stijl goed is.',
        control: {
            disable: true,
        },
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    content: {
        name: 'content (for demo purposes)',
        type: { summary: 'string' },
    },
};

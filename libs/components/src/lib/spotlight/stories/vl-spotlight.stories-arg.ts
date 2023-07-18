import { SIZE } from '../vl-spotlight.model';
import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';

export const spotlightArgs = {
    link: '',
    alt: false,
    size: SIZE.S,
    imgSrc: '',
    imgAlt: '',
    title: 'Premies voor renovatie',
    subtitle: '',
    text: '',
    content: '',
};

export const spotlightArgTypes = {
    link: {
        name: 'data-vl-link',
        type: { summary: TYPES.STRING, required: false },
        description:
            'De component wordt een link. Door te klikken op de component wordt de gebruiker doorgestuurd naar de link die gezet is in dit attribuut.',
        table: {
            defaultValue: { summary: '' },

            category: CATEGORIES.ATTRIBUTES,
        },
    },
    alt: {
        name: 'data-vl-alt',
        type: { summary: TYPES.BOOLEAN, required: false },
        description: 'Geeft de component een alternatieve stijl. De achtergrond wordt grijs.',
        table: {
            defaultValue: { summary: false },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    size: {
        name: 'data-vl-size',
        type: {
            summary: `${SIZE.XS} | ${SIZE.S} | ${SIZE.L}`,
            required: false,
        },
        description: 'Dit attribuut bepaalt de grootte van de component.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: `${SIZE.S}` },
        },
        control: {
            type: 'select',
            options: [SIZE.XS, SIZE.S, SIZE.L],
        },
    },
    imgSrc: {
        name: 'data-vl-img-src',
        type: { summary: TYPES.STRING, required: false },
        description: 'Het path van de image dat getoond moet worden in de spotlight.',
        table: {
            defaultValue: { summary: '' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    imgAlt: {
        name: 'data-vl-img-alt',
        type: { summary: TYPES.STRING, required: false },
        description: 'De alternatieve tekst van de image dat getoond moet worden in de spotlight.',
        table: {
            defaultValue: { summary: '' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    title: {
        name: 'title',
        type: { summary: TYPES.STRING, required: false },
        description: 'Titel van de spotlight.',
        table: {
            defaultValue: { summary: '' },
            category: CATEGORIES.SLOTS,
        },
    },
    subtitle: {
        name: 'subtitle',
        type: { summary: TYPES.STRING, required: false },
        description: 'Subtitle van de spotlight.',
        table: {
            defaultValue: { summary: '' },
            category: CATEGORIES.SLOTS,
        },
    },
    text: {
        name: 'text',
        type: { summary: TYPES.STRING, required: false },
        description: 'Text van de spotlight.',
        table: {
            defaultValue: { summary: '' },
            category: CATEGORIES.SLOTS,
        },
    },
    content: {
        name: 'content',
        type: { summary: TYPES.STRING, required: false },
        description: 'Content van de spotlight.',
        table: {
            defaultValue: { summary: '' },
            category: CATEGORIES.SLOTS,
        },
    },
};

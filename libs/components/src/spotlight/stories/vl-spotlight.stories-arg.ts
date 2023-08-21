import { ArgTypes } from '@storybook/web-components';
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

export const spotlightArgTypes: ArgTypes = {
    link: {
        name: 'data-vl-link',
        description:
            'De component wordt een link. Door te klikken op de component wordt de gebruiker doorgestuurd naar de link die gezet is in dit attribuut.',
        table: {
            type: { summary: TYPES.STRING, required: false },
            defaultValue: { summary: '' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    alt: {
        name: 'data-vl-alt',
        description: 'Geeft de component een alternatieve stijl. De achtergrond wordt grijs.',
        table: {
            type: { summary: TYPES.BOOLEAN, required: false },
            defaultValue: { summary: false },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    size: {
        name: 'data-vl-size',
        description: 'Dit attribuut bepaalt de grootte van de component.',
        table: {
            type: {
                summary: `${SIZE.XS} | ${SIZE.S} | ${SIZE.L}`,
                required: false,
            },
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
        description: 'Het path van de image dat getoond moet worden in de spotlight.',
        table: {
            type: { summary: TYPES.STRING, required: false },
            defaultValue: { summary: '' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    imgAlt: {
        name: 'data-vl-img-alt',
        description: 'De alternatieve tekst van de image dat getoond moet worden in de spotlight.',
        table: {
            type: { summary: TYPES.STRING, required: false },
            defaultValue: { summary: '' },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    title: {
        name: 'title',
        description: 'Titel van de spotlight.',
        table: {
            type: { summary: TYPES.STRING, required: false },
            defaultValue: { summary: '' },
            category: CATEGORIES.SLOTS,
        },
    },
    subtitle: {
        name: 'subtitle',
        description: 'Subtitle van de spotlight.',
        table: {
            type: { summary: TYPES.STRING, required: false },
            defaultValue: { summary: '' },
            category: CATEGORIES.SLOTS,
        },
    },
    text: {
        name: 'text',
        description: 'Text van de spotlight.',
        table: {
            type: { summary: TYPES.STRING, required: false },
            defaultValue: { summary: '' },
            category: CATEGORIES.SLOTS,
        },
    },
    content: {
        name: 'content',
        description: 'Content van de spotlight.',
        table: {
            type: { summary: TYPES.STRING, required: false },
            defaultValue: { summary: '' },
            category: CATEGORIES.SLOTS,
        },
    },
};

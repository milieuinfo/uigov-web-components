import { ArgTypes } from '@storybook/web-components';
import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const accordionArgs = {
    toggleText: 'Lees meer over de onderwijsdoelstelling',
    openToggleText: 'Open de onderwijsdoelstelling',
    closeToggleText: 'Sluit de onderwijsdoelstelling',
    defaultSlot:
        '<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>',
    titleSlot: '<span slot="title">Lees meer over de onderwijsdoelstelling</span>',
};

export const accordionArgTypes: ArgTypes<typeof accordionArgs> = {
    toggleText: {
        name: 'data-vl-toggle-text',
        description: 'Tekst waarop de gebruiker kan klikken om de accordion te openen en te sluiten.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    openToggleText: {
        name: 'data-vl-open-toggle-text',
        description: 'Tekst waarop de gebruiker kan klikken om de accordion te openen.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    closeToggleText: {
        name: 'data-vl-close-toggle-text',
        description: 'Tekst waarop de gebruiker kan klikken om de accordion te sluiten.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    defaultSlot: {
        name: '[default]',
        description: 'Element dat getoond en verborgen wordt wanneer de gebruiker de accordion opent en sluit.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    titleSlot: {
        name: 'title',
        description: 'Element waarop de gebruiker kan klikken om de accordion te openen en te sluiten.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
};

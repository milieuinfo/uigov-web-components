import { ArgTypes } from '@storybook/web-components';
import { CATEGORIES, PADDINGS, TYPES } from '@domg-wc/common-utilities';
import { action } from '@storybook/addon-actions';

export const accordionArgs = {
    bold: false,
    closeToggleText: 'Sluit de onderwijsdoelstelling',
    contentPadding: null,
    disabled: false,
    openToggleText: 'Open de onderwijsdoelstelling',
    toggleText: 'Lees meer over de onderwijsdoelstelling',
    defaultSlot:
        '<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>',
    titleSlot: '<span slot="title">Lees meer over de onderwijsdoelstelling</span>',
    onToggle: action('vl-on-toggle'),
};

export const accordionArgTypes: ArgTypes<typeof accordionArgs> = {
    bold: {
        name: 'data-vl-bold',
        description: 'Beeldt de toggle-text van de accordion af in bold.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    closeToggleText: {
        name: 'data-vl-close-toggle-text',
        description:
            'Tekst waarop de gebruiker kan klikken om de accordion te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-toggle-text attribuut<br>• title slot',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    contentPadding: {
        name: 'data-vl-content-padding',
        description:
            'De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.',
        control: {
            type: 'select',
            options: [...Object.keys(PADDINGS)],
        },
        table: {
            type: {
                summary: Object.keys(PADDINGS),
            },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    disabled: {
        name: 'data-vl-disabled',
        description: 'Schakelt het openen en het sluiten van de accordion uit.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    openToggleText: {
        name: 'data-vl-open-toggle-text',
        description:
            'Tekst waarop de gebruiker kan klikken om de accordion te openen.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-toggle-text attribuut<br>• title slot',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    toggleText: {
        name: 'data-vl-toggle-text',
        description:
            'Tekst waarop de gebruiker kan klikken om de accordion te openen of te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-close-toggle-text attribuut<br>• data-vl-open-toggle-text attribuut<br>• title slot',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    defaultSlot: {
        name: '[default]',
        description: 'Element dat getoond en verborgen wordt wanneer de gebruiker de accordion opent of sluit.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    titleSlot: {
        name: 'title',
        description:
            'Element waarop de gebruiker kan klikken om de accordion te openen of te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-close-toggle-text attribuut<br>• data-vl-open-toggle-text attribuut<br>• data-vl-toggle-text attribuut',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
        },
    },
    onToggle: {
        name: 'vl-on-toggle',
        description:
            'Afgevuurd bij het openen of sluiten van de accordion.<br>Het event bevat of de accordion geopend of gesloten is.',
        table: {
            type: { summary: '{ open: boolean }' },
            category: CATEGORIES.EVENTS,
        },
    },
};

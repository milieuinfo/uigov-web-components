import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const prozaMessagePreloaderArgs = {
    baseUrl: '',
    domain: '',
};

export const prozaMessagePreloaderArgTypes: ArgTypes<typeof prozaMessagePreloaderArgs> = {
    baseUrl: {
        name: 'data-vl-base-url',
        description: `Optionele baseUrl waarvan de Proza berichten opgehaald worden.<br>Indien deze baseUrl niet meegegeven wordt, worden de Proza berichten opgehaald relatief tov de huidige url op het pad 'proza/domein/{domain}'.<br>Dit attribuut is niet reactief.`,
        control: false,
        table: {
            type: { summary: TYPES.URL },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: prozaMessagePreloaderArgs.baseUrl },
        },
    },
    domain: {
        name: 'data-vl-domain',
        description: 'Het Proza domein waarin de Proza berichten zit.',
        type: { name: TYPES.STRING, required: true },
        control: false,
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: prozaMessagePreloaderArgs.domain },
        },
    },
};

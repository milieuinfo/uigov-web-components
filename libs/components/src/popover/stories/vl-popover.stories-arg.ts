import {
    CATEGORIES,
    CONTROLS,
    defaultArgs,
    defaultArgTypes,
    getSelectControlOptions,
    TYPES,
} from '@domg-wc/common-storybook';
import { PADDINGS } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const popoverDefaultArgs = {
    ...defaultArgs,
    contentPadding: 'small',
    for: '',
    trigger: 'click',
    hideArrow: false,
    hideOnClick: false,
    open: false,
    placement: 'bottom',
    distance: 10,
};

export const popoverArgTypes: ArgTypes = {
    ...defaultArgTypes(true),
    for: {
        name: 'for',
        description:
            'HTML id van het element die de popover zal triggeren en waar tegenover de popover zich zal oriënteren.',
        type: { name: TYPES.STRING, required: true },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: popoverDefaultArgs.for },
        },
    },
    open: {
        name: 'open',
        description: 'Bepaalt of de popover open is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: popoverDefaultArgs.open },
        },
    },
    hideArrow: {
        name: 'hide-arrow',
        description: 'Verbergt de pijl die wijst naar het element die de popover triggert.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: popoverDefaultArgs.hideArrow },
        },
    },
    hideOnClick: {
        name: 'hide-on-click',
        description: 'Verbergt popover wanneer op de content wordt geklikt. Niet reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: popoverDefaultArgs.hideOnClick },
        },
    },
    distance: {
        name: 'distance',
        description: 'Afstand van popover tegenover trigger element.',
        control: { type: CONTROLS.RANGE, min: 0, max: 100, step: 1 },
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: popoverDefaultArgs.distance },
        },
    },
    contentPadding: {
        name: 'content-padding',
        description:
            'De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.',
        control: { type: CONTROLS.SELECT },
        options: [...Object.keys(PADDINGS)],
        table: {
            type: { summary: getSelectControlOptions(Object.keys(PADDINGS)) },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: popoverDefaultArgs.contentPadding },
        },
    },
    placement: {
        name: 'placement',
        description:
            'Voorkeursoriëntatie van de popover als de ruimte het toelaat. Je kan ook `-start` of `-end` suffix toevoegen zodat oriëntatie start of eindigt aan respectievelijk begin of einde van het trigger element.',
        table: {
            type: { summary: ['top', 'right', 'bottom', 'left'] },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: popoverDefaultArgs.placement },
        },
    },
    trigger: {
        name: 'trigger',
        description:
            'Gebruiker interacties die popover zal triggeren. Je kan verschillende combineren door ze met een spatie naast mekaar te zetten. Bv. met `focus hover` zal de popover zowel verschijnen bij focus als bij hover.',
        table: {
            type: { summary: ['click', 'focus', 'hover'] },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: popoverDefaultArgs.trigger },
        },
    },
};

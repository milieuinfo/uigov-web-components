import { CATEGORIES, TYPES, defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { linkDefaults } from '../vl-link.component';

type LinkArgs = typeof defaultArgs & typeof linkDefaults & { defaultSlot: string };

export const linkArgs: LinkArgs = {
    ...defaultArgs,
    ...linkDefaults,
    defaultSlot: '',
};

export const linkArgTypes: ArgTypes<LinkArgs> = {
    ...defaultArgTypes(true),
    href: {
        name: 'href',
        description: 'De url waar de link naar verwijst.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: linkArgs.href },
        },
    },
    bold: {
        name: 'bold',
        description: 'Beeldt de tekst van de link vet af.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: linkArgs.bold },
        },
    },
    small: {
        name: 'small',
        description: 'Beeldt de tekst van de link klein af.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: linkArgs.small },
        },
    },
    large: {
        name: 'large',
        description: 'Beeldt de tekst van de link groot af.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: linkArgs.large },
        },
    },
    error: {
        name: 'error',
        description: 'Beeldt de link af in een error state.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: linkArgs.error },
        },
    },
    external: {
        name: 'external',
        description: 'Opent de link in een nieuw tabblad.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: linkArgs.external },
        },
    },
    defaultSlot: {
        name: '[default]',
        description: 'De content van de link.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: linkArgs.defaultSlot },
        },
    },
};

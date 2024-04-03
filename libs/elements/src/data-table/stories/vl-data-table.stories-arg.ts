import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { dataTableDefaults } from '../vl-data-table.element';

export const dataTableArgs = {
    ...dataTableDefaults,
};

export const dataTableArgTypes: ArgTypes<typeof dataTableArgs> = {
    hover: {
        name: 'data-vl-hover',
        description:
            'Attribuut wordt gebruikt om een rij te highlighten wanneer de gebruiker erover hovert met muiscursor.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: dataTableArgs.hover },
        },
    },
    matrix: {
        name: 'data-vl-matrix',
        description:
            'Attribuut wordt gebruikt om data in 2 dimensies te tonen. Zowel de rijen als de kolommen krijgen een titel. Deze titels worden gescheiden door een dikke lijn.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: dataTableArgs.matrix },
        },
    },
    grid: {
        name: 'data-vl-grid',
        description: 'Variant met een lijn tussen elke rij en kolom.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: dataTableArgs.grid },
        },
    },
    zebra: {
        name: 'data-vl-zebra',
        description:
            'Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. ' +
            'Deze zebra werkt niet voor tabellen met detail rijen, gebruik hiervoor data-vl-uig-zebra.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: dataTableArgs.zebra },
        },
    },
    uigZebra: {
        name: 'data-vl-uig-zebra',
        description:
            'Variant waarin de rijen afwisselend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar. Deze zebra werkt voor tabellen met en zonder detail rijen.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: dataTableArgs.uigZebra },
        },
    },
    collapsedM: {
        name: 'data-vl-collapsed-m',
        description:
            'Vanaf een medium schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: dataTableArgs.collapsedM },
        },
    },
    collapsedS: {
        name: 'data-vl-collapsed-s',
        description:
            'Vanaf een small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: dataTableArgs.collapsedS },
        },
    },
    collapsedXS: {
        name: 'data-vl-collapsed-xs',
        description:
            'Vanaf een extra small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: dataTableArgs.collapsedXS },
        },
    },
};

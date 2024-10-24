import { TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const titleArgs = {
    border: false,
    sans: false,
    alt: false,
    noSpaceBottom: false,
    content: "I'm a title",
};

export const titleArgTypes: ArgTypes<typeof titleArgs> = {
    border: {
        name: 'data-vl-has-border',
        description: 'Attribuut wordt gebruikt om een subtiele lijn toe te voegen onder de titel.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
        },
    },
    sans: {
        name: 'data-vl-sans',
        description: 'Attribuut wordt gebruikt om de font te wijzigen van Flanders Serif naar Flanders Sans.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
        },
    },
    alt: {
        name: 'data-vl-alt',
        description: 'Attribuut wordt gebruikt voor een alt titel en zal altijd een lijn toevoegen onder de titel.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
        },
    },
    noSpaceBottom: {
        name: 'data-vl-no-space-bottom',
        description: 'Attribuut wordt gebruikt wanneer een titel gecombineerd wordt met de grid component.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            defaultValue: { summary: 'false' },
        },
    },
    content: {
        name: 'content (for demo purposes)',
    },
};

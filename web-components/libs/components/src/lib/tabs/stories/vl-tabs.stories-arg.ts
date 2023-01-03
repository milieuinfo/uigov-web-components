import { TYPES } from '@domg-wc/common-utilities';
import { Args, ArgTypes } from '@storybook/web-components';

export const tabsArgs: Args = {
    alt: false,
    responsiveLabel: false,
};

export const tabsArgTypes: ArgTypes = {
    alt: {
        name: 'data-vl-alt',
        description: 'Attribuut om de alt variant van de tabs te tonen. Deze variant dient gebruikt te worden als subnavigatie onder de functional header.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
    responsiveLabel: {
        name: 'data-vl-responsive-label',
        description: 'Attribuut om de waarde in de tabs in responsive mode te veranderen. Enkel van toepassing wanneer geen tab is gekozen.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
};

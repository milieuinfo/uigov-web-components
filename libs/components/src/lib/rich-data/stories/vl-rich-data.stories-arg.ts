import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';

export const richDataArgs = {
    filterCloseable: false,
    filterClosed: false,
};

export const richDataArgTypes: ArgTypes<typeof richDataArgs> = {
    filterCloseable: {
        name: 'data-vl-filter-closeable',
        description: 'Attribuut dat de filter sluitbaar maakt en een knop getoond wordt om de\n * filter te tonen en terug te verbergen. Op een klein scherm wordt een modal geopend bij het klikken op de filter knop\n * ipv een de filter naast de tabel te tonen. Om elementen van de filter te verbergen enkel in de modal, kan het\n * attribuut data-vl-hidden-in-modal gezet worden.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    filterClosed: {
        name: 'data-vl-filter-closed',
        description: 'Attribuut dat aangeeft of dat de filter gesloten is.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
};

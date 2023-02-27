import { CATEGORIES } from '@domg-wc/common-utilities';
import { Args } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

export const mapClickActionArgs: Args = {
    onClickActionStoryBook: action('vl-map-clicked'),
};

export const mapClickActionArgTypes = {
    onClickActionStoryBook: {
        table: {
            disable: true,
        },
    },
    vlMapClicked: {
        name: 'vl-map-clicked',
        description: 'Event dat wordt afgevuurd wanneer op de map werd geklikt. Zie action tab & docs.',
        table: { category: CATEGORIES.EVENTS },
    },
};

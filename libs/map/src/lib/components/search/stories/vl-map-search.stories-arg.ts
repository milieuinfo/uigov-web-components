import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';
import { mapArgs, mapArgTypes } from '../../../stories/vl-map.stories-arg';

export const mapSearchArgs = {
    ...mapArgs,
    disableKeyboard: true,
    withOffset: false,
};

export const mapSearchArgTypes = {
    ...mapArgTypes,
    withOffset: {
        name: 'data-vl-with-offset',
        description:
            'Beeldt de search af met een linkse offset.<br>Wordt gebruikt als er een map side sheet is aan de linkerkant zodat de toggle van de map side sheet niet afgebeeld wordt boven de search bar.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
};

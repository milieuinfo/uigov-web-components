import { mapActionArgs, mapActionArgTypes } from '../../stories/vl-map-action.stories-arg';
import { CATEGORIES, TYPES } from '@domg-lib/common-utilities';

export const mapSelectActionArgs = {
    ...mapActionArgs,
    cluster: false,
};

export const mapSelectActionArgTypes = {
    ...mapActionArgTypes,
    cluster: {
        name: 'data-vl-cluster',
        type: { summary: TYPES.BOOLEAN },
        description: 'Indicates whether the features are clustered or not.',
        table: {
            defaultValue: { summary: 'false' },
            category: CATEGORIES.ATTRIBUTES,
        },
        control: { disable: true },
    },
};

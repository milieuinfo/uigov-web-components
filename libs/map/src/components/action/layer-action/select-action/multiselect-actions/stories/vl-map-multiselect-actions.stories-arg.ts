import { ArgTypes } from '@storybook/web-components';
import {
    mapSelectActionsArgTypes,
    mapSelectActionsArgs,
} from '../../select-actions/stories/vl-map-select-actions.stories-arg';

export const mapMultiselectActionsArgs = {
    ...mapSelectActionsArgs,
};

export const mapMultiselectActionsArgTypes: ArgTypes<typeof mapSelectActionsArgs> = {
    ...mapSelectActionsArgTypes,
};

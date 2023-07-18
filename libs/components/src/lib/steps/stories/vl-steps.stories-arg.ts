import { TYPES } from '@domg-wc/common-storybook';
import { Args, ArgTypes } from '@storybook/web-components';

export const stepsArgs: Args = {
    timeline: false,
};

export const stepsArgTypes: ArgTypes = {
    timeline: {
        name: 'data-vl-timeline',
        description: 'Attribuut wordt gebruikt om aan te geven dat de stappen een tijdlijn voorstellen.',
        table: {
            type: {
                summary: TYPES.BOOLEAN,
            },
            category: 'Attributes',
            defaultValue: { summary: false },
        },
    },
};

import { defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const stepsArgs = {
    ...defaultArgs,
    timeline: false,
};

export const stepsArgTypes: ArgTypes = {
    ...defaultArgTypes(),
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

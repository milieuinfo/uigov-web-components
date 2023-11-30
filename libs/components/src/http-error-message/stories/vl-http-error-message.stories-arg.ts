import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';

export const httpErrorMessageArgs = {
    ...defaultArgs,
    title: 'Niets gevonden hiervoor.',
    image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
    alt: 'Niets gevonden',
    textSlotText: 'Sorry, er liep iets onverwachts mis.',
    actionsSlotText: 'Opnieuw opstarten',
};

export const httpErrorMessageArgTypes = {
    ...defaultArgTypes(),
    title: {
        name: 'data-vl-title',
        type: { name: TYPES.STRING, required: false },
        description: 'Changes the title of the error message.',
        table: {
            type: { summary: TYPES.STRING },
            defaultValue: { summary: undefined },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    image: {
        name: 'data-vl-image',
        type: { name: TYPES.STRING, required: false },
        description: 'Changes the URL of the image that is shown.',
        table: {
            type: { summary: TYPES.STRING },
            defaultValue: { summary: undefined },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    alt: {
        name: 'data-vl-image-alt',
        type: { name: TYPES.STRING, required: false },
        description: 'Changes the alternative text of the image.',
        table: {
            type: { summary: TYPES.STRING },
            defaultValue: { summary: undefined },
            category: CATEGORIES.ATTRIBUTES,
        },
    },
    textSlotText: {
        name: 'text',
        type: { name: TYPES.STRING, required: false },
        description: 'Changes the descriptive text that is shown under the title.',
        table: {
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: undefined },
        },
    },
    actionsSlotText: {
        name: 'actions',
        type: { name: TYPES.STRING, required: false },
        description: 'Defines the actions that need to be shown.',
        table: {
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: undefined },
        },
    },
};

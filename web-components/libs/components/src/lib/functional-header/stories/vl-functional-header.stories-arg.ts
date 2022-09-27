import { CATEGORIES } from '@domg-lib/common-utilities';

export const functionalHeaderArgs = {
    title: 'School- en studietoelagen',
    subTitle: 'Voor lager, middelbaar en hoger onderwijs',
    link: '#',
    backLink: '#',
    back: 'Terug',
};

export const functionalHeaderArgTypes = {
    title: {
        name: 'data-vl-title',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de tekst van de titel te bepalen.',
        table: {
            defaultValue: { summary: '' },
        },
    },
    subTitle: {
        name: 'data-vl-sub-title',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de tekst van de sub titel te bepalen.',
        table: {
            defaultValue: { summary: '' },
        },
    },
    link: {
        name: 'data-vl-link',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de link van de titel te bepalen.',
        table: {
            defaultValue: { summary: '' },
        },
    },
    backLink: {
        name: 'data-vl-back-link',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de terug link te bepalen.',
        table: {
            defaultValue: { summary: '' },
        },
    },
    back: {
        name: 'data-vl-back',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de terug link tekst te bepalen.',
        table: {
            defaultValue: { summary: '' },
        },
    },
    titleSlot: {
        name: 'title',
        description: 'Slot wordt gebruikt om de tekst van de titel te bepalen.',
        table: {
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: undefined },
        },
    },
    subTitleSlot: {
        name: 'sub-title',
        description: 'Slot wordt gebruikt om de tekst van de sub titel te bepalen.',
        table: {
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: undefined },
        },
    },
    backLinkSlot: {
        name: 'back-link',
        description:
            'Defines the complete back link section that is displayed in the default sub header (section below the horizontal line)',
        table: {
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: undefined },
        },
    },
    backSlot: {
        name: 'back',
        description: 'Slot wordt gebruikt om de terug link tekst te bepalen.',
        table: {
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: undefined },
        },
    },
    actionsSlot: {
        name: 'actions',
        description:
            'Defines what is displayed in the actions section in the top-left corner (right below the top-right slot) of the functional-header',
        table: {
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: undefined },
        },
    },
    topLeftSlot: {
        name: 'top-left',
        description: 'Defines what is displayed in the top-left corner of the functional-header',
        table: {
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: undefined },
        },
    },
    topRightSlot: {
        name: 'top-right',
        description: 'Defines what is displayed in the top-right corner of the functional-header',
        table: {
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: undefined },
        },
    },
    subHeaderSlot: {
        name: 'sub-header',
        description:
            'Defines what is displayed in the sub-header (section below the horizontal line). If this slot is defines, the sub-title slot and the data-vl-sub-title, data-vl-link, data-vl-back-link attributes are ignored.',
        table: {
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: undefined },
        },
    },
};

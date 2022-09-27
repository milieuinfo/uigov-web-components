export const ALERT_TYPE = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
};

export const ALERT_ICON = {
    WARNING: 'warning',
    CHECK: 'check',
    INFO_CIRCLE: 'info-circle',
};

export const ALERT_SIZE = {
    SMALL: 'small',
};

export const alertArgs = {
    title: 'Lorem ipsum',
    icon: ALERT_ICON.WARNING,
    size: '',
    type: '',
    closable: false,
    buttonSlotText: 'Button',
    titleSlotText: 'Title via slot',
    content:
        'Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.',
};

export const alertArgTypes = {
    title: {
        name: 'data-vl-title',
        type: { summary: 'String' },
        description: 'Attribuut wordt gebruikt om de titel te bepalen.',
        table: {
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    icon: {
        name: 'data-vl-icon',
        type: { summary: 'String' },
        description:
            'Attribuut wordt gebruikt om het icoon type te bepalen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.',
        control: {
            type: 'select',
            options: [ALERT_ICON.WARNING, ALERT_ICON.CHECK, ALERT_ICON.INFO_CIRCLE],
        },
        table: {
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    size: {
        name: 'data-vl-size',
        type: {
            summary: `${ALERT_SIZE.SMALL}`,
        },
        description: 'Attribuut activeert een variant van de waarschuwing maar kleiner.',
        control: {
            type: 'select',
            options: [ALERT_SIZE.SMALL],
        },
        table: {
            defaultValue: { summary: `` },
            category: 'Attributes',
        },
    },
    type: {
        name: 'data-vl-type',
        type: {
            summary: `${ALERT_TYPE.INFO} | ${ALERT_TYPE.SUCCESS} | ${ALERT_TYPE.WARNING} | ${ALERT_TYPE.ERROR}`,
        },
        description: 'Attribuut bepaalt de soort van waarschuwing, foutmelding, probleemmelding of succesmelding.',
        control: {
            type: 'select',
            options: [ALERT_TYPE.INFO, ALERT_TYPE.SUCCESS, ALERT_TYPE.WARNING, ALERT_TYPE.ERROR],
        },
        table: {
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    closable: {
        name: 'data-vl-closable',
        type: { summary: 'Boolean' },
        description:
            'Attribuut wordt gebruikt om de optie toe te voegen om de waarschuwing te sluiten door op het sluit icoon te klikken in de rechterbovenhoek.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    titleSlotText: {
        name: 'title',
        description: '',
        table: {
            category: 'Slots',
        },
        control: {
            disable: true,
        },
    },
    buttonSlotText: {
        name: 'actions',
        description: '',
        table: {
            category: 'Slots',
        },
        control: {
            disable: true,
        },
    },
    content: {
        name: 'content (for demo purposes)',
        description: '',
    },
};

import { ArgTypes } from '@storybook/web-components';
import { ALERT_ICON, ALERT_SIZE, ALERT_TYPE } from '../vl-alert.model';
import { VlAlertClosedEvent } from '../vl-alert-closed-event';
import { CATEGORIES, logStorybookEvent } from '@domg-wc/common-storybook';

export const alertArgs = {
    title: 'Lorem ipsum',
    icon: ALERT_ICON.WARNING,
    size: '',
    type: '',
    closable: false,
    alertClosed: logStorybookEvent(VlAlertClosedEvent.eventType),
    buttonSlotText: 'Button',
    titleSlotText: 'Title via slot',
    content:
        'Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.',
};

export const alertArgTypes: ArgTypes<typeof alertArgs> = {
    title: {
        name: 'data-vl-title',
        description: 'Attribuut wordt gebruikt om de titel te bepalen.',
        table: {
            type: { summary: 'String' },
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    icon: {
        name: 'data-vl-icon',
        description:
            'Attribuut wordt gebruikt om het icoon type te bepalen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.',
        control: {
            type: 'select',
            options: [ALERT_ICON.WARNING, ALERT_ICON.CHECK, ALERT_ICON.INFO_CIRCLE],
        },
        table: {
            type: { summary: 'String' },
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    size: {
        name: 'data-vl-size',
        description: 'Attribuut activeert een variant van de waarschuwing maar kleiner.',
        control: {
            type: 'select',
            options: [ALERT_SIZE.SMALL],
        },
        table: {
            type: { summary: `${ALERT_SIZE.SMALL}` },
            defaultValue: { summary: `` },
            category: 'Attributes',
        },
    },
    type: {
        name: 'data-vl-type',
        description: 'Attribuut bepaalt de soort van waarschuwing, foutmelding, probleemmelding of succesmelding.',
        control: {
            type: 'select',
            options: [ALERT_TYPE.INFO, ALERT_TYPE.SUCCESS, ALERT_TYPE.WARNING, ALERT_TYPE.ERROR],
        },
        table: {
            type: {
                summary: `${ALERT_TYPE.INFO} | ${ALERT_TYPE.SUCCESS} | ${ALERT_TYPE.WARNING} | ${ALERT_TYPE.ERROR}`,
            },
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    closable: {
        name: 'data-vl-closable',
        description:
            'Attribuut wordt gebruikt om de optie toe te voegen om de waarschuwing te sluiten door op het sluit icoon te klikken in de rechterbovenhoek.',
        table: {
            type: { summary: 'Boolean' },
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    alertClosed: {
        name: VlAlertClosedEvent.eventType,
        description: 'Afgevuurd wanneer de alert wordt gesloten.',
        table: {
            type: { summary: '-' },
            category: CATEGORIES.EVENTS,
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

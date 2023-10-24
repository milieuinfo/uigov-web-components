import { ArgTypes } from '@storybook/web-components';
import { VlAlertClosedEvent } from '../vl-alert.model';
import { ALERT_ICON, ALERT_SIZE, ALERT_TYPE } from '../vl-alert.model';
import { CATEGORIES, TYPES, logStorybookEvent } from '@domg-wc/common-storybook';

export const alertArgs = {
    closable: false,
    naked: false,
    title: '',
    icon: '',
    size: '',
    type: '',
    message: '',
    defaultSlot: '',
    titleSlot: '',
    actionsSlot: '',
    alertClosed: logStorybookEvent(VlAlertClosedEvent.eventType),
};

export const alertArgTypes: ArgTypes<typeof alertArgs> = {
    closable: {
        name: 'data-vl-closable',
        description: 'Sluitknop voor de waarschuwing',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: alertArgs.closable },
        },
    },
    naked: {
        name: 'data-vl-naked',
        description: 'Naked variant van de waarschuwing.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: alertArgs.naked },
        },
    },
    title: {
        name: 'data-vl-title',
        description:
            'Titel van de waarschuwing.<br>Bij de naked variant mag de titel alleen met dit attribuut meegegeven worden.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: alertArgs.title },
        },
    },
    icon: {
        name: 'data-vl-icon',
        description:
            'Icon van de waarschuwing.<br>Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.',
        control: {
            type: 'select',
            options: [ALERT_ICON.WARNING, ALERT_ICON.CHECK, ALERT_ICON.INFO_CIRCLE],
        },
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: alertArgs.icon },
        },
    },
    message: {
        name: 'data-vl-message',
        description:
            'De message van de waarschuwing.<br>Bij de naked variant mag de message alleen met dit attribuut meegegeven worden.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: alertArgs.message },
        },
    },
    size: {
        name: 'data-vl-size',
        description: 'Kleine variant van de waarschuwing.',
        control: {
            type: 'select',
            options: [ALERT_SIZE.SMALL],
        },
        table: {
            type: { summary: `${ALERT_SIZE.SMALL}` },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: alertArgs.size },
        },
    },
    type: {
        name: 'data-vl-type',
        description: 'Soort van de waarschuwing, foutmelding, probleemmelding of succesmelding.',
        control: {
            type: 'select',
            options: [ALERT_TYPE.INFO, ALERT_TYPE.SUCCESS, ALERT_TYPE.WARNING, ALERT_TYPE.ERROR],
        },
        table: {
            type: {
                summary: `${ALERT_TYPE.INFO} | ${ALERT_TYPE.SUCCESS} | ${ALERT_TYPE.WARNING} | ${ALERT_TYPE.ERROR}`,
            },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: alertArgs.type },
        },
    },
    titleSlot: {
        name: 'title',
        description: 'Element dat als titel van het alert getoond wordt.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: alertArgs.titleSlot },
        },
    },
    actionsSlot: {
        name: 'actions',
        description: 'Slot voor actieknoppen',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: alertArgs.actionsSlot },
        },
    },
    defaultSlot: {
        name: '[default]',
        description: 'Element dat als message van het alert getoond wordt.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: alertArgs.defaultSlot },
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
};

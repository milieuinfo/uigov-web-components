import { html } from 'lit-html';
import '../vl-alert.component';
import { ALERT_TYPE, ALERT_ICON } from '../vl-alert.model';
import { alertArgs, alertArgTypes } from './vl-alert.stories-arg';
import { Meta } from '@storybook/web-components';
import { storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'Components/alert',
    args: storyArgs(alertArgs),
    argTypes: storyArgTypes(alertArgTypes),
} as Meta<typeof alertArgs>;

const alertTemplate = ({ closable, icon, title, size, type, content }: typeof alertArgs) => html`
    <vl-alert
        ?data-vl-closable=${closable}
        data-vl-icon=${icon}
        data-vl-title=${title}
        data-vl-size=${size}
        data-vl-type=${type}
        data-cy="alert"
    >
        <p>${content}</p>
    </vl-alert>
`;

export const alertDefault = alertTemplate.bind({}) as any;
alertDefault.storyName = 'vl-alert - default';

export const alertError = alertTemplate.bind({}) as any;
alertError.storyName = 'vl-alert - error';
alertError.args = {
    title: 'Opgelet!',
    type: ALERT_TYPE.ERROR,
    icon: ALERT_ICON.WARNING,
    content: 'U heeft geen rechten om deze actie uit te voeren.',
};

export const alertInfo = alertTemplate.bind({}) as any;
alertInfo.storyName = 'vl-alert - info';
alertInfo.args = {
    title: 'Info',
    type: ALERT_TYPE.INFO,
    icon: ALERT_ICON.INFO_CIRCLE,
    content:
        'Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.',
};

export const alertSuccess = alertTemplate.bind({}) as any;
alertSuccess.storyName = 'vl-alert - success';
alertSuccess.args = {
    title: 'Gelukt!',
    type: ALERT_TYPE.SUCCESS,
    icon: ALERT_ICON.CHECK,
    content: 'We hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.',
};

export const alertWarning = alertTemplate.bind({}) as any;
alertWarning.storyName = 'vl-alert - warning';
alertWarning.args = {
    title: 'Technische storing',
    type: ALERT_TYPE.WARNING,
    icon: ALERT_ICON.WARNING,
    content: 'Door een technische storing is dit loket tijdelijk niet beschikbaar.',
};

export const alertWithButton = ({
    closable,
    icon,
    title,
    size,
    type,
    buttonSlotText,
    content,
}: typeof alertArgs) => html`
    <vl-alert
        ?data-vl-closable=${closable}
        data-vl-icon=${icon}
        data-vl-title=${title}
        data-vl-size=${size}
        data-vl-type=${type}
        data-cy="alert"
    >
        <p>${content}</p>
        <button slot="actions" is="vl-button">${buttonSlotText}</button>
    </vl-alert>
`;
alertWithButton.storyName = 'vl-alert - with button';
alertWithButton.argTypes = {
    buttonSlotText: {
        control: {
            disable: false,
        },
    },
};

export const alertWithTitleSlot = ({ closable, icon, size, type, titleSlotText, content }: typeof alertArgs) => html`
    <vl-alert
        ?data-vl-closable=${closable}
        data-vl-icon=${icon}
        data-vl-size=${size}
        data-vl-type=${type}
        data-cy="alert"
    >
        <span slot="title">${titleSlotText}</span>
        <p>${content}</p>
    </vl-alert>
`;
alertWithTitleSlot.storyName = 'vl-alert - with title slot';
alertWithTitleSlot.argTypes = {
    titleSlotText: {
        control: {
            disable: false,
        },
    },
};

export const alertCloseable = ({ icon, title, size, type, alertClosed, content }: typeof alertArgs) => html`
    <vl-alert
        data-vl-icon=${icon}
        data-vl-title=${title}
        data-vl-size=${size}
        data-vl-type=${type}
        data-vl-closable
        @vl-alert-closed="${alertClosed}"
        data-cy="alert"
    >
        <p>${content}</p>
    </vl-alert>
`;
alertCloseable.storyName = 'vl-alert - closeable';
alertCloseable.argTypes = {};

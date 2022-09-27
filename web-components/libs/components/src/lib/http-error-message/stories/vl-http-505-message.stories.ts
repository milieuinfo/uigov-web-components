import { html } from 'lit-html';
import '../vl-http-505-message.component';

export default {
    title: 'components/http-error-message',
};

export const http505MessageDefault = () => html` <vl-http-505-message></vl-http-505-message>`;
http505MessageDefault.storyName = 'vl-http-505-message - default';

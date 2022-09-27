import { html } from 'lit-html';
import '../vl-http-401-message.component';

export default {
    title: 'components/http-error-message',
};

export const http401MessageDefault = () => html` <vl-http-401-message></vl-http-401-message>`;
http401MessageDefault.storyName = 'vl-http-401-message - default';

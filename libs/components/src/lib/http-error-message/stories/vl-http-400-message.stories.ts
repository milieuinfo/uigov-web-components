import { html } from 'lit-html';
import '../vl-http-400-message.component';

export default {
    title: 'components/http-error-message',
};

export const http400MessageDefault = () => html` <vl-http-400-message></vl-http-400-message>`;
http400MessageDefault.storyName = 'vl-http-400-message - default';

import { html } from 'lit-html';
import '../vl-http-408-message.component';

export default {
    title: 'components/http-error-message',
};

export const http408MessageDefault = () => html` <vl-http-408-message></vl-http-408-message>`;
http408MessageDefault.storyName = 'vl-http-408-message - default';

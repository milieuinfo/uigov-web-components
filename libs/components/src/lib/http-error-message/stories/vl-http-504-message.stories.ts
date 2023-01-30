import { html } from 'lit-html';
import '../vl-http-504-message.component';

export default {
    title: 'components/http-error-message',
};

export const http504MessageDefault = () => html` <vl-http-504-message></vl-http-504-message>`;
http504MessageDefault.storyName = 'vl-http-504-message - default';

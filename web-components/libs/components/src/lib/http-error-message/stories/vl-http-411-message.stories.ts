import { html } from 'lit-html';
import '../vl-http-411-message.component';

export default {
    title: 'components/http-error-message',
};

export const http411MessageDefault = () => html` <vl-http-411-message></vl-http-411-message>`;
http411MessageDefault.storyName = 'vl-http-411-message - default';

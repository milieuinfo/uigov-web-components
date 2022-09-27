import { html } from 'lit-html';
import '../vl-http-413-message.component';

export default {
    title: 'components/http-error-message',
};

export const http413MessageDefault = () => html` <vl-http-413-message></vl-http-413-message>`;
http413MessageDefault.storyName = 'vl-http-413-message - default';

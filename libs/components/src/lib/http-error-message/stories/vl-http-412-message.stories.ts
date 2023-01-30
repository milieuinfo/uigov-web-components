import { html } from 'lit-html';
import '../vl-http-412-message.component';

export default {
    title: 'components/http-error-message',
};

export const http412MessageDefault = () => html` <vl-http-412-message></vl-http-412-message>`;
http412MessageDefault.storyName = 'vl-http-412-message - default';

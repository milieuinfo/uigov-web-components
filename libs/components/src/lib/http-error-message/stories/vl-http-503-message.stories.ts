import { html } from 'lit-html';
import '../vl-http-503-message.component';

export default {
    title: 'components/http-error-message',
};

export const http503MessageDefault = () => html` <vl-http-503-message></vl-http-503-message>`;
http503MessageDefault.storyName = 'vl-http-503-message - default';

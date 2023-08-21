import { html } from 'lit-html';
import '../vl-http-403-message.component';

export default {
    title: 'components/http-error-message',
};

export const http403MessageDefault = () => html` <vl-http-403-message></vl-http-403-message>`;
http403MessageDefault.storyName = 'vl-http-403-message - default';

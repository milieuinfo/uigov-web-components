import { html } from 'lit-html';
import '../vl-http-404-message.component';

export default {
    title: 'components/http-error-message',
};

export const http404MessageDefault = () => html` <vl-http-404-message></vl-http-404-message>`;
http404MessageDefault.storyName = 'vl-http-404-message - default';

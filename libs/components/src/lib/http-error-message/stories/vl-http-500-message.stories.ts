import { html } from 'lit-html';
import '../vl-http-500-message.component';

export default {
    title: 'components/http-error-message',
};

export const http500MessageDefault = () => html` <vl-http-500-message></vl-http-500-message>`;
http500MessageDefault.storyName = 'vl-http-500-message - default';

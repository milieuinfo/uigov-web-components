import { html } from 'lit-html';
import '../vl-http-502-message.component';

export default {
    title: 'components/http-error-message',
};

export const http502MessageDefault = () => html` <vl-http-502-message></vl-http-502-message>`;
http502MessageDefault.storyName = 'vl-http-502-message - default';

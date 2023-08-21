import { html } from 'lit-html';
import '../vl-http-415-message.component';

export default {
    title: 'components/http-error-message',
};

export const http415MessageDefault = () => html` <vl-http-415-message></vl-http-415-message>`;
http415MessageDefault.storyName = 'vl-http-415-message - default';

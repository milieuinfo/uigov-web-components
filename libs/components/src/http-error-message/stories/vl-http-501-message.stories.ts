import { html } from 'lit-html';
import '../vl-http-501-message.component';

export default {
    title: 'components/http-error-message',
};

export const http501MessageDefault = () => html` <vl-http-501-message></vl-http-501-message>`;
http501MessageDefault.storyName = 'vl-http-501-message - default';

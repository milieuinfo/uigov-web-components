import { html } from 'lit-html';
import '../vl-http-410-message.component';

export default {
    title: 'components/http-error-message',
};

export const http410MessageDefault = () => html` <vl-http-410-message></vl-http-410-message>`;
http410MessageDefault.storyName = 'vl-http-410-message - default';

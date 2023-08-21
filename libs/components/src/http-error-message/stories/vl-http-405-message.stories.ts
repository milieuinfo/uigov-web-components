import { html } from 'lit-html';
import '../vl-http-405-message.component';

export default {
    title: 'components/http-error-message',
};

export const http405MessageDefault = () => html` <vl-http-405-message></vl-http-405-message>`;
http405MessageDefault.storyName = 'vl-http-405-message - default';

import { html } from 'lit-html';
import '../vl-upload.component';

// TODO: Add better stories with controls.

export default {
    title: 'Components/upload',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const uploadDefault = () => html`
    <vl-upload url="http://httpbin.org/post" data-vl-input-name="files" id="vl-upload"></vl-upload>
`;
uploadDefault.storyName = 'vl-upload - default';

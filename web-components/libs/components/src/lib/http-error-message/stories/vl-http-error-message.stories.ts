import { html } from 'lit-html';
import '../vl-http-error-message.component';
import { httpErrorMessageArgs, httpErrorMessageArgTypes } from './vl-http-error-message.stories-arg';

export default {
    title: 'components/http-error-message',
    args: httpErrorMessageArgs,
    argTypes: httpErrorMessageArgTypes,
};

export const httpErrorMessageDefault = ({
    title,
    image,
    alt,
    textSlotText,
    actionsSlotText,
}: typeof httpErrorMessageArgs) => html`
    <vl-http-error-message data-vl-title=${title} data-vl-image=${image} data-vl-image-alt=${alt}>
        <p slot="text">${textSlotText}</p>
        <div slot="actions">
            <a is="vl-link-button" href="#">${actionsSlotText}</a>
        </div>
    </vl-http-error-message>
`;
httpErrorMessageDefault.storyName = 'vl-http-error-message - default';

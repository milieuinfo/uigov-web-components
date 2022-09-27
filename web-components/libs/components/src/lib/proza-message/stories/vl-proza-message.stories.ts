import { html } from 'lit-html';
import { VlProzaMessage } from '../vl-proza-message.component';
import { prozaMessageMockData } from './vl-proza-message.stories-data';

export default {
    title: 'components/proza-message',
    parameters: {
        controls: { hideNoControlsWarning: true },
        mockData: prozaMessageMockData,
    },
};

export const prozaMessageNonEditable = () => {
    delete VlProzaMessage.__cache;
    return html` <div is="vl-grid" data-vl-is-stacked-small>
        <div is="vl-column" data-vl-size="12">
            <h6 is="vl-h6">Als een inline element:</h6>
            <vl-proza-message data-vl-domain="noneditable" data-vl-code="inline"></vl-proza-message>
        </div>
        <div is="vl-column" data-vl-size="12">
            <h6 is="vl-h6">Als een block element:</h6>
            <vl-proza-message data-vl-domain="noneditable" data-vl-code="block"></vl-proza-message>
        </div>
        <div is="vl-column" data-vl-size="12">
            <h6 is="vl-h6">In een knop:</h6>
            <button is="vl-button">
                <vl-proza-message data-vl-domain="noneditable" data-vl-code="action"></vl-proza-message>
            </button>
        </div>
        <div is="vl-column" data-vl-size="12">
            <h6 is="vl-h6">In een link:</h6>
            <a is="vl-link" href="#" target="_blank">
                <vl-proza-message data-vl-domain="noneditable" data-vl-code="action"></vl-proza-message>
            </a>
        </div>
    </div>`;
};
prozaMessageNonEditable.storyName = 'vl-proza-message - non editable';

export const prozaMessageEditable = () => {
    delete VlProzaMessage.__cache;
    return html` <div is="vl-grid" data-vl-is-stacked-small>
        <div is="vl-column" data-vl-size="12">
            <h6 is="vl-h6">Als een inline element:</h6>
            <vl-proza-message data-vl-domain="editable" data-vl-code="inline"></vl-proza-message>
        </div>
        <div is="vl-column" data-vl-size="12">
            <h6 is="vl-h6">Als een block element:</h6>
            <vl-proza-message data-vl-domain="editable" data-vl-code="block"></vl-proza-message>
        </div>
        <div is="vl-column" data-vl-size="12">
            <h6 is="vl-h6">In een knop:</h6>
            <button is="vl-button">
                <vl-proza-message data-vl-domain="editable" data-vl-code="action"></vl-proza-message>
            </button>
            <button is="vl-button" data-vl-secondary>
                <vl-proza-message data-vl-domain="editable" data-vl-code="action"></vl-proza-message>
            </button>
            <button is="vl-button" data-vl-tertiary>
                <vl-proza-message data-vl-domain="editable" data-vl-code="action"></vl-proza-message>
            </button>
        </div>
        <div is="vl-column" data-vl-size="12">
            <h6 is="vl-h6">In een link:</h6>
            <a is="vl-link" href="#" target="_blank">
                <vl-proza-message data-vl-domain="editable" data-vl-code="action"></vl-proza-message>
            </a>
        </div>
    </div>`;
};
prozaMessageEditable.storyName = 'vl-proza-message - editable';

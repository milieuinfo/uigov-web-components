import { html } from 'lit-html';
import { VlProzaMessage } from '../vl-proza-message.component';
import { prozaMessageMockDomainData, prozaMessageMockDomainEditableData } from './vl-proza-message.stories-data';
import { prozaMessageArgTypes, prozaMessageArgs } from './vl-proza-message.stories-arg';
import { Meta } from '@storybook/web-components';
import prozaMessageDoc from './vl-proza-message.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'components/proza-message',
    tags: ['autodocs'],
    args: storyArgs(prozaMessageArgs),
    argTypes: storyArgTypes(prozaMessageArgTypes),
    parameters: {
        docs: {
            page: prozaMessageDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
        mockData: [...prozaMessageMockDomainData, ...prozaMessageMockDomainEditableData],
    },
} as Meta<typeof prozaMessageArgs>;

export const ProzaMessageDefault = story(prozaMessageArgs, () => {
    delete VlProzaMessage.__cache;

    return html`
        <div is="vl-grid" data-vl-is-stacked-small>
            <div is="vl-column" data-vl-size="12">
                <h6 is="vl-h6">Als een inline element:</h6>
                <vl-proza-message data-vl-domain="mockdomain" data-vl-code="inline"></vl-proza-message>
            </div>
            <div is="vl-column" data-vl-size="12">
                <h6 is="vl-h6">Als een block element:</h6>
                <vl-proza-message data-vl-domain="mockdomain" data-vl-code="block"></vl-proza-message>
            </div>
            <div is="vl-column" data-vl-size="12">
                <h6 is="vl-h6">In een knop:</h6>
                <button is="vl-button">
                    <vl-proza-message data-vl-domain="mockdomain" data-vl-code="action"></vl-proza-message>
                </button>
            </div>
            <div is="vl-column" data-vl-size="12">
                <h6 is="vl-h6">In een link:</h6>
                <a is="vl-link" href="#" target="_blank">
                    <vl-proza-message data-vl-domain="mockdomain" data-vl-code="action"></vl-proza-message>
                </a>
            </div>
        </div>
    `;
});
ProzaMessageDefault.storyName = 'vl-proza-message - default';

export const ProzaMessageEditable = story(prozaMessageArgs, () => {
    delete VlProzaMessage.__cache;

    return html`
        <div is="vl-grid" data-vl-is-stacked-small>
            <div is="vl-column" data-vl-size="12">
                <h6 is="vl-h6">Als een inline element:</h6>
                <vl-proza-message data-vl-domain="mockdomaineditable" data-vl-code="inline"></vl-proza-message>
            </div>
            <div is="vl-column" data-vl-size="12">
                <h6 is="vl-h6">Als een block element:</h6>
                <vl-proza-message data-vl-domain="mockdomaineditable" data-vl-code="block"></vl-proza-message>
            </div>
            <div is="vl-column" data-vl-size="12">
                <h6 is="vl-h6">In een knop:</h6>
                <button is="vl-button">
                    <vl-proza-message data-vl-domain="mockdomaineditable" data-vl-code="action"></vl-proza-message>
                </button>
                <button is="vl-button" data-vl-secondary>
                    <vl-proza-message data-vl-domain="mockdomaineditable" data-vl-code="action"></vl-proza-message>
                </button>
                <button is="vl-button" data-vl-tertiary>
                    <vl-proza-message data-vl-domain="mockdomaineditable" data-vl-code="action"></vl-proza-message>
                </button>
            </div>
            <div is="vl-column" data-vl-size="12">
                <h6 is="vl-h6">In een link:</h6>
                <a is="vl-link" href="#" target="_blank">
                    <vl-proza-message data-vl-domain="mockdomaineditable" data-vl-code="action"></vl-proza-message>
                </a>
            </div>
        </div>
    `;
});
ProzaMessageEditable.storyName = 'vl-proza-message - editable';

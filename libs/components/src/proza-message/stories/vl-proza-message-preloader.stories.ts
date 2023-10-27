import { html } from 'lit-html';
import { VlProzaMessage } from '../vl-proza-message.component';
import { VlProzaMessagePreloader } from '../vl-proza-message-preloader.component';
import { prozaMessageMockDomainData } from './vl-proza-message.stories-data';
import { Meta } from '@storybook/web-components';
import { prozaMessagePreloaderArgTypes, prozaMessagePreloaderArgs } from './vl-proza-message-preloader.stories-arg';
import prozaMessagePreloaderDoc from './vl-proza-message-preloader.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'components/proza-message-preloader',
    tags: ['autodocs'],
    args: storyArgs(prozaMessagePreloaderArgs),
    argTypes: storyArgTypes(prozaMessagePreloaderArgTypes),
    parameters: {
        docs: {
            page: prozaMessagePreloaderDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
        mockData: prozaMessageMockDomainData,
    },
} as Meta<typeof prozaMessagePreloaderArgs>;

export const ProzaMessagePreloaderDefault = story(prozaMessagePreloaderArgs, () => {
    delete VlProzaMessage.__cache;
    delete VlProzaMessagePreloader.__cache;

    return html`
        <div>
            <vl-proza-message-preloader data-vl-domain="mockdomain"></vl-proza-message-preloader>
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
        </div>
    `;
});
ProzaMessagePreloaderDefault.storyName = 'vl-proza-message-preloader - default';

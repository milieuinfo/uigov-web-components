import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '../vl-privacy.section';
import { Meta } from '@storybook/web-components';
import privacyDoc from './vl-privacy.stories-doc.mdx';
import { privacyArgs, privacyArgTypes } from './vl-privacy.stories-arg';
import { story } from '@domg-wc/common-storybook';

export default {
    id: 'sections-privacy',
    title: 'sections/privacy',
    tags: ['autodocs'],
    args: privacyArgs,
    argTypes: privacyArgTypes,
    parameters: {
        layout: 'fullscreen',
        docs: { page: privacyDoc },
    },
} as Meta<typeof privacyArgs>;

const Template = story(
    privacyArgs,
    ({ date, disableBackLink, version, onClickBack, headerSlot }) => html`
        <vl-privacy
            data-vl-date=${date}
            ?data-vl-disable-back-link=${disableBackLink}
            data-vl-version=${version}
            @vl-click-back=${onClickBack}
        >
            ${unsafeHTML(headerSlot)}
        </vl-privacy>
    `
);

export const PrivacyDefault = Template.bind({});
PrivacyDefault.storyName = 'vl-privacy - default';

export const PrivacyHeaderSlot = Template.bind({});
PrivacyHeaderSlot.storyName = 'vl-privacy - header slot';
PrivacyHeaderSlot.args = {
    headerSlot: `
    <vl-functional-header
        slot="header"
        data-vl-title="Departement Omgeving"
        data-vl-sub-title="Privacy"
        data-vl-link="https://omgeving.vlaanderen.be"
        data-vl-back="Start"
    ></vl-functional-header>
`,
};

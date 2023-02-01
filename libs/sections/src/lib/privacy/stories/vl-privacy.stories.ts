import { html, nothing } from 'lit-html';
import '../vl-privacy.section';
import { Meta, StoryFn } from '@storybook/web-components';
import privacyDoc from './vl-privacy.stories-doc.mdx';
import { privacyArgs, privacyArgTypes } from './vl-privacy.stories-arg';

export default {
    title: 'sections/privacy',
    args: privacyArgs,
    argTypes: privacyArgTypes,
    parameters: {
        layout: 'fullscreen',
        docs: { page: privacyDoc },
    },
} as Meta<typeof privacyArgs>;

const Template: StoryFn<typeof privacyArgs> = ({ date, disableBackLink, version, onClickBack }) => html`
    <vl-privacy
        data-vl-date=${date || nothing}
        ?data-vl-disable-back-link=${disableBackLink}
        data-vl-version=${version || nothing}
        @vl-click-back=${onClickBack}
    ></vl-privacy>
`;

export const PrivacyDefault = Template.bind({});
PrivacyDefault.storyName = 'vl-privacy - default';

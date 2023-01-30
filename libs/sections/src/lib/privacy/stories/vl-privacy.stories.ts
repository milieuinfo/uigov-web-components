import { html } from 'lit-html';
import '../vl-privacy.section';
import { privacyArgs, privacyArgTypes } from './vl-privacy.stories-arg';

export default {
    title: 'sections/privacy',
    args: privacyArgs,
    argTypes: privacyArgTypes,
};

export const privcyDefault = ({ version, date }: typeof privacyArgs) => {
    return html` <vl-privacy data-cy="privacy" data-vl-version=${version} data-vl-date=${date}></vl-privacy>`;
};
privcyDefault.storyName = 'vl-privacy - default';

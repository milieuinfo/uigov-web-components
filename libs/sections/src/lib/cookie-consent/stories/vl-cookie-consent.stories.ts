import { html } from 'lit-html';
import { StoryFn } from '@storybook/web-components';
import { setDefaultArgsToNothing } from '@domg-wc/common-utilities';
import '../vl-cookie-consent.section';
import { cookieConsentArgs, cookieConsentArgTypes } from './vl-cookie-consent.stories-arg';
import cookieConsentDoc from './vl-cookie-consent.stories-doc.mdx';

export default {
    title: 'sections/cookie-consent',
    args: cookieConsentArgs,
    argTypes: cookieConsentArgTypes,
    parameters: {
        layout: 'fullscreen',
        docs: { page: cookieConsentDoc },
    },
};

export const cookieConsentDefault: StoryFn<typeof cookieConsentArgs> = (args: typeof cookieConsentArgs) => {
    const { analytics, autoOptInFunctionalDisabled, owner, link, matomoId, matomoUrl } = setDefaultArgsToNothing(
        args,
        cookieConsentArgs
    );
    return html`
        <div>
            <vl-cookie-consent
                data-cy="cookie-consent"
                id="cookie-consent"
                data-vl-analytics=${analytics}
                data-vl-matomo-id=${matomoId}
                data-vl-matomo-url=${matomoUrl}
                data-vl-auto-open-disabled=""
                ?data-vl-auto-opt-in-functional-disabled=${autoOptInFunctionalDisabled}
                data-vl-owner=${owner}
                data-vl-link=${link}
            ></vl-cookie-consent>
            <button
                data-cy="button-open-cookie-consent"
                id="button-open-cookie-consent"
                is="vl-button"
                onClick="document.querySelector('#cookie-consent').open();"
            >
                Open cookie-consent
            </button>
        </div>
    `;
};
cookieConsentDefault.storyName = 'vl-cookie-consent - default';

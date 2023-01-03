import { ifDefinedString } from '@domg-wc/common-utilities';
import { html } from 'lit-html';
import '../vl-cookie-consent.section';
import { cookieConsentArgs, cookieConsentArgTypes } from './vl-cookie-consent.stories-arg';

export default {
    title: 'sections/cookie-consent',
    args: cookieConsentArgs,
    argTypes: cookieConsentArgTypes,
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const cookieConsentDefault = ({
                                         analytics,
                                         autoOptInFunctionalDisabled,
                                         owner,
                                         link,
                                     }: typeof cookieConsentArgs) => {
    return html` <vl-cookie-consent
            data-cy="cookie-consent"
            id="cookie-consent"
            ?data-vl-analytics=${analytics}
            data-vl-auto-open-disabled=""
            ?data-vl-auto-opt-in-functional-disabled=${autoOptInFunctionalDisabled}
            data-vl-owner=${ifDefinedString(owner)}
            data-vl-link=${ifDefinedString(link)}
        ></vl-cookie-consent>
        <button
            data-cy="button-open-cookie-consent"
            id="button-open-cookie-consent"
            is="vl-button"
            onClick="document.querySelector('#cookie-consent').open();"
        >
            Open cookie-consent
        </button>`;
};
cookieConsentDefault.storyName = 'vl-cookie-consent - default';

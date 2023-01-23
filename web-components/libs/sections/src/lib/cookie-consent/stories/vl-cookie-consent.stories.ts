import { html } from 'lit-html';
import '../vl-cookie-consent.section';

export default {
    title: 'sections/cookie-consent',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const cookieConsentDefault = () => {
    return html` <div>
        <vl-cookie-consent
            data-cy="cookie-consent"
            id="cookie-consent"
            data-vl-auto-open-disabled=""
        ></vl-cookie-consent>
        <button
            data-cy="button-open-cookie-consent"
            id="button-open-cookie-consent"
            is="vl-button"
            onClick="document.querySelector('#cookie-consent').open();"
        >
            Open cookie-consent
        </button>
    </div>`;
};
cookieConsentDefault.storyName = 'vl-cookie-consent - default';

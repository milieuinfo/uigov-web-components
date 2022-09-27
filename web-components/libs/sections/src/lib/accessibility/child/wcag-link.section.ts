import { html } from 'lit';

export const wcagLink = () => html`<a is="vl-link" href="https://www.w3.org/TR/WCAG21" target="_blank" data-vl-inline>
    Web Content Accessibility Guidelines versie 2.1 niveau AA<span
        is="vl-icon"
        data-vl-icon="external"
        data-vl-after
        data-vl-light
    ></span
></a>`;

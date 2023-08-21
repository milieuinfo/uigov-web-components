import { css, CSSResult } from 'lit';
import { vlElementsStyle } from '@domg-wc/elements';

const styles: CSSResult = css`
    :host {
        display: inline-block;
        position: relative;
    }

    .vl-proza-message--updatable:hover {
        box-shadow: 0 0 0 1px #e8ebee;
    }

    .vl-proza-message--updatable {
        display: inline-flex;
        align-items: center;
    }
    .vl-proza-message--updatable > *:not(:last-child) {
        padding-right: 0.5em;
    }
    .vl-proza-message--updatable #actions {
        display: inline-flex;
        align-items: center;
    }
    .vl-proza-message--updatable #actions > *:not(:last-child) {
        margin-right: 0.3em;
    }

    :host(.vl-proza-message__block) .vl-proza-message--updatable {
        align-items: end;
    }

    [is='vl-button'] {
        cursor: pointer !important;
        height: 1.5em !important;
        width: 1.5em !important;
        background-color: #e8ebee !important;
    }
    [is='vl-button']:hover {
        background-color: #cbd2da !important;
    }
    [is='vl-button'] [is='vl-icon'] {
        color: #000;
    }
    [is='vl-button'] [is='vl-icon']:hover {
        mix-blend-mode: hard-light;
    }

    [is='vl-icon'] {
        font: icon !important;
        vertical-align: middle !important;
    }
`;
export default [...vlElementsStyle, styles] as CSSResult[];

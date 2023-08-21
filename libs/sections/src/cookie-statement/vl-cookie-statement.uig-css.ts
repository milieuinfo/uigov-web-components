import { css, CSSResult } from 'lit';
import { vlElementsStyle } from '@domg-wc/elements';

const styles: CSSResult = css`
    :host {
        display: block;
    }

    vl-header-cookie,
    vl-header-authentication-cookie,
    vl-authentication-cookie,
    vl-jsessionid-cookie,
    vl-sticky-session-cookie,
    ::slotted(vl-cookie:not(:last-of-type)) {
        margin-bottom: 1.8rem;
    }
`;
export default [...vlElementsStyle, styles] as CSSResult[];

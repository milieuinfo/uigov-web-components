import { css, CSSResult } from 'lit';

// extra styling for the action-group in the current setup of the legacy vl-modal component
const styles: CSSResult = css`
    .vl-action-group > ::slotted(*) {
        margin-right: 1.4rem;
    }

    slot[name='button']:only-child::slotted(*:last-child) {
        margin-right: 0;
    }
`;
export default styles;

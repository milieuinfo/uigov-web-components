import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    :host {
        position: absolute;
        width: max-content;
        top: 0;
        left: 0;
    }

    i#popover-arrow {
        position: absolute;
        display: block;
        width: 10px;
        height: 10px;
        background-color: #fff;
        z-index: -1;
        pointer-events: none;
        transform: rotate(45deg);
    }

    .popover-content {
        filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 0px 2.1rem) drop-shadow(rgb(207, 213, 221) -1px -1px 1px)
            drop-shadow(rgb(207, 213, 221) 1px 1px 1px);
        background-color: #fff;
        padding: 2rem;
    }
`;
export default styles;

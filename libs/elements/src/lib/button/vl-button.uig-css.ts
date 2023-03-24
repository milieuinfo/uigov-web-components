import { css, CSSResult } from 'lit';

// the background of a tertiary button is transparent by default, when a toggle button is
// floating over the map it needs a background
const styles: CSSResult = css`
    .vl-button--map.vl-button--tertiary {
        background-color: #fff;
    }
    .vl-button--map.vl-button--tertiary:hover,
    .vl-button--map.vl-button--tertiary:active {
        background-color: #fff;
    }
`;
export default styles;

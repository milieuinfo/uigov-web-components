import { CSSResult, css } from 'lit';

const styles: CSSResult = css`
    .vl-u-visually-hidden {
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
        margin: -1px;
        padding: 0;
        border: 0;
        left: 0;
        top: 0;
    }
    @media screen and (min-width: 1023px) {
        .vl-u-visually-hidden--l {
            position: absolute !important;
            height: 1px;
            width: 1px;
            overflow: hidden;
            clip: rect(1px, 1px, 1px, 1px);
            margin: -1px;
            padding: 0;
            border: 0;
            left: 0;
            top: 0;
        }
    }
    @media screen and (max-width: 1023px) {
        .vl-u-visually-hidden--m {
            position: absolute !important;
            height: 1px;
            width: 1px;
            overflow: hidden;
            clip: rect(1px, 1px, 1px, 1px);
            margin: -1px;
            padding: 0;
            border: 0;
            left: 0;
            top: 0;
        }
    }
    @media screen and (max-width: 767px) {
        .vl-u-visually-hidden--s {
            position: absolute !important;
            height: 1px;
            width: 1px;
            overflow: hidden;
            clip: rect(1px, 1px, 1px, 1px);
            margin: -1px;
            padding: 0;
            border: 0;
            left: 0;
            top: 0;
        }
    }
    @media screen and (max-width: 500px) {
        .vl-u-visually-hidden--xs {
            position: absolute !important;
            height: 1px;
            width: 1px;
            overflow: hidden;
            clip: rect(1px, 1px, 1px, 1px);
            margin: -1px;
            padding: 0;
            border: 0;
            left: 0;
            top: 0;
        }
    }
`;
export default styles;

import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    .container {
        padding: 50px;
    }

    .vl-button {
        border: 0.2rem solid #05c;
    }

    .vl-button:hover {
        border: 0.2rem solid #003bb0;
    }

    .vl-action-group__top {
        margin-bottom: 50px;
        border: 1px solid #ccc;
        padding: 10px;
    }

    .submitted-form {
        margin-top: 70px;
        border: 1px solid #ccc;
        padding: 20px;
    }

    .vl-properties__column {
        width: calc(33% - 1rem);
    }

    .vl-properties__label {
        flex: 0 0 30%;
    }

    .vl-properties__data {
        flex: 3 0 70%;
    }
`;
export default styles;

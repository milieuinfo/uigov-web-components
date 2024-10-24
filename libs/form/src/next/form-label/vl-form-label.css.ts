import { css } from 'lit';

export const formLabelStyles = css`
    .vl-form__label {
        font-size: 1.6rem;
        font-weight: var(--vl-label-font-weight);
        color: #4d4d4b;
        display: inline-block;
        line-height: 1;
        margin-right: 0.5rem;
        margin-bottom: 0.7rem;
    }

    @media screen and (max-width: 767px) {
        .vl-form__label {
            font-size: 1.6rem;
        }
    }

    .vl-form__label--block {
        display: block;
        margin-right: 0;
        margin-bottom: 0.7rem;
    }

    .vl-form__label--offset {
        margin-top: 1rem;
    }

    .vl-form__label--light {
        color: #687483;
    }

    .vl-form__label__message {
        font-weight: normal;
        color: #687483;
        font-size: 1.4rem;
        line-height: 2rem;
    }

    .vl-form__label--standalone {
        margin-bottom: 0;
    }
`;

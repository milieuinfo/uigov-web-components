import { CSSResult, css } from 'lit';

// ! Indien je een kleur aanpast, kijk dan even na of er andere kleuren op gebaseerd zijn die een alpha waarde toevoegen.

const styles: CSSResult = css`
    :root {
        --vl-white: #ffffff;
        --vl-background-color: var(--vl-white);

        --vl-text-color: #333332;

        --vl-action-color: #0055cc;
        --vl-action-color--hover: #003bb0;
        --vl-action-color--active: #004099;
        --vl-action-color--visited: #660599;

        --vl-error-color: #d2373c;
        --vl-error-color--hover: #aa2729;

        --vl-focus-color: #0055cca6; /* --vl-action-color 65% opacity */
    }
`;

export default styles;

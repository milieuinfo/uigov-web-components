import { CSSResult, css } from 'lit';

// ! Indien je een kleur aanpast, kijk dan even na of er andere kleuren op gebaseerd zijn die een alpha waarde toevoegen.

const styles: CSSResult = css`
    :root {
        --vl-white: #ffffff;
        --vl-mine-shaft: #333332;

        --vl-background-color: var(--vl-white);
        --vl-map-background-color: #ffffff;
        --vl-background-alt-color: #f7f9fc;
        --vl-accent-color: #ffe615;

        --vl-text-color: #333332; // DV: $vl-text-color: $vl-mine-shaft !default;
        --vl-text-alt-color: #687483; // DV: $vl-alt-text-color
        --vl-light-text-color: #8695a8;

        --vl-border-color: #cbd2da;
        --vl-alt-border-color: #8695a8;
        --vl-doormat-graphic-border-color: #33333233;

        --vl-action-color: #0055cc;
        --vl-action-color--hover: #003bb0;
        --vl-action-color--active: #004099; /* --vl-action-color 10% darker */
        --vl-action-color--visited: #660599;
        --vl-action-color--disabled: #687483;
        --vl-action-background-color--disabled: #cbd2d9;

        --vl-action-tertiary-color: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-color--hover: var(--vl-action-color); /* --vl-action-color */
        --vl-action-tertiary-border-color: #c6cdd3;
        --vl-action-tertiary-border-color--hover: #5990de;

        --vl-error-color: #d2373c; /* DV: $vl-error-color: $vl-faded-red */
        --vl-error-text-color: #d2373c; /* DV: $vl-error-color: $vl-faded-red */
        --vl-error-color--hover: #aa2729; /* DV: $vl-error-hover-color: $vl-valencia-red */

        --vl-success-color: #009e47; /* DV: $vl-success-color: $vl-chateau-green */
        --vl-success-text-color: #007a37; /* DV: $vl-success-color: $vl-ocean-green */
        --vl-success-color--hover: #009e47; /* DV: $vl-success-hover-color: $vl-chateau-green */

        --vl-warning-color: #ffa10a; /* DV: $vl-warning-color: $vl-orange-peel */
        --vl-warning-text-color: #9f5804; /* DV: $vl-warning-text-color: $vl-mango-tango */
        --vl-warning-color--hover: color-mix(
            in srgb,
            black 20%,
            #ffa10a
        ); /* DV: $vl-warning-hover-color: darken($vl-warning-color, 5%) */

        --vl-focus-color: #0055cca6; /* --vl-action-color 65% opacity */

        --vl-label-color: #687483;
    }
`;

export default styles;

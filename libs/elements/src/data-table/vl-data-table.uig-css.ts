import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    .vl-data-table--uig-zebra
        tbody
        tr:not(.vl-data-table__element--warning):not(.vl-data-table__element--error):not(
            .vl-data-table__element--success
        ).odd {
        background-color: #f3f5f6;
    }
    .vl-data-table--uig-zebra
        tbody
        tr:not(.vl-data-table__element--warning):not(.vl-data-table__element--error):not(
            .vl-data-table__element--success
        ).odd:hover {
        background-color: #edf0f2;
    }

    .vl-data-table tbody tr.vl-data-table__element--disabled,
    .vl-data-table tbody td.vl-data-table__element--disabled {
        background: #cbd2d9;
        color: var(--vl-theme-fg-color-70);
    }

    tr[data-details-id] {
        display: table-row;
    }

    @media screen and (max-width: 500px) {
        .vl-data-table--collapsed-m td,
        .vl-data-table--collapsed-s td,
        .vl-data-table--collapsed-xs td {
            padding-left: 1rem;
            padding-top: 3.6rem;
        }
        .vl-data-table--collapsed-m td::before,
        .vl-data-table--collapsed-s td::before,
        .vl-data-table--collapsed-xs td::before {
            width: 90%;
            padding-right: 0;
        }

        .vl-data-table--collapsed-xs tr[data-details-id] {
            display: block;
        }
    }
    @media screen and (max-width: 767px) {
        .vl-data-table--collapsed-s tr[data-details-id] {
            display: block;
        }
    }
    @media screen and (max-width: 1023px) {
        .vl-data-table--collapsed-m tr[data-details-id] {
            display: block;
        }
    }
`;
export default styles;

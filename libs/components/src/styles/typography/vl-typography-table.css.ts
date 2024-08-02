import { css, CSSResult } from 'lit';

// vl-typography.css.js - 183 to 296

const styles: CSSResult = css`
    .vl-typography-next table {
        width: 100%;
        max-width: 100%;
        margin-bottom: 2rem;
    }
    .vl-typography-next table thead tr {
        border-bottom: 3px #cbd2da solid;
    }
    .vl-typography-next table tbody tr {
        border-bottom: 1px #cbd2da solid;
    }
    .vl-typography-next table tbody tr[data-vl-table-selectable] {
        transition: background 0.2s ease-in-out;
        cursor: pointer;
    }
    .vl-typography-next table tbody tr[data-vl-table-selectable]:hover {
        background: #f3f5f6;
    }
    .vl-typography-next table tbody tr.vl-data-table__grouped-row:not(.vl-data-table__grouped-row--last) {
        border-bottom: 0;
    }
    .vl-typography-next table td,
    .vl-typography-next table th {
        text-align: left;
        font-size: 1.6rem;
        line-height: 1.3;
        vertical-align: top;
        padding: 1.2rem 1rem;
    }
    @media screen and (max-width: 767px) {
        .vl-typography-next table td,
        .vl-typography-next table th {
            padding: 1rem;
        }
    }
    @media screen and (max-width: 767px) {
        .vl-typography-next table td,
        .vl-typography-next table th {
            font-size: 1.4rem;
        }
    }
    .vl-typography-next table td:first-child,
    .vl-typography-next table th:first-child {
        border-left: 0;
    }
    .vl-typography-next table th {
        font-weight: 500;
    }
    .vl-typography-next table .vl-data-table__grouped-row td {
        padding: 0.3rem 1rem 0.3rem 0;
    }
    @media screen and (max-width: 767px) {
        .vl-typography-next table .vl-data-table__grouped-row td {
            padding: 0.3rem 1rem 0.3rem 0;
        }
    }
    .vl-typography-next table .vl-data-table__grouped-row--first td {
        padding-top: 1.2rem;
    }
    @media screen and (max-width: 767px) {
        .vl-typography-next table .vl-data-table__grouped-row--first td {
            padding-top: 1rem;
        }
    }
    .vl-typography-next table .vl-data-table__grouped-row--last td {
        padding-bottom: 1.2rem;
    }
    @media screen and (max-width: 767px) {
        .vl-typography-next table .vl-data-table__grouped-row--last td {
            padding-bottom: 1rem;
        }
    }
    .vl-typography-next table__header-title--sortable {
        text-decoration: none;
    }
    .vl-typography-next table__header-title--sortable .vl-data-table__header-title__sort-icon {
        opacity: 0;
    }
    .vl-typography-next table__header-title--sortable:hover,
    .vl-typography-next table__header-title--sortable:focus {
        text-decoration: underline;
    }
    .vl-typography-next table__header-title--sortable:hover .vl-data-table__header-title__sort-icon,
    .vl-typography-next table__header-title--sortable:focus .vl-data-table__header-title__sort-icon {
        opacity: 0.5;
    }
    .vl-typography-next table__header-title--sortable-active .vl-data-table__header-title__sort-icon {
        opacity: 1;
    }
    .vl-typography-next table__body-title {
        max-width: 30rem;
    }
    .vl-typography-next table--alt tr td:not(:first-child) {
        padding: 1.2rem;
    }
    .vl-typography-next table--alt tr th:not(:first-child) {
        padding: 0 1.2rem 1.2rem;
    }
    .vl-typography-next table--alt tr th:first-child,
    .vl-typography-next table--alt tr td:first-child {
        border-right: 1px #cbd2da solid;
    }
    .vl-typography-next table.vl-data-table--no-header tbody tr:first-child {
        border-top: 3px #cbd2da solid;
    }
    .vl-typography-next table .vl-pill {
        vertical-align: middle;
    }
    @media screen and (max-width: 767px) {
        .vl-typography-next table .vl-pill {
            height: 2rem;
            line-height: 2rem;
            padding: 0 0.5rem;
            font-size: 1.4rem;
        }
    }
`;
export default styles;

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
`;
export default styles;

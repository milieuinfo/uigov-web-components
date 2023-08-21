import { vlElementsStyle } from '@domg-wc/elements';
import { css, CSSResult } from 'lit';

const styles: CSSResult = css`
    th[data-vl-sortable] a {
        cursor: pointer;
    }
`;
export default [...vlElementsStyle, styles] as CSSResult[];

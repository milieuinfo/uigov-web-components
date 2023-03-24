import { css, CSSResult } from 'lit';

// fix voor UIG-2288: er worden in Chrome veel extra blanco pagina's toegevoegd tijdens het printen
const styles: CSSResult = css`
    @media print {
        [is='vl-side-navigation-reference'] .resize-sensor {
            display: none !important;
        }
    }
`;
export default styles;

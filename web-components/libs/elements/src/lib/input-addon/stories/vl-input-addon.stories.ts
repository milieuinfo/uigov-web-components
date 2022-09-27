import { html } from 'lit-html';
import '../vl-input-addon.element';
// import "../tooltip";
// import tooltipStyles from "../tooltip/styles.scss";

export default {
    title: 'Elements/input-addon',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const inputAddonDefault = () => html` <p is="vl-input-addon" data-cy="input-addon">€</p> `;
inputAddonDefault.storyName = 'vl-input-addon - default';

// TODO: dit kan niet hier, een tooltip zou een circulaire dependency creeren met de components
//  -> deze story zou dus bij tooltip kunnen gezet worden
// export const inputAddonWithTooltip = () => html`
//     <p is="vl-input-addon" data-cy="input-addon-with-tooltip">
//         €
//         <vl-tooltip placement="top">Euro</vl-tooltip>
//     </p>
// `;
// inputAddonWithTooltip.storyName = 'vl-input-addon - with tooltip';

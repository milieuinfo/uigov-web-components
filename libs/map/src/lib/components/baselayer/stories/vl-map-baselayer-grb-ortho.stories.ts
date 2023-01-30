import { baselayerArgs, baselayerArgTypes } from './vl-map-baselayer.stories-arg';
import { html } from 'lit-html';
import '../../../vl-map';
import '../vl-map-base-layer-grb-ortho';

export default {
    title: 'map/baselayer',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: baselayerArgs,
    argTypes: baselayerArgTypes,
};

export const baselayerGrbOrthoDefault = () => html`
    <vl-map>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
`;
baselayerGrbOrthoDefault.storyName = 'vl-map-baselayer-grb-ortho - default';

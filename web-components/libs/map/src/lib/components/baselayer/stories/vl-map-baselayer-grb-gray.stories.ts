import { baselayerArgs, baselayerArgTypes } from './vl-map-baselayer.stories-arg';
import { html } from 'lit-html';
import '../../../vl-map';
import '../vl-map-base-layer-grb-gray';

export default {
    title: 'map/baselayer',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: baselayerArgs,
    argTypes: baselayerArgTypes,
};

export const baselayerGrbGrayDefault = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    </vl-map>
`;
baselayerGrbGrayDefault.storyName = 'vl-map-baselayer-grb-gray - default';

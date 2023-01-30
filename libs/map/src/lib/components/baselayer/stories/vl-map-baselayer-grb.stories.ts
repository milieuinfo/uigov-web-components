import { baselayerArgs, baselayerArgTypes } from './vl-map-baselayer.stories-arg';
import { html } from 'lit-html';
import '../../../vl-map';
import '../vl-map-base-layer-grb';

export default {
    title: 'map/baselayer',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: baselayerArgs,
    argTypes: baselayerArgTypes,
};

export const baselayerGrbDefault = () => html`
    <vl-map>
        <vl-map-baselayer-grb></vl-map-baselayer-grb>
    </vl-map>
`;
baselayerGrbDefault.storyName = 'vl-map-baselayer-grb - default';

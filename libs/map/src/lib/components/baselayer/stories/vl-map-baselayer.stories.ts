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

export const baselayerGrbGrayDefault = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    </vl-map>
`;
baselayerGrbGrayDefault.storyName = 'vl-map-baselayer-grb-gray - default';

export const baselayerGrbOrthoDefault = () => html`
    <vl-map>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
`;
baselayerGrbOrthoDefault.storyName = 'vl-map-baselayer-grb-ortho - default';

export const baselayerGrbWithBackgroundLayer = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray data-vl-background-layer></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        <vl-map-overview-map></vl-map-overview-map>
    </vl-map>
`;
baselayerGrbWithBackgroundLayer.storyName = 'vl-map-baselayer-grb - with background layer';

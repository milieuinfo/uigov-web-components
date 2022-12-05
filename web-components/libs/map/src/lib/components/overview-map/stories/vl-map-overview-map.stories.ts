import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../../baselayer/vl-map-base-layer-grb';
import '../../baselayer/vl-map-base-layer-grb-ortho';
import '../vl-map-overview-map';

export default {
    title: 'map/overview-map',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const overviewMapDefault = () => html`
    <vl-map>
        <vl-map-overview-map></vl-map-overview-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
`;
overviewMapDefault.storyName = 'vl-map-overview-map - default';

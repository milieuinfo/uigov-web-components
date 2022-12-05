import { html } from 'lit-html';
import '../../../vl-map';
import '../vl-map-action-controls';
import '../vl-map-measure-control';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../../layer/vector-layer/vl-map-features-layer';
import '../../action/draw-action/vl-map-measure-action';

export default {
    title: 'map/controls',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const measureControlDefault = () => html`
    <vl-map>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
    </vl-map>
`;
measureControlDefault.storyName = 'vl-map-measure-control - default';

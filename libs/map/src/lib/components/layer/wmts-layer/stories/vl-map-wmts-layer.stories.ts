import { html } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-wmts-layer';
import { layerArgTypes } from '../../stories/vl-map-layer.stories-arg';

export default {
    title: 'map/layer/wmts-layer',
    argTypes: layerArgTypes,
};

export const wmtsLayerDefault = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-wmts-layer
            data-vl-url="https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts"
            data-vl-layer="grb_sel"
            data-vl-name="GRB Wegenkaart"
        >
        </vl-map-wmts-layer>
    </vl-map>
`;
wmtsLayerDefault.storyName = 'vl-map-wmts-layer - default';

import { mapActionArgs, mapActionArgTypes } from '../../stories/vl-map-action.stories-arg';
import { html } from 'lit';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer';
import '../../../layer/vector-layer/vl-map-wfs-layer';
import '../vl-map-draw-polygon-action';

export default {
    title: 'map/draw-actions',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: mapActionArgs,
    argTypes: mapActionArgTypes,
};

export const drawPolygonActionDefault = ({ active }) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-draw-polygon-action .active=${active}></vl-map-draw-polygon-action>
        </vl-map-features-layer>
    </vl-map>
`;
drawPolygonActionDefault.storyName = 'vl-map-draw-polygon-action - default';

export const drawPolygonActionWithDefaultActive = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-draw-polygon-action data-vl-default-active></vl-map-draw-polygon-action>
        </vl-map-features-layer>
    </vl-map>
`;
drawPolygonActionWithDefaultActive.storyName = 'vl-map-draw-polygon-action - with default active';
drawPolygonActionWithDefaultActive.argTypes = {
    active: {
        control: {
            disable: true,
        },
    },
};

export const drawPolygonActionWithSnapping = ({ active }) => html` <vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer>
        <vl-map-draw-polygon-action .active=${active} data-vl-snapping>
            <vl-map-wfs-layer
                data-vl-name="Stromend waterlichamen"
                data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                data-vl-layers="owl_l"
                data-vl-max-resolution="4"
            >
            </vl-map-wfs-layer>
        </vl-map-draw-polygon-action>
    </vl-map-features-layer>
</vl-map>`;
drawPolygonActionWithSnapping.storyName = 'vl-map-draw-polygon-action - with snapping';

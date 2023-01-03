import { ifDefinedNumber } from '@domg-wc/common-utilities';
import { html } from 'lit';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer';
import '../../../layer/vector-layer/vl-map-wfs-layer';
import '../vl-map-draw-line-action';
import { mapDrawActionActionArgs, mapDrawActionActionArgTypes } from './vl-map-draw-action.stories-arg';

export default {
    title: 'map/action/draw-action',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    argTypes: mapDrawActionActionArgTypes,
};

export const drawLineActionDefault = ({
    active,
    defaultActive,
    snapping,
    snappingPixelTolerance,
}: typeof mapDrawActionActionArgs) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-draw-line-action
                .active=${active}
                ?data-vl-default-active=${defaultActive}
                ?data-vl-snapping=${snapping}
                data-vl-snapping-pixel-tolerance=${ifDefinedNumber(snappingPixelTolerance)}
            >
                <vl-map-wfs-layer
                    data-vl-name="Stromend waterlichamen"
                    data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                    data-vl-layers="owl_l"
                    data-vl-max-resolution="4"
                >
                </vl-map-wfs-layer>
            </vl-map-draw-line-action>
        </vl-map-features-layer>
    </vl-map>
`;
drawLineActionDefault.storyName = 'vl-map-draw-line-action - default';
drawLineActionDefault.args = mapDrawActionActionArgs;

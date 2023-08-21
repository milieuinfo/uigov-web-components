import { html } from 'lit';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../../../layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import '../../../../layer-style/vl-map-layer-style';
import '../vl-map-draw-line-action';
import { mapDrawActionArgs, mapDrawActionArgTypes } from '../../stories/vl-map-draw-action.stories-arg';
import mapDrawActionDoc from './vl-map-draw-line-action.stories-doc.mdx';
import { Meta } from '@storybook/web-components';
import { story, storyArgs, storyArgTypes } from '@domg-wc/common-storybook';

export default {
    title: 'map/action/draw-action/draw-line-action',
    args: storyArgs(mapDrawActionArgs),
    argTypes: storyArgTypes(mapDrawActionArgTypes),
    parameters: {
        docs: {
            page: mapDrawActionDoc,
        },
    },
} as Meta<typeof mapDrawActionArgs>;

export const MapDrawLineActionDefault = story(
    mapDrawActionArgs,
    ({ active, defaultActive }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-line-action .active=${active} ?data-vl-default-active=${defaultActive}>
                </vl-map-draw-line-action>
                <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `
);
MapDrawLineActionDefault.storyName = 'vl-map-draw-line-action - default';
MapDrawLineActionDefault.args = {
    active: true,
};

export const MapDrawLineActionSnapping = story(
    mapDrawActionArgs,
    ({ active, defaultActive, snapping, snappingPixelTolerance }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-line-action
                    .active=${active}
                    ?data-vl-default-active=${defaultActive}
                    ?data-vl-snapping=${snapping}
                    data-vl-snapping-pixel-tolerance=${snappingPixelTolerance}
                >
                    <vl-map-wfs-layer
                        data-vl-name="Stromend waterlichamen"
                        data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                        data-vl-layers="owl_l"
                        data-vl-max-resolution="4"
                    >
                    </vl-map-wfs-layer>
                </vl-map-draw-line-action>
                <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `
);
MapDrawLineActionSnapping.storyName = 'vl-map-draw-line-action - snapping';
MapDrawLineActionSnapping.args = {
    active: true,
    snapping: true,
    snappingPixelTolerance: 1000,
};

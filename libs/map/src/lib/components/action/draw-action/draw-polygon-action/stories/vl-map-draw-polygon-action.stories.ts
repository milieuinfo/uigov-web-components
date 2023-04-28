import { html } from 'lit';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../../../layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import '../vl-map-draw-polygon-action';
import '../../../../layer-style/vl-map-layer-style';
import { mapDrawActionArgs, mapDrawActionArgTypes } from '../../stories/vl-map-draw-action.stories-arg';
import mapDrawPolygonDoc from './vl-map-draw-polygon-action.stories-doc.mdx';
import { Meta, StoryFn } from '@storybook/web-components';

export default {
    title: 'map/action/draw-action/draw-polygon-action',
    args: mapDrawActionArgs,
    argTypes: mapDrawActionArgTypes,
    parameters: {
        docs: {
            page: mapDrawPolygonDoc,
        },
    },
} as Meta<typeof mapDrawActionArgs>;

export const MapDrawPolygonActionDefault: StoryFn<typeof mapDrawActionArgs> = ({ active, defaultActive }) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-draw-polygon-action
                .active=${active}
                data-vl-default-active=${defaultActive}
            ></vl-map-draw-polygon-action>
            <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
        </vl-map-features-layer>
    </vl-map>
`;
MapDrawPolygonActionDefault.storyName = 'vl-map-draw-polygon-action - default';
MapDrawPolygonActionDefault.args = {
    ...mapDrawActionArgs,
    active: true,
};

export const MapDrawPolygonActionSnapping: StoryFn<typeof mapDrawActionArgs> = ({
    active,
    defaultActive,
    snapping,
    snappingPixelTolerance,
}) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-draw-polygon-action
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
            </vl-map-draw-polygon-action>
            <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
        </vl-map-features-layer>
    </vl-map>
`;
MapDrawPolygonActionSnapping.storyName = 'vl-map-draw-polygon-action - snapping';
MapDrawPolygonActionSnapping.args = {
    ...mapDrawActionArgs,
    active: true,
    snapping: true,
    snappingPixelTolerance: 1000,
};

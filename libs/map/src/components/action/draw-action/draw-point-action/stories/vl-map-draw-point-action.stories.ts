import { html } from 'lit';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../../../layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import '../vl-map-draw-point-action';
import '../../../../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import { mapDrawActionArgs, mapDrawActionArgTypes } from '../../stories/vl-map-draw-action.stories-arg';
import mapDrawPointActionDoc from './vl-map-draw-point-action.stories-doc.mdx';
import { Meta } from '@storybook/web-components';
import { story, storyArgs, storyArgTypes } from '@domg-wc/common-storybook';

export default {
    title: 'map/action/draw-action/draw-point-action',
    tags: ['autodocs'],
    args: storyArgs(mapDrawActionArgs),
    argTypes: storyArgTypes(mapDrawActionArgTypes),
    parameters: {
        docs: {
            page: mapDrawPointActionDoc,
        },
    },
} as Meta<typeof mapDrawActionArgs>;

export const MapDrawPointActionDefault = story(
    mapDrawActionArgs,
    ({ active, defaultActive }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-point-action
                    .active=${active}
                    data-vl-default-active=${defaultActive}
                ></vl-map-draw-point-action>
                <vl-map-layer-circle-style data-vl-border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `
);
MapDrawPointActionDefault.storyName = 'vl-map-draw-point-action - default';
MapDrawPointActionDefault.args = {
    active: true,
};

export const MapDrawPointActionSnapping = story(
    mapDrawActionArgs,
    ({ active, defaultActive, snapping, snappingPixelTolerance }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-point-action
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
                </vl-map-draw-point-action>
                <vl-map-layer-circle-style data-vl-border-size="2"></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `
);
MapDrawPointActionSnapping.storyName = 'vl-map-draw-point-action - snapping';
MapDrawPointActionSnapping.args = {
    active: true,
    snapping: true,
    snappingPixelTolerance: 1000,
};

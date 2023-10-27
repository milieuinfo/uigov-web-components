import { html } from 'lit';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../../controls/vl-map-action-controls';
import '../../../../controls/measure-control/vl-map-measure-control';
import '../../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../../../layer/vector-layer/vl-map-wfs-layer/vl-map-wfs-layer';
import '../vl-map-measure-action';
import '../../../../layer-style/vl-map-layer-style';
import { mapDrawActionArgs, mapDrawActionArgTypes } from '../../stories/vl-map-draw-action.stories-arg';
import mapMeasureActionDoc from './vl-map-measure-action.stories-doc.mdx';
import { Meta } from '@storybook/web-components';
import { story, storyArgs, storyArgTypes } from '@domg-wc/common-storybook';

export default {
    title: 'map/action/draw-action/measure-action',
    tags: ['autodocs'],
    args: storyArgs(mapDrawActionArgs),
    argTypes: storyArgTypes(mapDrawActionArgTypes),
    parameters: {
        docs: {
            page: mapMeasureActionDoc,
        },
    },
} as Meta<typeof mapDrawActionArgs>;

export const MapMeasureActionDefault = story(
    mapDrawActionArgs,
    ({ active, defaultActive }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-measure-action
                    .active=${active}
                    data-vl-default-active=${defaultActive}
                ></vl-map-measure-action>
                <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `
);
MapMeasureActionDefault.storyName = 'vl-map-measure-action - default';
MapMeasureActionDefault.args = {
    active: true,
};

export const MapMeasureActionSnapping = story(
    mapDrawActionArgs,
    ({ active, defaultActive, snapping, snappingPixelTolerance }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-measure-action
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
                </vl-map-measure-action>
                <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `
);
MapMeasureActionSnapping.storyName = 'vl-map-measure-action - snapping';
MapMeasureActionSnapping.args = {
    active: true,
    snapping: true,
    snappingPixelTolerance: 1000,
};

export const MapMeasureActionControl = story(
    mapDrawActionArgs,
    ({ active, defaultActive }) =>
        html`
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-action-controls>
                    <vl-map-measure-control></vl-map-measure-control>
                </vl-map-action-controls>
                <vl-map-features-layer>
                    <vl-map-measure-action
                        .active=${active}
                        data-vl-default-active=${defaultActive}
                    ></vl-map-measure-action>
                    <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
                </vl-map-features-layer>
            </vl-map>
        `
);
MapMeasureActionControl.storyName = 'vl-map-measure-action - control';
MapMeasureActionControl.args = {
    active: true,
};

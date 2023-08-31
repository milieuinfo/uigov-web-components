import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../action/draw-action/draw-polygon-action/vl-map-draw-polygon-action';
import '../../action/layer-action/delete-action/vl-map-delete-action';
import '../../action/layer-action/modify-action/vl-map-modify-action';
import '../vl-map-action-controls';
import { Meta } from '@storybook/web-components';
import mapActionControls from './vl-map-action-controls.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/controls/action-controls',
    args: storyArgs({}),
    argTypes: storyArgTypes({}),
    parameters: {
        docs: {
            page: mapActionControls,
        },
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta;

export const MapActionControlsDefault = story(
    {},
    () => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id="draw-action"></vl-map-draw-polygon-action>
                <vl-map-modify-action id="modify-action"></vl-map-modify-action>
                <vl-map-delete-action id="delete-action"></vl-map-delete-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control data-vl-action-id="draw-action" data-vl-label="Teken"></vl-map-action-control>
                <vl-map-action-control
                    data-vl-action-id="modify-action"
                    data-vl-label="Editeer"
                ></vl-map-action-control>
                <vl-map-action-control
                    data-vl-action-id="delete-action"
                    data-vl-label="Verwijder"
                ></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    `
);

MapActionControlsDefault.storyName = 'vl-map-action-controls - default';

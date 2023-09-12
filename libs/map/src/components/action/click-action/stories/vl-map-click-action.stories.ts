import { html } from 'lit';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../vl-map-click-action';
import { Meta } from '@storybook/web-components';
import { mapClickActionArg, mapClickActionArgTypes } from './vl-map-click-action.stories-arg';
import mapClickActionDoc from './vl-map-click-action.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/action/click-action',
    args: storyArgs(mapClickActionArg),
    argTypes: storyArgTypes(mapClickActionArgTypes),
    parameters: {
        controls: {
            hideNoControlsWarning: true,
        },
        docs: {
            page: mapClickActionDoc,
        },
    },
} as Meta<typeof mapClickActionArg>;

export const MapClickActionDefault = story(
    mapClickActionArg,
    ({ onMapClicked }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-click-action @vl-map-clicked=${onMapClicked}></vl-map-click-action>
        </vl-map>
    `
);
MapClickActionDefault.storyName = 'vl-map-click-action - default';

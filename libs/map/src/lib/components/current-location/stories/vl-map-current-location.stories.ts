import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-current-location';
import { currentLocationArgs, currentLocationArgTypes } from './vl-map-current-location.stories-arg';

export default {
    title: 'map/current-location',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: currentLocationArgs,
    argTypes: currentLocationArgTypes,
};

export const currentLocationDefault = ({ zoom, tooltip }) => html`
    <vl-map id="map" data-vl-zoomInTooltip="Zoom in" data-vl-zoomOutTooltip="Zoom uit">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-current-location data-vl-zoom="${zoom}" data-vl-tooltip="${tooltip}"></vl-map-current-location>
    </vl-map>
`;
currentLocationDefault.storyName = 'vl-map-current-location - default';

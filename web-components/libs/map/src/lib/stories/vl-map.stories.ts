import { mapArgs, mapArgTypes } from './vl-map.stories-arg';
import { html } from 'lit';
import '../vl-map';
import '../components/baselayer/vl-map-base-layer-grb-gray';

export default {
    title: 'map/map',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: mapArgs,
    argTypes: mapArgTypes,
};

const mapTemplate = ({
    allowFullscreen,
    disableEscape,
    disableRotation,
    disableMousewheelZoom,
}: typeof mapArgs) => html`
    <vl-map
        ?data-vl-allow-fullscreen=${allowFullscreen}
        ?data-vl-disable-escape-key=${disableEscape}
        ?data-vl-disable-rotation=${disableRotation}
        ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
        data-vl-zoomInTooltip="Zoom in"
        data-vl-zoomOutTooltip="Zoom uit"
    >
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    </vl-map>
`;

export const mapDefault = mapTemplate.bind({});
mapDefault.storyName = 'vl-map - default';

export const mapAllowFullscreen = mapTemplate.bind({});
mapAllowFullscreen.args = { allowFullscreen: true };
mapAllowFullscreen.storyName = 'vl-map - allow fullscreen';

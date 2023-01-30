import {html} from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../../baselayer/vl-map-base-layer-grb';
import '../../baselayer/vl-map-base-layer-grb-ortho';
import '../vl-map-search';
import {mapSearchArgs, mapSearchArgTypes} from "./vl-map-search.stories-arg";

export default {
    title: 'map/search',
    parameters: {
        controls: {hideNoControlsWarning: true},
    },
    args: mapSearchArgs,
    argTypes: mapSearchArgTypes,
};

export const searchDefault = ({
                                  allowFullscreen,
                                  disableEscape,
                                  disableRotation,
                                  disableMousewheelZoom,
                                  disableKeyboard,
                              }: typeof mapSearchArgs) => html`
    <vl-map
            ?data-vl-allow-fullscreen=${allowFullscreen}
            ?data-vl-disable-escape-key=${disableEscape}
            ?data-vl-disable-rotation=${disableRotation}
            ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
            ?data-vl-disable-keyboard=${disableKeyboard}
    >
        <vl-map-search></vl-map-search>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
`;
searchDefault.storyName = 'vl-map-search - default';

export const searchSeparateFunctionality = ({
                                                allowFullscreen,
                                                disableEscape,
                                                disableRotation,
                                                disableMousewheelZoom,
                                                disableKeyboard,
                                            }: typeof mapSearchArgs) => html`
    <vl-map-search id="bind-map-search"></vl-map-search>
    <vl-map id="map"
            ?data-vl-allow-fullscreen=${allowFullscreen}
            ?data-vl-disable-escape-key=${disableEscape}
            ?data-vl-disable-rotation=${disableRotation}
            ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
            ?data-vl-disable-keyboard=${disableKeyboard}
    >
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
    <script>
        document.querySelector('#bind-map-search').bindMap(document.querySelector('#map'));
    </script>
`;
searchSeparateFunctionality.storyName = 'vl-map-search - separate functionality';

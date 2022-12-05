import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../../baselayer/vl-map-base-layer-grb';
import '../../baselayer/vl-map-base-layer-grb-ortho';
import '../vl-map-search';

export default {
    title: 'map/search',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const searchDefault = () =>
    html`
        <vl-map>
            <vl-map-search></vl-map-search>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    `;
searchDefault.storyName = 'vl-map-search - default';

export const searchSeparateFunctionality = () => html`
    <vl-map-search id="bind-map-search"></vl-map-search>
    <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-baselayer-grb></vl-map-baselayer-grb>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
    </vl-map>
    <script>
        document.querySelector('#bind-map-search').bindMap(document.querySelector('#map'));
    </script>
`;
searchSeparateFunctionality.storyName = 'vl-map-search - separate functionality';

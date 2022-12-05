import { html } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-wfs-layer';
import { wfsLayerArgTypes } from './vl-map-wfs-layer.stories-arg';

export default {
    title: 'map/layer/vector-layer',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    argTypes: wfsLayerArgTypes,
};

export const wfsLayerDefault = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-wfs-layer
            data-vl-name="Oppervlaktewaterlichamen"
            data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
            data-vl-layers="owl_l"
            data-vl-max-resolution="8"
        >
        </vl-map-wfs-layer>
    </vl-map>
`;
wfsLayerDefault.storyName = 'vl-map-wfs-layer - default';

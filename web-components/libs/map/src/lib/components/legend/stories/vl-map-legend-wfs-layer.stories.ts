import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../../layer/vector-layer/vl-map-wfs-layer';
import '../../layer-style/vl-map-layer-circle-style';
import '../vl-map-legend';
import { legendWfsLayerArgs, legendWfsLayerArgTypes } from './vl-map-legend-wfs-layer.stories-arg';

export default {
    title: 'map/legend',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: legendWfsLayerArgs,
    argTypes: legendWfsLayerArgTypes,
};

export const legendWfsLayer = (props) => {
    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-wfs-layer
                data-vl-name="Oppervlaktewaterlichamen"
                data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                data-vl-layers="owl_l"
                data-vl-max-resolution="8"
            >
                <vl-map-layer-circle-style
                    data-vl-color="#ffe615"
                    data-vl-size="5"
                    data-vl-border-color="#000"
                    data-vl-border-size="1"
                ></vl-map-layer-circle-style>
            </vl-map-wfs-layer>
            <vl-map-legend
                data-vl-placement="${props.placement}"
                top="${ifDefined(props.top)}"
                right="${ifDefined(props.right)}"
                bottom="${ifDefined(props.bottom)}"
                left="${ifDefined(props.left)}"
            ></vl-map-legend>
        </vl-map>
    `;
};
legendWfsLayer.storyName = 'vl-map-legend - wfs-layer';

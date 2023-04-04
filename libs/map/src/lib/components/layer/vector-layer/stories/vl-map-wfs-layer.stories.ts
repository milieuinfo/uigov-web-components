import { html, nothing } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-wfs-layer';
import { wfsLayerArgs, wfsLayerArgTypes } from './vl-map-wfs-layer.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';

export default {
    title: 'map/layer/vector-layer',
    args: wfsLayerArgs,
    argTypes: wfsLayerArgTypes,
} as Meta<typeof wfsLayerArgs>;

export const wfsLayerDefault: StoryFn<typeof wfsLayerArgs> = ({
    hidden,
    layers,
    maxResolution,
    minResolution,
    name,
    opacity,
    url,
}) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-wfs-layer
            ?data-vl-hidden=${hidden}
            data-vl-layers=${layers || nothing}
            data-vl-max-resolution=${maxResolution ?? nothing}
            data-vl-min-resolution=${minResolution ?? nothing}
            data-vl-name=${name || nothing}
            data-vl-opacity=${opacity !== 1 ? opacity : nothing}
            data-vl-url=${url || nothing}
        >
        </vl-map-wfs-layer>
    </vl-map>
`;
wfsLayerDefault.storyName = 'vl-map-wfs-layer - default';
wfsLayerDefault.args = {
    ...wfsLayerArgs,
    layers: 'owl_l',
    name: 'Oppervlaktewaterlichamen',
    url: 'https://geoserver.vmm.be/geoserver/vmm/wfs',
};

import { html } from 'lit-html';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-wfs-layer';
import { Meta } from '@storybook/web-components';
import { mapWfsLayerArgs, mapWfsLayerArgTypes } from './vl-map-wfs-layer.stories-arg';
import mapWfsLayerDoc from './vl-map-wfs-layer.stories-doc.mdx';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/layer/vector-layer/wfs-layer',
    tags: ['autodocs'],
    args: storyArgs(mapWfsLayerArgs),
    argTypes: storyArgTypes(mapWfsLayerArgTypes),
    parameters: {
        docs: {
            page: mapWfsLayerDoc,
        },
    },
} as Meta<typeof mapWfsLayerArgs>;

export const MapWfsLayerDefault = story(
    mapWfsLayerArgs,
    ({ hidden, layers, maxResolution, minResolution, name, opacity, url }) =>
        html`
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-wfs-layer
                    ?data-vl-hidden=${hidden}
                    data-vl-layers=${layers}
                    data-vl-max-resolution=${maxResolution}
                    data-vl-min-resolution=${minResolution}
                    data-vl-name=${name}
                    data-vl-opacity=${opacity}
                    data-vl-url=${url}
                >
                </vl-map-wfs-layer>
            </vl-map>
        `
);
MapWfsLayerDefault.storyName = 'vl-map-wfs-layer - default';
MapWfsLayerDefault.args = {
    layers: 'owl_l',
    name: 'Oppervlaktewaterlichamen',
    url: 'https://geoserver.vmm.be/geoserver/vmm/wfs',
};

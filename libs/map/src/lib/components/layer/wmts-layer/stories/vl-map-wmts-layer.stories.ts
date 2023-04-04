import { html, nothing } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../vl-map-wmts-layer';
import { wmtsLayerArgTypes, wmtsLayerArgs } from './vl-map-wmts-layer.stories-arg';
import { Meta, StoryFn } from '@storybook/web-components';

export default {
    title: 'map/layer/wmts-layer',
    args: wmtsLayerArgs,
    argTypes: wmtsLayerArgTypes,
} as Meta<typeof wmtsLayerArgs>;

export const wmtsLayerDefault: StoryFn<typeof wmtsLayerArgs> = ({
    hidden,
    layer,
    maxResolution,
    minResolution,
    name,
    opacity,
    url,
}) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-wmts-layer
            ?data-vl-hidden=${hidden}
            data-vl-layer=${layer || nothing}
            data-vl-max-resolution=${maxResolution ?? nothing}
            data-vl-min-resolution=${minResolution ?? nothing}
            data-vl-name=${name || nothing}
            data-vl-opacity=${opacity !== 1 ? opacity : nothing}
            data-vl-url=${url || nothing}
        >
        </vl-map-wmts-layer>
    </vl-map>
`;
wmtsLayerDefault.storyName = 'vl-map-wmts-layer - default';
wmtsLayerDefault.args = {
    ...wmtsLayerArgs,
    layer: 'grb_sel',
    name: 'GRB Wegenkaart',
    url: 'https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts',
};

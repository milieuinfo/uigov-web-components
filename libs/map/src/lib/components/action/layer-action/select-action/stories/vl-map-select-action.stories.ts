import { mapSelectActionArgs, mapSelectActionArgTypes } from './vl-map-select-action.stories-arg';
import { html } from 'lit';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../vl-map-select-action';
import '../../../../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import { Meta, StoryFn } from '@storybook/web-components';
import mapSelectActionDoc from './vl-map-select-action.stories-doc.mdx';

export default {
    title: 'map/action/layer-action/select-action',
    args: mapSelectActionArgs,
    argTypes: mapSelectActionArgTypes,
    parameters: {
        docs: {
            page: mapSelectActionDoc,
        },
    },
} as Meta<typeof mapSelectActionArgs>;

const features = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 1,
            geometry: {
                type: 'Point',
                coordinates: [147055.0, 197908.0],
            },
        },
        {
            type: 'Feature',
            id: 2,
            geometry: {
                type: 'Point',
                coordinates: [149055.0, 199908.0],
            },
        },
        {
            type: 'Feature',
            id: 3,
            geometry: {
                type: 'Point',
                coordinates: [151055.0, 201908.0],
            },
        },
    ],
};

export const MapSelectActionDefault: StoryFn<typeof mapSelectActionArgs> = ({ active, defaultActive }) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features}>
            <vl-map-select-action .active=${active} data-vl-default-active=${defaultActive}></vl-map-select-action>
            <vl-map-layer-circle-style data-vl-border-size="2"></vl-map-layer-circle-style>
        </vl-map-features-layer>
    </vl-map>
`;
MapSelectActionDefault.storyName = 'vl-map-select-action - default';
MapSelectActionDefault.args = {
    ...mapSelectActionArgs,
    active: true,
};

export const MapSelectActionClustering: StoryFn<typeof mapSelectActionArgs> = ({
    active,
    defaultActive,
    cluster,
}) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features} data-vl-cluster data-vl-cluster-distance="100">
            <vl-map-select-action
                .active=${active}
                data-vl-default-active=${defaultActive}
                ?data-vl-cluster=${cluster}
            ></vl-map-select-action>
            <vl-map-layer-circle-style data-vl-border-size="2"></vl-map-layer-circle-style>
        </vl-map-features-layer>
    </vl-map>
`;
MapSelectActionClustering.storyName = 'vl-map-select-action - clustering';
MapSelectActionClustering.args = {
    ...mapSelectActionArgs,
    active: true,
    cluster: true,
};

import { Meta } from '@storybook/web-components';
import '../../../../../../vl-map';
import '../../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../vl-map-select-actions';
import '../../../../../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import mapSelectActionsDoc from './vl-map-select-actions.stories-doc.mdx';
import { mapSelectActionsArgs, mapSelectActionsArgTypes } from './vl-map-select-actions.stories-arg';
import { component as defaultComponent } from './vl-map-select-actions.stories-default';
import { component as clusteringComponent } from './vl-map-select-actions.stories-clustering';
import { story, storyArgTypes, storyArgs } from '@domg-wc/common-storybook';

export default {
    title: 'map/action/layer-action/select-action/select-actions',
    args: storyArgs(mapSelectActionsArgs),
    argTypes: storyArgTypes(mapSelectActionsArgTypes),
    parameters: {
        docs: {
            page: mapSelectActionsDoc,
        },
    },
} as Meta<typeof mapSelectActionsArgs>;

export const MapSelectActionsDefault = story(mapSelectActionsArgs, ({ active, defaultActive }) => {
    return defaultComponent(active, defaultActive);
});
MapSelectActionsDefault.storyName = 'vl-map-select-actions - default';
MapSelectActionsDefault.args = {
    active: true,
};

export const MapSelectActionsClustering = story(mapSelectActionsArgs, ({ active, defaultActive }) => {
    return clusteringComponent(active, defaultActive);
});
MapSelectActionsClustering.storyName = 'vl-map-select-actions - clustering';
MapSelectActionsClustering.args = {
    active: true,
};
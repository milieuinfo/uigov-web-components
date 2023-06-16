import { Meta, StoryFn } from '@storybook/web-components';
import '../../../../../../vl-map';
import '../../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../vl-map-select-actions';
import '../../../../../layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style';
import mapSelectActionsDoc from './vl-map-select-actions.stories-doc.mdx';
import { mapSelectActionsArgs, mapSelectActionsArgTypes } from './vl-map-select-actions.stories-arg';
import { component as defaultComponent } from './vl-map-select-actions.stories-default';
import { component as clusteringComponent } from './vl-map-select-actions.stories-clustering';
import { setDefaultArgsToNothing } from '@domg-wc/common-utilities';

export default {
    title: 'map/action/layer-action/select-action/select-actions',
    args: mapSelectActionsArgs,
    argTypes: mapSelectActionsArgTypes,
    parameters: {
        docs: {
            page: mapSelectActionsDoc,
        },
    },
} as Meta<typeof mapSelectActionsArgs>;

export const MapSelectActionsDefault: StoryFn<typeof mapSelectActionsArgs> = (args) => {
    const { active, defaultActive } = setDefaultArgsToNothing(args, mapSelectActionsArgs);
    return defaultComponent(active, defaultActive);
};
MapSelectActionsDefault.storyName = 'vl-map-select-actions - default';
MapSelectActionsDefault.args = {
    ...mapSelectActionsArgs,
    active: true,
};

export const MapSelectActionsClustering: StoryFn<typeof mapSelectActionsArgs> = ({ active, defaultActive }) =>
    clusteringComponent(active, defaultActive);
MapSelectActionsClustering.storyName = 'vl-map-select-actions - clustering';
MapSelectActionsClustering.args = {
    ...mapSelectActionsArgs,
    active: true,
};

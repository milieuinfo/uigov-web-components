import { legendArgTypes } from './vl-map-legend.stories-arg';
import { LEGEND_PLACEMENT } from '../vl-map-legend';

export const legendMultiFeaturesLayerArgs = {
    placement: LEGEND_PLACEMENT.TOP_LEFT,
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
};

export const legendMultiFeaturesLayerArgTypes = {
    ...legendArgTypes,
};

import { legendArgTypes } from './vl-map-legend.stories-arg';
import { LEGEND_PLACEMENT } from '../vl-map-legend';

export const legendWfsLayerArgs = {
    placement: LEGEND_PLACEMENT.BOTTOM_RIGHT,
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
};

export const legendWfsLayerArgTypes = {
    ...legendArgTypes,
};

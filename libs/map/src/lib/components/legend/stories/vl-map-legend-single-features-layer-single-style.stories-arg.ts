import { legendArgTypes } from './vl-map-legend.stories-arg';
import { LEGEND_PLACEMENT } from '../vl-map-legend';

export const legendSingleFeaturesLayerSingleStyleArgs = {
    placement: LEGEND_PLACEMENT.TOP_RIGHT,
    top: undefined,
    right: '100px',
    bottom: undefined,
    left: undefined,
};

export const legendSingleFeaturesLayerSingleStyleArgTypes = {
    ...legendArgTypes,
};

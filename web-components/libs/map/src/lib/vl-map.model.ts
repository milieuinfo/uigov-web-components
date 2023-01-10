import VectorLayer from 'ol/layer/Vector';

export const EVENT = {
  ACTIVE_ACTION_CHANGED: 'vl-active-action-changed',
  LAYER_VISIBLE_CHANGED: 'vl-layer-visible-changed',
};

export const CONTROL_TYPE = {
  ACTION: 'action',
};

export const IDENTIFIER = {
  MEASURE: 'measure',
};

export interface MapActionPayload {
    layer?: any;
    callback?: Function;
    options?: any;
}

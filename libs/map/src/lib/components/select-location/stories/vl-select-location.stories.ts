import { html } from 'lit';
import '../vl-select-location';

export default {
    title: 'map/select-location',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const selectLocation = () => html` <select is="vl-select-location"></select> `;
selectLocation.storyName = 'vl-select-location - default';

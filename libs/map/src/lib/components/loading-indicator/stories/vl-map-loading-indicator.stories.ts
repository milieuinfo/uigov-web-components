import { html } from 'lit';

import { StoryFn } from '@storybook/web-components';
import mapLoadingIndicatorDoc from './vl-map-loading-indicator.stories-doc.mdx';
import { MapEvent } from 'ol';

export default {
    title: 'map/loading-indicator',
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: { page: mapLoadingIndicatorDoc },
    },
};

const Template: StoryFn = () => {
    return html`
        <button
            data-cy="short-wait"
            is="vl-button"
            @click="${() => {
                fakeLoadMap(500);
            }}"
        >
            Fake kort wachten
        </button>
        <button
            data-cy="long-wait"
            is="vl-button"
            @click="${() => {
                fakeLoadMap(10000);
            }}"
        >
            Fake lang wachten
        </button>
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-indicator></vl-map-loading-indicator>
        </vl-map>
    `;
};

const fakeLoadMap = async (ttw) => {
    const vlMap = document.querySelector('vl-map');
    vlMap.map.dispatchEvent(new MapEvent('loadstart', vlMap.map));
    await new Promise((resolve) => setTimeout(resolve, ttw));
    vlMap.map.dispatchEvent(new MapEvent('loadend', vlMap.map));
};

export const loadingIndicatorDefault = Template.bind({});
loadingIndicatorDefault.storyName = 'vl-map-loading-indicator - default';

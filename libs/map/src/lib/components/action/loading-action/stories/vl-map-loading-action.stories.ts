import { html } from 'lit';

import { StoryFn } from '@storybook/web-components';
import mapLoadingActionDoc from './vl-map-loading-action.stories-doc.mdx';
import { MapEvent } from 'ol';

export default {
    title: 'map/action',
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: { page: mapLoadingActionDoc },
    },
};

const Template: StoryFn = () => {
    return html`
        <button
            is="vl-button"
            @click="${() => {
                fakeMapLaden(500);
            }}"
        >
            Fake kort wachten
        </button>
        <button
            is="vl-button"
            @click="${() => {
                fakeMapLaden(10000);
            }}"
        >
            Fake lang wachten
        </button>
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-action></vl-map-loading-action>
        </vl-map>
    `;
};

const fakeMapLaden = async (ttw) => {
    const vlMap = document.querySelector('vl-map');
    vlMap.map.dispatchEvent(new MapEvent('loadstart', vlMap.map));
    await new Promise((resolve) => setTimeout(resolve, ttw));
    vlMap.map.dispatchEvent(new MapEvent('loadend', vlMap.map));
};

export const loadingActionDefault = Template.bind({});
loadingActionDefault.storyName = 'vl-map-loading-action - default';

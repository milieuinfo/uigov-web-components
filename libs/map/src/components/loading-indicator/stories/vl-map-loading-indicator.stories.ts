import { defaultArgs, defaultArgTypes, story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { MapEvent } from 'ol';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../vl-map-loading-indicator';
import mapLoadingIndicatorDoc from './vl-map-loading-indicator.stories-doc.mdx';

export default {
    id: 'map-loading-indicator',
    title: 'map/loading-indicator',
    tags: ['autodocs'],
    args: defaultArgs,
    argTypes: defaultArgTypes(),
    parameters: {
        docs: {
            page: mapLoadingIndicatorDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta<typeof defaultArgs>;

const fakeLoadMap = async (ttw) => {
    const vlMap = document.querySelector('vl-map');
    vlMap.map.dispatchEvent(new MapEvent('loadstart', vlMap.map));
    await new Promise((resolve) => setTimeout(resolve, ttw));
    vlMap.map.dispatchEvent(new MapEvent('loadend', vlMap.map));
};

export const MapLoadingIndicatorDefault = story(
    {},
    () => html`
        <div style="margin-bottom:10px">
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
        </div>
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-loading-indicator></vl-map-loading-indicator>
        </vl-map>
    `
);
MapLoadingIndicatorDefault.storyName = 'vl-map-loading-indicator - default';

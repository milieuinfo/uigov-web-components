import { defaultArgs, defaultArgTypes, story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../baselayer/vl-map-base-layer-grb-ortho/vl-map-base-layer-grb-ortho';
import '../../baselayer/vl-map-base-layer-grb/vl-map-base-layer-grb';
import '../vl-map-overview-map';
import mapOverviewMapDoc from './vl-map-overview-map.stories-doc.mdx';

export default {
    title: 'map/overview-map',
    tags: ['autodocs'],
    args: defaultArgs,
    argTypes: defaultArgTypes(),
    parameters: {
        docs: {
            page: mapOverviewMapDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta<typeof defaultArgs>;

export const MapOverviewMapDefault = story(
    {},
    () => html`
        <vl-map>
            <vl-map-overview-map></vl-map-overview-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    `
);
MapOverviewMapDefault.storyName = 'vl-map-overview-map - default';

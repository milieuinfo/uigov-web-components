import { defaultArgs, defaultArgTypes, story } from '@domg-wc/common-storybook';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import '../../../../vl-map';
import '../../../action/draw-action/measure-action/vl-map-measure-action';
import '../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../vl-map-action-controls';
import '../vl-map-measure-control';
import measureControlDoc from './vl-map-measure-control.stories-doc.mdx';

export default {
    id: 'map-controls-measure-control',

    title: 'map/controls/measure-control',
    tags: ['autodocs'],
    args: defaultArgs,
    argTypes: defaultArgTypes(),
    parameters: {
        docs: {
            page: measureControlDoc,
        },
        controls: {
            hideNoControlsWarning: true,
        },
    },
} as Meta<typeof defaultArgs>;

export const MapMeasureControlDefault = story(
    {},
    () => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>
            <vl-map-features-layer>
                <vl-map-measure-action></vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    `
);
MapMeasureControlDefault.storyName = 'vl-map-measure-control - default';

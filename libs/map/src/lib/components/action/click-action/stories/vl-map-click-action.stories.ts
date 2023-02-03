import { mapClickActionArgs, mapClickActionArgTypes } from './vl-map-click-action.stories-arg';
import { html } from 'lit';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer';
import '../vl-map-click-action';
import { StoryFn } from '@storybook/web-components';
import mapClickActionDoc from './vl-map-click-action.stories-doc.mdx';
import { VlMapClickedEvent } from '../../VlMapClickedEvent';

export default {
    title: 'map/action',
    args: mapClickActionArgs,
    argTypes: mapClickActionArgTypes,
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: { page: mapClickActionDoc },
    },
};

const Template: StoryFn<typeof mapClickActionArgs> = ({ onClickActionStoryBook }: typeof mapClickActionArgs) => {
    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-click-action @vl-map-clicked="${storybookTest}"></vl-map-click-action>
        </vl-map>
    `;

    function storybookTest(evt: VlMapClickedEvent) {
        console.log(evt);
        onClickActionStoryBook({
            evt,
            coordinate: evt.coordinate,
            pixel: evt.pixel,
            currentBoundingBox: evt.currentBoundingBox,
        });
    }
};

export const clickActionDefault = Template.bind({});
clickActionDefault.storyName = 'vl-map-click-action - default';

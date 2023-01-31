import {mapClickActionArgs, mapClickActionArgTypes} from './vl-map-click-action.stories-arg';
import { html } from 'lit';
import '../../vl-map';
import '../baselayer/vl-map-base-layer-grb-gray';
import '../layer/vector-layer/vl-map-features-layer';
import './vl-map-click-action';
import {StoryFn} from "@storybook/web-components";
import mapClickActionDoc from './vl-map-click-action.stories-doc.mdx';

export default {
    title: 'map/action',
    args: mapClickActionArgs,
    argTypes: mapClickActionArgTypes,
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: { page: mapClickActionDoc },
    }
 } ;


const Template: StoryFn<typeof mapClickActionArgs> = ({onClick}: typeof mapClickActionArgs) => {
    return html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-click-action .onClick="${(click) => {onClick(click)}}"></vl-map-click-action>
        </vl-map>
    `
        ;
};

export const clickActionDefault = Template.bind({});
clickActionDefault.storyName = 'vl-map-click-action - default';


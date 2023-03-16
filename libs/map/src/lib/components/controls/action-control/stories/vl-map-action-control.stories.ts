import { html, nothing } from 'lit-html';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer';
import '../../../action/draw-action/vl-map-draw-polygon-action';
import '../../../action/layer-action/vl-map-delete-action';
import '../../../action/layer-action/vl-map-modify-action';
import '../../../action/draw-action/vl-map-measure-action';
import '../../vl-map-action-controls';
import '../vl-map-action-control';
import { Meta, StoryFn } from '@storybook/web-components';
import actionControlDoc from './vl-map-action-control.stories-doc.mdx';
import { actionControlArgs, actionControlArgTypes } from './vl-map-action-control.stories-arg';

export default {
    title: 'map/controls/action-control',
    args: actionControlArgs,
    argTypes: actionControlArgTypes,
    parameters: {
        controls: {
            hideNoControlsWarning: true,
        },
        docs: {
            page: actionControlDoc,
        },
    },
} as Meta<typeof actionControlArgs>;

const Template: StoryFn<typeof actionControlArgs> = ({ actionId, icon, label }) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-measure-action id=${actionId}></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-action-controls>
            <vl-map-action-control
                data-vl-action-id=${actionId}
                data-vl-icon=${icon || nothing}
                data-vl-label=${label || nothing}
            ></vl-map-action-control>
        </vl-map-action-controls>
    </vl-map>
`;

export const ActionControlDefault = Template.bind({});
ActionControlDefault.storyName = 'vl-map-action-control - default';
ActionControlDefault.args = {
    icon: '',
};

export const ActionControlIcon = Template.bind({});
ActionControlIcon.storyName = 'vl-map-action-control - icon';
ActionControlIcon.args = {
    label: '',
};

export const ActionControlMultiple = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-draw-polygon-action id="draw-action"></vl-map-draw-polygon-action>
            <vl-map-modify-action id="modify-action"></vl-map-modify-action>
            <vl-map-delete-action id="delete-action"></vl-map-delete-action>
        </vl-map-features-layer>
        <vl-map-action-controls>
            <vl-map-action-control data-vl-action-id="draw-action" data-vl-label="Teken"></vl-map-action-control>
            <vl-map-action-control data-vl-action-id="modify-action" data-vl-label="Editeer"></vl-map-action-control>
            <vl-map-action-control data-vl-action-id="delete-action" data-vl-label="Verwijder"></vl-map-action-control>
        </vl-map-action-controls>
    </vl-map>
`;
ActionControlMultiple.storyName = 'vl-map-action-control - multiple';

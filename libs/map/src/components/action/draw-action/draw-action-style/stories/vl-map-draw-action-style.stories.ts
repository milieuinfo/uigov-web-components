import { mapDrawActionStyleArgs, mapDrawActionStyleArgTypes } from './vl-map-draw-action-style.stories-arg';
import mapDrawActionStyleDoc from './vl-map-draw-action-style.stories-doc.mdx';
import { Meta } from '@storybook/web-components';
import { story } from '@domg-wc/common-storybook';
import { html } from 'lit';
import '../../../../../vl-map';
import '../../../../baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray';
import '../../../../layer/vector-layer/vl-map-features-layer/vl-map-features-layer';
import '../../draw-polygon-action/vl-map-draw-polygon-action';
import '../vl-map-draw-action-style';

export default {
    id: 'map-action-draw-action-draw-action-style',
    title: 'map/action/draw-action/draw-action-style',
    tags: ['autodocs'],
    args: mapDrawActionStyleArgs,
    argTypes: mapDrawActionStyleArgTypes,
    parameters: {
        docs: {
            page: mapDrawActionStyleDoc,
        },
    },
} as Meta<typeof mapDrawActionStyleArgs>;

export const MapDrawActionStyleDefault = story(
    mapDrawActionStyleArgs,
    ({ color, borderColor, borderSize, circleColor, circleBorderColor, circleBorderSize, circleSize }) => html`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action .active=${true} data-vl-default-active=${true}>
                    <vl-map-draw-action-style
                        data-vl-color=${color}
                        data-vl-border-color=${borderColor}
                        data-vl-border-size=${borderSize}
                        data-vl-circle-color=${circleColor}
                        data-vl-circle-border-color=${circleBorderColor}
                        data-vl-circle-border-size=${circleBorderSize}
                        data-vl-circle-size=${circleSize}
                    ></vl-map-draw-action-style>
                </vl-map-draw-polygon-action>
                <vl-map-layer-style
                    data-vl-border-size="2"
                    data-vl-color="rgba(255, 127, 80, 0.8)"
                    data-vl-border-color="rgba(64, 224, 208, 0.8)"
                ></vl-map-layer-style>
            </vl-map-features-layer>
        </vl-map>
    `
);
MapDrawActionStyleDefault.args = {
    color: 'rgba(255, 105, 180, 0.8)',
    borderColor: 'rgba(0, 191, 255, 0.8)',
    borderSize: '3',
    circleColor: 'rgba(255, 255, 0, 0.8)',
    circleBorderColor: 'rgba(76, 187, 23, 0.8)',
    circleBorderSize: '5',
    circleSize: '10',
};

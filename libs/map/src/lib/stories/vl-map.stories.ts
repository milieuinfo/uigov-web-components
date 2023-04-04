import { mapArgs, mapArgTypes } from './vl-map.stories-arg';
import { html } from 'lit';
import { Meta, StoryFn } from '@storybook/web-components';
import mapDoc from './vl-map.stories-doc.mdx';
import { filterOutClasses, formatHTML } from '@domg-wc/common-utilities';
import {
    getActionElement,
    getToggleButton,
    handleActiveActionChange,
    handleLayerVisibleChange,
    handleOpacitySliderChange,
} from './vl-map.stories-util';
import '@domg-wc/elements';
import '@domg-wc/components';
import '../vl-map';
import '../components/controls/vl-map-action-controls';
import '../components/controls/measure-control/vl-map-measure-control';
import '../components/side-sheet/vl-map-side-sheet';
import '../components/layer-switcher/vl-map-layer-switcher';
import '../components/overview-map/vl-map-overview-map';
import '../components/baselayer/vl-map-base-layer-grb-gray';
import '../components/baselayer/vl-map-base-layer-grb';
import '../components/baselayer/vl-map-base-layer-grb-ortho';
import '../components/layer/vector-layer/vl-map-features-layer';
import '../components/layer-style/vl-map-layer-style';
import '../components/layer-style/vl-map-layer-circle-style';
import '../components/action/draw-action/vl-map-draw-point-action';
import '../components/action/draw-action/vl-map-draw-line-action';
import '../components/action/draw-action/vl-map-draw-polygon-action';
import '../components/action/draw-action/vl-map-measure-action';
import '../components/action/layer-action/vl-map-modify-action';
import '../components/action/layer-action/vl-map-delete-action';
import '../components/action/layer-action/vl-map-select-action';

export default {
    title: 'map/map',
    args: mapArgs,
    argTypes: mapArgTypes,
    parameters: {
        docs: {
            page: mapDoc,
            transformSource: (input: string) => {
                return formatHTML(filterOutClasses(input));
            },
        },
    },
} as Meta<typeof mapArgs>;

export const MapDefault: StoryFn<typeof mapArgs> = ({
    allowFullscreen,
    disableEscape,
    disableRotation,
    disableMousewheelZoom,
    disableKeyboard,
    noBorder,
    fullHeight,
}) => html`
    <vl-map
        ?data-vl-allow-fullscreen=${allowFullscreen}
        ?data-vl-disable-escape-key=${disableEscape}
        ?data-vl-disable-rotation=${disableRotation}
        ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
        ?data-vl-disable-keyboard=${disableKeyboard}
        ?data-vl-no-border=${noBorder}
        ?data-vl-full-height=${fullHeight}
        data-vl-zoomInTooltip="Zoom in"
        data-vl-zoomOutTooltip="Zoom uit"
    >
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    </vl-map>
`;
MapDefault.storyName = 'vl-map - default';

export const MapFullHeight: StoryFn<typeof mapArgs> = ({
    allowFullscreen,
    disableEscape,
    disableRotation,
    disableMousewheelZoom,
    disableKeyboard,
    noBorder,
    fullHeight,
}) => html`
    <div style="height: 800px; display: flex; flex-direction: column; border: 1px solid black">
        <vl-functional-header
            data-vl-sub-title=${'Voor lager, middelbaar en hoger onderwijs'}
            data-vl-title=${'School- en studietoelagen'}
            data-vl-margin-bottom=${'none'}
            ?data-vl-disable-back-link=${true}
        ></vl-functional-header>
        <vl-map
            ?data-vl-allow-fullscreen=${allowFullscreen}
            ?data-vl-disable-escape-key=${disableEscape}
            ?data-vl-disable-rotation=${disableRotation}
            ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
            ?data-vl-disable-keyboard=${disableKeyboard}
            ?data-vl-no-border=${noBorder}
            ?data-vl-full-height=${fullHeight}
            data-vl-zoomInTooltip="Zoom in"
            data-vl-zoomOutTooltip="Zoom uit"
        >
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    </div>
`;
MapFullHeight.storyName = 'vl-map - full height';
MapFullHeight.args = {
    ...mapArgs,
    noBorder: true,
    fullHeight: true,
};

const purple = 'rgba(102, 51, 153, 0.6)';
const toggleGroupStyling = 'width: 100%;';
const toggleItemStyling = 'display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;';

const features = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 1,
            geometry: { type: 'Point', coordinates: [210000, 190000] },
        },
        {
            type: 'Feature',
            id: 2,
            geometry: {
                type: 'LineString',
                coordinates: [
                    [170000, 170000],
                    [150000, 206000],
                ],
            },
        },
        {
            type: 'Feature',
            id: 3,
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [44000, 171000],
                        [100000, 171000],
                        [100000, 205000],
                        [44000, 205000],
                        [44000, 171000],
                    ],
                ],
            },
        },
    ],
};

export const MapPlayground: StoryFn<typeof mapArgs> = ({
    allowFullscreen,
    disableEscape,
    disableRotation,
    disableMousewheelZoom,
    disableKeyboard,
    noBorder,
    fullHeight,
    activeActionChange,
    layerVisibleChange,
}) => {
    return html`
        <vl-map
            ?data-vl-allow-fullscreen=${allowFullscreen}
            ?data-vl-disable-escape-key=${disableEscape}
            ?data-vl-disable-rotation=${disableRotation}
            ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
            ?data-vl-disable-keyboard=${disableKeyboard}
            ?data-vl-no-border=${noBorder}
            ?data-vl-full-height=${fullHeight}
            @vl-active-action-changed=${(event) => {
                activeActionChange({ previous: event.detail.previous });
                activeActionChange({ current: event.detail.current });
                handleActiveActionChange(event);
            }}
            @vl-layer-visible-changed=${(event) => {
                layerVisibleChange(event.detail);
                handleLayerVisibleChange(event);
            }}
        >
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-side-sheet>
                <h6 is="vl-h6">Layers</h6>

                <vl-map-layer-switcher></vl-map-layer-switcher>
                <vl-input-slider data-vl-value=${100} @vl-change-value=${handleOpacitySliderChange}></vl-input-slider>

                <hr />

                <h6 is="vl-h6">Measure</h6>

                <div>
                    <button
                        is="vl-button"
                        @click=${() => {
                            getActionElement('measure').active = true;
                        }}
                    >
                        Start
                    </button>
                    <button
                        is="vl-button"
                        @click=${() => {
                            getActionElement('measure').active = false;
                        }}
                    >
                        Stop
                    </button>
                </div>

                <hr />

                <div style=${toggleGroupStyling}>
                    <h6 is="vl-h6">Shapes</h6>

                    <div style="margin-bottom: 2rem;">
                        <vl-toggle-button
                            class="modify-toggle-button"
                            @click=${() => {
                                getActionElement('modify').active = !getToggleButton('modify').active;
                            }}
                        >
                            Modify
                        </vl-toggle-button>
                        <vl-toggle-button
                            class="delete-toggle-button"
                            @click=${() => {
                                getActionElement('delete').active = !getToggleButton('delete').active;
                            }}
                        >
                            Delete
                        </vl-toggle-button>
                    </div>

                    <div style=${toggleItemStyling}>
                        <vl-toggle-button
                            class="draw-point-toggle-button"
                            data-vl-icon="pencil"
                            data-vl-text-hidden
                            @click=${() => {
                                getActionElement('draw-point').active = !getToggleButton('draw-point').active;
                            }}
                        >
                            Toggle draw point action
                        </vl-toggle-button>
                        <p>Draw point</p>
                    </div>

                    <div style=${toggleItemStyling}>
                        <vl-toggle-button
                            class="draw-line-toggle-button"
                            data-vl-icon="pencil"
                            data-vl-text-hidden
                            @click=${() => {
                                getActionElement('draw-line').active = !getToggleButton('draw-line').active;
                            }}
                        >
                            Toggle draw line action
                        </vl-toggle-button>
                        <p>Draw line</p>
                    </div>

                    <div style=${toggleItemStyling}>
                        <vl-toggle-button
                            class="draw-polygon-toggle-button"
                            data-vl-icon="pencil"
                            data-vl-text-hidden
                            @click=${() => {
                                getActionElement('draw-polygon').active = !getToggleButton('draw-polygon').active;
                            }}
                        >
                            Toggle draw polygon action
                        </vl-toggle-button>
                        <p>Draw Polygon</p>
                    </div>
                </div>
            </vl-map-side-sheet>

            <vl-map-overview-map></vl-map-overview-map>

            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-baselayer-grb></vl-map-baselayer-grb>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>

            <vl-map-features-layer data-vl-name="Shapes" .features=${features}>
                <vl-map-layer-style data-vl-border-color=${purple} data-vl-color=${purple}></vl-map-layer-style>
                <vl-map-layer-circle-style
                    data-vl-border-color=${purple}
                    data-vl-color=${purple}
                ></vl-map-layer-circle-style>

                <vl-map-draw-point-action class="draw-point-action action"></vl-map-draw-point-action>
                <vl-map-draw-line-action class="draw-line-action action"></vl-map-draw-line-action>
                <vl-map-draw-polygon-action class="draw-polygon-action action"></vl-map-draw-polygon-action>

                <vl-map-modify-action class="modify-action action"></vl-map-modify-action>
                <vl-map-delete-action class="delete-action action"></vl-map-delete-action>
                <vl-map-select-action class="select-action action" data-vl-default-active></vl-map-select-action>
            </vl-map-features-layer>

            <vl-map-features-layer data-vl-name="Measurements">
                <vl-map-measure-action class="measure-action action"></vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    `;
};
MapPlayground.storyName = 'vl-map - playground';

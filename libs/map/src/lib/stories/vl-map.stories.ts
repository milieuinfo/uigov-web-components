import {mapArgs, mapArgTypes} from './vl-map.stories-arg';
import {html} from 'lit';
import '@domg-wc/elements';
import '@domg-wc/components';
import '../vl-map';
import '../components/controls/vl-map-action-controls';
import '../components/controls/vl-map-measure-control';
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
    parameters: {
        controls: {hideNoControlsWarning: true},
    },
    args: mapArgs,
    argTypes: mapArgTypes,
};

const mapTemplate = ({
                         allowFullscreen,
                         disableEscape,
                         disableRotation,
                         disableMousewheelZoom,
                         disableKeyboard,
                     }: typeof mapArgs) => html`
    <vl-map
        ?data-vl-allow-fullscreen=${allowFullscreen}
        ?data-vl-disable-escape-key=${disableEscape}
        ?data-vl-disable-rotation=${disableRotation}
        ?data-vl-disable-mouse-wheel-zoom=${disableMousewheelZoom}
        ?data-vl-disable-keyboard=${disableKeyboard}
        data-vl-zoomInTooltip="Zoom in"
        data-vl-zoomOutTooltip="Zoom uit"
    >
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    </vl-map>
`;

export const mapDefault = mapTemplate.bind({});
mapDefault.storyName = 'vl-map - default';

export const mapAllowFullscreen = mapTemplate.bind({});
mapAllowFullscreen.args = {allowFullscreen: true};
mapAllowFullscreen.storyName = 'vl-map - allow fullscreen';

export const mapDisableMousewheelZoom = mapTemplate.bind({});
mapDisableMousewheelZoom.args = {disableMousewheelZoom: true};
mapDisableMousewheelZoom.storyName = 'vl-map - disable mousewheel zoom';

const purple = 'rgba(102, 51, 153, 0.6)';
const toggleGroupStyling = 'width: 100%;';
const toggleItemStyling = 'display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;';

// Make sure the class that is given is unique and is not being used in other stories of the component.
const getLastElementByClassName = (className) => {
    const items = document.getElementsByClassName(className);
    return items[items.length - 1];
};

const getActionElement = (name): any => getLastElementByClassName(`${name}-action`);
const getToggleButton = (name): any => getLastElementByClassName(`${name}-toggle-button`);

const features = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 1,
            geometry: {type: 'Point', coordinates: [210000, 190000]},
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

export const mapPlayground = (props) => {
    const actionIdentifiers = ['draw-point', 'draw-line', 'draw-polygon', 'modify', 'delete'];

    const handleActiveActionChange = ({detail: {previous, current}}) => {
        // Activate/deactivate external controls when an action changes its state
        actionIdentifiers.forEach((actionIdentifier) => {
            if (previous === getActionElement(actionIdentifier)) {
                getToggleButton(actionIdentifier).active = false;
            } else if (current === getActionElement(actionIdentifier)) {
                getToggleButton(actionIdentifier).active = true;
            }
        });
    };

    const handleLayerVisibleChange = ({detail: {layer, visible}}) => {
        // Enable/disable external controls when an action changes its state
        const layerActions = layer.getElementsByClassName('action');

        for (const layerAction of layerActions) {
            actionIdentifiers.forEach((actionIdentifier) => {
                if (layerAction === getActionElement(actionIdentifier)) {
                    getToggleButton(actionIdentifier).disabled = !visible;
                }
            });
        }
    };

    return html`
        <vl-map
            ?data-vl-allow-fullscreen=${props.allowFullscreen}
            ?data-vl-disable-escape-key=${props.disableEscape}
            ?data-vl-disable-rotation=${props.disableRotation}
            ?data-vl-disable-mouse-wheel-zoom=${props.disableMousewheelZoom}
            @vl-active-action-changed=${(event) => {
                props.activeActionChange({previous: event.detail.previous});
                props.activeActionChange({current: event.detail.current});
                handleActiveActionChange(event);
            }}
            @vl-layer-visible-changed=${(event) => {
                props.layerVisibleChange(event.detail);
                handleLayerVisibleChange(event);
            }}
        >
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>

            <vl-map-side-sheet>
                <h6 is="vl-h6">Layers</h6>

                <vl-map-layer-switcher></vl-map-layer-switcher>

                <hr/>

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

                <hr/>

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
mapPlayground.storyName = 'vl-map - playground';

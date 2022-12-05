import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../../layer/vector-layer/vl-map-features-layer';
import '../../layer-style/vl-map-layer-circle-style';
import '../../controls/vl-map-action-controls';
import '../../controls/vl-map-measure-control';
import '../vl-map-legend';
import {
    legendSingleFeaturesLayerArgs,
    legendSingleFeaturesLayerArgTypes,
} from './vl-map-legend-single-features-layer.stories-arg';

export default {
    title: 'map/legend',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: legendSingleFeaturesLayerArgs,
    argTypes: legendSingleFeaturesLayerArgTypes,
};

export const legendSingleFeaturesLayer = (props) => {
    const features = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [153055.0, 203908.0],
                },
                properties: {
                    styleId: 'style-1',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [141000.0, 200908.0],
                },
                properties: {
                    styleId: 'style-2',
                },
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [147055.0, 197908.0],
                            [157055.0, 197908.0],
                            [157055.0, 187908.0],
                            [147055.0, 187908.0],
                            [147055.0, 197908.0],
                        ],
                    ],
                },
                properties: {
                    styleId: 'style-3',
                },
            },
        ],
    };

    document.addEventListener('DOMContentLoaded', async () => {
        const map: any = document.getElementById('map');
        await map.ready;
        (document.querySelector('#style-1') as any).appliesTo = (feature) => feature.get('styleId') === 'style-1';
        (document.querySelector('#style-2') as any).appliesTo = (feature) => feature.get('styleId') === 'style-2';
        (document.querySelector('#style-3') as any).appliesTo = (feature) => feature.get('styleId') === 'style-3';
    });

    return html` <vl-map id="map">
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${features} data-vl-name="Laag 1">
            <vl-map-layer-circle-style
                id="style-1"
                data-vl-name="Openbaar onderzoek"
                data-vl-color="#ffe615"
                data-vl-size="5"
                data-vl-border-color="#000"
                data-vl-border-size="1"
            ></vl-map-layer-circle-style>
            <vl-map-layer-circle-style
                id="style-2"
                data-vl-name="Beslissing"
                data-vl-color="red"
                data-vl-size="5"
                data-vl-border-color="#000"
                data-vl-border-size="1"
            ></vl-map-layer-circle-style>
            <vl-map-layer-style
                id="style-3"
                data-vl-name="And another one"
                data-vl-color="rgba(255,0,0,0.5)"
                data-vl-border-color="rgba(255,255,100,1)"
                data-vl-border-size="2"
                data-vl-text-feature-attribute-name="label"
                data-vl-text-background-color="rgba(0,0,255,0.2)"
                data-vl-text-border-color="rgba(0,255,0,1)"
                data-vl-text-border-size="3"
                data-vl-text-color="rgba(255,0,0,1)"
                data-vl-text-offset-x="10"
                data-vl-text-offset-y="-10"
                data-vl-text-size="13px"
            ></vl-map-layer-style>
            <vl-map-measure-action></vl-map-measure-action>
        </vl-map-features-layer>
        <vl-map-action-controls>
            <vl-map-measure-control></vl-map-measure-control>
        </vl-map-action-controls>
        <vl-map-legend
            data-vl-placement="${props.placement}"
            top="${ifDefined(props.top)}"
            right="${ifDefined(props.right)}"
            bottom="${ifDefined(props.bottom)}"
            left="${ifDefined(props.left)}"
        ></vl-map-legend>
    </vl-map>`;
};
legendSingleFeaturesLayer.storyName = 'vl-map-legend - single features layer';

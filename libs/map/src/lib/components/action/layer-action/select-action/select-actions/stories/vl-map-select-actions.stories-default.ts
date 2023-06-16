import { html } from 'lit';

const featuresLayer1 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 1,
            geometry: {
                type: 'Point',
                coordinates: [147055.0, 197908.0],
            },
        },
    ],
};

const featuresLayer2 = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: 2,
            geometry: {
                type: 'Point',
                coordinates: [158755.0, 197208.0],
            },
        },
        {
            type: 'Feature',
            id: 3,
            geometry: {
                type: 'Point',
                coordinates: [158755.0, 187208.0],
            },
        },
    ],
};

const layers = ['layer-1', 'layer-2'];

export const component = (active: boolean, defaultActive: boolean) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer .features=${featuresLayer1} data-vl-name="layer-1">
            <vl-map-layer-circle-style data-vl-border-size="2"></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-features-layer .features=${featuresLayer2} data-vl-name="layer-2">
            <vl-map-layer-circle-style
                data-vl-color="rgba(255, 230, 21, 1)"
                data-vl-border-color="rgba(0, 0, 0, 1)"
            ></vl-map-layer-circle-style>
        </vl-map-features-layer>
        <vl-map-select-actions .active=${active} .layers=${layers} ?data-vl-default-active=${defaultActive}>
        </vl-map-select-actions>
    </vl-map>
`;

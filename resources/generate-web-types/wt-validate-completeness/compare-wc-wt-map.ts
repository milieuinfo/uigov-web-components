import { extractMapWCNames } from './extract-wc-names';
import { extractMapWTNames } from './extract-wt-names';

const mapWCNames = extractMapWCNames();
const mapWTNames = extractMapWTNames();
const mapWCMismatch = [
    'vl-map-base-layer-grb', // mismatch tussen bestands- en componentnaam
    'vl-map-base-layer-grb-gray', // mismatch tussen bestands- en componentnaam
    'vl-map-base-layer-grb-ortho', // mismatch tussen bestands- en componentnaam
    'vl-map-action', // basis klasse
    'vl-map-draw-action', // basis klasse
    'vl-map-base-layer', // mismatch tussen bestands- en componentnaam
    'vl-map-layer', // basis klasse
    'vl-map-wms-layer', // basis klasse
    'vl-map-vector-layer', // basis klasse
];
const mapWTMismatch = [
    'vl-map-baselayer', // mismatch tussen bestands- en componentnaam
    'vl-map-baselayer-grb', // mismatch tussen bestands- en componentnaam
    'vl-map-baselayer-grb-gray', // mismatch tussen bestands- en componentnaam
    'vl-map-baselayer-grb-ortho', // mismatch tussen bestands- en componentnaam
];

export const mapWCNameCount = mapWCNames.length;
export const mapWTNameCount = mapWTNames.length;
export const mapWCWithoutWT = mapWCNames.filter((name) => !mapWCMismatch.includes(name) && !mapWTNames.includes(name));
export const mapWTWithoutWC = mapWTNames.filter((name) => !mapWTMismatch.includes(name) && !mapWCNames.includes(name));

// console.log('map - aantal web-components:', mapWCNameCount);
// console.log('map - aantal web-types:', mapWTNameCount);
// console.log('map - web-components waar er geen web-type voor gespecifieerd is', mapWCWithoutWT);
// console.log('map - web-types waar er geen web-component voor bestaat', mapWTWithoutWC);

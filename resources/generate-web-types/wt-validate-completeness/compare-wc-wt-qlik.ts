import { extractQlikWCNames } from './extract-wc-names';
import { extractQlikWTNames } from './extract-wt-names';

const qlikWCNames = extractQlikWCNames();
const qlikWTNames = extractQlikWTNames();
const qlikWCMismatch = [
    'vl-qlik-visual', // hier zou een web-type voor moeten voorzien worden, maar de code kan niet verwerkt worden
];

export const qlikWCNameCount = qlikWCNames.length;
export const qlikWTNameCount = qlikWTNames.length;
export const qlikWCWithoutWT = qlikWCNames.filter(
    (name) => !qlikWCMismatch.includes(name) && !qlikWTNames.includes(name)
);
export const qlikWTWithoutWC = qlikWTNames.filter((name) => !qlikWCNames.includes(name));

// console.log('qlik - aantal web-components:', qlikWCNameCount);
// console.log('qlik - aantal web-types:', qlikWTNameCount);
// console.log('qlik - web-components waar er geen web-type voor gespecifieerd is', qlikWCWithoutWT);
// console.log('qlik - web-types waar er geen web-component voor bestaat', qlikWTWithoutWC);

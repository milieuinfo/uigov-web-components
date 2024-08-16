import { extractElementWCNames } from './extract-wc-names';
import { extractElementWTNames } from './extract-wt-names';

const elementWCNames = extractElementWCNames();
const elementWTNames = extractElementWTNames();
const elementWCIgnore = [
    'base-button', // base utility
    'vl-form-validation', // utility
    'input-addon-base', // base utility
    'link-base', // base utility
    'vl-pattern', // utility
    'base-title', // base utility
    'vl-side-navigation-title', // base class
];
const elementWTMismatch = [
    'vl-form-annotation-span', // in vl-form-annotation.element.ts
    'vl-side-navigation-h1', // in vl-side-navigation.element.ts
    'vl-side-navigation-h2', // in vl-side-navigation.element.ts
    'vl-side-navigation-h3', // in vl-side-navigation.element.ts
    'vl-side-navigation-h4', // in vl-side-navigation.element.ts
    'vl-side-navigation-h5', // in vl-side-navigation.element.ts
    'vl-side-navigation-h6', // in vl-side-navigation.element.ts
];

export const elementWCNameCount = elementWCNames.length;
export const elementWTNameCount = elementWTNames.length;
export const elementWCWithoutWT = elementWCNames.filter(
    (name) => !elementWCIgnore.includes(name) && !elementWTNames.includes(name)
);
export const elementWTWithoutWC = elementWTNames.filter(
    (name) => !elementWTMismatch.includes(name) && !elementWCNames.includes(name)
);

// console.log('elements - aantal web-components:', elementWCNameCount);
// console.log('elements - aantal web-types:', elementWTNameCount);
// console.log('elements - web-components waar er geen web-type voor gespecifieerd is', elementWCWithoutWT);
// console.log('elements - web-types waar er geen web-component voor bestaat', elementWTWithoutWC);

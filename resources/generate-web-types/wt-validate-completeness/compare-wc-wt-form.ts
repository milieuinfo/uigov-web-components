import { extractFormWCNames } from './extract-wc-names';
import { extractFormWTNames } from './extract-wt-names';

const formWCNames = extractFormWCNames();
const formWTNames = extractFormWTNames();

export const formWCNameCount = formWCNames.length;
export const formWTNameCount = formWTNames.length;
export const formWCWithoutWT = formWCNames.filter((name) => !formWTNames.includes(name));
export const formWTWithoutWC = formWTNames.filter((name) => !formWCNames.includes(name));

// console.log('form - aantal web-components:', formWCNameCount);
// console.log('form - aantal web-types:', formWTNameCount);
// console.log('form - web-components waar er geen web-type voor gespecifieerd is', formWCWithoutWT);
// console.log('form - web-types waar er geen web-component voor bestaat', formWTWithoutWC);

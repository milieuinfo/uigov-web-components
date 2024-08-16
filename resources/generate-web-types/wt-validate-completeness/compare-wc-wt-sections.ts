import { extractSectionWCNames } from './extract-wc-names';
import { extractSectionWTNames } from './extract-wt-names';

const sectionWCNames = extractSectionWCNames();
const sectionWTNames = extractSectionWTNames();

export const sectionWCNameCount = sectionWCNames.length;
export const sectionWTNameCount = sectionWTNames.length;
export const sectionWCWithoutWT = sectionWCNames.filter((name) => !sectionWTNames.includes(name));
export const sectionWTWithoutWC = sectionWTNames.filter((name) => !sectionWCNames.includes(name));

// console.log('sections - aantal web-components:', sectionWCNameCount);
// console.log('sections - aantal web-types:', sectionWTNameCount);
// console.log('sections - web-components waar er geen web-type voor gespecifieerd is', sectionWCWithoutWT);
// console.log('sections - web-types waar er geen web-component voor bestaat', sectionWTWithoutWC);

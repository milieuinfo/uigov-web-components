import { extractSectionWCNames } from './extract-wc-names';
import { extractSectionWTNames } from './extract-wt-names';

const sectionWCNames = extractSectionWCNames();
const sectionWTNames = extractSectionWTNames();

const sectionWCDeprecated = [];

const sectionWCMismatch = [];

const sectionWTMismatch = [];

console.log('sections - aantal web-components:', sectionWCNames.length);

console.log('sections - aantal web-types:', sectionWTNames.length);

console.log(
    'sections - web-components waar er geen web-type voor gespecifieerd is',
    sectionWCNames.filter(
        (name) =>
            !sectionWCDeprecated.includes(name) && !sectionWCMismatch.includes(name) && !sectionWTNames.includes(name)
    )
);

console.log(
    'sections - web-types waar er geen web-component voor bestaat',
    sectionWTNames.filter((name) => !sectionWTMismatch.includes(name) && !sectionWCNames.includes(name))
);

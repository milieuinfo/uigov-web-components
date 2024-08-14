import { extractQlikWCNames } from './extract-wc-names';
import { extractQlikWTNames } from './extract-wt-names';

const qlikWCNames = extractQlikWCNames();
const qlikWTNames = extractQlikWTNames();

const qlikWCMismatch = [
    'vl-qlik-visual', // hier zou een web-type voor moeten voorzien worden, maar de code kan niet verwerkt worden
];

console.log('qlik - aantal web-components:', qlikWCNames.length);

console.log('qlik - aantal web-types:', qlikWTNames.length);

console.log(
    'qlik - web-components waar er geen web-type voor gespecifieerd is',
    qlikWCNames.filter((name) => !qlikWCMismatch.includes(name) && !qlikWTNames.includes(name))
);

console.log(
    'qlik - web-types waar er geen web-component voor bestaat',
    qlikWTNames.filter((name) => !qlikWCNames.includes(name))
);

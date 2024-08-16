import componentsWebTypes from '../../../libs/components/components.web-types.json';
import elementsWebTypes from '../../../libs/elements/elements.web-types.json';
import formWebTypes from '../../../libs/form/form.web-types.json';
import mapWebTypes from '../../../libs/map/map.web-types.json';
import qlikWebTypes from '../../../libs/qlik/qlik.web-types.json';
import sectionsWebTypes from '../../../libs/sections/sections.web-types.json';

const extractWTNames = (webTypes: { contributions: any }): string[] =>
    webTypes.contributions.html.elements.map((element: any) => element.name);

export const extractComponentWTNames = () => extractWTNames(componentsWebTypes);

export const extractElementWTNames = () => extractWTNames(elementsWebTypes);

export const extractFormWTNames = () => extractWTNames(formWebTypes);

export const extractMapWTNames = () => extractWTNames(mapWebTypes);

export const extractQlikWTNames = () => extractWTNames(qlikWebTypes);

export const extractSectionWTNames = () => extractWTNames(sectionsWebTypes);

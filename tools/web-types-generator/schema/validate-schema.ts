import componentsWebTypes from '../../../libs/components/components.web-types.json';
import elementsWebTypes from '../../../libs/elements/elements.web-types.json';
import formWebTypes from '../../../libs/form/form.web-types.json';
import mapWebTypes from '../../../libs/map/map.web-types.json';
import qlikWebTypes from '../../../libs/qlik/qlik.web-types.json';
import sectionsWebTypes from '../../../libs/sections/sections.web-types.json';
import webTypesSchema from './web-types.json';

var ZSchema = require('z-schema');
var validator = new ZSchema();

console.log('components - schema valid:', validator.validate(componentsWebTypes, webTypesSchema));
console.log('components - schema errors', validator.getLastErrors());

console.log('elements - schema valid:', validator.validate(elementsWebTypes, webTypesSchema));
console.log('elements - schema errors', validator.getLastErrors());

console.log('form - schema valid:', validator.validate(formWebTypes, webTypesSchema));
console.log('form - schema errors', validator.getLastErrors());

console.log('map - schema valid:', validator.validate(mapWebTypes, webTypesSchema));
console.log('map - schema errors', validator.getLastErrors());

console.log('qlik - schema valid:', validator.validate(qlikWebTypes, webTypesSchema));
console.log('qlik - schema errors', validator.getLastErrors());

console.log('sections - schema valid:', validator.validate(sectionsWebTypes, webTypesSchema));
console.log('sections - schema errors', validator.getLastErrors());

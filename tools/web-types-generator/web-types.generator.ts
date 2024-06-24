import { CATEGORIES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import * as fs from 'fs-extra';
import { componentsWebTypes } from './libs/components.web-types';
import { elementsWebTypes } from './libs/elements.web-types';
import { formWebTypes } from './libs/form.web-types';
import { qlikWebTypes } from './libs/qlik.web-types';
import { sectionsWebTypes } from './libs/sections.web-types';
import {
    WTComponent,
    WTComponentList,
    WTElement,
    WTElementAttribute,
    WTElementArray,
    WTElementProperty,
    WTElementSlot,
    WTElementEvent,
} from './web-types.model';
import { mapWebTypes } from './libs/map.web-types';

const templateFileLocation: string = 'web-types.template';

const docUrl = `https://milieuinfo.github.io/uigov-builds/release/$VERSION/storybook/?path=$STORYBOOK-PATH`;

const readTemplateFile = () => fs.readFileSync(templateFileLocation).toString();

const buildDocUrl = (version: string, storyBookPath: string) =>
    docUrl.replace('$VERSION', version).replace('$STORYBOOK-PATH', storyBookPath);

const extractDocFileDescription = (component: string, docFile: string): string => {
    console.log(component + ' - process docFile');
    const lines: string[] = docFile.split(/\n/);
    let firstHashLine = false;
    let description = '';
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!firstHashLine && line.startsWith('#')) {
            firstHashLine = true;
            // de eerste lijn met een # bevat een titel, deze maakt geen deel uit van de omschrijving
            continue;
        }
        if (firstHashLine) {
            // bij de tweede lijn met een # stopt de omschrijving
            if (line.startsWith('#')) {
                // de witruimte voor- en achteraan verwijderen
                description = description.trim();
                // de omschrijving is volledig
                break;
            }
            // als we hier zitten de omschrijving uitbreiden
            description += lines[i] + '\n';
        }
    }
    return description;
};

const buildWTElementAttribute = (key: string, argTypes: ArgTypes): WTElementAttribute => ({
    name: argTypes[key].name,
    description: argTypes[key].description,
    default: argTypes[key].defaultValue,
});

const buildWTElementSlot = (key: string, argTypes: ArgTypes): WTElementSlot => ({
    name: argTypes[key].name,
    description: argTypes[key].description,
    default: argTypes[key].defaultValue,
});

const buildWTElementProperty = (key: string, argTypes: ArgTypes): WTElementProperty => ({
    name: argTypes[key].name,
    type: argTypes[key]?.table?.type?.summary ?? '',
    description: argTypes[key].description,
    default: argTypes[key].defaultValue,
});

const buildWTElementEvent = (key: string, argTypes: ArgTypes): WTElementEvent => ({
    name: argTypes[key].name,
    type: argTypes[key]?.table?.type?.summary ?? '',
    description: argTypes[key].description,
});

const minimalWTElement = (wtComponent: WTComponent): WTElement => {
    let wtElement: WTElement = {
        name: wtComponent.componentName,
    };
    if (wtComponent?.storiesDocFile) {
        const componentDescription = extractDocFileDescription(
            wtComponent.componentName,
            fs.readFileSync(wtComponent.storiesDocFile).toString()
        );
        if (componentDescription) {
            wtElement.description = componentDescription;
        }
    }
    const docUrl = buildDocUrl('TODO', wtComponent.storybookPath);
    if (docUrl) {
        wtElement['doc-url'] = docUrl;
    }
    return wtElement;
};

const buildWTElement = (wtComponent: WTComponent): WTElement => {
    console.log(wtComponent.componentName + ' - build web-types');
    let wtElement = minimalWTElement(wtComponent);
    if (wtComponent?.argTypes) {
        // add the attributes
        const argTypes = wtComponent.argTypes;
        const wtElementAttributeArray = Object.keys(argTypes)
            .filter((key) => argTypes[key].table?.category === CATEGORIES.ATTRIBUTES)
            .map((key) => buildWTElementAttribute(key, argTypes));
        if (wtElementAttributeArray) {
            wtElement.attributes = wtElementAttributeArray;
        }
        // add the slots
        const wtElementSlotArray = Object.keys(argTypes)
            .filter((key) => argTypes[key].table?.category === CATEGORIES.SLOTS)
            .map((key) => buildWTElementSlot(key, argTypes));
        if (wtElementSlotArray && wtElementSlotArray.length > 0) {
            wtElement.slots = wtElementSlotArray;
        }
        // add the properties
        const wtElementPropertyArray = Object.keys(argTypes)
            .filter((key) => argTypes[key].table?.category === CATEGORIES.PROPERTIES)
            .map((key) => buildWTElementProperty(key, argTypes));
        if (wtElementPropertyArray && wtElementPropertyArray.length > 0) {
            wtElement.js = { ...wtElement.js, properties: wtElementPropertyArray };
        }
        // add the events
        const wtElementEventArray = Object.keys(argTypes)
            .filter((key) => argTypes[key].table?.category === CATEGORIES.EVENTS)
            .map((key) => buildWTElementEvent(key, argTypes));
        if (wtElementEventArray && wtElementEventArray.length > 0) {
            wtElement.js = { ...wtElement.js, events: wtElementEventArray };
        }
    }
    return wtElement;
};

const generateWebTypesFile = (artifact: string, wtComponentList: WTComponentList) => {
    console.log('--------------------------------------------------');
    console.log(artifact + ' - building web-types file');
    console.log('--------------------------------------------------');
    const wtElementList: WTElementArray = wtComponentList.map((wtComponent) => buildWTElement(wtComponent));
    let templateFile = readTemplateFile();
    templateFile = templateFile.replace('$VERSION', '1.35.0');
    const fileName = '../../dist/generated/' + artifact + '.web-types.json';
    fs.createFileSync(fileName);
    templateFile = templateFile.replace('$ELEMENTS', JSON.stringify(wtElementList, null, 4));
    templateFile = JSON.stringify(JSON.parse(templateFile), null, 4);
    fs.writeFileSync(fileName, templateFile);
    console.log('--------------------------------------------------\n');
};

generateWebTypesFile('components', componentsWebTypes);
generateWebTypesFile('elements', elementsWebTypes);
generateWebTypesFile('form', formWebTypes);
generateWebTypesFile('map', mapWebTypes);
generateWebTypesFile('qlik', qlikWebTypes);
generateWebTypesFile('sections', sectionsWebTypes);

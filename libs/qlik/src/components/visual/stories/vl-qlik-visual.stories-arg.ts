import {ArgTypes} from '@storybook/web-components';
import {CATEGORIES, logStorybookEvent, TYPES} from '@domg-wc/common-storybook';
import {TYPES as NEBULA_TYPES} from "@domg/qlik-lib";

export const qlikVisualArgs = {
    type: '',
    qlikId: '',
    height: '',
    width: '',
    additionalStyle: '',
    properties: null,
    stardust: null,
    visualChanged: logStorybookEvent('changed')
};

export const qlikVisualArgTypes: ArgTypes<typeof qlikVisualArgs> = {
    type: {
        name: 'type',
        description: 'Het type visualisatie.',
        control: {
            type: 'select',
            options: NEBULA_TYPES.map(t => t.name),
        },
        table: {
            type: {summary: TYPES.STRING},
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: {summary: qlikVisualArgs.type},
        },
    },
    qlikId: {
        name: 'qlik-id',
        description:
            'Het object id van de visualisatie in Qlik.',
        table: {
            type: {summary: TYPES.STRING},
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: {summary: qlikVisualArgs.qlikId},
        },
    },
    height: {
        name: 'height',
        description:
            'De hoogte van de visualisatie.',
        table: {
            type: {summary: TYPES.STRING},
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: {summary: qlikVisualArgs.height},
        },
    },
    width: {
        name: 'width',
        description:
            'De breedte van de visualisatie.',
        table: {
            type: {summary: TYPES.STRING},
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: {summary: qlikVisualArgs.width},
        },
    },
    additionalStyle: {
        name: 'additional-style',
        description: 'Styling die meegegeven kan worden om op de div te zetten in de shadowroot waarin de visualisatie gerendered wordt.',
        table: {
            type: {summary: TYPES.STRING},
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: {summary: qlikVisualArgs.additionalStyle},
        },
    },
    properties: {
        name: 'properties',
        description: 'Properties die aan een visualisatie kunnen meegegeven worden. Zoals <code>{"dataPoint": {"bubbleScales": 50}}</code> voor distributionplot.',
        table: {
            type: {summary: 'qlik.EngineAPI.IGenericObjectProperties'},
            category: CATEGORIES.PROPERTIES,
            defaultValue: {summary: qlikVisualArgs.properties},
        },
    },
    stardust: {
        name: 'stardust',
        description: 'Het stardust.Embed object dat gebruikt wordt om de visualisatie te renderen.',
        table: {
            type: {summary: 'stardust.Embed'},
            category: CATEGORIES.PROPERTIES,
            defaultValue: {summary: qlikVisualArgs.stardust},
        },
    },
    visualChanged: {
        name: 'visual-changed',
        description: 'Afgevuurd wanneer de achterliggende visualisatie verandert, door interactie met de visuals.',
        table: {
            type: {summary: '-'},
            category: CATEGORIES.EVENTS,
        },
    }
};

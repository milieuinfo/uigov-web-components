import { CATEGORIES, defaultArgs, defaultArgTypes, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { CASCADER_SLOTS } from '../vl-cascader.model';
import { action } from '@storybook/addon-actions';
import { cascaderDefaults } from '../vl-cascader.component';

export type CascaderArgs = typeof cascaderDefaults &
    typeof defaultArgs & {
        contentSlot: string;
        labelSlot: string;
        homeSlot: string;
        headerSlot: string;
        onVlClickBreadcrumb: () => void;
    };

export const cascaderArgs: CascaderArgs = {
    ...defaultArgs,
    ...cascaderDefaults,
    contentSlot: '',
    labelSlot: '',
    homeSlot: '',
    headerSlot: '',
    onVlClickBreadcrumb: action('vl-click-breadcrumb'),
};

export const cascaderArgTypes: ArgTypes<CascaderArgs> = {
    ...defaultArgTypes(true),
    annotation: {
        name: 'annotation',
        description:
            'Annotation attribuut op de `vl-cascader-item` component. Dit bepaalt de ondertitel in de breadcrumb navigatie.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.CHILD_ATTRIBUTES,
            defaultValue: { summary: cascaderArgs.annotation },
        },
        type: { name: TYPES.STRING },
    },
    headerText: {
        name: 'header-text',
        description: 'Hiermee kan je de tekst instellen voor de header.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: cascaderArgs.headerText,
        },
    },
    headerSlot: {
        name: CASCADER_SLOTS.HEADER,
        description: 'Hiermee kan je de standaard header vervangen door een header naar keuze.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: cascaderArgs.headerSlot,
        },
    },
    breadcrumbPlaceholder: {
        name: CASCADER_SLOTS.BREADCRUMB_PLACEHOLDER,
        description:
            'Hiermee kan je een breadcrumb placeholder instellen. Zichtbaar wanneer breadcrumb niet zichtbaar is.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: cascaderArgs.breadcrumbPlaceholder },
        },
    },
    contentSlot: {
        name: CASCADER_SLOTS.CONTENT,
        description: 'Element op de `vl-cascader-item` component. Komt onder het label.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.CHILD_SLOTS,
            defaultValue: { summary: cascaderArgs.contentSlot },
        },
    },
    level: {
        name: 'level',
        description:
            'Huidige niveau in de hiërarchie.\n\nDit attribuut kan je aanpassen om terug te gaan naar een lager niveau.',
        table: {
            type: { summary: TYPES.NUMBER },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: cascaderArgs.level },
        },
    },
    homeSlot: {
        name: CASCADER_SLOTS.HOME,
        description: 'Hiermee kan je het `' + CASCADER_SLOTS.HOME + '`-slot instellen.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.SLOTS,
            defaultValue: { summary: cascaderArgs.homeSlot },
        },
    },
    hideBreadcrumb: {
        name: 'hide-breadcrumb',
        description: 'Verbergt breadcrumb navigatie.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: cascaderArgs.hideBreadcrumb },
        },
    },
    loading: {
        name: 'loading',
        description: 'Geeft weer dat data wordt geladen. Is reactief.',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: cascaderArgs.loading },
        },
    },
    itemListFn: {
        name: 'itemListFn',
        description:
            'Laat toe om een promise mee te geven wanneer dynamisch data moet opgehaald. Dit werkt enkel in combinatie met de `nodes`-property waarbij `requestParams` ingesteld staan.\n\nKan niet aangepast worden in Storybook. \n\n Raadpleeg de [documentatie](?path=/docs/components-next-cascader--cascader-default#cascader-met-dynamisch-ophalen-van-kind-elementen) voor meer info.',
        control: false,
        table: {
            disable: true,
            type: { summary: TYPES.FUNCTION },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: cascaderArgs.itemListFn },
        },
    },
    items: {
        name: 'nodes',
        description:
            'Om de data-structuur van de cascader programmatorisch in te stellen.\n\n Raadpleeg [documentatie](?path=/docs/components-next-cascader--cascader-property-binding#cascader-met-property-binding) voor meer info.',
        table: {
            disable: true,
            type: { summary: TYPES.ARRAY },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: cascaderArgs.items },
        },
    },
    label: {
        name: 'label',
        description:
            'Label attribuut op de `vl-cascader-item` component. Dit bepaalt ook het label in de breadcrumb navigatie.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.CHILD_ATTRIBUTES,
            defaultValue: { summary: cascaderArgs.label },
        },
        type: { name: TYPES.STRING, required: true },
    },
    labelSlot: {
        name: CASCADER_SLOTS.LABEL,
        description:
            'Label slot op de `vl-cascader-item` component. Klik op deze inhoud zal de kind elementen weergeven.',
        table: {
            type: { summary: TYPES.HTML },
            category: CATEGORIES.CHILD_SLOTS,
            defaultValue: { summary: cascaderArgs.labelSlot },
        },
    },
    loadingMessage: {
        name: 'loading-message',
        description: 'De boodschap die getoond wordt wanneer items aan het laden zijn.',
        table: {
            type: { summary: TYPES.STRING },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: cascaderArgs.loadingMessage },
        },
    },
    templates: {
        name: 'templates',
        description:
            'Laat toe om alternatieve templates for de cascader-items in te stellen.\n\nKan niet aangepast worden in Storybook.\n\n Raadpleeg [documentatie](?path=/docs/components-next-cascader--cascader-dynamic-templating#dynamische-templates) voor meer info.',
        control: false,
        table: {
            disable: true,
            type: { summary: TYPES.MAP },
            category: CATEGORIES.PROPERTIES,
            defaultValue: { summary: cascaderArgs.templates },
        },
    },
    onVlClickBreadcrumb: {
        name: 'vl-click-breadcrumb',
        description:
            'Event dat afgevuurd wordt als op een breadcrumb item wordt geklikt.<br>Het detail object van het event bevat het gekozen niveau en het label van de breadcrumb.',
        table: {
            type: { summary: '{ index: number, label?: string }' },
            category: CATEGORIES.EVENTS,
        },
    },
};
import { VlSelect } from '@domg-wc/elements';

export interface Filter {
    id: string;
    filter: FilterObj;
}

interface FilterObj {
    name: string;
    fieldQualifier: string;
    field: string;
    nrOfValues: number;
}

export interface DashboardVisualization {
    type: string;
    id: string;
    height: string;
    width?: string;
    label: string;
    'align-label'?: string;
    'align-visual'?: string;
    colSize?: number;
    properties?: object;
    options?: object;
}

export interface InfoblockVisualization {
    title: string;
    icon: string;
    type: string;
    id: string;
    height: string;
    width?: string;
    align: string;
    colSize?: number;
    properties?: object;
    visuals?: InfoblockVisualization[][];
}

export interface Views {
    [key: string]: {
        order: number;
        label: string;
        visualisations: DashboardVisualization[][];
    };
}

export interface BindSelectConfig {
    component: VlSelect;
    choices: SelectChoice[];
    selectedChoices: string[];
    sortFilter?: (a, b) => -1 | 0 | 1;
    placeholder?: string;
}

export interface SelectChoice {
    label: string;
    value: string;
    disabled?: boolean;
    placeholder?: boolean;
    selected?: boolean;
}

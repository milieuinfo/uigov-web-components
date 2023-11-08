import {VlSelect} from "@domg-wc/elements";

export type Filter = {
    id: string,
    filter: FilterObj
}

type FilterObj = {
    name: string,
    fieldQualifier: string,
    field: string,
    nrOfValues: number
}

export type DashboardVisualization = {
    type: string,
    id: string,
    height: string,
    width?: string,
    label: string,
    "align-label"?: string,
    "align-visual"?: string,
    colSize?: number,
    properties?: object,
    options?: object
}

export type InfoblockVisualization = {
    title: string,
    icon: string,
    type: string,
    id: string,
    height: string,
    width?: string,
    align: string,
    colSize?: number,
    properties?: object
    visuals?: Array<Array<InfoblockVisualization>>
}

export type Views = {
    [key: string]: {
        order: number
        label: string,
        visualisations: Array<Array<DashboardVisualization>>
    },
}

export type BindSelectConfig = {
    component: VlSelect,
    choices: Array<SelectChoice>,
    selectedChoices: Array<string>,
    sortFilter?: (a,b) => -1 | 0 | 1,
    placeholder?: string,
}

export type SelectChoice = {
    label: string,
    value: string,
    disabled?: boolean,
    placeholder?: boolean,
    selected?: boolean
}

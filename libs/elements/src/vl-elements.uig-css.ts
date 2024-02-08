import 'construct-style-sheets-polyfill';
import { UigConfig } from '@domg-wc/common-utilities';

// @govflanders common styles
import {
    accessibilityStyle,
    alignStyle,
    backgroundStyle,
    baseStyle,
    elementStyle,
    gridStyle,
    layoutStyle,
    resetStyle,
    typographyStyle as commonTypographyStyle,
    visibilityStyle,
} from '@domg/govflanders-style/common';
// @govflanders component styles
import {
    actionGroupStyle,
    buttonStyle,
    dataTableStyle,
    doormatStyle,
    formMessageStyle,
    formStructureStyle,
    iconStyle,
    imageStyle,
    infotextStyle,
    inputAddonStyle,
    inputFieldStyle,
    inputGroupStyle,
    introductionStyle,
    linkListStyle,
    linkStyle,
    multiselectStyle,
    pillInputStyle,
    pillStyle,
    popoverStyle,
    propertiesStyle,
    searchFilterStyle,
    searchResultsStyle,
    selectStyle,
    sideNavigationStyle,
    textareaStyle,
    titlesStyle,
    toasterStyle,
    tooltipStyle,
    typographyStyle as componentTypographyStyle,
    videoPlayerStyle,
} from '@domg/govflanders-style/component';
import { CSSResult } from 'lit';
// @uig element styles
import { default as actionGroupUigStyle } from './action-group/vl-action-group.uig-css';
import { default as bodyUigStyle } from './body/vl-body.uig-css';
import { default as buttonUigStyle } from './button/vl-button.uig-css';
import { default as dataTableUigStyle } from './data-table/vl-data-table.uig-css';
import { default as iconUigStyle } from './icon/vl-icon.uig-css';
// import { default as linkUigStyle } from './link/vl-link.uig-css';
import { default as multiselectUigStyle } from './multiselect/vl-multiselect.uig-css';
import { default as selectUigStyle } from './select/vl-select.uig-css';
import { default as sideNavigationUigStyle } from './side-navigation/vl-side-navigation.uig-css';

const commonStyles: CSSResult[] = [
    resetStyle,
    accessibilityStyle,
    alignStyle,
    baseStyle,
    elementStyle,
    gridStyle,
    layoutStyle,
    commonTypographyStyle,
    visibilityStyle,
    backgroundStyle,
];

const componentStyles: CSSResult[] = [
    actionGroupStyle,
    buttonStyle,
    dataTableStyle,
    doormatStyle,
    formMessageStyle,
    formStructureStyle,
    iconStyle,
    infotextStyle,
    imageStyle,
    inputAddonStyle,
    inputFieldStyle,
    inputGroupStyle,
    introductionStyle,
    linkStyle,
    linkListStyle,
    pillStyle,
    pillInputStyle,
    selectStyle,
    multiselectStyle,
    popoverStyle,
    propertiesStyle,
    searchFilterStyle,
    searchResultsStyle,
    sideNavigationStyle,
    textareaStyle,
    toasterStyle,
    titlesStyle,
    componentTypographyStyle,
    videoPlayerStyle,
    // tooltip styling needs to be known outside the shadow root of tooltip itself
    tooltipStyle,
];

const elementUigStyles: CSSResult[] = [
    actionGroupUigStyle,
    bodyUigStyle,
    buttonUigStyle,
    dataTableUigStyle,
    iconUigStyle,
    multiselectUigStyle,
    selectUigStyle,
    sideNavigationUigStyle,
];

export const allElementStyles = [...commonStyles, ...componentStyles, ...elementUigStyles] as CSSResult[];

export default allElementStyles;

class RegisterStyles {
    static elementStylesRegistered = false;

    static registerElementsStyles() {
        if (UigConfig.getPreferences().autoRegisterStyles && !this.elementStylesRegistered) {
            document.adoptedStyleSheets = [
                ...document.adoptedStyleSheets,
                ...(allElementStyles.map((style) => style.styleSheet) as CSSStyleSheet[]),
            ];
            this.elementStylesRegistered = true;
            console.log('RegisterStyles: element-styling toegevoegd aan het document');
        }
    }
}

type Constructor<T> = {
    new (...args: any[]): T;
};

export type CustomElementDecorator = {
    // legacy
    (cls: any): void;
    // standard
    (target: any, context: ClassDecoratorContext<Constructor<HTMLElement>>): void;
};

export const elementStyles =
    (): CustomElementDecorator => (classOrTarget: any, context?: ClassDecoratorContext<Constructor<HTMLElement>>) => {
        if (context !== undefined) {
            context.addInitializer(() => {
                RegisterStyles.registerElementsStyles();
            });
        } else {
            RegisterStyles.registerElementsStyles();
        }
    };

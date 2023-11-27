import 'construct-style-sheets-polyfill';
import { CSSResult } from 'lit';

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

// @govflanders component styles
import {
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
    typographyStyle as componentTypographyStyle,
    videoPlayerStyle,
    tooltipStyle,
} from '@domg/govflanders-style/component';

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
    static initialised = false;
    static autoRegisterStyles = true;
    static elementStylesRegistered = false;

    static initialise() {
        if (RegisterStyles.initialised) return;
        for (const script of document.scripts) {
            if (script.src.indexOf('domg-wc') >= 0 && script.getAttribute('auto-register-styles') === 'false') {
                RegisterStyles.autoRegisterStyles = false;
                console.log('RegisterStyles: element-styling wordt niet toegevoegd aan het document');
            }
        }
        RegisterStyles.initialised = true;
    }

    static registerElementsStyles() {
        RegisterStyles.initialise();
        if (RegisterStyles.autoRegisterStyles && !RegisterStyles.elementStylesRegistered) {
            document.adoptedStyleSheets = [
                ...document.adoptedStyleSheets,
                ...(allElementStyles.map((style) => style.styleSheet) as CSSStyleSheet[]),
            ];
            RegisterStyles.elementStylesRegistered = true;
            console.log('RegisterStyles: element-styling toegevoegd aan het document');
        }
    }
}

export const elementStyles =
    () =>
    // eslint-disable-next-line @typescript-eslint/ban-types
    (constructor: Function): any => {
        RegisterStyles.registerElementsStyles();
    };

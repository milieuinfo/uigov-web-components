interface CSSVariableList {
    [key: string]: { value: string; computedValue: string; referencedVar?: string };
}

/**
 * Met `extractCSSVariables` haal je alle CSS-variabelen op die in de huidige pagina worden gebruikt. De waarden van de
 * variabelen worden berekend en opgeslagen in een object. Dit object bevat de naam van de variabele als key en een
 * object met de waarde en de berekende waarde als value.
 */
export const extractCSSVariables = () => {
    // Haal alle styles op
    const styleSheets = document.styleSheets;
    // Alle CSS-variabelen oplijsten in een object
    const cssVariableList = listCssVariables(styleSheets);
    // Nadat de CSS-variabelen zijn opgehaald, bereken hun waarden
    return processCssVariablesMapping(cssVariableList);
};

const extractCssVariablesFromCssRules = (sheet: CSSStyleSheet, cssVariableList: CSSVariableList) => {
    for (const rule of sheet.cssRules) {
        if (rule instanceof CSSStyleRule && rule.selectorText === ':root') {
            // Splits de regel in afzonderlijke declaraties
            const declarations = rule.style.cssText.split(';');
            for (const declaration of declarations) {
                const [prop, value] = declaration.split(':').map((part) => part.trim());
                if (prop.startsWith('--')) {
                    cssVariableList[prop] = { value, computedValue: '' };
                    // Controleer of de waarde verwijst naar een andere CSS-variabele
                    const varMatch = value.match(/var\((--[^)]+)\)/);
                    if (varMatch) {
                        cssVariableList[prop].referencedVar = varMatch[1];
                    }
                }
            }
        }
    }
};

const listCssVariables = (styleSheets: StyleSheetList): CSSVariableList => {
    const cssVariableList: CSSVariableList = {};

    for (const sheet of styleSheets) {
        try {
            // Loop door alle CSS-regels in elk stylesheet
            extractCssVariablesFromCssRules(sheet as CSSStyleSheet, cssVariableList);
        } catch (e) {
            console.warn(`Couldn't access rules from ${sheet.href}`, e);
        }
    }

    return cssVariableList;
};

const applyCssVariableStyle = (tempElement: HTMLDivElement, cssVariableName: string) => {
    // We moeten de variabelen toepassen op verschillende eigenschappen in een bestaand element om de berekende waarde te verkrijgen
    if (cssVariableName.includes('font-size')) {
        tempElement.style.fontSize = `var(${cssVariableName})`;
    } else if (cssVariableName.includes('color')) {
        tempElement.style.color = `var(${cssVariableName})`;
    } else if (
        cssVariableName.includes('spacing') ||
        cssVariableName.includes('margin') ||
        cssVariableName.includes('padding')
    ) {
        tempElement.style.marginTop = `var(${cssVariableName})`;
    } else if (cssVariableName.includes('border-radius')) {
        tempElement.style.borderRadius = `var(${cssVariableName})`;
    } else if (cssVariableName.includes('font')) {
        tempElement.style.fontFamily = `var(${cssVariableName})`;
    } else if (cssVariableName.includes('line-height')) {
        tempElement.style.fontFamily = `var(${cssVariableName})`;
    }
};

const mapComputedStyleForCssVariable = (
    computedStyle: CSSStyleDeclaration,
    cssVariableName: string,
    cssVariableList: CSSVariableList
) => {
    if (cssVariableName.includes('font-size')) {
        cssVariableList[cssVariableName].computedValue = computedStyle.fontSize;
    } else if (cssVariableName.includes('color')) {
        cssVariableList[cssVariableName].computedValue = computedStyle.color;
    } else if (
        cssVariableName.includes('spacing') ||
        cssVariableName.includes('margin') ||
        cssVariableName.includes('padding')
    ) {
        cssVariableList[cssVariableName].computedValue = computedStyle.marginTop;
    } else if (cssVariableName.includes('border-radius')) {
        cssVariableList[cssVariableName].computedValue = computedStyle.borderRadius;
    } else if (cssVariableName.includes('font')) {
        cssVariableList[cssVariableName].computedValue = computedStyle.fontFamily;
    } else if (cssVariableName.includes('line-height')) {
        cssVariableList[cssVariableName].computedValue = computedStyle.lineHeight;
    }
};

const processCssVariablesMapping = (cssVariableList: CSSVariableList) => {
    return Object.entries(cssVariableList).reduce((value, [cssVariableName]) => {
        // Maak een tijdelijk element aan om CSS Styles te kunnen toepassen
        const tempElement = document.createElement('div');
        document.body.appendChild(tempElement);
        // We moeten de variabelen toepassen op verschillende eigenschappen in een bestaand HTML-element,
        // zodat we per CSS variabele, de relevante CSS computedStyle kunnen verkrijgen
        applyCssVariableStyle(tempElement, cssVariableName);

        const computedStyle = getComputedStyle(tempElement);
        // Voor alle CSS variabelen, map per CSS variable, de computedStyle
        mapComputedStyleForCssVariable(computedStyle, cssVariableName, cssVariableList);
        // Verwijder het tijdelijke element
        document.body.removeChild(tempElement);
        return cssVariableList;
    }, cssVariableList);
};

/**
 * Met `extractCSSVariables` haal je alle CSS-variabelen op die in de huidige pagina worden gebruikt. De waarden van de
 * variabelen worden berekend en opgeslagen in een object. Dit object bevat de naam van de variabele als key en een
 * object met de waarde en de berekende waarde als value.
 */
export const extractCSSVariables = () => {
    const cssVariables: { [key: string]: { value: string; computedValue: string; referencedVar?: string } } = {};

    // Haal alle styles op
    const styleSheets = document.styleSheets;

    for (const sheet of styleSheets) {
        try {
            // Loop door alle CSS-regels in elk stylesheet
            for (const rule of sheet.cssRules) {
                if (rule instanceof CSSStyleRule && rule.selectorText === ':root') {
                    // Splits de regel in afzonderlijke declaraties
                    const declarations = rule.style.cssText.split(';');
                    for (const declaration of declarations) {
                        const [prop, value] = declaration.split(':').map((part) => part.trim());
                        if (prop.startsWith('--')) {
                            cssVariables[prop] = { value, computedValue: '' };
                            // Controleer of de waarde verwijst naar een andere CSS-variabele
                            const varMatch = value.match(/var\((--[^)]+)\)/);
                            if (varMatch) {
                                cssVariables[prop].referencedVar = varMatch[1];
                            }
                        }
                    }
                }
            }
        } catch (e) {
            console.warn(`Couldn't access rules from ${sheet.href}`, e);
        }
    }

    // Nadat de CSS-variabelen zijn opgehaald, bereken hun waarden
    for (const prop in cssVariables) {
        const tempElement = document.createElement('div');
        document.body.appendChild(tempElement);

        // We moeten de variabelen toepassen op verschillende eigenschappen om de berekende waarde te verkrijgen
        if (prop.includes('font-size')) {
            tempElement.style.fontSize = `var(${prop})`;
        } else if (prop.includes('color')) {
            tempElement.style.color = `var(${prop})`;
        } else if (prop.includes('spacing') || prop.includes('margin') || prop.includes('padding')) {
            tempElement.style.marginTop = `var(${prop})`;
        } else if (prop.includes('border-radius')) {
            tempElement.style.borderRadius = `var(${prop})`;
        } else if (prop.includes('font')) {
            tempElement.style.fontFamily = `var(${prop})`;
        } else if (prop.includes('line-height')) {
            tempElement.style.fontFamily = `var(${prop})`;
        }

        const computedStyle = getComputedStyle(tempElement);

        if (prop.includes('font-size')) {
            cssVariables[prop].computedValue = computedStyle.fontSize;
        } else if (prop.includes('color')) {
            cssVariables[prop].computedValue = computedStyle.color;
        } else if (prop.includes('spacing') || prop.includes('margin') || prop.includes('padding')) {
            cssVariables[prop].computedValue = computedStyle.marginTop;
        } else if (prop.includes('border-radius')) {
            cssVariables[prop].computedValue = computedStyle.borderRadius;
        } else if (prop.includes('font')) {
            cssVariables[prop].computedValue = computedStyle.fontFamily;
        } else if (prop.includes('line-height')) {
            cssVariables[prop].computedValue = computedStyle.lineHeight;
        }

        document.body.removeChild(tempElement);
    }

    return cssVariables;
};

/**
 * Bereken de hoogte van een regel tekst op basis van de font-size in px (bv. 40px) en de line-height. (bv. 1.5)
 * @param fontSize
 * @param lineHeight
 */
export const calculateComputedLineHeight = (fontSize: string, lineHeight: string) => {
    const fontSizeValue = fontSize.replace('px', '');
    const fontSizeNumber = parseFloat(fontSizeValue);
    const lineHeightNumber = parseFloat(lineHeight);
    return `${Math.ceil(fontSizeNumber * lineHeightNumber * 100) / 100}px`;
};

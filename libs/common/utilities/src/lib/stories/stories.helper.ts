import * as prettier from 'prettier/standalone';
import * as prettierBabel from 'prettier/parser-babel';

export const CATEGORIES = {
    ATTRIBUTES: 'Attributes',
    PROPERTIES: 'Properties',
    EVENTS: 'Events',
    SLOTS: 'Slots',
    CHILD_ATTRIBUTES: 'Child attributes',
} as const;

export const TYPES = {
    BOOLEAN: 'boolean',
    STRING: 'string',
    NUMBER: 'number',
    HTML: 'html',
    URL: 'url',
    FUNCTION: 'function',
} as const;

export const filterOutClasses = (input: string) => {
    return input?.replace(/ class=".*?"/, '');
};

export const formatHTML = (input: string) => {
    // Wordt gewrapped in een try-catch block omdat Lit-Html self-closing tags vertaalt naar void-elements, Prettier kan hier niet mee overweg.
    // E.g. <input /> wordt door Lit-Html vertaald naar <input>.
    try {
        return (
            prettier
                .format(input, {
                    parser: 'babel',
                    plugins: [prettierBabel],
                    semi: false,
                    printWidth: 120,
                    tabWidth: 4,
                })
                // Door 'semi' hierboven op false te zetten wordt er een ';' toegevoegd aan het begin van de string, verwijder deze.
                .substring(1)
        );
    } catch (error) {
        // Geeft de originele input terug als het formatteren mislukt is.
        return input;
    }
};

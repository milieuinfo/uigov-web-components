import { nothing } from 'lit';
import * as prettier from 'prettier/standalone';
import * as prettierBabel from 'prettier/parser-babel';
import { Args, ArgTypes, StoryFn, StoryContext, WebComponentsFramework } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

export const CATEGORIES = {
    ATTRIBUTES: 'Attributes',
    PROPERTIES: 'Properties',
    EVENTS: 'Events',
    SLOTS: 'Slots',
    CHILD_SLOTS: 'Child slots',
    CHILD_ATTRIBUTES: 'Child attributes',
} as const;

export const TYPES = {
    ARRAY: 'array',
    BOOLEAN: 'boolean',
    STRING: 'string',
    MAP: 'map',
    NUMBER: 'number',
    HTML: 'html',
    URL: 'url',
    FUNCTION: 'function',
    XML: 'xml',
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

// Logt het event in zowel in Storybook als in de developer console.
// Logt het event in de developer console omdat in Storybook custom event properties soms niet gelogd worden.
export const logStorybookEvent = <T extends Event>(eventName: string) => {
    return (event: T) => {
        if (!event) return;

        console.log(event);
        action(eventName)(event);
    };
};

export const story = <T extends object>(defaultArgs: T, storyFn: StoryFn<T>): StoryFn<T> => {
    return (args: T, context: StoryContext<WebComponentsFramework, T>) => {
        const newArgs = setDefaultArgsToNothing(args, defaultArgs);
        return storyFn(newArgs, context);
    };
};

export const storyArgs = (args: Args) => {
    return {
        ...args,
        customCSS: null,
    };
};

export const storyArgTypes = (argTypes: ArgTypes, next = false) => {
    return {
        ...argTypes,
        customCSS: {
            name: !next ? 'data-vl-custom-css' : 'custom-css',
            description:
                'Custom CSS string.<br>Wordt toegevoegd aan de adoptedStyleSheets van de shadow DOM van het component.',
            control: false,
            table: {
                type: { summary: TYPES.STRING },
                category: CATEGORIES.ATTRIBUTES,
                defaultValue: { summary: null },
            },
        },
    };
};

// Gebruik deze functie om de args van een story die overeen komen met de default args van een component
// om te zetten naar 'nothing' zodat deze args niet getoond worden in de source code op de docs pagina van de story.
const setDefaultArgsToNothing = <T extends object>(args: T, defaultArgs: T): T => {
    return Object.keys(args).reduce((result, key) => {
        const value = (args as any)[key];
        const defaultValue = (defaultArgs as any)[key];

        if (typeof value === 'function') {
            // Bij een event arg is de value van het type 'function', geef hier altijd de value terug.
            (result as any)[key] = value;
        } else {
            // Geef de value terug indien deze verschilt van de defaultValue, anders geef 'nothing' terug.
            (result as any)[key] = value !== defaultValue ? value : nothing;
        }

        return result;
    }, {} as T);
};

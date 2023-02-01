import '../../../libs/elements/src/lib/vl-elements.scss';
import './docs-styling.scss';
import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
        expanded: true,
        sort: 'alpha',
    },
    docs: {
        transformSource: (input) => {
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
        },
    },
};

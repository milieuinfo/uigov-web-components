import { formatHTML } from '@domg-wc/common-utilities';
import '../../../libs/elements/src/lib/vl-elements.scss';
import './docs-styling.scss';

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
        transformSource: formatHTML,
    },
};

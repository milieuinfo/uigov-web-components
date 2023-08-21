import { html } from 'lit-html';
import '../vl-text.element';

export const textArgs = {
    hidden: false,
    content: 'Text',
};

export const textArgTypes = {
    hidden: {
        name: 'data-vl-visually-hidden',
        type: { summary: 'boolean' },
        description: 'Attribuut wordt gebruikt om de text te verbergen.',
        table: {
            defaultValue: { summary: 'false' },
        },
    },
    content: {
        name: 'content (for demo purposes)',
    },
};

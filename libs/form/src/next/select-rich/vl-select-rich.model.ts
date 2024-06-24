import * as choices from 'choices.js';
import { Choice } from 'choices.js';

// web-dev-server (rollup) fix: ambiguous indirect export
export const DEFAULT_CLASSNAMES = choices.DEFAULT_CLASSNAMES;
export const Choices = choices.default;
export type Choices = choices.default;

export type SelectRichOption = Choice;

export const SelectRichPosition = {
    AUTO: 'auto',
    TOP: 'top',
    BOTTOM: 'bottom',
} as const;

export type SelectRichPosition = (typeof SelectRichPosition)[keyof typeof SelectRichPosition];

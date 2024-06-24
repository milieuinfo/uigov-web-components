export const SELECT_POSITION = {
    AUTO: 'auto',
    TOP: 'top',
    BOTTOM: 'bottom',
} as const;

export type SelectPosition = (typeof SELECT_POSITION)[keyof typeof SELECT_POSITION];

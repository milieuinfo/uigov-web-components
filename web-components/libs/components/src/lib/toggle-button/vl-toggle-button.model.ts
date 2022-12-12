export const ICON_PLACEMENT = {
    BEFORE: 'before',
    AFTER: 'after',
} as const;

export type ICON_PLACEMENT = typeof ICON_PLACEMENT[keyof typeof ICON_PLACEMENT];

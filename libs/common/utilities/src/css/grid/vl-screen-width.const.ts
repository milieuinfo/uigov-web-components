export const ScreenWidth = {
    LARGE: 1600,
    MEDIUM: 1023,
    SMALL: 767,
    EXTRA_SMALL: 500,
} as const;

export type ScreenWidth = (typeof ScreenWidth)[keyof typeof ScreenWidth];

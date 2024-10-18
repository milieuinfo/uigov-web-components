export const ScreenWidth = {
    EXTRA_SMALL: 500,
    SMALL: 767,
    MEDIUM: 1023,
    LARGE: 1600,
} as const;

export type ScreenWidth = (typeof ScreenWidth)[keyof typeof ScreenWidth];

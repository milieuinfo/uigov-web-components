export const SpacingRem = {
    EXTRA_EXTRA_SMALL: 0.5,
    EXTRA_SMALL: 1,
    SMALL: 1.5,
    NORMAL: 2,
    MEDIUM: 3,
    LARGE: 6,
} as const;

export type SpacingRem = (typeof SpacingRem)[keyof typeof SpacingRem];

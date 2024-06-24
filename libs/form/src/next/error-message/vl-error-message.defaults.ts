export const errorMessageDefaults = {
    show: false as boolean,
    for: null as string | null,
    state: null as keyof ValidityState | null,
} as const;

export const VALIDATION_TYPE = {
    EMAIL: 'email',
    DATE: 'date',
    RRN: 'rrn',
    UUID: 'uuid',
    PHONE: 'phone',
    IBAN: 'iban',
    SELECT: 'select',
    NUMERICAL: 'numerical',
} as const;

export type VALIDATION_TYPE = typeof VALIDATION_TYPE[keyof typeof VALIDATION_TYPE];

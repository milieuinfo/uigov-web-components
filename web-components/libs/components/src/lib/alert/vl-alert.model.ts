export const ALERT_TYPE = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
} as const;

export type ALERT_TYPE = typeof ALERT_TYPE[keyof typeof ALERT_TYPE];

export const ALERT_ICON = {
    WARNING: 'warning',
    CHECK: 'check',
    INFO_CIRCLE: 'info-circle',
} as const;

export type ALERT_ICON = typeof ALERT_ICON[keyof typeof ALERT_ICON];

export const ALERT_SIZE = {
    SMALL: 'small',
} as const;

export type ALERT_SIZE = typeof ALERT_SIZE[keyof typeof ALERT_SIZE];

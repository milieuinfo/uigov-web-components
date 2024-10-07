import { ICON_PLACEMENT } from '@domg-wc/common';

export const linkDefaults = {
    href: '' as string,
    bold: false as boolean,
    small: false as boolean,
    large: false as boolean,
    error: false as boolean,
    external: false as boolean,
    icon: '' as string,
    iconPlacement: 'before' as ICON_PLACEMENT,
} as const;

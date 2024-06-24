import { ICON_PLACEMENT } from '@domg-wc/common-utilities';

export const buttonDefaults = {
    type: 'button' as 'button' | 'submit' | 'reset',
    disabled: false as boolean,
    error: false as boolean,
    block: false as boolean,
    large: false as boolean,
    wide: false as boolean,
    narrow: false as boolean,
    secondary: false as boolean,
    tertiary: false as boolean,
    loading: false as boolean,
    icon: '' as string,
    iconPlacement: 'before' as ICON_PLACEMENT,
    iconOnly: false as boolean,
    toggle: false as boolean,
    on: false as boolean,
    controlled: false as boolean,
} as const;

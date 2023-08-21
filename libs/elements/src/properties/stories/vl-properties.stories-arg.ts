import { ArgTypes } from '@storybook/web-components';
import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';

export const propertiesArgs = {
    collapsed: false,
    full: false,
    fullWidth: false,
};

export const propertiesArgTypes: ArgTypes<typeof propertiesArgs> = {
    collapsed: {
        name: 'data-vl-collapsed',
        description:
            'Labels en waarden worden op aparte lijnen afgebeeld.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-full<br>• data-vl-full-width',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    full: {
        name: 'data-vl-full',
        description:
            'De kolom neemt de volledige breedte in. Kan enkel gebruikt worden bij vl-properties-column.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-collapsed',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    fullWidth: {
        name: 'data-vl-full-width',
        description:
            'De maximale breedte van het label wordt benut.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-collapsed',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
};

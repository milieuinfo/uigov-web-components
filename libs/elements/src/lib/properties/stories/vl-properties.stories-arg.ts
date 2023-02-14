import { ArgTypes } from '@storybook/web-components';
import { CATEGORIES, TYPES } from '@domg-wc/common-utilities';

export const propertiesArgs = {
    collapsed: false,
    full: false,
    fullWidth: false,
};

export const propertiesArgTypes: ArgTypes<typeof propertiesArgs> = {
    collapsed: {
        name: 'data-vl-collapsed',
        description:
            'Zorgt ervoor dat labels en waarden op aparte lijnen afgebeeld worden.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-full<br>• data-vl-full-width',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    full: {
        name: 'data-vl-full',
        description:
            'Zorgt ervoor dat de kolom de volledige breedte inneemt. Kan enkel gebruikt worden bij vl-properties-column.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-collapsed',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
    fullWidth: {
        name: 'data-vl-full-width',
        description:
            'Zorgt ervoor dat de maximale breedte van het label benut wordt.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-collapsed',
        table: {
            type: { summary: TYPES.BOOLEAN },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: false },
        },
    },
};

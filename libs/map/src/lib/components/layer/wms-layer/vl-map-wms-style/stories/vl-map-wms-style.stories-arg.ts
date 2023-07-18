import { CATEGORIES, TYPES } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';

export const mapWmsStyleArgs = {
    sld: '',
};

export const mapWmsStyleArgTypes: ArgTypes<typeof mapWmsStyleArgs> = {
    sld: {
        name: 'data-vl-sld',
        description:
            'Bepaalt de Styled Layer Descriptor body van een WMS kaartlaag.<br>Deze XML kan gebruikt worden om de WMS kaartlaag server side te stijlen.<br>Zie http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd<br>Dit attribuut is niet reactief.',
        table: {
            type: { summary: TYPES.XML },
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: mapWmsStyleArgs.sld },
        },
    },
};

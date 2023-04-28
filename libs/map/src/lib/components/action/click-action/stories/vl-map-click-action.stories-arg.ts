import { CATEGORIES } from '@domg-wc/common-utilities';
import { ArgTypes } from '@storybook/web-components';
import { logStorybookEvent } from '../../../../utils/util';

export const mapClickActionArg = {
    onMapClicked: logStorybookEvent('vl-map-clicked'),
};

export const mapClickActionArgTypes: ArgTypes<typeof mapClickActionArg> = {
    onMapClicked: {
        name: 'vl-map-clicked',
        description:
            'Afgevuurd wanneer er op de map geklikt wordt.<br>Het event bevat de locatie informatie, zie de console logs van Storybook voor het volledige event.',
        table: {
            type: { summary: '{ coordinate: Coordinate, resolution: number, projection: ProjectionLike }' },
            category: CATEGORIES.EVENTS,
        },
    },
};

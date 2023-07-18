import { html } from 'lit-html';
import '../vl-description-data.component';
import '../vl-description-data-item.component';
import { descriptionDataArgs, descriptionDataArgTypes } from './vl-description-data.stories-arg';
import { Meta } from '@storybook/web-components';
import { storyArgs, storyArgTypes } from '@domg-wc/common-storybook';

export default {
    title: 'Components/description-data',
    args: storyArgs(descriptionDataArgs),
    argTypes: storyArgTypes(descriptionDataArgTypes),
} as Meta<typeof descriptionDataArgs>;

export const descriptionDataDefault = ({
    size,
    maxSize,
    mediumSize,
    mediumMaxSize,
    smallSize,
    smallMaxSize,
    extraSmallSize,
    extraSmallMaxSize,
}: typeof descriptionDataArgs) =>
    html`
        <vl-description-data
            data-vl-items-size=${size}
            data-vl-items-max-size=${maxSize}
            data-vl-items-medium-size=${mediumSize}
            data-vl-items-medium-max-size=${mediumMaxSize}
            data-vl-items-small-size=${smallSize}
            data-vl-items-small-max-size=${smallMaxSize}
            data-vl-items-extra-small-size=${extraSmallSize}
            data-vl-items-extra-small-max-size=${extraSmallMaxSize}
            data-cy="description-data"
        >
            <vl-description-data-item
                data-vl-label="Uitgever"
                data-vl-value="Kind en Gezin"
                data-cy="description-data-item-1"
            ></vl-description-data-item>
            <vl-description-data-item
                data-vl-label="Publicatiedatum"
                data-vl-value="Augustus 2018"
                data-cy="description-data-item-2"
            ></vl-description-data-item>
            <vl-description-data-item
                data-vl-label="Publicatietype"
                data-vl-value="Brochure"
                data-cy="description-data-item-3"
            ></vl-description-data-item>
            <vl-description-data-item
                data-vl-label="Categorie"
                data-vl-value="Kinderen en jongeren"
                data-cy="description-data-item-4"
            ></vl-description-data-item>
        </vl-description-data>
    `;
descriptionDataDefault.storyName = 'vl-description-data - default';

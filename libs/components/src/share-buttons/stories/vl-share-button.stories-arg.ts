import { defaultArgs, defaultArgTypes } from '@domg-wc/common-storybook';
import { ArgTypes } from '@storybook/web-components';
import { MEDIA } from '../vl-share-button.model';

export const shareButtonArgs = {
    ...defaultArgs,
    href: '#',
    medium: MEDIA.FACEBOOK,
};

export const shareButtonArgTypes: ArgTypes = {
    ...defaultArgTypes(),
    medium: {
        name: 'data-vl-medium',
        options: [MEDIA.FACEBOOK, MEDIA.TWITTER, MEDIA.LINKED_IN, MEDIA.GOOGLE_PLUS, MEDIA.MAIL],
        description: 'This attribute is used to pass the medium.',
        control: 'select',
        table: {
            type: {
                summary: `${MEDIA.FACEBOOK} | ${MEDIA.TWITTER} | ${MEDIA.LINKED_IN} | ${MEDIA.GOOGLE_PLUS} | ${MEDIA.MAIL}`,
            },
        },
    },
    href: { type: 'string', description: "The href attribute specifies the link's destination." },
};

import { MEDIA } from '../vl-share-button.model';

export const shareButtonArgs = {
    href: '#',
    medium: MEDIA.FACEBOOK,
};

export const shareButtonArgTypes = {
    medium: {
        name: 'data-vl-medium',
        type: 'select',
        options: [MEDIA.FACEBOOK, MEDIA.TWITTER, MEDIA.LINKED_IN, MEDIA.GOOGLE_PLUS, MEDIA.MAIL],
        description: 'This attribute is used to pass the medium.',
        table: {
            type: {
                summary: `${MEDIA.FACEBOOK} | ${MEDIA.TWITTER} | ${MEDIA.LINKED_IN} | ${MEDIA.GOOGLE_PLUS} | ${MEDIA.MAIL}`,
            },
        },
    },
    href: { type: 'string', description: "The href attribute specifies the link's destination." },
};

import { define } from '@domg-lib/common-utilities';
import { VlCookie } from './vl-cookie.section';

export class VlAuthenticationCookie extends VlCookie {
    constructor() {
        super({
            title: 'Departement Omgeving toegangsbeheer cookies',
            name: ['KEYCLOAK_SESSION', 'KEYCLOAK_SESSION_LEGACY'],
            purpose:
                'Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van Departement Omgeving.',
            domain: window.location.hostname,
            processor: 'Departement Omgeving',
            validity: '10 uur',
        });
    }
}

define('vl-authentication-cookie', VlAuthenticationCookie);

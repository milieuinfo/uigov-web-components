import { VlCookie } from './vl-cookie.section';
import { define } from '@domg-wc/common-utilities';

export class VlJSessionIdCookie extends VlCookie {
    constructor() {
        super({
            title: 'Sessie cookie voor betere gebruikerservaring',
            name: ['JSESSIONID', 'KEYCLOAK_IDENTITY', 'KEYCLOAK_IDENTITY_LEGACY'],
            purpose:
                'De cookie wordt gebruikt om een sessie tussen de applicatieserver en een gebruiker in stand te houden. Dankzij deze cookie kan een gebruiker door de server op een uniek manier geïdentificeerd worden.',
            domain: window.location.hostname,
            processor: 'Departement Omgeving',
            validity: 'Beperkt tot de duur van de sessie',
        });
    }
}

define('vl-jsessionid-cookie', VlJSessionIdCookie);

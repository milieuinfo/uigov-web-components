import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { ProzaRestClient } from './vl-proza-rest-client.util';

/**
 * VlProzaMessagePreloader
 * @class
 * @classdesc Proza preloader dient om proza codes op voorhand op te halen zodat deze sneller getoond kunnen worden aan de gebruiker.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {string} data-vl-domain - Het Proza domein waarin de Proza berichten zitten.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-proza-message/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-proza-message/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-proza-message.html|Demo}
 *
 */
@webComponent('vl-proza-message-preloader')
export class VlProzaMessagePreloader extends BaseElementOfType(HTMLElement) {
    static get _observedAttributes() {
        return ['domain'];
    }

    constructor() {
        super();
        this._preload();
    }

    _domainChangedCallback() {
        this._preload();
    }

    get _domain() {
        return this.dataset.vlDomain;
    }

    _preload() {
        if (this._domain) {
            VlProzaMessagePreloader._preload(this._domain);
        }
    }

    static _preload(domain: string) {
        if (!VlProzaMessagePreloader.isPreloaded(domain)) {
            VlProzaMessagePreloader.__setPreloadedMessagesCacheForDomain(domain, ProzaRestClient.getMessages(domain));
        }
    }

    /**
     * Geeft een Proza bericht terug.
     *
     * @param {String} domain - Het Proza domein waarin het Proza bericht zit.
     * @param {String} code - De code die het Proza bericht identificeert.
     * @return {Promise<string>} Resolved naar het Proza bericht indien teruggevonden en anders wordt de Promise rejected.
     */
    static getMessage(domain: string, code: string) {
        return VlProzaMessagePreloader._getMessages(domain).then((messages: any) => {
            const message = messages[code];
            if (message) {
                return message;
            } else {
                throw Error(`Bericht voor {domein: ${domain}, code: ${code}} niet gevonden`);
            }
        });
    }

    /**
     * Geeft de Proza codes terug op basis van een prefix.
     *
     * @param {String} domain - Het Proza domein waarin het Proza bericht zit.
     * @param {String} prefix - De prefix van de code die het Proza bericht
     * identificeert.
     * @return {Promise<[string]>} Resolved naar de Proza codes met de
     * opgegeven prefix
     */
    static async getProzaCodes(domain: string, prefix: string) {
        VlProzaMessagePreloader._preload(domain);
        const messages = await VlProzaMessagePreloader._getMessages(domain);
        return Object.keys(messages).filter((code) => code.startsWith(prefix));
    }

    /**
     * Geeft terug of het Proza domein al reeds preloaded werd.
     *
     * @param {String} domain - Het Proza domein.
     * @return {boolean}
     */
    static isPreloaded(domain: string) {
        return !!VlProzaMessagePreloader.__getPreloadedMessagesCacheForDomain(domain);
    }

    static _getMessages(domain: string) {
        if (VlProzaMessagePreloader.isPreloaded(domain)) {
            return VlProzaMessagePreloader.__getPreloadedMessagesCacheForDomain(domain);
        } else {
            return Promise.reject(new Error(`Berichten voor domein ${domain} zijn niet preloaded`));
        }
    }

    static get __domainCache() {
        if (!VlProzaMessagePreloader.__cache) {
            VlProzaMessagePreloader.__cache = {};
        }
        return VlProzaMessagePreloader.__cache;
    }

    static __getCacheForDomain(domain: string) {
        const cache = VlProzaMessagePreloader.__domainCache;
        if (!cache[domain]) {
            cache[domain] = {};
        }
        return cache[domain];
    }

    static __getPreloadedMessagesCacheForDomain(domain: string) {
        return VlProzaMessagePreloader.__getCacheForDomain(domain).messages;
    }

    static __setPreloadedMessagesCacheForDomain(domain: string, messages: any) {
        VlProzaMessagePreloader.__getCacheForDomain(domain).messages = messages;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-proza-message-preloader': VlProzaMessagePreloader;
    }
}

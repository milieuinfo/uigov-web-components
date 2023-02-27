export class ProzaRestClient {
    static getMessage(domain: string, code: string, options: any = {}) {
        const fetchOptions: any = {};
        if (options.forceUpdate) {
            // Dev. Note: Maakt dat de request direct word opgevraagd van de server & niet uit de cache.
            //            Daarnaast beland de request ook niet in de cache.
            //            Zie: https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
            fetchOptions.cache = 'no-store';
        }
        return ProzaRestClient.__fetchJson(`proza/domein/${domain}/${code}`, fetchOptions)
            .then((message) => message.tekst)
            .catch((error) => {
                console.error(
                    `Er is iets fout gelopen bij het ophalen van het Proza bericht voor {domein: ${domain}, code: ${code}}`,
                    error
                );
                return Promise.reject(error);
            });
    }

    static getMessages(domain: string) {
        // Dev. Note: Maakt een "no-cache" request zodat deze altijd een "conditional-request" zal maken naar de server
        //            om te controleren of er wijzigingen zijn gebeurd.
        //            Zie: https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
        return ProzaRestClient.__fetchJson(`proza/domein/${domain}`, { cache: 'no-cache' })
            .then((messages) =>
                Object.assign({}, ...messages.map((message: any) => ({ [message.code]: message.tekst })))
            )
            .catch((error) => {
                console.error(
                    `Er is iets fout gelopen bij het ophalen van de Proza berichten voor domein ${domain}`,
                    error
                );
                return Promise.reject(error);
            });
    }

    static getToegelatenOperaties(domain: string) {
        return ProzaRestClient.__fetchJson(`proza/domein/${domain}/toegelatenoperaties`, null).catch((error) => {
            console.error(
                `Er is iets fout gelopen bij het ophalen van de toegelaten Proza operaties voor domein ${domain}`,
                error
            );
            return Promise.reject(error);
        });
    }

    static __fetchJson(url: string, options: any) {
        return fetch(url, options ?? {}).then(ProzaRestClient.__handleError);
    }

    static __handleError(response: any) {
        if (response.ok) {
            return response.json();
        }
        throw Error(`Response geeft aan dat er een fout is: ${response.statusText}`);
    }
}

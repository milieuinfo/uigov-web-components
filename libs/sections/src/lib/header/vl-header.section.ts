import { BaseLitElement, awaitScript, webComponentCustom } from '@domg-wc/common-utilities';

const customRegistration = () =>
    awaitScript(
        'vl-header-polyfill',
        'https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js'
    )
        .then(() => {
            awaitScript(
                'vl-header-client',
                'https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-client/dist/index.js'
            ).finally(() => {
                customElements.define('vl-header', VlHeader);
            });
        })
        .catch(() => {
            customElements.define('vl-header', VlHeader);
        });

@webComponentCustom(customRegistration)
export class VlHeader extends BaseLitElement {
    private authenticatedUserUrl = '/sso/ingelogde_gebruiker';
    private development = false;
    private identifier = '';
    private loginRedirectUrl = '/';
    private loginUrl = '/sso/aanmelden';
    private logoutUrl = '/sso/afgemeld';
    private switchCapacityUrl = '/sso/wissel_organisatie';
    private simple = false;
    private observer: MutationObserver | null = null;

    static get properties() {
        return {
            authenticatedUserUrl: {
                type: String,
                attribute: 'data-vl-authenticated-user-url',
                reflect: true,
            },
            development: {
                type: Boolean,
                attribute: 'data-vl-development',
                reflect: true,
            },
            identifier: {
                type: String,
                attribute: 'data-vl-identifier',
                reflect: true,
            },
            loginRedirectUrl: {
                type: String,
                attribute: 'data-vl-login-redirect-url',
                reflect: true,
            },
            loginUrl: {
                type: String,
                attribute: 'data-vl-login-url',
                reflect: true,
            },
            logoutUrl: {
                type: String,
                attribute: 'data-vl-logout-url',
                reflect: true,
            },
            simple: {
                type: Boolean,
                attribute: 'data-vl-simple',
                reflect: true,
            },
            switchCapacityUrl: {
                type: String,
                attribute: 'data-vl-switch-capacity-url',
                reflect: true,
            },
        };
    }

    constructor() {
        super();

        this.allowCustomCSS = false;
    }

    private get headerContainer() {
        return document.querySelector('#header__container');
    }

    private injectHeaderContainer() {
        const vlBody = document.querySelector('[is="vl-body"]');
        (vlBody || document.body).insertAdjacentHTML(
            'afterbegin',
            '<div id="header__container"><div id="header"></div></div>'
        );
    }

    private observeWidgetIsAdded() {
        const isHeader = (node: Node) => {
            return (
                (node as HTMLElement).tagName === 'HEADER' || (node.childNodes && [...node.childNodes].some(isHeader))
            );
        };

        this.observer = new MutationObserver((mutations, observer) => {
            const nodes = mutations.flatMap((mutation) => [...mutation.addedNodes]);

            if (nodes.some(isHeader)) {
                observer.disconnect();
                this.dispatchEvent(new CustomEvent('ready'));
            }
        });

        this.headerContainer && this.observer.observe(this.headerContainer, { childList: true });
    }

    private async isUserAuthenticated() {
        const response = await fetch(this.authenticatedUserUrl);
        return response.status === 200;
    }

    private loadWidget() {
        const widgetUrl = this.development
            ? `https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/${this.identifier}`
            : `https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/${this.identifier}`;

        (window as any).vl.widget.client
            .bootstrap(widgetUrl)
            .then((widget: any) => {
                widget.setMountElement(document.getElementById('header'));
                widget.mount().catch((e: any) => console.error(e));

                return widget;
            })
            .then((widget: any) => {
                if (this.simple) {
                    return;
                }

                widget.getExtension('citizen_profile.session').then(async (session: any) => {
                    session.configure({
                        active: await this.isUserAuthenticated(),
                        endpoints: {
                            loginUrl: this.loginUrl,
                            loginRedirectUrl: this.loginRedirectUrl,
                            logoutUrl: this.logoutUrl,
                            switchCapacityUrl: this.switchCapacityUrl,
                        },
                    });
                });
            })
            .catch((e: any) => {
                console.error(e);
            });
    }

    render() {
        this.headerContainer?.remove();
        this.injectHeaderContainer();
        this.observer?.disconnect();
        this.observeWidgetIsAdded();
        this.loadWidget();
    }

    createRenderRoot() {
        return this;
    }

    disconnectedCallback() {
        this.observer?.disconnect();
    }

    /**
     * @deprecated Deze methode mag niet gebruikt worden.
     */
    injectHeader() {
        console.warn('VlHeader - injectHeader() - deze methode is deprecated en mag niet gebruikt worden.');
        this.injectHeaderContainer();
    }

    /**
     * @deprecated Deze methode mag niet gebruikt worden.
     */
    vlwHeader() {
        console.warn('VlHeader - vlwHeader() - deze methode is deprecated en mag niet gebruikt worden.');
        return document.querySelector('div[class=vlw__header]');
    }

    /**
     * @deprecated Deze methode nag niet gebruikt worden.
     */
    header() {
        console.warn('VlHeader - header() - deze methode is deprecated en mag niet gebruikt worden.');
        return this.headerContainer;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-header': VlHeader;
    }
}

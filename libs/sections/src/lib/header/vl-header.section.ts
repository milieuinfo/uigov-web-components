import { awaitScript, webComponentCustom } from '@domg-wc/common-utilities';
import { LitElement } from 'lit';

const customRegistration = () =>
    awaitScript(
        'vl-header-client',
        'https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js'
    )
        .then(() => {
            (
                awaitScript(
                    'vl-header-polyfill',
                    'https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-client/dist/index.js'
                ) as any
            ) // TODO kspeltin: ergens staat de ecma versie niet hoog genoeg, want .finally kent hij niet zonder die 'as any'
                .finally(() => {
                    customElements.define('vl-header', VlHeader);
                });
        })
        .catch(() => {
            customElements.define('vl-header', VlHeader);
        });

@webComponentCustom(customRegistration)
export class VlHeader extends LitElement {
    private identifier = '';
    private development = false;
    private loginUrl = '';
    private loginRedirectUrl = '';
    private logoutUrl = '';
    private switchCapacityUrl = '';
    private authenticatedUserUrl = '';
    private simple = false;

    static get properties() {
        return {
            identifier: { type: String, attribute: 'data-vl-identifier', reflect: true },
            development: { type: Boolean, attribute: 'data-vl-development', reflect: true },
            loginUrl: { type: String, attribute: 'data-vl-login-url', reflect: true },
            loginRedirectUrl: { type: String, attribute: 'data-vl-login-redirect-url', reflect: true },
            logoutUrl: { type: String, attribute: 'data-vl-logout-url', reflect: true },
            switchCapacityUrl: { type: String, attribute: 'data-vl-switch-capacity-url', reflect: true },
            authenticatedUserUrl: { type: String, attribute: 'data-vl-authenticated-user-url', reflect: true },
            simple: { type: Boolean, attribute: 'data-vl-simple', reflect: true },
        };
    }

    constructor() {
        super();
        this.loginUrl = '/sso/aanmelden';
        this.loginRedirectUrl = '/';
        this.logoutUrl = '/sso/afgemeld';
        this.switchCapacityUrl = '/sso/wissel_organisatie';
        this.authenticatedUserUrl = '/sso/ingelogde_gebruiker';
    }

    injectHeader() {
        const vlBody = document.querySelector('[is="vl-body"]');
        (vlBody || document.body).insertAdjacentHTML('afterbegin', '<div id="header"></div>');
    }

    vlwHeader() {
        return document.querySelector('div[class=vlw__header]');
    }

    header() {
        return document.querySelector('#header');
    }

    async __isUserAuthenticated() {
        const response = await fetch(this.authenticatedUserUrl);
        return response.status === 200;
    }

    loadWidget() {
        const widgetUrl = this.development
            ? `https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/${this.identifier}`
            : `https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/${this.identifier}`;

        let bootstrap = (window as any).vl.widget.client.bootstrap(widgetUrl).then((widget: any) => {
            this.injectHeader();
            widget.setMountElement(document.getElementById('header'));
            widget.mount().catch((e: any) => console.error(e));
            return widget;
        });
        if (!this.simple) {
            bootstrap = bootstrap.then((widget: any) => {
                widget.getExtension('citizen_profile.session').then(async (session: any) => {
                    session.configure({
                        active: await this.__isUserAuthenticated(),
                        endpoints: {
                            loginUrl: this.loginUrl,
                            loginRedirectUrl: this.loginRedirectUrl,
                            logoutUrl: this.logoutUrl,
                            switchCapacityUrl: this.switchCapacityUrl,
                        },
                    });
                });
            });
        }
        bootstrap = bootstrap.catch((e: any) => {
            console.error(e);
        });
    }

    render() {
        if (this.vlwHeader()) {
            (this.vlwHeader() as any).parentElement.remove();
        }
        if (this.header()) {
            (this as any).header().remove();
        }
        this.loadWidget();
        this.injectHeader();
    }

    createRenderRoot() {
        return this;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-header': VlHeader;
    }
}

import { awaitScript, BaseLitElement, webComponentCustom } from '@domg-wc/common-utilities'; // import '@govflanders/vl-ui-util/dist/js/util.js';
// import '@govflanders/vl-ui-util/dist/js/util.js';
// import '@govflanders/vl-ui-accordion/dist/js/accordion.js';

const customRegistration = () =>
    awaitScript(
        'vl-footer-polyfill',
        'https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js'
    )
        .then(() => {
            awaitScript(
                'vl-footer-client',
                'https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-client/dist/index.js'
            ).finally(() => {
                console.log("define('vl-footer', VlFooter) - vl-footer-client");
                customElements.define('vl-footer', VlFooter);
            });
        })
        .catch(() => {
            console.log("define('vl-footer', VlFooter) - vl-footer-polyfill");
            customElements.define('vl-footer', VlFooter);
        });

@webComponentCustom(customRegistration)
export class VlFooter extends BaseLitElement {
    private development = false;
    private identifier = '';
    private observer: MutationObserver | null = null;

    static get properties() {
        return {
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
        };
    }

    constructor() {
        super();
        console.log('VlFooter - constructor');
        this.allowCustomCSS = false;
    }

    get footerContainer() {
        return document.querySelector('#footer__container');
    }

    private injectFooterContainer() {
        const vlBody = document.querySelector('[is="vl-body"]');
        (vlBody || document.body).insertAdjacentHTML(
            'beforeend',
            '<div id="footer__container"><div id="footer"></div></div>'
        );
        console.log('VlFooter - injectFooterContainer');
    }

    private observeWidgetIsAdded() {
        const isFooter = (node: Node) => {
            return (
                (node as HTMLElement).tagName === 'FOOTER' || (node.childNodes && [...node.childNodes].some(isFooter))
            );
        };

        this.observer = new MutationObserver((mutations, observer) => {
            const nodes = mutations.flatMap((mutation) => [...mutation.addedNodes]);

            if (nodes.some(isFooter)) {
                observer.disconnect();
                this.dispatchEvent(new CustomEvent('ready'));
            }
        });

        this.footerContainer && this.observer.observe(this.footerContainer, { childList: true });
    }

    private loadWidget() {
        const widgetUrl = this.development
            ? `https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/${this.identifier}`
            : `https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/${this.identifier}`;

        console.log('VlFooter - loadWidget', (window as any).vl.widget.client);
        const client = (window as any).vl.widget.client as any;
        const bootstrapResponse = client.bootstrap(widgetUrl);
        console.log('VlFooter - loadWidget - bootstrap', bootstrapResponse);
        bootstrapResponse
            .then((widget: any) => {
                console.log('VlFooter - setMountElement', widget);
                widget.setMountElement(document.getElementById('footer'));
                widget.mount().catch((e: any) => console.error(e));
                console.log('VlFooter - setMountElement - done');
            })
            .catch((e: any) => {
                console.error(e);
                console.log('VlFooter - setMountElement', e);
            });
    }

    render() {
        this.footerContainer?.remove();
        this.injectFooterContainer();
        this.observer?.disconnect();
        this.observeWidgetIsAdded();
        this.loadWidget();
        // setTimeout(() => {
        //     this.loadWidget();
        // }, 2000);
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
    injectFooter() {
        console.warn('VlFooter - injectFooter() - deze methode is deprecated en mag niet gebruikt worden.');
        this.injectFooterContainer();
    }

    /**
     * @deprecated Deze methode mag niet gebruikt worden.
     */
    vlwFooter() {
        console.warn('VlFooter - vlwFooter() - deze methode is deprecated en mag niet gebruikt worden.');
        return document.querySelector('footer[class=vlw__footer]');
    }

    /**
     * @deprecated Deze methode mag niet gebruikt worden.
     */
    footer() {
        console.warn('VlFooter - footer() - deze methode is deprecated en mag niet gebruikt worden.');
        return this.footerContainer;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-footer': VlFooter;
    }
}

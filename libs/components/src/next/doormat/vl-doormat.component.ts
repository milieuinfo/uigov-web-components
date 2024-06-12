import { CSSResult, PropertyDeclarations, TemplateResult, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { BaseLitElement, webComponent } from '@domg-wc/common-utilities';
import { globalStylesNext } from '@domg-wc/common-utilities/css/global-styles-decorator';
import linkStyle from '@domg-wc/common-utilities/css/link/link.css';
import doormatStyle from './vl-doormat.css';

export const doormatDefaults = {
    href: '' as string,
    external: false as boolean,
    alt: false as boolean,
    imageSrc: '' as string,
    imageAlt: '' as string,
    imageWidth: null as number | null,
    imageHeight: null as number | null,
    graphic: false as boolean,
} as const;

@globalStylesNext()
@webComponent('vl-doormat-next')
export class VlDoormatComponent extends BaseLitElement {
    private href = doormatDefaults.href;
    private external = doormatDefaults.external;
    private alt = doormatDefaults.alt;
    private imageSrc = doormatDefaults.imageSrc;
    private imageAlt = doormatDefaults.imageAlt;
    private imageWidth = doormatDefaults.imageWidth;
    private imageHeight = doormatDefaults.imageHeight;
    private graphic = doormatDefaults.graphic;

    static get styles(): CSSResult[] {
        return [linkStyle, doormatStyle];
    }

    static get properties(): PropertyDeclarations {
        return {
            href: { type: String },
            external: { type: Boolean },
            alt: { type: Boolean },
            imageSrc: { type: String, attribute: 'image-src' },
            imageAlt: { type: String, attribute: 'image-alt' },
            imageWidth: { type: Number, attribute: 'image-width' },
            imageHeight: { type: Number, attribute: 'image-height' },
            graphic: { type: Boolean },
        };
    }

    render(): TemplateResult {
        const classes = {
            'vl-doormat': true,
            'vl-doormat--alt': this.alt,
            'vl-doormat--graphic': this.graphic,
        };
        const target = this.external ? '_blank' : nothing;

        return html`
            <a class=${classMap(classes)} href=${this.href} target=${target}>
                ${this.imageSrc ? this.renderImage() : nothing}
                <div class="vl-doormat__content">
                    <h2 class="vl-doormat__title"><slot name="title"></slot></h2>
                    <div class="vl-doormat__text"><slot name="text"></slot></div>
                </div>
            </a>
        `;
    }

    renderImage(): TemplateResult {
        if (this.graphic) {
            return html`
                <div class="vl-doormat__graphic-wrapper">
                    <img
                        class="vl-doormat__graphic"
                        src=${this.imageSrc}
                        alt=${this.imageAlt || nothing}
                        width=${this.imageWidth || nothing}
                        height=${this.imageHeight || nothing}
                    />
                </div>
            `;
        }

        return html`
            <img
                class="vl-doormat__image"
                src=${this.imageSrc}
                alt=${this.imageAlt || nothing}
                width=${this.imageWidth || nothing}
                height=${this.imageHeight || nothing}
            />
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-doormat-next': VlDoormatComponent;
    }
}

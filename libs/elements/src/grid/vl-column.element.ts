import { BaseElementOfType, webComponent } from '@domg-wc/common-utilities';
import { elementStyles } from '../vl-elements.uig-css';

/**
 * VlColumn
 * @class
 * @classdesc De parent van een VlColumn is altijd een VlGrid.
 *
 * @extends HTMLDivElement
 * @mixes nativeVlElement
 *
 * @property {number} [8] data-vl-size - Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij grote schermen, typisch desktop.
 * @property {number} [12] data-vl-max-size - Het maximum (noemer) waartegen zal geevalueerd worden bij grote schermen, typisch desktop.
 * @property {number} [null] data-vl-push - Het aantal (teller) van het maximum (noemer) partities te verschuiven bij grote schermen, typisch desktop.
 * @property {number} [10] data-vl-medium-size - Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij medium schermen, typisch tablet.
 * @property {number} [12] data-vl-medium-max-size - Het maximum (noemer) waartegen zal geevalueerd worden bij medium schermen, typisch tablet.
 * @property {number} [null] data-vl-medium-push - Het aantal (teller) van het maximum (noemer) partities te verschuiven bij medium schermen, typisch tablet.
 * @property {number} [12] data-vl-small-size - Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij kleine schermen, typisch mobiel.
 * @property {number} [12] data-vl-small-max-size - Het maximum (noemer) waartegen zal geevalueerd worden bij kleine schermen, typisch mobiel.
 * @property {number} [null] data-vl-small-push - Het aantal (teller) van het maximum (noemer) partities te verschuiven bij kleine schermen, typisch mobiel.
 * @property {number} [12] data-vl-extra-small-size - Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij zeer kleine schermen.
 * @property {number} [12] data-vl-extra-small-max-size - Het maximum (noemer) waartegen zal geevalueerd worden bij zeer kleine schermen.
 * @property {number} [null] data-vl-extra-small-push - Het aantal (teller) van het maximum (noemer) partities te verschuiven bij zeer kleine schermen.
 */
@elementStyles()
@webComponent('vl-column', { extends: 'div' })
export class VlColumnElement extends BaseElementOfType(HTMLDivElement) {
    static get _observedAttributes() {
        return [
            'size',
            'max-size',
            'push',
            'medium-size',
            'medium-max-size',
            'medium-push',
            'small-size',
            'small-max-size',
            'small-push',
            'extra-small-size',
            'extra-small-max-size',
            'extra-small-push',
        ];
    }

    connectedCallback() {
        this._configureDefaults();
    }

    get _defaultSize() {
        return 8;
    }
    get _defaultMaxSize() {
        return 12;
    }

    get _defaultPush() {
        return null;
    }

    get _defaultMediumSize() {
        return 10;
    }

    get _defaultSmallSize() {
        return 12;
    }

    get _defaultExtraSmallSize() {
        return 12;
    }

    get _size() {
        return this.getAttribute('size') || this._defaultSize;
    }

    get _maxSize() {
        return this.getAttribute('max-size') || this._defaultMaxSize;
    }

    get _push() {
        return this.getAttribute('push') || this._defaultPush;
    }

    get _mediumSize() {
        return this.getAttribute('medium-size') || this._defaultMediumSize;
    }

    get _mediumMaxSize() {
        return this.getAttribute('medium-max-size') || this._defaultMaxSize;
    }

    get _mediumPush() {
        return this.getAttribute('medium-push') || this._defaultPush;
    }

    get _smallSize() {
        return this.getAttribute('small-size') || this._defaultSmallSize;
    }

    get _smallMaxSize() {
        return this.getAttribute('small-max-size') || this._defaultMaxSize;
    }

    get _smallPush() {
        return this.getAttribute('small-push') || this._defaultPush;
    }

    get _extraSmallSize() {
        return this.getAttribute('extra-small-size') || this._defaultExtraSmallSize;
    }

    get _extraSmallMaxSize() {
        return this.getAttribute('extra-small-max-size') || this._defaultMaxSize;
    }

    get _extraSmallPush() {
        return this.getAttribute('extra-small-push') || this._defaultPush;
    }

    get _columnClassPrefix() {
        return 'vl-col--';
    }

    get _pushClassPrefix() {
        return 'vl-push--';
    }

    static __sizeClass(minSize: string | number | null, maxSize: string | number | null, responsiveModifier?: string) {
        return `${minSize}-${maxSize}` + (responsiveModifier ? `--${responsiveModifier}` : '');
    }

    static __pushClass(
        minSize: string | number | null,
        maxSize: string | number | null,
        responsiveModifier?: string
    ): string | undefined {
        if (!minSize) {
            return undefined;
        }

        if (minSize == 0) {
            return 'reset' + (responsiveModifier ? `--${responsiveModifier}` : '');
        }

        return `${minSize}-${maxSize}` + (responsiveModifier ? `--${responsiveModifier}` : '');
    }

    __changeColumnClass(oldValue: string, newValue: string) {
        this._changeClass(this, oldValue, newValue, this._columnClassPrefix);
    }

    __changePushClass(oldValue: string | undefined, newValue: string | undefined) {
        this._changeClass(this, oldValue, newValue, this._pushClassPrefix);
    }

    _sizeChangedCallback(oldValue: number | null, newValue: number | null) {
        this.__changeColumnClass(
            VlColumnElement.__sizeClass(oldValue || this._defaultSize, this._maxSize),
            VlColumnElement.__sizeClass(newValue || this._defaultSize, this._maxSize)
        );
    }

    _maxSizeChangedCallback(oldValue: number | null, newValue: number | null) {
        this.__changeColumnClass(
            VlColumnElement.__sizeClass(this._size, oldValue || this._defaultMaxSize),
            VlColumnElement.__sizeClass(this._size, newValue || this._defaultMaxSize)
        );

        if (this._push != null) {
            this.__changePushClass(
                VlColumnElement.__pushClass(this._push, oldValue || this._defaultMaxSize),
                VlColumnElement.__pushClass(this._push, newValue || this._defaultMaxSize)
            );
        }
    }

    _pushChangedCallback(oldValue: string, newValue: string) {
        this.__changePushClass(
            VlColumnElement.__pushClass(oldValue, this._maxSize),
            VlColumnElement.__pushClass(newValue, this._maxSize)
        );
    }

    _mediumSizeChangedCallback(oldValue: number | null, newValue: number | null) {
        this.__changeColumnClass(
            VlColumnElement.__sizeClass(oldValue || this._defaultMediumSize, this._mediumMaxSize, 'm'),
            VlColumnElement.__sizeClass(newValue || this._defaultMediumSize, this._mediumMaxSize, 'm')
        );
    }

    _mediumMaxSizeChangedCallback(oldValue: number | null, newValue: number | null) {
        this.__changeColumnClass(
            VlColumnElement.__sizeClass(this._mediumSize, oldValue || this._defaultMaxSize, 'm'),
            VlColumnElement.__sizeClass(this._mediumSize, newValue || this._defaultMaxSize, 'm')
        );

        if (this._mediumPush != null) {
            this.__changePushClass(
                VlColumnElement.__pushClass(this._mediumPush, oldValue || this._defaultMaxSize, 'm'),
                VlColumnElement.__pushClass(this._mediumPush, newValue || this._defaultMaxSize, 'm')
            );
        }
    }

    _mediumPushChangedCallback(oldValue: string, newValue: string) {
        this.__changePushClass(
            VlColumnElement.__pushClass(oldValue, this._mediumMaxSize, 'm'),
            VlColumnElement.__pushClass(newValue, this._mediumMaxSize, 'm')
        );
    }

    _smallSizeChangedCallback(oldValue: number | null, newValue: number | null) {
        this.__changeColumnClass(
            VlColumnElement.__sizeClass(oldValue || this._defaultSmallSize, this._smallMaxSize, 's'),
            VlColumnElement.__sizeClass(newValue || this._defaultSmallSize, this._smallMaxSize, 's')
        );
    }

    _smallMaxSizeChangedCallback(oldValue: number | null, newValue: number | null) {
        this.__changeColumnClass(
            VlColumnElement.__sizeClass(this._smallSize, oldValue || this._defaultMaxSize, 's'),
            VlColumnElement.__sizeClass(this._smallSize, newValue || this._defaultMaxSize, 's')
        );

        if (this._smallPush != null) {
            this.__changePushClass(
                VlColumnElement.__pushClass(this._smallPush, oldValue || this._defaultMaxSize, 's'),
                VlColumnElement.__pushClass(this._smallPush, newValue || this._defaultMaxSize, 's')
            );
        }
    }

    _smallPushChangedCallback(oldValue: string, newValue: string) {
        this.__changePushClass(
            VlColumnElement.__pushClass(oldValue, this._smallMaxSize, 's'),
            VlColumnElement.__pushClass(newValue, this._smallMaxSize, 's')
        );
    }

    _extraSmallSizeChangedCallback(oldValue: number | null, newValue: number | null) {
        this.__changeColumnClass(
            VlColumnElement.__sizeClass(oldValue || this._defaultExtraSmallSize, this._extraSmallMaxSize, 'xs'),
            VlColumnElement.__sizeClass(newValue || this._defaultExtraSmallSize, this._extraSmallMaxSize, 'xs')
        );
    }

    _extraSmallMaxSizeChangedCallback(oldValue: number | null, newValue: number | null) {
        this.__changeColumnClass(
            VlColumnElement.__sizeClass(this._extraSmallSize, oldValue || this._defaultMaxSize, 'xs'),
            VlColumnElement.__sizeClass(this._extraSmallSize, newValue || this._defaultMaxSize, 'xs')
        );

        if (this._extraSmallPush != null) {
            this.__changePushClass(
                VlColumnElement.__pushClass(this._extraSmallPush, oldValue || this._defaultMaxSize, 'xs'),
                VlColumnElement.__pushClass(this._extraSmallPush, newValue || this._defaultMaxSize, 'xs')
            );
        }
    }

    _extraSmallPushChangedCallback(oldValue: string, newValue: string) {
        this.__changePushClass(
            VlColumnElement.__pushClass(oldValue, this._extraSmallMaxSize, 'xs'),
            VlColumnElement.__pushClass(newValue, this._extraSmallMaxSize, 'xs')
        );
    }

    _configureDefaults() {
        if (!this.hasAttribute('size')) {
            this._sizeChangedCallback(null, this._size);
        }

        if (!this.hasAttribute('medium-size')) {
            this._mediumSizeChangedCallback(null, this._mediumSize);
        }

        if (!this.hasAttribute('small-size')) {
            this._smallSizeChangedCallback(null, this._smallSize);
        }

        if (!this.hasAttribute('extra-small-size')) {
            this._extraSmallSizeChangedCallback(null, this._extraSmallSize);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-column': VlColumnElement;
    }
}

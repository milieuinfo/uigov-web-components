import { BaseElementOfType } from '@domg-wc/common';

/**
 * Gebruik de button mixin in combinatie met button elementen.
 * @mixin vlButtonElement
 *
 * @param {Object} SuperClass - Class die als base class gebruikt zal worden.
 * @return {Object} class
 */
export const BaseButtonOfType = (SuperClass: typeof HTMLElement): any => {
    return class extends BaseElementOfType(SuperClass) {
        static get _observedAttributes() {
            return [];
        }

        static get _observedClassAttributes() {
            return ['disabled', 'error', 'block', 'large', 'wide', 'narrow', 'secondary', 'tertiary', 'loading'];
        }

        connectedCallback() {
            this.classList.add('vl-button');
            setTimeout(() => {
                this._setIconClass();
            });
        }

        get _classPrefix() {
            return 'vl-button--';
        }

        _setIconClass() {
            const icon = this.querySelector('[is="vl-icon"]');
            if (icon) {
                let suffix = '';
                suffix += icon.hasAttribute('data-vl-before') || icon.hasAttribute('before') ? '-before' : '';
                suffix += icon.hasAttribute('data-vl-after') || icon.hasAttribute('after') ? '-after' : '';
                this.classList.add(this._classPrefix + 'icon' + suffix);
                icon.classList.add('vl-button__icon');
                if (suffix) {
                    icon.classList.add('vl-button__icon-' + suffix);
                }
                icon.classList.remove('vl-icon--before');
                icon.classList.remove('vl-icon--after');
            }
        }
    };
};

import { BaseElementOfType } from '@domg-lib/common-utilities';

/**
 * Gebruik de input addon mixin in combinatie met een input addon elementen.
 * @mixin vlInputAddonElement
 *
 * @param {Object} SuperClass
 * @return {Object} SuperClass
 */
export const InputAddonBaseElementOfType = (SuperClass: typeof HTMLElement): any => {
    return class extends BaseElementOfType(SuperClass) {
        connectedCallback() {
            this.classList.add('vl-input-addon');
        }
    };
};

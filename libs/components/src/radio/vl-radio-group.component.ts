import { BaseElementOfType, webComponent } from '@domg-wc/common';

//TODO: Can we make this a (abstract) class?

// Mixin to add logic to a group of radio elements
export const vlRadioGroupComponent = {
    setKeyEventsRegistered() {
        const parent = this._parentElement();
        parent.setAttribute('data-vl-key-events-registered', '');
    },

    hasKeyEventsRegistered(): any {
        const parent = this._parentElement();
        return parent.hasAttribute('data-vl-key-events-registered');
    },

    setFocusTransmitted() {
        const parent = this._parentElement();
        parent.setAttribute('data-vl-focus-transmitted', '');
    },

    hasFocusTransmitted(): any {
        const parent = this._parentElement();
        return parent.hasAttribute('data-vl-focus-transmitted');
    },

    registerKeyEvents(radios: any) {
        if (!this.hasKeyEventsRegistered()) {
            const keys = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
            };
            const parent = this._parentElement();
            parent.addEventListener('keydown', (event: any) => {
                const enabledRadios = radios.filter((radio: any) => !radio.disabled);
                const includesArrowKey = Object.values(keys).includes(event.keyCode);
                if (includesArrowKey) {
                    event.preventDefault();
                    const focusedRadio = enabledRadios.find((radio: any) => radio.hasFocus);
                    const firstRadio = enabledRadios[0];
                    const lastRadio = enabledRadios[enabledRadios.length - 1];
                    switch (event.keyCode) {
                        case keys.up:
                        case keys.left: {
                            const previousRadio = enabledRadios[enabledRadios.indexOf(focusedRadio) - 1];
                            (previousRadio || lastRadio).check();
                            break;
                        }
                        case keys.down:
                        case keys.right: {
                            const nextRadio = enabledRadios[enabledRadios.indexOf(focusedRadio) + 1];
                            (nextRadio || firstRadio).check();
                            break;
                        }
                        default:
                            break;
                    }
                }
            });
        }
        this.setKeyEventsRegistered();
    },

    transmitFocus(radios: any) {
        if (!this.hasFocusTransmitted()) {
            const parent = this._parentElement();
            parent.addEventListener('focus', () => {
                const enabledRadios = radios.filter((radio: any) => !radio.disabled);
                parent.addEventListener(
                    'keyup',
                    (event: any) => {
                        if (event.shiftKey) {
                            const checkedRadio = enabledRadios.find((radio: any) => radio.checked);
                            const latestRadio = enabledRadios[enabledRadios.length - 1];
                            (checkedRadio || latestRadio).focus();
                        }
                    },
                    { once: true }
                );
                const checkedRadio = enabledRadios.find((radio: any) => radio.checked);
                const firstRadio = enabledRadios[0];
                if (checkedRadio || firstRadio) {
                    (checkedRadio || firstRadio).focus();
                }
            });
        }
        this.setFocusTransmitted();
    },

    _parentElement(): any {
        const self = this as any;
        return self.parentElement || self.getRootNode().host || self.getRootNode();
    },
};

@webComponent('vl-radio-group')
export class VlRadioGroup extends BaseElementOfType(HTMLElement) {
    private vlRadioGroupComponent = undefined;

    constructor() {
        super(`<slot></slot>`);
        Object.assign(this, vlRadioGroupComponent);
    }

    connectedCallback() {
        super.connectedCallback();

        this._groupRadios();
        this._processTabIndex();
        this._transmitFocus();
    }

    get radios() {
        return [...this.querySelectorAll('vl-radio')];
    }

    get checkedRadio() {
        return this.radios.find((radio) => radio.checked);
    }

    _groupRadios() {
        this.radios.forEach((radio) => radio.setAttribute('data-vl-name', 'radio'));
    }

    _processTabIndex() {
        this.tabIndex = 0;
        this.radios.forEach((radio) =>
            radio.addEventListener('focus', () => {
                this.tabIndex = -1;
            })
        );
        this.radios.forEach((radio) =>
            radio.addEventListener('blur', () => {
                this.tabIndex = 0;
            })
        );
    }

    _transmitFocus() {
        this.tabIndex = 0;
        this.addEventListener('focus', () => {
            this.addEventListener(
                'keyup',
                (event: any) => {
                    if (event.shiftKey) {
                        this.radios[this.radios.length - 1].focus();
                    }
                },
                { once: true }
            );
            this.radios[0].focus();
        });
        this.radios.forEach((radio) =>
            radio.addEventListener('focus', () => {
                this.tabIndex = -1;
            })
        );
        this.radios.forEach((radio) =>
            radio.addEventListener('blur', () => {
                this.tabIndex = 0;
            })
        );
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vl-radio-group': VlRadioGroup;
    }
}

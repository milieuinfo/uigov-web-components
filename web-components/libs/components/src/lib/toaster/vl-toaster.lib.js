(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? (module.exports = factory())
        : typeof define === 'function' && define.amd
        ? define(factory)
        : (global.toaster = factory());
})(this || window, () => {
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    function _defineProperties(target, props) {
        for (let i = 0; i < props.length; i++) {
            const descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) {
                descriptor.writable = true;
            }
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) {
            _defineProperties(Constructor.prototype, protoProps);
        }
        if (staticProps) {
            _defineProperties(Constructor, staticProps);
        }
        return Constructor;
    }

    /**
     * Toaster
     */

    /**
     * Private Variables
     */
    const toasterClass = ''.concat(vl.ns, 'toaster');
    const alertClass = ''.concat(vl.ns, 'alert');
    const toasterFadeClass = ''.concat(alertClass, '--fade-out');
    const alertCloseClass = ''.concat(alertClass, '__close');
    const dataPrefix = 'data-'.concat(vl.ns);
    const toasterAtt = ''.concat(dataPrefix, 'toaster');
    const toasterDressedAtt = ''.concat(toasterAtt, '-dressed');
    const toasterFadeoutAtt = ''.concat(toasterAtt, '-fadeout');
    /**
     * Private Functions
     */

    const _addAlert = function _addAlert(alert) {
        vl.util.addClass(alert, toasterFadeClass);
        window.setTimeout(() => {
            vl.util.removeClass(alert, toasterFadeClass);
        }, 300);
    };

    const _removeAlert = function _removeAlert(alert) {
        vl.util.addClass(alert, toasterFadeClass);
        window.setTimeout(() => {
            alert.remove();
        }, 300);
    };

    const _bindCloseButtons = function _bindCloseButtons(actions) {
        vl.util.each(actions, (action) => {
            action.addEventListener('click', (e) => {
                _removeAlert(e.currentTarget.parentElement);
            });
        });
    };

    const _observeToaster = function _observeToaster(event) {
        const toaster = event[0].target;
        const firstAlert = toaster.firstElementChild;
        const newAlert = toaster.lastElementChild; // detect if alert is added
        if (event[0].addedNodes.length > 0) {
            _addAlert(newAlert);

            _bindCloseButtons(
                newAlert.shadowRoot
                    ? newAlert.shadowRoot.querySelectorAll('.'.concat(alertCloseClass))
                    : newAlert.querySelectorAll('.'.concat(alertCloseClass))
            );
            if (toaster.getAttribute(toasterFadeoutAtt) === 'true') {
                window.setTimeout(() => {
                    _removeAlert(newAlert);
                }, 5000);
            }
        } // when five or more alerts are visible

        if (toaster.childElementCount > 5) {
            _removeAlert(firstAlert);
        }
    };

    const Toaster =
        /* #__PURE__ */
        (function () {
            function Toaster() {
                _classCallCheck(this, Toaster);
            }

            _createClass(Toaster, [
                {
                    key: 'dress',
                    value: function dress(toaster) {
                        toaster.setAttribute(toasterDressedAtt, true);
                        const observer = new window.MutationObserver(_observeToaster);
                        const actions = toaster.shadowRoot
                            ? toaster.shadowRoot.querySelectorAll('.'.concat(alertCloseClass))
                            : toaster.querySelectorAll('.'.concat(alertCloseClass));

                        observer.observe(toaster, {
                            attributes: true,
                            childList: true,
                        });

                        _bindCloseButtons(actions);
                    },
                },
                {
                    key: 'dressAll',
                    value: function dressAll() {
                        const _this = this;

                        const elements = document.querySelectorAll(
                            '.'
                                .concat(toasterClass, ':not([')
                                .concat(toasterDressedAtt, ']):not([data-')
                                .concat(vl.ns, 'js-dress="false"]),\n      [')
                                .concat(toasterAtt, ']:not([')
                                .concat(toasterDressedAtt, ']):not([data-')
                                .concat(vl.ns, 'js-dress="false"])')
                        );
                        vl.util.each(elements, (element) => {
                            _this.dress(element);
                        });
                    },
                },
            ]);

            return Toaster;
        })();

    if (!('toaster' in vl)) {
        vl.toaster = new Toaster();
        vl.toaster.dressAll();
    }

    return Toaster;
});

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? (module.exports = factory())
        : typeof define === 'function' && define.amd
        ? define(factory)
        : (global['side-navigation'] = factory());
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
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

    var commonjsGlobal =
        typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
            ? global
            : typeof self !== 'undefined'
            ? self
            : {};

    function createCommonjsModule(fn, module) {
        return (module = { exports: {} }), fn(module, module.exports), module.exports;
    }

    var ResizeSensor_min = createCommonjsModule(function (module, exports) {
        !(function (a, b) {
            module.exports = b();
        })(commonjsGlobal, function () {
            var a = (function () {
                function a() {
                    (this.q = []),
                        (this.add = function (a) {
                            this.q.push(a);
                        });
                    var a, b;

                    this.call = function () {
                        for (a = 0, b = this.q.length; b > a; a++) {
                            this.q[a].call();
                        }
                    };
                }

                function b(a, b) {
                    return a.currentStyle
                        ? a.currentStyle[b]
                        : window.getComputedStyle
                        ? window.getComputedStyle(a, null).getPropertyValue(b)
                        : a.style[b];
                }

                function c(c, e) {
                    if (c.resizedAttached) {
                        if (c.resizedAttached) {
                            return void c.resizedAttached.add(e);
                        }
                    } else {
                        (c.resizedAttached = new a()), c.resizedAttached.add(e);
                    }

                    (c.resizeSensor = document.createElement('div')), (c.resizeSensor.className = 'resize-sensor');
                    var f =
                            'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; opacity: 0;',
                        g = 'position: absolute; left: 0; top: 0; transition: 0s;';
                    (c.resizeSensor.style.cssText = f),
                        (c.resizeSensor.innerHTML =
                            '<div class="resize-sensor-expand" style="' +
                            f +
                            '"><div style="' +
                            g +
                            '"></div></div><div class="resize-sensor-shrink" style="' +
                            f +
                            '"><div style="' +
                            g +
                            ' width: 200%; height: 200%"></div></div>'),
                        c.appendChild(c.resizeSensor),
                        'static' == b(c, 'position') && (c.style.position = 'relative');

                    var h = c.resizeSensor.childNodes[0],
                        i = h.childNodes[0],
                        j = c.resizeSensor.childNodes[1],
                        k = function k() {
                            (i.style.width = 1e5 + 'px'),
                                (i.style.height = 1e5 + 'px'),
                                (h.scrollLeft = 1e5),
                                (h.scrollTop = 1e5),
                                (j.scrollLeft = 1e5),
                                (j.scrollTop = 1e5);
                        };

                    k();

                    var l = !1,
                        m = function m() {
                            c.resizedAttached && (l && (c.resizedAttached.call(), (l = !1)), d(m));
                        };

                    d(m);

                    var n,
                        o,
                        p,
                        q,
                        r = function r() {
                            ((p = c.offsetWidth) != n || (q = c.offsetHeight) != o) && ((l = !0), (n = p), (o = q)),
                                k();
                        },
                        s = function s(a, b, c) {
                            a.attachEvent ? a.attachEvent('on' + b, c) : a.addEventListener(b, c);
                        };

                    s(h, 'scroll', r), s(j, 'scroll', r);
                }

                var d =
                        window.requestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        function (a) {
                            return window.setTimeout(a, 20);
                        },
                    e = function e(a, b) {
                        var d = this,
                            e = Object.prototype.toString.call(a),
                            f = (d._isCollectionTyped =
                                '[object Array]' === e ||
                                '[object NodeList]' === e ||
                                '[object HTMLCollection]' === e ||
                                ('undefined' != typeof jQuery && a instanceof window.jQuery) ||
                                ('undefined' != typeof Elements && a instanceof window.Elements));
                        if (((d._element = a), f)) {
                            for (var g = 0, h = a.length; h > g; g++) {
                                c(a[g], b);
                            }
                        } else {
                            c(a, b);
                        }
                    };

                return (
                    (e.prototype.detach = function () {
                        var a = this,
                            b = a._isCollectionTyped,
                            c = a._element;
                        if (b) {
                            for (var d = 0, f = c.length; f > d; d++) {
                                e.detach(c[d]);
                            }
                        } else {
                            e.detach(c);
                        }
                    }),
                    (e.detach = function (a) {
                        a.resizeSensor &&
                            (a.removeChild(a.resizeSensor), delete a.resizeSensor, delete a.resizedAttached);
                    }),
                    e
                );
            })();

            return a;
        });
    });

    var stiClass = 'js-'.concat(vl.ns, 'sticky'),
        stiAtt = 'data-'.concat(vl.ns, 'sticky'),
        stiFixedClass = ''.concat(stiClass, '--fixed'),
        stiPlaceholderClass = ''.concat(stiClass, '--placeholder'),
        regionClass = ''.concat(vl.ns, 'region'),
        stiStaticClass = ''.concat(stiClass, '--static'),
        stiViewportTopClass = ''.concat(stiClass, '--viewport-top'),
        stiViewportBottomClass = ''.concat(stiClass, '--viewport-bottom'),
        stiViewportUnbottom = ''.concat(stiClass, '--viewport-unbottom'),
        stiViewportContainerBottom = ''.concat(stiClass, '--container-bottom'),
        stiDressedAttr = 'data-'.concat(vl.ns, 'sticky-dressed'),
        stiOffsetAttr = 'data-'.concat(vl.ns, 'sticky-offset-top'),
        layoutClass = ''.concat(vl.ns, 'layout');

    var Sticky = /*#__PURE__*/ (function () {
        /**
         * Initialize sticky component
         */
        function Sticky() {
            var _this = this;

            _classCallCheck(this, Sticky);

            // Set default values for affixedType and direction
            this.affixedType = 'STATIC';
            this.direction = 'down'; // Set initialized and restyle flags to false

            this._initialized = false;
            this._reStyle = false; // Default dimensions

            this.dimensions = {
                translateY: 0,
                topSpacing: 0,
                lastTopSpacing: 0,
                bottomSpacing: 0,
                lastBottomSpacing: 0,
                sidebarHeight: 0,
                sidebarWidth: 0,
                containerTop: 0,
                containerHeight: 0,
                viewportHeight: 0,
                viewportTop: 0,
                lastViewportTop: 0,
            }; // Breakpoint stuff

            this._breakpoint = false;
            this.minWidth = ['xsmall', 'small']; // Loop over vl.util.each event and bind 'this'

            vl.util.each(['handleEvent'], function (method) {
                _this[method] = _this[method].bind(_this);
            });
        }

        /**
         * Breakdown stick if breakpoint is small
         * @method _widthBreakpoint
         * @return {[type]}
         */

        _createClass(Sticky, [
            {
                key: '_widthBreakpoint',
                value: function _widthBreakpoint() {
                    if (vl.util.exists(vl.breakpoint)) {
                        if (this.minWidth.indexOf(vl.breakpoint.value) >= 0) {
                            this._breakpoint = true;
                            this.affixedType = 'STATIC';
                            this.sidebar.removeAttribute('style');
                            vl.util.removeClass(this.sidebarInner, stiFixedClass);
                            this.sidebarInner.removeAttribute('style');
                        } else {
                            this._breakpoint = false;
                        }
                    } else {
                        this._breakpoint = false;
                    }
                },
                /**
                 * Recalculate dimensions if needed on scroll
                 * @method _calcDimensionsWithScroll
                 */
            },
            {
                key: '_calcDimensionsWithScroll',
                value: function _calcDimensionsWithScroll() {
                    var dims = this.dimensions;
                    dims.sidebarLeft = this._offsetRelative(this.sidebar).left;
                    dims.viewportTop = document.documentElement.scrollTop || document.body.scrollTop;
                    dims.viewportBottom = dims.viewportTop + dims.viewportHeight;
                    dims.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

                    if (typeof dims.topSpacing === 'function') {
                        dims.topSpacing = parseInt(dims.topSpacing(this.sidebarInner), 10) || 0;
                    }

                    if (typeof dims.bottomSpacing === 'function') {
                        dims.bottomSpacing = parseInt(dims.bottomSpacing(this.sidebarInner), 10) || 0;
                    }

                    if (this.affixType === 'VIEWPORT-TOP') {
                        // Adjust translate Y in the case decrease top spacing value
                        if (dims.topSpacing < dims.lastTopSpacing) {
                            dims.translateY += dims.lastTopSpacing - dims.topSpacing;
                            this._reStyle = true;
                        }
                    } else if (this.affixedType === 'VIEWPORT-BOTTOM') {
                        // Adjust translateY in the case decrease bottom spacing value
                        if (dims.bottomSpacing < dims.lastBottomSpacing) {
                            dims.translateY += dims.lastTopSpacing - dims.topSpacing;
                            this._reStyle = true;
                        }
                    }

                    dims.lastTopSpacing = dims.topSpacing;
                    dims.lastBottomSpacing = dims.bottomSpacing;
                },
                /**
                 * Is the sidebar-height smaller than the viewport
                 * @method _isSidebarFitsViewport
                 * @return {Boolean}
                 */
            },
            {
                key: '_isSidebarFitsViewport',
                value: function _isSidebarFitsViewport() {
                    return this.dimensions.sidebarHeight < this.dimensions.viewportHeight;
                },
                /**
                 * Determine the (desired) state of the sidebar
                 * @method _getAffixType
                 * @return {affixType}
                 */
            },
            {
                key: '_getAffixType',
                value: function _getAffixType() {
                    var dims = this.dimensions,
                        affixType = false,
                        sidebarBottom,
                        colliderTop,
                        colliderBottom;

                    this._calcDimensionsWithScroll();

                    sidebarBottom = dims.sidebarHeight + dims.containerTop;
                    colliderTop = dims.viewportTop + dims.topSpacing;
                    colliderBottom = dims.viewportBottom - dims.bottomSpacing;

                    switch (this.direction) {
                        case 'up':
                            if (colliderTop <= dims.containerTop) {
                                dims.translateY = 0;
                                affixType = 'STATIC';
                            } else if (colliderTop <= dims.translateY + dims.containerTop) {
                                dims.translateY = colliderTop - dims.containerTop;
                                affixType = 'VIEWPORT-TOP';
                            } else if (!this._isSidebarFitsViewport() && dims.containerTop <= colliderTop) {
                                affixType = 'VIEWPORT-UNBOTTOM';
                            } else {
                                affixType = 'CONTAINER-BOTTOM';
                            }

                            break;

                        case 'down':
                            // When sidebar element is not bigger tham screen viewport
                            if (this._isSidebarFitsViewport()) {
                                if (dims.sidebarHeight + colliderTop >= dims.containerBottom) {
                                    dims.translateY = dims.containerBottom - sidebarBottom;
                                    affixType = 'CONTAINER-BOTTOM';
                                } else if (colliderTop >= dims.containerTop) {
                                    dims.translateY = colliderTop - dims.containerTop;
                                    affixType = 'VIEWPORT-TOP';
                                }
                            } else if (dims.containerBottom <= colliderBottom) {
                                dims.translateY = colliderTop - dims.containerTop;
                                affixType = 'CONTAINER-BOTTOM';
                            } else if (sidebarBottom + dims.translateY <= colliderBottom) {
                                dims.translateY = colliderBottom - sidebarBottom;
                                affixType = 'VIEWPORT-BOTTOM';
                            } else if (dims.containerTop + dims.translateY <= colliderTop) {
                                affixType = 'VIEWPORT-UNBOTTOM';
                            }

                            break;
                    } // Make sure the translate Y is not bigger than container height.

                    dims.translateY = Math.max(0, dims.translateY);
                    dims.translateY = Math.min(dims.containerHeight, dims.translateY);
                    dims.lastViewportTop = dims.viewportTop;
                    return affixType;
                },
                /**
                 * Determine direction of scroll
                 * @method _observeScrollDir
                 */
            },
            {
                key: '_observeScrollDir',
                value: function _observeScrollDir() {
                    var dims = this.dimensions,
                        furthest;

                    if (dims.lastViewportTop === dims.viewportTop) {
                        return;
                    }

                    furthest = this.direction === 'down' ? Math.min : Math.max; // If the browser is scrolling not in the same direction.

                    if (dims.viewportTop === furthest(dims.viewportTop, dims.lastViewportTop)) {
                        this.direction = this.direction === 'down' ? 'up' : 'down';
                    }
                },
                /**
                 * Updates sticky with requestAnimationFrame for performance
                 * @method _updateSticky
                 * @param  {event}
                 */
            },
            {
                key: '_updateSticky',
                value: function _updateSticky() {
                    var _this2 = this;

                    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    if (this._running) {
                        return;
                    }

                    this._running = true;

                    (function (eventType) {
                        window.requestAnimationFrame(function () {
                            switch (eventType) {
                                // When browser is scrolling only recalculate soms dimensions within scroll
                                case 'scroll':
                                    _this2._calcDimensionsWithScroll();

                                    _this2._observeScrollDir();

                                    _this2._stickyPosition();

                                    break;
                                // Force _stickyPosition, calc all dimensions, check breakpoint

                                case 'resize':
                                default:
                                    _this2._widthBreakpoint();

                                    _this2._calcDimensions();

                                    _this2._stickyPosition(true);

                                    break;
                            }

                            _this2._running = false;
                        });
                    })(event.type);
                },
                /**
                 * Get formatted translateString
                 * @method _getTranslate
                 * @param  {Number}      [y=0]
                 * @param  {Number}      [x=0]
                 * @param  {Number}      [z=0]
                 * @return {[type]}
                 */
            },
            {
                key: '_getTranslate',
                value: function _getTranslate() {
                    var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    return 'translate3d('.concat(y, ', ').concat(x, ', ').concat(z, ')');
                },
                /**
                 * Returns styles to return for vl.util.each affixType
                 * @method _getStyle
                 * @param  {affixType}
                 * @return {style}
                 */
            },
            {
                key: '_getStyle',
                value: function _getStyle(affixType) {
                    var style, dims, translate; // If no affixType exist function

                    if (!vl.util.exists(affixType)) {
                        return;
                    }

                    style = {
                        inner: {},
                        outer: {},
                    };
                    dims = this.dimensions; // Set different style props for the appropriate affixType

                    switch (affixType) {
                        case 'VIEWPORT-TOP':
                            style.inner = {
                                top: dims.topSpacing,
                                left: dims.sidebarLeft - dims.viewportLeft,
                                width: dims.sidebarWidth,
                            };
                            break;

                        case 'VIEWPORT-BOTTOM':
                            style.inner = {
                                top: 'auto',
                                left: dims.sidebarLeft,
                                bottom: dims.bottomSpacing,
                                width: dims.sidebarWidth,
                            };
                            break;

                        case 'CONTAINER-BOTTOM':
                        case 'VIEWPORT-UNBOTTOM':
                            translate = this._getTranslate(0, dims.translateY + 'px');
                            style.inner = {
                                display: 'block',
                                transform: translate,
                            };
                            break;
                    }

                    switch (affixType) {
                        case 'VIEWPORT-TOP':
                        case 'VIEWPORT-BOTTOM':
                        case 'VIEWPORT-UNBOTTOM':
                        case 'CONTAINER-BOTTOM':
                            style.outer = {
                                height: dims.sidebarHeight,
                            };
                            break;
                    }

                    style.outer = this._extend(
                        {
                            height: '',
                        },
                        style.outer
                    );
                    style.inner = this._extend(
                        {
                            top: '',
                            left: '',
                            bottom: '',
                            width: '',
                            transform: this._getTranslate(),
                        },
                        style.inner
                    );
                    return style;
                }, // Extend options object with defaults.
            },
            {
                key: '_extend',
                value: function _extend(defaults, options) {
                    var results = {};

                    for (var key in defaults) {
                        if (vl.util.exists(options[key])) {
                            results[key] = options[key];
                        } else {
                            results[key] = defaults[key];
                        }
                    }

                    return results;
                }, // make sticky
            },
            {
                key: '_stickyPosition',
                value: function _stickyPosition(force) {
                    var affixType, style;

                    if (this._breakpoint) {
                        return;
                    }

                    force = this._reStyle || force || false;
                    affixType = this._getAffixType();
                    style = this._getStyle(affixType);

                    if ((this.affixedType !== affixType || force) && affixType) {
                        for (var key in style.outer) {
                            if (Object.prototype.hasOwnProperty.call(style.outer, key)) {
                                var _unit = typeof style.outer[key] === 'number' ? 'px' : '';

                                this.sidebar.style[key] = style.outer[key] + _unit;
                            }
                        }

                        this.sidebarInner.classList.remove(
                            stiStaticClass,
                            stiViewportTopClass,
                            stiViewportBottomClass,
                            stiViewportUnbottom,
                            stiViewportContainerBottom
                        );
                        vl.util.addClass(this.sidebarInner, ''.concat(stiClass, '--').concat(affixType.toLowerCase()));

                        for (var _key in style.inner) {
                            if (Object.prototype.hasOwnProperty.call(style.inner, _key)) {
                                var _unit2 = typeof style.inner[_key] === 'number' ? 'px' : '';

                                this.sidebarInner.style[_key] = style.inner[_key] + _unit2;
                            }
                        }
                    } else if (this._initialized) {
                        this.sidebarInner.style.left = style.inner.left;
                    }

                    this.affixedType = affixType;
                }, // Bind eventlisteners
            },
            {
                key: '_bindEvents',
                value: function _bindEvents() {
                    window.addEventListener('resize', this, {
                        passive: true,
                        capture: false,
                    });
                    window.addEventListener('scroll', this, {
                        passive: true,
                        capture: false,
                    });
                    this.sidebar.addEventListener('update.sticky', this);

                    if (vl.util.exists(ResizeSensor_min)) {
                        new ResizeSensor_min(this.sidebarInner, this.handleEvent);
                    }
                }, // Handle events
            },
            {
                key: 'handleEvent',
                value: function handleEvent(event) {
                    this._updateSticky(event);
                },
                /**
                 * Calculate top and left offset
                 * @method _offsetRelative
                 * @param  {element}=
                 * @return {result}
                 */
            },
            {
                key: '_offsetRelative',
                value: function _offsetRelative(element) {
                    var result = {
                            left: 0,
                            top: 0,
                        },
                        offsetTop,
                        offsetLeft;

                    do {
                        offsetTop = element?.offsetTop;
                        offsetLeft = element?.offsetLeft;

                        if (!isNaN(offsetTop)) {
                            result.top += offsetTop;
                        }

                        if (!isNaN(offsetLeft)) {
                            result.left += offsetLeft;
                        }

                        element = element?.tagName === 'body' ? element?.parentElement : element?.offsetParent;
                    } while (element);

                    return result;
                },
                /**
                 * Calculate dimensions of sticky and container
                 * @method _calcDimensions
                 */
            },
            {
                key: '_calcDimensions',
                value: function _calcDimensions() {
                    var dims;

                    if (this._breakpoint) {
                        return;
                    }

                    dims = this.dimensions; // Container of sticky sidebar dimensions.

                    dims.containerTop = this._offsetRelative(this.container).top;
                    dims.containerHeight = this?.container?.clientHeight;
                    dims.containerBottom = dims.containerTop + dims.containerHeight; // Sidebar dimensions.

                    dims.sidebarHeight = this.sidebarInner.offsetHeight;
                    dims.sidebarWidth = this.sidebarInner.offsetWidth; // Screen viewport dimensions.

                    dims.viewportHeight = window.innerHeight;

                    this._calcDimensionsWithScroll();
                },
                /**
                 * Initiate single element, add classes and methods
                 * @method dress
                 * @param  {element} stickyContent
                 */
            },
            {
                key: 'dress',
                value: function dress(stickyContent) {
                    this.placeholder = document.createElement('div');
                    stickyContent.setAttribute(stiDressedAttr, true); // Put placeholder around sticky content

                    vl.util.addClass(this.placeholder, stiPlaceholderClass);
                    vl.util.wrap(stickyContent, this.placeholder); // Set placeholder height fixed

                    this.placeholder.style.height = ''.concat(this.placeholder.offsetHeight, 'px'); // Set specified offsetTop if defined

                    if (stickyContent.hasAttribute(stiOffsetAttr)) {
                        this.dimensions.topSpacing = parseInt(stickyContent.getAttribute(stiOffsetAttr), 10);
                    }

                    this.sidebar = stickyContent.parentNode;
                    this.sidebarInner = stickyContent;
                    this.container = this.sidebar.closest('.'.concat(layoutClass, ', .').concat(regionClass));

                    this._widthBreakpoint();

                    this._calcDimensions();

                    this._stickyPosition();

                    this._bindEvents();

                    this._initialized = true;
                },
                /**
                 * Initiate elements and sets vl.breakpoint is available
                 * @method dressAll
                 * @return {[type]}
                 */
            },
            {
                key: 'dressAll',
                value: function dressAll() {
                    var _this3 = this;

                    var elements;

                    if (vl.util.exists(vl.breakpoint)) {
                        if (this.minWidth.indexOf(vl.breakpoint.value) >= 0) {
                            this._breakpoint = false;
                        }
                    }

                    elements = document.querySelectorAll('['.concat(stiAtt, ']:not([').concat(stiDressedAttr, '])'));
                    vl.util.each(elements, function (stickyContent) {
                        _this3.dress(stickyContent);
                    });
                },
                /**
                 * Destroy the slider instance
                 * @method destroy
                 */
            },
            {
                key: 'destroy',
                value: function destroy() {
                    var styleReset = {
                        inner: {},
                        outer: {},
                    }; // Remove eventlisteners

                    window.removeEventListener('resize', this, {
                        capture: false,
                    });
                    window.removeEventListener('scroll', this, {
                        capture: false,
                    });
                    this.sidebar.removeEventListener('update.sticky', this); // Remove classes

                    vl.util.removeClass(this.sidebarInner, stiFixedClass); // Remove attributes

                    this.sidebarInner.removeAttribute(stiDressedAttr); // Remove sidebar inner-style

                    styleReset.inner = {
                        position: '',
                        top: '',
                        left: '',
                        bottom: '',
                        width: '',
                        transform: '',
                    }; // Remove sidebar outer style

                    styleReset.outer = {
                        height: '',
                        position: '',
                    };

                    for (var key in styleReset.outer) {
                        if (Object.prototype.hasOwnProperty.call(styleReset.outer, key)) {
                            this.sidebar.style[key] = styleReset.outer[key];
                        }
                    }

                    for (var _key2 in styleReset.inner) {
                        if (Object.prototype.hasOwnProperty.call(styleReset.inner, _key2)) {
                            this.sidebarInner.style[_key2] = styleReset.inner[_key2];
                        }
                    } // Remove all state classes

                    this.sidebarInner.classList.remove(
                        stiStaticClass,
                        stiViewportTopClass,
                        stiViewportBottomClass,
                        stiViewportUnbottom,
                        stiViewportContainerBottom
                    );
                    this._initialized = false; // Remove sticky-placeholder

                    if (vl.util.exists(this.placeholder)) {
                        this.placeholder.outerHTML = this.placeholder.innerHTML;
                    } // Detach ResizeSensor

                    if (vl.util.exists(ResizeSensor_min)) {
                        ResizeSensor_min.detach(this.sidebarInner, this.handleEvent);
                    }
                },
            },
        ]);

        return Sticky;
    })();

    /**
     * Scrollspy navigation
     * We assume that in a sticky element items with an anchor link should have a scrollspy functionality
     */
    // Private variables
    var ssClass = 'js-'.concat(vl.ns, 'scrollspy'),
        ssAtt = 'data-'.concat(vl.ns, 'scrollspy'),
        ssActiveClass = ''.concat(ssClass, '-active'),
        ssActiveMobileClass = ''.concat(ssClass, '-mobile--active'),
        ssPlaceholderClass = ''.concat(ssClass, '-placeholder'),
        ssCloseClass = ''.concat(ssClass, '__close'),
        ssToggleClass = ''.concat(ssClass, '__toggle'),
        ssToggleFixedClass = ''.concat(ssClass, '__toggle--fixed'),
        ssContentClass = ''.concat(ssClass, '__content'),
        ssContentAtt = 'data-'.concat(vl.ns, '-scrollspy-content'),
        regionClass$1 = ''.concat(vl.ns, 'region'),
        snItemClass = ''.concat(vl.ns, 'side-navigation__item'),
        globalHvisibleClass = 'js-iwgh3-bc--visible',
        body = document.body,
        ssIDAtt = 'data-'.concat(vl.ns, 'scrollspy-id'),
        ssDressedAtt = 'data-'.concat(vl.ns, 'scrollspy-dressed'),
        ssChildAtt = 'data-'.concat(vl.ns, 'child'),
        ssParentAtt = 'data-'.concat(vl.ns, 'parent'),
        ssMobileAtt = 'data-'.concat(vl.ns, 'scrollspy-mobile'),
        stickyOffsetTopAtt = 'data-'.concat(vl.ns, 'sticky-offset-top'),
        sideNavigation = ''.concat(vl.ns, 'side-navigation'); // Private functions

    var _closePopup = function _closePopup(placeholder, button) {
        vl.util.removeClass(placeholder, ssActiveMobileClass);
        vl.util.removeClass(body, vl.ns + 'u-no-overflow');

        if (vl.util.exists(button, true, false)) {
            button.setAttribute('aria-expanded', false);
        }
    }; // Gets an element height

    var _getHeight = function _getHeight(element) {
        return Math.max(element.scrollHeight, element.offsetHeight, element.clientHeight);
    };

    var _scrollSpyMobile = function _scrollSpyMobile(elements, wrapper, contentWrapper) {
        var placeholder = document.createElement('div'),
            closeButton = document.createElement('button'),
            openButton = document.createElement('button'),
            wrapperHeight,
            scrollSpyBtnLabel = wrapper.getAttribute(ssMobileAtt); // Generate close button

        vl.util.addClass(placeholder, ssPlaceholderClass);
        vl.util.wrap(wrapper, placeholder);

        if (vl.util.exists(placeholder)) {
            closeButton.setAttribute('type', 'button');
            closeButton.setAttribute('tabindex', '0');
            closeButton.innerHTML = 'Navigatie sluiten';
            vl.util.addClass(closeButton, ssCloseClass);
            placeholder.insertBefore(closeButton, placeholder.firstChild); // Generate toggle button

            wrapperHeight = _getHeight(contentWrapper);
            closeButton.addEventListener('click', function (event) {
                event.stopPropagation();

                _closePopup(placeholder, openButton);
            });

            if (vl.util.exists(contentWrapper)) {
                var openButtonOffsetHeight = 0,
                    bt,
                    otherParents;
                openButton.setAttribute('type', 'button');
                openButton.setAttribute('tabindex', '0');
                openButton.setAttribute('aria-expanded', 'false');
                openButton.innerHTML = scrollSpyBtnLabel || 'Navigatie';
                vl.util.addClass(openButton, ssToggleClass);
                vl.util.addClass(openButton, ''.concat(vl.ns, 'button'));
                vl.util.addClass(openButton, ''.concat(vl.ns, 'button--block'));
                contentWrapper.appendChild(openButton);
                openButton.addEventListener('click', function (event) {
                    event.stopPropagation();
                    event.target.setAttribute('aria-expanded', true);
                    placeholder.setAttribute('tabindex', '1');
                    vl.util.addClass(placeholder, ssActiveMobileClass);
                    vl.util.addClass(body, ''.concat(vl.ns, 'u-no-overflow'));
                    closeButton.focus();
                }); // Shady way to get offset

                bt = openButton;

                while (bt) {
                    openButtonOffsetHeight = 0;
                    bt = bt.offsetParent;
                } // Add height to offset

                openButtonOffsetHeight = openButtonOffsetHeight + 30; // Toggle fixed class to toggle

                window.addEventListener(
                    'scroll',
                    vl.util.debounce(function () {
                        if (
                            window.pageYOffset > openButtonOffsetHeight &&
                            window.pageYOffset <
                                openButtonOffsetHeight + wrapperHeight - document.documentElement.clientHeight
                        ) {
                            vl.util.addClass(openButton, ssToggleFixedClass);
                        } else {
                            vl.util.removeClass(openButton, ssToggleFixedClass);
                        }
                    }, 50),
                    false
                );
                vl.util.each(elements, function (element) {
                    element.addEventListener('click', function (event) {
                        if (element.hasAttribute(ssChildAtt)) {
                            // Close all others
                            otherParents = wrapper.querySelectorAll('['.concat(ssChildAtt, ']'));
                            vl.util.each(otherParents, function (parent) {
                                parent.setAttribute('aria-expanded', 'false');
                            });
                            element.setAttribute('aria-expanded', 'true');
                        } else {
                            _closePopup(placeholder, openButton);
                        }

                        event.stopPropagation();
                    });
                });
                document.addEventListener('click', _closePopup(placeholder, openButton));
            }
        }
    };

    var ScrollSpy = /*#__PURE__*/ (function () {
        function ScrollSpy() {
            _classCallCheck(this, ScrollSpy);

            this.latestKnownScrollY = 0;
            this.ticking = false;
            this.parameters = {
                offset: 100,
            };
        }

        _createClass(ScrollSpy, [
            {
                key: '_requestTick',
                value: function _requestTick() {
                    if (!this.ticking) {
                        var self = this;
                        window.requestAnimationFrame(function () {
                            self._update();
                        });
                    }

                    this.ticking = true;
                },
            },
            {
                key: '_scrollSpy',
                value: function _scrollSpy() {
                    this.latestKnownScrollY = window.pageYOffset;

                    this._requestTick();
                },
            },
            {
                key: '_update',
                value: function _update() {
                    var _this = this;

                    this.ticking = false;
                    vl.util.each(this.elements, function (element) {
                        _this._checkScrollSpy(element);
                    });
                },
            },
            {
                key: '_checkScrollSpy',
                value: function _checkScrollSpy(element) {
                    var hasBreadcrumb = element.getRootNode().querySelector('.'.concat(globalHvisibleClass)),
                        initialOffset = this.scrollSpyWrapper.getAttribute(stickyOffsetTopAtt) || 75,
                        target,
                        currentScrollPosition,
                        bounds,
                        dataParent,
                        parent;
                    var href = element.getAttribute('href'); // If the link is an empty # end here

                    if (href === '#' && vl.util.exists(href)) {
                        return;
                    } // Check if global header breadcrumb is shown

                    if (!vl.util.hasClass(this.scrollSpyWrapper, sideNavigation)) {
                        if (vl.util.exists(hasBreadcrumb)) {
                            this.scrollSpyWrapper.style.top = ''.concat(parseInt(initialOffset, 10) + 41, 'px');
                        } else {
                            this.scrollSpyWrapper.style.top = ''.concat(initialOffset, 'px');
                        }
                    } // Check if global header breadcrumb is shown

                    target = element.getRootNode().querySelector(href);
                    currentScrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
                    bounds = {
                        min: this._getOffsetTop(target),
                        max: _getHeight(target) + this._getOffsetTop(target),
                    };

                    if (currentScrollPosition > bounds.min && currentScrollPosition < bounds.max) {
                        var otherItems = this.scrollSpyWrapper.querySelectorAll('.'.concat(snItemClass, ' a'));
                        vl.util.each(otherItems, function (el) {
                            if (element !== el) {
                                vl.util.removeClass(el, ssActiveClass);

                                if (el.hasAttribute(ssChildAtt)) {
                                    el.setAttribute('aria-expanded', false);
                                }
                            }
                        });
                        vl.util.addClass(element, ssActiveClass); // Parent detection

                        dataParent = element.getAttribute(ssParentAtt);
                        parent = this.scrollSpyWrapper.querySelector(
                            '['.concat(ssChildAtt, '="').concat(dataParent, '"]')
                        );

                        if (vl.util.exists(parent)) {
                            parent.setAttribute('aria-expanded', true);
                        }
                    }
                },
                /**
                 * Get an element's distance from the top of the Document.
                 * @param  {Node} elem The element
                 * @return {Number}    Distance from the top in pixels
                 */
            },
            {
                key: '_getOffsetTop',
                value: function _getOffsetTop(element) {
                    var location = 0;

                    if (element.offsetParent) {
                        do {
                            location += element.offsetTop;
                            element = element.offsetParent;
                        } while (element);
                    } else {
                        location = element.offsetTop;
                    }

                    location = location - this.parameters.offset;
                    return location >= 0 ? location : 0;
                },
            },
            {
                key: 'dress',
                value: function dress(wrapper) {
                    var _this2 = this;

                    var id = vl.util.uniqueId();
                    var correspondingRegion = wrapper.closest('.'.concat(regionClass$1));
                    var scrollSpyContentWrapper = correspondingRegion?.querySelector('['.concat(ssContentAtt, ']'));

                    if (!vl.util.exists(scrollSpyContentWrapper)) {
                        scrollSpyContentWrapper = correspondingRegion?.querySelector('.'.concat(ssContentClass));
                    }

                    this.scrollSpyWrapper = wrapper;
                    this.elements = wrapper.querySelectorAll('a[href^="#"]');
                    wrapper.setAttribute(ssIDAtt, id);
                    vl.util.addClass(wrapper, ssClass); // Only add scrollspy if all content is loaded

                    vl.util.each(this.elements, function (element) {
                        if (element.hasAttribute(ssChildAtt)) {
                            element.setAttribute('aria-expanded', 'false');
                        }
                    }); // Initiate on small/xsmall breakpoints

                    if (vl.util.exists(vl.breakpoint)) {
                        if (vl.breakpoint.value === 'small' || vl.breakpoint.value === 'xsmall') {
                            _scrollSpyMobile(this.elements, wrapper, scrollSpyContentWrapper);
                        }
                    }

                    window.addEventListener(
                        'scroll',
                        function () {
                            _this2._scrollSpy();
                        },
                        false
                    );

                    this._scrollSpy();
                },
            },
            {
                key: 'dressAll',
                value: function dressAll() {
                    var _this3 = this;

                    var scrollSpies = document.querySelectorAll(
                        '['.concat(ssAtt, ']:not([').concat(ssDressedAtt, '])')
                    );
                    vl.util.each(scrollSpies, function (scrollSpy) {
                        vl.util.addClass(scrollSpy, ssClass);

                        _this3.dress(scrollSpy);
                    });
                },
            },
        ]);

        return ScrollSpy;
    })();

    var snAtt = 'data-'.concat(vl.ns, 'side-navigation'),
        snClass = 'js-'.concat(vl.ns, 'side-navigation'),
        snScrollableAtt = 'data-'.concat(vl.ns, 'side-navigation-scrollable'),
        snScrollSpyAtt = 'data-'.concat(vl.ns, 'scrollspy'),
        snScrollSpyContentAtt = 'data-'.concat(vl.ns, 'scrollspy-content'),
        snScrollSpyClass = 'js-'.concat(vl.ns, 'scrollspy'),
        snStickyAtt = 'data-'.concat(vl.ns, 'sticky'),
        snStickyClass = 'js-'.concat(vl.ns, 'sticky'),
        snStickyOffsetHeight = 'data-'.concat(vl.ns, 'sticky-offset-top');

    var _setNavMinHeight = function _setNavMinHeight(element) {
        var viewportHeight = window.innerHeight,
            maxHeight = viewportHeight - element.getAttribute(snStickyOffsetHeight) * 2;
        element.style.maxHeight = ''.concat(maxHeight, 'px');
    };

    var SideNavigation = /*#__PURE__*/ (function () {
        function SideNavigation() {
            _classCallCheck(this, SideNavigation);
        }

        _createClass(SideNavigation, [
            {
                key: 'dress',
                value: function dress(sideNav) {
                    if (sideNav.hasAttribute(snScrollSpyAtt) || vl.util.hasClass(sideNav, snScrollSpyClass)) {
                        vl.scrollspy = new ScrollSpy();
                        vl.scrollspy.dress(sideNav);
                    }

                    if (sideNav.hasAttribute(snStickyAtt) || vl.util.hasClass(sideNav, snStickyClass)) {
                        vl.sticky = new Sticky();
                        vl.sticky.dress(sideNav);
                    }

                    if (vl.util.exists(ResizeSensor_min) && vl.util.exists(vl.sticky)) {
                        new ResizeSensor_min(
                            sideNav.getRootNode().querySelectorAll('['.concat(snScrollSpyContentAtt, ']')),
                            vl.util.debounce(vl.sticky.handleEvent, 50)
                        );
                    }

                    if (!sideNav.hasAttribute(snScrollableAtt) && sideNav.hasAttribute(snStickyOffsetHeight)) {
                        _setNavMinHeight(sideNav);

                        window.addEventListener(
                            'resize',
                            vl.util.debounce(function () {
                                _setNavMinHeight(sideNav);
                            }, 200)
                        );
                    }
                },
            },
            {
                key: 'dressAll',
                value: function dressAll() {
                    var _this = this;

                    var allSideNavigations = document.querySelectorAll(
                        '['.concat(snAtt, ']:not([data-').concat(vl.ns, 'js-dress="false"])')
                    );

                    if (!vl.util.exists(allSideNavigations)) {
                        allSideNavigations = document.querySelectorAll(
                            '.'.concat(snClass, ':not([data-').concat(vl.ns, 'js-dress="false"])')
                        );
                    }

                    vl.util.each(allSideNavigations, function (sideNav) {
                        _this.dress(sideNav);
                    });
                },
            },
        ]);

        return SideNavigation;
    })();

    if (!('sideNavigation' in vl)) {
        vl.sideNavigation = new SideNavigation();
        window.addEventListener('load', function () {
            vl.sideNavigation.dressAll();
        });
    }

    return SideNavigation;
});

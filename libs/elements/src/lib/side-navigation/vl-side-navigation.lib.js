import ScrollSpy from './vl-side-navigation.scrollspy.lib';

// UIG-2278: vl lijkt niet in alle gevallen defined te zijn, terwijl deze lib daar precies wel op steunt
window.vl = window.vl || {};

// sticky.js - start
// source code copied from node_modules/@govflanders/vl-ui-side-navigation/src/js/side-navigation.js "version": "14.0.2"
// er zijn echter enkele aanpassingen gebeurd om te kunnen switchen tussen mobile & desktop
// idealiter importeren we sticky.js als aparte file, maar wegens issues met rollup imports staat deze nu binnen de .lib
const stiClass = `js-${vl.ns}sticky`,
    stiAtt = `data-${vl.ns}sticky`,
    stiFixedClass = `${stiClass}--fixed`,
    stiPlaceholderClass = `${stiClass}--placeholder`,
    regionClass = `${vl.ns}region`,
    stiStaticClass = `${stiClass}--static`,
    stiViewportTopClass = `${stiClass}--viewport-top`,
    stiViewportBottomClass = `${stiClass}--viewport-bottom`,
    stiViewportUnbottom = `${stiClass}--viewport-unbottom`,
    stiViewportContainerBottom = `${stiClass}--container-bottom`,
    stiDressedAttr = `data-${vl.ns}sticky-dressed`,
    stiOffsetAttr = `data-${vl.ns}sticky-offset-top`,
    layoutClass = `${vl.ns}layout`;
class Sticky {
    /**
     * Initialize sticky component
     */
    constructor() {
        // Set default values for affixedType and direction
        this.affixedType = 'STATIC';
        this.direction = 'down';

        // Set initialized and restyle flags to false
        this._initialized = false;
        this._reStyle = false;

        // Default dimensions
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
        };

        // Breakpoint stuff
        this._breakpoint = false;
        this.minWidth = ['xsmall', 'small'];
        this.previousBreakPointValue = undefined;

        // Loop over vl.util.each event and bind 'this'
        vl.util.each(['handleEvent'], (method) => {
            this[method] = this[method].bind(this);
        });
    }

    /**
     * Breakdown stick if breakpoint is small
     * @method _widthBreakpoint
     * @return {[type]}
     */
    _widthBreakpoint() {
        if (vl.util.exists(vl.breakpoint)) {
            this.updateStyleWhenSmall();
        } else {
            this._breakpoint = false;
        }
    }

    updateStyleWhenSmall() {
        if (this.minWidth.indexOf(vl.breakpoint.value) >= 0) {
            this._breakpoint = true;
            this.affixedType = 'STATIC';

            if (this.sidebar) this.sidebar.removeAttribute('style');

            if (this.sidebarInner) {
                vl.util.removeClass(this.sidebarInner, stiFixedClass);
                this.sidebarInner.removeAttribute('style');
            }
        } else {
            this._breakpoint = false;
        }
    }

    /**
     * Recalculate dimensions if needed on scroll
     * @method _calcDimensionsWithScroll
     */
    _calcDimensionsWithScroll() {
        let dims = this.dimensions;

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
    }

    /**
     * Is the sidebar-height smaller than the viewport
     * @method _isSidebarFitsViewport
     * @return {Boolean}
     */
    _isSidebarFitsViewport() {
        return this.dimensions.sidebarHeight < this.dimensions.viewportHeight;
    }

    /**
     * Determine the (desired) state of the sidebar
     * @method _getAffixType
     * @return {affixType}
     */
    _getAffixType() {
        let dims = this.dimensions,
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
        }

        // Make sure the translate Y is not bigger than container height.
        dims.translateY = Math.max(0, dims.translateY);
        dims.translateY = Math.min(dims.containerHeight, dims.translateY);

        dims.lastViewportTop = dims.viewportTop;

        return affixType;
    }

    /**
     * Determine direction of scroll
     * @method _observeScrollDir
     */
    _observeScrollDir() {
        let dims = this.dimensions,
            furthest;

        if (dims.lastViewportTop === dims.viewportTop) {
            return;
        }

        furthest = this.direction === 'down' ? Math.min : Math.max;

        // If the browser is scrolling not in the same direction.
        if (dims.viewportTop === furthest(dims.viewportTop, dims.lastViewportTop)) {
            this.direction = this.direction === 'down' ? 'up' : 'down';
        }
    }

    /**
     * Updates sticky with requestAnimationFrame for performance
     * @method _updateSticky
     * @param  {event}
     */
    _updateSticky(event = {}) {
        if (this._running) {
            return;
        }

        this._running = true;

        ((eventType) => {
            window.requestAnimationFrame(() => {
                switch (eventType) {
                    // When browser is scrolling only recalculate soms dimensions within scroll
                    case 'scroll':
                        this._calcDimensionsWithScroll();
                        this._observeScrollDir();
                        this._stickyPosition();
                        break;

                    // Force _stickyPosition, calc all dimensions, check breakpoint
                    case 'resize': {
                        // if breakpoint has changed compared to previous one; reset sticky
                        if (this.previousBreakPointValue !== vl.breakpoint.value) {
                            this.destroy();
                            this.updateStyleWhenSmall();
                        }
                        this.previousBreakPointValue = vl.breakpoint.value;
                    }
                    // eslint-disable-next-line no-fallthrough
                    default:
                        this._widthBreakpoint();
                        // if (this.container) {
                        this._calcDimensions();
                        this._stickyPosition(true);
                        // }
                        break;
                }
                this._running = false;
            });
        })(event.type);
    }

    /**
     * Get formatted translateString
     * @method _getTranslate
     * @param  {Number}      [y=0]
     * @param  {Number}      [x=0]
     * @param  {Number}      [z=0]
     * @return {[type]}
     */
    _getTranslate(y = 0, x = 0, z = 0) {
        return `translate3d(${y}, ${x}, ${z})`;
    }

    /**
     * Returns styles to return for vl.util.each affixType
     * @method _getStyle
     * @param  {affixType}
     * @return {style}
     */
    _getStyle(affixType) {
        let style, dims, translate;

        // If no affixType exist function
        if (!vl.util.exists(affixType)) {
            return;
        }

        style = { inner: {}, outer: {} };
        dims = this.dimensions;

        // Set different style props for the appropriate affixType
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
                style.outer = { height: dims.sidebarHeight };
                break;
        }

        style.outer = this._extend({ height: '' }, style.outer);
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
    }

    // Extend options object with defaults.
    _extend(defaults, options) {
        let results = {};

        for (let key in defaults) {
            if (vl.util.exists(options[key])) {
                results[key] = options[key];
            } else {
                results[key] = defaults[key];
            }
        }
        return results;
    }

    // make sticky
    _stickyPosition(force) {
        let affixType, style;

        if (this._breakpoint) {
            return;
        }

        force = this._reStyle || force || false;

        affixType = this._getAffixType();
        style = this._getStyle(affixType);

        if ((this.affixedType !== affixType || force) && affixType) {
            for (let key in style.outer) {
                if (Object.prototype.hasOwnProperty.call(style.outer, key)) {
                    let _unit = typeof style.outer[key] === 'number' ? 'px' : '';

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

            vl.util.addClass(this.sidebarInner, `${stiClass}--${affixType.toLowerCase()}`);

            for (let key in style.inner) {
                if (Object.prototype.hasOwnProperty.call(style.inner, key)) {
                    let _unit = typeof style.inner[key] === 'number' ? 'px' : '';

                    this.sidebarInner.style[key] = style.inner[key] + _unit;
                }
            }
        } else if (this._initialized) {
            this.sidebarInner.style.left = style.inner.left;
        }

        this.affixedType = affixType;
    }

    // Bind eventlisteners
    _bindEvents() {
        window.addEventListener('resize', this, { passive: true, capture: false });
        window.addEventListener('scroll', this, { passive: true, capture: false });

        this.sidebar.addEventListener('update.sticky', this);

        /*
        if (vl.util.exists(ResizeSensor)) {
            new ResizeSensor(this.sidebarInner, this.handleEvent);
        }
         */
    }

    // Handle events
    handleEvent(event) {
        this._updateSticky(event);
    }

    /**
     * Calculate top and left offset
     * @method _offsetRelative
     * @param  {element}=
     * @return {result}
     */
    _offsetRelative(element) {
        let result = {
                left: 0,
                top: 0,
            },
            offsetTop,
            offsetLeft;

        do {
            offsetTop = element.offsetTop;
            offsetLeft = element.offsetLeft;

            if (!isNaN(offsetTop)) {
                result.top += offsetTop;
            }

            if (!isNaN(offsetLeft)) {
                result.left += offsetLeft;
            }

            element = element.tagName === 'body' ? element.parentElement : element.offsetParent;
        } while (element);

        return result;
    }

    /**
     * Calculate dimensions of sticky and container
     * @method _calcDimensions
     */
    _calcDimensions() {
        let dims;

        if (this._breakpoint) {
            return;
        }
        dims = this.dimensions;

        // Container of sticky sidebar dimensions.
        dims.containerTop = this._offsetRelative(this.container).top;
        dims.containerHeight = this.container.clientHeight;
        dims.containerBottom = dims.containerTop + dims.containerHeight;

        // Sidebar dimensions.
        dims.sidebarHeight = this.sidebarInner.offsetHeight;
        dims.sidebarWidth = this.sidebarInner.offsetWidth;

        // Screen viewport dimensions.
        dims.viewportHeight = window.innerHeight;

        this._calcDimensionsWithScroll();
    }

    /**
     * Initiate single element, add classes and methods
     * @method dress
     * @param  {element} stickyContent
     */
    dress(stickyContent) {
        this.placeholder = document.createElement('div');

        stickyContent.setAttribute(stiDressedAttr, true);

        // Put placeholder around sticky content
        vl.util.addClass(this.placeholder, stiPlaceholderClass);
        vl.util.wrap(stickyContent, this.placeholder);

        // Set placeholder height fixed
        this.placeholder.style.height = `${this.placeholder.offsetHeight}px`;

        // Set specified offsetTop if defined
        if (stickyContent.hasAttribute(stiOffsetAttr)) {
            this.dimensions.topSpacing = parseInt(stickyContent.getAttribute(stiOffsetAttr), 10);
        }

        this.sidebar = stickyContent.parentNode;
        this.sidebarInner = stickyContent;
        this.container = this.sidebar.closest(`.${layoutClass}, .${regionClass}`);

        this._widthBreakpoint();
        this._calcDimensions();
        this._stickyPosition();
        this._bindEvents();
        this._initialized = true;
    }

    /**
     * Initiate elements and sets vl.breakpoint is available
     * @method dressAll
     * @return {[type]}
     */
    dressAll() {
        let elements;

        if (vl.util.exists(vl.breakpoint)) {
            if (this.minWidth.indexOf(vl.breakpoint.value) >= 0) {
                this._breakpoint = false;
            }
        }

        elements = document.querySelectorAll(`[${stiAtt}]:not([${stiDressedAttr}])`);

        vl.util.each(elements, (stickyContent) => {
            this.dress(stickyContent);
        });
    }

    /**
     * Destroy the slider instance
     * @method destroy
     */
    destroy() {
        let styleReset = {
            inner: {},
            outer: {},
        };

        // Remove eventlisteners
        window.removeEventListener('resize', this, { capture: false });
        window.removeEventListener('scroll', this, { capture: false });

        this.sidebar.removeEventListener('update.sticky', this);

        // Remove classes
        vl.util.removeClass(this.sidebarInner, stiFixedClass);

        // Remove attributes
        this.sidebarInner.removeAttribute(stiDressedAttr);

        // Remove sidebar inner-style
        styleReset.inner = {
            position: '',
            top: '',
            left: '',
            bottom: '',
            width: '',
            transform: '',
        };

        // Remove sidebar outer style
        styleReset.outer = { height: '', position: '' };

        for (let key in styleReset.outer) {
            if (Object.prototype.hasOwnProperty.call(styleReset.outer, key)) {
                this.sidebar.style[key] = styleReset.outer[key];
            }
        }

        for (let key in styleReset.inner) {
            if (Object.prototype.hasOwnProperty.call(styleReset.inner, key)) {
                this.sidebarInner.style[key] = styleReset.inner[key];
            }
        }

        // Remove all state classes
        this.sidebarInner.classList.remove(
            stiStaticClass,
            stiViewportTopClass,
            stiViewportBottomClass,
            stiViewportUnbottom,
            stiViewportContainerBottom
        );

        this._initialized = false;

        // Remove sticky-placeholder
        if (vl.util.exists(this.placeholder)) {
            this.placeholder.outerHTML = this.placeholder.innerHTML;
        }

        // Detach ResizeSensor
        /*
        if (vl.util.exists(ResizeSensor)) {
            ResizeSensor.detach(this.sidebarInner, this.handleEvent);
        }
         */
    }
}

// side-navigation.js start
// source code copied from node_modules/@govflanders/vl-ui-side-navigation/src/js/side-navigation.js "version": "14.0.2"

const snAtt = `data-${vl.ns}side-navigation`,
    snClass = `js-${vl.ns}side-navigation`,
    snScrollableAtt = `data-${vl.ns}side-navigation-scrollable`,
    snScrollSpyAtt = `data-${vl.ns}scrollspy`,
    snScrollSpyContentAtt = `data-${vl.ns}scrollspy-content`,
    snScrollSpyClass = `js-${vl.ns}scrollspy`,
    snStickyAtt = `data-${vl.ns}sticky`,
    snStickyClass = `js-${vl.ns}sticky`,
    snStickyOffsetHeight = `data-${vl.ns}sticky-offset-top`;

const _setNavMinHeight = (element) => {
    let viewportHeight = window.innerHeight,
        maxHeight = viewportHeight - element.getAttribute(snStickyOffsetHeight) * 2;

    element.style.maxHeight = `${maxHeight}px`;
};

class SideNavigation {
    dress(sideNav) {
        if (sideNav.hasAttribute(snScrollSpyAtt) || vl.util.hasClass(sideNav, snScrollSpyClass)) {
            vl.scrollspy = new ScrollSpy();
            vl.scrollspy.dressAll();
        }

        if (sideNav.hasAttribute(snStickyAtt) || vl.util.hasClass(sideNav, snStickyClass)) {
            vl.sticky = new Sticky();
            vl.sticky.dressAll();
        }

        /*
        if (vl.util.exists(ResizeSensor) && vl.util.exists(vl.sticky)) {
            new ResizeSensor(
                document.querySelectorAll(`[${snScrollSpyContentAtt}]`),
                vl.util.debounce(vl.sticky.handleEvent, 50)
            );
        }
         */

        if (!sideNav.hasAttribute(snScrollableAtt) && sideNav.hasAttribute(snStickyOffsetHeight)) {
            _setNavMinHeight(sideNav);

            window.addEventListener(
                'resize',
                vl.util.debounce(() => {
                    _setNavMinHeight(sideNav);
                }, 200)
            );
        }
    }

    dressAll() {
        let allSideNavigations = document.querySelectorAll(`[${snAtt}]:not([data-${vl.ns}js-dress="false"])`);

        if (!vl.util.exists(allSideNavigations)) {
            allSideNavigations = document.querySelectorAll(`.${snClass}:not([data-${vl.ns}js-dress="false"])`);
        }

        vl.util.each(allSideNavigations, (sideNav) => {
            this.dress(sideNav);
        });
    }
}

if (!('sideNavigation' in vl)) {
    vl.sideNavigation = new SideNavigation();
    window.addEventListener('load', () => {
        vl.sideNavigation.dressAll();
    });
}

export default SideNavigation;

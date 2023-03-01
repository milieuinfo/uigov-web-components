/* 
    ! DEZE FILE IS AANGEPAST DOOR HET UIG-TEAM EN KOMT NIET LANGER OVEREEN MET DE ORIGINELE RANGE.JS VAN DIGITAAL VLAANDEREN.
    
    Aanpassingen:
        - Ongebruikte code verwijderd (~2000 lijnen)
        - Range function verwijderd, deze bevatte enkel een dressAll() die achterliggend de dress() van RangeSlider aansprak
        - dress() voorzien op vl.range niveau (zie beneden aan de file)
*/

window.vl = window.vl || {};

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? (module.exports = factory())
        : typeof define === 'function' && define.amd
        ? define(factory)
        : (global.range = factory());
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
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, 'prototype', {
            writable: false,
        });
        return Constructor;
    }

    /**
     * Range
     */
    var raClass = '.js-'.concat(vl.ns, 'range');
    var raFromClass = ''.concat(raClass, '__from');
    var raToClass = ''.concat(raClass, '__to');
    var raSliderClass = ''.concat(raClass, '__slider');
    var raSliderRangeClass = ''.concat(raClass, '__slider-range');
    var raHandleFromClass = ''.concat(raFromClass, '-handle');
    var raHandleToClass = ''.concat(raToClass, '-handle');
    var raLabelFromClass = ''.concat(raFromClass, '-input');
    var raLabelToClass = ''.concat(raToClass, '-input');

    var RangeSlider = /*#__PURE__*/ (function () {
        function RangeSlider(element) {
            _classCallCheck(this, RangeSlider);

            this.el = element;
            this.sliderEl = this.el.querySelector(raSliderClass);
            this.sliderRange = this.el.querySelector(raSliderRangeClass);
            this.minInputValueEl = this.el.querySelector(raLabelFromClass);
            this.maxInputValueEl = this.el.querySelector(raLabelToClass);
            this.minHandleEl = this.el.querySelector(raHandleFromClass);
            this.maxHandleEl = this.el.querySelector(raHandleToClass);
            this.minPos = 0;
            this.maxPos = 0;
            this.valueNow = 50;
            this.railMin = 0;
            this.railMax = 100;
            this.railWidth = 0;
            this.railBorderWidth = 0;
            this.thumbWidth = 15;
            this.keyCode = Object.freeze({
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
            });
        }

        _createClass(RangeSlider, [
            {
                key: 'handleKeyDown',
                value: function handleKeyDown(event) {
                    var self = this,
                        flag = false,
                        currentHandleEl = event.target;
                    self.valueNow = parseInt(currentHandleEl.getAttribute('aria-valuenow'), 10);

                    switch (event.keyCode) {
                        case this.keyCode.left:
                        case this.keyCode.down:
                            this.moveSliderTo(currentHandleEl, this.valueNow - 1);
                            flag = true;
                            break;

                        case this.keyCode.right:
                        case this.keyCode.up:
                            this.moveSliderTo(currentHandleEl, this.valueNow + 1);
                            flag = true;
                            break;

                        case this.keyCode.pageDown:
                            this.moveSliderTo(currentHandleEl, this.valueNow - 10);
                            flag = true;
                            break;

                        case this.keyCode.pageUp:
                            this.moveSliderTo(currentHandleEl, this.valueNow + 10);
                            flag = true;
                            break;

                        case this.keyCode.home:
                            this.moveSliderTo(currentHandleEl, this.railMin);
                            flag = true;
                            break;

                        case this.keyCode.end:
                            this.moveSliderTo(currentHandleEl, this.railMax);
                            flag = true;
                            break;

                        default:
                            break;
                    }

                    if (flag) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                },
            },
            {
                key: 'handleMouseDown',
                value: function handleMouseDown(event) {
                    var self = this,
                        currentHandleEl = event.target;

                    var handleMouseMove = function handleMouseMove(event) {
                        var diffX = event.pageX - self.sliderEl.getBoundingClientRect().left;
                        self.valueNow =
                            self.railMin + parseInt(((self.railMax - self.railMin) * diffX) / self.railWidth, 10);
                        self.moveSliderTo(currentHandleEl, self.valueNow);
                        event.preventDefault();
                        event.stopPropagation();
                    };

                    var handleMouseUp = function handleMouseUp() {
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                        document.removeEventListener('touchmove', handleMouseMove);
                        document.removeEventListener('touchend', handleMouseUp);
                    }; // bind a mousemove event handler to move pointer

                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('touchmove', handleMouseMove); // bind a mouseup event handler to stop tracking mouse movements

                    document.addEventListener('mouseup', handleMouseUp);
                    document.addEventListener('touchend', handleMouseUp);
                    event.preventDefault();
                    event.stopPropagation(); // Set focus to the clicked handle

                    currentHandleEl.focus();
                },
            },
            {
                key: 'moveSliderTo',
                value: function moveSliderTo(handleEl, value) {
                    var valueMax = parseInt(handleEl.getAttribute('aria-valuemax'), 10),
                        valueMin = parseInt(handleEl.getAttribute('aria-valuemin'), 10),
                        pos,
                        rangeWidthPerc,
                        rangeLeftPosPerc;

                    if (value > valueMax) {
                        value = valueMax;
                    }

                    if (value < valueMin) {
                        value = valueMin;
                    }

                    this.valueNow = Number(value);
                    this.valueNowText = value;
                    handleEl.setAttribute('aria-valuenow', this.valueNow);
                    handleEl.setAttribute('aria-valuetext', this.valueNowText);

                    if (handleEl === this.minHandleEl) {
                        this.minInputValueEl.value = this.valueNow.toString();
                    }

                    if (handleEl === this.maxHandleEl) {
                        this.maxInputValueEl.value = this.valueNow.toString();
                    }

                    pos = Math.round(
                        ((this.valueNow - this.railMin) *
                            (this.railWidth - 2 * (this.thumbWidth - this.railBorderWidth))) /
                            this.railMax -
                            this.railMin
                    );

                    if (handleEl === this.minHandleEl) {
                        this.minPos = pos;
                        this.maxHandleEl.setAttribute('aria-valuemin', this.valueNow);
                        handleEl.style.transform = 'translateX('.concat(pos - this.railBorderWidth + 'px', ')');
                    } else {
                        this.maxPos = pos;
                        this.minHandleEl.setAttribute('aria-valuemax', this.valueNow);
                        handleEl.style.transform = 'translateX('.concat(
                            pos + this.thumbWidth - this.railBorderWidth + 'px',
                            ')'
                        );
                    }

                    rangeWidthPerc = ((this.maxPos - this.minPos) / this.railWidth) * 100;
                    this.sliderRange.style.width = ''.concat(rangeWidthPerc + '%');
                    rangeLeftPosPerc = ((this.minPos + this.thumbWidth) / this.railWidth) * 100;
                    this.sliderRange.style.left = ''.concat(rangeLeftPosPerc + '%');
                },
            },
            {
                key: 'handleResize',
                value: function handleResize() {
                    this.railWidth = parseInt(window.getComputedStyle(this.sliderEl).width, 10);
                    this.moveSliderTo(this.minHandleEl, this.minInputValueEl.value);
                    this.moveSliderTo(this.maxHandleEl, this.maxInputValueEl.value);
                },
            },
            {
                key: 'dress',
                value: function dress() {
                    var _this = this;

                    this.railMin = parseInt(this.minHandleEl.getAttribute('aria-valuemin'), 10);
                    this.railMax = parseInt(this.maxHandleEl.getAttribute('aria-valuemax'), 10);
                    this.railWidth = parseInt(window.getComputedStyle(this.sliderEl).width, 10);
                    this.minHandleEl.addEventListener('keydown', this.handleKeyDown.bind(this));
                    this.minHandleEl.addEventListener('mousedown', this.handleMouseDown.bind(this));
                    this.minHandleEl.addEventListener('touchstart', this.handleMouseDown.bind(this));
                    this.minInputValueEl.addEventListener('change', function () {
                        _this.moveSliderTo(_this.minHandleEl, _this.minInputValueEl.value);
                    });
                    this.maxHandleEl.addEventListener('keydown', this.handleKeyDown.bind(this));
                    this.maxHandleEl.addEventListener('mousedown', this.handleMouseDown.bind(this));
                    this.maxHandleEl.addEventListener('touchstart', this.handleMouseDown.bind(this));
                    this.maxInputValueEl.addEventListener('change', function () {
                        _this.moveSliderTo(_this.maxHandleEl, _this.maxInputValueEl.value);
                    });
                    window.addEventListener('resize', this.handleResize.bind(this));
                    this.moveSliderTo(this.minHandleEl, this.minInputValueEl.value);
                    this.moveSliderTo(this.maxHandleEl, this.maxInputValueEl.value);
                },
            },
        ]);

        return RangeSlider;
    })();

    var raAtt = 'data-'.concat(vl.ns, 'range'),
        raDressedAtt = ''.concat(raAtt, '-dressed');

    if (!('range' in vl)) {
        vl.range = {
            dress: (rangeEl) => {
                rangeEl.setAttribute(raDressedAtt, true);
                var rangeSlider = new RangeSlider(rangeEl);
                rangeSlider.dress();
            },
        };
    }

    return Range;
});

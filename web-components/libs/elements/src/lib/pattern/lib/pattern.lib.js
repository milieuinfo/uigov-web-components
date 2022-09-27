(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? (module.exports = factory())
        : typeof define === 'function' && define.amd
        ? define(factory)
        : (global.pattern = factory());
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    function _typeof(obj) {
        '@babel/helpers - typeof';

        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
            _typeof = function (obj) {
                return typeof obj;
            };
        } else {
            _typeof = function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
            };
        }

        return _typeof(obj);
    }

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

    var NumeralFormatter = function NumeralFormatter(
        numeralDecimalMark,
        numeralIntegerScale,
        numeralDecimalScale,
        numeralThousandsGroupStyle,
        numeralPositiveOnly,
        stripLeadingZeroes,
        prefix,
        signBeforePrefix,
        tailPrefix,
        delimiter
    ) {
        var owner = this;
        owner.numeralDecimalMark = numeralDecimalMark || '.';
        owner.numeralIntegerScale = numeralIntegerScale > 0 ? numeralIntegerScale : 0;
        owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
        owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
        owner.numeralPositiveOnly = !!numeralPositiveOnly;
        owner.stripLeadingZeroes = stripLeadingZeroes !== false;
        owner.prefix = prefix || prefix === '' ? prefix : '';
        owner.signBeforePrefix = !!signBeforePrefix;
        owner.tailPrefix = !!tailPrefix;
        owner.delimiter = delimiter || delimiter === '' ? delimiter : ',';
        owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';
    };

    NumeralFormatter.groupStyle = {
        thousand: 'thousand',
        lakh: 'lakh',
        wan: 'wan',
        none: 'none',
    };
    NumeralFormatter.prototype = {
        getRawValue: function getRawValue(value) {
            return value.replace(this.delimiterRE, '').replace(this.numeralDecimalMark, '.');
        },
        format: function format(value) {
            var owner = this,
                parts,
                partSign,
                partSignAndPrefix,
                partInteger,
                partDecimal = ''; // strip alphabet letters

            value = value
                .replace(/[A-Za-z]/g, '') // replace the first decimal mark with reserved placeholder
                .replace(owner.numeralDecimalMark, 'M') // strip non numeric letters except minus and "M"
                // this is to ensure prefix has been stripped
                .replace(/[^\dM-]/g, '') // replace the leading minus with reserved placeholder
                .replace(/^\-/, 'N') // strip the other minus sign (if present)
                .replace(/\-/g, '') // replace the minus sign (if present)
                .replace('N', owner.numeralPositiveOnly ? '' : '-') // replace decimal mark
                .replace('M', owner.numeralDecimalMark); // strip any leading zeros

            if (owner.stripLeadingZeroes) {
                value = value.replace(/^(-)?0+(?=\d)/, '$1');
            }

            partSign = value.slice(0, 1) === '-' ? '-' : '';

            if (typeof owner.prefix != 'undefined') {
                if (owner.signBeforePrefix) {
                    partSignAndPrefix = partSign + owner.prefix;
                } else {
                    partSignAndPrefix = owner.prefix + partSign;
                }
            } else {
                partSignAndPrefix = partSign;
            }

            partInteger = value;

            if (value.indexOf(owner.numeralDecimalMark) >= 0) {
                parts = value.split(owner.numeralDecimalMark);
                partInteger = parts[0];
                partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
            }

            if (partSign === '-') {
                partInteger = partInteger.slice(1);
            }

            if (owner.numeralIntegerScale > 0) {
                partInteger = partInteger.slice(0, owner.numeralIntegerScale);
            }

            switch (owner.numeralThousandsGroupStyle) {
                case NumeralFormatter.groupStyle.lakh:
                    partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, '$1' + owner.delimiter);
                    break;

                case NumeralFormatter.groupStyle.wan:
                    partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, '$1' + owner.delimiter);
                    break;

                case NumeralFormatter.groupStyle.thousand:
                    partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, '$1' + owner.delimiter);
                    break;
            }

            if (owner.tailPrefix) {
                return (
                    partSign +
                    partInteger.toString() +
                    (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '') +
                    owner.prefix
                );
            }

            return (
                partSignAndPrefix +
                partInteger.toString() +
                (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '')
            );
        },
    };
    var NumeralFormatter_1 = NumeralFormatter;

    var DateFormatter = function DateFormatter(datePattern, dateMin, dateMax) {
        var owner = this;
        owner.date = [];
        owner.blocks = [];
        owner.datePattern = datePattern;
        owner.dateMin = dateMin
            .split('-')
            .reverse()
            .map(function (x) {
                return parseInt(x, 10);
            });
        if (owner.dateMin.length === 2) owner.dateMin.unshift(0);
        owner.dateMax = dateMax
            .split('-')
            .reverse()
            .map(function (x) {
                return parseInt(x, 10);
            });
        if (owner.dateMax.length === 2) owner.dateMax.unshift(0);
        owner.initBlocks();
    };

    DateFormatter.prototype = {
        initBlocks: function initBlocks() {
            var owner = this;
            owner.datePattern.forEach(function (value) {
                if (value === 'Y') {
                    owner.blocks.push(4);
                } else {
                    owner.blocks.push(2);
                }
            });
        },
        getISOFormatDate: function getISOFormatDate() {
            var owner = this,
                date = owner.date;
            return date[2] ? date[2] + '-' + owner.addLeadingZero(date[1]) + '-' + owner.addLeadingZero(date[0]) : '';
        },
        getBlocks: function getBlocks() {
            return this.blocks;
        },
        getValidatedDate: function getValidatedDate(value) {
            var owner = this,
                result = '';
            value = value.replace(/[^\d]/g, '');
            owner.blocks.forEach(function (length, index) {
                if (value.length > 0) {
                    var sub = value.slice(0, length),
                        sub0 = sub.slice(0, 1),
                        rest = value.slice(length);

                    switch (owner.datePattern[index]) {
                        case 'd':
                            if (sub === '00') {
                                sub = '01';
                            } else if (parseInt(sub0, 10) > 3) {
                                sub = '0' + sub0;
                            } else if (parseInt(sub, 10) > 31) {
                                sub = '31';
                            }

                            break;

                        case 'm':
                            if (sub === '00') {
                                sub = '01';
                            } else if (parseInt(sub0, 10) > 1) {
                                sub = '0' + sub0;
                            } else if (parseInt(sub, 10) > 12) {
                                sub = '12';
                            }

                            break;
                    }

                    result += sub; // update remaining string

                    value = rest;
                }
            });
            return this.getFixedDateString(result);
        },
        getFixedDateString: function getFixedDateString(value) {
            var owner = this,
                datePattern = owner.datePattern,
                date = [],
                dayIndex = 0,
                monthIndex = 0,
                yearIndex = 0,
                dayStartIndex = 0,
                monthStartIndex = 0,
                yearStartIndex = 0,
                day,
                month,
                year,
                fullYearDone = false; // mm-dd || dd-mm

            if (value.length === 4 && datePattern[0].toLowerCase() !== 'y' && datePattern[1].toLowerCase() !== 'y') {
                dayStartIndex = datePattern[0] === 'd' ? 0 : 2;
                monthStartIndex = 2 - dayStartIndex;
                day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
                month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
                date = this.getFixedDate(day, month, 0);
            } // yyyy-mm-dd || yyyy-dd-mm || mm-dd-yyyy || dd-mm-yyyy || dd-yyyy-mm || mm-yyyy-dd

            if (value.length === 8) {
                datePattern.forEach(function (type, index) {
                    switch (type) {
                        case 'd':
                            dayIndex = index;
                            break;

                        case 'm':
                            monthIndex = index;
                            break;

                        default:
                            yearIndex = index;
                            break;
                    }
                });
                yearStartIndex = yearIndex * 2;
                dayStartIndex = dayIndex <= yearIndex ? dayIndex * 2 : dayIndex * 2 + 2;
                monthStartIndex = monthIndex <= yearIndex ? monthIndex * 2 : monthIndex * 2 + 2;
                day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
                month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
                year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);
                fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;
                date = this.getFixedDate(day, month, year);
            } // mm-yy || yy-mm

            if (value.length === 4 && (datePattern[0] === 'y' || datePattern[1] === 'y')) {
                monthStartIndex = datePattern[0] === 'm' ? 0 : 2;
                yearStartIndex = 2 - monthStartIndex;
                month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
                year = parseInt(value.slice(yearStartIndex, yearStartIndex + 2), 10);
                fullYearDone = value.slice(yearStartIndex, yearStartIndex + 2).length === 2;
                date = [0, month, year];
            } // mm-yyyy || yyyy-mm

            if (value.length === 6 && (datePattern[0] === 'Y' || datePattern[1] === 'Y')) {
                monthStartIndex = datePattern[0] === 'm' ? 0 : 4;
                yearStartIndex = 2 - 0.5 * monthStartIndex;
                month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
                year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);
                fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;
                date = [0, month, year];
            }

            date = owner.getRangeFixedDate(date);
            owner.date = date;
            var result =
                date.length === 0
                    ? value
                    : datePattern.reduce(function (previous, current) {
                          switch (current) {
                              case 'd':
                                  return previous + (date[0] === 0 ? '' : owner.addLeadingZero(date[0]));

                              case 'm':
                                  return previous + (date[1] === 0 ? '' : owner.addLeadingZero(date[1]));

                              case 'y':
                                  return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], false) : '');

                              case 'Y':
                                  return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], true) : '');
                          }
                      }, '');
            return result;
        },
        getRangeFixedDate: function getRangeFixedDate(date) {
            var owner = this,
                datePattern = owner.datePattern,
                dateMin = owner.dateMin || [],
                dateMax = owner.dateMax || [];
            if (!date.length || (dateMin.length < 3 && dateMax.length < 3)) return date;
            if (
                datePattern.find(function (x) {
                    return x.toLowerCase() === 'y';
                }) &&
                date[2] === 0
            )
                return date;
            if (
                dateMax.length &&
                (dateMax[2] < date[2] ||
                    (dateMax[2] === date[2] &&
                        (dateMax[1] < date[1] || (dateMax[1] === date[1] && dateMax[0] < date[0]))))
            )
                return dateMax;
            if (
                dateMin.length &&
                (dateMin[2] > date[2] ||
                    (dateMin[2] === date[2] &&
                        (dateMin[1] > date[1] || (dateMin[1] === date[1] && dateMin[0] > date[0]))))
            )
                return dateMin;
            return date;
        },
        getFixedDate: function getFixedDate(day, month, year) {
            day = Math.min(day, 31);
            month = Math.min(month, 12);
            year = parseInt(year || 0, 10);

            if ((month < 7 && month % 2 === 0) || (month > 8 && month % 2 === 1)) {
                day = Math.min(day, month === 2 ? (this.isLeapYear(year) ? 29 : 28) : 30);
            }

            return [day, month, year];
        },
        isLeapYear: function isLeapYear(year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        },
        addLeadingZero: function addLeadingZero(number) {
            return (number < 10 ? '0' : '') + number;
        },
        addLeadingZeroForYear: function addLeadingZeroForYear(number, fullYearMode) {
            if (fullYearMode) {
                return (number < 10 ? '000' : number < 100 ? '00' : number < 1000 ? '0' : '') + number;
            }

            return (number < 10 ? '0' : '') + number;
        },
    };
    var DateFormatter_1 = DateFormatter;

    var TimeFormatter = function TimeFormatter(timePattern, timeFormat) {
        var owner = this;
        owner.time = [];
        owner.blocks = [];
        owner.timePattern = timePattern;
        owner.timeFormat = timeFormat;
        owner.initBlocks();
    };

    TimeFormatter.prototype = {
        initBlocks: function initBlocks() {
            var owner = this;
            owner.timePattern.forEach(function () {
                owner.blocks.push(2);
            });
        },
        getISOFormatTime: function getISOFormatTime() {
            var owner = this,
                time = owner.time;
            return time[2]
                ? owner.addLeadingZero(time[0]) +
                      ':' +
                      owner.addLeadingZero(time[1]) +
                      ':' +
                      owner.addLeadingZero(time[2])
                : '';
        },
        getBlocks: function getBlocks() {
            return this.blocks;
        },
        getTimeFormatOptions: function getTimeFormatOptions() {
            var owner = this;

            if (String(owner.timeFormat) === '12') {
                return {
                    maxHourFirstDigit: 1,
                    maxHours: 12,
                    maxMinutesFirstDigit: 5,
                    maxMinutes: 60,
                };
            }

            return {
                maxHourFirstDigit: 2,
                maxHours: 23,
                maxMinutesFirstDigit: 5,
                maxMinutes: 60,
            };
        },
        getValidatedTime: function getValidatedTime(value) {
            var owner = this,
                result = '';
            value = value.replace(/[^\d]/g, '');
            var timeFormatOptions = owner.getTimeFormatOptions();
            owner.blocks.forEach(function (length, index) {
                if (value.length > 0) {
                    var sub = value.slice(0, length),
                        sub0 = sub.slice(0, 1),
                        rest = value.slice(length);

                    switch (owner.timePattern[index]) {
                        case 'h':
                            if (parseInt(sub0, 10) > timeFormatOptions.maxHourFirstDigit) {
                                sub = '0' + sub0;
                            } else if (parseInt(sub, 10) > timeFormatOptions.maxHours) {
                                sub = timeFormatOptions.maxHours + '';
                            }

                            break;

                        case 'm':
                        case 's':
                            if (parseInt(sub0, 10) > timeFormatOptions.maxMinutesFirstDigit) {
                                sub = '0' + sub0;
                            } else if (parseInt(sub, 10) > timeFormatOptions.maxMinutes) {
                                sub = timeFormatOptions.maxMinutes + '';
                            }

                            break;
                    }

                    result += sub; // update remaining string

                    value = rest;
                }
            });
            return this.getFixedTimeString(result);
        },
        getFixedTimeString: function getFixedTimeString(value) {
            var owner = this,
                timePattern = owner.timePattern,
                time = [],
                secondIndex = 0,
                minuteIndex = 0,
                hourIndex = 0,
                secondStartIndex = 0,
                minuteStartIndex = 0,
                hourStartIndex = 0,
                second,
                minute,
                hour;

            if (value.length === 6) {
                timePattern.forEach(function (type, index) {
                    switch (type) {
                        case 's':
                            secondIndex = index * 2;
                            break;

                        case 'm':
                            minuteIndex = index * 2;
                            break;

                        case 'h':
                            hourIndex = index * 2;
                            break;
                    }
                });
                hourStartIndex = hourIndex;
                minuteStartIndex = minuteIndex;
                secondStartIndex = secondIndex;
                second = parseInt(value.slice(secondStartIndex, secondStartIndex + 2), 10);
                minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
                hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);
                time = this.getFixedTime(hour, minute, second);
            }

            if (value.length === 4 && owner.timePattern.indexOf('s') < 0) {
                timePattern.forEach(function (type, index) {
                    switch (type) {
                        case 'm':
                            minuteIndex = index * 2;
                            break;

                        case 'h':
                            hourIndex = index * 2;
                            break;
                    }
                });
                hourStartIndex = hourIndex;
                minuteStartIndex = minuteIndex;
                second = 0;
                minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
                hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);
                time = this.getFixedTime(hour, minute, second);
            }

            owner.time = time;
            return time.length === 0
                ? value
                : timePattern.reduce(function (previous, current) {
                      switch (current) {
                          case 's':
                              return previous + owner.addLeadingZero(time[2]);

                          case 'm':
                              return previous + owner.addLeadingZero(time[1]);

                          case 'h':
                              return previous + owner.addLeadingZero(time[0]);
                      }
                  }, '');
        },
        getFixedTime: function getFixedTime(hour, minute, second) {
            second = Math.min(parseInt(second || 0, 10), 60);
            minute = Math.min(minute, 60);
            hour = Math.min(hour, 60);
            return [hour, minute, second];
        },
        addLeadingZero: function addLeadingZero(number) {
            return (number < 10 ? '0' : '') + number;
        },
    };
    var TimeFormatter_1 = TimeFormatter;

    var PhoneFormatter = function PhoneFormatter(formatter, delimiter) {
        var owner = this;
        owner.delimiter = delimiter || delimiter === '' ? delimiter : ' ';
        owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';
        owner.formatter = formatter;
    };

    PhoneFormatter.prototype = {
        setFormatter: function setFormatter(formatter) {
            this.formatter = formatter;
        },
        format: function format(phoneNumber) {
            var owner = this;
            owner.formatter.clear(); // only keep number and +

            phoneNumber = phoneNumber.replace(/[^\d+]/g, ''); // strip non-leading +

            phoneNumber = phoneNumber.replace(/^\+/, 'B').replace(/\+/g, '').replace('B', '+'); // strip delimiter

            phoneNumber = phoneNumber.replace(owner.delimiterRE, '');
            var result = '',
                current,
                validated = false;

            for (var i = 0, iMax = phoneNumber.length; i < iMax; i++) {
                current = owner.formatter.inputDigit(phoneNumber.charAt(i)); // has ()- or space inside

                if (/[\s()-]/g.test(current)) {
                    result = current;
                    validated = true;
                } else {
                    if (!validated) {
                        result = current;
                    } // else: over length input
                    // it turns to invalid number again
                }
            } // strip ()
            // e.g. US: 7161234567 returns (716) 123-4567

            result = result.replace(/[()]/g, ''); // replace library delimiter with user customized delimiter

            result = result.replace(/[\s-]/g, owner.delimiter);
            return result;
        },
    };
    var PhoneFormatter_1 = PhoneFormatter;
    var CreditCardDetector = {
        blocks: {
            uatp: [4, 5, 6],
            amex: [4, 6, 5],
            diners: [4, 6, 4],
            discover: [4, 4, 4, 4],
            mastercard: [4, 4, 4, 4],
            dankort: [4, 4, 4, 4],
            instapayment: [4, 4, 4, 4],
            jcb15: [4, 6, 5],
            jcb: [4, 4, 4, 4],
            maestro: [4, 4, 4, 4],
            visa: [4, 4, 4, 4],
            mir: [4, 4, 4, 4],
            unionPay: [4, 4, 4, 4],
            general: [4, 4, 4, 4],
        },
        re: {
            // starts with 1; 15 digits, not starts with 1800 (jcb card)
            uatp: /^(?!1800)1\d{0,14}/,
            // starts with 34/37; 15 digits
            amex: /^3[47]\d{0,13}/,
            // starts with 6011/65/644-649; 16 digits
            discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
            // starts with 300-305/309 or 36/38/39; 14 digits
            diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
            // starts with 51-55/2221–2720; 16 digits
            mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
            // starts with 5019/4175/4571; 16 digits
            dankort: /^(5019|4175|4571)\d{0,12}/,
            // starts with 637-639; 16 digits
            instapayment: /^63[7-9]\d{0,13}/,
            // starts with 2131/1800; 15 digits
            jcb15: /^(?:2131|1800)\d{0,11}/,
            // starts with 2131/1800/35; 16 digits
            jcb: /^(?:35\d{0,2})\d{0,12}/,
            // starts with 50/56-58/6304/67; 16 digits
            maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
            // starts with 22; 16 digits
            mir: /^220[0-4]\d{0,12}/,
            // starts with 4; 16 digits
            visa: /^4\d{0,15}/,
            // starts with 62/81; 16 digits
            unionPay: /^(62|81)\d{0,14}/,
        },
        getStrictBlocks: function getStrictBlocks(block) {
            var total = block.reduce(function (prev, current) {
                return prev + current;
            }, 0);
            return block.concat(19 - total);
        },
        getInfo: function getInfo(value, strictMode) {
            var blocks = CreditCardDetector.blocks,
                re = CreditCardDetector.re; // Some credit card can have up to 19 digits number.
            // Set strictMode to true will remove the 16 max-length restrain,
            // however, I never found any website validate card number like
            // this, hence probably you don't want to enable this option.

            strictMode = !!strictMode;

            for (var key in re) {
                if (re[key].test(value)) {
                    var matchedBlocks = blocks[key];
                    return {
                        type: key,
                        blocks: strictMode ? this.getStrictBlocks(matchedBlocks) : matchedBlocks,
                    };
                }
            }

            return {
                type: 'unknown',
                blocks: strictMode ? this.getStrictBlocks(blocks.general) : blocks.general,
            };
        },
    };
    var CreditCardDetector_1 = CreditCardDetector;
    var Util = {
        noop: function noop() {},
        strip: function strip(value, re) {
            return value.replace(re, '');
        },
        getPostDelimiter: function getPostDelimiter(value, delimiter, delimiters) {
            // single delimiter
            if (delimiters.length === 0) {
                return value.slice(-delimiter.length) === delimiter ? delimiter : '';
            } // multiple delimiters

            var matchedDelimiter = '';
            delimiters.forEach(function (current) {
                if (value.slice(-current.length) === current) {
                    matchedDelimiter = current;
                }
            });
            return matchedDelimiter;
        },
        getDelimiterREByDelimiter: function getDelimiterREByDelimiter(delimiter) {
            return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
        },
        getNextCursorPosition: function getNextCursorPosition(prevPos, oldValue, newValue, delimiter, delimiters) {
            // If cursor was at the end of value, just place it back.
            // Because new value could contain additional chars.
            if (oldValue.length === prevPos) {
                return newValue.length;
            }

            return prevPos + this.getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters);
        },
        getPositionOffset: function getPositionOffset(prevPos, oldValue, newValue, delimiter, delimiters) {
            var oldRawValue, newRawValue, lengthOffset;
            oldRawValue = this.stripDelimiters(oldValue.slice(0, prevPos), delimiter, delimiters);
            newRawValue = this.stripDelimiters(newValue.slice(0, prevPos), delimiter, delimiters);
            lengthOffset = oldRawValue.length - newRawValue.length;
            return lengthOffset !== 0 ? lengthOffset / Math.abs(lengthOffset) : 0;
        },
        stripDelimiters: function stripDelimiters(value, delimiter, delimiters) {
            var owner = this; // single delimiter

            if (delimiters.length === 0) {
                var delimiterRE = delimiter ? owner.getDelimiterREByDelimiter(delimiter) : '';
                return value.replace(delimiterRE, '');
            } // multiple delimiters

            delimiters.forEach(function (current) {
                current.split('').forEach(function (letter) {
                    value = value.replace(owner.getDelimiterREByDelimiter(letter), '');
                });
            });
            return value;
        },
        headStr: function headStr(str, length) {
            return str.slice(0, length);
        },
        getMaxLength: function getMaxLength(blocks) {
            return blocks.reduce(function (previous, current) {
                return previous + current;
            }, 0);
        },
        // strip prefix
        // Before type  |   After type    |     Return value
        // PEFIX-...    |   PEFIX-...     |     ''
        // PREFIX-123   |   PEFIX-123     |     123
        // PREFIX-123   |   PREFIX-23     |     23
        // PREFIX-123   |   PREFIX-1234   |     1234
        getPrefixStrippedValue: function getPrefixStrippedValue(
            value,
            prefix,
            prefixLength,
            prevResult,
            delimiter,
            delimiters,
            noImmediatePrefix,
            tailPrefix,
            signBeforePrefix
        ) {
            // No prefix
            if (prefixLength === 0) {
                return value;
            }

            if (signBeforePrefix && value.slice(0, 1) == '-') {
                var prev = prevResult.slice(0, 1) == '-' ? prevResult.slice(1) : prevResult;
                return (
                    '-' +
                    this.getPrefixStrippedValue(
                        value.slice(1),
                        prefix,
                        prefixLength,
                        prev,
                        delimiter,
                        delimiters,
                        noImmediatePrefix,
                        tailPrefix,
                        signBeforePrefix
                    )
                );
            } // Pre result prefix string does not match pre-defined prefix

            if (prevResult.slice(0, prefixLength) !== prefix && !tailPrefix) {
                // Check if the first time user entered something
                if (noImmediatePrefix && !prevResult && value) return value;
                return '';
            } else if (prevResult.slice(-prefixLength) !== prefix && tailPrefix) {
                // Check if the first time user entered something
                if (noImmediatePrefix && !prevResult && value) return value;
                return '';
            }

            var prevValue = this.stripDelimiters(prevResult, delimiter, delimiters); // New value has issue, someone typed in between prefix letters
            // Revert to pre value

            if (value.slice(0, prefixLength) !== prefix && !tailPrefix) {
                return prevValue.slice(prefixLength);
            } else if (value.slice(-prefixLength) !== prefix && tailPrefix) {
                return prevValue.slice(0, -prefixLength - 1);
            } // No issue, strip prefix for new value

            return tailPrefix ? value.slice(0, -prefixLength) : value.slice(prefixLength);
        },
        getFirstDiffIndex: function getFirstDiffIndex(prev, current) {
            var index = 0;

            while (prev.charAt(index) === current.charAt(index)) {
                if (prev.charAt(index++) === '') {
                    return -1;
                }
            }

            return index;
        },
        getFormattedValue: function getFormattedValue(
            value,
            blocks,
            blocksLength,
            delimiter,
            delimiters,
            delimiterLazyShow
        ) {
            var result = '',
                multipleDelimiters = delimiters.length > 0,
                currentDelimiter; // no options, normal input

            if (blocksLength === 0) {
                return value;
            }

            blocks.forEach(function (length, index) {
                if (value.length > 0) {
                    var sub = value.slice(0, length),
                        rest = value.slice(length);

                    if (multipleDelimiters) {
                        currentDelimiter = delimiters[delimiterLazyShow ? index - 1 : index] || currentDelimiter;
                    } else {
                        currentDelimiter = delimiter;
                    }

                    if (delimiterLazyShow) {
                        if (index > 0) {
                            result += currentDelimiter;
                        }

                        result += sub;
                    } else {
                        result += sub;

                        if (sub.length === length && index < blocksLength - 1) {
                            result += currentDelimiter;
                        }
                    } // update remaining string

                    value = rest;
                }
            });
            return result;
        },
        // move cursor to the end
        // the first time user focuses on an input with prefix
        fixPrefixCursor: function fixPrefixCursor(el, prefix, delimiter, delimiters) {
            if (!el) {
                return;
            }

            var val = el.value,
                appendix = delimiter || delimiters[0] || ' ';

            if (!el.setSelectionRange || !prefix || prefix.length + appendix.length <= val.length) {
                return;
            }

            var len = val.length * 2; // set timeout to avoid blink

            setTimeout(function () {
                el.setSelectionRange(len, len);
            }, 1);
        },
        // Check if input field is fully selected
        checkFullSelection: function checkFullSelection(value) {
            try {
                var selection = window.getSelection() || document.getSelection() || {};
                return selection.toString().length === value.length;
            } catch (ex) {
                // Ignore
            }

            return false;
        },
        setSelection: function setSelection(element, position, doc) {
            if (element !== this.getActiveElement(doc)) {
                return;
            } // cursor is already in the end

            if (element && element.value.length <= position) {
                return;
            }

            if (element.createTextRange) {
                var range = element.createTextRange();
                range.move('character', position);
                range.select();
            } else {
                try {
                    element.setSelectionRange(position, position);
                } catch (e) {
                    // eslint-disable-next-line
                    console.warn('The input element type does not support selection');
                }
            }
        },
        getActiveElement: function getActiveElement(parent) {
            var activeElement = parent.activeElement;

            if (activeElement && activeElement.shadowRoot) {
                return this.getActiveElement(activeElement.shadowRoot);
            }

            return activeElement;
        },
        isAndroid: function isAndroid() {
            return navigator && /android/i.test(navigator.userAgent);
        },
        // On Android chrome, the keyup and keydown events
        // always return key code 229 as a composition that
        // buffers the user’s keystrokes
        // see https://github.com/nosir/cleave.js/issues/147
        isAndroidBackspaceKeydown: function isAndroidBackspaceKeydown(lastInputValue, currentInputValue) {
            if (!this.isAndroid() || !lastInputValue || !currentInputValue) {
                return false;
            }

            return currentInputValue === lastInputValue.slice(0, -1);
        },
    };
    var Util_1 = Util;
    /**
     * Props Assignment
     *
     * Separate this, so react module can share the usage
     */

    var DefaultProperties = {
        // Maybe change to object-assign
        // for now just keep it as simple
        assign: function assign(target, opts) {
            target = target || {};
            opts = opts || {}; // credit card

            target.creditCard = !!opts.creditCard;
            target.creditCardStrictMode = !!opts.creditCardStrictMode;
            target.creditCardType = '';

            target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || function () {}; // phone

            target.phone = !!opts.phone;
            target.phoneRegionCode = opts.phoneRegionCode || 'AU';
            target.phoneFormatter = {}; // time

            target.time = !!opts.time;
            target.timePattern = opts.timePattern || ['h', 'm', 's'];
            target.timeFormat = opts.timeFormat || '24';
            target.timeFormatter = {}; // date

            target.date = !!opts.date;
            target.datePattern = opts.datePattern || ['d', 'm', 'Y'];
            target.dateMin = opts.dateMin || '';
            target.dateMax = opts.dateMax || '';
            target.dateFormatter = {}; // numeral

            target.numeral = !!opts.numeral;
            target.numeralIntegerScale = opts.numeralIntegerScale > 0 ? opts.numeralIntegerScale : 0;
            target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
            target.numeralDecimalMark = opts.numeralDecimalMark || '.';
            target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || 'thousand';
            target.numeralPositiveOnly = !!opts.numeralPositiveOnly;
            target.stripLeadingZeroes = opts.stripLeadingZeroes !== false;
            target.signBeforePrefix = !!opts.signBeforePrefix;
            target.tailPrefix = !!opts.tailPrefix; // others

            target.swapHiddenInput = !!opts.swapHiddenInput;
            target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;
            target.hexadecimalOnly = !!opts.hexadecimalOnly;
            target.uppercase = !!opts.uppercase;
            target.lowercase = !!opts.lowercase;
            target.prefix = target.creditCard || target.date ? '' : opts.prefix || '';
            target.noImmediatePrefix = !!opts.noImmediatePrefix;
            target.prefixLength = target.prefix.length;
            target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
            target.copyDelimiter = !!opts.copyDelimiter;
            target.initValue = opts.initValue !== undefined && opts.initValue !== null ? opts.initValue.toString() : '';
            target.delimiter =
                opts.delimiter || opts.delimiter === ''
                    ? opts.delimiter
                    : opts.date
                    ? '/'
                    : opts.time
                    ? ':'
                    : opts.numeral
                    ? ','
                    : opts.phone
                    ? ' '
                    : ' ';
            target.delimiterLength = target.delimiter.length;
            target.delimiterLazyShow = !!opts.delimiterLazyShow;
            target.delimiters = opts.delimiters || [];
            target.blocks = opts.blocks || [];
            target.blocksLength = target.blocks.length;
            target.root = _typeof(commonjsGlobal) === 'object' && commonjsGlobal ? commonjsGlobal : window;
            target.document = opts.document || target.root.document;
            target.maxLength = 0;
            target.backspace = false;
            target.result = '';

            target.onValueChanged = opts.onValueChanged || function () {};

            return target;
        },
    };
    var DefaultProperties_1 = DefaultProperties;
    /**
     * Construct a new Cleave instance by passing the configuration object
     *
     * @param {String | HTMLElement} element
     * @param {Object} opts
     */

    var Cleave = function Cleave(element, opts) {
        var owner = this;
        var hasMultipleElements = false;

        if (typeof element === 'string') {
            owner.element = document.querySelector(element);
            hasMultipleElements = document.querySelectorAll(element).length > 1;
        } else {
            if (typeof element.length !== 'undefined' && element.length > 0) {
                owner.element = element[0];
                hasMultipleElements = element.length > 1;
            } else {
                owner.element = element;
            }
        }

        if (!owner.element) {
            throw new Error('[cleave.js] Please check the element');
        }

        if (hasMultipleElements) {
            try {
                // eslint-disable-next-line
                console.warn('[cleave.js] Multiple input fields matched, cleave.js will only take the first one.');
            } catch (e) {
                // Old IE
            }
        }

        opts.initValue = owner.element.value;
        owner.properties = Cleave.DefaultProperties.assign({}, opts);
        owner.init();
    };

    Cleave.prototype = {
        init: function init() {
            var owner = this,
                pps = owner.properties; // no need to use this lib

            if (
                !pps.numeral &&
                !pps.phone &&
                !pps.creditCard &&
                !pps.time &&
                !pps.date &&
                pps.blocksLength === 0 &&
                !pps.prefix
            ) {
                owner.onInput(pps.initValue);
                return;
            }

            pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
            owner.isAndroid = Cleave.Util.isAndroid();
            owner.lastInputValue = '';
            owner.onChangeListener = owner.onChange.bind(owner);
            owner.onKeyDownListener = owner.onKeyDown.bind(owner);
            owner.onFocusListener = owner.onFocus.bind(owner);
            owner.onCutListener = owner.onCut.bind(owner);
            owner.onCopyListener = owner.onCopy.bind(owner);
            owner.initSwapHiddenInput();
            owner.element.addEventListener('input', owner.onChangeListener);
            owner.element.addEventListener('keydown', owner.onKeyDownListener);
            owner.element.addEventListener('focus', owner.onFocusListener);
            owner.element.addEventListener('cut', owner.onCutListener);
            owner.element.addEventListener('copy', owner.onCopyListener);
            owner.initPhoneFormatter();
            owner.initDateFormatter();
            owner.initTimeFormatter();
            owner.initNumeralFormatter(); // avoid touch input field if value is null
            // otherwise Firefox will add red box-shadow for <input required />

            if (pps.initValue || (pps.prefix && !pps.noImmediatePrefix)) {
                owner.onInput(pps.initValue);
            }
        },
        initSwapHiddenInput: function initSwapHiddenInput() {
            var owner = this,
                pps = owner.properties;
            if (!pps.swapHiddenInput) return;
            var inputFormatter = owner.element.cloneNode(true);
            owner.element.parentNode.insertBefore(inputFormatter, owner.element);
            owner.elementSwapHidden = owner.element;
            owner.elementSwapHidden.type = 'hidden';
            owner.element = inputFormatter;
            owner.element.id = '';
        },
        initNumeralFormatter: function initNumeralFormatter() {
            var owner = this,
                pps = owner.properties;

            if (!pps.numeral) {
                return;
            }

            pps.numeralFormatter = new Cleave.NumeralFormatter(
                pps.numeralDecimalMark,
                pps.numeralIntegerScale,
                pps.numeralDecimalScale,
                pps.numeralThousandsGroupStyle,
                pps.numeralPositiveOnly,
                pps.stripLeadingZeroes,
                pps.prefix,
                pps.signBeforePrefix,
                pps.tailPrefix,
                pps.delimiter
            );
        },
        initTimeFormatter: function initTimeFormatter() {
            var owner = this,
                pps = owner.properties;

            if (!pps.time) {
                return;
            }

            pps.timeFormatter = new Cleave.TimeFormatter(pps.timePattern, pps.timeFormat);
            pps.blocks = pps.timeFormatter.getBlocks();
            pps.blocksLength = pps.blocks.length;
            pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
        },
        initDateFormatter: function initDateFormatter() {
            var owner = this,
                pps = owner.properties;

            if (!pps.date) {
                return;
            }

            pps.dateFormatter = new Cleave.DateFormatter(pps.datePattern, pps.dateMin, pps.dateMax);
            pps.blocks = pps.dateFormatter.getBlocks();
            pps.blocksLength = pps.blocks.length;
            pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
        },
        initPhoneFormatter: function initPhoneFormatter() {
            var owner = this,
                pps = owner.properties;

            if (!pps.phone) {
                return;
            } // Cleave.AsYouTypeFormatter should be provided by
            // external google closure lib

            try {
                pps.phoneFormatter = new Cleave.PhoneFormatter(
                    new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode),
                    pps.delimiter
                );
            } catch (ex) {
                throw new Error('[cleave.js] Please include phone-type-formatter.{country}.js lib');
            }
        },
        onKeyDown: function onKeyDown(event) {
            var owner = this,
                pps = owner.properties,
                charCode = event.which || event.keyCode,
                Util = Cleave.Util,
                currentValue = owner.element.value; // if we got any charCode === 8, this means, that this device correctly
            // sends backspace keys in event, so we do not need to apply any hacks

            owner.hasBackspaceSupport = owner.hasBackspaceSupport || charCode === 8;

            if (!owner.hasBackspaceSupport && Util.isAndroidBackspaceKeydown(owner.lastInputValue, currentValue)) {
                charCode = 8;
            }

            owner.lastInputValue = currentValue; // hit backspace when last character is delimiter

            var postDelimiter = Util.getPostDelimiter(currentValue, pps.delimiter, pps.delimiters);

            if (charCode === 8 && postDelimiter) {
                pps.postDelimiterBackspace = postDelimiter;
            } else {
                pps.postDelimiterBackspace = false;
            }
        },
        onChange: function onChange() {
            this.onInput(this.element.value);
        },
        onFocus: function onFocus() {
            var owner = this,
                pps = owner.properties;

            if (pps.prefix && pps.noImmediatePrefix && !owner.element.value) {
                this.onInput(pps.prefix);
            }

            Cleave.Util.fixPrefixCursor(owner.element, pps.prefix, pps.delimiter, pps.delimiters);
        },
        onCut: function onCut(e) {
            if (!Cleave.Util.checkFullSelection(this.element.value)) return;
            this.copyClipboardData(e);
            this.onInput('');
        },
        onCopy: function onCopy(e) {
            if (!Cleave.Util.checkFullSelection(this.element.value)) return;
            this.copyClipboardData(e);
        },
        copyClipboardData: function copyClipboardData(e) {
            var owner = this,
                pps = owner.properties,
                Util = Cleave.Util,
                inputValue = owner.element.value,
                textToCopy = '';

            if (!pps.copyDelimiter) {
                textToCopy = Util.stripDelimiters(inputValue, pps.delimiter, pps.delimiters);
            } else {
                textToCopy = inputValue;
            }

            try {
                if (e.clipboardData) {
                    e.clipboardData.setData('Text', textToCopy);
                } else {
                    window.clipboardData.setData('Text', textToCopy);
                }

                e.preventDefault();
            } catch (ex) {
                //  empty
            }
        },
        onInput: function onInput(value) {
            var owner = this,
                pps = owner.properties,
                Util = Cleave.Util; // case 1: delete one more character "4"
            // 1234*| -> hit backspace -> 123|
            // case 2: last character is not delimiter which is:
            // 12|34* -> hit backspace -> 1|34*
            // note: no need to apply this for numeral mode

            var postDelimiterAfter = Util.getPostDelimiter(value, pps.delimiter, pps.delimiters);

            if (!pps.numeral && pps.postDelimiterBackspace && !postDelimiterAfter) {
                value = Util.headStr(value, value.length - pps.postDelimiterBackspace.length);
            } // phone formatter

            if (pps.phone) {
                if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
                    pps.result = pps.prefix + pps.phoneFormatter.format(value).slice(pps.prefix.length);
                } else {
                    pps.result = pps.phoneFormatter.format(value);
                }

                owner.updateValueState();
                return;
            } // numeral formatter

            if (pps.numeral) {
                // Do not show prefix when noImmediatePrefix is specified
                // This mostly because we need to show user the native input placeholder
                if (pps.prefix && pps.noImmediatePrefix && value.length === 0) {
                    pps.result = '';
                } else {
                    pps.result = pps.numeralFormatter.format(value);
                }

                owner.updateValueState();
                return;
            } // date

            if (pps.date) {
                value = pps.dateFormatter.getValidatedDate(value);
            } // time

            if (pps.time) {
                value = pps.timeFormatter.getValidatedTime(value);
            } // strip delimiters

            value = Util.stripDelimiters(value, pps.delimiter, pps.delimiters); // strip prefix

            value = Util.getPrefixStrippedValue(
                value,
                pps.prefix,
                pps.prefixLength,
                pps.result,
                pps.delimiter,
                pps.delimiters,
                pps.noImmediatePrefix,
                pps.tailPrefix,
                pps.signBeforePrefix
            ); // strip non-numeric characters

            value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value; // convert case
            value = pps.hexadecimalOnly ? Util.strip(value, /[^0-9a-fA-F]/g) : value; // strip non-hexadecimal characters

            value = pps.uppercase ? value.toUpperCase() : value;
            value = pps.lowercase ? value.toLowerCase() : value; // prevent from showing prefix when no immediate option enabled with empty input value

            if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
                if (pps.tailPrefix) {
                    value = value + pps.prefix;
                } else {
                    value = pps.prefix + value;
                } // no blocks specified, no need to do formatting

                if (pps.blocksLength === 0) {
                    pps.result = value;
                    owner.updateValueState();
                    return;
                }
            } // update credit card props

            if (pps.creditCard) {
                owner.updateCreditCardPropsByValue(value);
            } // strip over length characters

            value = Util.headStr(value, pps.maxLength); // apply blocks

            pps.result = Util.getFormattedValue(
                value,
                pps.blocks,
                pps.blocksLength,
                pps.delimiter,
                pps.delimiters,
                pps.delimiterLazyShow
            );
            owner.updateValueState();
        },
        updateCreditCardPropsByValue: function updateCreditCardPropsByValue(value) {
            var owner = this,
                pps = owner.properties,
                Util = Cleave.Util,
                creditCardInfo; // At least one of the first 4 characters has changed

            if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) {
                return;
            }

            creditCardInfo = Cleave.CreditCardDetector.getInfo(value, pps.creditCardStrictMode);
            pps.blocks = creditCardInfo.blocks;
            pps.blocksLength = pps.blocks.length;
            pps.maxLength = Util.getMaxLength(pps.blocks); // credit card type changed

            if (pps.creditCardType !== creditCardInfo.type) {
                pps.creditCardType = creditCardInfo.type;
                pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
            }
        },
        updateValueState: function updateValueState() {
            var owner = this,
                Util = Cleave.Util,
                pps = owner.properties;

            if (!owner.element) {
                return;
            }

            var endPos = owner.element.selectionEnd;
            var oldValue = owner.element.value;
            var newValue = pps.result;
            endPos = Util.getNextCursorPosition(endPos, oldValue, newValue, pps.delimiter, pps.delimiters); // fix Android browser type="text" input field
            // cursor not jumping issue

            if (owner.isAndroid) {
                window.setTimeout(function () {
                    owner.element.value = newValue;
                    Util.setSelection(owner.element, endPos, pps.document, false);
                    owner.callOnValueChanged();
                }, 1);
                return;
            }

            owner.element.value = newValue;
            if (pps.swapHiddenInput) owner.elementSwapHidden.value = owner.getRawValue();
            Util.setSelection(owner.element, endPos, pps.document, false);
            owner.callOnValueChanged();
        },
        callOnValueChanged: function callOnValueChanged() {
            var owner = this,
                pps = owner.properties;
            pps.onValueChanged.call(owner, {
                target: {
                    name: owner.element.name,
                    value: pps.result,
                    rawValue: owner.getRawValue(),
                },
            });
        },
        setPhoneRegionCode: function setPhoneRegionCode(phoneRegionCode) {
            var owner = this,
                pps = owner.properties;
            pps.phoneRegionCode = phoneRegionCode;
            owner.initPhoneFormatter();
            owner.onChange();
        },
        setRawValue: function setRawValue(value) {
            var owner = this,
                pps = owner.properties;
            value = value !== undefined && value !== null ? value.toString() : '';

            if (pps.numeral) {
                value = value.replace('.', pps.numeralDecimalMark);
            }

            pps.postDelimiterBackspace = false;
            owner.element.value = value;
            owner.onInput(value);
        },
        getRawValue: function getRawValue() {
            var owner = this,
                pps = owner.properties,
                Util = Cleave.Util,
                rawValue = owner.element.value;

            if (pps.rawValueTrimPrefix) {
                rawValue = Util.getPrefixStrippedValue(
                    rawValue,
                    pps.prefix,
                    pps.prefixLength,
                    pps.result,
                    pps.delimiter,
                    pps.delimiters,
                    pps.noImmediatePrefix,
                    pps.tailPrefix,
                    pps.signBeforePrefix
                );
            }

            if (pps.numeral) {
                rawValue = pps.numeralFormatter.getRawValue(rawValue);
            } else {
                rawValue = Util.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
            }

            return rawValue;
        },
        getISOFormatDate: function getISOFormatDate() {
            var owner = this,
                pps = owner.properties;
            return pps.date ? pps.dateFormatter.getISOFormatDate() : '';
        },
        getISOFormatTime: function getISOFormatTime() {
            var owner = this,
                pps = owner.properties;
            return pps.time ? pps.timeFormatter.getISOFormatTime() : '';
        },
        getFormattedValue: function getFormattedValue() {
            return this.element.value;
        },
        destroy: function destroy() {
            var owner = this;
            owner.element.removeEventListener('input', owner.onChangeListener);
            owner.element.removeEventListener('keydown', owner.onKeyDownListener);
            owner.element.removeEventListener('focus', owner.onFocusListener);
            owner.element.removeEventListener('cut', owner.onCutListener);
            owner.element.removeEventListener('copy', owner.onCopyListener);
        },
        toString: function toString() {
            return '[Cleave Object]';
        },
    };
    Cleave.NumeralFormatter = NumeralFormatter_1;
    Cleave.DateFormatter = DateFormatter_1;
    Cleave.TimeFormatter = TimeFormatter_1;
    Cleave.PhoneFormatter = PhoneFormatter_1;
    Cleave.CreditCardDetector = CreditCardDetector_1;
    Cleave.Util = Util_1;
    Cleave.DefaultProperties = DefaultProperties_1; // for angular directive

    (_typeof(commonjsGlobal) === 'object' && commonjsGlobal ? commonjsGlobal : window)['Cleave'] = Cleave; // CommonJS

    var Cleave_1 = Cleave;

    var commonjsGlobal$1 =
        typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
            ? global
            : typeof self !== 'undefined'
            ? self
            : {};

    !function () {
        function n(n, t) {
            var e = n.split('.'),
                l = U;
            e[0] in l || !l.execScript || l.execScript('var ' + e[0]);

            for (var r; e.length && (r = e.shift()); ) {
                e.length || void 0 === t ? (l = l[r] ? l[r] : (l[r] = {})) : (l[r] = t);
            }
        }

        function t(n, t) {
            function e() {}

            (e.prototype = t.prototype),
                (n.M = t.prototype),
                (n.prototype = new e()),
                (n.prototype.constructor = n),
                (n.N = function (n, e, l) {
                    for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) {
                        r[i - 2] = arguments[i];
                    }

                    return t.prototype[e].apply(n, r);
                });
        }

        function e(n, t) {
            null != n && this.a.apply(this, arguments);
        }

        function l(n) {
            n.b = '';
        }

        function r(n, t) {
            n.sort(t || i);
        }

        function i(n, t) {
            return n > t ? 1 : n < t ? -1 : 0;
        }

        function u(n) {
            var t,
                e = [],
                l = 0;

            for (t in n) {
                e[l++] = n[t];
            }

            return e;
        }

        function a(n, t) {
            (this.b = n), (this.a = {});

            for (var e = 0; e < t.length; e++) {
                var l = t[e];
                this.a[l.b] = l;
            }
        }

        function o(n) {
            return (
                (n = u(n.a)),
                r(n, function (n, t) {
                    return n.b - t.b;
                }),
                n
            );
        }

        function s(n, t) {
            switch (((this.b = n), (this.g = !!t.v), (this.a = t.c), (this.i = t.type), (this.h = !1), this.a)) {
                case J:
                case K:
                case L:
                case O:
                case Z:
                case k:
                case Y:
                    this.h = !0;
            }

            this.f = t.defaultValue;
        }

        function f() {
            (this.a = {}), (this.f = this.j().a), (this.b = this.g = null);
        }

        function p(n, t) {
            for (var e = o(n.j()), l = 0; l < e.length; l++) {
                var r = e[l],
                    i = r.b;

                if (null != t.a[i]) {
                    n.b && delete n.b[r.b];
                    var u = 11 == r.a || 10 == r.a;
                    if (r.g)
                        for (var r = c(t, i) || [], a = 0; a < r.length; a++) {
                            var s = n,
                                f = i,
                                h = u ? r[a].clone() : r[a];
                            s.a[f] || (s.a[f] = []), s.a[f].push(h), s.b && delete s.b[f];
                        }
                    else (r = c(t, i)), u ? ((u = c(n, i)) ? p(u, r) : b(n, i, r.clone())) : b(n, i, r);
                }
            }
        }

        function c(n, t) {
            var e = n.a[t];
            if (null == e) return null;

            if (n.g) {
                if (!(t in n.b)) {
                    var l = n.g,
                        r = n.f[t];
                    if (null != e)
                        if (r.g) {
                            for (var i = [], u = 0; u < e.length; u++) {
                                i[u] = l.b(r, e[u]);
                            }

                            e = i;
                        } else e = l.b(r, e);
                    return (n.b[t] = e);
                }

                return n.b[t];
            }

            return e;
        }

        function h(n, t, e) {
            var l = c(n, t);
            return n.f[t].g ? l[e || 0] : l;
        }

        function g(n, t) {
            var e;
            if (null != n.a[t]) e = h(n, t, void 0);
            else
                n: {
                    if (((e = n.f[t]), void 0 === e.f)) {
                        var l = e.i;
                        if (l === Boolean) e.f = !1;
                        else if (l === Number) e.f = 0;
                        else {
                            if (l !== String) {
                                e = new l();
                                break n;
                            }

                            e.f = e.h ? '0' : '';
                        }
                    }

                    e = e.f;
                }
            return e;
        }

        function m(n, t) {
            return n.f[t].g ? (null != n.a[t] ? n.a[t].length : 0) : null != n.a[t] ? 1 : 0;
        }

        function b(n, t, e) {
            (n.a[t] = e), n.b && (n.b[t] = e);
        }

        function y(n, t) {
            var e,
                l = [];

            for (e in t) {
                0 != e && l.push(new s(e, t[e]));
            }

            return new a(n, l);
        }

        /*
        Protocol Buffer 2 Copyright 2008 Google Inc.
        All other code copyright its respective owners.
        Copyright (C) 2010 The Libphonenumber Authors
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        */

        function v() {
            f.call(this);
        }

        function d() {
            f.call(this);
        }

        function _() {
            f.call(this);
        }

        function S() {}

        function w() {}

        function x() {}

        /*
        Copyright (C) 2010 The Libphonenumber Authors.
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        */

        function $() {
            this.a = {};
        }

        function A(n) {
            return 0 == n.length || un.test(n);
        }

        function N(n, t) {
            if (null == t) return null;
            t = t.toUpperCase();
            var e = n.a[t];

            if (null == e) {
                if (((e = tn[t]), null == e)) return null;
                (e = new x().a(_.j(), e)), (n.a[t] = e);
            }

            return e;
        }

        function E(n) {
            return (n = nn[n]), null == n ? 'ZZ' : n[0];
        }

        function j(n) {
            (this.H = RegExp(' ')),
                (this.C = ''),
                (this.m = new e()),
                (this.w = ''),
                (this.i = new e()),
                (this.u = new e()),
                (this.l = !0),
                (this.A = this.o = this.F = !1),
                (this.G = $.b()),
                (this.s = 0),
                (this.b = new e()),
                (this.B = !1),
                (this.h = ''),
                (this.a = new e()),
                (this.f = []),
                (this.D = n),
                (this.J = this.g = B(this, this.D));
        }

        function B(n, t) {
            var e;

            if (null != t && isNaN(t) && t.toUpperCase() in tn) {
                if (((e = N(n.G, t)), null == e)) throw Error('Invalid region code: ' + t);
                e = g(e, 10);
            } else e = 0;

            return (e = N(n.G, E(e))), null != e ? e : an;
        }

        function R(n) {
            for (var t = n.f.length, e = 0; e < t; ++e) {
                var r = n.f[e],
                    i = g(r, 1);
                if (n.w == i) return !1;
                var u;
                u = n;
                var a = r,
                    o = g(a, 1);
                if (-1 != o.indexOf('|')) u = !1;
                else {
                    (o = o.replace(on, '\\d')), (o = o.replace(sn, '\\d')), l(u.m);
                    var s;
                    s = u;
                    var a = g(a, 2),
                        f = '999999999999999'.match(o)[0];
                    f.length < s.a.b.length
                        ? (s = '')
                        : ((s = f.replace(new RegExp(o, 'g'), a)), (s = s.replace(RegExp('9', 'g'), ' '))),
                        0 < s.length ? (u.m.a(s), (u = !0)) : (u = !1);
                }
                if (u) return (n.w = i), (n.B = pn.test(h(r, 4))), (n.s = 0), !0;
            }

            return (n.l = !1);
        }

        function F(n, t) {
            for (var e = [], l = t.length - 3, r = n.f.length, i = 0; i < r; ++i) {
                var u = n.f[i];
                0 == m(u, 3)
                    ? e.push(n.f[i])
                    : ((u = h(u, 3, Math.min(l, m(u, 3) - 1))), 0 == t.search(u) && e.push(n.f[i]));
            }

            n.f = e;
        }

        function C(n, t) {
            n.i.a(t);
            var e = t;

            if (rn.test(e) || (1 == n.i.b.length && ln.test(e))) {
                var r,
                    e = t;
                '+' == e ? ((r = e), n.u.a(e)) : ((r = en[e]), n.u.a(r), n.a.a(r)), (t = r);
            } else (n.l = !1), (n.F = !0);

            if (!n.l) {
                if (!n.F)
                    if (P(n)) {
                        if (q(n)) return I(n);
                    } else if (
                        (0 < n.h.length &&
                            ((e = n.a.toString()),
                            l(n.a),
                            n.a.a(n.h),
                            n.a.a(e),
                            (e = n.b.toString()),
                            (r = e.lastIndexOf(n.h)),
                            l(n.b),
                            n.b.a(e.substring(0, r))),
                        n.h != H(n))
                    )
                        return n.b.a(' '), I(n);
                return n.i.toString();
            }

            switch (n.u.b.length) {
                case 0:
                case 1:
                case 2:
                    return n.i.toString();

                case 3:
                    if (!P(n)) return (n.h = H(n)), V(n);
                    n.A = !0;

                default:
                    return n.A
                        ? (q(n) && (n.A = !1), n.b.toString() + n.a.toString())
                        : 0 < n.f.length
                        ? ((e = T(n, t)),
                          (r = D(n)),
                          0 < r.length ? r : (F(n, n.a.toString()), R(n) ? G(n) : n.l ? M(n, e) : n.i.toString()))
                        : V(n);
            }
        }

        function I(n) {
            return (n.l = !0), (n.A = !1), (n.f = []), (n.s = 0), l(n.m), (n.w = ''), V(n);
        }

        function D(n) {
            for (var t = n.a.toString(), e = n.f.length, l = 0; l < e; ++l) {
                var r = n.f[l],
                    i = g(r, 1);
                if (new RegExp('^(?:' + i + ')$').test(t))
                    return (n.B = pn.test(h(r, 4))), (t = t.replace(new RegExp(i, 'g'), h(r, 2))), M(n, t);
            }

            return '';
        }

        function M(n, t) {
            var e = n.b.b.length;
            return n.B && 0 < e && ' ' != n.b.toString().charAt(e - 1) ? n.b + ' ' + t : n.b + t;
        }

        function V(n) {
            var t = n.a.toString();

            if (3 <= t.length) {
                for (
                    var e = n.o && 0 == n.h.length && 0 < m(n.g, 20) ? c(n.g, 20) || [] : c(n.g, 19) || [],
                        l = e.length,
                        r = 0;
                    r < l;
                    ++r
                ) {
                    var i = e[r];
                    (0 < n.h.length && A(g(i, 4)) && !h(i, 6) && null == i.a[5]) ||
                        ((0 != n.h.length || n.o || A(g(i, 4)) || h(i, 6)) && fn.test(g(i, 2)) && n.f.push(i));
                }

                return F(n, t), (t = D(n)), 0 < t.length ? t : R(n) ? G(n) : n.i.toString();
            }

            return M(n, t);
        }

        function G(n) {
            var t = n.a.toString(),
                e = t.length;

            if (0 < e) {
                for (var l = '', r = 0; r < e; r++) {
                    l = T(n, t.charAt(r));
                }

                return n.l ? M(n, l) : n.i.toString();
            }

            return n.b.toString();
        }

        function H(n) {
            var t,
                e = n.a.toString(),
                r = 0;
            return (
                1 != h(n.g, 10)
                    ? (t = !1)
                    : ((t = n.a.toString()), (t = '1' == t.charAt(0) && '0' != t.charAt(1) && '1' != t.charAt(1))),
                t
                    ? ((r = 1), n.b.a('1').a(' '), (n.o = !0))
                    : null != n.g.a[15] &&
                      ((t = new RegExp('^(?:' + h(n.g, 15) + ')')),
                      (t = e.match(t)),
                      null != t &&
                          null != t[0] &&
                          0 < t[0].length &&
                          ((n.o = !0), (r = t[0].length), n.b.a(e.substring(0, r)))),
                l(n.a),
                n.a.a(e.substring(r)),
                e.substring(0, r)
            );
        }

        function P(n) {
            var t = n.u.toString(),
                e = new RegExp('^(?:\\+|' + h(n.g, 11) + ')'),
                e = t.match(e);
            return (
                null != e &&
                null != e[0] &&
                0 < e[0].length &&
                ((n.o = !0),
                (e = e[0].length),
                l(n.a),
                n.a.a(t.substring(e)),
                l(n.b),
                n.b.a(t.substring(0, e)),
                '+' != t.charAt(0) && n.b.a(' '),
                !0)
            );
        }

        function q(n) {
            if (0 == n.a.b.length) return !1;
            var t,
                r = new e();

            n: {
                if (((t = n.a.toString()), 0 != t.length && '0' != t.charAt(0)))
                    for (var i, u = t.length, a = 1; 3 >= a && a <= u; ++a) {
                        if (((i = parseInt(t.substring(0, a), 10)), i in nn)) {
                            r.a(t.substring(a)), (t = i);
                            break n;
                        }
                    }
                t = 0;
            }

            return (
                0 != t &&
                (l(n.a),
                n.a.a(r.toString()),
                (r = E(t)),
                '001' == r ? (n.g = N(n.G, '' + t)) : r != n.D && (n.g = B(n, r)),
                n.b.a('' + t).a(' '),
                (n.h = ''),
                !0)
            );
        }

        function T(n, t) {
            var e = n.m.toString();

            if (0 <= e.substring(n.s).search(n.H)) {
                var r = e.search(n.H),
                    e = e.replace(n.H, t);
                return l(n.m), n.m.a(e), (n.s = r), e.substring(0, n.s + 1);
            }

            return 1 == n.f.length && (n.l = !1), (n.w = ''), n.i.toString();
        }

        var U = this;
        (e.prototype.b = ''),
            (e.prototype.set = function (n) {
                this.b = '' + n;
            }),
            (e.prototype.a = function (n, t, e) {
                if (((this.b += String(n)), null != t))
                    for (var l = 1; l < arguments.length; l++) {
                        this.b += arguments[l];
                    }
                return this;
            }),
            (e.prototype.toString = function () {
                return this.b;
            });
        var Y = 1,
            k = 2,
            J = 3,
            K = 4,
            L = 6,
            O = 16,
            Z = 18;
        (f.prototype.set = function (n, t) {
            b(this, n.b, t);
        }),
            (f.prototype.clone = function () {
                var n = new this.constructor();
                return n != this && ((n.a = {}), n.b && (n.b = {}), p(n, this)), n;
            }),
            t(v, f);
        var z = null;
        t(d, f);
        var Q = null;
        t(_, f);
        var W = null;
        (v.prototype.j = function () {
            var n = z;
            return (
                n ||
                    (z = n =
                        y(v, {
                            0: {
                                name: 'NumberFormat',
                                I: 'i18n.phonenumbers.NumberFormat',
                            },
                            1: {
                                name: 'pattern',
                                required: !0,
                                c: 9,
                                type: String,
                            },
                            2: {
                                name: 'format',
                                required: !0,
                                c: 9,
                                type: String,
                            },
                            3: {
                                name: 'leading_digits_pattern',
                                v: !0,
                                c: 9,
                                type: String,
                            },
                            4: {
                                name: 'national_prefix_formatting_rule',
                                c: 9,
                                type: String,
                            },
                            6: {
                                name: 'national_prefix_optional_when_formatting',
                                c: 8,
                                defaultValue: !1,
                                type: Boolean,
                            },
                            5: {
                                name: 'domestic_carrier_code_formatting_rule',
                                c: 9,
                                type: String,
                            },
                        })),
                n
            );
        }),
            (v.j = v.prototype.j),
            (d.prototype.j = function () {
                var n = Q;
                return (
                    n ||
                        (Q = n =
                            y(d, {
                                0: {
                                    name: 'PhoneNumberDesc',
                                    I: 'i18n.phonenumbers.PhoneNumberDesc',
                                },
                                2: {
                                    name: 'national_number_pattern',
                                    c: 9,
                                    type: String,
                                },
                                9: {
                                    name: 'possible_length',
                                    v: !0,
                                    c: 5,
                                    type: Number,
                                },
                                10: {
                                    name: 'possible_length_local_only',
                                    v: !0,
                                    c: 5,
                                    type: Number,
                                },
                                6: {
                                    name: 'example_number',
                                    c: 9,
                                    type: String,
                                },
                            })),
                    n
                );
            }),
            (d.j = d.prototype.j),
            (_.prototype.j = function () {
                var n = W;
                return (
                    n ||
                        (W = n =
                            y(_, {
                                0: {
                                    name: 'PhoneMetadata',
                                    I: 'i18n.phonenumbers.PhoneMetadata',
                                },
                                1: {
                                    name: 'general_desc',
                                    c: 11,
                                    type: d,
                                },
                                2: {
                                    name: 'fixed_line',
                                    c: 11,
                                    type: d,
                                },
                                3: {
                                    name: 'mobile',
                                    c: 11,
                                    type: d,
                                },
                                4: {
                                    name: 'toll_free',
                                    c: 11,
                                    type: d,
                                },
                                5: {
                                    name: 'premium_rate',
                                    c: 11,
                                    type: d,
                                },
                                6: {
                                    name: 'shared_cost',
                                    c: 11,
                                    type: d,
                                },
                                7: {
                                    name: 'personal_number',
                                    c: 11,
                                    type: d,
                                },
                                8: {
                                    name: 'voip',
                                    c: 11,
                                    type: d,
                                },
                                21: {
                                    name: 'pager',
                                    c: 11,
                                    type: d,
                                },
                                25: {
                                    name: 'uan',
                                    c: 11,
                                    type: d,
                                },
                                27: {
                                    name: 'emergency',
                                    c: 11,
                                    type: d,
                                },
                                28: {
                                    name: 'voicemail',
                                    c: 11,
                                    type: d,
                                },
                                29: {
                                    name: 'short_code',
                                    c: 11,
                                    type: d,
                                },
                                30: {
                                    name: 'standard_rate',
                                    c: 11,
                                    type: d,
                                },
                                31: {
                                    name: 'carrier_specific',
                                    c: 11,
                                    type: d,
                                },
                                33: {
                                    name: 'sms_services',
                                    c: 11,
                                    type: d,
                                },
                                24: {
                                    name: 'no_international_dialling',
                                    c: 11,
                                    type: d,
                                },
                                9: {
                                    name: 'id',
                                    required: !0,
                                    c: 9,
                                    type: String,
                                },
                                10: {
                                    name: 'country_code',
                                    c: 5,
                                    type: Number,
                                },
                                11: {
                                    name: 'international_prefix',
                                    c: 9,
                                    type: String,
                                },
                                17: {
                                    name: 'preferred_international_prefix',
                                    c: 9,
                                    type: String,
                                },
                                12: {
                                    name: 'national_prefix',
                                    c: 9,
                                    type: String,
                                },
                                13: {
                                    name: 'preferred_extn_prefix',
                                    c: 9,
                                    type: String,
                                },
                                15: {
                                    name: 'national_prefix_for_parsing',
                                    c: 9,
                                    type: String,
                                },
                                16: {
                                    name: 'national_prefix_transform_rule',
                                    c: 9,
                                    type: String,
                                },
                                18: {
                                    name: 'same_mobile_and_fixed_line_pattern',
                                    c: 8,
                                    defaultValue: !1,
                                    type: Boolean,
                                },
                                19: {
                                    name: 'number_format',
                                    v: !0,
                                    c: 11,
                                    type: v,
                                },
                                20: {
                                    name: 'intl_number_format',
                                    v: !0,
                                    c: 11,
                                    type: v,
                                },
                                22: {
                                    name: 'main_country_for_code',
                                    c: 8,
                                    defaultValue: !1,
                                    type: Boolean,
                                },
                                23: {
                                    name: 'leading_digits',
                                    c: 9,
                                    type: String,
                                },
                                26: {
                                    name: 'leading_zero_possible',
                                    c: 8,
                                    defaultValue: !1,
                                    type: Boolean,
                                },
                            })),
                    n
                );
            }),
            (_.j = _.prototype.j),
            (S.prototype.a = function (n) {
                throw (new n.b(), Error('Unimplemented'));
            }),
            (S.prototype.b = function (n, t) {
                if (11 == n.a || 10 == n.a) return t instanceof f ? t : this.a(n.i.prototype.j(), t);

                if (14 == n.a) {
                    if ('string' == typeof t && X.test(t)) {
                        var e = Number(t);
                        if (0 < e) return e;
                    }

                    return t;
                }

                if (!n.h) return t;

                if (((e = n.i), e === String)) {
                    if ('number' == typeof t) return String(t);
                } else if (
                    e === Number &&
                    'string' == typeof t &&
                    ('Infinity' === t || '-Infinity' === t || 'NaN' === t || X.test(t))
                )
                    return Number(t);

                return t;
            });
        var X = /^-?[0-9]+$/;
        t(w, S),
            (w.prototype.a = function (n, t) {
                var e = new n.b();
                return (e.g = this), (e.a = t), (e.b = {}), e;
            }),
            t(x, w),
            (x.prototype.b = function (n, t) {
                return 8 == n.a ? !!t : S.prototype.b.apply(this, arguments);
            }),
            (x.prototype.a = function (n, t) {
                return x.M.a.call(this, n, t);
            });
        /*
        Copyright (C) 2010 The Libphonenumber Authors
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        */

        var nn = {
                32: ['BE'],
            },
            tn = {
                BE: [
                    null,
                    [null, null, '4\\d{8}|[1-9]\\d{7}', null, null, null, null, null, null, [8, 9]],
                    [
                        null,
                        null,
                        '(?:(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|9[2-4])\\d|8(?:0[2-8]|[1-79]\\d))\\d{5}',
                        null,
                        null,
                        null,
                        '12345678',
                        null,
                        null,
                        [8],
                    ],
                    [
                        null,
                        null,
                        '4(?:5[56]|6[0135-8]|[79]\\d|8[3-9])\\d{6}',
                        null,
                        null,
                        null,
                        '470123456',
                        null,
                        null,
                        [9],
                    ],
                    [null, null, '800[1-9]\\d{4}', null, null, null, '80012345', null, null, [8]],
                    [
                        null,
                        null,
                        '(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}',
                        null,
                        null,
                        null,
                        '90012345',
                        null,
                        null,
                        [8],
                    ],
                    [null, null, '7879\\d{4}', null, null, null, '78791234', null, null, [8]],
                    [null, null, null, null, null, null, null, null, null, [-1]],
                    [null, null, null, null, null, null, null, null, null, [-1]],
                    'BE',
                    32,
                    '00',
                    '0',
                    null,
                    null,
                    '0',
                    null,
                    null,
                    null,
                    [
                        [null, '(\\d)(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[23]|4[23]|9[2-4]'], '0$1'],
                        [null, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[15-7]|8(?:0[2-8]|[1-79])'], '0$1'],
                        [null, '(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['[89]'], '0$1'],
                        [null, '(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['4'], '0$1'],
                    ],
                    null,
                    [null, null, null, null, null, null, null, null, null, [-1]],
                    null,
                    null,
                    [null, null, null, null, null, null, null, null, null, [-1]],
                    [
                        null,
                        null,
                        '78(?:0[57]|1[0458]|2[25]|3[5-8]|48|[56]0|7[078])\\d{4}',
                        null,
                        null,
                        null,
                        '78102345',
                        null,
                        null,
                        [8],
                    ],
                    null,
                    null,
                    [null, null, null, null, null, null, null, null, null, [-1]],
                ],
            };

        $.b = function () {
            return $.a ? $.a : ($.a = new $());
        };

        var en = {
                0: '0',
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9',
                '０': '0',
                '１': '1',
                '２': '2',
                '３': '3',
                '４': '4',
                '５': '5',
                '６': '6',
                '７': '7',
                '８': '8',
                '９': '9',
                '٠': '0',
                '١': '1',
                '٢': '2',
                '٣': '3',
                '٤': '4',
                '٥': '5',
                '٦': '6',
                '٧': '7',
                '٨': '8',
                '٩': '9',
                '۰': '0',
                '۱': '1',
                '۲': '2',
                '۳': '3',
                '۴': '4',
                '۵': '5',
                '۶': '6',
                '۷': '7',
                '۸': '8',
                '۹': '9',
            },
            ln = RegExp('[+＋]+'),
            rn = RegExp('([0-9０-９٠-٩۰-۹])'),
            un = /^\(?\$1\)?$/,
            an = new _();
        b(an, 11, 'NA');
        var on = /\[([^\[\]])*\]/g,
            sn = /\d(?=[^,}][^,}])/g,
            fn = RegExp(
                '^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$'
            ),
            pn = /[- ]/;
        (j.prototype.K = function () {
            (this.C = ''),
                l(this.i),
                l(this.u),
                l(this.m),
                (this.s = 0),
                (this.w = ''),
                l(this.b),
                (this.h = ''),
                l(this.a),
                (this.l = !0),
                (this.A = this.o = this.F = !1),
                (this.f = []),
                (this.B = !1),
                this.g != this.J && (this.g = B(this, this.D));
        }),
            (j.prototype.L = function (n) {
                return (this.C = C(this, n));
            }),
            n('Cleave.AsYouTypeFormatter', j),
            n('Cleave.AsYouTypeFormatter.prototype.inputDigit', j.prototype.L),
            n('Cleave.AsYouTypeFormatter.prototype.clear', j.prototype.K);
    }.call('object' == _typeof(commonjsGlobal$1) && commonjsGlobal$1 ? commonjsGlobal$1 : window);

    var dataPrefix = 'data-'.concat(vl.ns),
        pAttr = ''.concat(dataPrefix, 'pattern'),
        pDressedAtt = ''.concat(dataPrefix, 'pattern-dressed'),
        pPrefixAtt = ''.concat(dataPrefix, 'pattern-prefix'),
        numericalDecimalScaleAtt = ''.concat(dataPrefix, 'numerical-decimal-scale');

    var Pattern = /*#__PURE__*/ (function () {
        function Pattern() {
            _classCallCheck(this, Pattern);

            this.patterns = {
                iban: {
                    blocks: [4, 4, 4, 4],
                    prefix: 'BE',
                    numericOnly: true,
                    stripLeadingZeroes: false,
                    numeralPositiveOnly: true,
                },
                rrn: {
                    blocks: [2, 2, 2, 3, 2],
                    delimiters: ['.', '.', '-', '.'],
                    numericOnly: true,
                    stripLeadingZeroes: false,
                    numeralPositiveOnly: true,
                },
                uuid: {
                    blocks: [8, 4, 4, 4, 12],
                    delimiter: '-',
                    hexadecimalOnly: true,
                    stripLeadingZeroes: false,
                },
                date: {
                    date: true,
                    datePattern: ['d', 'm', 'Y'],
                    delimiter: '.',
                    stripLeadingZeroes: false,
                },
                price: {
                    numeral: true,
                    prefix: '€',
                    rawValueTrimPrefix: true,
                    noImmediatePrefix: true,
                    numeralDecimalMark: ',',
                    delimiter: ' ',
                },
                phone: {
                    prefix: '+32',
                    phone: true,
                    phoneRegionCode: 'BE',
                },
                phoneinternational: {
                    numericOnly: true,
                    numeralPositiveOnly: true,
                    delimiter: ' ',
                },
                numerical: {
                    numeral: true,
                    numeralDecimalMark: ',',
                    numericOnly: true,
                    delimiter: ' ',
                },
            };
            this.patternInstances = [];
        }

        _createClass(Pattern, [
            {
                key: 'dress',
                value: function dress(field) {
                    var patternInstance = {},
                        patternType = field.getAttribute(pAttr).toLowerCase(),
                        pattern = {};
                    /**
                     * If patternType specified vl.util.exists, create cleave-instance
                     * @method if
                     */

                    if (this.patterns.hasOwnProperty(patternType)) {
                        pattern = this.patterns[patternType];

                        // Add custom prefix if specified
                        var customPrefix = field.getAttribute(pPrefixAtt);
                        if (vl.util.exists(customPrefix, true)) {
                            pattern.prefix = customPrefix;
                        }

                        // Set decimal scale
                        pattern.numeralDecimalScale = field.getAttribute(numericalDecimalScaleAtt) || 2;

                        field.setAttribute(pDressedAtt, true);
                        /**
                         * store current field
                         */

                        patternInstance.element = field;
                        /**
                         * Cleave.js requires the fields to be field-type text
                         */

                        field.type = 'text';
                        /**
                         * store current cleave-instance
                         */

                        patternInstance.instance = new Cleave_1(field, pattern);
                        /**
                         * Add cleave-instance to array with active instances
                         */

                        this.patternInstances.push(patternInstance);
                    }
                },
            },
            {
                key: 'dressAll',
                value: function dressAll() {
                    var _this = this;

                    var patternFields = document.querySelectorAll(
                        '['
                            .concat(pAttr, ']:not([')
                            .concat(pDressedAtt, ']):not([data-')
                            .concat(vl.ns, 'js-dress="false"])')
                    );
                    vl.util.each(patternFields, function (field) {
                        _this.dress(field);
                    });
                },
            },
            {
                key: 'undressAll',
                value: function undressAll() {
                    vl.util.each(this.patternInstances, function (pattern) {
                        pattern.instance.destroy();
                        pattern.element.removeAttribute(pDressedAtt);
                    });
                    this.patternInstances = [];
                },
            },
        ]);

        return Pattern;
    })();

    if (!('pattern' in vl)) {
        vl.pattern = new Pattern();
        vl.pattern.dressAll();
    }

    return Pattern;
});

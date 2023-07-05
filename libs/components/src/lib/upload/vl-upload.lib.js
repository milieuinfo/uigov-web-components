// UIG-2520 - wijzigingen toegevoegd om duplicaat detectie uit te breiden
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? (module.exports = factory())
        : typeof define === 'function' && define.amd
        ? define(factory)
        : (global.upload = factory());
})(typeof self !== 'undefined' ? self : this, () => {
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

    function createCommonjsModule(fn, module) {
        return (module = { exports: {} }), fn(module, module.exports), module.exports;
    }

    const dropzone = createCommonjsModule((module) => {
        const _createClass$$1 = (function () {
            function defineProperties(target, props) {
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

            return function (Constructor, protoProps, staticProps) {
                if (protoProps) {
                    defineProperties(Constructor.prototype, protoProps);
                }
                if (staticProps) {
                    defineProperties(Constructor, staticProps);
                }
                return Constructor;
            };
        })();

        function _possibleConstructorReturn$$1(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (_typeof(call) === 'object' || typeof call === 'function') ? call : self;
        }

        function _inherits$$1(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError(`Super expression must either be null or a function, not ${_typeof(superClass)}`);
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true,
                },
            });
            if (superClass) {
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
            }
        }

        function _classCallCheck$$1(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        /*
         *
         * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
         *
         * Copyright (c) 2012, Matias Meno
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        // The Emitter class provides the ability to call `.on()` on Dropzone to listen
        // to events.
        // It is strongly based on component's emitter class, and I removed the
        // functionality because of the dependency hell with different frameworks.

        const Emitter = (function () {
            function Emitter() {
                _classCallCheck$$1(this, Emitter);
            }

            _createClass$$1(Emitter, [
                {
                    key: 'on',
                    // Add an event listener for given event
                    value: function on(event, fn) {
                        this._callbacks = this._callbacks || {}; // Create namespace for this event

                        if (!this._callbacks[event]) {
                            this._callbacks[event] = [];
                        }

                        this._callbacks[event].push(fn);

                        return this;
                    },
                },
                {
                    key: 'emit',
                    value: function emit(event) {
                        this._callbacks = this._callbacks || {};
                        const callbacks = this._callbacks[event];

                        if (callbacks) {
                            for (
                                var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1;
                                _key < _len;
                                _key++
                            ) {
                                args[_key - 1] = arguments[_key];
                            }

                            for (
                                var _iterator = callbacks,
                                    _isArray = true,
                                    _i = 0,
                                    _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();
                                ;

                            ) {
                                var _ref;

                                {
                                    if (_i >= _iterator.length) {
                                        break;
                                    }
                                    _ref = _iterator[_i++];
                                }

                                const callback = _ref;
                                callback.apply(this, args);
                            }
                        }

                        return this;
                    }, // Remove event listener for given event. If fn is not provided, all event
                    // listeners for that event will be removed. If neither is provided, all
                    // event listeners will be removed.
                },
                {
                    key: 'off',
                    value: function off(event, fn) {
                        if (!this._callbacks || arguments.length === 0) {
                            this._callbacks = {};
                            return this;
                        } // specific event

                        const callbacks = this._callbacks[event];

                        if (!callbacks) {
                            return this;
                        } // remove all handlers

                        if (arguments.length === 1) {
                            delete this._callbacks[event];
                            return this;
                        } // remove specific handler

                        for (let i = 0; i < callbacks.length; i++) {
                            const callback = callbacks[i];

                            if (callback === fn) {
                                callbacks.splice(i, 1);
                                break;
                            }
                        }

                        return this;
                    },
                },
            ]);

            return Emitter;
        })();

        const Dropzone = (function (_Emitter) {
            _inherits$$1(Dropzone, _Emitter);

            _createClass$$1(Dropzone, null, [
                {
                    key: 'initClass',
                    value: function initClass() {
                        // Exposing the emitter class, mainly for tests
                        this.prototype.Emitter = Emitter;
                        /*
           This is a list of all available events you can register on a dropzone object.
            You can register an event handler like this:
            dropzone.on("dragEnter", function() { });
            */

                        this.prototype.events = [
                            'drop',
                            'dragstart',
                            'dragend',
                            'dragenter',
                            'dragover',
                            'dragleave',
                            'addedfile',
                            'addedfiles',
                            'removedfile',
                            'thumbnail',
                            'error',
                            'errormultiple',
                            'processing',
                            'processingmultiple',
                            'uploadprogress',
                            'totaluploadprogress',
                            'sending',
                            'sendingmultiple',
                            'success',
                            'successmultiple',
                            'canceled',
                            'canceledmultiple',
                            'complete',
                            'completemultiple',
                            'reset',
                            'maxfilesexceeded',
                            'maxfilesreached',
                            'queuecomplete',
                        ];
                        this.prototype.defaultOptions = {
                            /**
                             * Has to be specified on elements other than form (or when the form
                             * doesn't have an `action` attribute). You can also
                             * provide a function that will be called with `files` and
                             * must return the url (since `v3.12.0`)
                             */
                            url: null,

                            /**
                             * Can be changed to `"put"` if necessary. You can also provide a function
                             * that will be called with `files` and must return the method (since `v3.12.0`).
                             */
                            method: 'post',

                            /**
                             * Will be set on the XHRequest.
                             */
                            withCredentials: false,

                            /**
                             * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
                             */
                            timeout: 30000,

                            /**
                             * How many file uploads to process in parallel (See the
                             * Enqueuing file uploads* documentation section for more info)
                             */
                            parallelUploads: 2,

                            /**
                             * Whether to send multiple files in one request. If
                             * this it set to true, then the fallback file input element will
                             * have the `multiple` attribute as well. This option will
                             * also trigger additional events (like `processingmultiple`). See the events
                             * documentation section for more information.
                             */
                            uploadMultiple: false,

                            /**
                             * Whether you want files to be uploaded in chunks to your server. This can't be
                             * used in combination with `uploadMultiple`.
                             *
                             * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
                             */
                            chunking: false,

                            /**
                             * If `chunking` is enabled, this defines whether **every** file should be chunked,
                             * even if the file size is below chunkSize. This means, that the additional chunk
                             * form data will be submitted and the `chunksUploaded` callback will be invoked.
                             */
                            forceChunking: false,

                            /**
                             * If `chunking` is `true`, then this defines the chunk size in bytes.
                             */
                            chunkSize: 2000000,

                            /**
                             * If `true`, the individual chunks of a file are being uploaded simultaneously.
                             */
                            parallelChunkUploads: false,

                            /**
                             * Whether a chunk should be retried if it fails.
                             */
                            retryChunks: false,

                            /**
                             * If `retryChunks` is true, how many times should it be retried.
                             */
                            retryChunksLimit: 3,

                            /**
                             * If not `null` defines how many files this Dropzone handles. If it exceeds,
                             * the event `maxfilesexceeded` will be called. The dropzone element gets the
                             * class `dz-max-files-reached` accordingly so you can provide visual feedback.
                             */
                            maxFilesize: 256,

                            /**
                             * The name of the file param that gets transferred.
                             * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
                             * Dropzone will append `[]` to the name.
                             */
                            paramName: 'file',

                            /**
                             * Whether thumbnails for images should be generated
                             */
                            createImageThumbnails: true,

                            /**
                             * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
                             */
                            maxThumbnailFilesize: 10,

                            /**
                             * If `null`, the ratio of the image will be used to calculate it.
                             */
                            thumbnailWidth: 120,

                            /**
                             * The same as `thumbnailWidth`. If both are null, images will not be resized.
                             */
                            thumbnailHeight: 120,

                            /**
                             * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
                             * Can be either `contain` or `crop`.
                             */
                            thumbnailMethod: 'crop',

                            /**
                             * If set, images will be resized to these dimensions before being **uploaded**.
                             * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
                             * ratio of the file will be preserved.
                             *
                             * The `options.transformFile` function uses these options, so if the `transformFile` function
                             * is overridden, these options don't do anything.
                             */
                            resizeWidth: null,

                            /**
                             * See `resizeWidth`.
                             */
                            resizeHeight: null,

                            /**
                             * The mime type of the resized image (before it gets uploaded to the server).
                             * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
                             * See `resizeWidth` for more information.
                             */
                            resizeMimeType: null,

                            /**
                             * The quality of the resized images. See `resizeWidth`.
                             */
                            resizeQuality: 0.8,

                            /**
                             * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
                             * Can be either `contain` or `crop`.
                             */
                            resizeMethod: 'contain',

                            /**
                             * The base that is used to calculate the filesize. You can change this to
                             * 1024 if you would rather display kibibytes, mebibytes, etc...
                             * 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte` not `1 kilobyte`.
                             * You can change this to `1024` if you don't care about validity.
                             */
                            filesizeBase: 1000,

                            /**
                             * Can be used to limit the maximum number of files that will be handled by this Dropzone
                             */
                            maxFiles: null,

                            /**
                             * An optional object to send additional headers to the server. Eg:
                             * `{ "My-Awesome-Header": "header value" }`
                             */
                            headers: null,

                            /**
                             * If `true`, the dropzone element itself will be clickable, if `false`
                             * nothing will be clickable.
                             *
                             * You can also pass an HTML element, a CSS selector (for multiple elements)
                             * or an array of those. In that case, all of those elements will trigger an
                             * upload when clicked.
                             */
                            clickable: true,

                            /**
                             * Whether hidden files in directories should be ignored.
                             */
                            ignoreHiddenFiles: true,

                            /**
                             * The default implementation of `accept` checks the file's mime type or
                             * extension against this list. This is a comma separated list of mime
                             * types or file extensions.
                             *
                             * Eg.: `image/*,application/pdf,.psd`
                             *
                             * If the Dropzone is `clickable` this option will also be used as
                             * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
                             * parameter on the hidden file input as well.
                             */
                            acceptedFiles: null,

                            /**
                             * **Deprecated!**
                             * Use acceptedFiles instead.
                             */
                            acceptedMimeTypes: null,

                            /**
                             * If false, files will be added to the queue but the queue will not be
                             * processed automatically.
                             * This can be useful if you need some additional user input before sending
                             * files (or if you want want all files sent at once).
                             * If you're ready to send the file simply call `myDropzone.processQueue()`.
                             *
                             * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
                             * section for more information.
                             */
                            autoProcessQueue: true,

                            /**
                             * If false, files added to the dropzone will not be queued by default.
                             * You'll have to call `enqueueFile(file)` manually.
                             */
                            autoQueue: true,

                            /**
                             * If `true`, this will add a link to every file preview to remove or cancel (if
                             * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
                             * and `dictRemoveFile` options are used for the wording.
                             */
                            addRemoveLinks: false,

                            /**
                             * Defines where to display the file previews – if `null` the
                             * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
                             * selector. The element should have the `dropzone-previews` class so
                             * the previews are displayed properly.
                             */
                            previewsContainer: null,

                            /**
                             * This is the element the hidden input field (which is used when clicking on the
                             * dropzone to trigger file selection) will be appended to. This might
                             * be important in case you use frameworks to switch the content of your page.
                             *
                             * Can be a selector string, or an element directly.
                             */
                            hiddenInputContainer: 'body',

                            /**
                             * If null, no capture type will be specified
                             * If camera, mobile devices will skip the file selection and choose camera
                             * If microphone, mobile devices will skip the file selection and choose the microphone
                             * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
                             * On apple devices multiple must be set to false.  AcceptedFiles may need to
                             * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
                             */
                            capture: null,

                            /**
                             * **Deprecated**. Use `renameFile` instead.
                             */
                            renameFilename: null,

                            /**
                             * A function that is invoked before the file is uploaded to the server and renames the file.
                             * This function gets the `File` as argument and can use the `file.name`. The actual name of the
                             * file that gets used during the upload can be accessed through `file.upload.filename`.
                             */
                            renameFile: null,

                            /**
                             * If `true` the fallback will be forced. This is very useful to test your server
                             * implementations first and make sure that everything works as
                             * expected without dropzone if you experience problems, and to test
                             * how your fallbacks will look.
                             */
                            forceFallback: false,

                            /**
                             * The text used before any files are dropped.
                             */
                            dictDefaultMessage: 'Drop files here to upload',

                            /**
                             * The text that replaces the default message text it the browser is not supported.
                             */
                            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",

                            /**
                             * The text that will be added before the fallback form.
                             * If you provide a  fallback element yourself, or if this option is `null` this will
                             * be ignored.
                             */
                            dictFallbackText:
                                'Please use the fallback form below to upload your files like in the olden days.',

                            /**
                             * If the filesize is too big.
                             * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
                             */
                            dictFileTooBig: 'File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.',

                            /**
                             * If the file doesn't match the file type.
                             */
                            dictInvalidFileType: "You can't upload files of this type.",

                            /**
                             * If the server response was invalid.
                             * `{{statusCode}}` will be replaced with the servers status code.
                             */
                            dictResponseError: 'Server responded with {{statusCode}} code.',

                            /**
                             * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
                             */
                            dictCancelUpload: 'Cancel upload',

                            /**
                             * The text that is displayed if an upload was manually canceled
                             */
                            dictUploadCanceled: 'Upload canceled.',

                            /**
                             * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
                             */
                            dictCancelUploadConfirmation: 'Are you sure you want to cancel this upload?',

                            /**
                             * If `addRemoveLinks` is true, the text to be used to remove a file.
                             */
                            dictRemoveFile: 'Remove file',

                            /**
                             * If this is not null, then the user will be prompted before removing a file.
                             */
                            dictRemoveFileConfirmation: null,

                            /**
                             * Displayed if `maxFiles` is st and exceeded.
                             * The string `{{maxFiles}}` will be replaced by the configuration value.
                             */
                            dictMaxFilesExceeded: 'You can not upload any more files.',

                            /**
                             * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
                             * `b` for bytes.
                             */
                            dictFileSizeUnits: {
                                tb: 'TB',
                                gb: 'GB',
                                mb: 'MB',
                                kb: 'KB',
                                b: 'b',
                            },

                            /**
                             * Called when dropzone initialized
                             * You can add event listeners here
                             */
                            init: function init() {},

                            /**
                             * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
                             * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
                             * of a function, this needs to return a map.
                             *
                             * The default implementation does nothing for normal uploads, but adds relevant information for
                             * chunked uploads.
                             *
                             * This is the same as adding hidden input fields in the form element.
                             */
                            params: function params(files, xhr, chunk) {
                                if (chunk) {
                                    return {
                                        dzuuid: chunk.file.upload.uuid,
                                        dzchunkindex: chunk.index,
                                        dztotalfilesize: chunk.file.size,
                                        dzchunksize: this.options.chunkSize,
                                        dztotalchunkcount: chunk.file.upload.totalChunkCount,
                                        dzchunkbyteoffset: chunk.index * this.options.chunkSize,
                                    };
                                }
                            },

                            /**
                             * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
                             * and a `done` function as parameters.
                             *
                             * If the done function is invoked without arguments, the file is "accepted" and will
                             * be processed. If you pass an error message, the file is rejected, and the error
                             * message will be displayed.
                             * This function will not be called if the file is too big or doesn't match the mime types.
                             */
                            accept: function accept(file, done) {
                                return done();
                            },

                            /**
                             * The callback that will be invoked when all chunks have been uploaded for a file.
                             * It gets the file for which the chunks have been uploaded as the first parameter,
                             * and the `done` function as second. `done()` needs to be invoked when everything
                             * needed to finish the upload process is done.
                             */
                            chunksUploaded: function chunksUploaded(file, done) {
                                done();
                            },

                            /**
                             * Gets called when the browser is not supported.
                             * The default implementation shows the fallback input field and adds
                             * a text.
                             */
                            fallback: function fallback() {
                                // This code should pass in IE7... :(
                                let messageElement = void 0;
                                this.element.className = `${this.element.className} dz-browser-not-supported`;

                                for (
                                    var _iterator2 = this.element.getElementsByTagName('div'),
                                        _isArray2 = true,
                                        _i2 = 0,
                                        _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();
                                    ;

                                ) {
                                    var _ref2;

                                    {
                                        if (_i2 >= _iterator2.length) {
                                            break;
                                        }
                                        _ref2 = _iterator2[_i2++];
                                    }

                                    const child = _ref2;

                                    if (/(^| )dz-message($| )/.test(child.className)) {
                                        messageElement = child;
                                        child.className = 'dz-message'; // Removes the 'dz-default' class

                                        break;
                                    }
                                }

                                if (!messageElement) {
                                    messageElement = Dropzone.createElement(
                                        '<div class="dz-message"><span></span></div>'
                                    );
                                    this.element.appendChild(messageElement);
                                }

                                const span = messageElement.getElementsByTagName('span')[0];

                                if (span) {
                                    if (span.textContent != null) {
                                        span.textContent = this.options.dictFallbackMessage;
                                    } else if (span.innerText != null) {
                                        span.innerText = this.options.dictFallbackMessage;
                                    }
                                }

                                return this.element.appendChild(this.getFallbackForm());
                            },

                            /**
                             * Gets called to calculate the thumbnail dimensions.
                             *
                             * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
                             *
                             *  - `srcWidth` & `srcHeight` (required)
                             *  - `trgWidth` & `trgHeight` (required)
                             *  - `srcX` & `srcY` (optional, default `0`)
                             *  - `trgX` & `trgY` (optional, default `0`)
                             *
                             * Those values are going to be used by `ctx.drawImage()`.
                             */
                            resize: function resize(file, width, height, resizeMethod) {
                                const info = {
                                    srcX: 0,
                                    srcY: 0,
                                    srcWidth: file.width,
                                    srcHeight: file.height,
                                };
                                const srcRatio = file.width / file.height; // Automatically calculate dimensions if not specified

                                if (width == null && height == null) {
                                    width = info.srcWidth;
                                    height = info.srcHeight;
                                } else if (width == null) {
                                    width = height * srcRatio;
                                } else if (height == null) {
                                    height = width / srcRatio;
                                } // Make sure images aren't upscaled

                                width = Math.min(width, info.srcWidth);
                                height = Math.min(height, info.srcHeight);
                                const trgRatio = width / height;

                                if (info.srcWidth > width || info.srcHeight > height) {
                                    // Image is bigger and needs rescaling
                                    if (resizeMethod === 'crop') {
                                        if (srcRatio > trgRatio) {
                                            info.srcHeight = file.height;
                                            info.srcWidth = info.srcHeight * trgRatio;
                                        } else {
                                            info.srcWidth = file.width;
                                            info.srcHeight = info.srcWidth / trgRatio;
                                        }
                                    } else if (resizeMethod === 'contain') {
                                        // Method 'contain'
                                        if (srcRatio > trgRatio) {
                                            height = width / srcRatio;
                                        } else {
                                            width = height * srcRatio;
                                        }
                                    } else {
                                        throw new Error(`Unknown resizeMethod '${resizeMethod}'`);
                                    }
                                }

                                info.srcX = (file.width - info.srcWidth) / 2;
                                info.srcY = (file.height - info.srcHeight) / 2;
                                info.trgWidth = width;
                                info.trgHeight = height;
                                return info;
                            },

                            /**
                             * Can be used to transform the file (for example, resize an image if necessary).
                             *
                             * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
                             * images according to those dimensions.
                             *
                             * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
                             * to be invoked with the file when the transformation is done.
                             */
                            transformFile: function transformFile(file, done) {
                                if (
                                    (this.options.resizeWidth || this.options.resizeHeight) &&
                                    file.type.match(/image.*/)
                                ) {
                                    return this.resizeImage(
                                        file,
                                        this.options.resizeWidth,
                                        this.options.resizeHeight,
                                        this.options.resizeMethod,
                                        done
                                    );
                                }
                                return done(file);
                            },

                            /**
                             * A string that contains the template used for each dropped
                             * file. Change it to fulfill your needs but make sure to properly
                             * provide all elements.
                             *
                             * If you want to use an actual HTML element instead of providing a String
                             * as a config option, you could create a div with the id `tpl`,
                             * put the template inside it and provide the element like this:
                             *
                             *     document
                             *       .querySelector('#tpl')
                             *       .innerHTML
                             *
                             */
                            previewTemplate:
                                '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                            // END OPTIONS
                            // (Required by the dropzone documentation parser)

                            /*
             Those functions register themselves to the events on init and handle all
             the user interface specific stuff. Overwriting them won't break the upload
             but can break the way it's displayed.
             You can overwrite them if you don't like the default behavior. If you just
             want to add an additional event handler, register it on the dropzone object
             and don't overwrite those options.
             */
                            // Those are self explanatory and simply concern the DragnDrop.
                            drop: function drop(e) {
                                return this.element.classList.remove('dz-drag-hover');
                            },
                            dragstart: function dragstart(e) {},
                            dragend: function dragend(e) {
                                return this.element.classList.remove('dz-drag-hover');
                            },
                            dragenter: function dragenter(e) {
                                return this.element.classList.add('dz-drag-hover');
                            },
                            dragover: function dragover(e) {
                                return this.element.classList.add('dz-drag-hover');
                            },
                            dragleave: function dragleave(e) {
                                return this.element.classList.remove('dz-drag-hover');
                            },
                            paste: function paste(e) {},
                            // Called whenever there are no files left in the dropzone anymore, and the
                            // dropzone should be displayed as if in the initial state.
                            reset: function reset() {
                                return this.element.classList.remove('dz-started');
                            },
                            // Called when a file is added to the queue
                            // Receives `file`
                            addedfile: function addedfile(file) {
                                const _this2 = this;

                                if (this.element === this.previewsContainer) {
                                    this.element.classList.add('dz-started');
                                }

                                if (this.previewsContainer) {
                                    file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
                                    file.previewTemplate = file.previewElement; // Backwards compatibility

                                    this.previewsContainer.appendChild(file.previewElement);

                                    for (
                                        var _iterator3 = file.previewElement.querySelectorAll('[data-dz-name]'),
                                            _isArray3 = true,
                                            _i3 = 0,
                                            _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();
                                        ;

                                    ) {
                                        var _ref3;

                                        {
                                            if (_i3 >= _iterator3.length) {
                                                break;
                                            }
                                            _ref3 = _iterator3[_i3++];
                                        }

                                        var node = _ref3;
                                        node.textContent = file.name;
                                    }

                                    for (
                                        var _iterator4 = file.previewElement.querySelectorAll('[data-dz-size]'),
                                            _isArray4 = true,
                                            _i4 = 0,
                                            _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();
                                        ;

                                    ) {
                                        {
                                            if (_i4 >= _iterator4.length) {
                                                break;
                                            }
                                            node = _iterator4[_i4++];
                                        }

                                        node.innerHTML = this.filesize(file.size);
                                    }

                                    if (this.options.addRemoveLinks) {
                                        file._removeLink = Dropzone.createElement(
                                            `<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`
                                        );
                                        file.previewElement.appendChild(file._removeLink);
                                    }

                                    const removeFileEvent = function removeFileEvent(e) {
                                        e.preventDefault();
                                        e.stopPropagation();

                                        if (file.status === Dropzone.UPLOADING) {
                                            return Dropzone.confirm(_this2.options.dictCancelUploadConfirmation, () =>
                                                _this2.removeFile(file)
                                            );
                                        }
                                        if (_this2.options.dictRemoveFileConfirmation) {
                                            return Dropzone.confirm(_this2.options.dictRemoveFileConfirmation, () =>
                                                _this2.removeFile(file)
                                            );
                                        }
                                        return _this2.removeFile(file);
                                    };

                                    for (
                                        var _iterator5 = file.previewElement.querySelectorAll('[data-dz-remove]'),
                                            _isArray5 = true,
                                            _i5 = 0,
                                            _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();
                                        ;

                                    ) {
                                        var _ref4;

                                        {
                                            if (_i5 >= _iterator5.length) {
                                                break;
                                            }
                                            _ref4 = _iterator5[_i5++];
                                        }

                                        const removeLink = _ref4;
                                        removeLink.addEventListener('click', removeFileEvent);
                                    }
                                }
                            },
                            // Called whenever a file is removed.
                            removedfile: function removedfile(file) {
                                if (file.previewElement != null && file.previewElement.parentNode != null) {
                                    file.previewElement.parentNode.removeChild(file.previewElement);
                                }

                                return this._updateMaxFilesReachedClass();
                            },
                            // Called when a thumbnail has been generated
                            // Receives `file` and `dataUrl`
                            thumbnail: function thumbnail(file, dataUrl) {
                                if (file.previewElement) {
                                    file.previewElement.classList.remove('dz-file-preview');

                                    for (
                                        var _iterator6 = file.previewElement.querySelectorAll('[data-dz-thumbnail]'),
                                            _isArray6 = true,
                                            _i6 = 0,
                                            _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();
                                        ;

                                    ) {
                                        var _ref5;

                                        {
                                            if (_i6 >= _iterator6.length) {
                                                break;
                                            }
                                            _ref5 = _iterator6[_i6++];
                                        }

                                        const thumbnailElement = _ref5;
                                        thumbnailElement.alt = file.name;
                                        thumbnailElement.src = dataUrl;
                                    }

                                    return setTimeout(() => file.previewElement.classList.add('dz-image-preview'), 1);
                                }
                            },
                            // Called whenever an error occurs
                            // Receives `file` and `message`
                            error: function error(file, message) {
                                if (file.previewElement) {
                                    file.previewElement.classList.add('dz-error');

                                    if (typeof message !== 'String' && message.error) {
                                        message = message.error;
                                    }

                                    for (
                                        var _iterator7 = file.previewElement.querySelectorAll('[data-dz-errormessage]'),
                                            _isArray7 = true,
                                            _i7 = 0,
                                            _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();
                                        ;

                                    ) {
                                        var _ref6;

                                        {
                                            if (_i7 >= _iterator7.length) {
                                                break;
                                            }
                                            _ref6 = _iterator7[_i7++];
                                        }

                                        const node = _ref6;
                                        node.textContent = message;
                                    }
                                }
                            },
                            errormultiple: function errormultiple() {},
                            // Called when a file gets processed. Since there is a cue, not all added
                            // files are processed immediately.
                            // Receives `file`
                            processing: function processing(file) {
                                if (file.previewElement) {
                                    file.previewElement.classList.add('dz-processing');

                                    if (file._removeLink) {
                                        return (file._removeLink.innerHTML = this.options.dictCancelUpload);
                                    }
                                }
                            },
                            processingmultiple: function processingmultiple() {},
                            // Called whenever the upload progress gets updated.
                            // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
                            // To get the total number of bytes of the file, use `file.size`
                            uploadprogress: function uploadprogress(file, progress, bytesSent) {
                                if (file.previewElement) {
                                    for (
                                        var _iterator8 =
                                                file.previewElement.querySelectorAll('[data-dz-uploadprogress]'),
                                            _isArray8 = true,
                                            _i8 = 0,
                                            _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();
                                        ;

                                    ) {
                                        var _ref7;

                                        {
                                            if (_i8 >= _iterator8.length) {
                                                break;
                                            }
                                            _ref7 = _iterator8[_i8++];
                                        }

                                        const node = _ref7;
                                        node.nodeName === 'PROGRESS'
                                            ? (node.value = progress)
                                            : (node.style.width = `${progress}%`);
                                    }
                                }
                            },
                            // Called whenever the total upload progress gets updated.
                            // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
                            totaluploadprogress: function totaluploadprogress() {},
                            // Called just before the file is sent. Gets the `xhr` object as second
                            // parameter, so you can modify it (for example to add a CSRF token) and a
                            // `formData` object to add additional information.
                            sending: function sending() {},
                            sendingmultiple: function sendingmultiple() {},
                            // When the complete upload is finished and successful
                            // Receives `file`
                            success: function success(file) {
                                if (file.previewElement) {
                                    return file.previewElement.classList.add('dz-success');
                                }
                            },
                            successmultiple: function successmultiple() {},
                            // When the upload is canceled.
                            canceled: function canceled(file) {
                                return this.emit('error', file, this.options.dictUploadCanceled);
                            },
                            canceledmultiple: function canceledmultiple() {},
                            // When the upload is finished, either with success or an error.
                            // Receives `file`
                            complete: function complete(file) {
                                if (file._removeLink) {
                                    file._removeLink.innerHTML = this.options.dictRemoveFile;
                                }

                                if (file.previewElement) {
                                    return file.previewElement.classList.add('dz-complete');
                                }
                            },
                            completemultiple: function completemultiple() {},
                            maxfilesexceeded: function maxfilesexceeded() {},
                            maxfilesreached: function maxfilesreached() {},
                            queuecomplete: function queuecomplete() {},
                            addedfiles: function addedfiles() {},
                        };
                        this.prototype._thumbnailQueue = [];
                        this.prototype._processingThumbnail = false;
                    }, // global utility
                },
                {
                    key: 'extend',
                    value: function extend(target) {
                        for (
                            var _len2 = arguments.length, objects = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
                            _key2 < _len2;
                            _key2++
                        ) {
                            objects[_key2 - 1] = arguments[_key2];
                        }

                        for (
                            var _iterator9 = objects,
                                _isArray9 = true,
                                _i9 = 0,
                                _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();
                            ;

                        ) {
                            var _ref8;

                            {
                                if (_i9 >= _iterator9.length) {
                                    break;
                                }
                                _ref8 = _iterator9[_i9++];
                            }

                            const object = _ref8;

                            for (const key in object) {
                                const val = object[key];
                                target[key] = val;
                            }
                        }

                        return target;
                    },
                },
            ]);

            function Dropzone(el, options) {
                _classCallCheck$$1(this, Dropzone);

                const _this = _possibleConstructorReturn$$1(
                    this,
                    (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this)
                );

                let fallback = void 0;
                let left = void 0;
                _this.element = el; // For backwards compatibility since the version was in the prototype previously

                _this.version = Dropzone.version;
                _this.defaultOptions.previewTemplate = _this.defaultOptions.previewTemplate.replace(/\n*/g, '');
                _this.clickableElements = [];
                _this.listeners = [];
                _this.files = []; // All files

                if (typeof _this.element === 'string') {
                    _this.element = document.querySelector(_this.element);
                } // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.

                if (!_this.element || _this.element.nodeType == null) {
                    throw new Error('Invalid dropzone element.');
                }

                if (_this.element.dropzone) {
                    throw new Error('Dropzone already attached.');
                } // Now add this dropzone to the instances.

                Dropzone.instances.push(_this); // Put the dropzone inside the element itself.

                _this.element.dropzone = _this;
                const elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};
                _this.options = Dropzone.extend(
                    {},
                    _this.defaultOptions,
                    elementOptions,
                    options != null ? options : {}
                ); // If the browser failed, just call the fallback and leave

                if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
                    let _ret;

                    return (_ret = _this.options.fallback.call(_this)), _possibleConstructorReturn$$1(_this, _ret);
                } // @options.url = @element.getAttribute "action" unless @options.url?

                if (_this.options.url == null) {
                    _this.options.url = _this.element.getAttribute('action');
                }

                if (!_this.options.url) {
                    throw new Error('No URL provided.');
                }

                if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
                    throw new Error(
                        "You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated."
                    );
                }

                if (_this.options.uploadMultiple && _this.options.chunking) {
                    throw new Error('You cannot set both: uploadMultiple and chunking.');
                } // Backwards compatibility

                if (_this.options.acceptedMimeTypes) {
                    _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
                    delete _this.options.acceptedMimeTypes;
                } // Backwards compatibility

                if (_this.options.renameFilename != null) {
                    _this.options.renameFile = function (file) {
                        return _this.options.renameFilename.call(_this, file.name, file);
                    };
                }

                _this.options.method = _this.options.method.toUpperCase();

                if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
                    // Remove the fallback
                    fallback.parentNode.removeChild(fallback);
                } // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false

                if (_this.options.previewsContainer !== false) {
                    if (_this.options.previewsContainer) {
                        _this.previewsContainer = Dropzone.getElement(
                            this.element,
                            _this.options.previewsContainer,
                            'previewsContainer'
                        );
                    } else {
                        _this.previewsContainer = _this.element;
                    }
                }

                if (_this.options.clickable) {
                    if (_this.options.clickable === true) {
                        _this.clickableElements = [_this.element];
                    } else {
                        _this.clickableElements = Dropzone.getElements(
                            this.element,
                            _this.options.clickable,
                            'clickable'
                        );
                    }
                }

                _this.init();

                return _this;
            } // Returns all files that have been accepted

            _createClass$$1(
                Dropzone,
                [
                    {
                        key: 'getAcceptedFiles',
                        value: function getAcceptedFiles() {
                            return this.files.filter((file) => file.accepted).map((file) => file);
                        }, // Returns all files that have been rejected
                        // Not sure when that's going to be useful, but added for completeness.
                    },
                    {
                        key: 'getRejectedFiles',
                        value: function getRejectedFiles() {
                            return this.files.filter((file) => !file.accepted).map((file) => file);
                        },
                    },
                    {
                        key: 'getFilesWithStatus',
                        value: function getFilesWithStatus(status) {
                            return this.files.filter((file) => file.status === status).map((file) => file);
                        }, // Returns all files that are in the queue
                    },
                    {
                        key: 'getQueuedFiles',
                        value: function getQueuedFiles() {
                            return this.getFilesWithStatus(Dropzone.QUEUED);
                        },
                    },
                    {
                        key: 'getUploadingFiles',
                        value: function getUploadingFiles() {
                            return this.getFilesWithStatus(Dropzone.UPLOADING);
                        },
                    },
                    {
                        key: 'getAddedFiles',
                        value: function getAddedFiles() {
                            return this.getFilesWithStatus(Dropzone.ADDED);
                        }, // Files that are either queued or uploading
                    },
                    {
                        key: 'getActiveFiles',
                        value: function getActiveFiles() {
                            return this.files
                                .filter((file) => file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED)
                                .map((file) => file);
                        }, // The function that gets called when Dropzone is initialized. You
                        // can (and should) setup event listeners inside this function.
                    },
                    {
                        key: 'init',
                        value: function init() {
                            const _this3 = this; // In case it isn't set already

                            if (this.element.tagName === 'form') {
                                this.element.setAttribute('enctype', 'multipart/form-data');
                            }

                            if (
                                this.element.classList.contains('dropzone') &&
                                !this.element.querySelector('.dz-message')
                            ) {
                                this.element.appendChild(
                                    Dropzone.createElement(
                                        `<div class="dz-default dz-message"><span>${this.options.dictDefaultMessage}</span></div>`
                                    )
                                );
                            }

                            if (this.clickableElements.length) {
                                const setupHiddenFileInput = function setupHiddenFileInput() {
                                    if (_this3.hiddenFileInput) {
                                        _this3.hiddenFileInput.parentNode.removeChild(_this3.hiddenFileInput);
                                    }

                                    _this3.hiddenFileInput = document.createElement('input');

                                    _this3.hiddenFileInput.setAttribute('type', 'file');

                                    if (_this3.options.maxFiles === null || _this3.options.maxFiles > 1) {
                                        _this3.hiddenFileInput.setAttribute('multiple', 'multiple');
                                    }

                                    _this3.hiddenFileInput.className = 'dz-hidden-input';

                                    if (_this3.options.acceptedFiles !== null) {
                                        _this3.hiddenFileInput.setAttribute('accept', _this3.options.acceptedFiles);
                                    }

                                    if (_this3.options.capture !== null) {
                                        _this3.hiddenFileInput.setAttribute('capture', _this3.options.capture);
                                    } // Not setting `display="none"` because some browsers don't accept clicks
                                    // on elements that aren't displayed.

                                    _this3.hiddenFileInput.style.visibility = 'hidden';
                                    _this3.hiddenFileInput.style.position = 'absolute';
                                    _this3.hiddenFileInput.style.top = '0';
                                    _this3.hiddenFileInput.style.left = '0';
                                    _this3.hiddenFileInput.style.height = '0';
                                    _this3.hiddenFileInput.style.width = '0';
                                    Dropzone.getElement(
                                        _this3.element,
                                        _this3.options.hiddenInputContainer,
                                        'hiddenInputContainer'
                                    ).appendChild(_this3.hiddenFileInput);
                                    return _this3.hiddenFileInput.addEventListener('change', () => {
                                        const { files } = _this3.hiddenFileInput;

                                        if (files.length) {
                                            for (
                                                var _iterator10 = files,
                                                    _isArray10 = true,
                                                    _i10 = 0,
                                                    _iterator10 = _isArray10
                                                        ? _iterator10
                                                        : _iterator10[Symbol.iterator]();
                                                ;

                                            ) {
                                                var _ref9;

                                                {
                                                    if (_i10 >= _iterator10.length) {
                                                        break;
                                                    }
                                                    _ref9 = _iterator10[_i10++];
                                                }

                                                const file = _ref9;

                                                _this3.addFile(file);
                                            }
                                        }

                                        _this3.emit('addedfiles', files);

                                        return setupHiddenFileInput();
                                    });
                                };

                                setupHiddenFileInput();
                            }

                            this.URL = window.URL !== null ? window.URL : window.webkitURL; // Setup all event listeners on the Dropzone object itself.
                            // They're not in @setupEventListeners() because they shouldn't be removed
                            // again when the dropzone gets disabled.

                            for (
                                var _iterator11 = this.events,
                                    _isArray11 = true,
                                    _i11 = 0,
                                    _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();
                                ;

                            ) {
                                var _ref10;

                                {
                                    if (_i11 >= _iterator11.length) {
                                        break;
                                    }
                                    _ref10 = _iterator11[_i11++];
                                }

                                const eventName = _ref10;
                                this.on(eventName, this.options[eventName]);
                            }

                            this.on('uploadprogress', () => _this3.updateTotalUploadProgress());
                            this.on('removedfile', () => _this3.updateTotalUploadProgress());
                            this.on('canceled', (file) => _this3.emit('complete', file)); // Emit a `queuecomplete` event if all files finished uploading.

                            this.on('complete', (file) => {
                                if (
                                    _this3.getAddedFiles().length === 0 &&
                                    _this3.getUploadingFiles().length === 0 &&
                                    _this3.getQueuedFiles().length === 0
                                ) {
                                    // This needs to be deferred so that `queuecomplete` really triggers after `complete`
                                    return setTimeout(() => _this3.emit('queuecomplete'), 0);
                                }
                            });

                            const noPropagation = function noPropagation(e) {
                                e.stopPropagation();

                                if (e.preventDefault) {
                                    return e.preventDefault();
                                }
                                return (e.returnValue = false);
                            }; // Create the listeners

                            this.listeners = [
                                {
                                    element: this.element,
                                    events: {
                                        dragstart: function dragstart(e) {
                                            return _this3.emit('dragstart', e);
                                        },
                                        dragenter: function dragenter(e) {
                                            noPropagation(e);
                                            return _this3.emit('dragenter', e);
                                        },
                                        dragover: function dragover(e) {
                                            // Makes it possible to drag files from chrome's download bar
                                            // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
                                            // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
                                            let efct = void 0;

                                            try {
                                                efct = e.dataTransfer.effectAllowed;
                                            } catch (error) {}

                                            e.dataTransfer.dropEffect =
                                                efct === 'move' || efct === 'linkMove' ? 'move' : 'copy';
                                            noPropagation(e);
                                            return _this3.emit('dragover', e);
                                        },
                                        dragleave: function dragleave(e) {
                                            return _this3.emit('dragleave', e);
                                        },
                                        drop: function drop(e) {
                                            noPropagation(e);
                                            return _this3.drop(e);
                                        },
                                        dragend: function dragend(e) {
                                            return _this3.emit('dragend', e);
                                        }, // This is disabled right now, because the browsers don't implement it properly.
                                        // "paste": (e) =>
                                        //   noPropagation e
                                        //   @paste e
                                    },
                                },
                            ];
                            this.clickableElements.forEach((clickableElement) =>
                                _this3.listeners.push({
                                    element: clickableElement,
                                    events: {
                                        click: function click(evt) {
                                            // Only the actual dropzone or the message element should trigger file selection
                                            if (
                                                clickableElement !== _this3.element ||
                                                evt.target === _this3.element ||
                                                Dropzone.elementInside(
                                                    evt.target,
                                                    _this3.element.querySelector('.dz-message')
                                                )
                                            ) {
                                                _this3.hiddenFileInput.click(); // Forward the click
                                            }

                                            return true;
                                        },
                                    },
                                })
                            );
                            this.enable();
                            return this.options.init.call(this);
                        }, // Not fully tested yet
                    },
                    {
                        key: 'destroy',
                        value: function destroy() {
                            this.disable();
                            this.removeAllFiles(true);

                            if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
                                this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                                this.hiddenFileInput = null;
                            }

                            delete this.element.dropzone;
                            return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
                        },
                    },
                    {
                        key: 'updateTotalUploadProgress',
                        value: function updateTotalUploadProgress() {
                            let totalUploadProgress = void 0;
                            let totalBytesSent = 0;
                            let totalBytes = 0;
                            const activeFiles = this.getActiveFiles();

                            if (activeFiles.length) {
                                for (
                                    var _iterator12 = this.getActiveFiles(),
                                        _isArray12 = true,
                                        _i12 = 0,
                                        _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();
                                    ;

                                ) {
                                    var _ref11;

                                    {
                                        if (_i12 >= _iterator12.length) {
                                            break;
                                        }
                                        _ref11 = _iterator12[_i12++];
                                    }

                                    const file = _ref11;
                                    totalBytesSent += file.upload.bytesSent;
                                    totalBytes += file.upload.total;
                                }

                                totalUploadProgress = (100 * totalBytesSent) / totalBytes;
                            } else {
                                totalUploadProgress = 100;
                            }

                            return this.emit('totaluploadprogress', totalUploadProgress, totalBytes, totalBytesSent);
                        }, // @options.paramName can be a function taking one parameter rather than a string.
                        // A parameter name for a file is obtained simply by calling this with an index number.
                    },
                    {
                        key: '_getParamName',
                        value: function _getParamName(n) {
                            if (typeof this.options.paramName === 'function') {
                                return this.options.paramName(n);
                            }
                            return `${this.options.paramName}${this.options.uploadMultiple ? `[${n}]` : ''}`;
                        }, // If @options.renameFile is a function,
                        // the function will be used to rename the file.name before appending it to the formData
                    },
                    {
                        key: '_renameFile',
                        value: function _renameFile(file) {
                            if (typeof this.options.renameFile !== 'function') {
                                return file.name;
                            }

                            return this.options.renameFile(file);
                        }, // Returns a form that can be used as fallback if the browser does not support DragnDrop
                        //
                        // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
                        // This code has to pass in IE7 :(
                    },
                    {
                        key: 'getFallbackForm',
                        value: function getFallbackForm() {
                            let existingFallback = void 0;
                            let form = void 0;

                            if ((existingFallback = this.getExistingFallback())) {
                                return existingFallback;
                            }

                            let fieldsString = '<div class="dz-fallback">';

                            if (this.options.dictFallbackText) {
                                fieldsString += `<p>${this.options.dictFallbackText}</p>`;
                            }

                            fieldsString += `<input type="file" name="${this._getParamName(0)}" ${
                                this.options.uploadMultiple ? 'multiple="multiple"' : undefined
                            } /><input type="submit" value="Upload!"></div>`;
                            const fields = Dropzone.createElement(fieldsString);

                            if (this.element.tagName !== 'FORM') {
                                form = Dropzone.createElement(
                                    `<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`
                                );
                                form.appendChild(fields);
                            } else {
                                // Make sure that the enctype and method attributes are set properly
                                this.element.setAttribute('enctype', 'multipart/form-data');
                                this.element.setAttribute('method', this.options.method);
                            }

                            return form != null ? form : fields;
                        }, // Returns the fallback elements if they exist already
                        //
                        // This code has to pass in IE7 :(
                    },
                    {
                        key: 'getExistingFallback',
                        value: function getExistingFallback() {
                            const getFallback = function getFallback(elements) {
                                for (
                                    var _iterator13 = elements,
                                        _isArray13 = true,
                                        _i13 = 0,
                                        _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();
                                    ;

                                ) {
                                    var _ref12;

                                    {
                                        if (_i13 >= _iterator13.length) {
                                            break;
                                        }
                                        _ref12 = _iterator13[_i13++];
                                    }

                                    const el = _ref12;

                                    if (/(^| )fallback($| )/.test(el.className)) {
                                        return el;
                                    }
                                }
                            };

                            const _arr = ['div', 'form'];

                            for (let _i14 = 0; _i14 < _arr.length; _i14++) {
                                const tagName = _arr[_i14];
                                var fallback;

                                if ((fallback = getFallback(this.element.getElementsByTagName(tagName)))) {
                                    return fallback;
                                }
                            }
                        }, // Activates all listeners stored in @listeners
                    },
                    {
                        key: 'setupEventListeners',
                        value: function setupEventListeners() {
                            return this.listeners.map((elementListeners) =>
                                (function () {
                                    const result = [];

                                    for (const event in elementListeners.events) {
                                        const listener = elementListeners.events[event];
                                        result.push(elementListeners.element.addEventListener(event, listener, false));
                                    }

                                    return result;
                                })()
                            );
                        }, // Deactivates all listeners stored in @listeners
                    },
                    {
                        key: 'removeEventListeners',
                        value: function removeEventListeners() {
                            return this.listeners.map((elementListeners) =>
                                (function () {
                                    const result = [];

                                    for (const event in elementListeners.events) {
                                        const listener = elementListeners.events[event];
                                        result.push(
                                            elementListeners.element.removeEventListener(event, listener, false)
                                        );
                                    }

                                    return result;
                                })()
                            );
                        }, // Removes all event listeners and cancels all files in the queue or being processed.
                    },
                    {
                        key: 'disable',
                        value: function disable() {
                            const _this4 = this;

                            this.clickableElements.forEach((element) => element.classList.remove('dz-clickable'));
                            this.removeEventListeners();
                            this.disabled = true;
                            return this.files.map((file) => _this4.cancelUpload(file));
                        },
                    },
                    {
                        key: 'enable',
                        value: function enable() {
                            delete this.disabled;
                            this.clickableElements.forEach((element) => element.classList.add('dz-clickable'));
                            return this.setupEventListeners();
                        }, // Returns a nicely formatted filesize
                    },
                    {
                        key: 'filesize',
                        value: function filesize(size) {
                            let selectedSize = 0;
                            let selectedUnit = 'b';

                            if (size > 0) {
                                const units = ['tb', 'gb', 'mb', 'kb', 'b'];

                                for (let i = 0; i < units.length; i++) {
                                    const unit = units[i];
                                    const cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;

                                    if (size >= cutoff) {
                                        selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                                        selectedUnit = unit;
                                        break;
                                    }
                                }

                                selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
                            }

                            return `<strong>${selectedSize}</strong> ${this.options.dictFileSizeUnits[selectedUnit]}`;
                        }, // Adds or removes the `dz-max-files-reached` class from the form.
                    },
                    {
                        key: '_updateMaxFilesReachedClass',
                        value: function _updateMaxFilesReachedClass() {
                            if (
                                this.options.maxFiles != null &&
                                this.getAcceptedFiles().length >= this.options.maxFiles
                            ) {
                                if (this.getAcceptedFiles().length === this.options.maxFiles) {
                                    this.emit('maxfilesreached', this.files);
                                }

                                return this.element.classList.add('dz-max-files-reached');
                            }
                            return this.element.classList.remove('dz-max-files-reached');
                        },
                    },
                    {
                        key: 'drop',
                        value: function drop(e) {
                            if (!e.dataTransfer) {
                                return;
                            }

                            this.emit('drop', e); // Convert the FileList to an Array
                            // This is necessary for IE11

                            const files = [];

                            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                                files[i] = e.dataTransfer.files[i];
                            }

                            this.emit('addedfiles', files); // Even if it's a folder, files.length will contain the folders.

                            if (files.length) {
                                const { items } = e.dataTransfer;

                                if (items && items.length && items[0].webkitGetAsEntry != null) {
                                    // The browser supports dropping of folders, so handle items instead of files
                                    this._addFilesFromItems(items);
                                } else {
                                    this.handleFiles(files);
                                }
                            }
                        },
                    },
                    {
                        key: 'paste',
                        value: function paste(e) {
                            if (__guard__(e != null ? e.clipboardData : undefined, (x) => x.items) == null) {
                                return;
                            }

                            this.emit('paste', e);
                            const { items } = e.clipboardData;

                            if (items.length) {
                                return this._addFilesFromItems(items);
                            }
                        },
                    },
                    {
                        key: 'handleFiles',
                        value: function handleFiles(files) {
                            for (
                                var _iterator14 = files,
                                    _isArray14 = true,
                                    _i15 = 0,
                                    _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();
                                ;

                            ) {
                                var _ref13;

                                {
                                    if (_i15 >= _iterator14.length) {
                                        break;
                                    }
                                    _ref13 = _iterator14[_i15++];
                                }

                                const file = _ref13;
                                this.addFile(file);
                            }
                        }, // When a folder is dropped (or files are pasted), items must be handled
                        // instead of files.
                    },
                    {
                        key: '_addFilesFromItems',
                        value: function _addFilesFromItems(items) {
                            const _this5 = this;

                            return (function () {
                                const result = [];

                                for (
                                    var _iterator15 = items,
                                        _isArray15 = true,
                                        _i16 = 0,
                                        _iterator15 = _isArray15 ? _iterator15 : _iterator15[Symbol.iterator]();
                                    ;

                                ) {
                                    var _ref14;

                                    {
                                        if (_i16 >= _iterator15.length) {
                                            break;
                                        }
                                        _ref14 = _iterator15[_i16++];
                                    }

                                    const item = _ref14;
                                    var entry;

                                    if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
                                        if (entry.isFile) {
                                            result.push(_this5.addFile(item.getAsFile()));
                                        } else if (entry.isDirectory) {
                                            // Append all files from that directory to files
                                            result.push(_this5._addFilesFromDirectory(entry, entry.name));
                                        } else {
                                            result.push(undefined);
                                        }
                                    } else if (item.getAsFile != null) {
                                        if (item.kind == null || item.kind === 'file') {
                                            result.push(_this5.addFile(item.getAsFile()));
                                        } else {
                                            result.push(undefined);
                                        }
                                    } else {
                                        result.push(undefined);
                                    }
                                }

                                return result;
                            })();
                        }, // Goes through the directory, and adds each file it finds recursively
                    },
                    {
                        key: '_addFilesFromDirectory',
                        value: function _addFilesFromDirectory(directory, path) {
                            const _this6 = this;

                            const dirReader = directory.createReader();

                            const errorHandler = function errorHandler(error) {
                                return __guardMethod__(console, 'log', (o) => o.log(error));
                            };

                            const readEntries = function readEntries() {
                                return dirReader.readEntries((entries) => {
                                    if (entries.length > 0) {
                                        for (
                                            var _iterator16 = entries,
                                                _isArray16 = true,
                                                _i17 = 0,
                                                _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator]();
                                            ;

                                        ) {
                                            var _ref15;

                                            {
                                                if (_i17 >= _iterator16.length) {
                                                    break;
                                                }
                                                _ref15 = _iterator16[_i17++];
                                            }

                                            const entry = _ref15;

                                            if (entry.isFile) {
                                                entry.file((file) => {
                                                    if (
                                                        _this6.options.ignoreHiddenFiles &&
                                                        file.name.substring(0, 1) === '.'
                                                    ) {
                                                        return;
                                                    }

                                                    file.fullPath = `${path}/${file.name}`;
                                                    return _this6.addFile(file);
                                                });
                                            } else if (entry.isDirectory) {
                                                _this6._addFilesFromDirectory(entry, `${path}/${entry.name}`);
                                            }
                                        } // Recursively call readEntries() again, since browser only handle
                                        // the first 100 entries.
                                        // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries

                                        readEntries();
                                    }

                                    return null;
                                }, errorHandler);
                            };

                            return readEntries();
                        }, // If `done()` is called without argument the file is accepted
                        // If you call it with an error message, the file is rejected
                        // (This allows for asynchronous validation)
                        //
                        // This function checks the filesize, and if the file.type passes the
                        // `acceptedFiles` check.
                    },
                    {
                        key: 'accept',
                        value: function accept(file, done) {
                            if (this.options.maxFilesize && file.size > this.options.maxFilesize) {
                                return done(
                                    this.options.dictFileTooBig
                                        .replace('{{filesize}}', Math.round(file.size / 1024 / 10.24) / 100)
                                        .replace('{{maxFilesize}}', this.options.maxFilesize)
                                );
                            }
                            if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
                                return done(this.options.dictInvalidFileType);
                            }
                            if (
                                this.options.maxFiles != null &&
                                this.getAcceptedFiles().length >= this.options.maxFiles
                            ) {
                                done(this.options.dictMaxFilesExceeded.replace('{{maxFiles}}', this.options.maxFiles));
                                return this.emit('maxfilesexceeded', file);
                            }
                            return this.options.accept.call(this, file, done);
                        },
                    },
                    {
                        key: 'addFile',
                        value: function addFile(file) {
                            const _this7 = this;

                            file.upload = {
                                uuid: Dropzone.uuidv4(),
                                progress: 0,
                                // Setting the total upload size to file.size for the beginning
                                // It's actual different than the size to be transmitted.
                                total: file.size,
                                bytesSent: 0,
                                filename: this._renameFile(file),
                                chunked:
                                    this.options.chunking &&
                                    (this.options.forceChunking || file.size > this.options.chunkSize),
                                totalChunkCount: Math.ceil(file.size / this.options.chunkSize),
                            };
                            this.files.push(file);
                            file.status = Dropzone.ADDED;
                            this.emit('addedfile', file);

                            this._enqueueThumbnail(file);

                            return this.accept(file, (error) => {
                                if (error) {
                                    file.accepted = false;

                                    _this7._errorProcessing([file], error); // Will set the file.status
                                } else {
                                    file.accepted = true;

                                    if (_this7.options.autoQueue) {
                                        _this7.enqueueFile(file);
                                    } // Will set .accepted = true
                                }

                                return _this7._updateMaxFilesReachedClass();
                            });
                        }, // Wrapper for enqueueFile
                    },
                    {
                        key: 'enqueueFiles',
                        value: function enqueueFiles(files) {
                            for (
                                var _iterator17 = files,
                                    _isArray17 = true,
                                    _i18 = 0,
                                    _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator]();
                                ;

                            ) {
                                var _ref16;

                                {
                                    if (_i18 >= _iterator17.length) {
                                        break;
                                    }
                                    _ref16 = _iterator17[_i18++];
                                }

                                const file = _ref16;
                                this.enqueueFile(file);
                            }

                            return null;
                        },
                    },
                    {
                        key: 'enqueueFile',
                        value: function enqueueFile(file) {
                            const _this8 = this;

                            if (file.status === Dropzone.ADDED && file.accepted === true) {
                                file.status = Dropzone.QUEUED;

                                if (this.options.autoProcessQueue) {
                                    return setTimeout(() => _this8.processQueue(), 0); // Deferring the call
                                }
                            } else {
                                throw new Error(
                                    "This file can't be queued because it has already been processed or was rejected."
                                );
                            }
                        },
                    },
                    {
                        key: '_enqueueThumbnail',
                        value: function _enqueueThumbnail(file) {
                            const _this9 = this;

                            if (
                                this.options.createImageThumbnails &&
                                file.type.match(/image.*/) &&
                                file.size <= this.options.maxThumbnailFilesize * 1024 * 1024
                            ) {
                                this._thumbnailQueue.push(file);

                                return setTimeout(() => _this9._processThumbnailQueue(), 0); // Deferring the call
                            }
                        },
                    },
                    {
                        key: '_processThumbnailQueue',
                        value: function _processThumbnailQueue() {
                            const _this10 = this;

                            if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
                                return;
                            }

                            this._processingThumbnail = true;

                            const file = this._thumbnailQueue.shift();

                            return this.createThumbnail(
                                file,
                                this.options.thumbnailWidth,
                                this.options.thumbnailHeight,
                                this.options.thumbnailMethod,
                                true,
                                (dataUrl) => {
                                    _this10.emit('thumbnail', file, dataUrl);

                                    _this10._processingThumbnail = false;
                                    return _this10._processThumbnailQueue();
                                }
                            );
                        }, // Can be called by the user to remove a file
                    },
                    {
                        key: 'removeFile',
                        // feat: UIG-2520 - options toegevoegd
                        value: function removeFile(file, options) {
                            if (file.status === Dropzone.UPLOADING) {
                                this.cancelUpload(file);
                            }

                            this.files = without(this.files, file);

                            this.emit('removedfile', file);

                            // feat: UIG-2520 - als duplicaten worden verwijderd, event afvuren
                            if (options && options.isDuplicate) {
                                this.emit('duplicateRemoved', file);
                            }

                            if (this.files.length === 0) {
                                return this.emit('reset');
                            }
                        }, // Removes all files that aren't currently processed from the list
                    },
                    {
                        key: 'removeAllFiles',
                        value: function removeAllFiles(cancelIfNecessary) {
                            // Create a copy of files since removeFile() changes the @files array.
                            if (cancelIfNecessary == null) {
                                cancelIfNecessary = false;
                            }

                            for (
                                var _iterator18 = this.files.slice(),
                                    _isArray18 = true,
                                    _i19 = 0,
                                    _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator]();
                                ;

                            ) {
                                var _ref17;

                                {
                                    if (_i19 >= _iterator18.length) {
                                        break;
                                    }
                                    _ref17 = _iterator18[_i19++];
                                }

                                const file = _ref17;

                                if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
                                    this.removeFile(file);
                                }
                            }

                            return null;
                        }, // Resizes an image before it gets sent to the server. This function is the default behavior of
                        // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
                        // the resized blob.
                    },
                    {
                        key: 'resizeImage',
                        value: function resizeImage(file, width, height, resizeMethod, callback) {
                            const _this11 = this;

                            return this.createThumbnail(file, width, height, resizeMethod, true, (dataUrl, canvas) => {
                                if (canvas == null) {
                                    // The image has not been resized
                                    return callback(file);
                                }
                                let { resizeMimeType } = _this11.options;

                                if (resizeMimeType == null) {
                                    resizeMimeType = file.type;
                                }

                                let resizedDataURL = canvas.toDataURL(resizeMimeType, _this11.options.resizeQuality);

                                if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
                                    // Now add the original EXIF information
                                    resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
                                }

                                return callback(Dropzone.dataURItoBlob(resizedDataURL));
                            });
                        },
                    },
                    {
                        key: 'createThumbnail',
                        value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
                            const _this12 = this;

                            const fileReader = new FileReader();

                            fileReader.onload = function () {
                                file.dataURL = fileReader.result; // Don't bother creating a thumbnail for SVG images since they're vector

                                if (file.type === 'image/svg+xml') {
                                    if (callback != null) {
                                        callback(fileReader.result);
                                    }

                                    return;
                                }

                                return _this12.createThumbnailFromUrl(
                                    file,
                                    width,
                                    height,
                                    resizeMethod,
                                    fixOrientation,
                                    callback
                                );
                            };

                            return fileReader.readAsDataURL(file);
                        },
                    },
                    {
                        key: 'createThumbnailFromUrl',
                        value: function createThumbnailFromUrl(
                            file,
                            width,
                            height,
                            resizeMethod,
                            fixOrientation,
                            callback,
                            crossOrigin
                        ) {
                            const _this13 = this; // Not using `new Image` here because of a bug in latest Chrome versions.
                            // See https://github.com/enyo/dropzone/pull/226

                            const img = document.createElement('img');

                            if (crossOrigin) {
                                img.crossOrigin = crossOrigin;
                            }

                            img.onload = function () {
                                let loadExif = function loadExif(callback) {
                                    return callback(1);
                                };

                                if (typeof EXIF !== 'undefined' && EXIF !== null && fixOrientation) {
                                    loadExif = function loadExif(callback) {
                                        return EXIF.getData(img, function () {
                                            return callback(EXIF.getTag(this, 'Orientation'));
                                        });
                                    };
                                }

                                return loadExif((orientation) => {
                                    file.width = img.width;
                                    file.height = img.height;

                                    const resizeInfo = _this13.options.resize.call(
                                        _this13,
                                        file,
                                        width,
                                        height,
                                        resizeMethod
                                    );

                                    const canvas = document.createElement('canvas');
                                    const ctx = canvas.getContext('2d');
                                    canvas.width = resizeInfo.trgWidth;
                                    canvas.height = resizeInfo.trgHeight;

                                    if (orientation > 4) {
                                        canvas.width = resizeInfo.trgHeight;
                                        canvas.height = resizeInfo.trgWidth;
                                    }

                                    switch (orientation) {
                                        case 2:
                                            // horizontal flip
                                            ctx.translate(canvas.width, 0);
                                            ctx.scale(-1, 1);
                                            break;

                                        case 3:
                                            // 180° rotate left
                                            ctx.translate(canvas.width, canvas.height);
                                            ctx.rotate(Math.PI);
                                            break;

                                        case 4:
                                            // vertical flip
                                            ctx.translate(0, canvas.height);
                                            ctx.scale(1, -1);
                                            break;

                                        case 5:
                                            // vertical flip + 90 rotate right
                                            ctx.rotate(0.5 * Math.PI);
                                            ctx.scale(1, -1);
                                            break;

                                        case 6:
                                            // 90° rotate right
                                            ctx.rotate(0.5 * Math.PI);
                                            ctx.translate(0, -canvas.width);
                                            break;

                                        case 7:
                                            // horizontal flip + 90 rotate right
                                            ctx.rotate(0.5 * Math.PI);
                                            ctx.translate(canvas.height, -canvas.width);
                                            ctx.scale(-1, 1);
                                            break;

                                        case 8:
                                            // 90° rotate left
                                            ctx.rotate(-0.5 * Math.PI);
                                            ctx.translate(-canvas.height, 0);
                                            break;
                                    } // This is a bugfix for iOS' scaling bug.

                                    drawImageIOSFix(
                                        ctx,
                                        img,
                                        resizeInfo.srcX != null ? resizeInfo.srcX : 0,
                                        resizeInfo.srcY != null ? resizeInfo.srcY : 0,
                                        resizeInfo.srcWidth,
                                        resizeInfo.srcHeight,
                                        resizeInfo.trgX != null ? resizeInfo.trgX : 0,
                                        resizeInfo.trgY != null ? resizeInfo.trgY : 0,
                                        resizeInfo.trgWidth,
                                        resizeInfo.trgHeight
                                    );
                                    const thumbnail = canvas.toDataURL('image/png');

                                    if (callback != null) {
                                        return callback(thumbnail, canvas);
                                    }
                                });
                            };

                            if (callback != null) {
                                img.onerror = callback;
                            }

                            return (img.src = file.dataURL);
                        }, // Goes through the queue and processes files if there aren't too many already.
                    },
                    {
                        key: 'processQueue',
                        value: function processQueue() {
                            const { parallelUploads } = this.options;
                            const processingLength = this.getUploadingFiles().length;
                            let i = processingLength; // There are already at least as many files uploading than should be

                            if (processingLength >= parallelUploads) {
                                return;
                            }

                            const queuedFiles = this.getQueuedFiles();

                            if (!(queuedFiles.length > 0)) {
                                return;
                            }

                            if (this.options.uploadMultiple) {
                                // The files should be uploaded in one request
                                return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
                            }
                            while (i < parallelUploads) {
                                if (!queuedFiles.length) {
                                    return;
                                } // Nothing left to process

                                this.processFile(queuedFiles.shift());
                                i++;
                            }
                        }, // Wrapper for `processFiles`
                    },
                    {
                        key: 'processFile',
                        value: function processFile(file) {
                            return this.processFiles([file]);
                        }, // Loads the file, then calls finishedLoading()
                    },
                    {
                        key: 'processFiles',
                        value: function processFiles(files) {
                            for (
                                var _iterator19 = files,
                                    _isArray19 = true,
                                    _i20 = 0,
                                    _iterator19 = _isArray19 ? _iterator19 : _iterator19[Symbol.iterator]();
                                ;

                            ) {
                                var _ref18;

                                {
                                    if (_i20 >= _iterator19.length) {
                                        break;
                                    }
                                    _ref18 = _iterator19[_i20++];
                                }

                                const file = _ref18;
                                file.processing = true; // Backwards compatibility

                                file.status = Dropzone.UPLOADING;
                                this.emit('processing', file);
                            }

                            if (this.options.uploadMultiple) {
                                this.emit('processingmultiple', files);
                            }

                            return this.uploadFiles(files);
                        },
                    },
                    {
                        key: '_getFilesWithXhr',
                        value: function _getFilesWithXhr(xhr) {
                            let files = void 0;
                            return (files = this.files.filter((file) => file.xhr === xhr).map((file) => file));
                        }, // Cancels the file upload and sets the status to CANCELED
                        // **if** the file is actually being uploaded.
                        // If it's still in the queue, the file is being removed from it and the status
                        // set to CANCELED.
                    },
                    {
                        key: 'cancelUpload',
                        value: function cancelUpload(file) {
                            if (file.status === Dropzone.UPLOADING) {
                                const groupedFiles = this._getFilesWithXhr(file.xhr);

                                for (
                                    var _iterator20 = groupedFiles,
                                        _isArray20 = true,
                                        _i21 = 0,
                                        _iterator20 = _isArray20 ? _iterator20 : _iterator20[Symbol.iterator]();
                                    ;

                                ) {
                                    var _ref19;

                                    {
                                        if (_i21 >= _iterator20.length) {
                                            break;
                                        }
                                        _ref19 = _iterator20[_i21++];
                                    }

                                    const groupedFile = _ref19;
                                    groupedFile.status = Dropzone.CANCELED;
                                }

                                if (typeof file.xhr !== 'undefined') {
                                    file.xhr.abort();
                                }

                                for (
                                    var _iterator21 = groupedFiles,
                                        _isArray21 = true,
                                        _i22 = 0,
                                        _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator]();
                                    ;

                                ) {
                                    var _ref20;

                                    {
                                        if (_i22 >= _iterator21.length) {
                                            break;
                                        }
                                        _ref20 = _iterator21[_i22++];
                                    }

                                    const _groupedFile = _ref20;
                                    this.emit('canceled', _groupedFile);
                                }

                                if (this.options.uploadMultiple) {
                                    this.emit('canceledmultiple', groupedFiles);
                                }
                            } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
                                file.status = Dropzone.CANCELED;
                                this.emit('canceled', file);

                                if (this.options.uploadMultiple) {
                                    this.emit('canceledmultiple', [file]);
                                }
                            }

                            if (this.options.autoProcessQueue) {
                                return this.processQueue();
                            }
                        },
                    },
                    {
                        key: 'resolveOption',
                        value: function resolveOption(option) {
                            if (typeof option === 'function') {
                                for (
                                    var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;
                                    _key3 < _len3;
                                    _key3++
                                ) {
                                    args[_key3 - 1] = arguments[_key3];
                                }

                                return option.apply(this, args);
                            }

                            return option;
                        },
                    },
                    {
                        key: 'uploadFile',
                        value: function uploadFile(file) {
                            return this.uploadFiles([file]);
                        },
                    },
                    {
                        key: 'uploadFiles',
                        value: function uploadFiles(files) {
                            const _this14 = this;

                            this._transformFiles(files, (transformedFiles) => {
                                if (files[0].upload.chunked) {
                                    // This file should be sent in chunks!
                                    // If the chunking option is set, we **know** that there can only be **one** file, since
                                    // uploadMultiple is not allowed with this option.
                                    const file = files[0];
                                    const transformedFile = transformedFiles[0];
                                    file.upload.chunks = [];

                                    const handleNextChunk = function handleNextChunk() {
                                        let chunkIndex = 0; // Find the next item in file.upload.chunks that is not defined yet.

                                        while (file.upload.chunks[chunkIndex] !== undefined) {
                                            chunkIndex++;
                                        } // This means, that all chunks have already been started.

                                        if (chunkIndex >= file.upload.totalChunkCount) {
                                            return;
                                        }
                                        const start = chunkIndex * _this14.options.chunkSize;
                                        const end = Math.min(start + _this14.options.chunkSize, file.size);
                                        const dataBlock = {
                                            name: _this14._getParamName(0),
                                            data: transformedFile.webkitSlice
                                                ? transformedFile.webkitSlice(start, end)
                                                : transformedFile.slice(start, end),
                                            filename: file.upload.filename,
                                            chunkIndex,
                                        };
                                        file.upload.chunks[chunkIndex] = {
                                            file,
                                            index: chunkIndex,
                                            dataBlock,
                                            // In case we want to retry.
                                            status: Dropzone.UPLOADING,
                                            progress: 0,
                                            retries: 0, // The number of times this block has been retried.
                                        };

                                        _this14._uploadData(files, [dataBlock]);
                                    };

                                    file.upload.finishedChunkUpload = function (chunk) {
                                        let allFinished = true;
                                        chunk.status = Dropzone.SUCCESS; // Clear the data from the chunk

                                        chunk.dataBlock = null; // Leaving this reference to xhr intact here will cause memory leaks in some browsers

                                        chunk.xhr = null;

                                        for (let i = 0; i < file.upload.totalChunkCount; i++) {
                                            if (file.upload.chunks[i] === undefined) {
                                                return handleNextChunk();
                                            }

                                            if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                                                allFinished = false;
                                            }
                                        }

                                        if (allFinished) {
                                            _this14.options.chunksUploaded(file, () => {
                                                _this14._finished(files, '', null);
                                            });
                                        }
                                    };

                                    if (_this14.options.parallelChunkUploads) {
                                        for (let i = 0; i < file.upload.totalChunkCount; i++) {
                                            handleNextChunk();
                                        }
                                    } else {
                                        handleNextChunk();
                                    }
                                } else {
                                    const dataBlocks = [];

                                    for (let _i23 = 0; _i23 < files.length; _i23++) {
                                        dataBlocks[_i23] = {
                                            name: _this14._getParamName(_i23),
                                            data: transformedFiles[_i23],
                                            filename: files[_i23].upload.filename,
                                        };
                                    }

                                    _this14._uploadData(files, dataBlocks);
                                }
                            });
                        }, /// Returns the right chunk for given file and xhr
                    },
                    {
                        key: '_getChunk',
                        value: function _getChunk(file, xhr) {
                            for (let i = 0; i < file.upload.totalChunkCount; i++) {
                                if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
                                    return file.upload.chunks[i];
                                }
                            }
                        }, // This function actually uploads the file(s) to the server.
                        // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
                        // files, or individual chunks for chunked upload).
                    },
                    {
                        key: '_uploadData',
                        value: function _uploadData(files, dataBlocks) {
                            const _this15 = this;

                            const xhr = new XMLHttpRequest(); // Put the xhr object in the file objects to be able to reference it later.

                            for (
                                var _iterator22 = files,
                                    _isArray22 = true,
                                    _i24 = 0,
                                    _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator]();
                                ;

                            ) {
                                var _ref21;

                                {
                                    if (_i24 >= _iterator22.length) {
                                        break;
                                    }
                                    _ref21 = _iterator22[_i24++];
                                }

                                const file = _ref21;
                                file.xhr = xhr;
                            }

                            if (files[0].upload.chunked) {
                                // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
                                files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
                            }

                            const method = this.resolveOption(this.options.method, files);
                            const url = this.resolveOption(this.options.url, files);
                            xhr.open(method, url, true); // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8

                            xhr.timeout = this.resolveOption(this.options.timeout, files); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

                            xhr.withCredentials = !!this.options.withCredentials;

                            xhr.onload = function (e) {
                                _this15._finishedUploading(files, xhr, e);
                            };

                            xhr.onerror = function () {
                                _this15._handleUploadError(files, xhr);
                            }; // Some browsers do not have the .upload property

                            const progressObj = xhr.upload != null ? xhr.upload : xhr;

                            progressObj.onprogress = function (e) {
                                return _this15._updateFilesUploadProgress(files, xhr, e);
                            };

                            const headers = {
                                Accept: 'application/json',
                                'Cache-Control': 'no-cache',
                                'X-Requested-With': 'XMLHttpRequest',
                            };

                            if (this.options.headers) {
                                Dropzone.extend(headers, this.options.headers);
                            }

                            for (const headerName in headers) {
                                const headerValue = headers[headerName];

                                if (headerValue) {
                                    xhr.setRequestHeader(headerName, headerValue);
                                }
                            }

                            const formData = new FormData(); // Adding all @options parameters

                            if (this.options.params) {
                                let additionalParams = this.options.params;

                                if (typeof additionalParams === 'function') {
                                    additionalParams = additionalParams.call(
                                        this,
                                        files,
                                        xhr,
                                        files[0].upload.chunked ? this._getChunk(files[0], xhr) : null
                                    );
                                }

                                for (const key in additionalParams) {
                                    const value = additionalParams[key];
                                    formData.append(key, value);
                                }
                            } // Let the user add additional data if necessary

                            for (
                                var _iterator23 = files,
                                    _isArray23 = true,
                                    _i25 = 0,
                                    _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator]();
                                ;

                            ) {
                                var _ref22;

                                {
                                    if (_i25 >= _iterator23.length) {
                                        break;
                                    }
                                    _ref22 = _iterator23[_i25++];
                                }

                                const _file = _ref22;
                                this.emit('sending', _file, xhr, formData);
                            }

                            if (this.options.uploadMultiple) {
                                this.emit('sendingmultiple', files, xhr, formData);
                            }

                            this._addFormElementData(formData); // Finally add the files
                            // Has to be last because some servers (eg: S3) expect the file to be the last parameter

                            for (let i = 0; i < dataBlocks.length; i++) {
                                const dataBlock = dataBlocks[i];
                                formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
                            }

                            this.submitRequest(xhr, formData, files);
                        }, // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
                    },
                    {
                        key: '_transformFiles',
                        value: function _transformFiles(files, done) {
                            const _this16 = this;

                            const transformedFiles = []; // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.

                            let doneCounter = 0;

                            const _loop = function _loop(i) {
                                _this16.options.transformFile.call(_this16, files[i], (transformedFile) => {
                                    transformedFiles[i] = transformedFile;

                                    if (++doneCounter === files.length) {
                                        done(transformedFiles);
                                    }
                                });
                            };

                            for (let i = 0; i < files.length; i++) {
                                _loop(i);
                            }
                        }, // Takes care of adding other input elements of the form to the AJAX request
                    },
                    {
                        key: '_addFormElementData',
                        value: function _addFormElementData(formData) {
                            // Take care of other input elements
                            if (this.element.tagName === 'FORM') {
                                for (
                                    var _iterator24 = this.element.querySelectorAll('input, textarea, select, button'),
                                        _isArray24 = true,
                                        _i26 = 0,
                                        _iterator24 = _isArray24 ? _iterator24 : _iterator24[Symbol.iterator]();
                                    ;

                                ) {
                                    var _ref23;

                                    {
                                        if (_i26 >= _iterator24.length) {
                                            break;
                                        }
                                        _ref23 = _iterator24[_i26++];
                                    }

                                    const input = _ref23;
                                    const inputName = input.getAttribute('name');
                                    let inputType = input.getAttribute('type');
                                    if (inputType) {
                                        inputType = inputType.toLowerCase();
                                    } // If the input doesn't have a name, we can't use it.

                                    if (typeof inputName === 'undefined' || inputName === null) {
                                        continue;
                                    }

                                    if (input.tagName === 'SELECT' && input.hasAttribute('multiple')) {
                                        // Possibly multiple values
                                        for (
                                            var _iterator25 = input.options,
                                                _isArray25 = true,
                                                _i27 = 0,
                                                _iterator25 = _isArray25 ? _iterator25 : _iterator25[Symbol.iterator]();
                                            ;

                                        ) {
                                            var _ref24;

                                            {
                                                if (_i27 >= _iterator25.length) {
                                                    break;
                                                }
                                                _ref24 = _iterator25[_i27++];
                                            }

                                            const option = _ref24;

                                            if (option.selected) {
                                                formData.append(inputName, option.value);
                                            }
                                        }
                                    } else if (
                                        !inputType ||
                                        (inputType !== 'checkbox' && inputType !== 'radio') ||
                                        input.checked
                                    ) {
                                        formData.append(inputName, input.value);
                                    }
                                }
                            }
                        }, // Invoked when there is new progress information about given files.
                        // If e is not provided, it is assumed that the upload is finished.
                    },
                    {
                        key: '_updateFilesUploadProgress',
                        value: function _updateFilesUploadProgress(files, xhr, e) {
                            let progress = void 0;

                            if (typeof e !== 'undefined') {
                                progress = (100 * e.loaded) / e.total;

                                if (files[0].upload.chunked) {
                                    const file = files[0]; // Since this is a chunked upload, we need to update the appropriate chunk progress.

                                    const chunk = this._getChunk(file, xhr);

                                    chunk.progress = progress;
                                    chunk.total = e.total;
                                    chunk.bytesSent = e.loaded;
                                    file.upload.progress = 0;
                                    file.upload.total = 0;
                                    file.upload.bytesSent = 0;

                                    for (let i = 0; i < file.upload.totalChunkCount; i++) {
                                        if (
                                            file.upload.chunks[i] !== undefined &&
                                            file.upload.chunks[i].progress !== undefined
                                        ) {
                                            file.upload.progress += file.upload.chunks[i].progress;
                                            file.upload.total += file.upload.chunks[i].total;
                                            file.upload.bytesSent += file.upload.chunks[i].bytesSent;
                                        }
                                    }

                                    file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
                                } else {
                                    for (
                                        var _iterator26 = files,
                                            _isArray26 = true,
                                            _i28 = 0,
                                            _iterator26 = _isArray26 ? _iterator26 : _iterator26[Symbol.iterator]();
                                        ;

                                    ) {
                                        var _ref25;

                                        {
                                            if (_i28 >= _iterator26.length) {
                                                break;
                                            }
                                            _ref25 = _iterator26[_i28++];
                                        }

                                        const _file2 = _ref25;
                                        _file2.upload.progress = progress;
                                        _file2.upload.total = e.total;
                                        _file2.upload.bytesSent = e.loaded;
                                    }
                                }

                                for (
                                    var _iterator27 = files,
                                        _isArray27 = true,
                                        _i29 = 0,
                                        _iterator27 = _isArray27 ? _iterator27 : _iterator27[Symbol.iterator]();
                                    ;

                                ) {
                                    var _ref26;

                                    {
                                        if (_i29 >= _iterator27.length) {
                                            break;
                                        }
                                        _ref26 = _iterator27[_i29++];
                                    }

                                    const _file3 = _ref26;
                                    this.emit(
                                        'uploadprogress',
                                        _file3,
                                        _file3.upload.progress,
                                        _file3.upload.bytesSent
                                    );
                                }
                            } else {
                                // Called when the file finished uploading
                                let allFilesFinished = true;
                                progress = 100;

                                for (
                                    var _iterator28 = files,
                                        _isArray28 = true,
                                        _i30 = 0,
                                        _iterator28 = _isArray28 ? _iterator28 : _iterator28[Symbol.iterator]();
                                    ;

                                ) {
                                    var _ref27;

                                    {
                                        if (_i30 >= _iterator28.length) {
                                            break;
                                        }
                                        _ref27 = _iterator28[_i30++];
                                    }

                                    const _file4 = _ref27;

                                    if (
                                        _file4.upload.progress !== 100 ||
                                        _file4.upload.bytesSent !== _file4.upload.total
                                    ) {
                                        allFilesFinished = false;
                                    }

                                    _file4.upload.progress = progress;
                                    _file4.upload.bytesSent = _file4.upload.total;
                                } // Nothing to do, all files already at 100%

                                if (allFilesFinished) {
                                    return;
                                }

                                for (
                                    var _iterator29 = files,
                                        _isArray29 = true,
                                        _i31 = 0,
                                        _iterator29 = _isArray29 ? _iterator29 : _iterator29[Symbol.iterator]();
                                    ;

                                ) {
                                    var _ref28;

                                    {
                                        if (_i31 >= _iterator29.length) {
                                            break;
                                        }
                                        _ref28 = _iterator29[_i31++];
                                    }

                                    const _file5 = _ref28;
                                    this.emit('uploadprogress', _file5, progress, _file5.upload.bytesSent);
                                }
                            }
                        },
                    },
                    {
                        key: '_finishedUploading',
                        value: function _finishedUploading(files, xhr, e) {
                            let response = void 0;

                            if (files[0].status === Dropzone.CANCELED) {
                                return;
                            }

                            if (xhr.readyState !== 4) {
                                return;
                            }

                            if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
                                response = xhr.responseText;

                                if (
                                    xhr.getResponseHeader('content-type') &&
                                    ~xhr.getResponseHeader('content-type').indexOf('application/json')
                                ) {
                                    try {
                                        response = JSON.parse(response);
                                    } catch (error) {
                                        e = error;
                                        response = 'Invalid JSON response from server.';
                                    }
                                }
                            }

                            this._updateFilesUploadProgress(files);

                            if (!(xhr.status >= 200 && xhr.status < 300)) {
                                this._handleUploadError(files, xhr, response);
                            } else if (files[0].upload.chunked) {
                                files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr));
                            } else {
                                this._finished(files, response, e);
                            }
                        },
                    },
                    {
                        key: '_handleUploadError',
                        value: function _handleUploadError(files, xhr, response) {
                            if (files[0].status === Dropzone.CANCELED) {
                                return;
                            }

                            if (files[0].upload.chunked && this.options.retryChunks) {
                                const chunk = this._getChunk(files[0], xhr);

                                if (chunk.retries++ < this.options.retryChunksLimit) {
                                    this._uploadData(files, [chunk.dataBlock]);

                                    return;
                                }
                                console.warn('Retried this chunk too often. Giving up.');
                            }

                            for (
                                var _iterator30 = files,
                                    _isArray30 = true,
                                    _i32 = 0,
                                    _iterator30 = _isArray30 ? _iterator30 : _iterator30[Symbol.iterator]();
                                ;

                            ) {
                                var _ref29;

                                {
                                    if (_i32 >= _iterator30.length) {
                                        break;
                                    }
                                    _ref29 = _iterator30[_i32++];
                                }

                                this._errorProcessing(
                                    files,
                                    response || this.options.dictResponseError.replace('{{statusCode}}', xhr.status),
                                    xhr
                                );
                            }
                        },
                    },
                    {
                        key: 'submitRequest',
                        value: function submitRequest(xhr, formData, files) {
                            xhr.send(formData);
                        }, // Called internally when processing is finished.
                        // Individual callbacks have to be called in the appropriate sections.
                    },
                    {
                        key: '_finished',
                        value: function _finished(files, responseText, e) {
                            for (
                                var _iterator31 = files,
                                    _isArray31 = true,
                                    _i33 = 0,
                                    _iterator31 = _isArray31 ? _iterator31 : _iterator31[Symbol.iterator]();
                                ;

                            ) {
                                var _ref30;

                                {
                                    if (_i33 >= _iterator31.length) {
                                        break;
                                    }
                                    _ref30 = _iterator31[_i33++];
                                }

                                const file = _ref30;
                                file.status = Dropzone.SUCCESS;
                                this.emit('success', file, responseText, e);
                                this.emit('complete', file);
                            }

                            if (this.options.uploadMultiple) {
                                this.emit('successmultiple', files, responseText, e);
                                this.emit('completemultiple', files);
                            }

                            if (this.options.autoProcessQueue) {
                                return this.processQueue();
                            }
                        }, // Called internally when processing is finished.
                        // Individual callbacks have to be called in the appropriate sections.
                    },
                    {
                        key: '_errorProcessing',
                        value: function _errorProcessing(files, message, xhr) {
                            for (
                                var _iterator32 = files,
                                    _isArray32 = true,
                                    _i34 = 0,
                                    _iterator32 = _isArray32 ? _iterator32 : _iterator32[Symbol.iterator]();
                                ;

                            ) {
                                var _ref31;

                                {
                                    if (_i34 >= _iterator32.length) {
                                        break;
                                    }
                                    _ref31 = _iterator32[_i34++];
                                }

                                const file = _ref31;
                                file.status = Dropzone.ERROR;
                                this.emit('error', file, message, xhr);
                                this.emit('complete', file);
                            }

                            if (this.options.uploadMultiple) {
                                this.emit('errormultiple', files, message, xhr);
                                this.emit('completemultiple', files);
                            }

                            if (this.options.autoProcessQueue) {
                                return this.processQueue();
                            }
                        },
                    },
                ],
                [
                    {
                        key: 'uuidv4',
                        value: function uuidv4() {
                            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                                const r = (Math.random() * 16) | 0;
                                const v = c === 'x' ? r : (r & 0x3) | 0x8;
                                return v.toString(16);
                            });
                        },
                    },
                ]
            );

            return Dropzone;
        })(Emitter);

        Dropzone.initClass();
        Dropzone.version = '5.5.1'; // This is a map of options for your different dropzones. Add configurations
        // to this object for your different dropzone elemens.
        //
        // Example:
        //
        //     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
        //
        // To disable autoDiscover for a specific element, you can set `false` as an option:
        //
        //     Dropzone.options.myDisabledElementId = false;
        //
        // And in html:
        //
        //     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>

        Dropzone.options = {}; // Returns the options for an element or undefined if none available.

        Dropzone.optionsForElement = function (element) {
            // Get the `Dropzone.options.elementId` for this element if it exists
            if (element.getAttribute('id')) {
                return Dropzone.options[camelize(element.getAttribute('id'))];
            }
            return undefined;
        }; // Holds a list of all dropzone instances

        Dropzone.instances = []; // Returns the dropzone for given element if any

        Dropzone.forElement = function (element) {
            if (typeof element === 'string') {
                element = document.querySelector(element);
            }

            if ((element != null ? element.dropzone : undefined) == null) {
                throw new Error(
                    "No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."
                );
            }

            return element.dropzone;
        }; // Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.

        Dropzone.autoDiscover = true; // Looks for all .dropzone elements and creates a dropzone for them

        Dropzone.discover = function () {
            let dropzones = void 0;

            if (document.querySelectorAll) {
                dropzones = document.querySelectorAll('.dropzone');
            } else {
                dropzones = []; // IE :(

                const checkElements = function checkElements(elements) {
                    return (function () {
                        const result = [];

                        for (
                            var _iterator33 = elements,
                                _isArray33 = true,
                                _i35 = 0,
                                _iterator33 = _isArray33 ? _iterator33 : _iterator33[Symbol.iterator]();
                            ;

                        ) {
                            var _ref32;

                            {
                                if (_i35 >= _iterator33.length) {
                                    break;
                                }
                                _ref32 = _iterator33[_i35++];
                            }

                            const el = _ref32;

                            if (/(^| )dropzone($| )/.test(el.className)) {
                                result.push(dropzones.push(el));
                            } else {
                                result.push(undefined);
                            }
                        }

                        return result;
                    })();
                };

                checkElements(document.getElementsByTagName('div'));
                checkElements(document.getElementsByTagName('form'));
            }

            return (function () {
                const result = [];

                for (
                    var _iterator34 = dropzones,
                        _isArray34 = true,
                        _i36 = 0,
                        _iterator34 = _isArray34 ? _iterator34 : _iterator34[Symbol.iterator]();
                    ;

                ) {
                    var _ref33;

                    {
                        if (_i36 >= _iterator34.length) {
                            break;
                        }
                        _ref33 = _iterator34[_i36++];
                    }

                    const dropzone = _ref33; // Create a dropzone unless auto discover has been disabled for specific element

                    if (Dropzone.optionsForElement(dropzone) !== false) {
                        result.push(new Dropzone(dropzone));
                    } else {
                        result.push(undefined);
                    }
                }

                return result;
            })();
        }; // Since the whole Drag'n'Drop API is pretty new, some browsers implement it,
        // but not correctly.
        // So I created a blacklist of userAgents. Yes, yes. Browser sniffing, I know.
        // But what to do when browsers *theoretically* support an API, but crash
        // when using it.
        //
        // This is a list of regular expressions tested against navigator.userAgent
        //
        // ** It should only be used on browser that *do* support the API, but
        // incorrectly **
        //

        Dropzone.blacklistedBrowsers = [
            // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
            /opera.*(Macintosh|Windows Phone).*version\/12/i,
        ]; // Checks if the browser is supported

        Dropzone.isBrowserSupported = function () {
            let capableBrowser = true;

            if (
                window.File &&
                window.FileReader &&
                window.FileList &&
                window.Blob &&
                window.FormData &&
                document.querySelector
            ) {
                if (!('classList' in document.createElement('a'))) {
                    capableBrowser = false;
                } else {
                    // The browser supports the API, but may be blacklisted.
                    for (
                        var _iterator35 = Dropzone.blacklistedBrowsers,
                            _isArray35 = true,
                            _i37 = 0,
                            _iterator35 = _isArray35 ? _iterator35 : _iterator35[Symbol.iterator]();
                        ;

                    ) {
                        var _ref34;

                        {
                            if (_i37 >= _iterator35.length) {
                                break;
                            }
                            _ref34 = _iterator35[_i37++];
                        }

                        const regex = _ref34;

                        if (regex.test(navigator.userAgent)) {
                            capableBrowser = false;
                            continue;
                        }
                    }
                }
            } else {
                capableBrowser = false;
            }

            return capableBrowser;
        };

        Dropzone.dataURItoBlob = function (dataURI) {
            // convert base64 to raw binary data held in a string
            // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
            const byteString = atob(dataURI.split(',')[1]); // separate out the mime component

            const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);

            for (let i = 0, end = byteString.length, asc = end >= 0; asc ? i <= end : i >= end; asc ? i++ : i--) {
                ia[i] = byteString.charCodeAt(i);
            } // write the ArrayBuffer to a blob

            return new Blob([ab], {
                type: mimeString,
            });
        }; // Returns an array without the rejected item

        var without = function without(list, rejectedItem) {
            return list.filter((item) => item !== rejectedItem).map((item) => item);
        }; // abc-def_ghi -> abcDefGhi

        var camelize = function camelize(str) {
            return str.replace(/[\-_](\w)/g, (match) => match.charAt(1).toUpperCase());
        }; // Creates an element from string

        Dropzone.createElement = function (string) {
            const div = document.createElement('div');
            div.innerHTML = string;
            return div.childNodes[0];
        }; // Tests if given element is inside (or simply is) the container

        Dropzone.elementInside = function (element, container) {
            if (element === container) {
                return true;
            } // Coffeescript doesn't support do/while loops

            while ((element = element.parentNode)) {
                if (element === container) {
                    return true;
                }
            }

            return false;
        };

        Dropzone.getElement = function (component, el, name) {
            let element = void 0;

            if (typeof el === 'string') {
                element = component.querySelector(el);
            } else if (el.nodeType != null) {
                element = el;
            }

            if (element == null) {
                throw new Error(
                    `Invalid \`${name}\` option provided. Please provide a CSS selector or a plain HTML element.`
                );
            }

            return element;
        };

        Dropzone.getElements = function (component, els, name) {
            let el = void 0;
            let elements = void 0;

            if (els instanceof Array) {
                elements = [];

                try {
                    for (
                        var _iterator36 = els,
                            _isArray36 = true,
                            _i38 = 0,
                            _iterator36 = _isArray36 ? _iterator36 : _iterator36[Symbol.iterator]();
                        ;

                    ) {
                        {
                            if (_i38 >= _iterator36.length) {
                                break;
                            }
                            el = _iterator36[_i38++];
                        }

                        elements.push(this.getElement(el, name));
                    }
                } catch (e) {
                    elements = null;
                }
            } else if (typeof els === 'string') {
                elements = [];

                for (
                    var _iterator37 = component.querySelectorAll(els),
                        _isArray37 = true,
                        _i39 = 0,
                        _iterator37 = _isArray37 ? _iterator37 : _iterator37[Symbol.iterator]();
                    ;

                ) {
                    {
                        if (_i39 >= _iterator37.length) {
                            break;
                        }
                        el = _iterator37[_i39++];
                    }

                    elements.push(el);
                }
            } else if (els.nodeType != null) {
                elements = [els];
            }

            if (elements == null || !elements.length) {
                throw new Error(
                    `Invalid \`${name}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`
                );
            }

            return elements;
        }; // Asks the user the question and calls accepted or rejected accordingly
        //
        // The default implementation just uses `window.confirm` and then calls the
        // appropriate callback.

        Dropzone.confirm = function (question, accepted, rejected) {
            if (window.confirm(question)) {
                return accepted();
            }
            if (rejected != null) {
                return rejected();
            }
        }; // Validates the mime type like this:
        //
        // https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept

        Dropzone.isValidFile = function (file, acceptedFiles) {
            if (!acceptedFiles) {
                return true;
            } // If there are no accepted mime types, it's OK

            acceptedFiles = acceptedFiles.split(',');
            const mimeType = file.type;
            const baseMimeType = mimeType.replace(/\/.*$/, '');

            for (
                var _iterator38 = acceptedFiles,
                    _isArray38 = true,
                    _i40 = 0,
                    _iterator38 = _isArray38 ? _iterator38 : _iterator38[Symbol.iterator]();
                ;

            ) {
                var _ref35;

                {
                    if (_i40 >= _iterator38.length) {
                        break;
                    }
                    _ref35 = _iterator38[_i40++];
                }

                let validType = _ref35;
                validType = validType.trim();

                if (validType.charAt(0) === '.') {
                    if (
                        file.name
                            .toLowerCase()
                            .indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1
                    ) {
                        return true;
                    }
                } else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    if (baseMimeType === validType.replace(/\/.*$/, '')) {
                        return true;
                    }
                } else if (mimeType === validType) {
                    return true;
                }
            }

            return false;
        }; // Augment jQuery

        if (typeof jQuery !== 'undefined' && jQuery !== null) {
            jQuery.fn.dropzone = function (options) {
                return this.each(function () {
                    return new Dropzone(this, options);
                });
            };
        }

        if (module !== null) {
            module.exports = Dropzone;
        } else {
            window.Dropzone = Dropzone;
        } // Dropzone file status codes

        Dropzone.ADDED = 'added';
        Dropzone.QUEUED = 'queued'; // For backwards compatibility. Now, if a file is accepted, it's either queued
        // or uploading.

        Dropzone.ACCEPTED = Dropzone.QUEUED;
        Dropzone.UPLOADING = 'uploading';
        Dropzone.PROCESSING = Dropzone.UPLOADING; // alias

        Dropzone.CANCELED = 'canceled';
        Dropzone.ERROR = 'error';
        Dropzone.SUCCESS = 'success';
        /*

     Bugfix for iOS 6 and 7
     Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
     based on the work of https://github.com/stomita/ios-imagefile-megapixel

     */
        // Detecting vertical squash in loaded image.
        // Fixes a bug which squash image vertically while drawing into canvas for some images.
        // This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel

        const detectVerticalSquash = function detectVerticalSquash(img) {
            const iw = img.naturalWidth;
            const ih = img.naturalHeight;
            const canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = ih;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const _ctx$getImageData = ctx.getImageData(1, 0, 1, ih);
            const { data } = _ctx$getImageData; // search image edge pixel position in case it is squashed vertically.

            let sy = 0;
            let ey = ih;
            let py = ih;

            while (py > sy) {
                const alpha = data[(py - 1) * 4 + 3];

                if (alpha === 0) {
                    ey = py;
                } else {
                    sy = py;
                }

                py = (ey + sy) >> 1;
            }

            const ratio = py / ih;

            if (ratio === 0) {
                return 1;
            }
            return ratio;
        }; // A replacement for context.drawImage
        // (args are for source and destination).

        var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
            const vertSquashRatio = detectVerticalSquash(img);
            return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
        }; // Based on MinifyJpeg
        // Source: http://www.perry.cz/files/ExifRestorer.js
        // http://elicon.blog57.fc2.com/blog-entry-206.html

        var ExifRestore = (function () {
            function ExifRestore() {
                _classCallCheck$$1(this, ExifRestore);
            }

            _createClass$$1(ExifRestore, null, [
                {
                    key: 'initClass',
                    value: function initClass() {
                        this.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                    },
                },
                {
                    key: 'encode64',
                    value: function encode64(input) {
                        let output = '';
                        let chr1;
                        let chr2;
                        let chr3 = '';
                        let enc1;
                        let enc2;
                        let enc3;
                        let enc4 = '';
                        let i = 0;

                        while (true) {
                            chr1 = input[i++];
                            chr2 = input[i++];
                            chr3 = input[i++];
                            enc1 = chr1 >> 2;
                            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                            enc4 = chr3 & 63;

                            if (isNaN(chr2)) {
                                enc3 = enc4 = 64;
                            } else if (isNaN(chr3)) {
                                enc4 = 64;
                            }

                            output =
                                output +
                                this.KEY_STR.charAt(enc1) +
                                this.KEY_STR.charAt(enc2) +
                                this.KEY_STR.charAt(enc3) +
                                this.KEY_STR.charAt(enc4);
                            chr1 = chr2 = chr3 = '';
                            enc1 = enc2 = enc3 = enc4 = '';

                            if (!(i < input.length)) {
                                break;
                            }
                        }

                        return output;
                    },
                },
                {
                    key: 'restore',
                    value: function restore(origFileBase64, resizedFileBase64) {
                        if (!origFileBase64.match('data:image/jpeg;base64,')) {
                            return resizedFileBase64;
                        }

                        const rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
                        const segments = this.slice2Segments(rawImage);
                        const image = this.exifManipulation(resizedFileBase64, segments);
                        return `data:image/jpeg;base64,${this.encode64(image)}`;
                    },
                },
                {
                    key: 'exifManipulation',
                    value: function exifManipulation(resizedFileBase64, segments) {
                        const exifArray = this.getExifArray(segments);
                        const newImageArray = this.insertExif(resizedFileBase64, exifArray);
                        const aBuffer = new Uint8Array(newImageArray);
                        return aBuffer;
                    },
                },
                {
                    key: 'getExifArray',
                    value: function getExifArray(segments) {
                        let seg;
                        let x = 0;

                        while (x < segments.length) {
                            seg = segments[x];

                            if ((seg[0] === 255) & (seg[1] === 225)) {
                                return seg;
                            }

                            x++;
                        }

                        return [];
                    },
                },
                {
                    key: 'insertExif',
                    value: function insertExif(resizedFileBase64, exifArray) {
                        const imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
                        const buf = this.decode64(imageData);
                        const separatePoint = buf.indexOf(255, 3);
                        const mae = buf.slice(0, separatePoint);
                        const ato = buf.slice(separatePoint);
                        let array = mae;
                        array = array.concat(exifArray);
                        array = array.concat(ato);
                        return array;
                    },
                },
                {
                    key: 'slice2Segments',
                    value: function slice2Segments(rawImageArray) {
                        let head = 0;
                        const segments = [];

                        while (true) {
                            var length;

                            if ((rawImageArray[head] === 255) & (rawImageArray[head + 1] === 218)) {
                                break;
                            }

                            if ((rawImageArray[head] === 255) & (rawImageArray[head + 1] === 216)) {
                                head += 2;
                            } else {
                                length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
                                const endPoint = head + length + 2;
                                const seg = rawImageArray.slice(head, endPoint);
                                segments.push(seg);
                                head = endPoint;
                            }

                            if (head > rawImageArray.length) {
                                break;
                            }
                        }

                        return segments;
                    },
                },
                {
                    key: 'decode64',
                    value: function decode64(input) {
                        let chr1;
                        let chr2;
                        let chr3 = '';
                        let enc1;
                        let enc2;
                        let enc3;
                        let enc4 = '';
                        let i = 0;
                        const buf = []; // remove all characters that are not A-Z, a-z, 0-9, +, /, or =

                        const base64test = /[^A-Za-z0-9\+\/\=]/g;

                        if (base64test.exec(input)) {
                            console.warn(
                                "There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."
                            );
                        }

                        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

                        while (true) {
                            enc1 = this.KEY_STR.indexOf(input.charAt(i++));
                            enc2 = this.KEY_STR.indexOf(input.charAt(i++));
                            enc3 = this.KEY_STR.indexOf(input.charAt(i++));
                            enc4 = this.KEY_STR.indexOf(input.charAt(i++));
                            chr1 = (enc1 << 2) | (enc2 >> 4);
                            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                            chr3 = ((enc3 & 3) << 6) | enc4;
                            buf.push(chr1);

                            if (enc3 !== 64) {
                                buf.push(chr2);
                            }

                            if (enc4 !== 64) {
                                buf.push(chr3);
                            }

                            chr1 = chr2 = chr3 = '';
                            enc1 = enc2 = enc3 = enc4 = '';

                            if (!(i < input.length)) {
                                break;
                            }
                        }

                        return buf;
                    },
                },
            ]);

            return ExifRestore;
        })();

        ExifRestore.initClass();
        /*
         * contentloaded.js
         *
         * Author: Diego Perini (diego.perini at gmail.com)
         * Summary: cross-browser wrapper for DOMContentLoaded
         * Updated: 20101020
         * License: MIT
         * Version: 1.2
         *
         * URL:
         * http://javascript.nwbox.com/ContentLoaded/
         * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
         */
        // @win window reference
        // @fn function reference

        const contentLoaded = function contentLoaded(win, fn) {
            let done = false;
            let top = true;
            const doc = win.document;
            const root = doc.documentElement;
            const add = doc.addEventListener ? 'addEventListener' : 'attachEvent';
            const rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent';
            const pre = doc.addEventListener ? '' : 'on';

            const init = function init(e) {
                if (e.type === 'readystatechange' && doc.readyState !== 'complete') {
                    return;
                }

                (e.type === 'load' ? win : doc)[rem](pre + e.type, init, false);

                if (!done && (done = true)) {
                    return fn.call(win, e.type || e);
                }
            };

            const poll = function poll() {
                try {
                    root.doScroll('left');
                } catch (e) {
                    setTimeout(poll, 50);
                    return;
                }

                return init('poll');
            };

            if (doc.readyState !== 'complete') {
                if (doc.createEventObject && root.doScroll) {
                    try {
                        top = !win.frameElement;
                    } catch (error) {}

                    if (top) {
                        poll();
                    }
                }

                doc[add](`${pre}DOMContentLoaded`, init, false);
                doc[add](`${pre}readystatechange`, init, false);
                return win[add](`${pre}load`, init, false);
            }
        }; // As a single function to be able to write tests.

        Dropzone._autoDiscoverFunction = function () {
            if (Dropzone.autoDiscover) {
                return Dropzone.discover();
            }
        };

        contentLoaded(window, Dropzone._autoDiscoverFunction);

        function __guard__(value, transform) {
            return typeof value !== 'undefined' && value !== null ? transform(value) : undefined;
        }

        function __guardMethod__(obj, methodName, transform) {
            if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') {
                return transform(obj, methodName);
            }
            return undefined;
        }
    });

    const uploadClass = 'js-'.concat(vl.ns, 'upload');
    const filesBasicUploadClass = ''.concat(vl.ns, 'upload--basic');
    const draggingClass = ''.concat(vl.ns, 'upload--dragging');
    const filesClass = ''.concat(vl.ns, 'upload__files');
    const filesContainerClass = ''.concat(vl.ns, 'upload__files__container');
    const fileInputContainerClass = ''.concat(vl.ns, 'upload__files__input__container');
    const filesClose = ''.concat(vl.ns, 'upload__files__close');
    const hasFilesClass = ''.concat(vl.ns, 'upload__files--has-files');
    const filesInputClass = ''.concat(vl.ns, 'upload__element__input');
    const filesButtonClass = ''.concat(vl.ns, 'upload__element__button');
    const filesLabelClass = ''.concat(vl.ns, 'upload__element__label');
    const filesLabelButtonContainerClass = ''.concat(vl.ns, 'upload__element__button__container');
    const filesSizeErrorClass = ''.concat(vl.ns, 'upload__file--error-size');
    const disablesClass = ''.concat(vl.ns, 'upload--disabled');
    const dataUpload = 'data-'.concat(vl.ns, 'upload');
    const dataUploadUrl = ''.concat(dataUpload, '-url');
    const dataDressed = ''.concat(dataUpload, '-dressed');
    const dataMaxSize = ''.concat(dataUpload, '-max-size');
    const dataMaxFiles = ''.concat(dataUpload, '-max-files');
    const dataErrorMessage = ''.concat(dataUpload, '-error-message-filesize');
    const dataErrorMessageMaxFiles = ''.concat(dataUpload, '-error-message-maxfiles');
    const dataErrorMessageFiletype = ''.concat(dataUpload, '-error-message-accepted-files');
    const dataInputName = ''.concat(dataUpload, '-input-name');
    const dataFullBodyDrop = ''.concat(dataUpload, '-full-body-drop');
    const dataAllowedTypes = ''.concat(dataUpload, '-accepted-files');
    const dataDisallowedDuplicates = ''.concat(dataUpload, '-disallow-duplicates');
    const dataAutoprocess = ''.concat(dataUpload, '-autoprocess');
    const dataDisabled = ''.concat(dataUpload, '-disabled');

    const _getTemplate = function _getTemplate() {
        const name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        const templateEl = document.getElementById(name);
        const templateContent = document.importNode(templateEl.content, true);
        return templateContent;
    };

    const _replaceStringValue = function _replaceStringValue(stack, needle, replacement) {
        return stack.replace(needle, replacement);
    };

    const _createErrorMessages = function _createErrorMessages(element, size, maxFiles) {
        const errorMessageFilesize = element.getAttribute(dataErrorMessage);
        const errorMessageMaxfiles = element.getAttribute(dataErrorMessageMaxFiles);
        const errorMessageFiletype = element.getAttribute(dataErrorMessageFiletype);
        const sizeInMB = vl.util.bytesToSize(size, true, 1024);
        let dictFileTooBig;
        let dictInvalidFileType;
        let dictMaxFilesExceeded;

        if (vl.util.exists(errorMessageFilesize)) {
            dictFileTooBig = _replaceStringValue(errorMessageFilesize, ':maxFsz', sizeInMB);
        } else {
            dictFileTooBig = vl.i18n.t('upload.file_to_big', sizeInMB);
        }

        if (vl.util.exists(errorMessageMaxfiles)) {
            dictMaxFilesExceeded = _replaceStringValue(errorMessageMaxfiles, ':maxfl', maxFiles);
        } else {
            dictMaxFilesExceeded = vl.i18n.t('upload.to_many_files', maxFiles);
        }

        if (vl.util.exists(errorMessageFiletype)) {
            const fileType = element.getAttribute('accept');
            dictInvalidFileType = _replaceStringValue(errorMessageFiletype, ':filetype', fileType);
        } else {
            dictInvalidFileType = vl.util.exists(errorMessageFiletype)
                ? errorMessageFiletype
                : vl.i18n.t('upload.file-type_not_allowed');
        }

        const messages = {
            dictFileTooBig,
            dictInvalidFileType,
            dictMaxFilesExceeded,
            dictResponseError: vl.i18n.t('upload.response_error'),
        };
        return messages;
    };

    const _getTemplateString = function _getTemplateString(template) {
        const div = document.createElement('div');
        const parsedTemplate = div.cloneNode(true);
        parsedTemplate.appendChild(template);
        return parsedTemplate.innerHTML;
    };

    const _buildConfig = function _buildConfig(element, id) {
        const uploadTemplate = _getTemplate('uploadTemplate');

        const previewTemplate = _getTemplate('previewTemplate');

        let url = null;
        const uploadButtonContainer = uploadTemplate.querySelector('.'.concat(filesLabelButtonContainerClass));
        const uploadButtonSub = uploadTemplate.querySelector('.'.concat(filesLabelClass, ' small'));
        uploadButtonContainer.innerHTML = vl.i18n.t('upload.add_files');
        uploadButtonSub.innerHTML = vl.i18n.t('upload.add_files_subtitle');

        const uploadTemplateString = _getTemplateString(uploadTemplate);

        const previewTemplateString = _getTemplateString(previewTemplate);

        const previewsContainer = '#'.concat(id, ' .').concat(filesContainerClass);
        const hiddenInputContainer = '#'.concat(id, ' .').concat(fileInputContainerClass);

        if (element.hasAttribute(dataUploadUrl)) {
            url = element.getAttribute(dataUploadUrl);
        } else if (element.closest('form')) {
            if (element.closest('form').hasAttribute('action')) {
                url = element.closest('form').getAttribute('action');
            }
        } else {
            console.warn('No valid url given');
        }

        const autoProcessQueue =
            element.hasAttribute(dataAutoprocess) && element.getAttribute(dataAutoprocess) !== 'false';
        const maxFilesize = element.hasAttribute(dataMaxSize) ? element.getAttribute(dataMaxSize) : 2097152;
        const acceptedFiles = element.hasAttribute(dataAllowedTypes) ? element.getAttribute(dataAllowedTypes) : null;
        const maxFiles = element.hasAttribute(dataMaxFiles) ? element.getAttribute(dataMaxFiles) : 1;

        const errorMessages = _createErrorMessages(element, maxFilesize, maxFiles);

        const paramName = element.hasAttribute(dataInputName) ? element.getAttribute(dataInputName) : 'file';
        const config = {
            autoProcessQueue,
            dictDefaultMessage: uploadTemplateString,
            maxFiles,
            maxFilesize,
            previewTemplate: previewTemplateString,
            previewsContainer,
            hiddenInputContainer,
            acceptedFiles,
            paramName,
            url,
            createImageThumbnails: false,
        };
        return Object.assign(config, errorMessages);
    };

    const Upload = /* #__PURE__ */ (function () {
        function Upload() {
            _classCallCheck(this, Upload);

            this.dropzoneInstances = [];
        }

        // UIG-2520 - lijst van fileHashes
        const fileHashes = [];

        // UIG-2520 - functie om te zien of hash al bestaat in lijst van fileHashes,
        // indien niet, wordt die in lijst van fileHashes toegevoegd
        const checkIfFileHasDuplicateHash = (fileToCheck) => {
            /**
             * this function will use digest method from native Crypto API to calculate unique hex string
             * it'll return the same hex string regardless of file meta-data but based on the blob data itself
             * @param arrayBuffer
             * @returns {Promise<string>}
             */
            async function getDigestHexString(arrayBuffer) {
                const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer); // hash the message
                const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
                const hexString = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
                return hexString;
            }

            /**
             * returns true if hex string is found in previously added files
             * @param file
             * @returns {Promise<boolean>}
             */
            async function detectDuplicate(file) {
                const arrayBuffer = await file.arrayBuffer();

                const digestHex = await getDigestHexString(arrayBuffer);
                const hexStringFound = fileHashes.indexOf(digestHex) !== -1;

                if (!hexStringFound) {
                    // no duplicate was found, so we add the generated hex string in to the list of current hashes
                    // if a duplicate was found, we'll remove it from the list of files,
                    // so in that case we don't need to add it again to the list of hashes
                    fileHashes.push(digestHex);
                }

                return hexStringFound;
            }

            if (fileToCheck instanceof File) {
                return detectDuplicate(fileToCheck);
            }
            return false;
        };

        _createClass(Upload, [
            {
                key: 'removeDuplicate',
                value: function removeDuplicate(dz, file) {
                    const { files } = dz;
                    if (files) {
                        let i = 0;
                        // we reverse the file list so that last file added
                        // will be the first duplicate found to be removed
                        const reversedFilesList = files.reverse();
                        const filesLength = reversedFilesList.length;
                        const ref = reversedFilesList.slice();
                        for (; i < filesLength - 1; i++) {
                            if (ref[i] && file) {
                                const isDuplicate = checkIfFileHasDuplicateHash(file);
                                if ((ref[i].name === file.name && ref[i].size === file.size) || isDuplicate) {
                                    dz.removeFile(ref[i], { isDuplicate: true });
                                }
                            }
                        }
                    }
                },
            },
            {
                key: 'updateFileList',
                value: function updateFileList(dz, el, file) {
                    const fileList = el.querySelector('.'.concat(filesClass));
                    if (dz.files.length) {
                        vl.util.addClass(fileList, hasFilesClass);
                        if (el.hasAttribute(dataDisallowedDuplicates)) {
                            this.removeDuplicate(dz, file);
                        }
                    } else {
                        vl.util.removeClass(fileList, hasFilesClass);
                    }
                },
            },
            {
                key: 'dress',
                value: function dress(element) {
                    const _this = this;

                    const self = this;

                    if (vl.util.hasClass(element, filesBasicUploadClass)) {
                        element.addEventListener('dragover', () => {
                            vl.util.addClass(element, draggingClass);
                        });
                        element.addEventListener('dragleave', () => {
                            vl.util.removeClass(element, draggingClass);
                        });
                        element.addEventListener('drop', () => {
                            vl.util.removeClass(element, draggingClass);
                        });
                    } else {
                        let id = null;
                        vl.util.addClass(element, 'dropzone'); // Add id if no id exists, else use existing id

                        if (element.id) {
                            id = element.id;
                        } else {
                            id = vl.util.uniqueId();
                            element.id = id;
                        }

                        const config = _buildConfig(element, id);

                        const filesWrapper = _getTemplate('previewFilesWrapper');

                        const filesOverlay = _getTemplate('uploadOverlay');

                        element.insertBefore(filesWrapper, element.firstChild);
                        element.insertBefore(filesOverlay, element.firstChild);

                        if (element.hasAttribute(dataFullBodyDrop)) {
                            vl.util.addClass(element, 'vl-upload--full-body');
                            document.body.addEventListener('dragover', (event) => {
                                event.stopPropagation();
                                vl.util.addClass(document.body, draggingClass);
                            });
                            element.addEventListener('dragover', (event) => {
                                event.stopPropagation();
                                vl.util.addClass(document.body, draggingClass);
                            });
                            element.addEventListener('dragleave', (event) => {
                                event.stopPropagation();
                                vl.util.removeClass(document.body, draggingClass);
                            });
                            element.addEventListener('drop', (event) => {
                                event.stopPropagation();
                                vl.util.removeClass(document.body, draggingClass);
                            });
                        }

                        const dropzone$$1 = new dropzone(element, config);
                        this.dropzoneInstances.push(dropzone$$1);
                        vl.util.addClass(dropzone$$1.hiddenFileInput, filesInputClass);
                        dropzone$$1.on('addedfile', (file) => {
                            _this.updateFileList(dropzone$$1, element, file);
                        });
                        dropzone$$1.on('addedfiles', () => {
                            setTimeout(() => vl.util.triggerEvent(element, 'vl.upload.hook.fileChange'));
                        });
                        dropzone$$1.on('removedfile', (test, t, e) => {
                            _this.updateFileList(dropzone$$1, element);
                            setTimeout(() => vl.util.triggerEvent(element, 'vl.upload.hook.fileChange'));
                        });
                        dropzone$$1.on('error', (file, errorMessage) => {
                            if (errorMessage === config.dictFileTooBig) {
                                vl.util.addClass(file.previewTemplate, filesSizeErrorClass);
                            }
                        }); // Add button functionality to remove all files

                        if (vl.util.exists(element.querySelector('.'.concat(filesClose)))) {
                            element.querySelector('.'.concat(filesClose)).addEventListener('click', (event) => {
                                dropzone$$1.removeAllFiles();

                                _this.updateFileList(dropzone$$1, element);

                                event.preventDefault();
                            });
                        }

                        const processDisabledAttribute = function processDisabledAttribute(element) {
                            const isDisabled = element.hasAttribute(dataDisabled);

                            if (isDisabled) {
                                element.classList.add(disablesClass);
                                const btnEl = element.querySelector('.'.concat(filesButtonClass));
                                btnEl.setAttribute('disabled', 'disabled');
                                dropzone$$1.disable();
                            } else {
                                element.classList.remove(disablesClass);

                                const _btnEl = element.querySelector('.'.concat(filesButtonClass));

                                _btnEl.removeAttribute('disabled');

                                dropzone$$1.enable();
                            }
                        };

                        processDisabledAttribute(element);
                        self.disabledMutationObserver = new MutationObserver((mutations) => {
                            mutations.forEach((mutation) => processDisabledAttribute(mutation.target));
                        });
                        self.disabledMutationObserver.observe(element, {
                            attributes: true,
                            attributeFilter: [dataDisabled],
                        });
                    }
                },
            },
            {
                key: 'dressAll',
                value: function dressAll() {
                    const _this2 = this;

                    const elements = document.querySelectorAll(
                        '.'
                            .concat(uploadClass, ':not([')
                            .concat(dataDressed, ']):not([data-')
                            .concat(vl.ns, 'js-dress="false"]),\n      [')
                            .concat(dataUpload, ']:not([')
                            .concat(dataDressed, ']):not([data-')
                            .concat(vl.ns, 'js-dress="false"])')
                    );
                    vl.util.each(elements, (element) => {
                        _this2.dress(element);
                    });
                },
            },
            {
                key: 'undress',
                value: function undress(instance) {
                    instance.destroy();
                    this.updateFileList(instance, instance.element);

                    if (typeof this.disabledMutationObserver !== 'undefined') {
                        this.disabledMutationObserver.disconnect();
                    }

                    this.dropzoneInstances = this.dropzoneInstances.filter((el) => el !== instance);
                },
            },
            {
                key: 'undressAll',
                value: function undressAll() {
                    const _this3 = this;

                    vl.util.each(this.dropzoneInstances, (instance) => _this3.undress(instance));
                },
            },
            {
                key: 'disable',
                value: function disable(element) {
                    element.setAttribute(dataDisabled, '');
                },
            },
            {
                key: 'enable',
                value: function enable(element) {
                    element.removeAttribute(dataDisabled);
                },
            },
        ]);

        return Upload;
    })();

    if (!('upload' in vl)) {
        vl.upload = new Upload();
        vl.upload.dressAll();
    }

    return Upload;
});

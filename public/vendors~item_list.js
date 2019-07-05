(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~item_list"],{

/***/ "./node_modules/vue-qriously/dist/vue-qriously.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-qriously/dist/vue-qriously.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var qrious = createCommonjsModule(function (module, exports) {
/*
 * QRious v4.0.2
 * Copyright (C) 2017 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function (global, factory) {
  module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

  /*
   * Copyright (C) 2017 Alasdair Mercer, !ninja
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */

  /**
   * A bare-bones constructor for surrogate prototype swapping.
   *
   * @private
   * @constructor
   */
  var Constructor = /* istanbul ignore next */ function() {};
  /**
   * A reference to <code>Object.prototype.hasOwnProperty</code>.
   *
   * @private
   * @type {Function}
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * A reference to <code>Array.prototype.slice</code>.
   *
   * @private
   * @type {Function}
   */
  var slice = Array.prototype.slice;

  /**
   * Creates an object which inherits the given <code>prototype</code>.
   *
   * Optionally, the created object can be extended further with the specified <code>properties</code>.
   *
   * @param {Object} prototype - the prototype to be inherited by the created object
   * @param {Object} [properties] - the optional properties to be extended by the created object
   * @return {Object} The newly created object.
   * @private
   */
  function createObject(prototype, properties) {
    var result;
    /* istanbul ignore next */
    if (typeof Object.create === 'function') {
      result = Object.create(prototype);
    } else {
      Constructor.prototype = prototype;
      result = new Constructor();
      Constructor.prototype = null;
    }

    if (properties) {
      extendObject(true, result, properties);
    }

    return result;
  }

  /**
   * Extends the constructor to which this method is associated with the <code>prototype</code> and/or
   * <code>statics</code> provided.
   *
   * If <code>name</code> is provided, it will be used as the class name and can be accessed via a special
   * <code>class_</code> property on the child constructor, otherwise the class name of the super constructor will be used
   * instead. The class name may also be used string representation for instances of the child constructor (via
   * <code>toString</code>), but this is not applicable to the <i>lite</i> version of Nevis.
   *
   * If <code>constructor</code> is provided, it will be used as the constructor for the child, otherwise a simple
   * constructor which only calls the super constructor will be used instead.
   *
   * The super constructor can be accessed via a special <code>super_</code> property on the child constructor.
   *
   * @param {string} [name=this.class_] - the class name to be used for the child constructor
   * @param {Function} [constructor] - the constructor for the child
   * @param {Object} [prototype] - the prototype properties to be defined for the child
   * @param {Object} [statics] - the static properties to be defined for the child
   * @return {Function} The child <code>constructor</code> provided or the one created if none was given.
   * @public
   */
  function extend(name, constructor, prototype, statics) {
    var superConstructor = this;

    if (typeof name !== 'string') {
      statics = prototype;
      prototype = constructor;
      constructor = name;
      name = null;
    }

    if (typeof constructor !== 'function') {
      statics = prototype;
      prototype = constructor;
      constructor = function() {
        return superConstructor.apply(this, arguments);
      };
    }

    extendObject(false, constructor, superConstructor, statics);

    constructor.prototype = createObject(superConstructor.prototype, prototype);
    constructor.prototype.constructor = constructor;

    constructor.class_ = name || superConstructor.class_;
    constructor.super_ = superConstructor;

    return constructor;
  }

  /**
   * Extends the specified <code>target</code> object with the properties in each of the <code>sources</code> provided.
   *
   * if any source is <code>null</code> it will be ignored.
   *
   * @param {boolean} own - <code>true</code> to only copy <b>own</b> properties from <code>sources</code> onto
   * <code>target</code>; otherwise <code>false</code>
   * @param {Object} target - the target object which should be extended
   * @param {...Object} [sources] - the source objects whose properties are to be copied onto <code>target</code>
   * @return {void}
   * @private
   */
  function extendObject(own, target, sources) {
    sources = slice.call(arguments, 2);

    var property;
    var source;

    for (var i = 0, length = sources.length; i < length; i++) {
      source = sources[i];

      for (property in source) {
        if (!own || hasOwnProperty.call(source, property)) {
          target[property] = source[property];
        }
      }
    }
  }

  var extend_1 = extend;

  /**
   * The base class from which all others should extend.
   *
   * @public
   * @constructor
   */
  function Nevis() {}
  Nevis.class_ = 'Nevis';
  Nevis.super_ = Object;

  /**
   * Extends the constructor to which this method is associated with the <code>prototype</code> and/or
   * <code>statics</code> provided.
   *
   * If <code>name</code> is provided, it will be used as the class name and can be accessed via a special
   * <code>class_</code> property on the child constructor, otherwise the class name of the super constructor will be used
   * instead. The class name may also be used string representation for instances of the child constructor (via
   * <code>toString</code>), but this is not applicable to the <i>lite</i> version of Nevis.
   *
   * If <code>constructor</code> is provided, it will be used as the constructor for the child, otherwise a simple
   * constructor which only calls the super constructor will be used instead.
   *
   * The super constructor can be accessed via a special <code>super_</code> property on the child constructor.
   *
   * @param {string} [name=this.class_] - the class name to be used for the child constructor
   * @param {Function} [constructor] - the constructor for the child
   * @param {Object} [prototype] - the prototype properties to be defined for the child
   * @param {Object} [statics] - the static properties to be defined for the child
   * @return {Function} The child <code>constructor</code> provided or the one created if none was given.
   * @public
   * @static
   * @memberof Nevis
   */
  Nevis.extend = extend_1;

  var nevis = Nevis;

  var lite = nevis;

  /**
   * Responsible for rendering a QR code {@link Frame} on a specific type of element.
   *
   * A renderer may be dependant on the rendering of another element, so the ordering of their execution is important.
   *
   * The rendering of a element can be deferred by disabling the renderer initially, however, any attempt get the element
   * from the renderer will result in it being immediately enabled and the element being rendered.
   *
   * @param {QRious} qrious - the {@link QRious} instance to be used
   * @param {*} element - the element onto which the QR code is to be rendered
   * @param {boolean} [enabled] - <code>true</code> this {@link Renderer} is enabled; otherwise <code>false</code>.
   * @public
   * @class
   * @extends Nevis
   */
  var Renderer = lite.extend(function(qrious, element, enabled) {
    /**
     * The {@link QRious} instance.
     *
     * @protected
     * @type {QRious}
     * @memberof Renderer#
     */
    this.qrious = qrious;

    /**
     * The element onto which this {@link Renderer} is rendering the QR code.
     *
     * @protected
     * @type {*}
     * @memberof Renderer#
     */
    this.element = element;
    this.element.qrious = qrious;

    /**
     * Whether this {@link Renderer} is enabled.
     *
     * @protected
     * @type {boolean}
     * @memberof Renderer#
     */
    this.enabled = Boolean(enabled);
  }, {

    /**
     * Draws the specified QR code <code>frame</code> on the underlying element.
     *
     * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
     *
     * @param {Frame} frame - the {@link Frame} to be drawn
     * @return {void}
     * @protected
     * @abstract
     * @memberof Renderer#
     */
    draw: function(frame) {},

    /**
     * Returns the element onto which this {@link Renderer} is rendering the QR code.
     *
     * If this method is called while this {@link Renderer} is disabled, it will be immediately enabled and rendered
     * before the element is returned.
     *
     * @return {*} The element.
     * @public
     * @memberof Renderer#
     */
    getElement: function() {
      if (!this.enabled) {
        this.enabled = true;
        this.render();
      }

      return this.element;
    },

    /**
     * Calculates the size (in pixel units) to represent an individual module within the QR code based on the
     * <code>frame</code> provided.
     *
     * Any configured padding will be excluded from the returned size.
     *
     * The returned value will be at least one, even in cases where the size of the QR code does not fit its contents.
     * This is done so that the inevitable clipping is handled more gracefully since this way at least something is
     * displayed instead of just a blank space filled by the background color.
     *
     * @param {Frame} frame - the {@link Frame} from which the module size is to be derived
     * @return {number} The pixel size for each module in the QR code which will be no less than one.
     * @protected
     * @memberof Renderer#
     */
    getModuleSize: function(frame) {
      var qrious = this.qrious;
      var padding = qrious.padding || 0;
      var pixels = Math.floor((qrious.size - (padding * 2)) / frame.width);

      return Math.max(1, pixels);
    },

    /**
     * Calculates the offset/padding (in pixel units) to be inserted before the QR code based on the <code>frame</code>
     * provided.
     *
     * The returned value will be zero if there is no available offset or if the size of the QR code does not fit its
     * contents. It will never be a negative value. This is done so that the inevitable clipping appears more naturally
     * and it is not clipped from all directions.
     *
     * @param {Frame} frame - the {@link Frame} from which the offset is to be derived
     * @return {number} The pixel offset for the QR code which will be no less than zero.
     * @protected
     * @memberof Renderer#
     */
    getOffset: function(frame) {
      var qrious = this.qrious;
      var padding = qrious.padding;

      if (padding != null) {
        return padding;
      }

      var moduleSize = this.getModuleSize(frame);
      var offset = Math.floor((qrious.size - (moduleSize * frame.width)) / 2);

      return Math.max(0, offset);
    },

    /**
     * Renders a QR code on the underlying element based on the <code>frame</code> provided.
     *
     * @param {Frame} frame - the {@link Frame} to be rendered
     * @return {void}
     * @public
     * @memberof Renderer#
     */
    render: function(frame) {
      if (this.enabled) {
        this.resize();
        this.reset();
        this.draw(frame);
      }
    },

    /**
     * Resets the underlying element, effectively clearing any previously rendered QR code.
     *
     * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
     *
     * @return {void}
     * @protected
     * @abstract
     * @memberof Renderer#
     */
    reset: function() {},

    /**
     * Ensures that the size of the underlying element matches that defined on the associated {@link QRious} instance.
     *
     * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
     *
     * @return {void}
     * @protected
     * @abstract
     * @memberof Renderer#
     */
    resize: function() {}

  });

  var Renderer_1 = Renderer;

  /**
   * An implementation of {@link Renderer} for working with <code>canvas</code> elements.
   *
   * @public
   * @class
   * @extends Renderer
   */
  var CanvasRenderer = Renderer_1.extend({

    /**
     * @override
     */
    draw: function(frame) {
      var i, j;
      var qrious = this.qrious;
      var moduleSize = this.getModuleSize(frame);
      var offset = this.getOffset(frame);
      var context = this.element.getContext('2d');

      context.fillStyle = qrious.foreground;
      context.globalAlpha = qrious.foregroundAlpha;

      for (i = 0; i < frame.width; i++) {
        for (j = 0; j < frame.width; j++) {
          if (frame.buffer[(j * frame.width) + i]) {
            context.fillRect((moduleSize * i) + offset, (moduleSize * j) + offset, moduleSize, moduleSize);
          }
        }
      }
    },

    /**
     * @override
     */
    reset: function() {
      var qrious = this.qrious;
      var context = this.element.getContext('2d');
      var size = qrious.size;

      context.lineWidth = 1;
      context.clearRect(0, 0, size, size);
      context.fillStyle = qrious.background;
      context.globalAlpha = qrious.backgroundAlpha;
      context.fillRect(0, 0, size, size);
    },

    /**
     * @override
     */
    resize: function() {
      var element = this.element;

      element.width = element.height = this.qrious.size;
    }

  });

  var CanvasRenderer_1 = CanvasRenderer;

  /* eslint no-multi-spaces: "off" */



  /**
   * Contains alignment pattern information.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var Alignment = lite.extend(null, {

    /**
     * The alignment pattern block.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Alignment
     */
    BLOCK: [
      0,  11, 15, 19, 23, 27, 31,
      16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24,
      26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28
    ]

  });

  var Alignment_1 = Alignment;

  /* eslint no-multi-spaces: "off" */



  /**
   * Contains error correction information.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var ErrorCorrection = lite.extend(null, {

    /**
     * The error correction blocks.
     *
     * There are four elements per version. The first two indicate the number of blocks, then the data width, and finally
     * the ECC width.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof ErrorCorrection
     */
    BLOCKS: [
      1,  0,  19,  7,     1,  0,  16,  10,    1,  0,  13,  13,    1,  0,  9,   17,
      1,  0,  34,  10,    1,  0,  28,  16,    1,  0,  22,  22,    1,  0,  16,  28,
      1,  0,  55,  15,    1,  0,  44,  26,    2,  0,  17,  18,    2,  0,  13,  22,
      1,  0,  80,  20,    2,  0,  32,  18,    2,  0,  24,  26,    4,  0,  9,   16,
      1,  0,  108, 26,    2,  0,  43,  24,    2,  2,  15,  18,    2,  2,  11,  22,
      2,  0,  68,  18,    4,  0,  27,  16,    4,  0,  19,  24,    4,  0,  15,  28,
      2,  0,  78,  20,    4,  0,  31,  18,    2,  4,  14,  18,    4,  1,  13,  26,
      2,  0,  97,  24,    2,  2,  38,  22,    4,  2,  18,  22,    4,  2,  14,  26,
      2,  0,  116, 30,    3,  2,  36,  22,    4,  4,  16,  20,    4,  4,  12,  24,
      2,  2,  68,  18,    4,  1,  43,  26,    6,  2,  19,  24,    6,  2,  15,  28,
      4,  0,  81,  20,    1,  4,  50,  30,    4,  4,  22,  28,    3,  8,  12,  24,
      2,  2,  92,  24,    6,  2,  36,  22,    4,  6,  20,  26,    7,  4,  14,  28,
      4,  0,  107, 26,    8,  1,  37,  22,    8,  4,  20,  24,    12, 4,  11,  22,
      3,  1,  115, 30,    4,  5,  40,  24,    11, 5,  16,  20,    11, 5,  12,  24,
      5,  1,  87,  22,    5,  5,  41,  24,    5,  7,  24,  30,    11, 7,  12,  24,
      5,  1,  98,  24,    7,  3,  45,  28,    15, 2,  19,  24,    3,  13, 15,  30,
      1,  5,  107, 28,    10, 1,  46,  28,    1,  15, 22,  28,    2,  17, 14,  28,
      5,  1,  120, 30,    9,  4,  43,  26,    17, 1,  22,  28,    2,  19, 14,  28,
      3,  4,  113, 28,    3,  11, 44,  26,    17, 4,  21,  26,    9,  16, 13,  26,
      3,  5,  107, 28,    3,  13, 41,  26,    15, 5,  24,  30,    15, 10, 15,  28,
      4,  4,  116, 28,    17, 0,  42,  26,    17, 6,  22,  28,    19, 6,  16,  30,
      2,  7,  111, 28,    17, 0,  46,  28,    7,  16, 24,  30,    34, 0,  13,  24,
      4,  5,  121, 30,    4,  14, 47,  28,    11, 14, 24,  30,    16, 14, 15,  30,
      6,  4,  117, 30,    6,  14, 45,  28,    11, 16, 24,  30,    30, 2,  16,  30,
      8,  4,  106, 26,    8,  13, 47,  28,    7,  22, 24,  30,    22, 13, 15,  30,
      10, 2,  114, 28,    19, 4,  46,  28,    28, 6,  22,  28,    33, 4,  16,  30,
      8,  4,  122, 30,    22, 3,  45,  28,    8,  26, 23,  30,    12, 28, 15,  30,
      3,  10, 117, 30,    3,  23, 45,  28,    4,  31, 24,  30,    11, 31, 15,  30,
      7,  7,  116, 30,    21, 7,  45,  28,    1,  37, 23,  30,    19, 26, 15,  30,
      5,  10, 115, 30,    19, 10, 47,  28,    15, 25, 24,  30,    23, 25, 15,  30,
      13, 3,  115, 30,    2,  29, 46,  28,    42, 1,  24,  30,    23, 28, 15,  30,
      17, 0,  115, 30,    10, 23, 46,  28,    10, 35, 24,  30,    19, 35, 15,  30,
      17, 1,  115, 30,    14, 21, 46,  28,    29, 19, 24,  30,    11, 46, 15,  30,
      13, 6,  115, 30,    14, 23, 46,  28,    44, 7,  24,  30,    59, 1,  16,  30,
      12, 7,  121, 30,    12, 26, 47,  28,    39, 14, 24,  30,    22, 41, 15,  30,
      6,  14, 121, 30,    6,  34, 47,  28,    46, 10, 24,  30,    2,  64, 15,  30,
      17, 4,  122, 30,    29, 14, 46,  28,    49, 10, 24,  30,    24, 46, 15,  30,
      4,  18, 122, 30,    13, 32, 46,  28,    48, 14, 24,  30,    42, 32, 15,  30,
      20, 4,  117, 30,    40, 7,  47,  28,    43, 22, 24,  30,    10, 67, 15,  30,
      19, 6,  118, 30,    18, 31, 47,  28,    34, 34, 24,  30,    20, 61, 15,  30
    ],

    /**
     * The final format bits with mask (level << 3 | mask).
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof ErrorCorrection
     */
    FINAL_FORMAT: [
      // L
      0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976,
      // M
      0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0,
      // Q
      0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed,
      // H
      0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b
    ],

    /**
     * A map of human-readable ECC levels.
     *
     * @public
     * @static
     * @type {Object.<string, number>}
     * @memberof ErrorCorrection
     */
    LEVELS: {
      L: 1,
      M: 2,
      Q: 3,
      H: 4
    }

  });

  var ErrorCorrection_1 = ErrorCorrection;

  /**
   * Contains Galois field information.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var Galois = lite.extend(null, {

    /**
     * The Galois field exponent table.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Galois
     */
    EXPONENT: [
      0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1d, 0x3a, 0x74, 0xe8, 0xcd, 0x87, 0x13, 0x26,
      0x4c, 0x98, 0x2d, 0x5a, 0xb4, 0x75, 0xea, 0xc9, 0x8f, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0,
      0x9d, 0x27, 0x4e, 0x9c, 0x25, 0x4a, 0x94, 0x35, 0x6a, 0xd4, 0xb5, 0x77, 0xee, 0xc1, 0x9f, 0x23,
      0x46, 0x8c, 0x05, 0x0a, 0x14, 0x28, 0x50, 0xa0, 0x5d, 0xba, 0x69, 0xd2, 0xb9, 0x6f, 0xde, 0xa1,
      0x5f, 0xbe, 0x61, 0xc2, 0x99, 0x2f, 0x5e, 0xbc, 0x65, 0xca, 0x89, 0x0f, 0x1e, 0x3c, 0x78, 0xf0,
      0xfd, 0xe7, 0xd3, 0xbb, 0x6b, 0xd6, 0xb1, 0x7f, 0xfe, 0xe1, 0xdf, 0xa3, 0x5b, 0xb6, 0x71, 0xe2,
      0xd9, 0xaf, 0x43, 0x86, 0x11, 0x22, 0x44, 0x88, 0x0d, 0x1a, 0x34, 0x68, 0xd0, 0xbd, 0x67, 0xce,
      0x81, 0x1f, 0x3e, 0x7c, 0xf8, 0xed, 0xc7, 0x93, 0x3b, 0x76, 0xec, 0xc5, 0x97, 0x33, 0x66, 0xcc,
      0x85, 0x17, 0x2e, 0x5c, 0xb8, 0x6d, 0xda, 0xa9, 0x4f, 0x9e, 0x21, 0x42, 0x84, 0x15, 0x2a, 0x54,
      0xa8, 0x4d, 0x9a, 0x29, 0x52, 0xa4, 0x55, 0xaa, 0x49, 0x92, 0x39, 0x72, 0xe4, 0xd5, 0xb7, 0x73,
      0xe6, 0xd1, 0xbf, 0x63, 0xc6, 0x91, 0x3f, 0x7e, 0xfc, 0xe5, 0xd7, 0xb3, 0x7b, 0xf6, 0xf1, 0xff,
      0xe3, 0xdb, 0xab, 0x4b, 0x96, 0x31, 0x62, 0xc4, 0x95, 0x37, 0x6e, 0xdc, 0xa5, 0x57, 0xae, 0x41,
      0x82, 0x19, 0x32, 0x64, 0xc8, 0x8d, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xdd, 0xa7, 0x53, 0xa6,
      0x51, 0xa2, 0x59, 0xb2, 0x79, 0xf2, 0xf9, 0xef, 0xc3, 0x9b, 0x2b, 0x56, 0xac, 0x45, 0x8a, 0x09,
      0x12, 0x24, 0x48, 0x90, 0x3d, 0x7a, 0xf4, 0xf5, 0xf7, 0xf3, 0xfb, 0xeb, 0xcb, 0x8b, 0x0b, 0x16,
      0x2c, 0x58, 0xb0, 0x7d, 0xfa, 0xe9, 0xcf, 0x83, 0x1b, 0x36, 0x6c, 0xd8, 0xad, 0x47, 0x8e, 0x00
    ],

    /**
     * The Galois field log table.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Galois
     */
    LOG: [
      0xff, 0x00, 0x01, 0x19, 0x02, 0x32, 0x1a, 0xc6, 0x03, 0xdf, 0x33, 0xee, 0x1b, 0x68, 0xc7, 0x4b,
      0x04, 0x64, 0xe0, 0x0e, 0x34, 0x8d, 0xef, 0x81, 0x1c, 0xc1, 0x69, 0xf8, 0xc8, 0x08, 0x4c, 0x71,
      0x05, 0x8a, 0x65, 0x2f, 0xe1, 0x24, 0x0f, 0x21, 0x35, 0x93, 0x8e, 0xda, 0xf0, 0x12, 0x82, 0x45,
      0x1d, 0xb5, 0xc2, 0x7d, 0x6a, 0x27, 0xf9, 0xb9, 0xc9, 0x9a, 0x09, 0x78, 0x4d, 0xe4, 0x72, 0xa6,
      0x06, 0xbf, 0x8b, 0x62, 0x66, 0xdd, 0x30, 0xfd, 0xe2, 0x98, 0x25, 0xb3, 0x10, 0x91, 0x22, 0x88,
      0x36, 0xd0, 0x94, 0xce, 0x8f, 0x96, 0xdb, 0xbd, 0xf1, 0xd2, 0x13, 0x5c, 0x83, 0x38, 0x46, 0x40,
      0x1e, 0x42, 0xb6, 0xa3, 0xc3, 0x48, 0x7e, 0x6e, 0x6b, 0x3a, 0x28, 0x54, 0xfa, 0x85, 0xba, 0x3d,
      0xca, 0x5e, 0x9b, 0x9f, 0x0a, 0x15, 0x79, 0x2b, 0x4e, 0xd4, 0xe5, 0xac, 0x73, 0xf3, 0xa7, 0x57,
      0x07, 0x70, 0xc0, 0xf7, 0x8c, 0x80, 0x63, 0x0d, 0x67, 0x4a, 0xde, 0xed, 0x31, 0xc5, 0xfe, 0x18,
      0xe3, 0xa5, 0x99, 0x77, 0x26, 0xb8, 0xb4, 0x7c, 0x11, 0x44, 0x92, 0xd9, 0x23, 0x20, 0x89, 0x2e,
      0x37, 0x3f, 0xd1, 0x5b, 0x95, 0xbc, 0xcf, 0xcd, 0x90, 0x87, 0x97, 0xb2, 0xdc, 0xfc, 0xbe, 0x61,
      0xf2, 0x56, 0xd3, 0xab, 0x14, 0x2a, 0x5d, 0x9e, 0x84, 0x3c, 0x39, 0x53, 0x47, 0x6d, 0x41, 0xa2,
      0x1f, 0x2d, 0x43, 0xd8, 0xb7, 0x7b, 0xa4, 0x76, 0xc4, 0x17, 0x49, 0xec, 0x7f, 0x0c, 0x6f, 0xf6,
      0x6c, 0xa1, 0x3b, 0x52, 0x29, 0x9d, 0x55, 0xaa, 0xfb, 0x60, 0x86, 0xb1, 0xbb, 0xcc, 0x3e, 0x5a,
      0xcb, 0x59, 0x5f, 0xb0, 0x9c, 0xa9, 0xa0, 0x51, 0x0b, 0xf5, 0x16, 0xeb, 0x7a, 0x75, 0x2c, 0xd7,
      0x4f, 0xae, 0xd5, 0xe9, 0xe6, 0xe7, 0xad, 0xe8, 0x74, 0xd6, 0xf4, 0xea, 0xa8, 0x50, 0x58, 0xaf
    ]

  });

  var Galois_1 = Galois;

  /**
   * Contains version pattern information.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var Version = lite.extend(null, {

    /**
     * The version pattern block.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Version
     */
    BLOCK: [
      0xc94, 0x5bc, 0xa99, 0x4d3, 0xbf6, 0x762, 0x847, 0x60d, 0x928, 0xb78, 0x45d, 0xa17, 0x532,
      0x9a6, 0x683, 0x8c9, 0x7ec, 0xec4, 0x1e1, 0xfab, 0x08e, 0xc1a, 0x33f, 0xd75, 0x250, 0x9d5,
      0x6f0, 0x8ba, 0x79f, 0xb0b, 0x42e, 0xa64, 0x541, 0xc69
    ]

  });

  var Version_1 = Version;

  /**
   * Generates information for a QR code frame based on a specific value to be encoded.
   *
   * @param {Frame~Options} options - the options to be used
   * @public
   * @class
   * @extends Nevis
   */
  var Frame = lite.extend(function(options) {
    var dataBlock, eccBlock, index, neccBlock1, neccBlock2;
    var valueLength = options.value.length;

    this._badness = [];
    this._level = ErrorCorrection_1.LEVELS[options.level];
    this._polynomial = [];
    this._value = options.value;
    this._version = 0;
    this._stringBuffer = [];

    while (this._version < 40) {
      this._version++;

      index = ((this._level - 1) * 4) + ((this._version - 1) * 16);

      neccBlock1 = ErrorCorrection_1.BLOCKS[index++];
      neccBlock2 = ErrorCorrection_1.BLOCKS[index++];
      dataBlock = ErrorCorrection_1.BLOCKS[index++];
      eccBlock = ErrorCorrection_1.BLOCKS[index];

      index = (dataBlock * (neccBlock1 + neccBlock2)) + neccBlock2 - 3 + (this._version <= 9);

      if (valueLength <= index) {
        break;
      }
    }

    this._dataBlock = dataBlock;
    this._eccBlock = eccBlock;
    this._neccBlock1 = neccBlock1;
    this._neccBlock2 = neccBlock2;

    /**
     * The data width is based on version.
     *
     * @public
     * @type {number}
     * @memberof Frame#
     */
    // FIXME: Ensure that it fits instead of being truncated.
    var width = this.width = 17 + (4 * this._version);

    /**
     * The image buffer.
     *
     * @public
     * @type {number[]}
     * @memberof Frame#
     */
    this.buffer = Frame._createArray(width * width);

    this._ecc = Frame._createArray(dataBlock + ((dataBlock + eccBlock) * (neccBlock1 + neccBlock2)) + neccBlock2);
    this._mask = Frame._createArray(((width * (width + 1)) + 1) / 2);

    this._insertFinders();
    this._insertAlignments();

    // Insert single foreground cell.
    this.buffer[8 + (width * (width - 8))] = 1;

    this._insertTimingGap();
    this._reverseMask();
    this._insertTimingRowAndColumn();
    this._insertVersion();
    this._syncMask();
    this._convertBitStream(valueLength);
    this._calculatePolynomial();
    this._appendEccToData();
    this._interleaveBlocks();
    this._pack();
    this._finish();
  }, {

    _addAlignment: function(x, y) {
      var i;
      var buffer = this.buffer;
      var width = this.width;

      buffer[x + (width * y)] = 1;

      for (i = -2; i < 2; i++) {
        buffer[x + i + (width * (y - 2))] = 1;
        buffer[x - 2 + (width * (y + i + 1))] = 1;
        buffer[x + 2 + (width * (y + i))] = 1;
        buffer[x + i + 1 + (width * (y + 2))] = 1;
      }

      for (i = 0; i < 2; i++) {
        this._setMask(x - 1, y + i);
        this._setMask(x + 1, y - i);
        this._setMask(x - i, y - 1);
        this._setMask(x + i, y + 1);
      }
    },

    _appendData: function(data, dataLength, ecc, eccLength) {
      var bit, i, j;
      var polynomial = this._polynomial;
      var stringBuffer = this._stringBuffer;

      for (i = 0; i < eccLength; i++) {
        stringBuffer[ecc + i] = 0;
      }

      for (i = 0; i < dataLength; i++) {
        bit = Galois_1.LOG[stringBuffer[data + i] ^ stringBuffer[ecc]];

        if (bit !== 255) {
          for (j = 1; j < eccLength; j++) {
            stringBuffer[ecc + j - 1] = stringBuffer[ecc + j] ^
              Galois_1.EXPONENT[Frame._modN(bit + polynomial[eccLength - j])];
          }
        } else {
          for (j = ecc; j < ecc + eccLength; j++) {
            stringBuffer[j] = stringBuffer[j + 1];
          }
        }

        stringBuffer[ecc + eccLength - 1] = bit === 255 ? 0 : Galois_1.EXPONENT[Frame._modN(bit + polynomial[0])];
      }
    },

    _appendEccToData: function() {
      var i;
      var data = 0;
      var dataBlock = this._dataBlock;
      var ecc = this._calculateMaxLength();
      var eccBlock = this._eccBlock;

      for (i = 0; i < this._neccBlock1; i++) {
        this._appendData(data, dataBlock, ecc, eccBlock);

        data += dataBlock;
        ecc += eccBlock;
      }

      for (i = 0; i < this._neccBlock2; i++) {
        this._appendData(data, dataBlock + 1, ecc, eccBlock);

        data += dataBlock + 1;
        ecc += eccBlock;
      }
    },

    _applyMask: function(mask) {
      var r3x, r3y, x, y;
      var buffer = this.buffer;
      var width = this.width;

      switch (mask) {
      case 0:
        for (y = 0; y < width; y++) {
          for (x = 0; x < width; x++) {
            if (!((x + y) & 1) && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 1:
        for (y = 0; y < width; y++) {
          for (x = 0; x < width; x++) {
            if (!(y & 1) && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 2:
        for (y = 0; y < width; y++) {
          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
            }

            if (!r3x && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 3:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y === 3) {
            r3y = 0;
          }

          for (r3x = r3y, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
            }

            if (!r3x && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 4:
        for (y = 0; y < width; y++) {
          for (r3x = 0, r3y = (y >> 1) & 1, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
              r3y = !r3y;
            }

            if (!r3y && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 5:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y === 3) {
            r3y = 0;
          }

          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
            }

            if (!((x & y & 1) + !(!r3x | !r3y)) && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 6:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y === 3) {
            r3y = 0;
          }

          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
            }

            if (!((x & y & 1) + (r3x && r3x === r3y) & 1) && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 7:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y === 3) {
            r3y = 0;
          }

          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
            }

            if (!((r3x && r3x === r3y) + (x + y & 1) & 1) && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      }
    },

    _calculateMaxLength: function() {
      return (this._dataBlock * (this._neccBlock1 + this._neccBlock2)) + this._neccBlock2;
    },

    _calculatePolynomial: function() {
      var i, j;
      var eccBlock = this._eccBlock;
      var polynomial = this._polynomial;

      polynomial[0] = 1;

      for (i = 0; i < eccBlock; i++) {
        polynomial[i + 1] = 1;

        for (j = i; j > 0; j--) {
          polynomial[j] = polynomial[j] ? polynomial[j - 1] ^
            Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[j]] + i)] : polynomial[j - 1];
        }

        polynomial[0] = Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[0]] + i)];
      }

      // Use logs for generator polynomial to save calculation step.
      for (i = 0; i <= eccBlock; i++) {
        polynomial[i] = Galois_1.LOG[polynomial[i]];
      }
    },

    _checkBadness: function() {
      var b, b1, h, x, y;
      var bad = 0;
      var badness = this._badness;
      var buffer = this.buffer;
      var width = this.width;

      // Blocks of same colour.
      for (y = 0; y < width - 1; y++) {
        for (x = 0; x < width - 1; x++) {
          // All foreground colour.
          if ((buffer[x + (width * y)] &&
            buffer[x + 1 + (width * y)] &&
            buffer[x + (width * (y + 1))] &&
            buffer[x + 1 + (width * (y + 1))]) ||
            // All background colour.
            !(buffer[x + (width * y)] ||
            buffer[x + 1 + (width * y)] ||
            buffer[x + (width * (y + 1))] ||
            buffer[x + 1 + (width * (y + 1))])) {
            bad += Frame.N2;
          }
        }
      }

      var bw = 0;

      // X runs.
      for (y = 0; y < width; y++) {
        h = 0;

        badness[0] = 0;

        for (b = 0, x = 0; x < width; x++) {
          b1 = buffer[x + (width * y)];

          if (b === b1) {
            badness[h]++;
          } else {
            badness[++h] = 1;
          }

          b = b1;
          bw += b ? 1 : -1;
        }

        bad += this._getBadness(h);
      }

      if (bw < 0) {
        bw = -bw;
      }

      var count = 0;
      var big = bw;
      big += big << 2;
      big <<= 1;

      while (big > width * width) {
        big -= width * width;
        count++;
      }

      bad += count * Frame.N4;

      // Y runs.
      for (x = 0; x < width; x++) {
        h = 0;

        badness[0] = 0;

        for (b = 0, y = 0; y < width; y++) {
          b1 = buffer[x + (width * y)];

          if (b === b1) {
            badness[h]++;
          } else {
            badness[++h] = 1;
          }

          b = b1;
        }

        bad += this._getBadness(h);
      }

      return bad;
    },

    _convertBitStream: function(length) {
      var bit, i;
      var ecc = this._ecc;
      var version = this._version;

      // Convert string to bit stream. 8-bit data to QR-coded 8-bit data (numeric, alphanumeric, or kanji not supported).
      for (i = 0; i < length; i++) {
        ecc[i] = this._value.charCodeAt(i);
      }

      var stringBuffer = this._stringBuffer = ecc.slice();
      var maxLength = this._calculateMaxLength();

      if (length >= maxLength - 2) {
        length = maxLength - 2;

        if (version > 9) {
          length--;
        }
      }

      // Shift and re-pack to insert length prefix.
      var index = length;

      if (version > 9) {
        stringBuffer[index + 2] = 0;
        stringBuffer[index + 3] = 0;

        while (index--) {
          bit = stringBuffer[index];

          stringBuffer[index + 3] |= 255 & (bit << 4);
          stringBuffer[index + 2] = bit >> 4;
        }

        stringBuffer[2] |= 255 & (length << 4);
        stringBuffer[1] = length >> 4;
        stringBuffer[0] = 0x40 | (length >> 12);
      } else {
        stringBuffer[index + 1] = 0;
        stringBuffer[index + 2] = 0;

        while (index--) {
          bit = stringBuffer[index];

          stringBuffer[index + 2] |= 255 & (bit << 4);
          stringBuffer[index + 1] = bit >> 4;
        }

        stringBuffer[1] |= 255 & (length << 4);
        stringBuffer[0] = 0x40 | (length >> 4);
      }

      // Fill to end with pad pattern.
      index = length + 3 - (version < 10);

      while (index < maxLength) {
        stringBuffer[index++] = 0xec;
        stringBuffer[index++] = 0x11;
      }
    },

    _getBadness: function(length) {
      var i;
      var badRuns = 0;
      var badness = this._badness;

      for (i = 0; i <= length; i++) {
        if (badness[i] >= 5) {
          badRuns += Frame.N1 + badness[i] - 5;
        }
      }

      // FBFFFBF as in finder.
      for (i = 3; i < length - 1; i += 2) {
        if (badness[i - 2] === badness[i + 2] &&
          badness[i + 2] === badness[i - 1] &&
          badness[i - 1] === badness[i + 1] &&
          badness[i - 1] * 3 === badness[i] &&
          // Background around the foreground pattern? Not part of the specs.
          (badness[i - 3] === 0 || i + 3 > length ||
          badness[i - 3] * 3 >= badness[i] * 4 ||
          badness[i + 3] * 3 >= badness[i] * 4)) {
          badRuns += Frame.N3;
        }
      }

      return badRuns;
    },

    _finish: function() {
      // Save pre-mask copy of frame.
      this._stringBuffer = this.buffer.slice();

      var currentMask, i;
      var bit = 0;
      var mask = 30000;

      /*
       * Using for instead of while since in original Arduino code if an early mask was "good enough" it wouldn't try for
       * a better one since they get more complex and take longer.
       */
      for (i = 0; i < 8; i++) {
        // Returns foreground-background imbalance.
        this._applyMask(i);

        currentMask = this._checkBadness();

        // Is current mask better than previous best?
        if (currentMask < mask) {
          mask = currentMask;
          bit = i;
        }

        // Don't increment "i" to a void redoing mask.
        if (bit === 7) {
          break;
        }

        // Reset for next pass.
        this.buffer = this._stringBuffer.slice();
      }

      // Redo best mask as none were "good enough" (i.e. last wasn't bit).
      if (bit !== i) {
        this._applyMask(bit);
      }

      // Add in final mask/ECC level bytes.
      mask = ErrorCorrection_1.FINAL_FORMAT[bit + (this._level - 1 << 3)];

      var buffer = this.buffer;
      var width = this.width;

      // Low byte.
      for (i = 0; i < 8; i++, mask >>= 1) {
        if (mask & 1) {
          buffer[width - 1 - i + (width * 8)] = 1;

          if (i < 6) {
            buffer[8 + (width * i)] = 1;
          } else {
            buffer[8 + (width * (i + 1))] = 1;
          }
        }
      }

      // High byte.
      for (i = 0; i < 7; i++, mask >>= 1) {
        if (mask & 1) {
          buffer[8 + (width * (width - 7 + i))] = 1;

          if (i) {
            buffer[6 - i + (width * 8)] = 1;
          } else {
            buffer[7 + (width * 8)] = 1;
          }
        }
      }
    },

    _interleaveBlocks: function() {
      var i, j;
      var dataBlock = this._dataBlock;
      var ecc = this._ecc;
      var eccBlock = this._eccBlock;
      var k = 0;
      var maxLength = this._calculateMaxLength();
      var neccBlock1 = this._neccBlock1;
      var neccBlock2 = this._neccBlock2;
      var stringBuffer = this._stringBuffer;

      for (i = 0; i < dataBlock; i++) {
        for (j = 0; j < neccBlock1; j++) {
          ecc[k++] = stringBuffer[i + (j * dataBlock)];
        }

        for (j = 0; j < neccBlock2; j++) {
          ecc[k++] = stringBuffer[(neccBlock1 * dataBlock) + i + (j * (dataBlock + 1))];
        }
      }

      for (j = 0; j < neccBlock2; j++) {
        ecc[k++] = stringBuffer[(neccBlock1 * dataBlock) + i + (j * (dataBlock + 1))];
      }

      for (i = 0; i < eccBlock; i++) {
        for (j = 0; j < neccBlock1 + neccBlock2; j++) {
          ecc[k++] = stringBuffer[maxLength + i + (j * eccBlock)];
        }
      }

      this._stringBuffer = ecc;
    },

    _insertAlignments: function() {
      var i, x, y;
      var version = this._version;
      var width = this.width;

      if (version > 1) {
        i = Alignment_1.BLOCK[version];
        y = width - 7;

        for (;;) {
          x = width - 7;

          while (x > i - 3) {
            this._addAlignment(x, y);

            if (x < i) {
              break;
            }

            x -= i;
          }

          if (y <= i + 9) {
            break;
          }

          y -= i;

          this._addAlignment(6, y);
          this._addAlignment(y, 6);
        }
      }
    },

    _insertFinders: function() {
      var i, j, x, y;
      var buffer = this.buffer;
      var width = this.width;

      for (i = 0; i < 3; i++) {
        j = 0;
        y = 0;

        if (i === 1) {
          j = width - 7;
        }
        if (i === 2) {
          y = width - 7;
        }

        buffer[y + 3 + (width * (j + 3))] = 1;

        for (x = 0; x < 6; x++) {
          buffer[y + x + (width * j)] = 1;
          buffer[y + (width * (j + x + 1))] = 1;
          buffer[y + 6 + (width * (j + x))] = 1;
          buffer[y + x + 1 + (width * (j + 6))] = 1;
        }

        for (x = 1; x < 5; x++) {
          this._setMask(y + x, j + 1);
          this._setMask(y + 1, j + x + 1);
          this._setMask(y + 5, j + x);
          this._setMask(y + x + 1, j + 5);
        }

        for (x = 2; x < 4; x++) {
          buffer[y + x + (width * (j + 2))] = 1;
          buffer[y + 2 + (width * (j + x + 1))] = 1;
          buffer[y + 4 + (width * (j + x))] = 1;
          buffer[y + x + 1 + (width * (j + 4))] = 1;
        }
      }
    },

    _insertTimingGap: function() {
      var x, y;
      var width = this.width;

      for (y = 0; y < 7; y++) {
        this._setMask(7, y);
        this._setMask(width - 8, y);
        this._setMask(7, y + width - 7);
      }

      for (x = 0; x < 8; x++) {
        this._setMask(x, 7);
        this._setMask(x + width - 8, 7);
        this._setMask(x, width - 8);
      }
    },

    _insertTimingRowAndColumn: function() {
      var x;
      var buffer = this.buffer;
      var width = this.width;

      for (x = 0; x < width - 14; x++) {
        if (x & 1) {
          this._setMask(8 + x, 6);
          this._setMask(6, 8 + x);
        } else {
          buffer[8 + x + (width * 6)] = 1;
          buffer[6 + (width * (8 + x))] = 1;
        }
      }
    },

    _insertVersion: function() {
      var i, j, x, y;
      var buffer = this.buffer;
      var version = this._version;
      var width = this.width;

      if (version > 6) {
        i = Version_1.BLOCK[version - 7];
        j = 17;

        for (x = 0; x < 6; x++) {
          for (y = 0; y < 3; y++, j--) {
            if (1 & (j > 11 ? version >> j - 12 : i >> j)) {
              buffer[5 - x + (width * (2 - y + width - 11))] = 1;
              buffer[2 - y + width - 11 + (width * (5 - x))] = 1;
            } else {
              this._setMask(5 - x, 2 - y + width - 11);
              this._setMask(2 - y + width - 11, 5 - x);
            }
          }
        }
      }
    },

    _isMasked: function(x, y) {
      var bit = Frame._getMaskBit(x, y);

      return this._mask[bit] === 1;
    },

    _pack: function() {
      var bit, i, j;
      var k = 1;
      var v = 1;
      var width = this.width;
      var x = width - 1;
      var y = width - 1;

      // Interleaved data and ECC codes.
      var length = ((this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2)) + this._neccBlock2;

      for (i = 0; i < length; i++) {
        bit = this._stringBuffer[i];

        for (j = 0; j < 8; j++, bit <<= 1) {
          if (0x80 & bit) {
            this.buffer[x + (width * y)] = 1;
          }

          // Find next fill position.
          do {
            if (v) {
              x--;
            } else {
              x++;

              if (k) {
                if (y !== 0) {
                  y--;
                } else {
                  x -= 2;
                  k = !k;

                  if (x === 6) {
                    x--;
                    y = 9;
                  }
                }
              } else if (y !== width - 1) {
                y++;
              } else {
                x -= 2;
                k = !k;

                if (x === 6) {
                  x--;
                  y -= 8;
                }
              }
            }

            v = !v;
          } while (this._isMasked(x, y));
        }
      }
    },

    _reverseMask: function() {
      var x, y;
      var width = this.width;

      for (x = 0; x < 9; x++) {
        this._setMask(x, 8);
      }

      for (x = 0; x < 8; x++) {
        this._setMask(x + width - 8, 8);
        this._setMask(8, x);
      }

      for (y = 0; y < 7; y++) {
        this._setMask(8, y + width - 7);
      }
    },

    _setMask: function(x, y) {
      var bit = Frame._getMaskBit(x, y);

      this._mask[bit] = 1;
    },

    _syncMask: function() {
      var x, y;
      var width = this.width;

      for (y = 0; y < width; y++) {
        for (x = 0; x <= y; x++) {
          if (this.buffer[x + (width * y)]) {
            this._setMask(x, y);
          }
        }
      }
    }

  }, {

    _createArray: function(length) {
      var i;
      var array = [];

      for (i = 0; i < length; i++) {
        array[i] = 0;
      }

      return array;
    },

    _getMaskBit: function(x, y) {
      var bit;

      if (x > y) {
        bit = x;
        x = y;
        y = bit;
      }

      bit = y;
      bit += y * y;
      bit >>= 1;
      bit += x;

      return bit;
    },

    _modN: function(x) {
      while (x >= 255) {
        x -= 255;
        x = (x >> 8) + (x & 255);
      }

      return x;
    },

    // *Badness* coefficients.
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10

  });

  var Frame_1 = Frame;

  /**
   * The options used by {@link Frame}.
   *
   * @typedef {Object} Frame~Options
   * @property {string} level - The ECC level to be used.
   * @property {string} value - The value to be encoded.
   */

  /**
   * An implementation of {@link Renderer} for working with <code>img</code> elements.
   *
   * This depends on {@link CanvasRenderer} being executed first as this implementation simply applies the data URL from
   * the rendered <code>canvas</code> element as the <code>src</code> for the <code>img</code> element being rendered.
   *
   * @public
   * @class
   * @extends Renderer
   */
  var ImageRenderer = Renderer_1.extend({

    /**
     * @override
     */
    draw: function() {
      this.element.src = this.qrious.toDataURL();
    },

    /**
     * @override
     */
    reset: function() {
      this.element.src = '';
    },

    /**
     * @override
     */
    resize: function() {
      var element = this.element;

      element.width = element.height = this.qrious.size;
    }

  });

  var ImageRenderer_1 = ImageRenderer;

  /**
   * Defines an available option while also configuring how values are applied to the target object.
   *
   * Optionally, a default value can be specified as well a value transformer for greater control over how the option
   * value is applied.
   *
   * If no value transformer is specified, then any specified option will be applied directly. All values are maintained
   * on the target object itself as a field using the option name prefixed with a single underscore.
   *
   * When an option is specified as modifiable, the {@link OptionManager} will be required to include a setter for the
   * property that is defined on the target object that uses the option name.
   *
   * @param {string} name - the name to be used
   * @param {boolean} [modifiable] - <code>true</code> if the property defined on target objects should include a setter;
   * otherwise <code>false</code>
   * @param {*} [defaultValue] - the default value to be used
   * @param {Option~ValueTransformer} [valueTransformer] - the value transformer to be used
   * @public
   * @class
   * @extends Nevis
   */
  var Option = lite.extend(function(name, modifiable, defaultValue, valueTransformer) {
    /**
     * The name for this {@link Option}.
     *
     * @public
     * @type {string}
     * @memberof Option#
     */
    this.name = name;

    /**
     * Whether a setter should be included on the property defined on target objects for this {@link Option}.
     *
     * @public
     * @type {boolean}
     * @memberof Option#
     */
    this.modifiable = Boolean(modifiable);

    /**
     * The default value for this {@link Option}.
     *
     * @public
     * @type {*}
     * @memberof Option#
     */
    this.defaultValue = defaultValue;

    this._valueTransformer = valueTransformer;
  }, {

    /**
     * Transforms the specified <code>value</code> so that it can be applied for this {@link Option}.
     *
     * If a value transformer has been specified for this {@link Option}, it will be called upon to transform
     * <code>value</code>. Otherwise, <code>value</code> will be returned directly.
     *
     * @param {*} value - the value to be transformed
     * @return {*} The transformed value or <code>value</code> if no value transformer is specified.
     * @public
     * @memberof Option#
     */
    transform: function(value) {
      var transformer = this._valueTransformer;
      if (typeof transformer === 'function') {
        return transformer(value, this);
      }

      return value;
    }

  });

  var Option_1 = Option;

  /**
   * Returns a transformed value for the specified <code>value</code> to be applied for the <code>option</code> provided.
   *
   * @callback Option~ValueTransformer
   * @param {*} value - the value to be transformed
   * @param {Option} option - the {@link Option} for which <code>value</code> is being transformed
   * @return {*} The transform value.
   */

  /**
   * Contains utility methods that are useful throughout the library.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var Utilities = lite.extend(null, {

    /**
     * Returns the absolute value of a given number.
     *
     * This method is simply a convenient shorthand for <code>Math.abs</code> while ensuring that nulls are returned as
     * <code>null</code> instead of zero.
     *
     * @param {number} value - the number whose absolute value is to be returned
     * @return {number} The absolute value of <code>value</code> or <code>null</code> if <code>value</code> is
     * <code>null</code>.
     * @public
     * @static
     * @memberof Utilities
     */
    abs: function(value) {
      return value != null ? Math.abs(value) : null;
    },

    /**
     * Returns whether the specified <code>object</code> has a property with the specified <code>name</code> as an own
     * (not inherited) property.
     *
     * @param {Object} object - the object on which the property is to be checked
     * @param {string} name - the name of the property to be checked
     * @return {boolean} <code>true</code> if <code>object</code> has an own property with <code>name</code>.
     * @public
     * @static
     * @memberof Utilities
     */
    hasOwn: function(object, name) {
      return Object.prototype.hasOwnProperty.call(object, name);
    },

    /**
     * A non-operation method that does absolutely nothing.
     *
     * @return {void}
     * @public
     * @static
     * @memberof Utilities
     */
    noop: function() {},

    /**
     * Transforms the specified <code>string</code> to upper case while remaining null-safe.
     *
     * @param {string} string - the string to be transformed to upper case
     * @return {string} <code>string</code> transformed to upper case if <code>string</code> is not <code>null</code>.
     * @public
     * @static
     * @memberof Utilities
     */
    toUpperCase: function(string) {
      return string != null ? string.toUpperCase() : null;
    }

  });

  var Utilities_1 = Utilities;

  /**
   * Manages multiple {@link Option} instances that are intended to be used by multiple implementations.
   *
   * Although the option definitions are shared between targets, the values are maintained on the targets themselves.
   *
   * @param {Option[]} options - the options to be used
   * @public
   * @class
   * @extends Nevis
   */
  var OptionManager = lite.extend(function(options) {
    /**
     * The available options for this {@link OptionManager}.
     *
     * @public
     * @type {Object.<string, Option>}
     * @memberof OptionManager#
     */
    this.options = {};

    options.forEach(function(option) {
      this.options[option.name] = option;
    }, this);
  }, {

    /**
     * Returns whether an option with the specified <code>name</code> is available.
     *
     * @param {string} name - the name of the {@link Option} whose existence is to be checked
     * @return {boolean} <code>true</code> if an {@link Option} exists with <code>name</code>; otherwise
     * <code>false</code>.
     * @public
     * @memberof OptionManager#
     */
    exists: function(name) {
      return this.options[name] != null;
    },

    /**
     * Returns the value of the option with the specified <code>name</code> on the <code>target</code> object provided.
     *
     * @param {string} name - the name of the {@link Option} whose value on <code>target</code> is to be returned
     * @param {Object} target - the object from which the value of the named {@link Option} is to be returned
     * @return {*} The value of the {@link Option} with <code>name</code> on <code>target</code>.
     * @public
     * @memberof OptionManager#
     */
    get: function(name, target) {
      return OptionManager._get(this.options[name], target);
    },

    /**
     * Returns a copy of all of the available options on the <code>target</code> object provided.
     *
     * @param {Object} target - the object from which the option name/value pairs are to be returned
     * @return {Object.<string, *>} A hash containing the name/value pairs of all options on <code>target</code>.
     * @public
     * @memberof OptionManager#
     */
    getAll: function(target) {
      var name;
      var options = this.options;
      var result = {};

      for (name in options) {
        if (Utilities_1.hasOwn(options, name)) {
          result[name] = OptionManager._get(options[name], target);
        }
      }

      return result;
    },

    /**
     * Initializes the available options for the <code>target</code> object provided and then applies the initial values
     * within the speciifed <code>options</code>.
     *
     * This method will throw an error if any of the names within <code>options</code> does not match an available option.
     *
     * This involves setting the default values and defining properties for all of the available options on
     * <code>target</code> before finally calling {@link OptionMananger#setAll} with <code>options</code> and
     * <code>target</code>. Any options that are configured to be modifiable will have a setter included in their defined
     * property that will allow its corresponding value to be modified.
     *
     * If a change handler is specified, it will be called whenever the value changes on <code>target</code> for a
     * modifiable option, but only when done so via the defined property's setter.
     *
     * @param {Object.<string, *>} options - the name/value pairs of the initial options to be set
     * @param {Object} target - the object on which the options are to be initialized
     * @param {Function} [changeHandler] - the function to be called whenever the value of an modifiable option changes on
     * <code>target</code>
     * @return {void}
     * @throws {Error} If <code>options</code> contains an invalid option name.
     * @public
     * @memberof OptionManager#
     */
    init: function(options, target, changeHandler) {
      if (typeof changeHandler !== 'function') {
        changeHandler = Utilities_1.noop;
      }

      var name, option;

      for (name in this.options) {
        if (Utilities_1.hasOwn(this.options, name)) {
          option = this.options[name];

          OptionManager._set(option, option.defaultValue, target);
          OptionManager._createAccessor(option, target, changeHandler);
        }
      }

      this._setAll(options, target, true);
    },

    /**
     * Sets the value of the option with the specified <code>name</code> on the <code>target</code> object provided to
     * <code>value</code>.
     *
     * This method will throw an error if <code>name</code> does not match an available option or matches an option that
     * cannot be modified.
     *
     * If <code>value</code> is <code>null</code> and the {@link Option} has a default value configured, then that default
     * value will be used instead. If the {@link Option} also has a value transformer configured, it will be used to
     * transform whichever value was determined to be used.
     *
     * This method returns whether the value of the underlying field on <code>target</code> was changed as a result.
     *
     * @param {string} name - the name of the {@link Option} whose value is to be set
     * @param {*} value - the value to be set for the named {@link Option} on <code>target</code>
     * @param {Object} target - the object on which <code>value</code> is to be set for the named {@link Option}
     * @return {boolean} <code>true</code> if the underlying field on <code>target</code> was changed; otherwise
     * <code>false</code>.
     * @throws {Error} If <code>name</code> is invalid or is for an option that cannot be modified.
     * @public
     * @memberof OptionManager#
     */
    set: function(name, value, target) {
      return this._set(name, value, target);
    },

    /**
     * Sets all of the specified <code>options</code> on the <code>target</code> object provided to their corresponding
     * values.
     *
     * This method will throw an error if any of the names within <code>options</code> does not match an available option
     * or matches an option that cannot be modified.
     *
     * If any value within <code>options</code> is <code>null</code> and the corresponding {@link Option} has a default
     * value configured, then that default value will be used instead. If an {@link Option} also has a value transformer
     * configured, it will be used to transform whichever value was determined to be used.
     *
     * This method returns whether the value for any of the underlying fields on <code>target</code> were changed as a
     * result.
     *
     * @param {Object.<string, *>} options - the name/value pairs of options to be set
     * @param {Object} target - the object on which the options are to be set
     * @return {boolean} <code>true</code> if any of the underlying fields on <code>target</code> were changed; otherwise
     * <code>false</code>.
     * @throws {Error} If <code>options</code> contains an invalid option name or an option that cannot be modiifed.
     * @public
     * @memberof OptionManager#
     */
    setAll: function(options, target) {
      return this._setAll(options, target);
    },

    _set: function(name, value, target, allowUnmodifiable) {
      var option = this.options[name];
      if (!option) {
        throw new Error('Invalid option: ' + name);
      }
      if (!option.modifiable && !allowUnmodifiable) {
        throw new Error('Option cannot be modified: ' + name);
      }

      return OptionManager._set(option, value, target);
    },

    _setAll: function(options, target, allowUnmodifiable) {
      if (!options) {
        return false;
      }

      var name;
      var changed = false;

      for (name in options) {
        if (Utilities_1.hasOwn(options, name) && this._set(name, options[name], target, allowUnmodifiable)) {
          changed = true;
        }
      }

      return changed;
    }

  }, {

    _createAccessor: function(option, target, changeHandler) {
      var descriptor = {
        get: function() {
          return OptionManager._get(option, target);
        }
      };

      if (option.modifiable) {
        descriptor.set = function(value) {
          if (OptionManager._set(option, value, target)) {
            changeHandler(value, option);
          }
        };
      }

      Object.defineProperty(target, option.name, descriptor);
    },

    _get: function(option, target) {
      return target['_' + option.name];
    },

    _set: function(option, value, target) {
      var fieldName = '_' + option.name;
      var oldValue = target[fieldName];
      var newValue = option.transform(value != null ? value : option.defaultValue);

      target[fieldName] = newValue;

      return newValue !== oldValue;
    }

  });

  var OptionManager_1 = OptionManager;

  /**
   * Called whenever the value of a modifiable {@link Option} is changed on a target object via the defined property's
   * setter.
   *
   * @callback OptionManager~ChangeHandler
   * @param {*} value - the new value for <code>option</code> on the target object
   * @param {Option} option - the modifable {@link Option} whose value has changed on the target object.
   * @return {void}
   */

  /**
   * A basic manager for {@link Service} implementations that are mapped to simple names.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var ServiceManager = lite.extend(function() {
    this._services = {};
  }, {

    /**
     * Returns the {@link Service} being managed with the specified <code>name</code>.
     *
     * @param {string} name - the name of the {@link Service} to be returned
     * @return {Service} The {@link Service} is being managed with <code>name</code>.
     * @throws {Error} If no {@link Service} is being managed with <code>name</code>.
     * @public
     * @memberof ServiceManager#
     */
    getService: function(name) {
      var service = this._services[name];
      if (!service) {
        throw new Error('Service is not being managed with name: ' + name);
      }

      return service;
    },

    /**
     * Sets the {@link Service} implementation to be managed for the specified <code>name</code> to the
     * <code>service</code> provided.
     *
     * @param {string} name - the name of the {@link Service} to be managed with <code>name</code>
     * @param {Service} service - the {@link Service} implementation to be managed
     * @return {void}
     * @throws {Error} If a {@link Service} is already being managed with the same <code>name</code>.
     * @public
     * @memberof ServiceManager#
     */
    setService: function(name, service) {
      if (this._services[name]) {
        throw new Error('Service is already managed with name: ' + name);
      }

      if (service) {
        this._services[name] = service;
      }
    }

  });

  var ServiceManager_1 = ServiceManager;

  var optionManager = new OptionManager_1([
    new Option_1('background', true, 'white'),
    new Option_1('backgroundAlpha', true, 1, Utilities_1.abs),
    new Option_1('element'),
    new Option_1('foreground', true, 'black'),
    new Option_1('foregroundAlpha', true, 1, Utilities_1.abs),
    new Option_1('level', true, 'L', Utilities_1.toUpperCase),
    new Option_1('mime', true, 'image/png'),
    new Option_1('padding', true, null, Utilities_1.abs),
    new Option_1('size', true, 100, Utilities_1.abs),
    new Option_1('value', true, '')
  ]);
  var serviceManager = new ServiceManager_1();

  /**
   * Enables configuration of a QR code generator which uses HTML5 <code>canvas</code> for rendering.
   *
   * @param {QRious~Options} [options] - the options to be used
   * @throws {Error} If any <code>options</code> are invalid.
   * @public
   * @class
   * @extends Nevis
   */
  var QRious = lite.extend(function(options) {
    optionManager.init(options, this, this.update.bind(this));

    var element = optionManager.get('element', this);
    var elementService = serviceManager.getService('element');
    var canvas = element && elementService.isCanvas(element) ? element : elementService.createCanvas();
    var image = element && elementService.isImage(element) ? element : elementService.createImage();

    this._canvasRenderer = new CanvasRenderer_1(this, canvas, true);
    this._imageRenderer = new ImageRenderer_1(this, image, image === element);

    this.update();
  }, {

    /**
     * Returns all of the options configured for this {@link QRious}.
     *
     * Any changes made to the returned object will not be reflected in the options themselves or their corresponding
     * underlying fields.
     *
     * @return {Object.<string, *>} A copy of the applied options.
     * @public
     * @memberof QRious#
     */
    get: function() {
      return optionManager.getAll(this);
    },

    /**
     * Sets all of the specified <code>options</code> and automatically updates this {@link QRious} if any of the
     * underlying fields are changed as a result.
     *
     * This is the preferred method for updating multiple options at one time to avoid unnecessary updates between
     * changes.
     *
     * @param {QRious~Options} options - the options to be set
     * @return {void}
     * @throws {Error} If any <code>options</code> are invalid or cannot be modified.
     * @public
     * @memberof QRious#
     */
    set: function(options) {
      if (optionManager.setAll(options, this)) {
        this.update();
      }
    },

    /**
     * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
     *
     * @param {string} [mime] - the MIME type for the image
     * @return {string} The image data URI for the QR code.
     * @public
     * @memberof QRious#
     */
    toDataURL: function(mime) {
      return this.canvas.toDataURL(mime || this.mime);
    },

    /**
     * Updates this {@link QRious} by generating a new {@link Frame} and re-rendering the QR code.
     *
     * @return {void}
     * @protected
     * @memberof QRious#
     */
    update: function() {
      var frame = new Frame_1({
        level: this.level,
        value: this.value
      });

      this._canvasRenderer.render(frame);
      this._imageRenderer.render(frame);
    }

  }, {

    /**
     * Configures the <code>service</code> provided to be used by all {@link QRious} instances.
     *
     * @param {Service} service - the {@link Service} to be configured
     * @return {void}
     * @throws {Error} If a {@link Service} has already been configured with the same name.
     * @public
     * @static
     * @memberof QRious
     */
    use: function(service) {
      serviceManager.setService(service.getName(), service);
    }

  });

  Object.defineProperties(QRious.prototype, {

    canvas: {
      /**
       * Returns the <code>canvas</code> element being used to render the QR code for this {@link QRious}.
       *
       * @return {*} The <code>canvas</code> element.
       * @public
       * @memberof QRious#
       * @alias canvas
       */
      get: function() {
        return this._canvasRenderer.getElement();
      }
    },

    image: {
      /**
       * Returns the <code>img</code> element being used to render the QR code for this {@link QRious}.
       *
       * @return {*} The <code>img</code> element.
       * @public
       * @memberof QRious#
       * @alias image
       */
      get: function() {
        return this._imageRenderer.getElement();
      }
    }

  });

  var QRious_1$2 = QRious;

  /**
   * The options used by {@link QRious}.
   *
   * @typedef {Object} QRious~Options
   * @property {string} [background="white"] - The background color to be applied to the QR code.
   * @property {number} [backgroundAlpha=1] - The background alpha to be applied to the QR code.
   * @property {*} [element] - The element to be used to render the QR code which may either be an <code>canvas</code> or
   * <code>img</code>. The element(s) will be created if needed.
   * @property {string} [foreground="black"] - The foreground color to be applied to the QR code.
   * @property {number} [foregroundAlpha=1] - The foreground alpha to be applied to the QR code.
   * @property {string} [level="L"] - The error correction level to be applied to the QR code.
   * @property {string} [mime="image/png"] - The MIME type to be used to render the image for the QR code.
   * @property {number} [padding] - The padding for the QR code in pixels.
   * @property {number} [size=100] - The size of the QR code in pixels.
   * @property {string} [value=""] - The value to be encoded within the QR code.
   */

  var index = QRious_1$2;

  /**
   * Defines a service contract that must be met by all implementations.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var Service = lite.extend({

    /**
     * Returns the name of this {@link Service}.
     *
     * @return {string} The service name.
     * @public
     * @abstract
     * @memberof Service#
     */
    getName: function() {}

  });

  var Service_1 = Service;

  /**
   * A service for working with elements.
   *
   * @public
   * @class
   * @extends Service
   */
  var ElementService = Service_1.extend({

    /**
     * Creates an instance of a canvas element.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @return {*} The newly created canvas element.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    createCanvas: function() {},

    /**
     * Creates an instance of a image element.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @return {*} The newly created image element.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    createImage: function() {},

    /**
     * @override
     */
    getName: function() {
      return 'element';
    },

    /**
     * Returns whether the specified <code>element</code> is a canvas.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @param {*} element - the element to be checked
     * @return {boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    isCanvas: function(element) {},

    /**
     * Returns whether the specified <code>element</code> is an image.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @param {*} element - the element to be checked
     * @return {boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    isImage: function(element) {}

  });

  var ElementService_1 = ElementService;

  /**
   * An implementation of {@link ElementService} intended for use within a browser environment.
   *
   * @public
   * @class
   * @extends ElementService
   */
  var BrowserElementService = ElementService_1.extend({

    /**
     * @override
     */
    createCanvas: function() {
      return document.createElement('canvas');
    },

    /**
     * @override
     */
    createImage: function() {
      return document.createElement('img');
    },

    /**
     * @override
     */
    isCanvas: function(element) {
      return element instanceof HTMLCanvasElement;
    },

    /**
     * @override
     */
    isImage: function(element) {
      return element instanceof HTMLImageElement;
    }

  });

  var BrowserElementService_1 = BrowserElementService;

  index.use(new BrowserElementService_1());

  var QRious_1 = index;

  return QRious_1;

})));


});

var vQriously = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('canvas', { ref: "qrcode" })]);
    }, staticRenderFns: [],
    data: function data() {
        return { qrious: null };
    },

    props: {
        background: {
            type: String,
            default: 'white'
        },
        backgroundAlpha: {
            type: Number,
            default: 0.0
        },
        foreground: {
            type: String,
            default: 'black'
        },
        foregroundAlpha: {
            type: Number,
            default: 1.0
        },
        level: {
            type: String,
            default: 'L'
        },
        mime: {
            type: String,
            default: 'image/png'
        },
        padding: {
            type: Number,
            default: null
        },
        size: {
            type: Number,
            default: 100
        },
        value: {
            type: String,
            required: true
        }
    },
    watch: {
        background: function background() {
            this.qrious.background = this.background;
        },
        backgroundAlpha: function backgroundAlpha() {
            this.qrious.backgroundAlpha = this.backgroundAlpha;
        },
        foreground: function foreground() {
            this.qrious.foreground = this.foreground;
        },
        foregroundAlpha: function foregroundAlpha() {
            this.qrious.foregroundAlpha = this.foregroundAlpha;
        },
        level: function level() {
            this.qrious.level = this.level;
        },
        mime: function mime() {
            this.qrious.mime = this.mime;
        },
        padding: function padding() {
            this.qrious.padding = this.padding;
        },
        size: function size() {
            this.qrious.size = this.size;
        },
        value: function value() {
            this.qrious.value = this.value;
        }
    },
    mounted: function mounted() {
        var element = this.$refs.qrcode;
        var background = this.background;
        var backgroundAlpha = this.backgroundAlpha;
        var foreground = this.foreground;
        var foregroundAlpha = this.foregroundAlpha;
        var level = this.level;
        var mime = this.mime;
        var padding = this.padding;
        var size = this.size;
        var value = this.value;

        this.qrious = new qrious({
            element: element,
            background: background,
            backgroundAlpha: backgroundAlpha,
            foreground: foreground,
            foregroundAlpha: foregroundAlpha,
            level: level,
            mime: mime,
            padding: padding,
            size: size,
            value: value
        });
    }
};

/**
 * @name VueJS vQriously (vue-qriously)
 * @description Component to generate HTML canvas QR codes for Vue.js 2.0
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file vue-qriously plugin definition
 */

var VueQriously = {
    install: function install(Vue, options) {
        Vue.component('qriously', vQriously);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueQriously);
}

return VueQriously;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXFyaW91c2x5L2Rpc3QvdnVlLXFyaW91c2x5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsQ0FBQyxLQUE0RDtBQUM3RCxDQUFDLFNBQ29DO0FBQ3JDLENBQUMscUJBQXFCOztBQUV0Qjs7Ozs7O0FBTUE7QUFDQSxrQkFBa0IsWUFBWSxFQUFFO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywrQkFBK0I7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsU0FBUztBQUN2QjtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5QixxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5QixxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5Qiw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5QixrREFBa0QsV0FBVztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixXQUFXO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixjQUFjO0FBQy9COztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEMsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixXQUFXO0FBQzVCOztBQUVBOztBQUVBLDBCQUEwQixXQUFXO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsV0FBVztBQUM1Qjs7QUFFQTs7QUFFQSwwQkFBMEIsV0FBVztBQUNyQzs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsZUFBZTtBQUNoQyxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBOztBQUVBLGlCQUFpQixjQUFjO0FBQy9CLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQixxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixZQUFZO0FBQzdCOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFdBQVc7QUFDNUIsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7O0FBRUE7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELG9CQUFvQjtBQUN6RTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGFBQWEsRUFBRTtBQUNmLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixhQUFhO0FBQ3ZDO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0ZBQStGLGFBQWE7QUFDNUc7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsYUFBYTtBQUNoRDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSx1RkFBdUYsYUFBYTtBQUNwRztBQUNBLDJEQUEyRCxhQUFhO0FBQ3hFO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZixhQUFhLE9BQU8sZUFBZSxhQUFhO0FBQ2hELGNBQWMsRUFBRTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNEO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU8seUJBQXlCLGFBQWE7QUFDNUQsZ0JBQWdCLFFBQVEsMEJBQTBCLGFBQWEsK0JBQStCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPLHlCQUF5QixhQUFhO0FBQzVELGVBQWUsT0FBTyx3REFBd0QsYUFBYTtBQUMzRixnQkFBZ0IsRUFBRSxtQkFBbUIsYUFBYTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCw0QkFBNEI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEMsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4QjtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGFBQWE7QUFDeEUsMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU8seUJBQXlCLGFBQWE7QUFDNUQsZUFBZSxFQUFFLDRDQUE0QyxhQUFhO0FBQzFFLGVBQWUsT0FBTyw2RUFBNkU7QUFDbkcsZ0JBQWdCLFFBQVEsOEVBQThFO0FBQ3RHO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsYUFBYTtBQUN6Ryw4RUFBOEUsYUFBYTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEMsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixRQUFRLHVGQUF1RjtBQUMvRztBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxnREFBZ0QsYUFBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZixhQUFhLE9BQU8seUJBQXlCLGFBQWE7QUFDMUQsY0FBYztBQUNkOztBQUVBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQSxlQUFlLE9BQU8seUJBQXlCLGNBQWM7QUFDN0QsZ0JBQWdCLFFBQVEsTUFBTSxjQUFjO0FBQzVDLGdCQUFnQixNQUFNLFFBQVEsY0FBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQSxlQUFlLE9BQU8seUJBQXlCLGNBQWM7QUFDN0QsZUFBZSxRQUFRLGdCQUFnQixjQUFjO0FBQ3JELGdCQUFnQjtBQUNoQixnQkFBZ0IsTUFBTSxPQUFPLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUIsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHVEQUF1RCxhQUFhO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLHNGQUFzRixhQUFhO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUIsZ0JBQWdCO0FBQ2hCLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxxQkFBcUIsYUFBYSxzQkFBc0IsWUFBWTtBQUNwRTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBLGVBQWUsUUFBUSxnQkFBZ0IsY0FBYztBQUNyRCxnQkFBZ0I7QUFDaEIsZ0JBQWdCLE1BQU0sT0FBTyxjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLDRGQUE0RixhQUFhO0FBQ3pHO0FBQ0Esa0JBQWtCLEVBQUU7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx5RkFBeUYsYUFBYTtBQUN0RztBQUNBLGtCQUFrQixFQUFFO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLDBCQUEwQixhQUFhO0FBQ3ZDO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0EsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQSxlQUFlLEVBQUU7QUFDakIsZ0JBQWdCLFFBQVEsdURBQXVEO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGdCQUFnQixRQUFRLHVEQUF1RDtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7QUFHRCxDQUFDOztBQUVELGlCQUFpQjtBQUNqQix1QkFBdUIsNEJBQTRCLDRCQUE0QixnQ0FBZ0MsZ0JBQWdCO0FBQy9ILEtBQUs7QUFDTDtBQUNBLGdCQUFnQjtBQUNoQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUMiLCJmaWxlIjoidmVuZG9yc35pdGVtX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWxbJ3Z1ZS1xcmlvdXNseSddID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgcXJpb3VzID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuLypcbiAqIFFSaW91cyB2NC4wLjJcbiAqIENvcHlyaWdodCAoQykgMjAxNyBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xufShjb21tb25qc0dsb2JhbCwgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qXG4gICAqIENvcHlyaWdodCAoQykgMjAxNyBBbGFzZGFpciBNZXJjZXIsICFuaW5qYVxuICAgKlxuICAgKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gICAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAgICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICAgKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gICAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICAgKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICAgKlxuICAgKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAgICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAgICpcbiAgICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICAgKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gICAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgICogU09GVFdBUkUuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBIGJhcmUtYm9uZXMgY29uc3RydWN0b3IgZm9yIHN1cnJvZ2F0ZSBwcm90b3R5cGUgc3dhcHBpbmcuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gZnVuY3Rpb24oKSB7fTtcbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIDxjb2RlPk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk8L2NvZGU+LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gPGNvZGU+QXJyYXkucHJvdG90eXBlLnNsaWNlPC9jb2RlPi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCB3aGljaCBpbmhlcml0cyB0aGUgZ2l2ZW4gPGNvZGU+cHJvdG90eXBlPC9jb2RlPi5cbiAgICpcbiAgICogT3B0aW9uYWxseSwgdGhlIGNyZWF0ZWQgb2JqZWN0IGNhbiBiZSBleHRlbmRlZCBmdXJ0aGVyIHdpdGggdGhlIHNwZWNpZmllZCA8Y29kZT5wcm9wZXJ0aWVzPC9jb2RlPi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3RvdHlwZSAtIHRoZSBwcm90b3R5cGUgdG8gYmUgaW5oZXJpdGVkIGJ5IHRoZSBjcmVhdGVkIG9iamVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXNdIC0gdGhlIG9wdGlvbmFsIHByb3BlcnRpZXMgdG8gYmUgZXh0ZW5kZWQgYnkgdGhlIGNyZWF0ZWQgb2JqZWN0XG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ld2x5IGNyZWF0ZWQgb2JqZWN0LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0KHByb3RvdHlwZSwgcHJvcGVydGllcykge1xuICAgIHZhciByZXN1bHQ7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICAgICAgcmVzdWx0ID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBleHRlbmRPYmplY3QodHJ1ZSwgcmVzdWx0LCBwcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuZHMgdGhlIGNvbnN0cnVjdG9yIHRvIHdoaWNoIHRoaXMgbWV0aG9kIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgPGNvZGU+cHJvdG90eXBlPC9jb2RlPiBhbmQvb3JcbiAgICogPGNvZGU+c3RhdGljczwvY29kZT4gcHJvdmlkZWQuXG4gICAqXG4gICAqIElmIDxjb2RlPm5hbWU8L2NvZGU+IGlzIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHVzZWQgYXMgdGhlIGNsYXNzIG5hbWUgYW5kIGNhbiBiZSBhY2Nlc3NlZCB2aWEgYSBzcGVjaWFsXG4gICAqIDxjb2RlPmNsYXNzXzwvY29kZT4gcHJvcGVydHkgb24gdGhlIGNoaWxkIGNvbnN0cnVjdG9yLCBvdGhlcndpc2UgdGhlIGNsYXNzIG5hbWUgb2YgdGhlIHN1cGVyIGNvbnN0cnVjdG9yIHdpbGwgYmUgdXNlZFxuICAgKiBpbnN0ZWFkLiBUaGUgY2xhc3MgbmFtZSBtYXkgYWxzbyBiZSB1c2VkIHN0cmluZyByZXByZXNlbnRhdGlvbiBmb3IgaW5zdGFuY2VzIG9mIHRoZSBjaGlsZCBjb25zdHJ1Y3RvciAodmlhXG4gICAqIDxjb2RlPnRvU3RyaW5nPC9jb2RlPiksIGJ1dCB0aGlzIGlzIG5vdCBhcHBsaWNhYmxlIHRvIHRoZSA8aT5saXRlPC9pPiB2ZXJzaW9uIG9mIE5ldmlzLlxuICAgKlxuICAgKiBJZiA8Y29kZT5jb25zdHJ1Y3RvcjwvY29kZT4gaXMgcHJvdmlkZWQsIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgY29uc3RydWN0b3IgZm9yIHRoZSBjaGlsZCwgb3RoZXJ3aXNlIGEgc2ltcGxlXG4gICAqIGNvbnN0cnVjdG9yIHdoaWNoIG9ubHkgY2FsbHMgdGhlIHN1cGVyIGNvbnN0cnVjdG9yIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuICAgKlxuICAgKiBUaGUgc3VwZXIgY29uc3RydWN0b3IgY2FuIGJlIGFjY2Vzc2VkIHZpYSBhIHNwZWNpYWwgPGNvZGU+c3VwZXJfPC9jb2RlPiBwcm9wZXJ0eSBvbiB0aGUgY2hpbGQgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZT10aGlzLmNsYXNzX10gLSB0aGUgY2xhc3MgbmFtZSB0byBiZSB1c2VkIGZvciB0aGUgY2hpbGQgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbnN0cnVjdG9yXSAtIHRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIGNoaWxkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvdG90eXBlXSAtIHRoZSBwcm90b3R5cGUgcHJvcGVydGllcyB0byBiZSBkZWZpbmVkIGZvciB0aGUgY2hpbGRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtzdGF0aWNzXSAtIHRoZSBzdGF0aWMgcHJvcGVydGllcyB0byBiZSBkZWZpbmVkIGZvciB0aGUgY2hpbGRcbiAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjaGlsZCA8Y29kZT5jb25zdHJ1Y3RvcjwvY29kZT4gcHJvdmlkZWQgb3IgdGhlIG9uZSBjcmVhdGVkIGlmIG5vbmUgd2FzIGdpdmVuLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBmdW5jdGlvbiBleHRlbmQobmFtZSwgY29uc3RydWN0b3IsIHByb3RvdHlwZSwgc3RhdGljcykge1xuICAgIHZhciBzdXBlckNvbnN0cnVjdG9yID0gdGhpcztcblxuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHN0YXRpY3MgPSBwcm90b3R5cGU7XG4gICAgICBwcm90b3R5cGUgPSBjb25zdHJ1Y3RvcjtcbiAgICAgIGNvbnN0cnVjdG9yID0gbmFtZTtcbiAgICAgIG5hbWUgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uc3RydWN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHN0YXRpY3MgPSBwcm90b3R5cGU7XG4gICAgICBwcm90b3R5cGUgPSBjb25zdHJ1Y3RvcjtcbiAgICAgIGNvbnN0cnVjdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBzdXBlckNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGV4dGVuZE9iamVjdChmYWxzZSwgY29uc3RydWN0b3IsIHN1cGVyQ29uc3RydWN0b3IsIHN0YXRpY3MpO1xuXG4gICAgY29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlT2JqZWN0KHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b3R5cGUpO1xuICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuXG4gICAgY29uc3RydWN0b3IuY2xhc3NfID0gbmFtZSB8fCBzdXBlckNvbnN0cnVjdG9yLmNsYXNzXztcbiAgICBjb25zdHJ1Y3Rvci5zdXBlcl8gPSBzdXBlckNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuZHMgdGhlIHNwZWNpZmllZCA8Y29kZT50YXJnZXQ8L2NvZGU+IG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIGluIGVhY2ggb2YgdGhlIDxjb2RlPnNvdXJjZXM8L2NvZGU+IHByb3ZpZGVkLlxuICAgKlxuICAgKiBpZiBhbnkgc291cmNlIGlzIDxjb2RlPm51bGw8L2NvZGU+IGl0IHdpbGwgYmUgaWdub3JlZC5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBvd24gLSA8Y29kZT50cnVlPC9jb2RlPiB0byBvbmx5IGNvcHkgPGI+b3duPC9iPiBwcm9wZXJ0aWVzIGZyb20gPGNvZGU+c291cmNlczwvY29kZT4gb250b1xuICAgKiA8Y29kZT50YXJnZXQ8L2NvZGU+OyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+XG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgLSB0aGUgdGFyZ2V0IG9iamVjdCB3aGljaCBzaG91bGQgYmUgZXh0ZW5kZWRcbiAgICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSAtIHRoZSBzb3VyY2Ugb2JqZWN0cyB3aG9zZSBwcm9wZXJ0aWVzIGFyZSB0byBiZSBjb3BpZWQgb250byA8Y29kZT50YXJnZXQ8L2NvZGU+XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBleHRlbmRPYmplY3Qob3duLCB0YXJnZXQsIHNvdXJjZXMpIHtcbiAgICBzb3VyY2VzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuXG4gICAgdmFyIHByb3BlcnR5O1xuICAgIHZhciBzb3VyY2U7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc291cmNlID0gc291cmNlc1tpXTtcblxuICAgICAgZm9yIChwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFvd24gfHwgaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIHByb3BlcnR5KSkge1xuICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGV4dGVuZF8xID0gZXh0ZW5kO1xuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBjbGFzcyBmcm9tIHdoaWNoIGFsbCBvdGhlcnMgc2hvdWxkIGV4dGVuZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIE5ldmlzKCkge31cbiAgTmV2aXMuY2xhc3NfID0gJ05ldmlzJztcbiAgTmV2aXMuc3VwZXJfID0gT2JqZWN0O1xuXG4gIC8qKlxuICAgKiBFeHRlbmRzIHRoZSBjb25zdHJ1Y3RvciB0byB3aGljaCB0aGlzIG1ldGhvZCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIDxjb2RlPnByb3RvdHlwZTwvY29kZT4gYW5kL29yXG4gICAqIDxjb2RlPnN0YXRpY3M8L2NvZGU+IHByb3ZpZGVkLlxuICAgKlxuICAgKiBJZiA8Y29kZT5uYW1lPC9jb2RlPiBpcyBwcm92aWRlZCwgaXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBjbGFzcyBuYW1lIGFuZCBjYW4gYmUgYWNjZXNzZWQgdmlhIGEgc3BlY2lhbFxuICAgKiA8Y29kZT5jbGFzc188L2NvZGU+IHByb3BlcnR5IG9uIHRoZSBjaGlsZCBjb25zdHJ1Y3Rvciwgb3RoZXJ3aXNlIHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBzdXBlciBjb25zdHJ1Y3RvciB3aWxsIGJlIHVzZWRcbiAgICogaW5zdGVhZC4gVGhlIGNsYXNzIG5hbWUgbWF5IGFsc28gYmUgdXNlZCBzdHJpbmcgcmVwcmVzZW50YXRpb24gZm9yIGluc3RhbmNlcyBvZiB0aGUgY2hpbGQgY29uc3RydWN0b3IgKHZpYVxuICAgKiA8Y29kZT50b1N0cmluZzwvY29kZT4pLCBidXQgdGhpcyBpcyBub3QgYXBwbGljYWJsZSB0byB0aGUgPGk+bGl0ZTwvaT4gdmVyc2lvbiBvZiBOZXZpcy5cbiAgICpcbiAgICogSWYgPGNvZGU+Y29uc3RydWN0b3I8L2NvZGU+IGlzIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHVzZWQgYXMgdGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgY2hpbGQsIG90aGVyd2lzZSBhIHNpbXBsZVxuICAgKiBjb25zdHJ1Y3RvciB3aGljaCBvbmx5IGNhbGxzIHRoZSBzdXBlciBjb25zdHJ1Y3RvciB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cbiAgICpcbiAgICogVGhlIHN1cGVyIGNvbnN0cnVjdG9yIGNhbiBiZSBhY2Nlc3NlZCB2aWEgYSBzcGVjaWFsIDxjb2RlPnN1cGVyXzwvY29kZT4gcHJvcGVydHkgb24gdGhlIGNoaWxkIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWU9dGhpcy5jbGFzc19dIC0gdGhlIGNsYXNzIG5hbWUgdG8gYmUgdXNlZCBmb3IgdGhlIGNoaWxkIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb25zdHJ1Y3Rvcl0gLSB0aGUgY29uc3RydWN0b3IgZm9yIHRoZSBjaGlsZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3Byb3RvdHlwZV0gLSB0aGUgcHJvdG90eXBlIHByb3BlcnRpZXMgdG8gYmUgZGVmaW5lZCBmb3IgdGhlIGNoaWxkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhdGljc10gLSB0aGUgc3RhdGljIHByb3BlcnRpZXMgdG8gYmUgZGVmaW5lZCBmb3IgdGhlIGNoaWxkXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY2hpbGQgPGNvZGU+Y29uc3RydWN0b3I8L2NvZGU+IHByb3ZpZGVkIG9yIHRoZSBvbmUgY3JlYXRlZCBpZiBub25lIHdhcyBnaXZlbi5cbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBOZXZpc1xuICAgKi9cbiAgTmV2aXMuZXh0ZW5kID0gZXh0ZW5kXzE7XG5cbiAgdmFyIG5ldmlzID0gTmV2aXM7XG5cbiAgdmFyIGxpdGUgPSBuZXZpcztcblxuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIHJlbmRlcmluZyBhIFFSIGNvZGUge0BsaW5rIEZyYW1lfSBvbiBhIHNwZWNpZmljIHR5cGUgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQSByZW5kZXJlciBtYXkgYmUgZGVwZW5kYW50IG9uIHRoZSByZW5kZXJpbmcgb2YgYW5vdGhlciBlbGVtZW50LCBzbyB0aGUgb3JkZXJpbmcgb2YgdGhlaXIgZXhlY3V0aW9uIGlzIGltcG9ydGFudC5cbiAgICpcbiAgICogVGhlIHJlbmRlcmluZyBvZiBhIGVsZW1lbnQgY2FuIGJlIGRlZmVycmVkIGJ5IGRpc2FibGluZyB0aGUgcmVuZGVyZXIgaW5pdGlhbGx5LCBob3dldmVyLCBhbnkgYXR0ZW1wdCBnZXQgdGhlIGVsZW1lbnRcbiAgICogZnJvbSB0aGUgcmVuZGVyZXIgd2lsbCByZXN1bHQgaW4gaXQgYmVpbmcgaW1tZWRpYXRlbHkgZW5hYmxlZCBhbmQgdGhlIGVsZW1lbnQgYmVpbmcgcmVuZGVyZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7UVJpb3VzfSBxcmlvdXMgLSB0aGUge0BsaW5rIFFSaW91c30gaW5zdGFuY2UgdG8gYmUgdXNlZFxuICAgKiBAcGFyYW0geyp9IGVsZW1lbnQgLSB0aGUgZWxlbWVudCBvbnRvIHdoaWNoIHRoZSBRUiBjb2RlIGlzIHRvIGJlIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuYWJsZWRdIC0gPGNvZGU+dHJ1ZTwvY29kZT4gdGhpcyB7QGxpbmsgUmVuZGVyZXJ9IGlzIGVuYWJsZWQ7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gICAqIEBwdWJsaWNcbiAgICogQGNsYXNzXG4gICAqIEBleHRlbmRzIE5ldmlzXG4gICAqL1xuICB2YXIgUmVuZGVyZXIgPSBsaXRlLmV4dGVuZChmdW5jdGlvbihxcmlvdXMsIGVsZW1lbnQsIGVuYWJsZWQpIHtcbiAgICAvKipcbiAgICAgKiBUaGUge0BsaW5rIFFSaW91c30gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUge1FSaW91c31cbiAgICAgKiBAbWVtYmVyb2YgUmVuZGVyZXIjXG4gICAgICovXG4gICAgdGhpcy5xcmlvdXMgPSBxcmlvdXM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCBvbnRvIHdoaWNoIHRoaXMge0BsaW5rIFJlbmRlcmVyfSBpcyByZW5kZXJpbmcgdGhlIFFSIGNvZGUuXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQG1lbWJlcm9mIFJlbmRlcmVyI1xuICAgICAqL1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5lbGVtZW50LnFyaW91cyA9IHFyaW91cztcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhpcyB7QGxpbmsgUmVuZGVyZXJ9IGlzIGVuYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIFJlbmRlcmVyI1xuICAgICAqL1xuICAgIHRoaXMuZW5hYmxlZCA9IEJvb2xlYW4oZW5hYmxlZCk7XG4gIH0sIHtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIHRoZSBzcGVjaWZpZWQgUVIgY29kZSA8Y29kZT5mcmFtZTwvY29kZT4gb24gdGhlIHVuZGVybHlpbmcgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEltcGxlbWVudGF0aW9ucyBvZiB7QGxpbmsgUmVuZGVyZXJ9IDxiPm11c3Q8L2I+IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHdpdGggdGhlaXIgb3duIHNwZWNpZmljIGxvZ2ljLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGcmFtZX0gZnJhbWUgLSB0aGUge0BsaW5rIEZyYW1lfSB0byBiZSBkcmF3blxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBtZW1iZXJvZiBSZW5kZXJlciNcbiAgICAgKi9cbiAgICBkcmF3OiBmdW5jdGlvbihmcmFtZSkge30sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IG9udG8gd2hpY2ggdGhpcyB7QGxpbmsgUmVuZGVyZXJ9IGlzIHJlbmRlcmluZyB0aGUgUVIgY29kZS5cbiAgICAgKlxuICAgICAqIElmIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGlsZSB0aGlzIHtAbGluayBSZW5kZXJlcn0gaXMgZGlzYWJsZWQsIGl0IHdpbGwgYmUgaW1tZWRpYXRlbHkgZW5hYmxlZCBhbmQgcmVuZGVyZWRcbiAgICAgKiBiZWZvcmUgdGhlIGVsZW1lbnQgaXMgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsqfSBUaGUgZWxlbWVudC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQG1lbWJlcm9mIFJlbmRlcmVyI1xuICAgICAqL1xuICAgIGdldEVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc2l6ZSAoaW4gcGl4ZWwgdW5pdHMpIHRvIHJlcHJlc2VudCBhbiBpbmRpdmlkdWFsIG1vZHVsZSB3aXRoaW4gdGhlIFFSIGNvZGUgYmFzZWQgb24gdGhlXG4gICAgICogPGNvZGU+ZnJhbWU8L2NvZGU+IHByb3ZpZGVkLlxuICAgICAqXG4gICAgICogQW55IGNvbmZpZ3VyZWQgcGFkZGluZyB3aWxsIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIHJldHVybmVkIHNpemUuXG4gICAgICpcbiAgICAgKiBUaGUgcmV0dXJuZWQgdmFsdWUgd2lsbCBiZSBhdCBsZWFzdCBvbmUsIGV2ZW4gaW4gY2FzZXMgd2hlcmUgdGhlIHNpemUgb2YgdGhlIFFSIGNvZGUgZG9lcyBub3QgZml0IGl0cyBjb250ZW50cy5cbiAgICAgKiBUaGlzIGlzIGRvbmUgc28gdGhhdCB0aGUgaW5ldml0YWJsZSBjbGlwcGluZyBpcyBoYW5kbGVkIG1vcmUgZ3JhY2VmdWxseSBzaW5jZSB0aGlzIHdheSBhdCBsZWFzdCBzb21ldGhpbmcgaXNcbiAgICAgKiBkaXNwbGF5ZWQgaW5zdGVhZCBvZiBqdXN0IGEgYmxhbmsgc3BhY2UgZmlsbGVkIGJ5IHRoZSBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGcmFtZX0gZnJhbWUgLSB0aGUge0BsaW5rIEZyYW1lfSBmcm9tIHdoaWNoIHRoZSBtb2R1bGUgc2l6ZSBpcyB0byBiZSBkZXJpdmVkXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgcGl4ZWwgc2l6ZSBmb3IgZWFjaCBtb2R1bGUgaW4gdGhlIFFSIGNvZGUgd2hpY2ggd2lsbCBiZSBubyBsZXNzIHRoYW4gb25lLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAbWVtYmVyb2YgUmVuZGVyZXIjXG4gICAgICovXG4gICAgZ2V0TW9kdWxlU2l6ZTogZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgIHZhciBxcmlvdXMgPSB0aGlzLnFyaW91cztcbiAgICAgIHZhciBwYWRkaW5nID0gcXJpb3VzLnBhZGRpbmcgfHwgMDtcbiAgICAgIHZhciBwaXhlbHMgPSBNYXRoLmZsb29yKChxcmlvdXMuc2l6ZSAtIChwYWRkaW5nICogMikpIC8gZnJhbWUud2lkdGgpO1xuXG4gICAgICByZXR1cm4gTWF0aC5tYXgoMSwgcGl4ZWxzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgb2Zmc2V0L3BhZGRpbmcgKGluIHBpeGVsIHVuaXRzKSB0byBiZSBpbnNlcnRlZCBiZWZvcmUgdGhlIFFSIGNvZGUgYmFzZWQgb24gdGhlIDxjb2RlPmZyYW1lPC9jb2RlPlxuICAgICAqIHByb3ZpZGVkLlxuICAgICAqXG4gICAgICogVGhlIHJldHVybmVkIHZhbHVlIHdpbGwgYmUgemVybyBpZiB0aGVyZSBpcyBubyBhdmFpbGFibGUgb2Zmc2V0IG9yIGlmIHRoZSBzaXplIG9mIHRoZSBRUiBjb2RlIGRvZXMgbm90IGZpdCBpdHNcbiAgICAgKiBjb250ZW50cy4gSXQgd2lsbCBuZXZlciBiZSBhIG5lZ2F0aXZlIHZhbHVlLiBUaGlzIGlzIGRvbmUgc28gdGhhdCB0aGUgaW5ldml0YWJsZSBjbGlwcGluZyBhcHBlYXJzIG1vcmUgbmF0dXJhbGx5XG4gICAgICogYW5kIGl0IGlzIG5vdCBjbGlwcGVkIGZyb20gYWxsIGRpcmVjdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZyYW1lfSBmcmFtZSAtIHRoZSB7QGxpbmsgRnJhbWV9IGZyb20gd2hpY2ggdGhlIG9mZnNldCBpcyB0byBiZSBkZXJpdmVkXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgcGl4ZWwgb2Zmc2V0IGZvciB0aGUgUVIgY29kZSB3aGljaCB3aWxsIGJlIG5vIGxlc3MgdGhhbiB6ZXJvLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAbWVtYmVyb2YgUmVuZGVyZXIjXG4gICAgICovXG4gICAgZ2V0T2Zmc2V0OiBmdW5jdGlvbihmcmFtZSkge1xuICAgICAgdmFyIHFyaW91cyA9IHRoaXMucXJpb3VzO1xuICAgICAgdmFyIHBhZGRpbmcgPSBxcmlvdXMucGFkZGluZztcblxuICAgICAgaWYgKHBhZGRpbmcgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcGFkZGluZztcbiAgICAgIH1cblxuICAgICAgdmFyIG1vZHVsZVNpemUgPSB0aGlzLmdldE1vZHVsZVNpemUoZnJhbWUpO1xuICAgICAgdmFyIG9mZnNldCA9IE1hdGguZmxvb3IoKHFyaW91cy5zaXplIC0gKG1vZHVsZVNpemUgKiBmcmFtZS53aWR0aCkpIC8gMik7XG5cbiAgICAgIHJldHVybiBNYXRoLm1heCgwLCBvZmZzZXQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgUVIgY29kZSBvbiB0aGUgdW5kZXJseWluZyBlbGVtZW50IGJhc2VkIG9uIHRoZSA8Y29kZT5mcmFtZTwvY29kZT4gcHJvdmlkZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZyYW1lfSBmcmFtZSAtIHRoZSB7QGxpbmsgRnJhbWV9IHRvIGJlIHJlbmRlcmVkXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHVibGljXG4gICAgICogQG1lbWJlcm9mIFJlbmRlcmVyI1xuICAgICAqL1xuICAgIHJlbmRlcjogZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmRyYXcoZnJhbWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHVuZGVybHlpbmcgZWxlbWVudCwgZWZmZWN0aXZlbHkgY2xlYXJpbmcgYW55IHByZXZpb3VzbHkgcmVuZGVyZWQgUVIgY29kZS5cbiAgICAgKlxuICAgICAqIEltcGxlbWVudGF0aW9ucyBvZiB7QGxpbmsgUmVuZGVyZXJ9IDxiPm11c3Q8L2I+IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHdpdGggdGhlaXIgb3duIHNwZWNpZmljIGxvZ2ljLlxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQG1lbWJlcm9mIFJlbmRlcmVyI1xuICAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbigpIHt9LFxuXG4gICAgLyoqXG4gICAgICogRW5zdXJlcyB0aGF0IHRoZSBzaXplIG9mIHRoZSB1bmRlcmx5aW5nIGVsZW1lbnQgbWF0Y2hlcyB0aGF0IGRlZmluZWQgb24gdGhlIGFzc29jaWF0ZWQge0BsaW5rIFFSaW91c30gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBJbXBsZW1lbnRhdGlvbnMgb2Yge0BsaW5rIFJlbmRlcmVyfSA8Yj5tdXN0PC9iPiBvdmVycmlkZSB0aGlzIG1ldGhvZCB3aXRoIHRoZWlyIG93biBzcGVjaWZpYyBsb2dpYy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBtZW1iZXJvZiBSZW5kZXJlciNcbiAgICAgKi9cbiAgICByZXNpemU6IGZ1bmN0aW9uKCkge31cblxuICB9KTtcblxuICB2YXIgUmVuZGVyZXJfMSA9IFJlbmRlcmVyO1xuXG4gIC8qKlxuICAgKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgUmVuZGVyZXJ9IGZvciB3b3JraW5nIHdpdGggPGNvZGU+Y2FudmFzPC9jb2RlPiBlbGVtZW50cy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAY2xhc3NcbiAgICogQGV4dGVuZHMgUmVuZGVyZXJcbiAgICovXG4gIHZhciBDYW52YXNSZW5kZXJlciA9IFJlbmRlcmVyXzEuZXh0ZW5kKHtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIGRyYXc6IGZ1bmN0aW9uKGZyYW1lKSB7XG4gICAgICB2YXIgaSwgajtcbiAgICAgIHZhciBxcmlvdXMgPSB0aGlzLnFyaW91cztcbiAgICAgIHZhciBtb2R1bGVTaXplID0gdGhpcy5nZXRNb2R1bGVTaXplKGZyYW1lKTtcbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLmdldE9mZnNldChmcmFtZSk7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMuZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHFyaW91cy5mb3JlZ3JvdW5kO1xuICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IHFyaW91cy5mb3JlZ3JvdW5kQWxwaGE7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBmcmFtZS53aWR0aDsgaSsrKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBmcmFtZS53aWR0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKGZyYW1lLmJ1ZmZlclsoaiAqIGZyYW1lLndpZHRoKSArIGldKSB7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KChtb2R1bGVTaXplICogaSkgKyBvZmZzZXQsIChtb2R1bGVTaXplICogaikgKyBvZmZzZXQsIG1vZHVsZVNpemUsIG1vZHVsZVNpemUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcXJpb3VzID0gdGhpcy5xcmlvdXM7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMuZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgdmFyIHNpemUgPSBxcmlvdXMuc2l6ZTtcblxuICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHFyaW91cy5iYWNrZ3JvdW5kO1xuICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IHFyaW91cy5iYWNrZ3JvdW5kQWxwaGE7XG4gICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHNpemUsIHNpemUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICByZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgIGVsZW1lbnQud2lkdGggPSBlbGVtZW50LmhlaWdodCA9IHRoaXMucXJpb3VzLnNpemU7XG4gICAgfVxuXG4gIH0pO1xuXG4gIHZhciBDYW52YXNSZW5kZXJlcl8xID0gQ2FudmFzUmVuZGVyZXI7XG5cbiAgLyogZXNsaW50IG5vLW11bHRpLXNwYWNlczogXCJvZmZcIiAqL1xuXG5cblxuICAvKipcbiAgICogQ29udGFpbnMgYWxpZ25tZW50IHBhdHRlcm4gaW5mb3JtYXRpb24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQGNsYXNzXG4gICAqIEBleHRlbmRzIE5ldmlzXG4gICAqL1xuICB2YXIgQWxpZ25tZW50ID0gbGl0ZS5leHRlbmQobnVsbCwge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFsaWdubWVudCBwYXR0ZXJuIGJsb2NrLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAdHlwZSB7bnVtYmVyW119XG4gICAgICogQG1lbWJlcm9mIEFsaWdubWVudFxuICAgICAqL1xuICAgIEJMT0NLOiBbXG4gICAgICAwLCAgMTEsIDE1LCAxOSwgMjMsIDI3LCAzMSxcbiAgICAgIDE2LCAxOCwgMjAsIDIyLCAyNCwgMjYsIDI4LCAyMCwgMjIsIDI0LCAyNCwgMjYsIDI4LCAyOCwgMjIsIDI0LCAyNCxcbiAgICAgIDI2LCAyNiwgMjgsIDI4LCAyNCwgMjQsIDI2LCAyNiwgMjYsIDI4LCAyOCwgMjQsIDI2LCAyNiwgMjYsIDI4LCAyOFxuICAgIF1cblxuICB9KTtcblxuICB2YXIgQWxpZ25tZW50XzEgPSBBbGlnbm1lbnQ7XG5cbiAgLyogZXNsaW50IG5vLW11bHRpLXNwYWNlczogXCJvZmZcIiAqL1xuXG5cblxuICAvKipcbiAgICogQ29udGFpbnMgZXJyb3IgY29ycmVjdGlvbiBpbmZvcm1hdGlvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAY2xhc3NcbiAgICogQGV4dGVuZHMgTmV2aXNcbiAgICovXG4gIHZhciBFcnJvckNvcnJlY3Rpb24gPSBsaXRlLmV4dGVuZChudWxsLCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXJyb3IgY29ycmVjdGlvbiBibG9ja3MuXG4gICAgICpcbiAgICAgKiBUaGVyZSBhcmUgZm91ciBlbGVtZW50cyBwZXIgdmVyc2lvbi4gVGhlIGZpcnN0IHR3byBpbmRpY2F0ZSB0aGUgbnVtYmVyIG9mIGJsb2NrcywgdGhlbiB0aGUgZGF0YSB3aWR0aCwgYW5kIGZpbmFsbHlcbiAgICAgKiB0aGUgRUNDIHdpZHRoLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAdHlwZSB7bnVtYmVyW119XG4gICAgICogQG1lbWJlcm9mIEVycm9yQ29ycmVjdGlvblxuICAgICAqL1xuICAgIEJMT0NLUzogW1xuICAgICAgMSwgIDAsICAxOSwgIDcsICAgICAxLCAgMCwgIDE2LCAgMTAsICAgIDEsICAwLCAgMTMsICAxMywgICAgMSwgIDAsICA5LCAgIDE3LFxuICAgICAgMSwgIDAsICAzNCwgIDEwLCAgICAxLCAgMCwgIDI4LCAgMTYsICAgIDEsICAwLCAgMjIsICAyMiwgICAgMSwgIDAsICAxNiwgIDI4LFxuICAgICAgMSwgIDAsICA1NSwgIDE1LCAgICAxLCAgMCwgIDQ0LCAgMjYsICAgIDIsICAwLCAgMTcsICAxOCwgICAgMiwgIDAsICAxMywgIDIyLFxuICAgICAgMSwgIDAsICA4MCwgIDIwLCAgICAyLCAgMCwgIDMyLCAgMTgsICAgIDIsICAwLCAgMjQsICAyNiwgICAgNCwgIDAsICA5LCAgIDE2LFxuICAgICAgMSwgIDAsICAxMDgsIDI2LCAgICAyLCAgMCwgIDQzLCAgMjQsICAgIDIsICAyLCAgMTUsICAxOCwgICAgMiwgIDIsICAxMSwgIDIyLFxuICAgICAgMiwgIDAsICA2OCwgIDE4LCAgICA0LCAgMCwgIDI3LCAgMTYsICAgIDQsICAwLCAgMTksICAyNCwgICAgNCwgIDAsICAxNSwgIDI4LFxuICAgICAgMiwgIDAsICA3OCwgIDIwLCAgICA0LCAgMCwgIDMxLCAgMTgsICAgIDIsICA0LCAgMTQsICAxOCwgICAgNCwgIDEsICAxMywgIDI2LFxuICAgICAgMiwgIDAsICA5NywgIDI0LCAgICAyLCAgMiwgIDM4LCAgMjIsICAgIDQsICAyLCAgMTgsICAyMiwgICAgNCwgIDIsICAxNCwgIDI2LFxuICAgICAgMiwgIDAsICAxMTYsIDMwLCAgICAzLCAgMiwgIDM2LCAgMjIsICAgIDQsICA0LCAgMTYsICAyMCwgICAgNCwgIDQsICAxMiwgIDI0LFxuICAgICAgMiwgIDIsICA2OCwgIDE4LCAgICA0LCAgMSwgIDQzLCAgMjYsICAgIDYsICAyLCAgMTksICAyNCwgICAgNiwgIDIsICAxNSwgIDI4LFxuICAgICAgNCwgIDAsICA4MSwgIDIwLCAgICAxLCAgNCwgIDUwLCAgMzAsICAgIDQsICA0LCAgMjIsICAyOCwgICAgMywgIDgsICAxMiwgIDI0LFxuICAgICAgMiwgIDIsICA5MiwgIDI0LCAgICA2LCAgMiwgIDM2LCAgMjIsICAgIDQsICA2LCAgMjAsICAyNiwgICAgNywgIDQsICAxNCwgIDI4LFxuICAgICAgNCwgIDAsICAxMDcsIDI2LCAgICA4LCAgMSwgIDM3LCAgMjIsICAgIDgsICA0LCAgMjAsICAyNCwgICAgMTIsIDQsICAxMSwgIDIyLFxuICAgICAgMywgIDEsICAxMTUsIDMwLCAgICA0LCAgNSwgIDQwLCAgMjQsICAgIDExLCA1LCAgMTYsICAyMCwgICAgMTEsIDUsICAxMiwgIDI0LFxuICAgICAgNSwgIDEsICA4NywgIDIyLCAgICA1LCAgNSwgIDQxLCAgMjQsICAgIDUsICA3LCAgMjQsICAzMCwgICAgMTEsIDcsICAxMiwgIDI0LFxuICAgICAgNSwgIDEsICA5OCwgIDI0LCAgICA3LCAgMywgIDQ1LCAgMjgsICAgIDE1LCAyLCAgMTksICAyNCwgICAgMywgIDEzLCAxNSwgIDMwLFxuICAgICAgMSwgIDUsICAxMDcsIDI4LCAgICAxMCwgMSwgIDQ2LCAgMjgsICAgIDEsICAxNSwgMjIsICAyOCwgICAgMiwgIDE3LCAxNCwgIDI4LFxuICAgICAgNSwgIDEsICAxMjAsIDMwLCAgICA5LCAgNCwgIDQzLCAgMjYsICAgIDE3LCAxLCAgMjIsICAyOCwgICAgMiwgIDE5LCAxNCwgIDI4LFxuICAgICAgMywgIDQsICAxMTMsIDI4LCAgICAzLCAgMTEsIDQ0LCAgMjYsICAgIDE3LCA0LCAgMjEsICAyNiwgICAgOSwgIDE2LCAxMywgIDI2LFxuICAgICAgMywgIDUsICAxMDcsIDI4LCAgICAzLCAgMTMsIDQxLCAgMjYsICAgIDE1LCA1LCAgMjQsICAzMCwgICAgMTUsIDEwLCAxNSwgIDI4LFxuICAgICAgNCwgIDQsICAxMTYsIDI4LCAgICAxNywgMCwgIDQyLCAgMjYsICAgIDE3LCA2LCAgMjIsICAyOCwgICAgMTksIDYsICAxNiwgIDMwLFxuICAgICAgMiwgIDcsICAxMTEsIDI4LCAgICAxNywgMCwgIDQ2LCAgMjgsICAgIDcsICAxNiwgMjQsICAzMCwgICAgMzQsIDAsICAxMywgIDI0LFxuICAgICAgNCwgIDUsICAxMjEsIDMwLCAgICA0LCAgMTQsIDQ3LCAgMjgsICAgIDExLCAxNCwgMjQsICAzMCwgICAgMTYsIDE0LCAxNSwgIDMwLFxuICAgICAgNiwgIDQsICAxMTcsIDMwLCAgICA2LCAgMTQsIDQ1LCAgMjgsICAgIDExLCAxNiwgMjQsICAzMCwgICAgMzAsIDIsICAxNiwgIDMwLFxuICAgICAgOCwgIDQsICAxMDYsIDI2LCAgICA4LCAgMTMsIDQ3LCAgMjgsICAgIDcsICAyMiwgMjQsICAzMCwgICAgMjIsIDEzLCAxNSwgIDMwLFxuICAgICAgMTAsIDIsICAxMTQsIDI4LCAgICAxOSwgNCwgIDQ2LCAgMjgsICAgIDI4LCA2LCAgMjIsICAyOCwgICAgMzMsIDQsICAxNiwgIDMwLFxuICAgICAgOCwgIDQsICAxMjIsIDMwLCAgICAyMiwgMywgIDQ1LCAgMjgsICAgIDgsICAyNiwgMjMsICAzMCwgICAgMTIsIDI4LCAxNSwgIDMwLFxuICAgICAgMywgIDEwLCAxMTcsIDMwLCAgICAzLCAgMjMsIDQ1LCAgMjgsICAgIDQsICAzMSwgMjQsICAzMCwgICAgMTEsIDMxLCAxNSwgIDMwLFxuICAgICAgNywgIDcsICAxMTYsIDMwLCAgICAyMSwgNywgIDQ1LCAgMjgsICAgIDEsICAzNywgMjMsICAzMCwgICAgMTksIDI2LCAxNSwgIDMwLFxuICAgICAgNSwgIDEwLCAxMTUsIDMwLCAgICAxOSwgMTAsIDQ3LCAgMjgsICAgIDE1LCAyNSwgMjQsICAzMCwgICAgMjMsIDI1LCAxNSwgIDMwLFxuICAgICAgMTMsIDMsICAxMTUsIDMwLCAgICAyLCAgMjksIDQ2LCAgMjgsICAgIDQyLCAxLCAgMjQsICAzMCwgICAgMjMsIDI4LCAxNSwgIDMwLFxuICAgICAgMTcsIDAsICAxMTUsIDMwLCAgICAxMCwgMjMsIDQ2LCAgMjgsICAgIDEwLCAzNSwgMjQsICAzMCwgICAgMTksIDM1LCAxNSwgIDMwLFxuICAgICAgMTcsIDEsICAxMTUsIDMwLCAgICAxNCwgMjEsIDQ2LCAgMjgsICAgIDI5LCAxOSwgMjQsICAzMCwgICAgMTEsIDQ2LCAxNSwgIDMwLFxuICAgICAgMTMsIDYsICAxMTUsIDMwLCAgICAxNCwgMjMsIDQ2LCAgMjgsICAgIDQ0LCA3LCAgMjQsICAzMCwgICAgNTksIDEsICAxNiwgIDMwLFxuICAgICAgMTIsIDcsICAxMjEsIDMwLCAgICAxMiwgMjYsIDQ3LCAgMjgsICAgIDM5LCAxNCwgMjQsICAzMCwgICAgMjIsIDQxLCAxNSwgIDMwLFxuICAgICAgNiwgIDE0LCAxMjEsIDMwLCAgICA2LCAgMzQsIDQ3LCAgMjgsICAgIDQ2LCAxMCwgMjQsICAzMCwgICAgMiwgIDY0LCAxNSwgIDMwLFxuICAgICAgMTcsIDQsICAxMjIsIDMwLCAgICAyOSwgMTQsIDQ2LCAgMjgsICAgIDQ5LCAxMCwgMjQsICAzMCwgICAgMjQsIDQ2LCAxNSwgIDMwLFxuICAgICAgNCwgIDE4LCAxMjIsIDMwLCAgICAxMywgMzIsIDQ2LCAgMjgsICAgIDQ4LCAxNCwgMjQsICAzMCwgICAgNDIsIDMyLCAxNSwgIDMwLFxuICAgICAgMjAsIDQsICAxMTcsIDMwLCAgICA0MCwgNywgIDQ3LCAgMjgsICAgIDQzLCAyMiwgMjQsICAzMCwgICAgMTAsIDY3LCAxNSwgIDMwLFxuICAgICAgMTksIDYsICAxMTgsIDMwLCAgICAxOCwgMzEsIDQ3LCAgMjgsICAgIDM0LCAzNCwgMjQsICAzMCwgICAgMjAsIDYxLCAxNSwgIDMwXG4gICAgXSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaW5hbCBmb3JtYXQgYml0cyB3aXRoIG1hc2sgKGxldmVsIDw8IDMgfCBtYXNrKS5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHR5cGUge251bWJlcltdfVxuICAgICAqIEBtZW1iZXJvZiBFcnJvckNvcnJlY3Rpb25cbiAgICAgKi9cbiAgICBGSU5BTF9GT1JNQVQ6IFtcbiAgICAgIC8vIExcbiAgICAgIDB4NzdjNCwgMHg3MmYzLCAweDdkYWEsIDB4Nzg5ZCwgMHg2NjJmLCAweDYzMTgsIDB4NmM0MSwgMHg2OTc2LFxuICAgICAgLy8gTVxuICAgICAgMHg1NDEyLCAweDUxMjUsIDB4NWU3YywgMHg1YjRiLCAweDQ1ZjksIDB4NDBjZSwgMHg0Zjk3LCAweDRhYTAsXG4gICAgICAvLyBRXG4gICAgICAweDM1NWYsIDB4MzA2OCwgMHgzZjMxLCAweDNhMDYsIDB4MjRiNCwgMHgyMTgzLCAweDJlZGEsIDB4MmJlZCxcbiAgICAgIC8vIEhcbiAgICAgIDB4MTY4OSwgMHgxM2JlLCAweDFjZTcsIDB4MTlkMCwgMHgwNzYyLCAweDAyNTUsIDB4MGQwYywgMHgwODNiXG4gICAgXSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFwIG9mIGh1bWFuLXJlYWRhYmxlIEVDQyBsZXZlbHMuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHN0YXRpY1xuICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgbnVtYmVyPn1cbiAgICAgKiBAbWVtYmVyb2YgRXJyb3JDb3JyZWN0aW9uXG4gICAgICovXG4gICAgTEVWRUxTOiB7XG4gICAgICBMOiAxLFxuICAgICAgTTogMixcbiAgICAgIFE6IDMsXG4gICAgICBIOiA0XG4gICAgfVxuXG4gIH0pO1xuXG4gIHZhciBFcnJvckNvcnJlY3Rpb25fMSA9IEVycm9yQ29ycmVjdGlvbjtcblxuICAvKipcbiAgICogQ29udGFpbnMgR2Fsb2lzIGZpZWxkIGluZm9ybWF0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBjbGFzc1xuICAgKiBAZXh0ZW5kcyBOZXZpc1xuICAgKi9cbiAgdmFyIEdhbG9pcyA9IGxpdGUuZXh0ZW5kKG51bGwsIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBHYWxvaXMgZmllbGQgZXhwb25lbnQgdGFibGUuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHN0YXRpY1xuICAgICAqIEB0eXBlIHtudW1iZXJbXX1cbiAgICAgKiBAbWVtYmVyb2YgR2Fsb2lzXG4gICAgICovXG4gICAgRVhQT05FTlQ6IFtcbiAgICAgIDB4MDEsIDB4MDIsIDB4MDQsIDB4MDgsIDB4MTAsIDB4MjAsIDB4NDAsIDB4ODAsIDB4MWQsIDB4M2EsIDB4NzQsIDB4ZTgsIDB4Y2QsIDB4ODcsIDB4MTMsIDB4MjYsXG4gICAgICAweDRjLCAweDk4LCAweDJkLCAweDVhLCAweGI0LCAweDc1LCAweGVhLCAweGM5LCAweDhmLCAweDAzLCAweDA2LCAweDBjLCAweDE4LCAweDMwLCAweDYwLCAweGMwLFxuICAgICAgMHg5ZCwgMHgyNywgMHg0ZSwgMHg5YywgMHgyNSwgMHg0YSwgMHg5NCwgMHgzNSwgMHg2YSwgMHhkNCwgMHhiNSwgMHg3NywgMHhlZSwgMHhjMSwgMHg5ZiwgMHgyMyxcbiAgICAgIDB4NDYsIDB4OGMsIDB4MDUsIDB4MGEsIDB4MTQsIDB4MjgsIDB4NTAsIDB4YTAsIDB4NWQsIDB4YmEsIDB4NjksIDB4ZDIsIDB4YjksIDB4NmYsIDB4ZGUsIDB4YTEsXG4gICAgICAweDVmLCAweGJlLCAweDYxLCAweGMyLCAweDk5LCAweDJmLCAweDVlLCAweGJjLCAweDY1LCAweGNhLCAweDg5LCAweDBmLCAweDFlLCAweDNjLCAweDc4LCAweGYwLFxuICAgICAgMHhmZCwgMHhlNywgMHhkMywgMHhiYiwgMHg2YiwgMHhkNiwgMHhiMSwgMHg3ZiwgMHhmZSwgMHhlMSwgMHhkZiwgMHhhMywgMHg1YiwgMHhiNiwgMHg3MSwgMHhlMixcbiAgICAgIDB4ZDksIDB4YWYsIDB4NDMsIDB4ODYsIDB4MTEsIDB4MjIsIDB4NDQsIDB4ODgsIDB4MGQsIDB4MWEsIDB4MzQsIDB4NjgsIDB4ZDAsIDB4YmQsIDB4NjcsIDB4Y2UsXG4gICAgICAweDgxLCAweDFmLCAweDNlLCAweDdjLCAweGY4LCAweGVkLCAweGM3LCAweDkzLCAweDNiLCAweDc2LCAweGVjLCAweGM1LCAweDk3LCAweDMzLCAweDY2LCAweGNjLFxuICAgICAgMHg4NSwgMHgxNywgMHgyZSwgMHg1YywgMHhiOCwgMHg2ZCwgMHhkYSwgMHhhOSwgMHg0ZiwgMHg5ZSwgMHgyMSwgMHg0MiwgMHg4NCwgMHgxNSwgMHgyYSwgMHg1NCxcbiAgICAgIDB4YTgsIDB4NGQsIDB4OWEsIDB4MjksIDB4NTIsIDB4YTQsIDB4NTUsIDB4YWEsIDB4NDksIDB4OTIsIDB4MzksIDB4NzIsIDB4ZTQsIDB4ZDUsIDB4YjcsIDB4NzMsXG4gICAgICAweGU2LCAweGQxLCAweGJmLCAweDYzLCAweGM2LCAweDkxLCAweDNmLCAweDdlLCAweGZjLCAweGU1LCAweGQ3LCAweGIzLCAweDdiLCAweGY2LCAweGYxLCAweGZmLFxuICAgICAgMHhlMywgMHhkYiwgMHhhYiwgMHg0YiwgMHg5NiwgMHgzMSwgMHg2MiwgMHhjNCwgMHg5NSwgMHgzNywgMHg2ZSwgMHhkYywgMHhhNSwgMHg1NywgMHhhZSwgMHg0MSxcbiAgICAgIDB4ODIsIDB4MTksIDB4MzIsIDB4NjQsIDB4YzgsIDB4OGQsIDB4MDcsIDB4MGUsIDB4MWMsIDB4MzgsIDB4NzAsIDB4ZTAsIDB4ZGQsIDB4YTcsIDB4NTMsIDB4YTYsXG4gICAgICAweDUxLCAweGEyLCAweDU5LCAweGIyLCAweDc5LCAweGYyLCAweGY5LCAweGVmLCAweGMzLCAweDliLCAweDJiLCAweDU2LCAweGFjLCAweDQ1LCAweDhhLCAweDA5LFxuICAgICAgMHgxMiwgMHgyNCwgMHg0OCwgMHg5MCwgMHgzZCwgMHg3YSwgMHhmNCwgMHhmNSwgMHhmNywgMHhmMywgMHhmYiwgMHhlYiwgMHhjYiwgMHg4YiwgMHgwYiwgMHgxNixcbiAgICAgIDB4MmMsIDB4NTgsIDB4YjAsIDB4N2QsIDB4ZmEsIDB4ZTksIDB4Y2YsIDB4ODMsIDB4MWIsIDB4MzYsIDB4NmMsIDB4ZDgsIDB4YWQsIDB4NDcsIDB4OGUsIDB4MDBcbiAgICBdLFxuXG4gICAgLyoqXG4gICAgICogVGhlIEdhbG9pcyBmaWVsZCBsb2cgdGFibGUuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHN0YXRpY1xuICAgICAqIEB0eXBlIHtudW1iZXJbXX1cbiAgICAgKiBAbWVtYmVyb2YgR2Fsb2lzXG4gICAgICovXG4gICAgTE9HOiBbXG4gICAgICAweGZmLCAweDAwLCAweDAxLCAweDE5LCAweDAyLCAweDMyLCAweDFhLCAweGM2LCAweDAzLCAweGRmLCAweDMzLCAweGVlLCAweDFiLCAweDY4LCAweGM3LCAweDRiLFxuICAgICAgMHgwNCwgMHg2NCwgMHhlMCwgMHgwZSwgMHgzNCwgMHg4ZCwgMHhlZiwgMHg4MSwgMHgxYywgMHhjMSwgMHg2OSwgMHhmOCwgMHhjOCwgMHgwOCwgMHg0YywgMHg3MSxcbiAgICAgIDB4MDUsIDB4OGEsIDB4NjUsIDB4MmYsIDB4ZTEsIDB4MjQsIDB4MGYsIDB4MjEsIDB4MzUsIDB4OTMsIDB4OGUsIDB4ZGEsIDB4ZjAsIDB4MTIsIDB4ODIsIDB4NDUsXG4gICAgICAweDFkLCAweGI1LCAweGMyLCAweDdkLCAweDZhLCAweDI3LCAweGY5LCAweGI5LCAweGM5LCAweDlhLCAweDA5LCAweDc4LCAweDRkLCAweGU0LCAweDcyLCAweGE2LFxuICAgICAgMHgwNiwgMHhiZiwgMHg4YiwgMHg2MiwgMHg2NiwgMHhkZCwgMHgzMCwgMHhmZCwgMHhlMiwgMHg5OCwgMHgyNSwgMHhiMywgMHgxMCwgMHg5MSwgMHgyMiwgMHg4OCxcbiAgICAgIDB4MzYsIDB4ZDAsIDB4OTQsIDB4Y2UsIDB4OGYsIDB4OTYsIDB4ZGIsIDB4YmQsIDB4ZjEsIDB4ZDIsIDB4MTMsIDB4NWMsIDB4ODMsIDB4MzgsIDB4NDYsIDB4NDAsXG4gICAgICAweDFlLCAweDQyLCAweGI2LCAweGEzLCAweGMzLCAweDQ4LCAweDdlLCAweDZlLCAweDZiLCAweDNhLCAweDI4LCAweDU0LCAweGZhLCAweDg1LCAweGJhLCAweDNkLFxuICAgICAgMHhjYSwgMHg1ZSwgMHg5YiwgMHg5ZiwgMHgwYSwgMHgxNSwgMHg3OSwgMHgyYiwgMHg0ZSwgMHhkNCwgMHhlNSwgMHhhYywgMHg3MywgMHhmMywgMHhhNywgMHg1NyxcbiAgICAgIDB4MDcsIDB4NzAsIDB4YzAsIDB4ZjcsIDB4OGMsIDB4ODAsIDB4NjMsIDB4MGQsIDB4NjcsIDB4NGEsIDB4ZGUsIDB4ZWQsIDB4MzEsIDB4YzUsIDB4ZmUsIDB4MTgsXG4gICAgICAweGUzLCAweGE1LCAweDk5LCAweDc3LCAweDI2LCAweGI4LCAweGI0LCAweDdjLCAweDExLCAweDQ0LCAweDkyLCAweGQ5LCAweDIzLCAweDIwLCAweDg5LCAweDJlLFxuICAgICAgMHgzNywgMHgzZiwgMHhkMSwgMHg1YiwgMHg5NSwgMHhiYywgMHhjZiwgMHhjZCwgMHg5MCwgMHg4NywgMHg5NywgMHhiMiwgMHhkYywgMHhmYywgMHhiZSwgMHg2MSxcbiAgICAgIDB4ZjIsIDB4NTYsIDB4ZDMsIDB4YWIsIDB4MTQsIDB4MmEsIDB4NWQsIDB4OWUsIDB4ODQsIDB4M2MsIDB4MzksIDB4NTMsIDB4NDcsIDB4NmQsIDB4NDEsIDB4YTIsXG4gICAgICAweDFmLCAweDJkLCAweDQzLCAweGQ4LCAweGI3LCAweDdiLCAweGE0LCAweDc2LCAweGM0LCAweDE3LCAweDQ5LCAweGVjLCAweDdmLCAweDBjLCAweDZmLCAweGY2LFxuICAgICAgMHg2YywgMHhhMSwgMHgzYiwgMHg1MiwgMHgyOSwgMHg5ZCwgMHg1NSwgMHhhYSwgMHhmYiwgMHg2MCwgMHg4NiwgMHhiMSwgMHhiYiwgMHhjYywgMHgzZSwgMHg1YSxcbiAgICAgIDB4Y2IsIDB4NTksIDB4NWYsIDB4YjAsIDB4OWMsIDB4YTksIDB4YTAsIDB4NTEsIDB4MGIsIDB4ZjUsIDB4MTYsIDB4ZWIsIDB4N2EsIDB4NzUsIDB4MmMsIDB4ZDcsXG4gICAgICAweDRmLCAweGFlLCAweGQ1LCAweGU5LCAweGU2LCAweGU3LCAweGFkLCAweGU4LCAweDc0LCAweGQ2LCAweGY0LCAweGVhLCAweGE4LCAweDUwLCAweDU4LCAweGFmXG4gICAgXVxuXG4gIH0pO1xuXG4gIHZhciBHYWxvaXNfMSA9IEdhbG9pcztcblxuICAvKipcbiAgICogQ29udGFpbnMgdmVyc2lvbiBwYXR0ZXJuIGluZm9ybWF0aW9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBjbGFzc1xuICAgKiBAZXh0ZW5kcyBOZXZpc1xuICAgKi9cbiAgdmFyIFZlcnNpb24gPSBsaXRlLmV4dGVuZChudWxsLCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBwYXR0ZXJuIGJsb2NrLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAdHlwZSB7bnVtYmVyW119XG4gICAgICogQG1lbWJlcm9mIFZlcnNpb25cbiAgICAgKi9cbiAgICBCTE9DSzogW1xuICAgICAgMHhjOTQsIDB4NWJjLCAweGE5OSwgMHg0ZDMsIDB4YmY2LCAweDc2MiwgMHg4NDcsIDB4NjBkLCAweDkyOCwgMHhiNzgsIDB4NDVkLCAweGExNywgMHg1MzIsXG4gICAgICAweDlhNiwgMHg2ODMsIDB4OGM5LCAweDdlYywgMHhlYzQsIDB4MWUxLCAweGZhYiwgMHgwOGUsIDB4YzFhLCAweDMzZiwgMHhkNzUsIDB4MjUwLCAweDlkNSxcbiAgICAgIDB4NmYwLCAweDhiYSwgMHg3OWYsIDB4YjBiLCAweDQyZSwgMHhhNjQsIDB4NTQxLCAweGM2OVxuICAgIF1cblxuICB9KTtcblxuICB2YXIgVmVyc2lvbl8xID0gVmVyc2lvbjtcblxuICAvKipcbiAgICogR2VuZXJhdGVzIGluZm9ybWF0aW9uIGZvciBhIFFSIGNvZGUgZnJhbWUgYmFzZWQgb24gYSBzcGVjaWZpYyB2YWx1ZSB0byBiZSBlbmNvZGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYW1lfk9wdGlvbnN9IG9wdGlvbnMgLSB0aGUgb3B0aW9ucyB0byBiZSB1c2VkXG4gICAqIEBwdWJsaWNcbiAgICogQGNsYXNzXG4gICAqIEBleHRlbmRzIE5ldmlzXG4gICAqL1xuICB2YXIgRnJhbWUgPSBsaXRlLmV4dGVuZChmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGRhdGFCbG9jaywgZWNjQmxvY2ssIGluZGV4LCBuZWNjQmxvY2sxLCBuZWNjQmxvY2syO1xuICAgIHZhciB2YWx1ZUxlbmd0aCA9IG9wdGlvbnMudmFsdWUubGVuZ3RoO1xuXG4gICAgdGhpcy5fYmFkbmVzcyA9IFtdO1xuICAgIHRoaXMuX2xldmVsID0gRXJyb3JDb3JyZWN0aW9uXzEuTEVWRUxTW29wdGlvbnMubGV2ZWxdO1xuICAgIHRoaXMuX3BvbHlub21pYWwgPSBbXTtcbiAgICB0aGlzLl92YWx1ZSA9IG9wdGlvbnMudmFsdWU7XG4gICAgdGhpcy5fdmVyc2lvbiA9IDA7XG4gICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gW107XG5cbiAgICB3aGlsZSAodGhpcy5fdmVyc2lvbiA8IDQwKSB7XG4gICAgICB0aGlzLl92ZXJzaW9uKys7XG5cbiAgICAgIGluZGV4ID0gKCh0aGlzLl9sZXZlbCAtIDEpICogNCkgKyAoKHRoaXMuX3ZlcnNpb24gLSAxKSAqIDE2KTtcblxuICAgICAgbmVjY0Jsb2NrMSA9IEVycm9yQ29ycmVjdGlvbl8xLkJMT0NLU1tpbmRleCsrXTtcbiAgICAgIG5lY2NCbG9jazIgPSBFcnJvckNvcnJlY3Rpb25fMS5CTE9DS1NbaW5kZXgrK107XG4gICAgICBkYXRhQmxvY2sgPSBFcnJvckNvcnJlY3Rpb25fMS5CTE9DS1NbaW5kZXgrK107XG4gICAgICBlY2NCbG9jayA9IEVycm9yQ29ycmVjdGlvbl8xLkJMT0NLU1tpbmRleF07XG5cbiAgICAgIGluZGV4ID0gKGRhdGFCbG9jayAqIChuZWNjQmxvY2sxICsgbmVjY0Jsb2NrMikpICsgbmVjY0Jsb2NrMiAtIDMgKyAodGhpcy5fdmVyc2lvbiA8PSA5KTtcblxuICAgICAgaWYgKHZhbHVlTGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2RhdGFCbG9jayA9IGRhdGFCbG9jaztcbiAgICB0aGlzLl9lY2NCbG9jayA9IGVjY0Jsb2NrO1xuICAgIHRoaXMuX25lY2NCbG9jazEgPSBuZWNjQmxvY2sxO1xuICAgIHRoaXMuX25lY2NCbG9jazIgPSBuZWNjQmxvY2syO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgd2lkdGggaXMgYmFzZWQgb24gdmVyc2lvbi5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBGcmFtZSNcbiAgICAgKi9cbiAgICAvLyBGSVhNRTogRW5zdXJlIHRoYXQgaXQgZml0cyBpbnN0ZWFkIG9mIGJlaW5nIHRydW5jYXRlZC5cbiAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoID0gMTcgKyAoNCAqIHRoaXMuX3ZlcnNpb24pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGltYWdlIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAdHlwZSB7bnVtYmVyW119XG4gICAgICogQG1lbWJlcm9mIEZyYW1lI1xuICAgICAqL1xuICAgIHRoaXMuYnVmZmVyID0gRnJhbWUuX2NyZWF0ZUFycmF5KHdpZHRoICogd2lkdGgpO1xuXG4gICAgdGhpcy5fZWNjID0gRnJhbWUuX2NyZWF0ZUFycmF5KGRhdGFCbG9jayArICgoZGF0YUJsb2NrICsgZWNjQmxvY2spICogKG5lY2NCbG9jazEgKyBuZWNjQmxvY2syKSkgKyBuZWNjQmxvY2syKTtcbiAgICB0aGlzLl9tYXNrID0gRnJhbWUuX2NyZWF0ZUFycmF5KCgod2lkdGggKiAod2lkdGggKyAxKSkgKyAxKSAvIDIpO1xuXG4gICAgdGhpcy5faW5zZXJ0RmluZGVycygpO1xuICAgIHRoaXMuX2luc2VydEFsaWdubWVudHMoKTtcblxuICAgIC8vIEluc2VydCBzaW5nbGUgZm9yZWdyb3VuZCBjZWxsLlxuICAgIHRoaXMuYnVmZmVyWzggKyAod2lkdGggKiAod2lkdGggLSA4KSldID0gMTtcblxuICAgIHRoaXMuX2luc2VydFRpbWluZ0dhcCgpO1xuICAgIHRoaXMuX3JldmVyc2VNYXNrKCk7XG4gICAgdGhpcy5faW5zZXJ0VGltaW5nUm93QW5kQ29sdW1uKCk7XG4gICAgdGhpcy5faW5zZXJ0VmVyc2lvbigpO1xuICAgIHRoaXMuX3N5bmNNYXNrKCk7XG4gICAgdGhpcy5fY29udmVydEJpdFN0cmVhbSh2YWx1ZUxlbmd0aCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUG9seW5vbWlhbCgpO1xuICAgIHRoaXMuX2FwcGVuZEVjY1RvRGF0YSgpO1xuICAgIHRoaXMuX2ludGVybGVhdmVCbG9ja3MoKTtcbiAgICB0aGlzLl9wYWNrKCk7XG4gICAgdGhpcy5fZmluaXNoKCk7XG4gIH0sIHtcblxuICAgIF9hZGRBbGlnbm1lbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHZhciBpO1xuICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcblxuICAgICAgYnVmZmVyW3ggKyAod2lkdGggKiB5KV0gPSAxO1xuXG4gICAgICBmb3IgKGkgPSAtMjsgaSA8IDI7IGkrKykge1xuICAgICAgICBidWZmZXJbeCArIGkgKyAod2lkdGggKiAoeSAtIDIpKV0gPSAxO1xuICAgICAgICBidWZmZXJbeCAtIDIgKyAod2lkdGggKiAoeSArIGkgKyAxKSldID0gMTtcbiAgICAgICAgYnVmZmVyW3ggKyAyICsgKHdpZHRoICogKHkgKyBpKSldID0gMTtcbiAgICAgICAgYnVmZmVyW3ggKyBpICsgMSArICh3aWR0aCAqICh5ICsgMikpXSA9IDE7XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgdGhpcy5fc2V0TWFzayh4IC0gMSwgeSArIGkpO1xuICAgICAgICB0aGlzLl9zZXRNYXNrKHggKyAxLCB5IC0gaSk7XG4gICAgICAgIHRoaXMuX3NldE1hc2soeCAtIGksIHkgLSAxKTtcbiAgICAgICAgdGhpcy5fc2V0TWFzayh4ICsgaSwgeSArIDEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfYXBwZW5kRGF0YTogZnVuY3Rpb24oZGF0YSwgZGF0YUxlbmd0aCwgZWNjLCBlY2NMZW5ndGgpIHtcbiAgICAgIHZhciBiaXQsIGksIGo7XG4gICAgICB2YXIgcG9seW5vbWlhbCA9IHRoaXMuX3BvbHlub21pYWw7XG4gICAgICB2YXIgc3RyaW5nQnVmZmVyID0gdGhpcy5fc3RyaW5nQnVmZmVyO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZWNjTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RyaW5nQnVmZmVyW2VjYyArIGldID0gMDtcbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGFMZW5ndGg7IGkrKykge1xuICAgICAgICBiaXQgPSBHYWxvaXNfMS5MT0dbc3RyaW5nQnVmZmVyW2RhdGEgKyBpXSBeIHN0cmluZ0J1ZmZlcltlY2NdXTtcblxuICAgICAgICBpZiAoYml0ICE9PSAyNTUpIHtcbiAgICAgICAgICBmb3IgKGogPSAxOyBqIDwgZWNjTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHN0cmluZ0J1ZmZlcltlY2MgKyBqIC0gMV0gPSBzdHJpbmdCdWZmZXJbZWNjICsgal0gXlxuICAgICAgICAgICAgICBHYWxvaXNfMS5FWFBPTkVOVFtGcmFtZS5fbW9kTihiaXQgKyBwb2x5bm9taWFsW2VjY0xlbmd0aCAtIGpdKV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoaiA9IGVjYzsgaiA8IGVjYyArIGVjY0xlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBzdHJpbmdCdWZmZXJbal0gPSBzdHJpbmdCdWZmZXJbaiArIDFdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0cmluZ0J1ZmZlcltlY2MgKyBlY2NMZW5ndGggLSAxXSA9IGJpdCA9PT0gMjU1ID8gMCA6IEdhbG9pc18xLkVYUE9ORU5UW0ZyYW1lLl9tb2ROKGJpdCArIHBvbHlub21pYWxbMF0pXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2FwcGVuZEVjY1RvRGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBkYXRhID0gMDtcbiAgICAgIHZhciBkYXRhQmxvY2sgPSB0aGlzLl9kYXRhQmxvY2s7XG4gICAgICB2YXIgZWNjID0gdGhpcy5fY2FsY3VsYXRlTWF4TGVuZ3RoKCk7XG4gICAgICB2YXIgZWNjQmxvY2sgPSB0aGlzLl9lY2NCbG9jaztcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX25lY2NCbG9jazE7IGkrKykge1xuICAgICAgICB0aGlzLl9hcHBlbmREYXRhKGRhdGEsIGRhdGFCbG9jaywgZWNjLCBlY2NCbG9jayk7XG5cbiAgICAgICAgZGF0YSArPSBkYXRhQmxvY2s7XG4gICAgICAgIGVjYyArPSBlY2NCbG9jaztcbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX25lY2NCbG9jazI7IGkrKykge1xuICAgICAgICB0aGlzLl9hcHBlbmREYXRhKGRhdGEsIGRhdGFCbG9jayArIDEsIGVjYywgZWNjQmxvY2spO1xuXG4gICAgICAgIGRhdGEgKz0gZGF0YUJsb2NrICsgMTtcbiAgICAgICAgZWNjICs9IGVjY0Jsb2NrO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfYXBwbHlNYXNrOiBmdW5jdGlvbihtYXNrKSB7XG4gICAgICB2YXIgcjN4LCByM3ksIHgsIHk7XG4gICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuXG4gICAgICBzd2l0Y2ggKG1hc2spIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IHdpZHRoOyB5KyspIHtcbiAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgaWYgKCEoKHggKyB5KSAmIDEpICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgICBidWZmZXJbeCArICh5ICogd2lkdGgpXSBePSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2lkdGg7IHkrKykge1xuICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICBpZiAoISh5ICYgMSkgJiYgIXRoaXMuX2lzTWFza2VkKHgsIHkpKSB7XG4gICAgICAgICAgICAgIGJ1ZmZlclt4ICsgKHkgKiB3aWR0aCldIF49IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCB3aWR0aDsgeSsrKSB7XG4gICAgICAgICAgZm9yIChyM3ggPSAwLCB4ID0gMDsgeCA8IHdpZHRoOyB4KyssIHIzeCsrKSB7XG4gICAgICAgICAgICBpZiAocjN4ID09PSAzKSB7XG4gICAgICAgICAgICAgIHIzeCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcjN4ICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgICBidWZmZXJbeCArICh5ICogd2lkdGgpXSBePSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBmb3IgKHIzeSA9IDAsIHkgPSAwOyB5IDwgd2lkdGg7IHkrKywgcjN5KyspIHtcbiAgICAgICAgICBpZiAocjN5ID09PSAzKSB7XG4gICAgICAgICAgICByM3kgPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAocjN4ID0gcjN5LCB4ID0gMDsgeCA8IHdpZHRoOyB4KyssIHIzeCsrKSB7XG4gICAgICAgICAgICBpZiAocjN4ID09PSAzKSB7XG4gICAgICAgICAgICAgIHIzeCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcjN4ICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgICBidWZmZXJbeCArICh5ICogd2lkdGgpXSBePSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgd2lkdGg7IHkrKykge1xuICAgICAgICAgIGZvciAocjN4ID0gMCwgcjN5ID0gKHkgPj4gMSkgJiAxLCB4ID0gMDsgeCA8IHdpZHRoOyB4KyssIHIzeCsrKSB7XG4gICAgICAgICAgICBpZiAocjN4ID09PSAzKSB7XG4gICAgICAgICAgICAgIHIzeCA9IDA7XG4gICAgICAgICAgICAgIHIzeSA9ICFyM3k7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcjN5ICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgICBidWZmZXJbeCArICh5ICogd2lkdGgpXSBePSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBmb3IgKHIzeSA9IDAsIHkgPSAwOyB5IDwgd2lkdGg7IHkrKywgcjN5KyspIHtcbiAgICAgICAgICBpZiAocjN5ID09PSAzKSB7XG4gICAgICAgICAgICByM3kgPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAocjN4ID0gMCwgeCA9IDA7IHggPCB3aWR0aDsgeCsrLCByM3grKykge1xuICAgICAgICAgICAgaWYgKHIzeCA9PT0gMykge1xuICAgICAgICAgICAgICByM3ggPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoISgoeCAmIHkgJiAxKSArICEoIXIzeCB8ICFyM3kpKSAmJiAhdGhpcy5faXNNYXNrZWQoeCwgeSkpIHtcbiAgICAgICAgICAgICAgYnVmZmVyW3ggKyAoeSAqIHdpZHRoKV0gXj0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgZm9yIChyM3kgPSAwLCB5ID0gMDsgeSA8IHdpZHRoOyB5KyssIHIzeSsrKSB7XG4gICAgICAgICAgaWYgKHIzeSA9PT0gMykge1xuICAgICAgICAgICAgcjN5ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHIzeCA9IDAsIHggPSAwOyB4IDwgd2lkdGg7IHgrKywgcjN4KyspIHtcbiAgICAgICAgICAgIGlmIChyM3ggPT09IDMpIHtcbiAgICAgICAgICAgICAgcjN4ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEoKHggJiB5ICYgMSkgKyAocjN4ICYmIHIzeCA9PT0gcjN5KSAmIDEpICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgICBidWZmZXJbeCArICh5ICogd2lkdGgpXSBePSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICBmb3IgKHIzeSA9IDAsIHkgPSAwOyB5IDwgd2lkdGg7IHkrKywgcjN5KyspIHtcbiAgICAgICAgICBpZiAocjN5ID09PSAzKSB7XG4gICAgICAgICAgICByM3kgPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAocjN4ID0gMCwgeCA9IDA7IHggPCB3aWR0aDsgeCsrLCByM3grKykge1xuICAgICAgICAgICAgaWYgKHIzeCA9PT0gMykge1xuICAgICAgICAgICAgICByM3ggPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoISgocjN4ICYmIHIzeCA9PT0gcjN5KSArICh4ICsgeSAmIDEpICYgMSkgJiYgIXRoaXMuX2lzTWFza2VkKHgsIHkpKSB7XG4gICAgICAgICAgICAgIGJ1ZmZlclt4ICsgKHkgKiB3aWR0aCldIF49IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9jYWxjdWxhdGVNYXhMZW5ndGg6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl9kYXRhQmxvY2sgKiAodGhpcy5fbmVjY0Jsb2NrMSArIHRoaXMuX25lY2NCbG9jazIpKSArIHRoaXMuX25lY2NCbG9jazI7XG4gICAgfSxcblxuICAgIF9jYWxjdWxhdGVQb2x5bm9taWFsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpLCBqO1xuICAgICAgdmFyIGVjY0Jsb2NrID0gdGhpcy5fZWNjQmxvY2s7XG4gICAgICB2YXIgcG9seW5vbWlhbCA9IHRoaXMuX3BvbHlub21pYWw7XG5cbiAgICAgIHBvbHlub21pYWxbMF0gPSAxO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZWNjQmxvY2s7IGkrKykge1xuICAgICAgICBwb2x5bm9taWFsW2kgKyAxXSA9IDE7XG5cbiAgICAgICAgZm9yIChqID0gaTsgaiA+IDA7IGotLSkge1xuICAgICAgICAgIHBvbHlub21pYWxbal0gPSBwb2x5bm9taWFsW2pdID8gcG9seW5vbWlhbFtqIC0gMV0gXlxuICAgICAgICAgICAgR2Fsb2lzXzEuRVhQT05FTlRbRnJhbWUuX21vZE4oR2Fsb2lzXzEuTE9HW3BvbHlub21pYWxbal1dICsgaSldIDogcG9seW5vbWlhbFtqIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICBwb2x5bm9taWFsWzBdID0gR2Fsb2lzXzEuRVhQT05FTlRbRnJhbWUuX21vZE4oR2Fsb2lzXzEuTE9HW3BvbHlub21pYWxbMF1dICsgaSldO1xuICAgICAgfVxuXG4gICAgICAvLyBVc2UgbG9ncyBmb3IgZ2VuZXJhdG9yIHBvbHlub21pYWwgdG8gc2F2ZSBjYWxjdWxhdGlvbiBzdGVwLlxuICAgICAgZm9yIChpID0gMDsgaSA8PSBlY2NCbG9jazsgaSsrKSB7XG4gICAgICAgIHBvbHlub21pYWxbaV0gPSBHYWxvaXNfMS5MT0dbcG9seW5vbWlhbFtpXV07XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9jaGVja0JhZG5lc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGIsIGIxLCBoLCB4LCB5O1xuICAgICAgdmFyIGJhZCA9IDA7XG4gICAgICB2YXIgYmFkbmVzcyA9IHRoaXMuX2JhZG5lc3M7XG4gICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuXG4gICAgICAvLyBCbG9ja3Mgb2Ygc2FtZSBjb2xvdXIuXG4gICAgICBmb3IgKHkgPSAwOyB5IDwgd2lkdGggLSAxOyB5KyspIHtcbiAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoIC0gMTsgeCsrKSB7XG4gICAgICAgICAgLy8gQWxsIGZvcmVncm91bmQgY29sb3VyLlxuICAgICAgICAgIGlmICgoYnVmZmVyW3ggKyAod2lkdGggKiB5KV0gJiZcbiAgICAgICAgICAgIGJ1ZmZlclt4ICsgMSArICh3aWR0aCAqIHkpXSAmJlxuICAgICAgICAgICAgYnVmZmVyW3ggKyAod2lkdGggKiAoeSArIDEpKV0gJiZcbiAgICAgICAgICAgIGJ1ZmZlclt4ICsgMSArICh3aWR0aCAqICh5ICsgMSkpXSkgfHxcbiAgICAgICAgICAgIC8vIEFsbCBiYWNrZ3JvdW5kIGNvbG91ci5cbiAgICAgICAgICAgICEoYnVmZmVyW3ggKyAod2lkdGggKiB5KV0gfHxcbiAgICAgICAgICAgIGJ1ZmZlclt4ICsgMSArICh3aWR0aCAqIHkpXSB8fFxuICAgICAgICAgICAgYnVmZmVyW3ggKyAod2lkdGggKiAoeSArIDEpKV0gfHxcbiAgICAgICAgICAgIGJ1ZmZlclt4ICsgMSArICh3aWR0aCAqICh5ICsgMSkpXSkpIHtcbiAgICAgICAgICAgIGJhZCArPSBGcmFtZS5OMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGJ3ID0gMDtcblxuICAgICAgLy8gWCBydW5zLlxuICAgICAgZm9yICh5ID0gMDsgeSA8IHdpZHRoOyB5KyspIHtcbiAgICAgICAgaCA9IDA7XG5cbiAgICAgICAgYmFkbmVzc1swXSA9IDA7XG5cbiAgICAgICAgZm9yIChiID0gMCwgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgYjEgPSBidWZmZXJbeCArICh3aWR0aCAqIHkpXTtcblxuICAgICAgICAgIGlmIChiID09PSBiMSkge1xuICAgICAgICAgICAgYmFkbmVzc1toXSsrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYWRuZXNzWysraF0gPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGIgPSBiMTtcbiAgICAgICAgICBidyArPSBiID8gMSA6IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFkICs9IHRoaXMuX2dldEJhZG5lc3MoaCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChidyA8IDApIHtcbiAgICAgICAgYncgPSAtYnc7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICB2YXIgYmlnID0gYnc7XG4gICAgICBiaWcgKz0gYmlnIDw8IDI7XG4gICAgICBiaWcgPDw9IDE7XG5cbiAgICAgIHdoaWxlIChiaWcgPiB3aWR0aCAqIHdpZHRoKSB7XG4gICAgICAgIGJpZyAtPSB3aWR0aCAqIHdpZHRoO1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuXG4gICAgICBiYWQgKz0gY291bnQgKiBGcmFtZS5ONDtcblxuICAgICAgLy8gWSBydW5zLlxuICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgaCA9IDA7XG5cbiAgICAgICAgYmFkbmVzc1swXSA9IDA7XG5cbiAgICAgICAgZm9yIChiID0gMCwgeSA9IDA7IHkgPCB3aWR0aDsgeSsrKSB7XG4gICAgICAgICAgYjEgPSBidWZmZXJbeCArICh3aWR0aCAqIHkpXTtcblxuICAgICAgICAgIGlmIChiID09PSBiMSkge1xuICAgICAgICAgICAgYmFkbmVzc1toXSsrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYWRuZXNzWysraF0gPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGIgPSBiMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhZCArPSB0aGlzLl9nZXRCYWRuZXNzKGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYmFkO1xuICAgIH0sXG5cbiAgICBfY29udmVydEJpdFN0cmVhbTogZnVuY3Rpb24obGVuZ3RoKSB7XG4gICAgICB2YXIgYml0LCBpO1xuICAgICAgdmFyIGVjYyA9IHRoaXMuX2VjYztcbiAgICAgIHZhciB2ZXJzaW9uID0gdGhpcy5fdmVyc2lvbjtcblxuICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gYml0IHN0cmVhbS4gOC1iaXQgZGF0YSB0byBRUi1jb2RlZCA4LWJpdCBkYXRhIChudW1lcmljLCBhbHBoYW51bWVyaWMsIG9yIGthbmppIG5vdCBzdXBwb3J0ZWQpLlxuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVjY1tpXSA9IHRoaXMuX3ZhbHVlLmNoYXJDb2RlQXQoaSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHJpbmdCdWZmZXIgPSB0aGlzLl9zdHJpbmdCdWZmZXIgPSBlY2Muc2xpY2UoKTtcbiAgICAgIHZhciBtYXhMZW5ndGggPSB0aGlzLl9jYWxjdWxhdGVNYXhMZW5ndGgoKTtcblxuICAgICAgaWYgKGxlbmd0aCA+PSBtYXhMZW5ndGggLSAyKSB7XG4gICAgICAgIGxlbmd0aCA9IG1heExlbmd0aCAtIDI7XG5cbiAgICAgICAgaWYgKHZlcnNpb24gPiA5KSB7XG4gICAgICAgICAgbGVuZ3RoLS07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2hpZnQgYW5kIHJlLXBhY2sgdG8gaW5zZXJ0IGxlbmd0aCBwcmVmaXguXG4gICAgICB2YXIgaW5kZXggPSBsZW5ndGg7XG5cbiAgICAgIGlmICh2ZXJzaW9uID4gOSkge1xuICAgICAgICBzdHJpbmdCdWZmZXJbaW5kZXggKyAyXSA9IDA7XG4gICAgICAgIHN0cmluZ0J1ZmZlcltpbmRleCArIDNdID0gMDtcblxuICAgICAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgICAgIGJpdCA9IHN0cmluZ0J1ZmZlcltpbmRleF07XG5cbiAgICAgICAgICBzdHJpbmdCdWZmZXJbaW5kZXggKyAzXSB8PSAyNTUgJiAoYml0IDw8IDQpO1xuICAgICAgICAgIHN0cmluZ0J1ZmZlcltpbmRleCArIDJdID0gYml0ID4+IDQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJpbmdCdWZmZXJbMl0gfD0gMjU1ICYgKGxlbmd0aCA8PCA0KTtcbiAgICAgICAgc3RyaW5nQnVmZmVyWzFdID0gbGVuZ3RoID4+IDQ7XG4gICAgICAgIHN0cmluZ0J1ZmZlclswXSA9IDB4NDAgfCAobGVuZ3RoID4+IDEyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0cmluZ0J1ZmZlcltpbmRleCArIDFdID0gMDtcbiAgICAgICAgc3RyaW5nQnVmZmVyW2luZGV4ICsgMl0gPSAwO1xuXG4gICAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgICAgYml0ID0gc3RyaW5nQnVmZmVyW2luZGV4XTtcblxuICAgICAgICAgIHN0cmluZ0J1ZmZlcltpbmRleCArIDJdIHw9IDI1NSAmIChiaXQgPDwgNCk7XG4gICAgICAgICAgc3RyaW5nQnVmZmVyW2luZGV4ICsgMV0gPSBiaXQgPj4gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cmluZ0J1ZmZlclsxXSB8PSAyNTUgJiAobGVuZ3RoIDw8IDQpO1xuICAgICAgICBzdHJpbmdCdWZmZXJbMF0gPSAweDQwIHwgKGxlbmd0aCA+PiA0KTtcbiAgICAgIH1cblxuICAgICAgLy8gRmlsbCB0byBlbmQgd2l0aCBwYWQgcGF0dGVybi5cbiAgICAgIGluZGV4ID0gbGVuZ3RoICsgMyAtICh2ZXJzaW9uIDwgMTApO1xuXG4gICAgICB3aGlsZSAoaW5kZXggPCBtYXhMZW5ndGgpIHtcbiAgICAgICAgc3RyaW5nQnVmZmVyW2luZGV4KytdID0gMHhlYztcbiAgICAgICAgc3RyaW5nQnVmZmVyW2luZGV4KytdID0gMHgxMTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2dldEJhZG5lc3M6IGZ1bmN0aW9uKGxlbmd0aCkge1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgYmFkUnVucyA9IDA7XG4gICAgICB2YXIgYmFkbmVzcyA9IHRoaXMuX2JhZG5lc3M7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJhZG5lc3NbaV0gPj0gNSkge1xuICAgICAgICAgIGJhZFJ1bnMgKz0gRnJhbWUuTjEgKyBiYWRuZXNzW2ldIC0gNTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGQkZGRkJGIGFzIGluIGZpbmRlci5cbiAgICAgIGZvciAoaSA9IDM7IGkgPCBsZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICAgICAgaWYgKGJhZG5lc3NbaSAtIDJdID09PSBiYWRuZXNzW2kgKyAyXSAmJlxuICAgICAgICAgIGJhZG5lc3NbaSArIDJdID09PSBiYWRuZXNzW2kgLSAxXSAmJlxuICAgICAgICAgIGJhZG5lc3NbaSAtIDFdID09PSBiYWRuZXNzW2kgKyAxXSAmJlxuICAgICAgICAgIGJhZG5lc3NbaSAtIDFdICogMyA9PT0gYmFkbmVzc1tpXSAmJlxuICAgICAgICAgIC8vIEJhY2tncm91bmQgYXJvdW5kIHRoZSBmb3JlZ3JvdW5kIHBhdHRlcm4/IE5vdCBwYXJ0IG9mIHRoZSBzcGVjcy5cbiAgICAgICAgICAoYmFkbmVzc1tpIC0gM10gPT09IDAgfHwgaSArIDMgPiBsZW5ndGggfHxcbiAgICAgICAgICBiYWRuZXNzW2kgLSAzXSAqIDMgPj0gYmFkbmVzc1tpXSAqIDQgfHxcbiAgICAgICAgICBiYWRuZXNzW2kgKyAzXSAqIDMgPj0gYmFkbmVzc1tpXSAqIDQpKSB7XG4gICAgICAgICAgYmFkUnVucyArPSBGcmFtZS5OMztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYmFkUnVucztcbiAgICB9LFxuXG4gICAgX2ZpbmlzaDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBTYXZlIHByZS1tYXNrIGNvcHkgb2YgZnJhbWUuXG4gICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSB0aGlzLmJ1ZmZlci5zbGljZSgpO1xuXG4gICAgICB2YXIgY3VycmVudE1hc2ssIGk7XG4gICAgICB2YXIgYml0ID0gMDtcbiAgICAgIHZhciBtYXNrID0gMzAwMDA7XG5cbiAgICAgIC8qXG4gICAgICAgKiBVc2luZyBmb3IgaW5zdGVhZCBvZiB3aGlsZSBzaW5jZSBpbiBvcmlnaW5hbCBBcmR1aW5vIGNvZGUgaWYgYW4gZWFybHkgbWFzayB3YXMgXCJnb29kIGVub3VnaFwiIGl0IHdvdWxkbid0IHRyeSBmb3JcbiAgICAgICAqIGEgYmV0dGVyIG9uZSBzaW5jZSB0aGV5IGdldCBtb3JlIGNvbXBsZXggYW5kIHRha2UgbG9uZ2VyLlxuICAgICAgICovXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIC8vIFJldHVybnMgZm9yZWdyb3VuZC1iYWNrZ3JvdW5kIGltYmFsYW5jZS5cbiAgICAgICAgdGhpcy5fYXBwbHlNYXNrKGkpO1xuXG4gICAgICAgIGN1cnJlbnRNYXNrID0gdGhpcy5fY2hlY2tCYWRuZXNzKCk7XG5cbiAgICAgICAgLy8gSXMgY3VycmVudCBtYXNrIGJldHRlciB0aGFuIHByZXZpb3VzIGJlc3Q/XG4gICAgICAgIGlmIChjdXJyZW50TWFzayA8IG1hc2spIHtcbiAgICAgICAgICBtYXNrID0gY3VycmVudE1hc2s7XG4gICAgICAgICAgYml0ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IGluY3JlbWVudCBcImlcIiB0byBhIHZvaWQgcmVkb2luZyBtYXNrLlxuICAgICAgICBpZiAoYml0ID09PSA3KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBmb3IgbmV4dCBwYXNzLlxuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuX3N0cmluZ0J1ZmZlci5zbGljZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWRvIGJlc3QgbWFzayBhcyBub25lIHdlcmUgXCJnb29kIGVub3VnaFwiIChpLmUuIGxhc3Qgd2Fzbid0IGJpdCkuXG4gICAgICBpZiAoYml0ICE9PSBpKSB7XG4gICAgICAgIHRoaXMuX2FwcGx5TWFzayhiaXQpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgaW4gZmluYWwgbWFzay9FQ0MgbGV2ZWwgYnl0ZXMuXG4gICAgICBtYXNrID0gRXJyb3JDb3JyZWN0aW9uXzEuRklOQUxfRk9STUFUW2JpdCArICh0aGlzLl9sZXZlbCAtIDEgPDwgMyldO1xuXG4gICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuXG4gICAgICAvLyBMb3cgYnl0ZS5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCA4OyBpKyssIG1hc2sgPj49IDEpIHtcbiAgICAgICAgaWYgKG1hc2sgJiAxKSB7XG4gICAgICAgICAgYnVmZmVyW3dpZHRoIC0gMSAtIGkgKyAod2lkdGggKiA4KV0gPSAxO1xuXG4gICAgICAgICAgaWYgKGkgPCA2KSB7XG4gICAgICAgICAgICBidWZmZXJbOCArICh3aWR0aCAqIGkpXSA9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlcls4ICsgKHdpZHRoICogKGkgKyAxKSldID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSGlnaCBieXRlLlxuICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKywgbWFzayA+Pj0gMSkge1xuICAgICAgICBpZiAobWFzayAmIDEpIHtcbiAgICAgICAgICBidWZmZXJbOCArICh3aWR0aCAqICh3aWR0aCAtIDcgKyBpKSldID0gMTtcblxuICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICBidWZmZXJbNiAtIGkgKyAod2lkdGggKiA4KV0gPSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXJbNyArICh3aWR0aCAqIDgpXSA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9pbnRlcmxlYXZlQmxvY2tzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpLCBqO1xuICAgICAgdmFyIGRhdGFCbG9jayA9IHRoaXMuX2RhdGFCbG9jaztcbiAgICAgIHZhciBlY2MgPSB0aGlzLl9lY2M7XG4gICAgICB2YXIgZWNjQmxvY2sgPSB0aGlzLl9lY2NCbG9jaztcbiAgICAgIHZhciBrID0gMDtcbiAgICAgIHZhciBtYXhMZW5ndGggPSB0aGlzLl9jYWxjdWxhdGVNYXhMZW5ndGgoKTtcbiAgICAgIHZhciBuZWNjQmxvY2sxID0gdGhpcy5fbmVjY0Jsb2NrMTtcbiAgICAgIHZhciBuZWNjQmxvY2syID0gdGhpcy5fbmVjY0Jsb2NrMjtcbiAgICAgIHZhciBzdHJpbmdCdWZmZXIgPSB0aGlzLl9zdHJpbmdCdWZmZXI7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhQmxvY2s7IGkrKykge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmVjY0Jsb2NrMTsgaisrKSB7XG4gICAgICAgICAgZWNjW2srK10gPSBzdHJpbmdCdWZmZXJbaSArIChqICogZGF0YUJsb2NrKV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmVjY0Jsb2NrMjsgaisrKSB7XG4gICAgICAgICAgZWNjW2srK10gPSBzdHJpbmdCdWZmZXJbKG5lY2NCbG9jazEgKiBkYXRhQmxvY2spICsgaSArIChqICogKGRhdGFCbG9jayArIDEpKV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8IG5lY2NCbG9jazI7IGorKykge1xuICAgICAgICBlY2NbaysrXSA9IHN0cmluZ0J1ZmZlclsobmVjY0Jsb2NrMSAqIGRhdGFCbG9jaykgKyBpICsgKGogKiAoZGF0YUJsb2NrICsgMSkpXTtcbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGVjY0Jsb2NrOyBpKyspIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IG5lY2NCbG9jazEgKyBuZWNjQmxvY2syOyBqKyspIHtcbiAgICAgICAgICBlY2NbaysrXSA9IHN0cmluZ0J1ZmZlclttYXhMZW5ndGggKyBpICsgKGogKiBlY2NCbG9jayldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IGVjYztcbiAgICB9LFxuXG4gICAgX2luc2VydEFsaWdubWVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGksIHgsIHk7XG4gICAgICB2YXIgdmVyc2lvbiA9IHRoaXMuX3ZlcnNpb247XG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuXG4gICAgICBpZiAodmVyc2lvbiA+IDEpIHtcbiAgICAgICAgaSA9IEFsaWdubWVudF8xLkJMT0NLW3ZlcnNpb25dO1xuICAgICAgICB5ID0gd2lkdGggLSA3O1xuXG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICB4ID0gd2lkdGggLSA3O1xuXG4gICAgICAgICAgd2hpbGUgKHggPiBpIC0gMykge1xuICAgICAgICAgICAgdGhpcy5fYWRkQWxpZ25tZW50KHgsIHkpO1xuXG4gICAgICAgICAgICBpZiAoeCA8IGkpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHggLT0gaTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoeSA8PSBpICsgOSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeSAtPSBpO1xuXG4gICAgICAgICAgdGhpcy5fYWRkQWxpZ25tZW50KDYsIHkpO1xuICAgICAgICAgIHRoaXMuX2FkZEFsaWdubWVudCh5LCA2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBfaW5zZXJ0RmluZGVyczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSwgaiwgeCwgeTtcbiAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgaiA9IDA7XG4gICAgICAgIHkgPSAwO1xuXG4gICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgaiA9IHdpZHRoIC0gNztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gMikge1xuICAgICAgICAgIHkgPSB3aWR0aCAtIDc7XG4gICAgICAgIH1cblxuICAgICAgICBidWZmZXJbeSArIDMgKyAod2lkdGggKiAoaiArIDMpKV0gPSAxO1xuXG4gICAgICAgIGZvciAoeCA9IDA7IHggPCA2OyB4KyspIHtcbiAgICAgICAgICBidWZmZXJbeSArIHggKyAod2lkdGggKiBqKV0gPSAxO1xuICAgICAgICAgIGJ1ZmZlclt5ICsgKHdpZHRoICogKGogKyB4ICsgMSkpXSA9IDE7XG4gICAgICAgICAgYnVmZmVyW3kgKyA2ICsgKHdpZHRoICogKGogKyB4KSldID0gMTtcbiAgICAgICAgICBidWZmZXJbeSArIHggKyAxICsgKHdpZHRoICogKGogKyA2KSldID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoeCA9IDE7IHggPCA1OyB4KyspIHtcbiAgICAgICAgICB0aGlzLl9zZXRNYXNrKHkgKyB4LCBqICsgMSk7XG4gICAgICAgICAgdGhpcy5fc2V0TWFzayh5ICsgMSwgaiArIHggKyAxKTtcbiAgICAgICAgICB0aGlzLl9zZXRNYXNrKHkgKyA1LCBqICsgeCk7XG4gICAgICAgICAgdGhpcy5fc2V0TWFzayh5ICsgeCArIDEsIGogKyA1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoeCA9IDI7IHggPCA0OyB4KyspIHtcbiAgICAgICAgICBidWZmZXJbeSArIHggKyAod2lkdGggKiAoaiArIDIpKV0gPSAxO1xuICAgICAgICAgIGJ1ZmZlclt5ICsgMiArICh3aWR0aCAqIChqICsgeCArIDEpKV0gPSAxO1xuICAgICAgICAgIGJ1ZmZlclt5ICsgNCArICh3aWR0aCAqIChqICsgeCkpXSA9IDE7XG4gICAgICAgICAgYnVmZmVyW3kgKyB4ICsgMSArICh3aWR0aCAqIChqICsgNCkpXSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2luc2VydFRpbWluZ0dhcDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCwgeTtcbiAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG5cbiAgICAgIGZvciAoeSA9IDA7IHkgPCA3OyB5KyspIHtcbiAgICAgICAgdGhpcy5fc2V0TWFzayg3LCB5KTtcbiAgICAgICAgdGhpcy5fc2V0TWFzayh3aWR0aCAtIDgsIHkpO1xuICAgICAgICB0aGlzLl9zZXRNYXNrKDcsIHkgKyB3aWR0aCAtIDcpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHggPSAwOyB4IDwgODsgeCsrKSB7XG4gICAgICAgIHRoaXMuX3NldE1hc2soeCwgNyk7XG4gICAgICAgIHRoaXMuX3NldE1hc2soeCArIHdpZHRoIC0gOCwgNyk7XG4gICAgICAgIHRoaXMuX3NldE1hc2soeCwgd2lkdGggLSA4KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2luc2VydFRpbWluZ1Jvd0FuZENvbHVtbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeDtcbiAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG5cbiAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aCAtIDE0OyB4KyspIHtcbiAgICAgICAgaWYgKHggJiAxKSB7XG4gICAgICAgICAgdGhpcy5fc2V0TWFzayg4ICsgeCwgNik7XG4gICAgICAgICAgdGhpcy5fc2V0TWFzayg2LCA4ICsgeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVmZmVyWzggKyB4ICsgKHdpZHRoICogNildID0gMTtcbiAgICAgICAgICBidWZmZXJbNiArICh3aWR0aCAqICg4ICsgeCkpXSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2luc2VydFZlcnNpb246IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGksIGosIHgsIHk7XG4gICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICB2YXIgdmVyc2lvbiA9IHRoaXMuX3ZlcnNpb247XG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuXG4gICAgICBpZiAodmVyc2lvbiA+IDYpIHtcbiAgICAgICAgaSA9IFZlcnNpb25fMS5CTE9DS1t2ZXJzaW9uIC0gN107XG4gICAgICAgIGogPSAxNztcblxuICAgICAgICBmb3IgKHggPSAwOyB4IDwgNjsgeCsrKSB7XG4gICAgICAgICAgZm9yICh5ID0gMDsgeSA8IDM7IHkrKywgai0tKSB7XG4gICAgICAgICAgICBpZiAoMSAmIChqID4gMTEgPyB2ZXJzaW9uID4+IGogLSAxMiA6IGkgPj4gaikpIHtcbiAgICAgICAgICAgICAgYnVmZmVyWzUgLSB4ICsgKHdpZHRoICogKDIgLSB5ICsgd2lkdGggLSAxMSkpXSA9IDE7XG4gICAgICAgICAgICAgIGJ1ZmZlclsyIC0geSArIHdpZHRoIC0gMTEgKyAod2lkdGggKiAoNSAtIHgpKV0gPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2V0TWFzayg1IC0geCwgMiAtIHkgKyB3aWR0aCAtIDExKTtcbiAgICAgICAgICAgICAgdGhpcy5fc2V0TWFzaygyIC0geSArIHdpZHRoIC0gMTEsIDUgLSB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2lzTWFza2VkOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICB2YXIgYml0ID0gRnJhbWUuX2dldE1hc2tCaXQoeCwgeSk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9tYXNrW2JpdF0gPT09IDE7XG4gICAgfSxcblxuICAgIF9wYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiaXQsIGksIGo7XG4gICAgICB2YXIgayA9IDE7XG4gICAgICB2YXIgdiA9IDE7XG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgdmFyIHggPSB3aWR0aCAtIDE7XG4gICAgICB2YXIgeSA9IHdpZHRoIC0gMTtcblxuICAgICAgLy8gSW50ZXJsZWF2ZWQgZGF0YSBhbmQgRUNDIGNvZGVzLlxuICAgICAgdmFyIGxlbmd0aCA9ICgodGhpcy5fZGF0YUJsb2NrICsgdGhpcy5fZWNjQmxvY2spICogKHRoaXMuX25lY2NCbG9jazEgKyB0aGlzLl9uZWNjQmxvY2syKSkgKyB0aGlzLl9uZWNjQmxvY2syO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYml0ID0gdGhpcy5fc3RyaW5nQnVmZmVyW2ldO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCA4OyBqKyssIGJpdCA8PD0gMSkge1xuICAgICAgICAgIGlmICgweDgwICYgYml0KSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlclt4ICsgKHdpZHRoICogeSldID0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBGaW5kIG5leHQgZmlsbCBwb3NpdGlvbi5cbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICB4LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB4Kys7XG5cbiAgICAgICAgICAgICAgaWYgKGspIHtcbiAgICAgICAgICAgICAgICBpZiAoeSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgeS0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB4IC09IDI7XG4gICAgICAgICAgICAgICAgICBrID0gIWs7XG5cbiAgICAgICAgICAgICAgICAgIGlmICh4ID09PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHgtLTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IDk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHkgIT09IHdpZHRoIC0gMSkge1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4IC09IDI7XG4gICAgICAgICAgICAgICAgayA9ICFrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHggPT09IDYpIHtcbiAgICAgICAgICAgICAgICAgIHgtLTtcbiAgICAgICAgICAgICAgICAgIHkgLT0gODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdiA9ICF2O1xuICAgICAgICAgIH0gd2hpbGUgKHRoaXMuX2lzTWFza2VkKHgsIHkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBfcmV2ZXJzZU1hc2s6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHgsIHk7XG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuXG4gICAgICBmb3IgKHggPSAwOyB4IDwgOTsgeCsrKSB7XG4gICAgICAgIHRoaXMuX3NldE1hc2soeCwgOCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoeCA9IDA7IHggPCA4OyB4KyspIHtcbiAgICAgICAgdGhpcy5fc2V0TWFzayh4ICsgd2lkdGggLSA4LCA4KTtcbiAgICAgICAgdGhpcy5fc2V0TWFzayg4LCB4KTtcbiAgICAgIH1cblxuICAgICAgZm9yICh5ID0gMDsgeSA8IDc7IHkrKykge1xuICAgICAgICB0aGlzLl9zZXRNYXNrKDgsIHkgKyB3aWR0aCAtIDcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfc2V0TWFzazogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgdmFyIGJpdCA9IEZyYW1lLl9nZXRNYXNrQml0KHgsIHkpO1xuXG4gICAgICB0aGlzLl9tYXNrW2JpdF0gPSAxO1xuICAgIH0sXG5cbiAgICBfc3luY01hc2s6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHgsIHk7XG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuXG4gICAgICBmb3IgKHkgPSAwOyB5IDwgd2lkdGg7IHkrKykge1xuICAgICAgICBmb3IgKHggPSAwOyB4IDw9IHk7IHgrKykge1xuICAgICAgICAgIGlmICh0aGlzLmJ1ZmZlclt4ICsgKHdpZHRoICogeSldKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRNYXNrKHgsIHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9LCB7XG5cbiAgICBfY3JlYXRlQXJyYXk6IGZ1bmN0aW9uKGxlbmd0aCkge1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5W2ldID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH0sXG5cbiAgICBfZ2V0TWFza0JpdDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgdmFyIGJpdDtcblxuICAgICAgaWYgKHggPiB5KSB7XG4gICAgICAgIGJpdCA9IHg7XG4gICAgICAgIHggPSB5O1xuICAgICAgICB5ID0gYml0O1xuICAgICAgfVxuXG4gICAgICBiaXQgPSB5O1xuICAgICAgYml0ICs9IHkgKiB5O1xuICAgICAgYml0ID4+PSAxO1xuICAgICAgYml0ICs9IHg7XG5cbiAgICAgIHJldHVybiBiaXQ7XG4gICAgfSxcblxuICAgIF9tb2ROOiBmdW5jdGlvbih4KSB7XG4gICAgICB3aGlsZSAoeCA+PSAyNTUpIHtcbiAgICAgICAgeCAtPSAyNTU7XG4gICAgICAgIHggPSAoeCA+PiA4KSArICh4ICYgMjU1KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHg7XG4gICAgfSxcblxuICAgIC8vICpCYWRuZXNzKiBjb2VmZmljaWVudHMuXG4gICAgTjE6IDMsXG4gICAgTjI6IDMsXG4gICAgTjM6IDQwLFxuICAgIE40OiAxMFxuXG4gIH0pO1xuXG4gIHZhciBGcmFtZV8xID0gRnJhbWU7XG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb25zIHVzZWQgYnkge0BsaW5rIEZyYW1lfS5cbiAgICpcbiAgICogQHR5cGVkZWYge09iamVjdH0gRnJhbWV+T3B0aW9uc1xuICAgKiBAcHJvcGVydHkge3N0cmluZ30gbGV2ZWwgLSBUaGUgRUNDIGxldmVsIHRvIGJlIHVzZWQuXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSBlbmNvZGVkLlxuICAgKi9cblxuICAvKipcbiAgICogQW4gaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIFJlbmRlcmVyfSBmb3Igd29ya2luZyB3aXRoIDxjb2RlPmltZzwvY29kZT4gZWxlbWVudHMuXG4gICAqXG4gICAqIFRoaXMgZGVwZW5kcyBvbiB7QGxpbmsgQ2FudmFzUmVuZGVyZXJ9IGJlaW5nIGV4ZWN1dGVkIGZpcnN0IGFzIHRoaXMgaW1wbGVtZW50YXRpb24gc2ltcGx5IGFwcGxpZXMgdGhlIGRhdGEgVVJMIGZyb21cbiAgICogdGhlIHJlbmRlcmVkIDxjb2RlPmNhbnZhczwvY29kZT4gZWxlbWVudCBhcyB0aGUgPGNvZGU+c3JjPC9jb2RlPiBmb3IgdGhlIDxjb2RlPmltZzwvY29kZT4gZWxlbWVudCBiZWluZyByZW5kZXJlZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAY2xhc3NcbiAgICogQGV4dGVuZHMgUmVuZGVyZXJcbiAgICovXG4gIHZhciBJbWFnZVJlbmRlcmVyID0gUmVuZGVyZXJfMS5leHRlbmQoe1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgZHJhdzogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3JjID0gdGhpcy5xcmlvdXMudG9EYXRhVVJMKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zcmMgPSAnJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuXG4gICAgICBlbGVtZW50LndpZHRoID0gZWxlbWVudC5oZWlnaHQgPSB0aGlzLnFyaW91cy5zaXplO1xuICAgIH1cblxuICB9KTtcblxuICB2YXIgSW1hZ2VSZW5kZXJlcl8xID0gSW1hZ2VSZW5kZXJlcjtcblxuICAvKipcbiAgICogRGVmaW5lcyBhbiBhdmFpbGFibGUgb3B0aW9uIHdoaWxlIGFsc28gY29uZmlndXJpbmcgaG93IHZhbHVlcyBhcmUgYXBwbGllZCB0byB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICpcbiAgICogT3B0aW9uYWxseSwgYSBkZWZhdWx0IHZhbHVlIGNhbiBiZSBzcGVjaWZpZWQgYXMgd2VsbCBhIHZhbHVlIHRyYW5zZm9ybWVyIGZvciBncmVhdGVyIGNvbnRyb2wgb3ZlciBob3cgdGhlIG9wdGlvblxuICAgKiB2YWx1ZSBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBJZiBubyB2YWx1ZSB0cmFuc2Zvcm1lciBpcyBzcGVjaWZpZWQsIHRoZW4gYW55IHNwZWNpZmllZCBvcHRpb24gd2lsbCBiZSBhcHBsaWVkIGRpcmVjdGx5LiBBbGwgdmFsdWVzIGFyZSBtYWludGFpbmVkXG4gICAqIG9uIHRoZSB0YXJnZXQgb2JqZWN0IGl0c2VsZiBhcyBhIGZpZWxkIHVzaW5nIHRoZSBvcHRpb24gbmFtZSBwcmVmaXhlZCB3aXRoIGEgc2luZ2xlIHVuZGVyc2NvcmUuXG4gICAqXG4gICAqIFdoZW4gYW4gb3B0aW9uIGlzIHNwZWNpZmllZCBhcyBtb2RpZmlhYmxlLCB0aGUge0BsaW5rIE9wdGlvbk1hbmFnZXJ9IHdpbGwgYmUgcmVxdWlyZWQgdG8gaW5jbHVkZSBhIHNldHRlciBmb3IgdGhlXG4gICAqIHByb3BlcnR5IHRoYXQgaXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdCB0aGF0IHVzZXMgdGhlIG9wdGlvbiBuYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHRoZSBuYW1lIHRvIGJlIHVzZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBbbW9kaWZpYWJsZV0gLSA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgcHJvcGVydHkgZGVmaW5lZCBvbiB0YXJnZXQgb2JqZWN0cyBzaG91bGQgaW5jbHVkZSBhIHNldHRlcjtcbiAgICogb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPlxuICAgKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIC0gdGhlIGRlZmF1bHQgdmFsdWUgdG8gYmUgdXNlZFxuICAgKiBAcGFyYW0ge09wdGlvbn5WYWx1ZVRyYW5zZm9ybWVyfSBbdmFsdWVUcmFuc2Zvcm1lcl0gLSB0aGUgdmFsdWUgdHJhbnNmb3JtZXIgdG8gYmUgdXNlZFxuICAgKiBAcHVibGljXG4gICAqIEBjbGFzc1xuICAgKiBAZXh0ZW5kcyBOZXZpc1xuICAgKi9cbiAgdmFyIE9wdGlvbiA9IGxpdGUuZXh0ZW5kKGZ1bmN0aW9uKG5hbWUsIG1vZGlmaWFibGUsIGRlZmF1bHRWYWx1ZSwgdmFsdWVUcmFuc2Zvcm1lcikge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIGZvciB0aGlzIHtAbGluayBPcHRpb259LlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9wdGlvbiNcbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBhIHNldHRlciBzaG91bGQgYmUgaW5jbHVkZWQgb24gdGhlIHByb3BlcnR5IGRlZmluZWQgb24gdGFyZ2V0IG9iamVjdHMgZm9yIHRoaXMge0BsaW5rIE9wdGlvbn0uXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIE9wdGlvbiNcbiAgICAgKi9cbiAgICB0aGlzLm1vZGlmaWFibGUgPSBCb29sZWFuKG1vZGlmaWFibGUpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXMge0BsaW5rIE9wdGlvbn0uXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQG1lbWJlcm9mIE9wdGlvbiNcbiAgICAgKi9cbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICAgIHRoaXMuX3ZhbHVlVHJhbnNmb3JtZXIgPSB2YWx1ZVRyYW5zZm9ybWVyO1xuICB9LCB7XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIHRoZSBzcGVjaWZpZWQgPGNvZGU+dmFsdWU8L2NvZGU+IHNvIHRoYXQgaXQgY2FuIGJlIGFwcGxpZWQgZm9yIHRoaXMge0BsaW5rIE9wdGlvbn0uXG4gICAgICpcbiAgICAgKiBJZiBhIHZhbHVlIHRyYW5zZm9ybWVyIGhhcyBiZWVuIHNwZWNpZmllZCBmb3IgdGhpcyB7QGxpbmsgT3B0aW9ufSwgaXQgd2lsbCBiZSBjYWxsZWQgdXBvbiB0byB0cmFuc2Zvcm1cbiAgICAgKiA8Y29kZT52YWx1ZTwvY29kZT4uIE90aGVyd2lzZSwgPGNvZGU+dmFsdWU8L2NvZGU+IHdpbGwgYmUgcmV0dXJuZWQgZGlyZWN0bHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGJlIHRyYW5zZm9ybWVkXG4gICAgICogQHJldHVybiB7Kn0gVGhlIHRyYW5zZm9ybWVkIHZhbHVlIG9yIDxjb2RlPnZhbHVlPC9jb2RlPiBpZiBubyB2YWx1ZSB0cmFuc2Zvcm1lciBpcyBzcGVjaWZpZWQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBtZW1iZXJvZiBPcHRpb24jXG4gICAgICovXG4gICAgdHJhbnNmb3JtOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIHRyYW5zZm9ybWVyID0gdGhpcy5fdmFsdWVUcmFuc2Zvcm1lcjtcbiAgICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVyKHZhbHVlLCB0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICB9KTtcblxuICB2YXIgT3B0aW9uXzEgPSBPcHRpb247XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB0cmFuc2Zvcm1lZCB2YWx1ZSBmb3IgdGhlIHNwZWNpZmllZCA8Y29kZT52YWx1ZTwvY29kZT4gdG8gYmUgYXBwbGllZCBmb3IgdGhlIDxjb2RlPm9wdGlvbjwvY29kZT4gcHJvdmlkZWQuXG4gICAqXG4gICAqIEBjYWxsYmFjayBPcHRpb25+VmFsdWVUcmFuc2Zvcm1lclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGJlIHRyYW5zZm9ybWVkXG4gICAqIEBwYXJhbSB7T3B0aW9ufSBvcHRpb24gLSB0aGUge0BsaW5rIE9wdGlvbn0gZm9yIHdoaWNoIDxjb2RlPnZhbHVlPC9jb2RlPiBpcyBiZWluZyB0cmFuc2Zvcm1lZFxuICAgKiBAcmV0dXJuIHsqfSBUaGUgdHJhbnNmb3JtIHZhbHVlLlxuICAgKi9cblxuICAvKipcbiAgICogQ29udGFpbnMgdXRpbGl0eSBtZXRob2RzIHRoYXQgYXJlIHVzZWZ1bCB0aHJvdWdob3V0IHRoZSBsaWJyYXJ5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBjbGFzc1xuICAgKiBAZXh0ZW5kcyBOZXZpc1xuICAgKi9cbiAgdmFyIFV0aWxpdGllcyA9IGxpdGUuZXh0ZW5kKG51bGwsIHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFic29sdXRlIHZhbHVlIG9mIGEgZ2l2ZW4gbnVtYmVyLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgc2ltcGx5IGEgY29udmVuaWVudCBzaG9ydGhhbmQgZm9yIDxjb2RlPk1hdGguYWJzPC9jb2RlPiB3aGlsZSBlbnN1cmluZyB0aGF0IG51bGxzIGFyZSByZXR1cm5lZCBhc1xuICAgICAqIDxjb2RlPm51bGw8L2NvZGU+IGluc3RlYWQgb2YgemVyby5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHRoZSBudW1iZXIgd2hvc2UgYWJzb2x1dGUgdmFsdWUgaXMgdG8gYmUgcmV0dXJuZWRcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiA8Y29kZT52YWx1ZTwvY29kZT4gb3IgPGNvZGU+bnVsbDwvY29kZT4gaWYgPGNvZGU+dmFsdWU8L2NvZGU+IGlzXG4gICAgICogPGNvZGU+bnVsbDwvY29kZT4uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAbWVtYmVyb2YgVXRpbGl0aWVzXG4gICAgICovXG4gICAgYWJzOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyBNYXRoLmFicyh2YWx1ZSkgOiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHNwZWNpZmllZCA8Y29kZT5vYmplY3Q8L2NvZGU+IGhhcyBhIHByb3BlcnR5IHdpdGggdGhlIHNwZWNpZmllZCA8Y29kZT5uYW1lPC9jb2RlPiBhcyBhbiBvd25cbiAgICAgKiAobm90IGluaGVyaXRlZCkgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC0gdGhlIG9iamVjdCBvbiB3aGljaCB0aGUgcHJvcGVydHkgaXMgdG8gYmUgY2hlY2tlZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIGJlIGNoZWNrZWRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiA8Y29kZT5vYmplY3Q8L2NvZGU+IGhhcyBhbiBvd24gcHJvcGVydHkgd2l0aCA8Y29kZT5uYW1lPC9jb2RlPi5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBtZW1iZXJvZiBVdGlsaXRpZXNcbiAgICAgKi9cbiAgICBoYXNPd246IGZ1bmN0aW9uKG9iamVjdCwgbmFtZSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIG5hbWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG5vbi1vcGVyYXRpb24gbWV0aG9kIHRoYXQgZG9lcyBhYnNvbHV0ZWx5IG5vdGhpbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAc3RhdGljXG4gICAgICogQG1lbWJlcm9mIFV0aWxpdGllc1xuICAgICAqL1xuICAgIG5vb3A6IGZ1bmN0aW9uKCkge30sXG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIHRoZSBzcGVjaWZpZWQgPGNvZGU+c3RyaW5nPC9jb2RlPiB0byB1cHBlciBjYXNlIHdoaWxlIHJlbWFpbmluZyBudWxsLXNhZmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gdGhlIHN0cmluZyB0byBiZSB0cmFuc2Zvcm1lZCB0byB1cHBlciBjYXNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfSA8Y29kZT5zdHJpbmc8L2NvZGU+IHRyYW5zZm9ybWVkIHRvIHVwcGVyIGNhc2UgaWYgPGNvZGU+c3RyaW5nPC9jb2RlPiBpcyBub3QgPGNvZGU+bnVsbDwvY29kZT4uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAbWVtYmVyb2YgVXRpbGl0aWVzXG4gICAgICovXG4gICAgdG9VcHBlckNhc2U6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZyAhPSBudWxsID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBudWxsO1xuICAgIH1cblxuICB9KTtcblxuICB2YXIgVXRpbGl0aWVzXzEgPSBVdGlsaXRpZXM7XG5cbiAgLyoqXG4gICAqIE1hbmFnZXMgbXVsdGlwbGUge0BsaW5rIE9wdGlvbn0gaW5zdGFuY2VzIHRoYXQgYXJlIGludGVuZGVkIHRvIGJlIHVzZWQgYnkgbXVsdGlwbGUgaW1wbGVtZW50YXRpb25zLlxuICAgKlxuICAgKiBBbHRob3VnaCB0aGUgb3B0aW9uIGRlZmluaXRpb25zIGFyZSBzaGFyZWQgYmV0d2VlbiB0YXJnZXRzLCB0aGUgdmFsdWVzIGFyZSBtYWludGFpbmVkIG9uIHRoZSB0YXJnZXRzIHRoZW1zZWx2ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7T3B0aW9uW119IG9wdGlvbnMgLSB0aGUgb3B0aW9ucyB0byBiZSB1c2VkXG4gICAqIEBwdWJsaWNcbiAgICogQGNsYXNzXG4gICAqIEBleHRlbmRzIE5ldmlzXG4gICAqL1xuICB2YXIgT3B0aW9uTWFuYWdlciA9IGxpdGUuZXh0ZW5kKGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYXZhaWxhYmxlIG9wdGlvbnMgZm9yIHRoaXMge0BsaW5rIE9wdGlvbk1hbmFnZXJ9LlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgT3B0aW9uPn1cbiAgICAgKiBAbWVtYmVyb2YgT3B0aW9uTWFuYWdlciNcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcblxuICAgIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgIHRoaXMub3B0aW9uc1tvcHRpb24ubmFtZV0gPSBvcHRpb247XG4gICAgfSwgdGhpcyk7XG4gIH0sIHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciBhbiBvcHRpb24gd2l0aCB0aGUgc3BlY2lmaWVkIDxjb2RlPm5hbWU8L2NvZGU+IGlzIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIHtAbGluayBPcHRpb259IHdob3NlIGV4aXN0ZW5jZSBpcyB0byBiZSBjaGVja2VkXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgYW4ge0BsaW5rIE9wdGlvbn0gZXhpc3RzIHdpdGggPGNvZGU+bmFtZTwvY29kZT47IG90aGVyd2lzZVxuICAgICAqIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiAgICAgKiBAcHVibGljXG4gICAgICogQG1lbWJlcm9mIE9wdGlvbk1hbmFnZXIjXG4gICAgICovXG4gICAgZXhpc3RzOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zW25hbWVdICE9IG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBvcHRpb24gd2l0aCB0aGUgc3BlY2lmaWVkIDxjb2RlPm5hbWU8L2NvZGU+IG9uIHRoZSA8Y29kZT50YXJnZXQ8L2NvZGU+IG9iamVjdCBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIHtAbGluayBPcHRpb259IHdob3NlIHZhbHVlIG9uIDxjb2RlPnRhcmdldDwvY29kZT4gaXMgdG8gYmUgcmV0dXJuZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gdGhlIG9iamVjdCBmcm9tIHdoaWNoIHRoZSB2YWx1ZSBvZiB0aGUgbmFtZWQge0BsaW5rIE9wdGlvbn0gaXMgdG8gYmUgcmV0dXJuZWRcbiAgICAgKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgb2YgdGhlIHtAbGluayBPcHRpb259IHdpdGggPGNvZGU+bmFtZTwvY29kZT4gb24gPGNvZGU+dGFyZ2V0PC9jb2RlPi5cbiAgICAgKiBAcHVibGljXG4gICAgICogQG1lbWJlcm9mIE9wdGlvbk1hbmFnZXIjXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbihuYW1lLCB0YXJnZXQpIHtcbiAgICAgIHJldHVybiBPcHRpb25NYW5hZ2VyLl9nZXQodGhpcy5vcHRpb25zW25hbWVdLCB0YXJnZXQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY29weSBvZiBhbGwgb2YgdGhlIGF2YWlsYWJsZSBvcHRpb25zIG9uIHRoZSA8Y29kZT50YXJnZXQ8L2NvZGU+IG9iamVjdCBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgLSB0aGUgb2JqZWN0IGZyb20gd2hpY2ggdGhlIG9wdGlvbiBuYW1lL3ZhbHVlIHBhaXJzIGFyZSB0byBiZSByZXR1cm5lZFxuICAgICAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCAqPn0gQSBoYXNoIGNvbnRhaW5pbmcgdGhlIG5hbWUvdmFsdWUgcGFpcnMgb2YgYWxsIG9wdGlvbnMgb24gPGNvZGU+dGFyZ2V0PC9jb2RlPi5cbiAgICAgKiBAcHVibGljXG4gICAgICogQG1lbWJlcm9mIE9wdGlvbk1hbmFnZXIjXG4gICAgICovXG4gICAgZ2V0QWxsOiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgIHZhciBuYW1lO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgIGlmIChVdGlsaXRpZXNfMS5oYXNPd24ob3B0aW9ucywgbmFtZSkpIHtcbiAgICAgICAgICByZXN1bHRbbmFtZV0gPSBPcHRpb25NYW5hZ2VyLl9nZXQob3B0aW9uc1tuYW1lXSwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgZm9yIHRoZSA8Y29kZT50YXJnZXQ8L2NvZGU+IG9iamVjdCBwcm92aWRlZCBhbmQgdGhlbiBhcHBsaWVzIHRoZSBpbml0aWFsIHZhbHVlc1xuICAgICAqIHdpdGhpbiB0aGUgc3BlY2lpZmVkIDxjb2RlPm9wdGlvbnM8L2NvZGU+LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiBhbnkgb2YgdGhlIG5hbWVzIHdpdGhpbiA8Y29kZT5vcHRpb25zPC9jb2RlPiBkb2VzIG5vdCBtYXRjaCBhbiBhdmFpbGFibGUgb3B0aW9uLlxuICAgICAqXG4gICAgICogVGhpcyBpbnZvbHZlcyBzZXR0aW5nIHRoZSBkZWZhdWx0IHZhbHVlcyBhbmQgZGVmaW5pbmcgcHJvcGVydGllcyBmb3IgYWxsIG9mIHRoZSBhdmFpbGFibGUgb3B0aW9ucyBvblxuICAgICAqIDxjb2RlPnRhcmdldDwvY29kZT4gYmVmb3JlIGZpbmFsbHkgY2FsbGluZyB7QGxpbmsgT3B0aW9uTWFuYW5nZXIjc2V0QWxsfSB3aXRoIDxjb2RlPm9wdGlvbnM8L2NvZGU+IGFuZFxuICAgICAqIDxjb2RlPnRhcmdldDwvY29kZT4uIEFueSBvcHRpb25zIHRoYXQgYXJlIGNvbmZpZ3VyZWQgdG8gYmUgbW9kaWZpYWJsZSB3aWxsIGhhdmUgYSBzZXR0ZXIgaW5jbHVkZWQgaW4gdGhlaXIgZGVmaW5lZFxuICAgICAqIHByb3BlcnR5IHRoYXQgd2lsbCBhbGxvdyBpdHMgY29ycmVzcG9uZGluZyB2YWx1ZSB0byBiZSBtb2RpZmllZC5cbiAgICAgKlxuICAgICAqIElmIGEgY2hhbmdlIGhhbmRsZXIgaXMgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyBvbiA8Y29kZT50YXJnZXQ8L2NvZGU+IGZvciBhXG4gICAgICogbW9kaWZpYWJsZSBvcHRpb24sIGJ1dCBvbmx5IHdoZW4gZG9uZSBzbyB2aWEgdGhlIGRlZmluZWQgcHJvcGVydHkncyBzZXR0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCAqPn0gb3B0aW9ucyAtIHRoZSBuYW1lL3ZhbHVlIHBhaXJzIG9mIHRoZSBpbml0aWFsIG9wdGlvbnMgdG8gYmUgc2V0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtIHRoZSBvYmplY3Qgb24gd2hpY2ggdGhlIG9wdGlvbnMgYXJlIHRvIGJlIGluaXRpYWxpemVkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NoYW5nZUhhbmRsZXJdIC0gdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgb2YgYW4gbW9kaWZpYWJsZSBvcHRpb24gY2hhbmdlcyBvblxuICAgICAqIDxjb2RlPnRhcmdldDwvY29kZT5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiA8Y29kZT5vcHRpb25zPC9jb2RlPiBjb250YWlucyBhbiBpbnZhbGlkIG9wdGlvbiBuYW1lLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAbWVtYmVyb2YgT3B0aW9uTWFuYWdlciNcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbihvcHRpb25zLCB0YXJnZXQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlSGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGFuZ2VIYW5kbGVyID0gVXRpbGl0aWVzXzEubm9vcDtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWUsIG9wdGlvbjtcblxuICAgICAgZm9yIChuYW1lIGluIHRoaXMub3B0aW9ucykge1xuICAgICAgICBpZiAoVXRpbGl0aWVzXzEuaGFzT3duKHRoaXMub3B0aW9ucywgbmFtZSkpIHtcbiAgICAgICAgICBvcHRpb24gPSB0aGlzLm9wdGlvbnNbbmFtZV07XG5cbiAgICAgICAgICBPcHRpb25NYW5hZ2VyLl9zZXQob3B0aW9uLCBvcHRpb24uZGVmYXVsdFZhbHVlLCB0YXJnZXQpO1xuICAgICAgICAgIE9wdGlvbk1hbmFnZXIuX2NyZWF0ZUFjY2Vzc29yKG9wdGlvbiwgdGFyZ2V0LCBjaGFuZ2VIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRBbGwob3B0aW9ucywgdGFyZ2V0LCB0cnVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIG9wdGlvbiB3aXRoIHRoZSBzcGVjaWZpZWQgPGNvZGU+bmFtZTwvY29kZT4gb24gdGhlIDxjb2RlPnRhcmdldDwvY29kZT4gb2JqZWN0IHByb3ZpZGVkIHRvXG4gICAgICogPGNvZGU+dmFsdWU8L2NvZGU+LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiA8Y29kZT5uYW1lPC9jb2RlPiBkb2VzIG5vdCBtYXRjaCBhbiBhdmFpbGFibGUgb3B0aW9uIG9yIG1hdGNoZXMgYW4gb3B0aW9uIHRoYXRcbiAgICAgKiBjYW5ub3QgYmUgbW9kaWZpZWQuXG4gICAgICpcbiAgICAgKiBJZiA8Y29kZT52YWx1ZTwvY29kZT4gaXMgPGNvZGU+bnVsbDwvY29kZT4gYW5kIHRoZSB7QGxpbmsgT3B0aW9ufSBoYXMgYSBkZWZhdWx0IHZhbHVlIGNvbmZpZ3VyZWQsIHRoZW4gdGhhdCBkZWZhdWx0XG4gICAgICogdmFsdWUgd2lsbCBiZSB1c2VkIGluc3RlYWQuIElmIHRoZSB7QGxpbmsgT3B0aW9ufSBhbHNvIGhhcyBhIHZhbHVlIHRyYW5zZm9ybWVyIGNvbmZpZ3VyZWQsIGl0IHdpbGwgYmUgdXNlZCB0b1xuICAgICAqIHRyYW5zZm9ybSB3aGljaGV2ZXIgdmFsdWUgd2FzIGRldGVybWluZWQgdG8gYmUgdXNlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgd2hldGhlciB0aGUgdmFsdWUgb2YgdGhlIHVuZGVybHlpbmcgZmllbGQgb24gPGNvZGU+dGFyZ2V0PC9jb2RlPiB3YXMgY2hhbmdlZCBhcyBhIHJlc3VsdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIHtAbGluayBPcHRpb259IHdob3NlIHZhbHVlIGlzIHRvIGJlIHNldFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gYmUgc2V0IGZvciB0aGUgbmFtZWQge0BsaW5rIE9wdGlvbn0gb24gPGNvZGU+dGFyZ2V0PC9jb2RlPlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgLSB0aGUgb2JqZWN0IG9uIHdoaWNoIDxjb2RlPnZhbHVlPC9jb2RlPiBpcyB0byBiZSBzZXQgZm9yIHRoZSBuYW1lZCB7QGxpbmsgT3B0aW9ufVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSB1bmRlcmx5aW5nIGZpZWxkIG9uIDxjb2RlPnRhcmdldDwvY29kZT4gd2FzIGNoYW5nZWQ7IG90aGVyd2lzZVxuICAgICAqIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgPGNvZGU+bmFtZTwvY29kZT4gaXMgaW52YWxpZCBvciBpcyBmb3IgYW4gb3B0aW9uIHRoYXQgY2Fubm90IGJlIG1vZGlmaWVkLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAbWVtYmVyb2YgT3B0aW9uTWFuYWdlciNcbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCB0YXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXQobmFtZSwgdmFsdWUsIHRhcmdldCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgYWxsIG9mIHRoZSBzcGVjaWZpZWQgPGNvZGU+b3B0aW9uczwvY29kZT4gb24gdGhlIDxjb2RlPnRhcmdldDwvY29kZT4gb2JqZWN0IHByb3ZpZGVkIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmdcbiAgICAgKiB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIHRocm93IGFuIGVycm9yIGlmIGFueSBvZiB0aGUgbmFtZXMgd2l0aGluIDxjb2RlPm9wdGlvbnM8L2NvZGU+IGRvZXMgbm90IG1hdGNoIGFuIGF2YWlsYWJsZSBvcHRpb25cbiAgICAgKiBvciBtYXRjaGVzIGFuIG9wdGlvbiB0aGF0IGNhbm5vdCBiZSBtb2RpZmllZC5cbiAgICAgKlxuICAgICAqIElmIGFueSB2YWx1ZSB3aXRoaW4gPGNvZGU+b3B0aW9uczwvY29kZT4gaXMgPGNvZGU+bnVsbDwvY29kZT4gYW5kIHRoZSBjb3JyZXNwb25kaW5nIHtAbGluayBPcHRpb259IGhhcyBhIGRlZmF1bHRcbiAgICAgKiB2YWx1ZSBjb25maWd1cmVkLCB0aGVuIHRoYXQgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgaW5zdGVhZC4gSWYgYW4ge0BsaW5rIE9wdGlvbn0gYWxzbyBoYXMgYSB2YWx1ZSB0cmFuc2Zvcm1lclxuICAgICAqIGNvbmZpZ3VyZWQsIGl0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2Zvcm0gd2hpY2hldmVyIHZhbHVlIHdhcyBkZXRlcm1pbmVkIHRvIGJlIHVzZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHdoZXRoZXIgdGhlIHZhbHVlIGZvciBhbnkgb2YgdGhlIHVuZGVybHlpbmcgZmllbGRzIG9uIDxjb2RlPnRhcmdldDwvY29kZT4gd2VyZSBjaGFuZ2VkIGFzIGFcbiAgICAgKiByZXN1bHQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCAqPn0gb3B0aW9ucyAtIHRoZSBuYW1lL3ZhbHVlIHBhaXJzIG9mIG9wdGlvbnMgdG8gYmUgc2V0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtIHRoZSBvYmplY3Qgb24gd2hpY2ggdGhlIG9wdGlvbnMgYXJlIHRvIGJlIHNldFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IDxjb2RlPnRydWU8L2NvZGU+IGlmIGFueSBvZiB0aGUgdW5kZXJseWluZyBmaWVsZHMgb24gPGNvZGU+dGFyZ2V0PC9jb2RlPiB3ZXJlIGNoYW5nZWQ7IG90aGVyd2lzZVxuICAgICAqIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgPGNvZGU+b3B0aW9uczwvY29kZT4gY29udGFpbnMgYW4gaW52YWxpZCBvcHRpb24gbmFtZSBvciBhbiBvcHRpb24gdGhhdCBjYW5ub3QgYmUgbW9kaWlmZWQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBtZW1iZXJvZiBPcHRpb25NYW5hZ2VyI1xuICAgICAqL1xuICAgIHNldEFsbDogZnVuY3Rpb24ob3B0aW9ucywgdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2V0QWxsKG9wdGlvbnMsIHRhcmdldCk7XG4gICAgfSxcblxuICAgIF9zZXQ6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCB0YXJnZXQsIGFsbG93VW5tb2RpZmlhYmxlKSB7XG4gICAgICB2YXIgb3B0aW9uID0gdGhpcy5vcHRpb25zW25hbWVdO1xuICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG9wdGlvbjogJyArIG5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb24ubW9kaWZpYWJsZSAmJiAhYWxsb3dVbm1vZGlmaWFibGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPcHRpb24gY2Fubm90IGJlIG1vZGlmaWVkOiAnICsgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPcHRpb25NYW5hZ2VyLl9zZXQob3B0aW9uLCB2YWx1ZSwgdGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgX3NldEFsbDogZnVuY3Rpb24ob3B0aW9ucywgdGFyZ2V0LCBhbGxvd1VubW9kaWZpYWJsZSkge1xuICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWU7XG4gICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICBpZiAoVXRpbGl0aWVzXzEuaGFzT3duKG9wdGlvbnMsIG5hbWUpICYmIHRoaXMuX3NldChuYW1lLCBvcHRpb25zW25hbWVdLCB0YXJnZXQsIGFsbG93VW5tb2RpZmlhYmxlKSkge1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cblxuICB9LCB7XG5cbiAgICBfY3JlYXRlQWNjZXNzb3I6IGZ1bmN0aW9uKG9wdGlvbiwgdGFyZ2V0LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gT3B0aW9uTWFuYWdlci5fZ2V0KG9wdGlvbiwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKG9wdGlvbi5tb2RpZmlhYmxlKSB7XG4gICAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAoT3B0aW9uTWFuYWdlci5fc2V0KG9wdGlvbiwgdmFsdWUsIHRhcmdldCkpIHtcbiAgICAgICAgICAgIGNoYW5nZUhhbmRsZXIodmFsdWUsIG9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBvcHRpb24ubmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfSxcblxuICAgIF9nZXQ6IGZ1bmN0aW9uKG9wdGlvbiwgdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGFyZ2V0WydfJyArIG9wdGlvbi5uYW1lXTtcbiAgICB9LFxuXG4gICAgX3NldDogZnVuY3Rpb24ob3B0aW9uLCB2YWx1ZSwgdGFyZ2V0KSB7XG4gICAgICB2YXIgZmllbGROYW1lID0gJ18nICsgb3B0aW9uLm5hbWU7XG4gICAgICB2YXIgb2xkVmFsdWUgPSB0YXJnZXRbZmllbGROYW1lXTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IG9wdGlvbi50cmFuc2Zvcm0odmFsdWUgIT0gbnVsbCA/IHZhbHVlIDogb3B0aW9uLmRlZmF1bHRWYWx1ZSk7XG5cbiAgICAgIHRhcmdldFtmaWVsZE5hbWVdID0gbmV3VmFsdWU7XG5cbiAgICAgIHJldHVybiBuZXdWYWx1ZSAhPT0gb2xkVmFsdWU7XG4gICAgfVxuXG4gIH0pO1xuXG4gIHZhciBPcHRpb25NYW5hZ2VyXzEgPSBPcHRpb25NYW5hZ2VyO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIG9mIGEgbW9kaWZpYWJsZSB7QGxpbmsgT3B0aW9ufSBpcyBjaGFuZ2VkIG9uIGEgdGFyZ2V0IG9iamVjdCB2aWEgdGhlIGRlZmluZWQgcHJvcGVydHknc1xuICAgKiBzZXR0ZXIuXG4gICAqXG4gICAqIEBjYWxsYmFjayBPcHRpb25NYW5hZ2VyfkNoYW5nZUhhbmRsZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSBuZXcgdmFsdWUgZm9yIDxjb2RlPm9wdGlvbjwvY29kZT4gb24gdGhlIHRhcmdldCBvYmplY3RcbiAgICogQHBhcmFtIHtPcHRpb259IG9wdGlvbiAtIHRoZSBtb2RpZmFibGUge0BsaW5rIE9wdGlvbn0gd2hvc2UgdmFsdWUgaGFzIGNoYW5nZWQgb24gdGhlIHRhcmdldCBvYmplY3QuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuXG4gIC8qKlxuICAgKiBBIGJhc2ljIG1hbmFnZXIgZm9yIHtAbGluayBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbnMgdGhhdCBhcmUgbWFwcGVkIHRvIHNpbXBsZSBuYW1lcy5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAY2xhc3NcbiAgICogQGV4dGVuZHMgTmV2aXNcbiAgICovXG4gIHZhciBTZXJ2aWNlTWFuYWdlciA9IGxpdGUuZXh0ZW5kKGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NlcnZpY2VzID0ge307XG4gIH0sIHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHtAbGluayBTZXJ2aWNlfSBiZWluZyBtYW5hZ2VkIHdpdGggdGhlIHNwZWNpZmllZCA8Y29kZT5uYW1lPC9jb2RlPi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIHtAbGluayBTZXJ2aWNlfSB0byBiZSByZXR1cm5lZFxuICAgICAqIEByZXR1cm4ge1NlcnZpY2V9IFRoZSB7QGxpbmsgU2VydmljZX0gaXMgYmVpbmcgbWFuYWdlZCB3aXRoIDxjb2RlPm5hbWU8L2NvZGU+LlxuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBubyB7QGxpbmsgU2VydmljZX0gaXMgYmVpbmcgbWFuYWdlZCB3aXRoIDxjb2RlPm5hbWU8L2NvZGU+LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAbWVtYmVyb2YgU2VydmljZU1hbmFnZXIjXG4gICAgICovXG4gICAgZ2V0U2VydmljZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIHNlcnZpY2UgPSB0aGlzLl9zZXJ2aWNlc1tuYW1lXTtcbiAgICAgIGlmICghc2VydmljZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcnZpY2UgaXMgbm90IGJlaW5nIG1hbmFnZWQgd2l0aCBuYW1lOiAnICsgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB7QGxpbmsgU2VydmljZX0gaW1wbGVtZW50YXRpb24gdG8gYmUgbWFuYWdlZCBmb3IgdGhlIHNwZWNpZmllZCA8Y29kZT5uYW1lPC9jb2RlPiB0byB0aGVcbiAgICAgKiA8Y29kZT5zZXJ2aWNlPC9jb2RlPiBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIHtAbGluayBTZXJ2aWNlfSB0byBiZSBtYW5hZ2VkIHdpdGggPGNvZGU+bmFtZTwvY29kZT5cbiAgICAgKiBAcGFyYW0ge1NlcnZpY2V9IHNlcnZpY2UgLSB0aGUge0BsaW5rIFNlcnZpY2V9IGltcGxlbWVudGF0aW9uIHRvIGJlIG1hbmFnZWRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBhIHtAbGluayBTZXJ2aWNlfSBpcyBhbHJlYWR5IGJlaW5nIG1hbmFnZWQgd2l0aCB0aGUgc2FtZSA8Y29kZT5uYW1lPC9jb2RlPi5cbiAgICAgKiBAcHVibGljXG4gICAgICogQG1lbWJlcm9mIFNlcnZpY2VNYW5hZ2VyI1xuICAgICAqL1xuICAgIHNldFNlcnZpY2U6IGZ1bmN0aW9uKG5hbWUsIHNlcnZpY2UpIHtcbiAgICAgIGlmICh0aGlzLl9zZXJ2aWNlc1tuYW1lXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcnZpY2UgaXMgYWxyZWFkeSBtYW5hZ2VkIHdpdGggbmFtZTogJyArIG5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlc1tuYW1lXSA9IHNlcnZpY2U7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pO1xuXG4gIHZhciBTZXJ2aWNlTWFuYWdlcl8xID0gU2VydmljZU1hbmFnZXI7XG5cbiAgdmFyIG9wdGlvbk1hbmFnZXIgPSBuZXcgT3B0aW9uTWFuYWdlcl8xKFtcbiAgICBuZXcgT3B0aW9uXzEoJ2JhY2tncm91bmQnLCB0cnVlLCAnd2hpdGUnKSxcbiAgICBuZXcgT3B0aW9uXzEoJ2JhY2tncm91bmRBbHBoYScsIHRydWUsIDEsIFV0aWxpdGllc18xLmFicyksXG4gICAgbmV3IE9wdGlvbl8xKCdlbGVtZW50JyksXG4gICAgbmV3IE9wdGlvbl8xKCdmb3JlZ3JvdW5kJywgdHJ1ZSwgJ2JsYWNrJyksXG4gICAgbmV3IE9wdGlvbl8xKCdmb3JlZ3JvdW5kQWxwaGEnLCB0cnVlLCAxLCBVdGlsaXRpZXNfMS5hYnMpLFxuICAgIG5ldyBPcHRpb25fMSgnbGV2ZWwnLCB0cnVlLCAnTCcsIFV0aWxpdGllc18xLnRvVXBwZXJDYXNlKSxcbiAgICBuZXcgT3B0aW9uXzEoJ21pbWUnLCB0cnVlLCAnaW1hZ2UvcG5nJyksXG4gICAgbmV3IE9wdGlvbl8xKCdwYWRkaW5nJywgdHJ1ZSwgbnVsbCwgVXRpbGl0aWVzXzEuYWJzKSxcbiAgICBuZXcgT3B0aW9uXzEoJ3NpemUnLCB0cnVlLCAxMDAsIFV0aWxpdGllc18xLmFicyksXG4gICAgbmV3IE9wdGlvbl8xKCd2YWx1ZScsIHRydWUsICcnKVxuICBdKTtcbiAgdmFyIHNlcnZpY2VNYW5hZ2VyID0gbmV3IFNlcnZpY2VNYW5hZ2VyXzEoKTtcblxuICAvKipcbiAgICogRW5hYmxlcyBjb25maWd1cmF0aW9uIG9mIGEgUVIgY29kZSBnZW5lcmF0b3Igd2hpY2ggdXNlcyBIVE1MNSA8Y29kZT5jYW52YXM8L2NvZGU+IGZvciByZW5kZXJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7UVJpb3Vzfk9wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvcHRpb25zIHRvIGJlIHVzZWRcbiAgICogQHRocm93cyB7RXJyb3J9IElmIGFueSA8Y29kZT5vcHRpb25zPC9jb2RlPiBhcmUgaW52YWxpZC5cbiAgICogQHB1YmxpY1xuICAgKiBAY2xhc3NcbiAgICogQGV4dGVuZHMgTmV2aXNcbiAgICovXG4gIHZhciBRUmlvdXMgPSBsaXRlLmV4dGVuZChmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgb3B0aW9uTWFuYWdlci5pbml0KG9wdGlvbnMsIHRoaXMsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgdmFyIGVsZW1lbnQgPSBvcHRpb25NYW5hZ2VyLmdldCgnZWxlbWVudCcsIHRoaXMpO1xuICAgIHZhciBlbGVtZW50U2VydmljZSA9IHNlcnZpY2VNYW5hZ2VyLmdldFNlcnZpY2UoJ2VsZW1lbnQnKTtcbiAgICB2YXIgY2FudmFzID0gZWxlbWVudCAmJiBlbGVtZW50U2VydmljZS5pc0NhbnZhcyhlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50U2VydmljZS5jcmVhdGVDYW52YXMoKTtcbiAgICB2YXIgaW1hZ2UgPSBlbGVtZW50ICYmIGVsZW1lbnRTZXJ2aWNlLmlzSW1hZ2UoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudFNlcnZpY2UuY3JlYXRlSW1hZ2UoKTtcblxuICAgIHRoaXMuX2NhbnZhc1JlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyXzEodGhpcywgY2FudmFzLCB0cnVlKTtcbiAgICB0aGlzLl9pbWFnZVJlbmRlcmVyID0gbmV3IEltYWdlUmVuZGVyZXJfMSh0aGlzLCBpbWFnZSwgaW1hZ2UgPT09IGVsZW1lbnQpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfSwge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgb2YgdGhlIG9wdGlvbnMgY29uZmlndXJlZCBmb3IgdGhpcyB7QGxpbmsgUVJpb3VzfS5cbiAgICAgKlxuICAgICAqIEFueSBjaGFuZ2VzIG1hZGUgdG8gdGhlIHJldHVybmVkIG9iamVjdCB3aWxsIG5vdCBiZSByZWZsZWN0ZWQgaW4gdGhlIG9wdGlvbnMgdGhlbXNlbHZlcyBvciB0aGVpciBjb3JyZXNwb25kaW5nXG4gICAgICogdW5kZXJseWluZyBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgKj59IEEgY29weSBvZiB0aGUgYXBwbGllZCBvcHRpb25zLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAbWVtYmVyb2YgUVJpb3VzI1xuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gb3B0aW9uTWFuYWdlci5nZXRBbGwodGhpcyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgYWxsIG9mIHRoZSBzcGVjaWZpZWQgPGNvZGU+b3B0aW9uczwvY29kZT4gYW5kIGF1dG9tYXRpY2FsbHkgdXBkYXRlcyB0aGlzIHtAbGluayBRUmlvdXN9IGlmIGFueSBvZiB0aGVcbiAgICAgKiB1bmRlcmx5aW5nIGZpZWxkcyBhcmUgY2hhbmdlZCBhcyBhIHJlc3VsdC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdGhlIHByZWZlcnJlZCBtZXRob2QgZm9yIHVwZGF0aW5nIG11bHRpcGxlIG9wdGlvbnMgYXQgb25lIHRpbWUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdXBkYXRlcyBiZXR3ZWVuXG4gICAgICogY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UVJpb3Vzfk9wdGlvbnN9IG9wdGlvbnMgLSB0aGUgb3B0aW9ucyB0byBiZSBzZXRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBhbnkgPGNvZGU+b3B0aW9uczwvY29kZT4gYXJlIGludmFsaWQgb3IgY2Fubm90IGJlIG1vZGlmaWVkLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAbWVtYmVyb2YgUVJpb3VzI1xuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbk1hbmFnZXIuc2V0QWxsKG9wdGlvbnMsIHRoaXMpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGltYWdlIGRhdGEgVVJJIGZvciB0aGUgZ2VuZXJhdGVkIFFSIGNvZGUgdXNpbmcgdGhlIDxjb2RlPm1pbWU8L2NvZGU+IHByb3ZpZGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFttaW1lXSAtIHRoZSBNSU1FIHR5cGUgZm9yIHRoZSBpbWFnZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGltYWdlIGRhdGEgVVJJIGZvciB0aGUgUVIgY29kZS5cbiAgICAgKiBAcHVibGljXG4gICAgICogQG1lbWJlcm9mIFFSaW91cyNcbiAgICAgKi9cbiAgICB0b0RhdGFVUkw6IGZ1bmN0aW9uKG1pbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbnZhcy50b0RhdGFVUkwobWltZSB8fCB0aGlzLm1pbWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoaXMge0BsaW5rIFFSaW91c30gYnkgZ2VuZXJhdGluZyBhIG5ldyB7QGxpbmsgRnJhbWV9IGFuZCByZS1yZW5kZXJpbmcgdGhlIFFSIGNvZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAbWVtYmVyb2YgUVJpb3VzI1xuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWVfMSh7XG4gICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2NhbnZhc1JlbmRlcmVyLnJlbmRlcihmcmFtZSk7XG4gICAgICB0aGlzLl9pbWFnZVJlbmRlcmVyLnJlbmRlcihmcmFtZSk7XG4gICAgfVxuXG4gIH0sIHtcblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZXMgdGhlIDxjb2RlPnNlcnZpY2U8L2NvZGU+IHByb3ZpZGVkIHRvIGJlIHVzZWQgYnkgYWxsIHtAbGluayBRUmlvdXN9IGluc3RhbmNlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2VydmljZX0gc2VydmljZSAtIHRoZSB7QGxpbmsgU2VydmljZX0gdG8gYmUgY29uZmlndXJlZFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHRocm93cyB7RXJyb3J9IElmIGEge0BsaW5rIFNlcnZpY2V9IGhhcyBhbHJlYWR5IGJlZW4gY29uZmlndXJlZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAbWVtYmVyb2YgUVJpb3VzXG4gICAgICovXG4gICAgdXNlOiBmdW5jdGlvbihzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlTWFuYWdlci5zZXRTZXJ2aWNlKHNlcnZpY2UuZ2V0TmFtZSgpLCBzZXJ2aWNlKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUVJpb3VzLnByb3RvdHlwZSwge1xuXG4gICAgY2FudmFzOiB7XG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIDxjb2RlPmNhbnZhczwvY29kZT4gZWxlbWVudCBiZWluZyB1c2VkIHRvIHJlbmRlciB0aGUgUVIgY29kZSBmb3IgdGhpcyB7QGxpbmsgUVJpb3VzfS5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJuIHsqfSBUaGUgPGNvZGU+Y2FudmFzPC9jb2RlPiBlbGVtZW50LlxuICAgICAgICogQHB1YmxpY1xuICAgICAgICogQG1lbWJlcm9mIFFSaW91cyNcbiAgICAgICAqIEBhbGlhcyBjYW52YXNcbiAgICAgICAqL1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhc1JlbmRlcmVyLmdldEVsZW1lbnQoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW1hZ2U6IHtcbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgPGNvZGU+aW1nPC9jb2RlPiBlbGVtZW50IGJlaW5nIHVzZWQgdG8gcmVuZGVyIHRoZSBRUiBjb2RlIGZvciB0aGlzIHtAbGluayBRUmlvdXN9LlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm4geyp9IFRoZSA8Y29kZT5pbWc8L2NvZGU+IGVsZW1lbnQuXG4gICAgICAgKiBAcHVibGljXG4gICAgICAgKiBAbWVtYmVyb2YgUVJpb3VzI1xuICAgICAgICogQGFsaWFzIGltYWdlXG4gICAgICAgKi9cbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbWFnZVJlbmRlcmVyLmdldEVsZW1lbnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG5cbiAgdmFyIFFSaW91c18xJDIgPSBRUmlvdXM7XG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb25zIHVzZWQgYnkge0BsaW5rIFFSaW91c30uXG4gICAqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IFFSaW91c35PcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbYmFja2dyb3VuZD1cIndoaXRlXCJdIC0gVGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmUgYXBwbGllZCB0byB0aGUgUVIgY29kZS5cbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtiYWNrZ3JvdW5kQWxwaGE9MV0gLSBUaGUgYmFja2dyb3VuZCBhbHBoYSB0byBiZSBhcHBsaWVkIHRvIHRoZSBRUiBjb2RlLlxuICAgKiBAcHJvcGVydHkgeyp9IFtlbGVtZW50XSAtIFRoZSBlbGVtZW50IHRvIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSBRUiBjb2RlIHdoaWNoIG1heSBlaXRoZXIgYmUgYW4gPGNvZGU+Y2FudmFzPC9jb2RlPiBvclxuICAgKiA8Y29kZT5pbWc8L2NvZGU+LiBUaGUgZWxlbWVudChzKSB3aWxsIGJlIGNyZWF0ZWQgaWYgbmVlZGVkLlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW2ZvcmVncm91bmQ9XCJibGFja1wiXSAtIFRoZSBmb3JlZ3JvdW5kIGNvbG9yIHRvIGJlIGFwcGxpZWQgdG8gdGhlIFFSIGNvZGUuXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZm9yZWdyb3VuZEFscGhhPTFdIC0gVGhlIGZvcmVncm91bmQgYWxwaGEgdG8gYmUgYXBwbGllZCB0byB0aGUgUVIgY29kZS5cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtsZXZlbD1cIkxcIl0gLSBUaGUgZXJyb3IgY29ycmVjdGlvbiBsZXZlbCB0byBiZSBhcHBsaWVkIHRvIHRoZSBRUiBjb2RlLlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW21pbWU9XCJpbWFnZS9wbmdcIl0gLSBUaGUgTUlNRSB0eXBlIHRvIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSBpbWFnZSBmb3IgdGhlIFFSIGNvZGUuXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcGFkZGluZ10gLSBUaGUgcGFkZGluZyBmb3IgdGhlIFFSIGNvZGUgaW4gcGl4ZWxzLlxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW3NpemU9MTAwXSAtIFRoZSBzaXplIG9mIHRoZSBRUiBjb2RlIGluIHBpeGVscy5cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFt2YWx1ZT1cIlwiXSAtIFRoZSB2YWx1ZSB0byBiZSBlbmNvZGVkIHdpdGhpbiB0aGUgUVIgY29kZS5cbiAgICovXG5cbiAgdmFyIGluZGV4ID0gUVJpb3VzXzEkMjtcblxuICAvKipcbiAgICogRGVmaW5lcyBhIHNlcnZpY2UgY29udHJhY3QgdGhhdCBtdXN0IGJlIG1ldCBieSBhbGwgaW1wbGVtZW50YXRpb25zLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBjbGFzc1xuICAgKiBAZXh0ZW5kcyBOZXZpc1xuICAgKi9cbiAgdmFyIFNlcnZpY2UgPSBsaXRlLmV4dGVuZCh7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoaXMge0BsaW5rIFNlcnZpY2V9LlxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc2VydmljZSBuYW1lLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAbWVtYmVyb2YgU2VydmljZSNcbiAgICAgKi9cbiAgICBnZXROYW1lOiBmdW5jdGlvbigpIHt9XG5cbiAgfSk7XG5cbiAgdmFyIFNlcnZpY2VfMSA9IFNlcnZpY2U7XG5cbiAgLyoqXG4gICAqIEEgc2VydmljZSBmb3Igd29ya2luZyB3aXRoIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBjbGFzc1xuICAgKiBAZXh0ZW5kcyBTZXJ2aWNlXG4gICAqL1xuICB2YXIgRWxlbWVudFNlcnZpY2UgPSBTZXJ2aWNlXzEuZXh0ZW5kKHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBjYW52YXMgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEltcGxlbWVudGF0aW9ucyBvZiB7QGxpbmsgRWxlbWVudFNlcnZpY2V9IDxiPm11c3Q8L2I+IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHdpdGggdGhlaXIgb3duIHNwZWNpZmljIGxvZ2ljLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Kn0gVGhlIG5ld2x5IGNyZWF0ZWQgY2FudmFzIGVsZW1lbnQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEBtZW1iZXJvZiBFbGVtZW50U2VydmljZSNcbiAgICAgKi9cbiAgICBjcmVhdGVDYW52YXM6IGZ1bmN0aW9uKCkge30sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgaW1hZ2UgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEltcGxlbWVudGF0aW9ucyBvZiB7QGxpbmsgRWxlbWVudFNlcnZpY2V9IDxiPm11c3Q8L2I+IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHdpdGggdGhlaXIgb3duIHNwZWNpZmljIGxvZ2ljLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Kn0gVGhlIG5ld2x5IGNyZWF0ZWQgaW1hZ2UgZWxlbWVudC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQG1lbWJlcm9mIEVsZW1lbnRTZXJ2aWNlI1xuICAgICAqL1xuICAgIGNyZWF0ZUltYWdlOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgZ2V0TmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJ2VsZW1lbnQnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHNwZWNpZmllZCA8Y29kZT5lbGVtZW50PC9jb2RlPiBpcyBhIGNhbnZhcy5cbiAgICAgKlxuICAgICAqIEltcGxlbWVudGF0aW9ucyBvZiB7QGxpbmsgRWxlbWVudFNlcnZpY2V9IDxiPm11c3Q8L2I+IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHdpdGggdGhlaXIgb3duIHNwZWNpZmljIGxvZ2ljLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBlbGVtZW50IC0gdGhlIGVsZW1lbnQgdG8gYmUgY2hlY2tlZFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IDxjb2RlPnRydWU8L2NvZGU+IGlmIDxjb2RlPmVsZW1lbnQ8L2NvZGU+IGlzIGEgY2FudmFzOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAbWVtYmVyb2YgRWxlbWVudFNlcnZpY2UjXG4gICAgICovXG4gICAgaXNDYW52YXM6IGZ1bmN0aW9uKGVsZW1lbnQpIHt9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgPGNvZGU+ZWxlbWVudDwvY29kZT4gaXMgYW4gaW1hZ2UuXG4gICAgICpcbiAgICAgKiBJbXBsZW1lbnRhdGlvbnMgb2Yge0BsaW5rIEVsZW1lbnRTZXJ2aWNlfSA8Yj5tdXN0PC9iPiBvdmVycmlkZSB0aGlzIG1ldGhvZCB3aXRoIHRoZWlyIG93biBzcGVjaWZpYyBsb2dpYy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gZWxlbWVudCAtIHRoZSBlbGVtZW50IHRvIGJlIGNoZWNrZWRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiA8Y29kZT5lbGVtZW50PC9jb2RlPiBpcyBhbiBpbWFnZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQG1lbWJlcm9mIEVsZW1lbnRTZXJ2aWNlI1xuICAgICAqL1xuICAgIGlzSW1hZ2U6IGZ1bmN0aW9uKGVsZW1lbnQpIHt9XG5cbiAgfSk7XG5cbiAgdmFyIEVsZW1lbnRTZXJ2aWNlXzEgPSBFbGVtZW50U2VydmljZTtcblxuICAvKipcbiAgICogQW4gaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIEVsZW1lbnRTZXJ2aWNlfSBpbnRlbmRlZCBmb3IgdXNlIHdpdGhpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQGNsYXNzXG4gICAqIEBleHRlbmRzIEVsZW1lbnRTZXJ2aWNlXG4gICAqL1xuICB2YXIgQnJvd3NlckVsZW1lbnRTZXJ2aWNlID0gRWxlbWVudFNlcnZpY2VfMS5leHRlbmQoe1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgY3JlYXRlQ2FudmFzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgY3JlYXRlSW1hZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBpc0NhbnZhczogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgaXNJbWFnZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIH1cblxuICB9KTtcblxuICB2YXIgQnJvd3NlckVsZW1lbnRTZXJ2aWNlXzEgPSBCcm93c2VyRWxlbWVudFNlcnZpY2U7XG5cbiAgaW5kZXgudXNlKG5ldyBCcm93c2VyRWxlbWVudFNlcnZpY2VfMSgpKTtcblxuICB2YXIgUVJpb3VzXzEgPSBpbmRleDtcblxuICByZXR1cm4gUVJpb3VzXzE7XG5cbn0pKSk7XG5cblxufSk7XG5cbnZhciB2UXJpb3VzbHkgPSB7IHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3ZtID0gdGhpczt2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oO3JldHVybiBfYygnZGl2JywgW19jKCdjYW52YXMnLCB7IHJlZjogXCJxcmNvZGVcIiB9KV0pO1xuICAgIH0sIHN0YXRpY1JlbmRlckZuczogW10sXG4gICAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHsgcXJpb3VzOiBudWxsIH07XG4gICAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICd3aGl0ZSdcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZEFscGhhOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwLjBcbiAgICAgICAgfSxcbiAgICAgICAgZm9yZWdyb3VuZDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2JsYWNrJ1xuICAgICAgICB9LFxuICAgICAgICBmb3JlZ3JvdW5kQWxwaGE6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEuMFxuICAgICAgICB9LFxuICAgICAgICBsZXZlbDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ0wnXG4gICAgICAgIH0sXG4gICAgICAgIG1pbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdpbWFnZS9wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBmdW5jdGlvbiBiYWNrZ3JvdW5kKCkge1xuICAgICAgICAgICAgdGhpcy5xcmlvdXMuYmFja2dyb3VuZCA9IHRoaXMuYmFja2dyb3VuZDtcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZEFscGhhOiBmdW5jdGlvbiBiYWNrZ3JvdW5kQWxwaGEoKSB7XG4gICAgICAgICAgICB0aGlzLnFyaW91cy5iYWNrZ3JvdW5kQWxwaGEgPSB0aGlzLmJhY2tncm91bmRBbHBoYTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9yZWdyb3VuZDogZnVuY3Rpb24gZm9yZWdyb3VuZCgpIHtcbiAgICAgICAgICAgIHRoaXMucXJpb3VzLmZvcmVncm91bmQgPSB0aGlzLmZvcmVncm91bmQ7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcmVncm91bmRBbHBoYTogZnVuY3Rpb24gZm9yZWdyb3VuZEFscGhhKCkge1xuICAgICAgICAgICAgdGhpcy5xcmlvdXMuZm9yZWdyb3VuZEFscGhhID0gdGhpcy5mb3JlZ3JvdW5kQWxwaGE7XG4gICAgICAgIH0sXG4gICAgICAgIGxldmVsOiBmdW5jdGlvbiBsZXZlbCgpIHtcbiAgICAgICAgICAgIHRoaXMucXJpb3VzLmxldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgICAgfSxcbiAgICAgICAgbWltZTogZnVuY3Rpb24gbWltZSgpIHtcbiAgICAgICAgICAgIHRoaXMucXJpb3VzLm1pbWUgPSB0aGlzLm1pbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHBhZGRpbmc6IGZ1bmN0aW9uIHBhZGRpbmcoKSB7XG4gICAgICAgICAgICB0aGlzLnFyaW91cy5wYWRkaW5nID0gdGhpcy5wYWRkaW5nO1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgICAgICAgdGhpcy5xcmlvdXMuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5xcmlvdXMudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuJHJlZnMucXJjb2RlO1xuICAgICAgICB2YXIgYmFja2dyb3VuZCA9IHRoaXMuYmFja2dyb3VuZDtcbiAgICAgICAgdmFyIGJhY2tncm91bmRBbHBoYSA9IHRoaXMuYmFja2dyb3VuZEFscGhhO1xuICAgICAgICB2YXIgZm9yZWdyb3VuZCA9IHRoaXMuZm9yZWdyb3VuZDtcbiAgICAgICAgdmFyIGZvcmVncm91bmRBbHBoYSA9IHRoaXMuZm9yZWdyb3VuZEFscGhhO1xuICAgICAgICB2YXIgbGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgICAgICB2YXIgbWltZSA9IHRoaXMubWltZTtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSB0aGlzLnBhZGRpbmc7XG4gICAgICAgIHZhciBzaXplID0gdGhpcy5zaXplO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIHRoaXMucXJpb3VzID0gbmV3IHFyaW91cyh7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZCxcbiAgICAgICAgICAgIGJhY2tncm91bmRBbHBoYTogYmFja2dyb3VuZEFscGhhLFxuICAgICAgICAgICAgZm9yZWdyb3VuZDogZm9yZWdyb3VuZCxcbiAgICAgICAgICAgIGZvcmVncm91bmRBbHBoYTogZm9yZWdyb3VuZEFscGhhLFxuICAgICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgICAgbWltZTogbWltZSxcbiAgICAgICAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKlxyXG4gKiBAbmFtZSBWdWVKUyB2UXJpb3VzbHkgKHZ1ZS1xcmlvdXNseSlcclxuICogQGRlc2NyaXB0aW9uIENvbXBvbmVudCB0byBnZW5lcmF0ZSBIVE1MIGNhbnZhcyBRUiBjb2RlcyBmb3IgVnVlLmpzIDIuMFxyXG4gKiBAYXV0aG9yIFRoZW9kb3JlIE1lc3NpbmV6aXMgPHRoZW9AdGhlb21lc3Npbi5jb20+XHJcbiAqIEBmaWxlIHZ1ZS1xcmlvdXNseSBwbHVnaW4gZGVmaW5pdGlvblxyXG4gKi9cblxudmFyIFZ1ZVFyaW91c2x5ID0ge1xuICAgIGluc3RhbGw6IGZ1bmN0aW9uIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZS5jb21wb25lbnQoJ3FyaW91c2x5JywgdlFyaW91c2x5KTtcbiAgICB9XG59O1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICAgIHdpbmRvdy5WdWUudXNlKFZ1ZVFyaW91c2x5KTtcbn1cblxucmV0dXJuIFZ1ZVFyaW91c2x5O1xuXG59KSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
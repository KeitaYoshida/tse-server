(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~item_data~model_mst~order~product_list~readfile"],{

/***/ "./node_modules/balanced-match/index.js":
/*!**********************************************!*\
  !*** ./node_modules/balanced-match/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/brace-expansion/index.js":
/*!***********************************************!*\
  !*** ./node_modules/brace-expansion/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(/*! concat-map */ "./node_modules/concat-map/index.js");
var balanced = __webpack_require__(/*! balanced-match */ "./node_modules/balanced-match/index.js");

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),

/***/ "./node_modules/browser-image-compression/dist/browser-image-compression.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/browser-image-compression/dist/browser-image-compression.mjs ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Browser Image Compression
 * v1.0.6
 * by Donald <donaldcwl@gmail.com>
 * https://github.com/Donaldcwl/browser-image-compression
 */

function _slicedToArray(e,n){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,n){var r=[],t=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(e){a=!0,i=e}finally{try{t||null==s.return||s.return()}finally{if(a)throw i}}return r}(e,n)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var e="undefined"!=typeof window&&window.cordova&&window.cordova.require("cordova/modulemapper"),CustomFile=e&&e.getOriginalSymbol(window,"File")||File,CustomFileReader=e&&e.getOriginalSymbol(window,"FileReader")||FileReader;function getDataUrlFromFile(e){return new Promise(function(n,r){var t=new CustomFileReader;t.onload=function(){return n(t.result)},t.onerror=function(e){return r(e)},t.readAsDataURL(e)})}function getFilefromDataUrl(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();return new Promise(function(t){for(var a=e.split(","),i=a[0].match(/:(.*?);/)[1],o=atob(a[1]),s=o.length,c=new Uint8Array(s);s--;)c[s]=o.charCodeAt(s);var u=new Blob([c],{type:i});u.name=n,u.lastModified=r,t(u)})}function loadImage(e){return new Promise(function(n,r){var t=new Image;t.onload=function(){return n(t)},t.onerror=function(e){return r(e)},t.src=e})}function drawImageInCanvas(e){var n=_slicedToArray(getNewCanvasAndCtx(e.width,e.height),2),r=n[0];return n[1].drawImage(e,0,0,r.width,r.height),r}function drawFileInCanvas(e){return new Promise(function(n,r){var t,a,i=function $Try_1_Post(){try{return a=drawImageInCanvas(t),n([t,a])}catch(e){return r(e)}},o=function $Try_1_Catch(n){try{return getDataUrlFromFile(e).then(function(e){try{return loadImage(e).then(function(e){try{return t=e,i()}catch(e){return r(e)}},r)}catch(e){return r(e)}},r)}catch(e){return r(e)}};try{return createImageBitmap(e).then(function(e){try{return t=e,i()}catch(e){return o()}},o)}catch(e){o()}})}function canvasToFile(e,n,r,t){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return new Promise(function(i,o){var s;return"function"==typeof OffscreenCanvas&&e instanceof OffscreenCanvas?e.convertToBlob({type:n,quality:a}).then(function(e){try{return(s=e).name=r,s.lastModified=t,$If_4.call(this)}catch(e){return o(e)}}.bind(this),o):getFilefromDataUrl(e.toDataURL(n,a),r,t).then(function(e){try{return s=e,$If_4.call(this)}catch(e){return o(e)}}.bind(this),o);function $If_4(){return i(s)}})}function getExifOrientation(e){return new Promise(function(n,r){var t=new CustomFileReader;t.onload=function(e){var r=new DataView(e.target.result);if(65496!=r.getUint16(0,!1))return n(-2);for(var t=r.byteLength,a=2;a<t;){if(r.getUint16(a+2,!1)<=8)return n(-1);var i=r.getUint16(a,!1);if(a+=2,65505==i){if(1165519206!=r.getUint32(a+=2,!1))return n(-1);var o=18761==r.getUint16(a+=6,!1);a+=r.getUint32(a+4,o);var s=r.getUint16(a,o);a+=2;for(var c=0;c<s;c++)if(274==r.getUint16(a+12*c,o))return n(r.getUint16(a+12*c+8,o))}else{if(65280!=(65280&i))break;a+=r.getUint16(a,!1)}}return n(-1)},t.onerror=function(e){return r(e)},t.readAsArrayBuffer(e)})}function handleMaxWidthOrHeight(e,n){var r,t=e.width,a=e.height,i=n.maxWidthOrHeight,o=e;if(Number.isInteger(i)&&(t>i||a>i)){var s=_slicedToArray(getNewCanvasAndCtx(t,a),2);o=s[0],r=s[1],t>a?(o.width=i,o.height=a/t*i):(o.width=t/a*i,o.height=i),r.drawImage(e,0,0,o.width,o.height)}return o}function followExifOrientation(e,n){var r=e.width,t=e.height,a=_slicedToArray(getNewCanvasAndCtx(r,t),2),i=a[0],o=a[1];switch(4<n&&n<9?(i.width=t,i.height=r):(i.width=r,i.height=t),n){case 2:o.transform(-1,0,0,1,r,0);break;case 3:o.transform(-1,0,0,-1,r,t);break;case 4:o.transform(1,0,0,-1,0,t);break;case 5:o.transform(0,1,1,0,0,0);break;case 6:o.transform(0,1,-1,0,t,0);break;case 7:o.transform(0,-1,-1,0,t,r);break;case 8:o.transform(0,-1,1,0,0,r)}return o.drawImage(e,0,0,r,t),i}function getNewCanvasAndCtx(e,n){var r,t;try{t=(r=new OffscreenCanvas(e,n)).getContext("2d")}catch(e){t=(r=document.createElement("canvas")).getContext("2d")}return r.width=e,r.height=n,[r,t]}function compress(e,n){return new Promise(function(r,t){var a,i,o,s,c,u;return a=n.maxIteration||10,i=1024*n.maxSizeMB*1024,drawFileInCanvas(e).then(function(l){try{var m=_slicedToArray(l,2);return m[0],o=handleMaxWidthOrHeight(o=m[1],n),new Promise(function(r,t){var a;if(!(a=n.exifOrientation))return getExifOrientation(e).then(function(e){try{return a=e,$If_2.call(this)}catch(e){return t(e)}}.bind(this),t);function $If_2(){return r(a)}return $If_2.call(this)}).then(function(l){try{return n.exifOrientation=l,o=followExifOrientation(o,n.exifOrientation),s=1,canvasToFile(o,e.type,e.name,e.lastModified,s).then(function(n){try{var l,m=function $Loop_3(){if(a--&&u.size>i){var n,r,c,l=_slicedToArray(getNewCanvasAndCtx(n=.9*o.width,r=.9*o.height),2);return c=l[0],l[1].drawImage(o,0,0,n,r),"image/jpeg"===e.type&&(s*=.9),canvasToFile(c,e.type,e.name,e.lastModified,s).then(function(e){try{return u=e,o=c,$Loop_3}catch(e){return t(e)}},t)}return[1]},f=function $Loop_3_exit(){return r(u)};return(c=n).size<=i?r(c):(u=c,(l=function(e){for(;e;){if(e.then)return void e.then(l,t);try{if(e.pop){if(e.length)return e.pop()?f.call(this):e;e=m}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(m))}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)})}var n,r=0;var t=function createWorker(e){return new Worker(URL.createObjectURL(new Blob(["(".concat(e,")()")])))}(function(){var e=!1;self.addEventListener("message",function(n){return new Promise(function(r,t){var a,i,o,s,c=n.data;a=c.file,i=c.id,o=c.imageCompressionLibUrl,s=c.options;var u=function $Try_1_Post(){try{return r()}catch(e){return t(e)}},l=function $Try_1_Catch(e){try{return self.postMessage({error:e.message+"\n"+e.stack,id:i}),u()}catch(e){return t(e)}};try{var m;return e||(importScripts(o),e=!0),imageCompression(a,s).then(function(e){try{return m=e,self.postMessage({file:m,id:i}),u()}catch(e){return l(e)}},l)}catch(e){l(e)}})})});function compressOnWebWorker(e,a){return new Promise(function(i,o){return new Promise(function(s,c){n||(n=function createSourceObject(e){return URL.createObjectURL(new Blob([e],{type:"application/javascript"}))}("\n    function imageCompression (){return (".concat(imageCompression,").apply(null, arguments)}\n\n    imageCompression.getDataUrlFromFile = ").concat(imageCompression.getDataUrlFromFile,"\n    imageCompression.getFilefromDataUrl = ").concat(imageCompression.getFilefromDataUrl,"\n    imageCompression.loadImage = ").concat(imageCompression.loadImage,"\n    imageCompression.drawImageInCanvas = ").concat(imageCompression.drawImageInCanvas,"\n    imageCompression.drawFileInCanvas = ").concat(imageCompression.drawFileInCanvas,"\n    imageCompression.canvasToFile = ").concat(imageCompression.canvasToFile,"\n    imageCompression.getExifOrientation = ").concat(imageCompression.getExifOrientation,"\n    imageCompression.handleMaxWidthOrHeight = ").concat(imageCompression.handleMaxWidthOrHeight,"\n    imageCompression.followExifOrientation = ").concat(imageCompression.followExifOrientation,"\n\n    getDataUrlFromFile = imageCompression.getDataUrlFromFile\n    getFilefromDataUrl = imageCompression.getFilefromDataUrl\n    loadImage = imageCompression.loadImage\n    drawImageInCanvas = imageCompression.drawImageInCanvas\n    drawFileInCanvas = imageCompression.drawFileInCanvas\n    canvasToFile = imageCompression.canvasToFile\n    getExifOrientation = imageCompression.getExifOrientation\n    handleMaxWidthOrHeight = imageCompression.handleMaxWidthOrHeight\n    followExifOrientation = imageCompression.followExifOrientation\n\n    getNewCanvasAndCtx = ").concat(getNewCanvasAndCtx,"\n    \n    CustomFileReader = FileReader\n    \n    CustomFile = File\n    \n    function _slicedToArray(arr, n) { return arr }\n\n    function compress (){return (").concat(compress,").apply(null, arguments)}\n    ")));var u=r++;return t.addEventListener("message",function handler(e){e.data.id===u&&(t.removeEventListener("message",handler),e.data.error&&o(new Error(e.data.error)),i(e.data.file))}),t.postMessage({file:e,id:u,imageCompressionLibUrl:n,options:a}),s()})})}function imageCompression(e,n){return new Promise(function(r,t){var a,i;if(n.maxSizeMB=n.maxSizeMB||Number.POSITIVE_INFINITY,n.useWebWorker="boolean"!=typeof n.useWebWorker||n.useWebWorker,!(e instanceof Blob||e instanceof CustomFile))return t(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return t(new Error("The file given is not an image"));if(i="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,!n.useWebWorker||"function"!=typeof Worker||i)return compress(e,n).then(function(e){try{return a=e,$If_3.call(this)}catch(e){return t(e)}}.bind(this),t);var o=function(){try{return $If_3.call(this)}catch(e){return t(e)}}.bind(this),s=function $Try_1_Catch(r){try{return console.warn("Run compression in web worker failed:",r,", fall back to main thread"),compress(e,n).then(function(e){try{return a=e,o()}catch(e){return t(e)}},t)}catch(e){return t(e)}};try{return compressOnWebWorker(e,n).then(function(e){try{return a=e,o()}catch(e){return s(e)}},s)}catch(e){s(e)}function $If_3(){try{a.name=e.name,a.lastModified=e.lastModified}catch(e){}return r(a)}})}imageCompression.getDataUrlFromFile=getDataUrlFromFile,imageCompression.getFilefromDataUrl=getFilefromDataUrl,imageCompression.loadImage=loadImage,imageCompression.drawImageInCanvas=drawImageInCanvas,imageCompression.drawFileInCanvas=drawFileInCanvas,imageCompression.canvasToFile=canvasToFile,imageCompression.getExifOrientation=getExifOrientation,imageCompression.handleMaxWidthOrHeight=handleMaxWidthOrHeight,imageCompression.followExifOrientation=followExifOrientation;/* harmony default export */ __webpack_exports__["default"] = (imageCompression);
//# sourceMappingURL=browser-image-compression.mjs.map


/***/ }),

/***/ "./node_modules/concat-map/index.js":
/*!******************************************!*\
  !*** ./node_modules/concat-map/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/minimatch/minimatch.js":
/*!*********************************************!*\
  !*** ./node_modules/minimatch/minimatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js")
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(/*! brace-expansion */ "./node_modules/brace-expansion/index.js")

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vue-my-photos/dist/lightbox.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-my-photos/dist/lightbox.esm.js ***!
  \*********************************************************/
/*! exports provided: default, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
    props: {
        // images = [{ name:'image1.jpg', alt:'Redwoods', filter:'nature' }, ...]
        images: {
            type: Array,
            required: true
        },
        // Used to display a subset of photos. If used, images array must contain a property
        // titled 'filter' which contains the desired filter string
        filter: {
            type: String,
            default: 'all'
        },
        // Used if images are located in a separate folder (e.g. '/images/')
        directory: {
            type: String,
            default: ''
        },
        // Used to set the duration in miliseconds of key/mouse inactivity before caption
        // and arrows disappear
        timeoutDuration: {
            type: Number,
            default: 3000
        }
    },
    data: function data() {
        return {
            visible: false,        // Lightbox not visible by default
            controlsVisible: true, // Lightbox controls (arrows, caption, close button)
            index: 0,              // Index indicates which photo to display. Default to 1st photo
            timer: null          // Timer to show/hide lightbox controls           
        }
    },
    mounted: function mounted() {
        window.addEventListener('keydown', this.keyEventListener);
        window.addEventListener('mousemove',this.mouseEventListener);
        window.addEventListener('touchmove',this.mouseEventListener);
        window.addEventListener('mouseup',this.mouseEventListener);
    },
    destroyed: function destroyed() {
        window.removeEventListener('keydown', this.keyEventListener);
        window.removeEventListener('mousemove',this.mouseEventListener);
        window.removeEventListener('touchmove',this.mouseEventListener);
        window.removeEventListener('mouseup',this.mouseEventListener);
    },
    methods: {
        show: function show(imageName) {
            var this$1 = this;

            this.visible = true;
            this.controlsVisible = true;
            var that = this;

            // Find the index of the image passed to Lightbox
            for(var i = 0; i < this.filteredImages.length; i++){
                if(this$1.filteredImages[i].name == imageName) {
                    this$1.index = i;
                    break;
                }
            }
            clearTimeout(this.timer);
            this.timer = setTimeout(function() {that.controlsVisible = false;}, that.timeoutDuration);
            this.preloadNextImage();
        },
        hide: function hide() {
            this.visible = false;
            this.index = 0;
            clearTimeout(this.timer);
        },
        has_next: function has_next() {
            return (this.index + 1 < this.filteredImages.length);
        },
        has_prev: function has_prev() {
            return (this.index - 1 >= 0);
        },
        prev: function prev() {
            if (this.has_prev()) {
                this.index -= 1;
            }
        },
        next: function next() {
            if (this.has_next()) {
                this.index += 1;
                this.preloadNextImage();
            }
        },
        keyEventListener: function keyEventListener(e) {
            if (this.visible) {
                var that = this;
                this.controlsVisible = true;
                clearTimeout(this.timer);
                this.timer = setTimeout(function() {that.controlsVisible = false;}, that.timeoutDuration);

                switch (e.key) {
                    case 'ArrowRight':
                        this.next();
                        break;
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                    case ' ':
                        e.preventDefault();
                        break;
                    case 'Escape':
                        this.hide();
                        break;
                }
            }
        },
        // This event shows the arrows and caption on the lightbox when the mouse is moved or clicked.
        // Also used for touch events on touchscreen devices. The elements are set to disappear
        // after a given duration via a timer.
        mouseEventListener: function mouseEventListener(e) {
            if (this.visible) {
                var that = this;
                this.controlsVisible = true;
                clearTimeout(this.timer);
                this.timer = setTimeout(function() {that.controlsVisible = false;}, that.timeoutDuration);
            }
        },
        preloadNextImage: function preloadNextImage () {
            if (this.has_next()){
                try {
                    var _img = new Image();
                    _img.src = this.directory + this.filteredImages[this.index + 1].name;
                } catch (e) { }
            }
        }
    },
    computed: {
        filteredImages: function () {
            var that = this;
            if (that.filter === 'all' || !that.filter.length){
                return that.images;
            }
            else {
                return that.images.filter(function (item) {
                    return item.filter === that.filter;
                })
            }
        }
    }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c("transition", { attrs: { name: "lightbox-fade" } }, [
        _vm.visible
          ? _c(
              "div",
              {
                staticClass: "lightbox",
                on: {
                  mousedown: function($event) {
                    $event.stopPropagation();
                    return _vm.hide($event)
                  },
                  touchdown: function($event) {
                    $event.stopPropagation();
                    return _vm.hide($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "lightbox-close",
                    on: {
                      mousedown: function($event) {
                        $event.stopPropagation();
                        return _vm.hide($event)
                      },
                      touchdown: function($event) {
                        $event.stopPropagation();
                        return _vm.hide($event)
                      }
                    }
                  },
                  [_vm._v("×")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "lightbox-arrow lightbox-arrow-left",
                    on: {
                      mousedown: function($event) {
                        $event.stopPropagation();
                        $event.preventDefault();
                        return _vm.prev($event)
                      },
                      touchdown: function($event) {
                        $event.stopPropagation();
                        $event.preventDefault();
                        return _vm.prev($event)
                      }
                    }
                  },
                  [
                    _c("transition", { attrs: { name: "lightbox-fade" } }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.has_prev() && _vm.controlsVisible,
                              expression: "has_prev() && controlsVisible"
                            }
                          ],
                          staticClass: "lightbox-arrow-left-icon"
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                height: "24",
                                viewBox: "0 0 24 24",
                                width: "24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }
                            },
                            [
                              _c("circle", {
                                attrs: {
                                  cx: "12",
                                  cy: "12",
                                  r: "12",
                                  fill: "rgba(20, 20, 20, 0.4)"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z",
                                  fill: "white"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: { d: "M0-.5h24v24H0z", fill: "none" }
                              })
                            ]
                          )
                        ]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "lightbox-arrow lightbox-arrow-right",
                    on: {
                      mousedown: function($event) {
                        $event.stopPropagation();
                        $event.preventDefault();
                        return _vm.next($event)
                      },
                      touchdown: function($event) {
                        $event.stopPropagation();
                        $event.preventDefault();
                        return _vm.next($event)
                      }
                    }
                  },
                  [
                    _c("transition", { attrs: { name: "lightbox-fade" } }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.has_next() && _vm.controlsVisible,
                              expression: "has_next() && controlsVisible"
                            }
                          ],
                          staticClass: "lightbox-arrow-right-icon"
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                height: "24",
                                viewBox: "0 0 24 24",
                                width: "24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }
                            },
                            [
                              _c("circle", {
                                attrs: {
                                  cx: "12",
                                  cy: "12",
                                  r: "12",
                                  fill: "rgba(20, 20, 20, 0.4)"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z",
                                  fill: "white"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: { d: "M0-.25h24v24H0z", fill: "none" }
                              })
                            ]
                          )
                        ]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("transition", { attrs: { name: "lightbox-fade" } }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.controlsVisible &&
                            _vm.filteredImages[_vm.index].alt,
                          expression:
                            "controlsVisible && filteredImages[index].alt"
                        }
                      ],
                      staticClass: "lightbox-caption",
                      on: {
                        mousedown: function($event) {
                          $event.stopPropagation();
                        },
                        touchdown: function($event) {
                          $event.stopPropagation();
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { unselectable: "on" } }, [
                        _vm._v(_vm._s(_vm.filteredImages[_vm.index].alt))
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "lightbox-main",
                    on: {
                      mousedown: function($event) {
                        $event.stopPropagation();
                        return _vm.hide($event)
                      },
                      touchdown: function($event) {
                        $event.stopPropagation();
                        return _vm.hide($event)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "lightbox-image-container",
                        on: {
                          mousedown: function($event) {
                            $event.stopPropagation();
                          },
                          touchdown: function($event) {
                            $event.stopPropagation();
                          }
                        }
                      },
                      [
                        _c(
                          "transition",
                          { attrs: { name: "lightbox-slide", mode: "out-in" } },
                          [
                            _c("div", {
                              key: _vm.index,
                              staticClass: "lightbox-image",
                              style: {
                                backgroundImage:
                                  "url(" +
                                  _vm.directory +
                                  _vm.filteredImages[_vm.index].name +
                                  ")"
                              }
                            })
                          ]
                        )
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-0861d65e_0", { source: "\n.lightbox {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, .9);\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 200;\n    color: rgba(255,255,255,0.8);\n}\n.lightbox-close {\n    position: fixed;\n    z-index: 210;\n    right: 0;\n    top: 0;\n    padding: 1rem;\n    font-size: 1.7rem;\n    cursor: pointer;\n    width: 4rem;\n    height: 4rem;\n    color: white;\n}\n.lightbox-main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n.lightbox-arrow {\n    padding: 0 2rem;\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    padding: 0 2rem;\n    height: 100%;\n    width: 2rem;\n    z-index: 100;\n}\n.lightbox-arrow-right { right: 0;\n}\n.lightbox-arrow-left { left: 0;\n}\n.lightbox-image-container {\n    -webkit-box-flex: 1;\n    width: 20%;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n}\n.lightbox-image {\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n}\n.lightbox-caption {\n    position: absolute;\n    bottom: 15px;\n    width: 100%;\n    z-index: 100;\n    text-align: center;\n    text-shadow: 1px 1px 3px rgb(26, 26, 26);\n}\n.lightbox-caption span {\n    border-radius: 12px;\n    background-color: rgba(0, 0, 0, .6);\n    padding: 2px 10px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.lightbox-slide-enter-active,\n.lightbox-slide-leave-active {\n    transition: all 0.4s ease;\n}\n.lightbox-slide-enter {\n    -webkit-transform: translateX(100px);\n    -ms-transform: translateX(100px);\n    transform: translateX(100px);\n    opacity: 0;\n}\n.lightbox-slide-leave-to {\n    -webkit-transform: translateX(-100px);\n    -ms-transform: translateX(-100px);\n    transform: translateX(-100px);\n    opacity: 0;\n}\n.lightbox-fade-enter-active,\n.lightbox-fade-leave-active {\n    transition: all 0.4s ease;\n}\n.lightbox-fade-enter,\n.lightbox-fade-leave-to {\n    opacity: 0;\n}\n\n", map: {"version":3,"sources":["/Users/andrew/Documents/GitHub/vue-image-lightbox/src/lightbox.vue"],"names":[],"mappings":";AAgMA;IACA,gBAAA;IACA,OAAA;IACA,QAAA;IACA,8BAAA;IACA,YAAA;IACA,aAAA;IACA,qBAAA;IACA,qBAAA;IACA,sBAAA;IACA,cAAA;IACA,wBAAA;IACA,oBAAA;IACA,aAAA;IACA,6BAAA;CACA;AAEA;IACA,gBAAA;IACA,aAAA;IACA,SAAA;IACA,OAAA;IACA,cAAA;IACA,kBAAA;IACA,gBAAA;IACA,YAAA;IACA,aAAA;IACA,aAAA;CACA;AAEA;IACA,qBAAA;IACA,qBAAA;IACA,sBAAA;IACA,cAAA;IACA,YAAA;IACA,aAAA;CACA;AAEA;IACA,gBAAA;IACA,gBAAA;IACA,qBAAA;IACA,qBAAA;IACA,sBAAA;IACA,cAAA;IACA,wBAAA;IACA,oBAAA;IACA,mBAAA;IACA,gBAAA;IACA,aAAA;IACA,YAAA;IACA,aAAA;CACA;AAEA,wBAAA,SAAA;CAAA;AAEA,uBAAA,QAAA;CAAA;AAEA;IACA,oBAAA;IACA,WAAA;IACA,gBAAA;IACA,YAAA;IACA,QAAA;CACA;AAEA;IACA,YAAA;IACA,aAAA;IACA,yBAAA;IACA,6BAAA;IACA,6BAAA;CACA;AAEA;IACA,mBAAA;IACA,aAAA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;IACA,yCAAA;CACA;AAEA;IACA,oBAAA;IACA,oCAAA;IACA,kBAAA;IACA,0BAAA;IACA,uBAAA;IACA,sBAAA;IACA,kBAAA;CACA;AAEA;;IAEA,0BAAA;CACA;AAEA;IACA,qCAAA;IACA,iCAAA;IACA,6BAAA;IACA,WAAA;CACA;AAEA;IACA,sCAAA;IACA,kCAAA;IACA,8BAAA;IACA,WAAA;CACA;AAEA;;IAEA,0BAAA;CACA;AAEA;;IAEA,WAAA;CACA","file":"lightbox.vue","sourcesContent":["<template>\n    <div>\n        <transition name=\"lightbox-fade\">\n            <div class=\"lightbox\" v-if=\"visible\" @mousedown.stop=\"hide\" @touchdown.stop=\"hide\">\n                    <div class=\"lightbox-close\" @mousedown.stop=\"hide\" @touchdown.stop=\"hide\">&times;</div>\n                    <div class=\"lightbox-arrow lightbox-arrow-left\" @mousedown.stop.prevent=\"prev\" @touchdown.stop.prevent=\"prev\">\n                        <transition name=\"lightbox-fade\">\n                            <div class=\"lightbox-arrow-left-icon\" v-show=\"has_prev() && controlsVisible\">\n                                <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"rgba(20, 20, 20, 0.4)\" />\n                                    <path d=\"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z\" fill=\"white\"/>\n                                    <path d=\"M0-.5h24v24H0z\" fill=\"none\"/>\n                                </svg>\n                            </div>\n                        </transition>\n                    </div>\n                    <div class=\"lightbox-arrow lightbox-arrow-right\" @mousedown.stop.prevent=\"next\" @touchdown.stop.prevent=\"next\" >\n                        <transition name=\"lightbox-fade\">\n                            <div class=\"lightbox-arrow-right-icon\" v-show=\"has_next() && controlsVisible\" >\n                                <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"rgba(20, 20, 20, 0.4)\" />\n                                    <path d=\"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z\" fill=\"white\" />\n                                    <path d=\"M0-.25h24v24H0z\" fill=\"none\"/>\n                                </svg>\n                            </div>\n                        </transition>\n                    </div>\n                    <transition name=\"lightbox-fade\">\n                        <div class=\"lightbox-caption\" v-show=\"controlsVisible && filteredImages[index].alt\" @mousedown.stop @touchdown.stop>\n                            <span unselectable=\"on\">{{ filteredImages[index].alt }}</span>\n                        </div>\n                    </transition>\n                <div class=\"lightbox-main\" @mousedown.stop=\"hide\" @touchdown.stop=\"hide\">\n                    <div class=\"lightbox-image-container\" @mousedown.stop @touchdown.stop>\n                        <transition name=\"lightbox-slide\" mode=\"out-in\">\n                            <div class=\"lightbox-image\" :key=\"index\" :style=\"{ 'backgroundImage':'url(' + directory + filteredImages[index].name + ')'}\">\n                            </div>\n                        </transition>\n                    </div>\n                </div>\n            </div>\n        </transition>\n    </div>\n</template>\n\n<script>\n    export default {\n        props: {\n            // images = [{ name:'image1.jpg', alt:'Redwoods', filter:'nature' }, ...]\n            images: {\n                type: Array,\n                required: true\n            },\n            // Used to display a subset of photos. If used, images array must contain a property\n            // titled 'filter' which contains the desired filter string\n            filter: {\n                type: String,\n                default: 'all'\n            },\n            // Used if images are located in a separate folder (e.g. '/images/')\n            directory: {\n                type: String,\n                default: ''\n            },\n            // Used to set the duration in miliseconds of key/mouse inactivity before caption\n            // and arrows disappear\n            timeoutDuration: {\n                type: Number,\n                default: 3000\n            }\n        },\n        data() {\n            return {\n                visible: false,        // Lightbox not visible by default\n                controlsVisible: true, // Lightbox controls (arrows, caption, close button)\n                index: 0,              // Index indicates which photo to display. Default to 1st photo\n                timer: null          // Timer to show/hide lightbox controls           \n            }\n        },\n        mounted() {\n            window.addEventListener('keydown', this.keyEventListener);\n            window.addEventListener('mousemove',this.mouseEventListener);\n            window.addEventListener('touchmove',this.mouseEventListener);\n            window.addEventListener('mouseup',this.mouseEventListener);\n        },\n        destroyed() {\n            window.removeEventListener('keydown', this.keyEventListener);\n            window.removeEventListener('mousemove',this.mouseEventListener);\n            window.removeEventListener('touchmove',this.mouseEventListener);\n            window.removeEventListener('mouseup',this.mouseEventListener);\n        },\n        methods: {\n            show(imageName) {\n                this.visible = true;\n                this.controlsVisible = true;\n                var that = this;\n\n                // Find the index of the image passed to Lightbox\n                for(var i = 0; i < this.filteredImages.length; i++){\n                    if(this.filteredImages[i].name == imageName) {\n                        this.index = i;\n                        break;\n                    }\n                }\n                clearTimeout(this.timer);\n                this.timer = setTimeout(function() {that.controlsVisible = false}, that.timeoutDuration);\n                this.preloadNextImage();\n            },\n            hide() {\n                this.visible = false;\n                this.index = 0;\n                clearTimeout(this.timer);\n            },\n            has_next() {\n                return (this.index + 1 < this.filteredImages.length);\n            },\n            has_prev() {\n                return (this.index - 1 >= 0);\n            },\n            prev() {\n                if (this.has_prev()) {\n                    this.index -= 1;\n                }\n            },\n            next() {\n                if (this.has_next()) {\n                    this.index += 1;\n                    this.preloadNextImage();\n                }\n            },\n            keyEventListener(e) {\n                if (this.visible) {\n                    var that = this;\n                    this.controlsVisible = true;\n                    clearTimeout(this.timer);\n                    this.timer = setTimeout(function() {that.controlsVisible = false}, that.timeoutDuration);\n\n                    switch (e.key) {\n                        case 'ArrowRight':\n                            this.next();\n                            break;\n                        case 'ArrowLeft':\n                            this.prev();\n                            break;\n                        case 'ArrowDown':\n                        case 'ArrowUp':\n                        case ' ':\n                            e.preventDefault();\n                            break;\n                        case 'Escape':\n                            this.hide();\n                            break;\n                    }\n                }\n            },\n            // This event shows the arrows and caption on the lightbox when the mouse is moved or clicked.\n            // Also used for touch events on touchscreen devices. The elements are set to disappear\n            // after a given duration via a timer.\n            mouseEventListener(e) {\n                if (this.visible) {\n                    var that = this;\n                    this.controlsVisible = true;\n                    clearTimeout(this.timer);\n                    this.timer = setTimeout(function() {that.controlsVisible = false}, that.timeoutDuration);\n                }\n            },\n            preloadNextImage () {\n                if (this.has_next()){\n                    try {\n                        var _img = new Image();\n                        _img.src = this.directory + this.filteredImages[this.index + 1].name;\n                    } catch (e) { }\n                }\n            }\n        },\n        computed: {\n            filteredImages: function () {\n                var that = this;\n                if (that.filter === 'all' || !that.filter.length){\n                    return that.images;\n                }\n                else {\n                    return that.images.filter(function (item) {\n                        return item.filter === that.filter;\n                    })\n                }\n            }\n        }\n    }\n</script>\n\n<style>\n    .lightbox {\n        position: fixed;\n        top: 0;\n        left: 0;\n        background: rgba(0, 0, 0, .9);\n        width: 100%;\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 200;\n        color: rgba(255,255,255,0.8);\n    }\n\n    .lightbox-close {\n        position: fixed;\n        z-index: 210;\n        right: 0;\n        top: 0;\n        padding: 1rem;\n        font-size: 1.7rem;\n        cursor: pointer;\n        width: 4rem;\n        height: 4rem;\n        color: white;\n    }\n\n    .lightbox-main {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        width: 100%;\n        height: 100%;\n    }\n\n    .lightbox-arrow {\n        padding: 0 2rem;\n        cursor: pointer;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        padding: 0 2rem;\n        height: 100%;\n        width: 2rem;\n        z-index: 100;\n    }\n\n    .lightbox-arrow-right { right: 0; }\n    \n    .lightbox-arrow-left { left: 0;}\n\n    .lightbox-image-container {\n        -webkit-box-flex: 1;\n        width: 20%;\n        -webkit-flex: 1;\n        -ms-flex: 1;\n        flex: 1;\n    }\n\n    .lightbox-image {\n        width: 100%;\n        height: 100%;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: 50% 50%;\n    }\n\n    .lightbox-caption {\n        position: absolute;\n        bottom: 15px;\n        width: 100%;\n        z-index: 100;\n        text-align: center;\n        text-shadow: 1px 1px 3px rgb(26, 26, 26);\n    }\n\n    .lightbox-caption span {\n        border-radius: 12px;\n        background-color: rgba(0, 0, 0, .6);\n        padding: 2px 10px;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    }\n\n    .lightbox-slide-enter-active,\n    .lightbox-slide-leave-active {\n        transition: all 0.4s ease;\n    }\n\n    .lightbox-slide-enter {\n        -webkit-transform: translateX(100px);\n        -ms-transform: translateX(100px);\n        transform: translateX(100px);\n        opacity: 0;\n    }\n\n    .lightbox-slide-leave-to {\n        -webkit-transform: translateX(-100px);\n        -ms-transform: translateX(-100px);\n        transform: translateX(-100px);\n        opacity: 0;\n    }\n\n    .lightbox-fade-enter-active,\n    .lightbox-fade-leave-active {\n        transition: all 0.4s ease;\n    }\n\n    .lightbox-fade-enter,\n    .lightbox-fade-leave-to {\n        opacity: 0;\n    }\n    \n</style>"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/andrew/Documents/GitHub/vue-image-lightbox/src/lightbox.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Lightbox = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('Lightbox', Lightbox);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (Lightbox);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFsYW5jZWQtbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JyYWNlLWV4cGFuc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1pbWFnZS1jb21wcmVzc2lvbi9kaXN0L2Jyb3dzZXItaW1hZ2UtY29tcHJlc3Npb24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25jYXQtbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taW5pbWF0Y2gvbWluaW1hdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1teS1waG90b3MvZGlzdC9saWdodGJveC5lc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFEQSxnQkFBZ0IsbUJBQU8sQ0FBQyxzREFBWTtBQUNwQyxlQUFlLG1CQUFPLENBQUMsOERBQWdCOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFD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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLElBQUk7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFLEVBQUUsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7O0FBRUEsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyw2Q0FBNkM7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IscURBQXFEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixnQ0FBZ0M7QUFDMUQ7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRSxTQUFTOztBQUVwRjtBQUNBLHFEQUFxRCx5Q0FBeUM7O0FBRTlGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixxQ0FBcUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw2QkFBNkIseUNBQXlDO0FBQ3RFLDZCQUE2QixvREFBb0Q7QUFDakYsZ0JBQWdCLHFDQUFxQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSxLQUFLLG1FQUFtRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx1RUFBUSxFQUFDO0FBQ0wiLCJmaWxlIjoidmVuZG9yc35pdGVtX2RhdGF+bW9kZWxfbXN0fm9yZGVyfnByb2R1Y3RfbGlzdH5yZWFkZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gYmFsYW5jZWQ7XG5mdW5jdGlvbiBiYWxhbmNlZChhLCBiLCBzdHIpIHtcbiAgaWYgKGEgaW5zdGFuY2VvZiBSZWdFeHApIGEgPSBtYXliZU1hdGNoKGEsIHN0cik7XG4gIGlmIChiIGluc3RhbmNlb2YgUmVnRXhwKSBiID0gbWF5YmVNYXRjaChiLCBzdHIpO1xuXG4gIHZhciByID0gcmFuZ2UoYSwgYiwgc3RyKTtcblxuICByZXR1cm4gciAmJiB7XG4gICAgc3RhcnQ6IHJbMF0sXG4gICAgZW5kOiByWzFdLFxuICAgIHByZTogc3RyLnNsaWNlKDAsIHJbMF0pLFxuICAgIGJvZHk6IHN0ci5zbGljZShyWzBdICsgYS5sZW5ndGgsIHJbMV0pLFxuICAgIHBvc3Q6IHN0ci5zbGljZShyWzFdICsgYi5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1heWJlTWF0Y2gocmVnLCBzdHIpIHtcbiAgdmFyIG0gPSBzdHIubWF0Y2gocmVnKTtcbiAgcmV0dXJuIG0gPyBtWzBdIDogbnVsbDtcbn1cblxuYmFsYW5jZWQucmFuZ2UgPSByYW5nZTtcbmZ1bmN0aW9uIHJhbmdlKGEsIGIsIHN0cikge1xuICB2YXIgYmVncywgYmVnLCBsZWZ0LCByaWdodCwgcmVzdWx0O1xuICB2YXIgYWkgPSBzdHIuaW5kZXhPZihhKTtcbiAgdmFyIGJpID0gc3RyLmluZGV4T2YoYiwgYWkgKyAxKTtcbiAgdmFyIGkgPSBhaTtcblxuICBpZiAoYWkgPj0gMCAmJiBiaSA+IDApIHtcbiAgICBiZWdzID0gW107XG4gICAgbGVmdCA9IHN0ci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA+PSAwICYmICFyZXN1bHQpIHtcbiAgICAgIGlmIChpID09IGFpKSB7XG4gICAgICAgIGJlZ3MucHVzaChpKTtcbiAgICAgICAgYWkgPSBzdHIuaW5kZXhPZihhLCBpICsgMSk7XG4gICAgICB9IGVsc2UgaWYgKGJlZ3MubGVuZ3RoID09IDEpIHtcbiAgICAgICAgcmVzdWx0ID0gWyBiZWdzLnBvcCgpLCBiaSBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVnID0gYmVncy5wb3AoKTtcbiAgICAgICAgaWYgKGJlZyA8IGxlZnQpIHtcbiAgICAgICAgICBsZWZ0ID0gYmVnO1xuICAgICAgICAgIHJpZ2h0ID0gYmk7XG4gICAgICAgIH1cblxuICAgICAgICBiaSA9IHN0ci5pbmRleE9mKGIsIGkgKyAxKTtcbiAgICAgIH1cblxuICAgICAgaSA9IGFpIDwgYmkgJiYgYWkgPj0gMCA/IGFpIDogYmk7XG4gICAgfVxuXG4gICAgaWYgKGJlZ3MubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBbIGxlZnQsIHJpZ2h0IF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsInZhciBjb25jYXRNYXAgPSByZXF1aXJlKCdjb25jYXQtbWFwJyk7XG52YXIgYmFsYW5jZWQgPSByZXF1aXJlKCdiYWxhbmNlZC1tYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cGFuZFRvcDtcblxudmFyIGVzY1NsYXNoID0gJ1xcMFNMQVNIJytNYXRoLnJhbmRvbSgpKydcXDAnO1xudmFyIGVzY09wZW4gPSAnXFwwT1BFTicrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NDbG9zZSA9ICdcXDBDTE9TRScrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NDb21tYSA9ICdcXDBDT01NQScrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NQZXJpb2QgPSAnXFwwUEVSSU9EJytNYXRoLnJhbmRvbSgpKydcXDAnO1xuXG5mdW5jdGlvbiBudW1lcmljKHN0cikge1xuICByZXR1cm4gcGFyc2VJbnQoc3RyLCAxMCkgPT0gc3RyXG4gICAgPyBwYXJzZUludChzdHIsIDEwKVxuICAgIDogc3RyLmNoYXJDb2RlQXQoMCk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUJyYWNlcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgnXFxcXFxcXFwnKS5qb2luKGVzY1NsYXNoKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxceycpLmpvaW4oZXNjT3BlbilcbiAgICAgICAgICAgIC5zcGxpdCgnXFxcXH0nKS5qb2luKGVzY0Nsb3NlKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxcLCcpLmpvaW4oZXNjQ29tbWEpXG4gICAgICAgICAgICAuc3BsaXQoJ1xcXFwuJykuam9pbihlc2NQZXJpb2QpO1xufVxuXG5mdW5jdGlvbiB1bmVzY2FwZUJyYWNlcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdChlc2NTbGFzaCkuam9pbignXFxcXCcpXG4gICAgICAgICAgICAuc3BsaXQoZXNjT3Blbikuam9pbigneycpXG4gICAgICAgICAgICAuc3BsaXQoZXNjQ2xvc2UpLmpvaW4oJ30nKVxuICAgICAgICAgICAgLnNwbGl0KGVzY0NvbW1hKS5qb2luKCcsJylcbiAgICAgICAgICAgIC5zcGxpdChlc2NQZXJpb2QpLmpvaW4oJy4nKTtcbn1cblxuXG4vLyBCYXNpY2FsbHkganVzdCBzdHIuc3BsaXQoXCIsXCIpLCBidXQgaGFuZGxpbmcgY2FzZXNcbi8vIHdoZXJlIHdlIGhhdmUgbmVzdGVkIGJyYWNlZCBzZWN0aW9ucywgd2hpY2ggc2hvdWxkIGJlXG4vLyB0cmVhdGVkIGFzIGluZGl2aWR1YWwgbWVtYmVycywgbGlrZSB7YSx7YixjfSxkfVxuZnVuY3Rpb24gcGFyc2VDb21tYVBhcnRzKHN0cikge1xuICBpZiAoIXN0cilcbiAgICByZXR1cm4gWycnXTtcblxuICB2YXIgcGFydHMgPSBbXTtcbiAgdmFyIG0gPSBiYWxhbmNlZCgneycsICd9Jywgc3RyKTtcblxuICBpZiAoIW0pXG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnLCcpO1xuXG4gIHZhciBwcmUgPSBtLnByZTtcbiAgdmFyIGJvZHkgPSBtLmJvZHk7XG4gIHZhciBwb3N0ID0gbS5wb3N0O1xuICB2YXIgcCA9IHByZS5zcGxpdCgnLCcpO1xuXG4gIHBbcC5sZW5ndGgtMV0gKz0gJ3snICsgYm9keSArICd9JztcbiAgdmFyIHBvc3RQYXJ0cyA9IHBhcnNlQ29tbWFQYXJ0cyhwb3N0KTtcbiAgaWYgKHBvc3QubGVuZ3RoKSB7XG4gICAgcFtwLmxlbmd0aC0xXSArPSBwb3N0UGFydHMuc2hpZnQoKTtcbiAgICBwLnB1c2guYXBwbHkocCwgcG9zdFBhcnRzKTtcbiAgfVxuXG4gIHBhcnRzLnB1c2guYXBwbHkocGFydHMsIHApO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZnVuY3Rpb24gZXhwYW5kVG9wKHN0cikge1xuICBpZiAoIXN0cilcbiAgICByZXR1cm4gW107XG5cbiAgLy8gSSBkb24ndCBrbm93IHdoeSBCYXNoIDQuMyBkb2VzIHRoaXMsIGJ1dCBpdCBkb2VzLlxuICAvLyBBbnl0aGluZyBzdGFydGluZyB3aXRoIHt9IHdpbGwgaGF2ZSB0aGUgZmlyc3QgdHdvIGJ5dGVzIHByZXNlcnZlZFxuICAvLyBidXQgKm9ubHkqIGF0IHRoZSB0b3AgbGV2ZWwsIHNvIHt9LGF9YiB3aWxsIG5vdCBleHBhbmQgdG8gYW55dGhpbmcsXG4gIC8vIGJ1dCBhe30sYn1jIHdpbGwgYmUgZXhwYW5kZWQgdG8gW2F9YyxhYmNdLlxuICAvLyBPbmUgY291bGQgYXJndWUgdGhhdCB0aGlzIGlzIGEgYnVnIGluIEJhc2gsIGJ1dCBzaW5jZSB0aGUgZ29hbCBvZlxuICAvLyB0aGlzIG1vZHVsZSBpcyB0byBtYXRjaCBCYXNoJ3MgcnVsZXMsIHdlIGVzY2FwZSBhIGxlYWRpbmcge31cbiAgaWYgKHN0ci5zdWJzdHIoMCwgMikgPT09ICd7fScpIHtcbiAgICBzdHIgPSAnXFxcXHtcXFxcfScgKyBzdHIuc3Vic3RyKDIpO1xuICB9XG5cbiAgcmV0dXJuIGV4cGFuZChlc2NhcGVCcmFjZXMoc3RyKSwgdHJ1ZSkubWFwKHVuZXNjYXBlQnJhY2VzKTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkoZSkge1xuICByZXR1cm4gZTtcbn1cblxuZnVuY3Rpb24gZW1icmFjZShzdHIpIHtcbiAgcmV0dXJuICd7JyArIHN0ciArICd9Jztcbn1cbmZ1bmN0aW9uIGlzUGFkZGVkKGVsKSB7XG4gIHJldHVybiAvXi0/MFxcZC8udGVzdChlbCk7XG59XG5cbmZ1bmN0aW9uIGx0ZShpLCB5KSB7XG4gIHJldHVybiBpIDw9IHk7XG59XG5mdW5jdGlvbiBndGUoaSwgeSkge1xuICByZXR1cm4gaSA+PSB5O1xufVxuXG5mdW5jdGlvbiBleHBhbmQoc3RyLCBpc1RvcCkge1xuICB2YXIgZXhwYW5zaW9ucyA9IFtdO1xuXG4gIHZhciBtID0gYmFsYW5jZWQoJ3snLCAnfScsIHN0cik7XG4gIGlmICghbSB8fCAvXFwkJC8udGVzdChtLnByZSkpIHJldHVybiBbc3RyXTtcblxuICB2YXIgaXNOdW1lcmljU2VxdWVuY2UgPSAvXi0/XFxkK1xcLlxcLi0/XFxkKyg/OlxcLlxcLi0/XFxkKyk/JC8udGVzdChtLmJvZHkpO1xuICB2YXIgaXNBbHBoYVNlcXVlbmNlID0gL15bYS16QS1aXVxcLlxcLlthLXpBLVpdKD86XFwuXFwuLT9cXGQrKT8kLy50ZXN0KG0uYm9keSk7XG4gIHZhciBpc1NlcXVlbmNlID0gaXNOdW1lcmljU2VxdWVuY2UgfHwgaXNBbHBoYVNlcXVlbmNlO1xuICB2YXIgaXNPcHRpb25zID0gbS5ib2R5LmluZGV4T2YoJywnKSA+PSAwO1xuICBpZiAoIWlzU2VxdWVuY2UgJiYgIWlzT3B0aW9ucykge1xuICAgIC8vIHthfSxifVxuICAgIGlmIChtLnBvc3QubWF0Y2goLywuKlxcfS8pKSB7XG4gICAgICBzdHIgPSBtLnByZSArICd7JyArIG0uYm9keSArIGVzY0Nsb3NlICsgbS5wb3N0O1xuICAgICAgcmV0dXJuIGV4cGFuZChzdHIpO1xuICAgIH1cbiAgICByZXR1cm4gW3N0cl07XG4gIH1cblxuICB2YXIgbjtcbiAgaWYgKGlzU2VxdWVuY2UpIHtcbiAgICBuID0gbS5ib2R5LnNwbGl0KC9cXC5cXC4vKTtcbiAgfSBlbHNlIHtcbiAgICBuID0gcGFyc2VDb21tYVBhcnRzKG0uYm9keSk7XG4gICAgaWYgKG4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyB4e3thLGJ9fXkgPT0+IHh7YX15IHh7Yn15XG4gICAgICBuID0gZXhwYW5kKG5bMF0sIGZhbHNlKS5tYXAoZW1icmFjZSk7XG4gICAgICBpZiAobi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdmFyIHBvc3QgPSBtLnBvc3QubGVuZ3RoXG4gICAgICAgICAgPyBleHBhbmQobS5wb3N0LCBmYWxzZSlcbiAgICAgICAgICA6IFsnJ107XG4gICAgICAgIHJldHVybiBwb3N0Lm1hcChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgcmV0dXJuIG0ucHJlICsgblswXSArIHA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGF0IHRoaXMgcG9pbnQsIG4gaXMgdGhlIHBhcnRzLCBhbmQgd2Uga25vdyBpdCdzIG5vdCBhIGNvbW1hIHNldFxuICAvLyB3aXRoIGEgc2luZ2xlIGVudHJ5LlxuXG4gIC8vIG5vIG5lZWQgdG8gZXhwYW5kIHByZSwgc2luY2UgaXQgaXMgZ3VhcmFudGVlZCB0byBiZSBmcmVlIG9mIGJyYWNlLXNldHNcbiAgdmFyIHByZSA9IG0ucHJlO1xuICB2YXIgcG9zdCA9IG0ucG9zdC5sZW5ndGhcbiAgICA/IGV4cGFuZChtLnBvc3QsIGZhbHNlKVxuICAgIDogWycnXTtcblxuICB2YXIgTjtcblxuICBpZiAoaXNTZXF1ZW5jZSkge1xuICAgIHZhciB4ID0gbnVtZXJpYyhuWzBdKTtcbiAgICB2YXIgeSA9IG51bWVyaWMoblsxXSk7XG4gICAgdmFyIHdpZHRoID0gTWF0aC5tYXgoblswXS5sZW5ndGgsIG5bMV0ubGVuZ3RoKVxuICAgIHZhciBpbmNyID0gbi5sZW5ndGggPT0gM1xuICAgICAgPyBNYXRoLmFicyhudW1lcmljKG5bMl0pKVxuICAgICAgOiAxO1xuICAgIHZhciB0ZXN0ID0gbHRlO1xuICAgIHZhciByZXZlcnNlID0geSA8IHg7XG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIGluY3IgKj0gLTE7XG4gICAgICB0ZXN0ID0gZ3RlO1xuICAgIH1cbiAgICB2YXIgcGFkID0gbi5zb21lKGlzUGFkZGVkKTtcblxuICAgIE4gPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSB4OyB0ZXN0KGksIHkpOyBpICs9IGluY3IpIHtcbiAgICAgIHZhciBjO1xuICAgICAgaWYgKGlzQWxwaGFTZXF1ZW5jZSkge1xuICAgICAgICBjID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKTtcbiAgICAgICAgaWYgKGMgPT09ICdcXFxcJylcbiAgICAgICAgICBjID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjID0gU3RyaW5nKGkpO1xuICAgICAgICBpZiAocGFkKSB7XG4gICAgICAgICAgdmFyIG5lZWQgPSB3aWR0aCAtIGMubGVuZ3RoO1xuICAgICAgICAgIGlmIChuZWVkID4gMCkge1xuICAgICAgICAgICAgdmFyIHogPSBuZXcgQXJyYXkobmVlZCArIDEpLmpvaW4oJzAnKTtcbiAgICAgICAgICAgIGlmIChpIDwgMClcbiAgICAgICAgICAgICAgYyA9ICctJyArIHogKyBjLnNsaWNlKDEpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBjID0geiArIGM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBOLnB1c2goYyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIE4gPSBjb25jYXRNYXAobiwgZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGV4cGFuZChlbCwgZmFsc2UpIH0pO1xuICB9XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCBOLmxlbmd0aDsgaisrKSB7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBwb3N0Lmxlbmd0aDsgaysrKSB7XG4gICAgICB2YXIgZXhwYW5zaW9uID0gcHJlICsgTltqXSArIHBvc3Rba107XG4gICAgICBpZiAoIWlzVG9wIHx8IGlzU2VxdWVuY2UgfHwgZXhwYW5zaW9uKVxuICAgICAgICBleHBhbnNpb25zLnB1c2goZXhwYW5zaW9uKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXhwYW5zaW9ucztcbn1cblxuIiwiLyoqXG4gKiBCcm93c2VyIEltYWdlIENvbXByZXNzaW9uXG4gKiB2MS4wLjZcbiAqIGJ5IERvbmFsZCA8ZG9uYWxkY3dsQGdtYWlsLmNvbT5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Eb25hbGRjd2wvYnJvd3Nlci1pbWFnZS1jb21wcmVzc2lvblxuICovXG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGUsbil7cmV0dXJuIGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlfShlKXx8ZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGUsbil7dmFyIHI9W10sdD0hMCxhPSExLGk9dm9pZCAwO3RyeXtmb3IodmFyIG8scz1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKHQ9KG89cy5uZXh0KCkpLmRvbmUpJiYoci5wdXNoKG8udmFsdWUpLCFufHxyLmxlbmd0aCE9PW4pO3Q9ITApO31jYXRjaChlKXthPSEwLGk9ZX1maW5hbGx5e3RyeXt0fHxudWxsPT1zLnJldHVybnx8cy5yZXR1cm4oKX1maW5hbGx5e2lmKGEpdGhyb3cgaX19cmV0dXJuIHJ9KGUsbil8fGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKX0oKX12YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuY29yZG92YSYmd2luZG93LmNvcmRvdmEucmVxdWlyZShcImNvcmRvdmEvbW9kdWxlbWFwcGVyXCIpLEN1c3RvbUZpbGU9ZSYmZS5nZXRPcmlnaW5hbFN5bWJvbCh3aW5kb3csXCJGaWxlXCIpfHxGaWxlLEN1c3RvbUZpbGVSZWFkZXI9ZSYmZS5nZXRPcmlnaW5hbFN5bWJvbCh3aW5kb3csXCJGaWxlUmVhZGVyXCIpfHxGaWxlUmVhZGVyO2Z1bmN0aW9uIGdldERhdGFVcmxGcm9tRmlsZShlKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24obixyKXt2YXIgdD1uZXcgQ3VzdG9tRmlsZVJlYWRlcjt0Lm9ubG9hZD1mdW5jdGlvbigpe3JldHVybiBuKHQucmVzdWx0KX0sdC5vbmVycm9yPWZ1bmN0aW9uKGUpe3JldHVybiByKGUpfSx0LnJlYWRBc0RhdGFVUkwoZSl9KX1mdW5jdGlvbiBnZXRGaWxlZnJvbURhdGFVcmwoZSxuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06RGF0ZS5ub3coKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCl7Zm9yKHZhciBhPWUuc3BsaXQoXCIsXCIpLGk9YVswXS5tYXRjaCgvOiguKj8pOy8pWzFdLG89YXRvYihhWzFdKSxzPW8ubGVuZ3RoLGM9bmV3IFVpbnQ4QXJyYXkocyk7cy0tOyljW3NdPW8uY2hhckNvZGVBdChzKTt2YXIgdT1uZXcgQmxvYihbY10se3R5cGU6aX0pO3UubmFtZT1uLHUubGFzdE1vZGlmaWVkPXIsdCh1KX0pfWZ1bmN0aW9uIGxvYWRJbWFnZShlKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24obixyKXt2YXIgdD1uZXcgSW1hZ2U7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtyZXR1cm4gbih0KX0sdC5vbmVycm9yPWZ1bmN0aW9uKGUpe3JldHVybiByKGUpfSx0LnNyYz1lfSl9ZnVuY3Rpb24gZHJhd0ltYWdlSW5DYW52YXMoZSl7dmFyIG49X3NsaWNlZFRvQXJyYXkoZ2V0TmV3Q2FudmFzQW5kQ3R4KGUud2lkdGgsZS5oZWlnaHQpLDIpLHI9blswXTtyZXR1cm4gblsxXS5kcmF3SW1hZ2UoZSwwLDAsci53aWR0aCxyLmhlaWdodCkscn1mdW5jdGlvbiBkcmF3RmlsZUluQ2FudmFzKGUpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihuLHIpe3ZhciB0LGEsaT1mdW5jdGlvbiAkVHJ5XzFfUG9zdCgpe3RyeXtyZXR1cm4gYT1kcmF3SW1hZ2VJbkNhbnZhcyh0KSxuKFt0LGFdKX1jYXRjaChlKXtyZXR1cm4gcihlKX19LG89ZnVuY3Rpb24gJFRyeV8xX0NhdGNoKG4pe3RyeXtyZXR1cm4gZ2V0RGF0YVVybEZyb21GaWxlKGUpLnRoZW4oZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBsb2FkSW1hZ2UoZSkudGhlbihmdW5jdGlvbihlKXt0cnl7cmV0dXJuIHQ9ZSxpKCl9Y2F0Y2goZSl7cmV0dXJuIHIoZSl9fSxyKX1jYXRjaChlKXtyZXR1cm4gcihlKX19LHIpfWNhdGNoKGUpe3JldHVybiByKGUpfX07dHJ5e3JldHVybiBjcmVhdGVJbWFnZUJpdG1hcChlKS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gdD1lLGkoKX1jYXRjaChlKXtyZXR1cm4gbygpfX0sbyl9Y2F0Y2goZSl7bygpfX0pfWZ1bmN0aW9uIGNhbnZhc1RvRmlsZShlLG4scix0KXt2YXIgYT1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaSxvKXt2YXIgcztyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBPZmZzY3JlZW5DYW52YXMmJmUgaW5zdGFuY2VvZiBPZmZzY3JlZW5DYW52YXM/ZS5jb252ZXJ0VG9CbG9iKHt0eXBlOm4scXVhbGl0eTphfSkudGhlbihmdW5jdGlvbihlKXt0cnl7cmV0dXJuKHM9ZSkubmFtZT1yLHMubGFzdE1vZGlmaWVkPXQsJElmXzQuY2FsbCh0aGlzKX1jYXRjaChlKXtyZXR1cm4gbyhlKX19LmJpbmQodGhpcyksbyk6Z2V0RmlsZWZyb21EYXRhVXJsKGUudG9EYXRhVVJMKG4sYSkscix0KS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gcz1lLCRJZl80LmNhbGwodGhpcyl9Y2F0Y2goZSl7cmV0dXJuIG8oZSl9fS5iaW5kKHRoaXMpLG8pO2Z1bmN0aW9uICRJZl80KCl7cmV0dXJuIGkocyl9fSl9ZnVuY3Rpb24gZ2V0RXhpZk9yaWVudGF0aW9uKGUpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihuLHIpe3ZhciB0PW5ldyBDdXN0b21GaWxlUmVhZGVyO3Qub25sb2FkPWZ1bmN0aW9uKGUpe3ZhciByPW5ldyBEYXRhVmlldyhlLnRhcmdldC5yZXN1bHQpO2lmKDY1NDk2IT1yLmdldFVpbnQxNigwLCExKSlyZXR1cm4gbigtMik7Zm9yKHZhciB0PXIuYnl0ZUxlbmd0aCxhPTI7YTx0Oyl7aWYoci5nZXRVaW50MTYoYSsyLCExKTw9OClyZXR1cm4gbigtMSk7dmFyIGk9ci5nZXRVaW50MTYoYSwhMSk7aWYoYSs9Miw2NTUwNT09aSl7aWYoMTE2NTUxOTIwNiE9ci5nZXRVaW50MzIoYSs9MiwhMSkpcmV0dXJuIG4oLTEpO3ZhciBvPTE4NzYxPT1yLmdldFVpbnQxNihhKz02LCExKTthKz1yLmdldFVpbnQzMihhKzQsbyk7dmFyIHM9ci5nZXRVaW50MTYoYSxvKTthKz0yO2Zvcih2YXIgYz0wO2M8cztjKyspaWYoMjc0PT1yLmdldFVpbnQxNihhKzEyKmMsbykpcmV0dXJuIG4oci5nZXRVaW50MTYoYSsxMipjKzgsbykpfWVsc2V7aWYoNjUyODAhPSg2NTI4MCZpKSlicmVhazthKz1yLmdldFVpbnQxNihhLCExKX19cmV0dXJuIG4oLTEpfSx0Lm9uZXJyb3I9ZnVuY3Rpb24oZSl7cmV0dXJuIHIoZSl9LHQucmVhZEFzQXJyYXlCdWZmZXIoZSl9KX1mdW5jdGlvbiBoYW5kbGVNYXhXaWR0aE9ySGVpZ2h0KGUsbil7dmFyIHIsdD1lLndpZHRoLGE9ZS5oZWlnaHQsaT1uLm1heFdpZHRoT3JIZWlnaHQsbz1lO2lmKE51bWJlci5pc0ludGVnZXIoaSkmJih0Pml8fGE+aSkpe3ZhciBzPV9zbGljZWRUb0FycmF5KGdldE5ld0NhbnZhc0FuZEN0eCh0LGEpLDIpO289c1swXSxyPXNbMV0sdD5hPyhvLndpZHRoPWksby5oZWlnaHQ9YS90KmkpOihvLndpZHRoPXQvYSppLG8uaGVpZ2h0PWkpLHIuZHJhd0ltYWdlKGUsMCwwLG8ud2lkdGgsby5oZWlnaHQpfXJldHVybiBvfWZ1bmN0aW9uIGZvbGxvd0V4aWZPcmllbnRhdGlvbihlLG4pe3ZhciByPWUud2lkdGgsdD1lLmhlaWdodCxhPV9zbGljZWRUb0FycmF5KGdldE5ld0NhbnZhc0FuZEN0eChyLHQpLDIpLGk9YVswXSxvPWFbMV07c3dpdGNoKDQ8biYmbjw5PyhpLndpZHRoPXQsaS5oZWlnaHQ9cik6KGkud2lkdGg9cixpLmhlaWdodD10KSxuKXtjYXNlIDI6by50cmFuc2Zvcm0oLTEsMCwwLDEsciwwKTticmVhaztjYXNlIDM6by50cmFuc2Zvcm0oLTEsMCwwLC0xLHIsdCk7YnJlYWs7Y2FzZSA0Om8udHJhbnNmb3JtKDEsMCwwLC0xLDAsdCk7YnJlYWs7Y2FzZSA1Om8udHJhbnNmb3JtKDAsMSwxLDAsMCwwKTticmVhaztjYXNlIDY6by50cmFuc2Zvcm0oMCwxLC0xLDAsdCwwKTticmVhaztjYXNlIDc6by50cmFuc2Zvcm0oMCwtMSwtMSwwLHQscik7YnJlYWs7Y2FzZSA4Om8udHJhbnNmb3JtKDAsLTEsMSwwLDAscil9cmV0dXJuIG8uZHJhd0ltYWdlKGUsMCwwLHIsdCksaX1mdW5jdGlvbiBnZXROZXdDYW52YXNBbmRDdHgoZSxuKXt2YXIgcix0O3RyeXt0PShyPW5ldyBPZmZzY3JlZW5DYW52YXMoZSxuKSkuZ2V0Q29udGV4dChcIjJkXCIpfWNhdGNoKGUpe3Q9KHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSkuZ2V0Q29udGV4dChcIjJkXCIpfXJldHVybiByLndpZHRoPWUsci5oZWlnaHQ9bixbcix0XX1mdW5jdGlvbiBjb21wcmVzcyhlLG4pe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyLHQpe3ZhciBhLGksbyxzLGMsdTtyZXR1cm4gYT1uLm1heEl0ZXJhdGlvbnx8MTAsaT0xMDI0Km4ubWF4U2l6ZU1CKjEwMjQsZHJhd0ZpbGVJbkNhbnZhcyhlKS50aGVuKGZ1bmN0aW9uKGwpe3RyeXt2YXIgbT1fc2xpY2VkVG9BcnJheShsLDIpO3JldHVybiBtWzBdLG89aGFuZGxlTWF4V2lkdGhPckhlaWdodChvPW1bMV0sbiksbmV3IFByb21pc2UoZnVuY3Rpb24ocix0KXt2YXIgYTtpZighKGE9bi5leGlmT3JpZW50YXRpb24pKXJldHVybiBnZXRFeGlmT3JpZW50YXRpb24oZSkudGhlbihmdW5jdGlvbihlKXt0cnl7cmV0dXJuIGE9ZSwkSWZfMi5jYWxsKHRoaXMpfWNhdGNoKGUpe3JldHVybiB0KGUpfX0uYmluZCh0aGlzKSx0KTtmdW5jdGlvbiAkSWZfMigpe3JldHVybiByKGEpfXJldHVybiAkSWZfMi5jYWxsKHRoaXMpfSkudGhlbihmdW5jdGlvbihsKXt0cnl7cmV0dXJuIG4uZXhpZk9yaWVudGF0aW9uPWwsbz1mb2xsb3dFeGlmT3JpZW50YXRpb24obyxuLmV4aWZPcmllbnRhdGlvbikscz0xLGNhbnZhc1RvRmlsZShvLGUudHlwZSxlLm5hbWUsZS5sYXN0TW9kaWZpZWQscykudGhlbihmdW5jdGlvbihuKXt0cnl7dmFyIGwsbT1mdW5jdGlvbiAkTG9vcF8zKCl7aWYoYS0tJiZ1LnNpemU+aSl7dmFyIG4scixjLGw9X3NsaWNlZFRvQXJyYXkoZ2V0TmV3Q2FudmFzQW5kQ3R4KG49Ljkqby53aWR0aCxyPS45Km8uaGVpZ2h0KSwyKTtyZXR1cm4gYz1sWzBdLGxbMV0uZHJhd0ltYWdlKG8sMCwwLG4sciksXCJpbWFnZS9qcGVnXCI9PT1lLnR5cGUmJihzKj0uOSksY2FudmFzVG9GaWxlKGMsZS50eXBlLGUubmFtZSxlLmxhc3RNb2RpZmllZCxzKS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gdT1lLG89YywkTG9vcF8zfWNhdGNoKGUpe3JldHVybiB0KGUpfX0sdCl9cmV0dXJuWzFdfSxmPWZ1bmN0aW9uICRMb29wXzNfZXhpdCgpe3JldHVybiByKHUpfTtyZXR1cm4oYz1uKS5zaXplPD1pP3IoYyk6KHU9YywobD1mdW5jdGlvbihlKXtmb3IoO2U7KXtpZihlLnRoZW4pcmV0dXJuIHZvaWQgZS50aGVuKGwsdCk7dHJ5e2lmKGUucG9wKXtpZihlLmxlbmd0aClyZXR1cm4gZS5wb3AoKT9mLmNhbGwodGhpcyk6ZTtlPW19ZWxzZSBlPWUuY2FsbCh0aGlzKX1jYXRjaChlKXtyZXR1cm4gdChlKX19fS5iaW5kKHRoaXMpKShtKSl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9fS5iaW5kKHRoaXMpLHQpfWNhdGNoKGUpe3JldHVybiB0KGUpfX0uYmluZCh0aGlzKSx0KX1jYXRjaChlKXtyZXR1cm4gdChlKX19LmJpbmQodGhpcyksdCl9KX12YXIgbixyPTA7dmFyIHQ9ZnVuY3Rpb24gY3JlYXRlV29ya2VyKGUpe3JldHVybiBuZXcgV29ya2VyKFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW1wiKFwiLmNvbmNhdChlLFwiKSgpXCIpXSkpKX0oZnVuY3Rpb24oKXt2YXIgZT0hMTtzZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZnVuY3Rpb24obil7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsdCl7dmFyIGEsaSxvLHMsYz1uLmRhdGE7YT1jLmZpbGUsaT1jLmlkLG89Yy5pbWFnZUNvbXByZXNzaW9uTGliVXJsLHM9Yy5vcHRpb25zO3ZhciB1PWZ1bmN0aW9uICRUcnlfMV9Qb3N0KCl7dHJ5e3JldHVybiByKCl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9fSxsPWZ1bmN0aW9uICRUcnlfMV9DYXRjaChlKXt0cnl7cmV0dXJuIHNlbGYucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZStcIlxcblwiK2Uuc3RhY2ssaWQ6aX0pLHUoKX1jYXRjaChlKXtyZXR1cm4gdChlKX19O3RyeXt2YXIgbTtyZXR1cm4gZXx8KGltcG9ydFNjcmlwdHMobyksZT0hMCksaW1hZ2VDb21wcmVzc2lvbihhLHMpLnRoZW4oZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBtPWUsc2VsZi5wb3N0TWVzc2FnZSh7ZmlsZTptLGlkOml9KSx1KCl9Y2F0Y2goZSl7cmV0dXJuIGwoZSl9fSxsKX1jYXRjaChlKXtsKGUpfX0pfSl9KTtmdW5jdGlvbiBjb21wcmVzc09uV2ViV29ya2VyKGUsYSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGksbyl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHMsYyl7bnx8KG49ZnVuY3Rpb24gY3JlYXRlU291cmNlT2JqZWN0KGUpe3JldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtlXSx7dHlwZTpcImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIn0pKX0oXCJcXG4gICAgZnVuY3Rpb24gaW1hZ2VDb21wcmVzc2lvbiAoKXtyZXR1cm4gKFwiLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLFwiKS5hcHBseShudWxsLCBhcmd1bWVudHMpfVxcblxcbiAgICBpbWFnZUNvbXByZXNzaW9uLmdldERhdGFVcmxGcm9tRmlsZSA9IFwiKS5jb25jYXQoaW1hZ2VDb21wcmVzc2lvbi5nZXREYXRhVXJsRnJvbUZpbGUsXCJcXG4gICAgaW1hZ2VDb21wcmVzc2lvbi5nZXRGaWxlZnJvbURhdGFVcmwgPSBcIikuY29uY2F0KGltYWdlQ29tcHJlc3Npb24uZ2V0RmlsZWZyb21EYXRhVXJsLFwiXFxuICAgIGltYWdlQ29tcHJlc3Npb24ubG9hZEltYWdlID0gXCIpLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLmxvYWRJbWFnZSxcIlxcbiAgICBpbWFnZUNvbXByZXNzaW9uLmRyYXdJbWFnZUluQ2FudmFzID0gXCIpLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLmRyYXdJbWFnZUluQ2FudmFzLFwiXFxuICAgIGltYWdlQ29tcHJlc3Npb24uZHJhd0ZpbGVJbkNhbnZhcyA9IFwiKS5jb25jYXQoaW1hZ2VDb21wcmVzc2lvbi5kcmF3RmlsZUluQ2FudmFzLFwiXFxuICAgIGltYWdlQ29tcHJlc3Npb24uY2FudmFzVG9GaWxlID0gXCIpLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLmNhbnZhc1RvRmlsZSxcIlxcbiAgICBpbWFnZUNvbXByZXNzaW9uLmdldEV4aWZPcmllbnRhdGlvbiA9IFwiKS5jb25jYXQoaW1hZ2VDb21wcmVzc2lvbi5nZXRFeGlmT3JpZW50YXRpb24sXCJcXG4gICAgaW1hZ2VDb21wcmVzc2lvbi5oYW5kbGVNYXhXaWR0aE9ySGVpZ2h0ID0gXCIpLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLmhhbmRsZU1heFdpZHRoT3JIZWlnaHQsXCJcXG4gICAgaW1hZ2VDb21wcmVzc2lvbi5mb2xsb3dFeGlmT3JpZW50YXRpb24gPSBcIikuY29uY2F0KGltYWdlQ29tcHJlc3Npb24uZm9sbG93RXhpZk9yaWVudGF0aW9uLFwiXFxuXFxuICAgIGdldERhdGFVcmxGcm9tRmlsZSA9IGltYWdlQ29tcHJlc3Npb24uZ2V0RGF0YVVybEZyb21GaWxlXFxuICAgIGdldEZpbGVmcm9tRGF0YVVybCA9IGltYWdlQ29tcHJlc3Npb24uZ2V0RmlsZWZyb21EYXRhVXJsXFxuICAgIGxvYWRJbWFnZSA9IGltYWdlQ29tcHJlc3Npb24ubG9hZEltYWdlXFxuICAgIGRyYXdJbWFnZUluQ2FudmFzID0gaW1hZ2VDb21wcmVzc2lvbi5kcmF3SW1hZ2VJbkNhbnZhc1xcbiAgICBkcmF3RmlsZUluQ2FudmFzID0gaW1hZ2VDb21wcmVzc2lvbi5kcmF3RmlsZUluQ2FudmFzXFxuICAgIGNhbnZhc1RvRmlsZSA9IGltYWdlQ29tcHJlc3Npb24uY2FudmFzVG9GaWxlXFxuICAgIGdldEV4aWZPcmllbnRhdGlvbiA9IGltYWdlQ29tcHJlc3Npb24uZ2V0RXhpZk9yaWVudGF0aW9uXFxuICAgIGhhbmRsZU1heFdpZHRoT3JIZWlnaHQgPSBpbWFnZUNvbXByZXNzaW9uLmhhbmRsZU1heFdpZHRoT3JIZWlnaHRcXG4gICAgZm9sbG93RXhpZk9yaWVudGF0aW9uID0gaW1hZ2VDb21wcmVzc2lvbi5mb2xsb3dFeGlmT3JpZW50YXRpb25cXG5cXG4gICAgZ2V0TmV3Q2FudmFzQW5kQ3R4ID0gXCIpLmNvbmNhdChnZXROZXdDYW52YXNBbmRDdHgsXCJcXG4gICAgXFxuICAgIEN1c3RvbUZpbGVSZWFkZXIgPSBGaWxlUmVhZGVyXFxuICAgIFxcbiAgICBDdXN0b21GaWxlID0gRmlsZVxcbiAgICBcXG4gICAgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBuKSB7IHJldHVybiBhcnIgfVxcblxcbiAgICBmdW5jdGlvbiBjb21wcmVzcyAoKXtyZXR1cm4gKFwiKS5jb25jYXQoY29tcHJlc3MsXCIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyl9XFxuICAgIFwiKSkpO3ZhciB1PXIrKztyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uIGhhbmRsZXIoZSl7ZS5kYXRhLmlkPT09dSYmKHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixoYW5kbGVyKSxlLmRhdGEuZXJyb3ImJm8obmV3IEVycm9yKGUuZGF0YS5lcnJvcikpLGkoZS5kYXRhLmZpbGUpKX0pLHQucG9zdE1lc3NhZ2Uoe2ZpbGU6ZSxpZDp1LGltYWdlQ29tcHJlc3Npb25MaWJVcmw6bixvcHRpb25zOmF9KSxzKCl9KX0pfWZ1bmN0aW9uIGltYWdlQ29tcHJlc3Npb24oZSxuKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocix0KXt2YXIgYSxpO2lmKG4ubWF4U2l6ZU1CPW4ubWF4U2l6ZU1CfHxOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksbi51c2VXZWJXb3JrZXI9XCJib29sZWFuXCIhPXR5cGVvZiBuLnVzZVdlYldvcmtlcnx8bi51c2VXZWJXb3JrZXIsIShlIGluc3RhbmNlb2YgQmxvYnx8ZSBpbnN0YW5jZW9mIEN1c3RvbUZpbGUpKXJldHVybiB0KG5ldyBFcnJvcihcIlRoZSBmaWxlIGdpdmVuIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBCbG9iIG9yIEZpbGVcIikpO2lmKCEvXmltYWdlLy50ZXN0KGUudHlwZSkpcmV0dXJuIHQobmV3IEVycm9yKFwiVGhlIGZpbGUgZ2l2ZW4gaXMgbm90IGFuIGltYWdlXCIpKTtpZihpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSYmc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlLCFuLnVzZVdlYldvcmtlcnx8XCJmdW5jdGlvblwiIT10eXBlb2YgV29ya2VyfHxpKXJldHVybiBjb21wcmVzcyhlLG4pLnRoZW4oZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBhPWUsJElmXzMuY2FsbCh0aGlzKX1jYXRjaChlKXtyZXR1cm4gdChlKX19LmJpbmQodGhpcyksdCk7dmFyIG89ZnVuY3Rpb24oKXt0cnl7cmV0dXJuICRJZl8zLmNhbGwodGhpcyl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9fS5iaW5kKHRoaXMpLHM9ZnVuY3Rpb24gJFRyeV8xX0NhdGNoKHIpe3RyeXtyZXR1cm4gY29uc29sZS53YXJuKFwiUnVuIGNvbXByZXNzaW9uIGluIHdlYiB3b3JrZXIgZmFpbGVkOlwiLHIsXCIsIGZhbGwgYmFjayB0byBtYWluIHRocmVhZFwiKSxjb21wcmVzcyhlLG4pLnRoZW4oZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBhPWUsbygpfWNhdGNoKGUpe3JldHVybiB0KGUpfX0sdCl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9fTt0cnl7cmV0dXJuIGNvbXByZXNzT25XZWJXb3JrZXIoZSxuKS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gYT1lLG8oKX1jYXRjaChlKXtyZXR1cm4gcyhlKX19LHMpfWNhdGNoKGUpe3MoZSl9ZnVuY3Rpb24gJElmXzMoKXt0cnl7YS5uYW1lPWUubmFtZSxhLmxhc3RNb2RpZmllZD1lLmxhc3RNb2RpZmllZH1jYXRjaChlKXt9cmV0dXJuIHIoYSl9fSl9aW1hZ2VDb21wcmVzc2lvbi5nZXREYXRhVXJsRnJvbUZpbGU9Z2V0RGF0YVVybEZyb21GaWxlLGltYWdlQ29tcHJlc3Npb24uZ2V0RmlsZWZyb21EYXRhVXJsPWdldEZpbGVmcm9tRGF0YVVybCxpbWFnZUNvbXByZXNzaW9uLmxvYWRJbWFnZT1sb2FkSW1hZ2UsaW1hZ2VDb21wcmVzc2lvbi5kcmF3SW1hZ2VJbkNhbnZhcz1kcmF3SW1hZ2VJbkNhbnZhcyxpbWFnZUNvbXByZXNzaW9uLmRyYXdGaWxlSW5DYW52YXM9ZHJhd0ZpbGVJbkNhbnZhcyxpbWFnZUNvbXByZXNzaW9uLmNhbnZhc1RvRmlsZT1jYW52YXNUb0ZpbGUsaW1hZ2VDb21wcmVzc2lvbi5nZXRFeGlmT3JpZW50YXRpb249Z2V0RXhpZk9yaWVudGF0aW9uLGltYWdlQ29tcHJlc3Npb24uaGFuZGxlTWF4V2lkdGhPckhlaWdodD1oYW5kbGVNYXhXaWR0aE9ySGVpZ2h0LGltYWdlQ29tcHJlc3Npb24uZm9sbG93RXhpZk9yaWVudGF0aW9uPWZvbGxvd0V4aWZPcmllbnRhdGlvbjtleHBvcnQgZGVmYXVsdCBpbWFnZUNvbXByZXNzaW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1pbWFnZS1jb21wcmVzc2lvbi5tanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4cywgZm4pIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgeCA9IGZuKHhzW2ldLCBpKTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHJlcy5wdXNoLmFwcGx5KHJlcywgeCk7XG4gICAgICAgIGVsc2UgcmVzLnB1c2goeCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBtaW5pbWF0Y2hcbm1pbmltYXRjaC5NaW5pbWF0Y2ggPSBNaW5pbWF0Y2hcblxudmFyIHBhdGggPSB7IHNlcDogJy8nIH1cbnRyeSB7XG4gIHBhdGggPSByZXF1aXJlKCdwYXRoJylcbn0gY2F0Y2ggKGVyKSB7fVxuXG52YXIgR0xPQlNUQVIgPSBtaW5pbWF0Y2guR0xPQlNUQVIgPSBNaW5pbWF0Y2guR0xPQlNUQVIgPSB7fVxudmFyIGV4cGFuZCA9IHJlcXVpcmUoJ2JyYWNlLWV4cGFuc2lvbicpXG5cbnZhciBwbFR5cGVzID0ge1xuICAnISc6IHsgb3BlbjogJyg/Oig/ISg/OicsIGNsb3NlOiAnKSlbXi9dKj8pJ30sXG4gICc/JzogeyBvcGVuOiAnKD86JywgY2xvc2U6ICcpPycgfSxcbiAgJysnOiB7IG9wZW46ICcoPzonLCBjbG9zZTogJykrJyB9LFxuICAnKic6IHsgb3BlbjogJyg/OicsIGNsb3NlOiAnKSonIH0sXG4gICdAJzogeyBvcGVuOiAnKD86JywgY2xvc2U6ICcpJyB9XG59XG5cbi8vIGFueSBzaW5nbGUgdGhpbmcgb3RoZXIgdGhhbiAvXG4vLyBkb24ndCBuZWVkIHRvIGVzY2FwZSAvIHdoZW4gdXNpbmcgbmV3IFJlZ0V4cCgpXG52YXIgcW1hcmsgPSAnW14vXSdcblxuLy8gKiA9PiBhbnkgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbnZhciBzdGFyID0gcW1hcmsgKyAnKj8nXG5cbi8vICoqIHdoZW4gZG90cyBhcmUgYWxsb3dlZC4gIEFueXRoaW5nIGdvZXMsIGV4Y2VwdCAuLiBhbmQgLlxuLy8gbm90ICheIG9yIC8gZm9sbG93ZWQgYnkgb25lIG9yIHR3byBkb3RzIGZvbGxvd2VkIGJ5ICQgb3IgLyksXG4vLyBmb2xsb3dlZCBieSBhbnl0aGluZywgYW55IG51bWJlciBvZiB0aW1lcy5cbnZhciB0d29TdGFyRG90ID0gJyg/Oig/ISg/OlxcXFxcXC98XikoPzpcXFxcLnsxLDJ9KSgkfFxcXFxcXC8pKS4pKj8nXG5cbi8vIG5vdCBhIF4gb3IgLyBmb2xsb3dlZCBieSBhIGRvdCxcbi8vIGZvbGxvd2VkIGJ5IGFueXRoaW5nLCBhbnkgbnVtYmVyIG9mIHRpbWVzLlxudmFyIHR3b1N0YXJOb0RvdCA9ICcoPzooPyEoPzpcXFxcXFwvfF4pXFxcXC4pLikqPydcblxuLy8gY2hhcmFjdGVycyB0aGF0IG5lZWQgdG8gYmUgZXNjYXBlZCBpbiBSZWdFeHAuXG52YXIgcmVTcGVjaWFscyA9IGNoYXJTZXQoJygpLip7fSs/W11eJFxcXFwhJylcblxuLy8gXCJhYmNcIiAtPiB7IGE6dHJ1ZSwgYjp0cnVlLCBjOnRydWUgfVxuZnVuY3Rpb24gY2hhclNldCAocykge1xuICByZXR1cm4gcy5zcGxpdCgnJykucmVkdWNlKGZ1bmN0aW9uIChzZXQsIGMpIHtcbiAgICBzZXRbY10gPSB0cnVlXG4gICAgcmV0dXJuIHNldFxuICB9LCB7fSlcbn1cblxuLy8gbm9ybWFsaXplcyBzbGFzaGVzLlxudmFyIHNsYXNoU3BsaXQgPSAvXFwvKy9cblxubWluaW1hdGNoLmZpbHRlciA9IGZpbHRlclxuZnVuY3Rpb24gZmlsdGVyIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHJldHVybiBmdW5jdGlvbiAocCwgaSwgbGlzdCkge1xuICAgIHJldHVybiBtaW5pbWF0Y2gocCwgcGF0dGVybiwgb3B0aW9ucylcbiAgfVxufVxuXG5mdW5jdGlvbiBleHQgKGEsIGIpIHtcbiAgYSA9IGEgfHwge31cbiAgYiA9IGIgfHwge31cbiAgdmFyIHQgPSB7fVxuICBPYmplY3Qua2V5cyhiKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgdFtrXSA9IGJba11cbiAgfSlcbiAgT2JqZWN0LmtleXMoYSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHRba10gPSBhW2tdXG4gIH0pXG4gIHJldHVybiB0XG59XG5cbm1pbmltYXRjaC5kZWZhdWx0cyA9IGZ1bmN0aW9uIChkZWYpIHtcbiAgaWYgKCFkZWYgfHwgIU9iamVjdC5rZXlzKGRlZikubGVuZ3RoKSByZXR1cm4gbWluaW1hdGNoXG5cbiAgdmFyIG9yaWcgPSBtaW5pbWF0Y2hcblxuICB2YXIgbSA9IGZ1bmN0aW9uIG1pbmltYXRjaCAocCwgcGF0dGVybiwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcmlnLm1pbmltYXRjaChwLCBwYXR0ZXJuLCBleHQoZGVmLCBvcHRpb25zKSlcbiAgfVxuXG4gIG0uTWluaW1hdGNoID0gZnVuY3Rpb24gTWluaW1hdGNoIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBvcmlnLk1pbmltYXRjaChwYXR0ZXJuLCBleHQoZGVmLCBvcHRpb25zKSlcbiAgfVxuXG4gIHJldHVybiBtXG59XG5cbk1pbmltYXRjaC5kZWZhdWx0cyA9IGZ1bmN0aW9uIChkZWYpIHtcbiAgaWYgKCFkZWYgfHwgIU9iamVjdC5rZXlzKGRlZikubGVuZ3RoKSByZXR1cm4gTWluaW1hdGNoXG4gIHJldHVybiBtaW5pbWF0Y2guZGVmYXVsdHMoZGVmKS5NaW5pbWF0Y2hcbn1cblxuZnVuY3Rpb24gbWluaW1hdGNoIChwLCBwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgcGF0dGVybiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdnbG9iIHBhdHRlcm4gc3RyaW5nIHJlcXVpcmVkJylcbiAgfVxuXG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9XG5cbiAgLy8gc2hvcnRjdXQ6IGNvbW1lbnRzIG1hdGNoIG5vdGhpbmcuXG4gIGlmICghb3B0aW9ucy5ub2NvbW1lbnQgJiYgcGF0dGVybi5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gXCJcIiBvbmx5IG1hdGNoZXMgXCJcIlxuICBpZiAocGF0dGVybi50cmltKCkgPT09ICcnKSByZXR1cm4gcCA9PT0gJydcblxuICByZXR1cm4gbmV3IE1pbmltYXRjaChwYXR0ZXJuLCBvcHRpb25zKS5tYXRjaChwKVxufVxuXG5mdW5jdGlvbiBNaW5pbWF0Y2ggKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1pbmltYXRjaCkpIHtcbiAgICByZXR1cm4gbmV3IE1pbmltYXRjaChwYXR0ZXJuLCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXR0ZXJuICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2dsb2IgcGF0dGVybiBzdHJpbmcgcmVxdWlyZWQnKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge31cbiAgcGF0dGVybiA9IHBhdHRlcm4udHJpbSgpXG5cbiAgLy8gd2luZG93cyBzdXBwb3J0OiBuZWVkIHRvIHVzZSAvLCBub3QgXFxcbiAgaWYgKHBhdGguc2VwICE9PSAnLycpIHtcbiAgICBwYXR0ZXJuID0gcGF0dGVybi5zcGxpdChwYXRoLnNlcCkuam9pbignLycpXG4gIH1cblxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMuc2V0ID0gW11cbiAgdGhpcy5wYXR0ZXJuID0gcGF0dGVyblxuICB0aGlzLnJlZ2V4cCA9IG51bGxcbiAgdGhpcy5uZWdhdGUgPSBmYWxzZVxuICB0aGlzLmNvbW1lbnQgPSBmYWxzZVxuICB0aGlzLmVtcHR5ID0gZmFsc2VcblxuICAvLyBtYWtlIHRoZSBzZXQgb2YgcmVnZXhwcyBldGMuXG4gIHRoaXMubWFrZSgpXG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7fVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLm1ha2UgPSBtYWtlXG5mdW5jdGlvbiBtYWtlICgpIHtcbiAgLy8gZG9uJ3QgZG8gaXQgbW9yZSB0aGFuIG9uY2UuXG4gIGlmICh0aGlzLl9tYWRlKSByZXR1cm5cblxuICB2YXIgcGF0dGVybiA9IHRoaXMucGF0dGVyblxuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIC8vIGVtcHR5IHBhdHRlcm5zIGFuZCBjb21tZW50cyBtYXRjaCBub3RoaW5nLlxuICBpZiAoIW9wdGlvbnMubm9jb21tZW50ICYmIHBhdHRlcm4uY2hhckF0KDApID09PSAnIycpIHtcbiAgICB0aGlzLmNvbW1lbnQgPSB0cnVlXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFwYXR0ZXJuKSB7XG4gICAgdGhpcy5lbXB0eSA9IHRydWVcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIHN0ZXAgMTogZmlndXJlIG91dCBuZWdhdGlvbiwgZXRjLlxuICB0aGlzLnBhcnNlTmVnYXRlKClcblxuICAvLyBzdGVwIDI6IGV4cGFuZCBicmFjZXNcbiAgdmFyIHNldCA9IHRoaXMuZ2xvYlNldCA9IHRoaXMuYnJhY2VFeHBhbmQoKVxuXG4gIGlmIChvcHRpb25zLmRlYnVnKSB0aGlzLmRlYnVnID0gY29uc29sZS5lcnJvclxuXG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCBzZXQpXG5cbiAgLy8gc3RlcCAzOiBub3cgd2UgaGF2ZSBhIHNldCwgc28gdHVybiBlYWNoIG9uZSBpbnRvIGEgc2VyaWVzIG9mIHBhdGgtcG9ydGlvblxuICAvLyBtYXRjaGluZyBwYXR0ZXJucy5cbiAgLy8gVGhlc2Ugd2lsbCBiZSByZWdleHBzLCBleGNlcHQgaW4gdGhlIGNhc2Ugb2YgXCIqKlwiLCB3aGljaCBpc1xuICAvLyBzZXQgdG8gdGhlIEdMT0JTVEFSIG9iamVjdCBmb3IgZ2xvYnN0YXIgYmVoYXZpb3IsXG4gIC8vIGFuZCB3aWxsIG5vdCBjb250YWluIGFueSAvIGNoYXJhY3RlcnNcbiAgc2V0ID0gdGhpcy5nbG9iUGFydHMgPSBzZXQubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMuc3BsaXQoc2xhc2hTcGxpdClcbiAgfSlcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIC8vIGdsb2IgLS0+IHJlZ2V4cHNcbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbiAocywgc2ksIHNldCkge1xuICAgIHJldHVybiBzLm1hcCh0aGlzLnBhcnNlLCB0aGlzKVxuICB9LCB0aGlzKVxuXG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCBzZXQpXG5cbiAgLy8gZmlsdGVyIG91dCBldmVyeXRoaW5nIHRoYXQgZGlkbid0IGNvbXBpbGUgcHJvcGVybHkuXG4gIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy5pbmRleE9mKGZhbHNlKSA9PT0gLTFcbiAgfSlcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIHRoaXMuc2V0ID0gc2V0XG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUucGFyc2VOZWdhdGUgPSBwYXJzZU5lZ2F0ZVxuZnVuY3Rpb24gcGFyc2VOZWdhdGUgKCkge1xuICB2YXIgcGF0dGVybiA9IHRoaXMucGF0dGVyblxuICB2YXIgbmVnYXRlID0gZmFsc2VcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcbiAgdmFyIG5lZ2F0ZU9mZnNldCA9IDBcblxuICBpZiAob3B0aW9ucy5ub25lZ2F0ZSkgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXR0ZXJuLmxlbmd0aFxuICAgIDsgaSA8IGwgJiYgcGF0dGVybi5jaGFyQXQoaSkgPT09ICchJ1xuICAgIDsgaSsrKSB7XG4gICAgbmVnYXRlID0gIW5lZ2F0ZVxuICAgIG5lZ2F0ZU9mZnNldCsrXG4gIH1cblxuICBpZiAobmVnYXRlT2Zmc2V0KSB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuLnN1YnN0cihuZWdhdGVPZmZzZXQpXG4gIHRoaXMubmVnYXRlID0gbmVnYXRlXG59XG5cbi8vIEJyYWNlIGV4cGFuc2lvbjpcbi8vIGF7YixjfWQgLT4gYWJkIGFjZFxuLy8gYXtiLH1jIC0+IGFiYyBhY1xuLy8gYXswLi4zfWQgLT4gYTBkIGExZCBhMmQgYTNkXG4vLyBhe2IsY3tkLGV9Zn1nIC0+IGFiZyBhY2RmZyBhY2VmZ1xuLy8gYXtiLGN9ZHtlLGZ9ZyAtPiBhYmRlZyBhY2RlZyBhYmRlZyBhYmRmZ1xuLy9cbi8vIEludmFsaWQgc2V0cyBhcmUgbm90IGV4cGFuZGVkLlxuLy8gYXsyLi59YiAtPiBhezIuLn1iXG4vLyBhe2J9YyAtPiBhe2J9Y1xubWluaW1hdGNoLmJyYWNlRXhwYW5kID0gZnVuY3Rpb24gKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJyYWNlRXhwYW5kKHBhdHRlcm4sIG9wdGlvbnMpXG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUuYnJhY2VFeHBhbmQgPSBicmFjZUV4cGFuZFxuXG5mdW5jdGlvbiBicmFjZUV4cGFuZCAocGF0dGVybiwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE1pbmltYXRjaCkge1xuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG4gIH1cblxuICBwYXR0ZXJuID0gdHlwZW9mIHBhdHRlcm4gPT09ICd1bmRlZmluZWQnXG4gICAgPyB0aGlzLnBhdHRlcm4gOiBwYXR0ZXJuXG5cbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuZGVmaW5lZCBwYXR0ZXJuJylcbiAgfVxuXG4gIGlmIChvcHRpb25zLm5vYnJhY2UgfHxcbiAgICAhcGF0dGVybi5tYXRjaCgvXFx7LipcXH0vKSkge1xuICAgIC8vIHNob3J0Y3V0LiBubyBuZWVkIHRvIGV4cGFuZC5cbiAgICByZXR1cm4gW3BhdHRlcm5dXG4gIH1cblxuICByZXR1cm4gZXhwYW5kKHBhdHRlcm4pXG59XG5cbi8vIHBhcnNlIGEgY29tcG9uZW50IG9mIHRoZSBleHBhbmRlZCBzZXQuXG4vLyBBdCB0aGlzIHBvaW50LCBubyBwYXR0ZXJuIG1heSBjb250YWluIFwiL1wiIGluIGl0XG4vLyBzbyB3ZSdyZSBnb2luZyB0byByZXR1cm4gYSAyZCBhcnJheSwgd2hlcmUgZWFjaCBlbnRyeSBpcyB0aGUgZnVsbFxuLy8gcGF0dGVybiwgc3BsaXQgb24gJy8nLCBhbmQgdGhlbiB0dXJuZWQgaW50byBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbi8vIEEgcmVnZXhwIGlzIG1hZGUgYXQgdGhlIGVuZCB3aGljaCBqb2lucyBlYWNoIGFycmF5IHdpdGggYW5cbi8vIGVzY2FwZWQgLywgYW5kIGFub3RoZXIgZnVsbCBvbmUgd2hpY2ggam9pbnMgZWFjaCByZWdleHAgd2l0aCB8LlxuLy9cbi8vIEZvbGxvd2luZyB0aGUgbGVhZCBvZiBCYXNoIDQuMSwgbm90ZSB0aGF0IFwiKipcIiBvbmx5IGhhcyBzcGVjaWFsIG1lYW5pbmdcbi8vIHdoZW4gaXQgaXMgdGhlICpvbmx5KiB0aGluZyBpbiBhIHBhdGggcG9ydGlvbi4gIE90aGVyd2lzZSwgYW55IHNlcmllc1xuLy8gb2YgKiBpcyBlcXVpdmFsZW50IHRvIGEgc2luZ2xlICouICBHbG9ic3RhciBiZWhhdmlvciBpcyBlbmFibGVkIGJ5XG4vLyBkZWZhdWx0LCBhbmQgY2FuIGJlIGRpc2FibGVkIGJ5IHNldHRpbmcgb3B0aW9ucy5ub2dsb2JzdGFyLlxuTWluaW1hdGNoLnByb3RvdHlwZS5wYXJzZSA9IHBhcnNlXG52YXIgU1VCUEFSU0UgPSB7fVxuZnVuY3Rpb24gcGFyc2UgKHBhdHRlcm4sIGlzU3ViKSB7XG4gIGlmIChwYXR0ZXJuLmxlbmd0aCA+IDEwMjQgKiA2NCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhdHRlcm4gaXMgdG9vIGxvbmcnKVxuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICAvLyBzaG9ydGN1dHNcbiAgaWYgKCFvcHRpb25zLm5vZ2xvYnN0YXIgJiYgcGF0dGVybiA9PT0gJyoqJykgcmV0dXJuIEdMT0JTVEFSXG4gIGlmIChwYXR0ZXJuID09PSAnJykgcmV0dXJuICcnXG5cbiAgdmFyIHJlID0gJydcbiAgdmFyIGhhc01hZ2ljID0gISFvcHRpb25zLm5vY2FzZVxuICB2YXIgZXNjYXBpbmcgPSBmYWxzZVxuICAvLyA/ID0+IG9uZSBzaW5nbGUgY2hhcmFjdGVyXG4gIHZhciBwYXR0ZXJuTGlzdFN0YWNrID0gW11cbiAgdmFyIG5lZ2F0aXZlTGlzdHMgPSBbXVxuICB2YXIgc3RhdGVDaGFyXG4gIHZhciBpbkNsYXNzID0gZmFsc2VcbiAgdmFyIHJlQ2xhc3NTdGFydCA9IC0xXG4gIHZhciBjbGFzc1N0YXJ0ID0gLTFcbiAgLy8gLiBhbmQgLi4gbmV2ZXIgbWF0Y2ggYW55dGhpbmcgdGhhdCBkb2Vzbid0IHN0YXJ0IHdpdGggLixcbiAgLy8gZXZlbiB3aGVuIG9wdGlvbnMuZG90IGlzIHNldC5cbiAgdmFyIHBhdHRlcm5TdGFydCA9IHBhdHRlcm4uY2hhckF0KDApID09PSAnLicgPyAnJyAvLyBhbnl0aGluZ1xuICAvLyBub3QgKHN0YXJ0IG9yIC8gZm9sbG93ZWQgYnkgLiBvciAuLiBmb2xsb3dlZCBieSAvIG9yIGVuZClcbiAgOiBvcHRpb25zLmRvdCA/ICcoPyEoPzpefFxcXFxcXC8pXFxcXC57MSwyfSg/OiR8XFxcXFxcLykpJ1xuICA6ICcoPyFcXFxcLiknXG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGZ1bmN0aW9uIGNsZWFyU3RhdGVDaGFyICgpIHtcbiAgICBpZiAoc3RhdGVDaGFyKSB7XG4gICAgICAvLyB3ZSBoYWQgc29tZSBzdGF0ZS10cmFja2luZyBjaGFyYWN0ZXJcbiAgICAgIC8vIHRoYXQgd2Fzbid0IGNvbnN1bWVkIGJ5IHRoaXMgcGFzcy5cbiAgICAgIHN3aXRjaCAoc3RhdGVDaGFyKSB7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgIHJlICs9IHN0YXJcbiAgICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnPyc6XG4gICAgICAgICAgcmUgKz0gcW1hcmtcbiAgICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZSArPSAnXFxcXCcgKyBzdGF0ZUNoYXJcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHNlbGYuZGVidWcoJ2NsZWFyU3RhdGVDaGFyICVqICVqJywgc3RhdGVDaGFyLCByZSlcbiAgICAgIHN0YXRlQ2hhciA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoLCBjXG4gICAgOyAoaSA8IGxlbikgJiYgKGMgPSBwYXR0ZXJuLmNoYXJBdChpKSlcbiAgICA7IGkrKykge1xuICAgIHRoaXMuZGVidWcoJyVzXFx0JXMgJXMgJWonLCBwYXR0ZXJuLCBpLCByZSwgYylcblxuICAgIC8vIHNraXAgb3ZlciBhbnkgdGhhdCBhcmUgZXNjYXBlZC5cbiAgICBpZiAoZXNjYXBpbmcgJiYgcmVTcGVjaWFsc1tjXSkge1xuICAgICAgcmUgKz0gJ1xcXFwnICsgY1xuICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGMpIHtcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICAvLyBjb21wbGV0ZWx5IG5vdCBhbGxvd2VkLCBldmVuIGVzY2FwZWQuXG4gICAgICAgIC8vIFNob3VsZCBhbHJlYWR5IGJlIHBhdGgtc3BsaXQgYnkgbm93LlxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcbiAgICAgICAgZXNjYXBpbmcgPSB0cnVlXG4gICAgICBjb250aW51ZVxuXG4gICAgICAvLyB0aGUgdmFyaW91cyBzdGF0ZUNoYXIgdmFsdWVzXG4gICAgICAvLyBmb3IgdGhlIFwiZXh0Z2xvYlwiIHN0dWZmLlxuICAgICAgY2FzZSAnPyc6XG4gICAgICBjYXNlICcqJzpcbiAgICAgIGNhc2UgJysnOlxuICAgICAgY2FzZSAnQCc6XG4gICAgICBjYXNlICchJzpcbiAgICAgICAgdGhpcy5kZWJ1ZygnJXNcXHQlcyAlcyAlaiA8LS0gc3RhdGVDaGFyJywgcGF0dGVybiwgaSwgcmUsIGMpXG5cbiAgICAgICAgLy8gYWxsIG9mIHRob3NlIGFyZSBsaXRlcmFscyBpbnNpZGUgYSBjbGFzcywgZXhjZXB0IHRoYXRcbiAgICAgICAgLy8gdGhlIGdsb2IgWyFhXSBtZWFucyBbXmFdIGluIHJlZ2V4cFxuICAgICAgICBpZiAoaW5DbGFzcykge1xuICAgICAgICAgIHRoaXMuZGVidWcoJyAgaW4gY2xhc3MnKVxuICAgICAgICAgIGlmIChjID09PSAnIScgJiYgaSA9PT0gY2xhc3NTdGFydCArIDEpIGMgPSAnXidcbiAgICAgICAgICByZSArPSBjXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHN0YXRlQ2hhciwgdGhlbiBpdCBtZWFuc1xuICAgICAgICAvLyB0aGF0IHRoZXJlIHdhcyBzb21ldGhpbmcgbGlrZSAqKiBvciArPyBpbiB0aGVyZS5cbiAgICAgICAgLy8gSGFuZGxlIHRoZSBzdGF0ZUNoYXIsIHRoZW4gcHJvY2VlZCB3aXRoIHRoaXMgb25lLlxuICAgICAgICBzZWxmLmRlYnVnKCdjYWxsIGNsZWFyU3RhdGVDaGFyICVqJywgc3RhdGVDaGFyKVxuICAgICAgICBjbGVhclN0YXRlQ2hhcigpXG4gICAgICAgIHN0YXRlQ2hhciA9IGNcbiAgICAgICAgLy8gaWYgZXh0Z2xvYiBpcyBkaXNhYmxlZCwgdGhlbiArKGFzZGZ8Zm9vKSBpc24ndCBhIHRoaW5nLlxuICAgICAgICAvLyBqdXN0IGNsZWFyIHRoZSBzdGF0ZWNoYXIgKm5vdyosIHJhdGhlciB0aGFuIGV2ZW4gZGl2aW5nIGludG9cbiAgICAgICAgLy8gdGhlIHBhdHRlcm5MaXN0IHN0dWZmLlxuICAgICAgICBpZiAob3B0aW9ucy5ub2V4dCkgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgY29udGludWVcblxuICAgICAgY2FzZSAnKCc6XG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgcmUgKz0gJygnXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGVDaGFyKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwoJ1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBwYXR0ZXJuTGlzdFN0YWNrLnB1c2goe1xuICAgICAgICAgIHR5cGU6IHN0YXRlQ2hhcixcbiAgICAgICAgICBzdGFydDogaSAtIDEsXG4gICAgICAgICAgcmVTdGFydDogcmUubGVuZ3RoLFxuICAgICAgICAgIG9wZW46IHBsVHlwZXNbc3RhdGVDaGFyXS5vcGVuLFxuICAgICAgICAgIGNsb3NlOiBwbFR5cGVzW3N0YXRlQ2hhcl0uY2xvc2VcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbmVnYXRpb24gaXMgKD86KD8hanMpW14vXSopXG4gICAgICAgIHJlICs9IHN0YXRlQ2hhciA9PT0gJyEnID8gJyg/Oig/ISg/OicgOiAnKD86J1xuICAgICAgICB0aGlzLmRlYnVnKCdwbFR5cGUgJWogJWonLCBzdGF0ZUNoYXIsIHJlKVxuICAgICAgICBzdGF0ZUNoYXIgPSBmYWxzZVxuICAgICAgY29udGludWVcblxuICAgICAgY2FzZSAnKSc6XG4gICAgICAgIGlmIChpbkNsYXNzIHx8ICFwYXR0ZXJuTGlzdFN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHJlICs9ICdcXFxcKSdcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgdmFyIHBsID0gcGF0dGVybkxpc3RTdGFjay5wb3AoKVxuICAgICAgICAvLyBuZWdhdGlvbiBpcyAoPzooPyFqcylbXi9dKilcbiAgICAgICAgLy8gVGhlIG90aGVycyBhcmUgKD86PHBhdHRlcm4+KTx0eXBlPlxuICAgICAgICByZSArPSBwbC5jbG9zZVxuICAgICAgICBpZiAocGwudHlwZSA9PT0gJyEnKSB7XG4gICAgICAgICAgbmVnYXRpdmVMaXN0cy5wdXNoKHBsKVxuICAgICAgICB9XG4gICAgICAgIHBsLnJlRW5kID0gcmUubGVuZ3RoXG4gICAgICBjb250aW51ZVxuXG4gICAgICBjYXNlICd8JzpcbiAgICAgICAgaWYgKGluQ2xhc3MgfHwgIXBhdHRlcm5MaXN0U3RhY2subGVuZ3RoIHx8IGVzY2FwaW5nKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFx8J1xuICAgICAgICAgIGVzY2FwaW5nID0gZmFsc2VcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgICByZSArPSAnfCdcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIC8vIHRoZXNlIGFyZSBtb3N0bHkgdGhlIHNhbWUgaW4gcmVnZXhwIGFuZCBnbG9iXG4gICAgICBjYXNlICdbJzpcbiAgICAgICAgLy8gc3dhbGxvdyBhbnkgc3RhdGUtdHJhY2tpbmcgY2hhciBiZWZvcmUgdGhlIFtcbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuXG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwnICsgY1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpbkNsYXNzID0gdHJ1ZVxuICAgICAgICBjbGFzc1N0YXJ0ID0gaVxuICAgICAgICByZUNsYXNzU3RhcnQgPSByZS5sZW5ndGhcbiAgICAgICAgcmUgKz0gY1xuICAgICAgY29udGludWVcblxuICAgICAgY2FzZSAnXSc6XG4gICAgICAgIC8vICBhIHJpZ2h0IGJyYWNrZXQgc2hhbGwgbG9zZSBpdHMgc3BlY2lhbFxuICAgICAgICAvLyAgbWVhbmluZyBhbmQgcmVwcmVzZW50IGl0c2VsZiBpblxuICAgICAgICAvLyAgYSBicmFja2V0IGV4cHJlc3Npb24gaWYgaXQgb2NjdXJzXG4gICAgICAgIC8vICBmaXJzdCBpbiB0aGUgbGlzdC4gIC0tIFBPU0lYLjIgMi44LjMuMlxuICAgICAgICBpZiAoaSA9PT0gY2xhc3NTdGFydCArIDEgfHwgIWluQ2xhc3MpIHtcbiAgICAgICAgICByZSArPSAnXFxcXCcgKyBjXG4gICAgICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgbGVmdCBhIGNsYXNzIG9wZW4uXG4gICAgICAgIC8vIFwiW3otYV1cIiBpcyB2YWxpZCwgZXF1aXZhbGVudCB0byBcIlxcW3otYVxcXVwiXG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgLy8gc3BsaXQgd2hlcmUgdGhlIGxhc3QgWyB3YXMsIG1ha2Ugc3VyZSB3ZSBkb24ndCBoYXZlXG4gICAgICAgICAgLy8gYW4gaW52YWxpZCByZS4gaWYgc28sIHJlLXdhbGsgdGhlIGNvbnRlbnRzIG9mIHRoZVxuICAgICAgICAgIC8vIHdvdWxkLWJlIGNsYXNzIHRvIHJlLXRyYW5zbGF0ZSBhbnkgY2hhcmFjdGVycyB0aGF0XG4gICAgICAgICAgLy8gd2VyZSBwYXNzZWQgdGhyb3VnaCBhcy1pc1xuICAgICAgICAgIC8vIFRPRE86IEl0IHdvdWxkIHByb2JhYmx5IGJlIGZhc3RlciB0byBkZXRlcm1pbmUgdGhpc1xuICAgICAgICAgIC8vIHdpdGhvdXQgYSB0cnkvY2F0Y2ggYW5kIGEgbmV3IFJlZ0V4cCwgYnV0IGl0J3MgdHJpY2t5XG4gICAgICAgICAgLy8gdG8gZG8gc2FmZWx5LiAgRm9yIG5vdywgdGhpcyBpcyBzYWZlIGFuZCB3b3Jrcy5cbiAgICAgICAgICB2YXIgY3MgPSBwYXR0ZXJuLnN1YnN0cmluZyhjbGFzc1N0YXJ0ICsgMSwgaSlcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgUmVnRXhwKCdbJyArIGNzICsgJ10nKVxuICAgICAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgICAgICAvLyBub3QgYSB2YWxpZCBjbGFzcyFcbiAgICAgICAgICAgIHZhciBzcCA9IHRoaXMucGFyc2UoY3MsIFNVQlBBUlNFKVxuICAgICAgICAgICAgcmUgPSByZS5zdWJzdHIoMCwgcmVDbGFzc1N0YXJ0KSArICdcXFxcWycgKyBzcFswXSArICdcXFxcXSdcbiAgICAgICAgICAgIGhhc01hZ2ljID0gaGFzTWFnaWMgfHwgc3BbMV1cbiAgICAgICAgICAgIGluQ2xhc3MgPSBmYWxzZVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5pc2ggdXAgdGhlIGNsYXNzLlxuICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgaW5DbGFzcyA9IGZhbHNlXG4gICAgICAgIHJlICs9IGNcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHN3YWxsb3cgYW55IHN0YXRlIGNoYXIgdGhhdCB3YXNuJ3QgY29uc3VtZWRcbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuXG4gICAgICAgIGlmIChlc2NhcGluZykge1xuICAgICAgICAgIC8vIG5vIG5lZWRcbiAgICAgICAgICBlc2NhcGluZyA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSBpZiAocmVTcGVjaWFsc1tjXVxuICAgICAgICAgICYmICEoYyA9PT0gJ14nICYmIGluQ2xhc3MpKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwnXG4gICAgICAgIH1cblxuICAgICAgICByZSArPSBjXG5cbiAgICB9IC8vIHN3aXRjaFxuICB9IC8vIGZvclxuXG4gIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB3ZSBsZWZ0IGEgY2xhc3Mgb3Blbi5cbiAgLy8gXCJbYWJjXCIgaXMgdmFsaWQsIGVxdWl2YWxlbnQgdG8gXCJcXFthYmNcIlxuICBpZiAoaW5DbGFzcykge1xuICAgIC8vIHNwbGl0IHdoZXJlIHRoZSBsYXN0IFsgd2FzLCBhbmQgZXNjYXBlIGl0XG4gICAgLy8gdGhpcyBpcyBhIGh1Z2UgcGl0YS4gIFdlIG5vdyBoYXZlIHRvIHJlLXdhbGtcbiAgICAvLyB0aGUgY29udGVudHMgb2YgdGhlIHdvdWxkLWJlIGNsYXNzIHRvIHJlLXRyYW5zbGF0ZVxuICAgIC8vIGFueSBjaGFyYWN0ZXJzIHRoYXQgd2VyZSBwYXNzZWQgdGhyb3VnaCBhcy1pc1xuICAgIGNzID0gcGF0dGVybi5zdWJzdHIoY2xhc3NTdGFydCArIDEpXG4gICAgc3AgPSB0aGlzLnBhcnNlKGNzLCBTVUJQQVJTRSlcbiAgICByZSA9IHJlLnN1YnN0cigwLCByZUNsYXNzU3RhcnQpICsgJ1xcXFxbJyArIHNwWzBdXG4gICAgaGFzTWFnaWMgPSBoYXNNYWdpYyB8fCBzcFsxXVxuICB9XG5cbiAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGhhZCBhICsoIHRoaW5nIGF0IHRoZSAqZW5kKlxuICAvLyBvZiB0aGUgcGF0dGVybi5cbiAgLy8gZWFjaCBwYXR0ZXJuIGxpc3Qgc3RhY2sgYWRkcyAzIGNoYXJzLCBhbmQgd2UgbmVlZCB0byBnbyB0aHJvdWdoXG4gIC8vIGFuZCBlc2NhcGUgYW55IHwgY2hhcnMgdGhhdCB3ZXJlIHBhc3NlZCB0aHJvdWdoIGFzLWlzIGZvciB0aGUgcmVnZXhwLlxuICAvLyBHbyB0aHJvdWdoIGFuZCBlc2NhcGUgdGhlbSwgdGFraW5nIGNhcmUgbm90IHRvIGRvdWJsZS1lc2NhcGUgYW55XG4gIC8vIHwgY2hhcnMgdGhhdCB3ZXJlIGFscmVhZHkgZXNjYXBlZC5cbiAgZm9yIChwbCA9IHBhdHRlcm5MaXN0U3RhY2sucG9wKCk7IHBsOyBwbCA9IHBhdHRlcm5MaXN0U3RhY2sucG9wKCkpIHtcbiAgICB2YXIgdGFpbCA9IHJlLnNsaWNlKHBsLnJlU3RhcnQgKyBwbC5vcGVuLmxlbmd0aClcbiAgICB0aGlzLmRlYnVnKCdzZXR0aW5nIHRhaWwnLCByZSwgcGwpXG4gICAgLy8gbWF5YmUgc29tZSBldmVuIG51bWJlciBvZiBcXCwgdGhlbiBtYXliZSAxIFxcLCBmb2xsb3dlZCBieSBhIHxcbiAgICB0YWlsID0gdGFpbC5yZXBsYWNlKC8oKD86XFxcXHsyfSl7MCw2NH0pKFxcXFw/KVxcfC9nLCBmdW5jdGlvbiAoXywgJDEsICQyKSB7XG4gICAgICBpZiAoISQyKSB7XG4gICAgICAgIC8vIHRoZSB8IGlzbid0IGFscmVhZHkgZXNjYXBlZCwgc28gZXNjYXBlIGl0LlxuICAgICAgICAkMiA9ICdcXFxcJ1xuICAgICAgfVxuXG4gICAgICAvLyBuZWVkIHRvIGVzY2FwZSBhbGwgdGhvc2Ugc2xhc2hlcyAqYWdhaW4qLCB3aXRob3V0IGVzY2FwaW5nIHRoZVxuICAgICAgLy8gb25lIHRoYXQgd2UgbmVlZCBmb3IgZXNjYXBpbmcgdGhlIHwgY2hhcmFjdGVyLiAgQXMgaXQgd29ya3Mgb3V0LFxuICAgICAgLy8gZXNjYXBpbmcgYW4gZXZlbiBudW1iZXIgb2Ygc2xhc2hlcyBjYW4gYmUgZG9uZSBieSBzaW1wbHkgcmVwZWF0aW5nXG4gICAgICAvLyBpdCBleGFjdGx5IGFmdGVyIGl0c2VsZi4gIFRoYXQncyB3aHkgdGhpcyB0cmljayB3b3Jrcy5cbiAgICAgIC8vXG4gICAgICAvLyBJIGFtIHNvcnJ5IHRoYXQgeW91IGhhdmUgdG8gc2VlIHRoaXMuXG4gICAgICByZXR1cm4gJDEgKyAkMSArICQyICsgJ3wnXG4gICAgfSlcblxuICAgIHRoaXMuZGVidWcoJ3RhaWw9JWpcXG4gICAlcycsIHRhaWwsIHRhaWwsIHBsLCByZSlcbiAgICB2YXIgdCA9IHBsLnR5cGUgPT09ICcqJyA/IHN0YXJcbiAgICAgIDogcGwudHlwZSA9PT0gJz8nID8gcW1hcmtcbiAgICAgIDogJ1xcXFwnICsgcGwudHlwZVxuXG4gICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgcmUgPSByZS5zbGljZSgwLCBwbC5yZVN0YXJ0KSArIHQgKyAnXFxcXCgnICsgdGFpbFxuICB9XG5cbiAgLy8gaGFuZGxlIHRyYWlsaW5nIHRoaW5ncyB0aGF0IG9ubHkgbWF0dGVyIGF0IHRoZSB2ZXJ5IGVuZC5cbiAgY2xlYXJTdGF0ZUNoYXIoKVxuICBpZiAoZXNjYXBpbmcpIHtcbiAgICAvLyB0cmFpbGluZyBcXFxcXG4gICAgcmUgKz0gJ1xcXFxcXFxcJ1xuICB9XG5cbiAgLy8gb25seSBuZWVkIHRvIGFwcGx5IHRoZSBub2RvdCBzdGFydCBpZiB0aGUgcmUgc3RhcnRzIHdpdGhcbiAgLy8gc29tZXRoaW5nIHRoYXQgY291bGQgY29uY2VpdmFibHkgY2FwdHVyZSBhIGRvdFxuICB2YXIgYWRkUGF0dGVyblN0YXJ0ID0gZmFsc2VcbiAgc3dpdGNoIChyZS5jaGFyQXQoMCkpIHtcbiAgICBjYXNlICcuJzpcbiAgICBjYXNlICdbJzpcbiAgICBjYXNlICcoJzogYWRkUGF0dGVyblN0YXJ0ID0gdHJ1ZVxuICB9XG5cbiAgLy8gSGFjayB0byB3b3JrIGFyb3VuZCBsYWNrIG9mIG5lZ2F0aXZlIGxvb2tiZWhpbmQgaW4gSlNcbiAgLy8gQSBwYXR0ZXJuIGxpa2U6ICouISh4KS4hKHl8eikgbmVlZHMgdG8gZW5zdXJlIHRoYXQgYSBuYW1lXG4gIC8vIGxpa2UgJ2EueHl6Lnl6JyBkb2Vzbid0IG1hdGNoLiAgU28sIHRoZSBmaXJzdCBuZWdhdGl2ZVxuICAvLyBsb29rYWhlYWQsIGhhcyB0byBsb29rIEFMTCB0aGUgd2F5IGFoZWFkLCB0byB0aGUgZW5kIG9mXG4gIC8vIHRoZSBwYXR0ZXJuLlxuICBmb3IgKHZhciBuID0gbmVnYXRpdmVMaXN0cy5sZW5ndGggLSAxOyBuID4gLTE7IG4tLSkge1xuICAgIHZhciBubCA9IG5lZ2F0aXZlTGlzdHNbbl1cblxuICAgIHZhciBubEJlZm9yZSA9IHJlLnNsaWNlKDAsIG5sLnJlU3RhcnQpXG4gICAgdmFyIG5sRmlyc3QgPSByZS5zbGljZShubC5yZVN0YXJ0LCBubC5yZUVuZCAtIDgpXG4gICAgdmFyIG5sTGFzdCA9IHJlLnNsaWNlKG5sLnJlRW5kIC0gOCwgbmwucmVFbmQpXG4gICAgdmFyIG5sQWZ0ZXIgPSByZS5zbGljZShubC5yZUVuZClcblxuICAgIG5sTGFzdCArPSBubEFmdGVyXG5cbiAgICAvLyBIYW5kbGUgbmVzdGVkIHN0dWZmIGxpa2UgKigqLmpzfCEoKi5qc29uKSksIHdoZXJlIG9wZW4gcGFyZW5zXG4gICAgLy8gbWVhbiB0aGF0IHdlIHNob3VsZCAqbm90KiBpbmNsdWRlIHRoZSApIGluIHRoZSBiaXQgdGhhdCBpcyBjb25zaWRlcmVkXG4gICAgLy8gXCJhZnRlclwiIHRoZSBuZWdhdGVkIHNlY3Rpb24uXG4gICAgdmFyIG9wZW5QYXJlbnNCZWZvcmUgPSBubEJlZm9yZS5zcGxpdCgnKCcpLmxlbmd0aCAtIDFcbiAgICB2YXIgY2xlYW5BZnRlciA9IG5sQWZ0ZXJcbiAgICBmb3IgKGkgPSAwOyBpIDwgb3BlblBhcmVuc0JlZm9yZTsgaSsrKSB7XG4gICAgICBjbGVhbkFmdGVyID0gY2xlYW5BZnRlci5yZXBsYWNlKC9cXClbKyo/XT8vLCAnJylcbiAgICB9XG4gICAgbmxBZnRlciA9IGNsZWFuQWZ0ZXJcblxuICAgIHZhciBkb2xsYXIgPSAnJ1xuICAgIGlmIChubEFmdGVyID09PSAnJyAmJiBpc1N1YiAhPT0gU1VCUEFSU0UpIHtcbiAgICAgIGRvbGxhciA9ICckJ1xuICAgIH1cbiAgICB2YXIgbmV3UmUgPSBubEJlZm9yZSArIG5sRmlyc3QgKyBubEFmdGVyICsgZG9sbGFyICsgbmxMYXN0XG4gICAgcmUgPSBuZXdSZVxuICB9XG5cbiAgLy8gaWYgdGhlIHJlIGlzIG5vdCBcIlwiIGF0IHRoaXMgcG9pbnQsIHRoZW4gd2UgbmVlZCB0byBtYWtlIHN1cmVcbiAgLy8gaXQgZG9lc24ndCBtYXRjaCBhZ2FpbnN0IGFuIGVtcHR5IHBhdGggcGFydC5cbiAgLy8gT3RoZXJ3aXNlIGEvKiB3aWxsIG1hdGNoIGEvLCB3aGljaCBpdCBzaG91bGQgbm90LlxuICBpZiAocmUgIT09ICcnICYmIGhhc01hZ2ljKSB7XG4gICAgcmUgPSAnKD89LiknICsgcmVcbiAgfVxuXG4gIGlmIChhZGRQYXR0ZXJuU3RhcnQpIHtcbiAgICByZSA9IHBhdHRlcm5TdGFydCArIHJlXG4gIH1cblxuICAvLyBwYXJzaW5nIGp1c3QgYSBwaWVjZSBvZiBhIGxhcmdlciBwYXR0ZXJuLlxuICBpZiAoaXNTdWIgPT09IFNVQlBBUlNFKSB7XG4gICAgcmV0dXJuIFtyZSwgaGFzTWFnaWNdXG4gIH1cblxuICAvLyBza2lwIHRoZSByZWdleHAgZm9yIG5vbi1tYWdpY2FsIHBhdHRlcm5zXG4gIC8vIHVuZXNjYXBlIGFueXRoaW5nIGluIGl0LCB0aG91Z2gsIHNvIHRoYXQgaXQnbGwgYmVcbiAgLy8gYW4gZXhhY3QgbWF0Y2ggYWdhaW5zdCBhIGZpbGUgZXRjLlxuICBpZiAoIWhhc01hZ2ljKSB7XG4gICAgcmV0dXJuIGdsb2JVbmVzY2FwZShwYXR0ZXJuKVxuICB9XG5cbiAgdmFyIGZsYWdzID0gb3B0aW9ucy5ub2Nhc2UgPyAnaScgOiAnJ1xuICB0cnkge1xuICAgIHZhciByZWdFeHAgPSBuZXcgUmVnRXhwKCdeJyArIHJlICsgJyQnLCBmbGFncylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICAvLyBJZiBpdCB3YXMgYW4gaW52YWxpZCByZWd1bGFyIGV4cHJlc3Npb24sIHRoZW4gaXQgY2FuJ3QgbWF0Y2hcbiAgICAvLyBhbnl0aGluZy4gIFRoaXMgdHJpY2sgbG9va3MgZm9yIGEgY2hhcmFjdGVyIGFmdGVyIHRoZSBlbmQgb2ZcbiAgICAvLyB0aGUgc3RyaW5nLCB3aGljaCBpcyBvZiBjb3Vyc2UgaW1wb3NzaWJsZSwgZXhjZXB0IGluIG11bHRpLWxpbmVcbiAgICAvLyBtb2RlLCBidXQgaXQncyBub3QgYSAvbSByZWdleC5cbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnJC4nKVxuICB9XG5cbiAgcmVnRXhwLl9nbG9iID0gcGF0dGVyblxuICByZWdFeHAuX3NyYyA9IHJlXG5cbiAgcmV0dXJuIHJlZ0V4cFxufVxuXG5taW5pbWF0Y2gubWFrZVJlID0gZnVuY3Rpb24gKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBNaW5pbWF0Y2gocGF0dGVybiwgb3B0aW9ucyB8fCB7fSkubWFrZVJlKClcbn1cblxuTWluaW1hdGNoLnByb3RvdHlwZS5tYWtlUmUgPSBtYWtlUmVcbmZ1bmN0aW9uIG1ha2VSZSAoKSB7XG4gIGlmICh0aGlzLnJlZ2V4cCB8fCB0aGlzLnJlZ2V4cCA9PT0gZmFsc2UpIHJldHVybiB0aGlzLnJlZ2V4cFxuXG4gIC8vIGF0IHRoaXMgcG9pbnQsIHRoaXMuc2V0IGlzIGEgMmQgYXJyYXkgb2YgcGFydGlhbFxuICAvLyBwYXR0ZXJuIHN0cmluZ3MsIG9yIFwiKipcIi5cbiAgLy9cbiAgLy8gSXQncyBiZXR0ZXIgdG8gdXNlIC5tYXRjaCgpLiAgVGhpcyBmdW5jdGlvbiBzaG91bGRuJ3RcbiAgLy8gYmUgdXNlZCwgcmVhbGx5LCBidXQgaXQncyBwcmV0dHkgY29udmVuaWVudCBzb21ldGltZXMsXG4gIC8vIHdoZW4geW91IGp1c3Qgd2FudCB0byB3b3JrIHdpdGggYSByZWdleC5cbiAgdmFyIHNldCA9IHRoaXMuc2V0XG5cbiAgaWYgKCFzZXQubGVuZ3RoKSB7XG4gICAgdGhpcy5yZWdleHAgPSBmYWxzZVxuICAgIHJldHVybiB0aGlzLnJlZ2V4cFxuICB9XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG5cbiAgdmFyIHR3b1N0YXIgPSBvcHRpb25zLm5vZ2xvYnN0YXIgPyBzdGFyXG4gICAgOiBvcHRpb25zLmRvdCA/IHR3b1N0YXJEb3RcbiAgICA6IHR3b1N0YXJOb0RvdFxuICB2YXIgZmxhZ3MgPSBvcHRpb25zLm5vY2FzZSA/ICdpJyA6ICcnXG5cbiAgdmFyIHJlID0gc2V0Lm1hcChmdW5jdGlvbiAocGF0dGVybikge1xuICAgIHJldHVybiBwYXR0ZXJuLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIChwID09PSBHTE9CU1RBUikgPyB0d29TdGFyXG4gICAgICA6ICh0eXBlb2YgcCA9PT0gJ3N0cmluZycpID8gcmVnRXhwRXNjYXBlKHApXG4gICAgICA6IHAuX3NyY1xuICAgIH0pLmpvaW4oJ1xcXFxcXC8nKVxuICB9KS5qb2luKCd8JylcblxuICAvLyBtdXN0IG1hdGNoIGVudGlyZSBwYXR0ZXJuXG4gIC8vIGVuZGluZyBpbiBhICogb3IgKiogd2lsbCBtYWtlIGl0IGxlc3Mgc3RyaWN0LlxuICByZSA9ICdeKD86JyArIHJlICsgJykkJ1xuXG4gIC8vIGNhbiBtYXRjaCBhbnl0aGluZywgYXMgbG9uZyBhcyBpdCdzIG5vdCB0aGlzLlxuICBpZiAodGhpcy5uZWdhdGUpIHJlID0gJ14oPyEnICsgcmUgKyAnKS4qJCdcblxuICB0cnkge1xuICAgIHRoaXMucmVnZXhwID0gbmV3IFJlZ0V4cChyZSwgZmxhZ3MpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgdGhpcy5yZWdleHAgPSBmYWxzZVxuICB9XG4gIHJldHVybiB0aGlzLnJlZ2V4cFxufVxuXG5taW5pbWF0Y2gubWF0Y2ggPSBmdW5jdGlvbiAobGlzdCwgcGF0dGVybiwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgbW0gPSBuZXcgTWluaW1hdGNoKHBhdHRlcm4sIG9wdGlvbnMpXG4gIGxpc3QgPSBsaXN0LmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBtbS5tYXRjaChmKVxuICB9KVxuICBpZiAobW0ub3B0aW9ucy5ub251bGwgJiYgIWxpc3QubGVuZ3RoKSB7XG4gICAgbGlzdC5wdXNoKHBhdHRlcm4pXG4gIH1cbiAgcmV0dXJuIGxpc3Rcbn1cblxuTWluaW1hdGNoLnByb3RvdHlwZS5tYXRjaCA9IG1hdGNoXG5mdW5jdGlvbiBtYXRjaCAoZiwgcGFydGlhbCkge1xuICB0aGlzLmRlYnVnKCdtYXRjaCcsIGYsIHRoaXMucGF0dGVybilcbiAgLy8gc2hvcnQtY2lyY3VpdCBpbiB0aGUgY2FzZSBvZiBidXN0ZWQgdGhpbmdzLlxuICAvLyBjb21tZW50cywgZXRjLlxuICBpZiAodGhpcy5jb21tZW50KSByZXR1cm4gZmFsc2VcbiAgaWYgKHRoaXMuZW1wdHkpIHJldHVybiBmID09PSAnJ1xuXG4gIGlmIChmID09PSAnLycgJiYgcGFydGlhbCkgcmV0dXJuIHRydWVcblxuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIC8vIHdpbmRvd3M6IG5lZWQgdG8gdXNlIC8sIG5vdCBcXFxuICBpZiAocGF0aC5zZXAgIT09ICcvJykge1xuICAgIGYgPSBmLnNwbGl0KHBhdGguc2VwKS5qb2luKCcvJylcbiAgfVxuXG4gIC8vIHRyZWF0IHRoZSB0ZXN0IHBhdGggYXMgYSBzZXQgb2YgcGF0aHBhcnRzLlxuICBmID0gZi5zcGxpdChzbGFzaFNwbGl0KVxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgJ3NwbGl0JywgZilcblxuICAvLyBqdXN0IE9ORSBvZiB0aGUgcGF0dGVybiBzZXRzIGluIHRoaXMuc2V0IG5lZWRzIHRvIG1hdGNoXG4gIC8vIGluIG9yZGVyIGZvciBpdCB0byBiZSB2YWxpZC4gIElmIG5lZ2F0aW5nLCB0aGVuIGp1c3Qgb25lXG4gIC8vIG1hdGNoIG1lYW5zIHRoYXQgd2UgaGF2ZSBmYWlsZWQuXG4gIC8vIEVpdGhlciB3YXksIHJldHVybiBvbiB0aGUgZmlyc3QgaGl0LlxuXG4gIHZhciBzZXQgPSB0aGlzLnNldFxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgJ3NldCcsIHNldClcblxuICAvLyBGaW5kIHRoZSBiYXNlbmFtZSBvZiB0aGUgcGF0aCBieSBsb29raW5nIGZvciB0aGUgbGFzdCBub24tZW1wdHkgc2VnbWVudFxuICB2YXIgZmlsZW5hbWVcbiAgdmFyIGlcbiAgZm9yIChpID0gZi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGZpbGVuYW1lID0gZltpXVxuICAgIGlmIChmaWxlbmFtZSkgYnJlYWtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGF0dGVybiA9IHNldFtpXVxuICAgIHZhciBmaWxlID0gZlxuICAgIGlmIChvcHRpb25zLm1hdGNoQmFzZSAmJiBwYXR0ZXJuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZmlsZSA9IFtmaWxlbmFtZV1cbiAgICB9XG4gICAgdmFyIGhpdCA9IHRoaXMubWF0Y2hPbmUoZmlsZSwgcGF0dGVybiwgcGFydGlhbClcbiAgICBpZiAoaGl0KSB7XG4gICAgICBpZiAob3B0aW9ucy5mbGlwTmVnYXRlKSByZXR1cm4gdHJ1ZVxuICAgICAgcmV0dXJuICF0aGlzLm5lZ2F0ZVxuICAgIH1cbiAgfVxuXG4gIC8vIGRpZG4ndCBnZXQgYW55IGhpdHMuICB0aGlzIGlzIHN1Y2Nlc3MgaWYgaXQncyBhIG5lZ2F0aXZlXG4gIC8vIHBhdHRlcm4sIGZhaWx1cmUgb3RoZXJ3aXNlLlxuICBpZiAob3B0aW9ucy5mbGlwTmVnYXRlKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHRoaXMubmVnYXRlXG59XG5cbi8vIHNldCBwYXJ0aWFsIHRvIHRydWUgdG8gdGVzdCBpZiwgZm9yIGV4YW1wbGUsXG4vLyBcIi9hL2JcIiBtYXRjaGVzIHRoZSBzdGFydCBvZiBcIi8qL2IvKi9kXCJcbi8vIFBhcnRpYWwgbWVhbnMsIGlmIHlvdSBydW4gb3V0IG9mIGZpbGUgYmVmb3JlIHlvdSBydW5cbi8vIG91dCBvZiBwYXR0ZXJuLCB0aGVuIHRoYXQncyBmaW5lLCBhcyBsb25nIGFzIGFsbFxuLy8gdGhlIHBhcnRzIG1hdGNoLlxuTWluaW1hdGNoLnByb3RvdHlwZS5tYXRjaE9uZSA9IGZ1bmN0aW9uIChmaWxlLCBwYXR0ZXJuLCBwYXJ0aWFsKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG5cbiAgdGhpcy5kZWJ1ZygnbWF0Y2hPbmUnLFxuICAgIHsgJ3RoaXMnOiB0aGlzLCBmaWxlOiBmaWxlLCBwYXR0ZXJuOiBwYXR0ZXJuIH0pXG5cbiAgdGhpcy5kZWJ1ZygnbWF0Y2hPbmUnLCBmaWxlLmxlbmd0aCwgcGF0dGVybi5sZW5ndGgpXG5cbiAgZm9yICh2YXIgZmkgPSAwLFxuICAgICAgcGkgPSAwLFxuICAgICAgZmwgPSBmaWxlLmxlbmd0aCxcbiAgICAgIHBsID0gcGF0dGVybi5sZW5ndGhcbiAgICAgIDsgKGZpIDwgZmwpICYmIChwaSA8IHBsKVxuICAgICAgOyBmaSsrLCBwaSsrKSB7XG4gICAgdGhpcy5kZWJ1ZygnbWF0Y2hPbmUgbG9vcCcpXG4gICAgdmFyIHAgPSBwYXR0ZXJuW3BpXVxuICAgIHZhciBmID0gZmlsZVtmaV1cblxuICAgIHRoaXMuZGVidWcocGF0dGVybiwgcCwgZilcblxuICAgIC8vIHNob3VsZCBiZSBpbXBvc3NpYmxlLlxuICAgIC8vIHNvbWUgaW52YWxpZCByZWdleHAgc3R1ZmYgaW4gdGhlIHNldC5cbiAgICBpZiAocCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZVxuXG4gICAgaWYgKHAgPT09IEdMT0JTVEFSKSB7XG4gICAgICB0aGlzLmRlYnVnKCdHTE9CU1RBUicsIFtwYXR0ZXJuLCBwLCBmXSlcblxuICAgICAgLy8gXCIqKlwiXG4gICAgICAvLyBhLyoqL2IvKiovYyB3b3VsZCBtYXRjaCB0aGUgZm9sbG93aW5nOlxuICAgICAgLy8gYS9iL3gveS96L2NcbiAgICAgIC8vIGEveC95L3ovYi9jXG4gICAgICAvLyBhL2IveC9iL3gvY1xuICAgICAgLy8gYS9iL2NcbiAgICAgIC8vIFRvIGRvIHRoaXMsIHRha2UgdGhlIHJlc3Qgb2YgdGhlIHBhdHRlcm4gYWZ0ZXJcbiAgICAgIC8vIHRoZSAqKiwgYW5kIHNlZSBpZiBpdCB3b3VsZCBtYXRjaCB0aGUgZmlsZSByZW1haW5kZXIuXG4gICAgICAvLyBJZiBzbywgcmV0dXJuIHN1Y2Nlc3MuXG4gICAgICAvLyBJZiBub3QsIHRoZSAqKiBcInN3YWxsb3dzXCIgYSBzZWdtZW50LCBhbmQgdHJ5IGFnYWluLlxuICAgICAgLy8gVGhpcyBpcyByZWN1cnNpdmVseSBhd2Z1bC5cbiAgICAgIC8vXG4gICAgICAvLyBhLyoqL2IvKiovYyBtYXRjaGluZyBhL2IveC95L3ovY1xuICAgICAgLy8gLSBhIG1hdGNoZXMgYVxuICAgICAgLy8gLSBkb3VibGVzdGFyXG4gICAgICAvLyAgIC0gbWF0Y2hPbmUoYi94L3kvei9jLCBiLyoqL2MpXG4gICAgICAvLyAgICAgLSBiIG1hdGNoZXMgYlxuICAgICAgLy8gICAgIC0gZG91Ymxlc3RhclxuICAgICAgLy8gICAgICAgLSBtYXRjaE9uZSh4L3kvei9jLCBjKSAtPiBub1xuICAgICAgLy8gICAgICAgLSBtYXRjaE9uZSh5L3ovYywgYykgLT4gbm9cbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoei9jLCBjKSAtPiBub1xuICAgICAgLy8gICAgICAgLSBtYXRjaE9uZShjLCBjKSB5ZXMsIGhpdFxuICAgICAgdmFyIGZyID0gZmlcbiAgICAgIHZhciBwciA9IHBpICsgMVxuICAgICAgaWYgKHByID09PSBwbCkge1xuICAgICAgICB0aGlzLmRlYnVnKCcqKiBhdCB0aGUgZW5kJylcbiAgICAgICAgLy8gYSAqKiBhdCB0aGUgZW5kIHdpbGwganVzdCBzd2FsbG93IHRoZSByZXN0LlxuICAgICAgICAvLyBXZSBoYXZlIGZvdW5kIGEgbWF0Y2guXG4gICAgICAgIC8vIGhvd2V2ZXIsIGl0IHdpbGwgbm90IHN3YWxsb3cgLy54LCB1bmxlc3NcbiAgICAgICAgLy8gb3B0aW9ucy5kb3QgaXMgc2V0LlxuICAgICAgICAvLyAuIGFuZCAuLiBhcmUgKm5ldmVyKiBtYXRjaGVkIGJ5ICoqLCBmb3IgZXhwbG9zaXZlbHlcbiAgICAgICAgLy8gZXhwb25lbnRpYWwgcmVhc29ucy5cbiAgICAgICAgZm9yICg7IGZpIDwgZmw7IGZpKyspIHtcbiAgICAgICAgICBpZiAoZmlsZVtmaV0gPT09ICcuJyB8fCBmaWxlW2ZpXSA9PT0gJy4uJyB8fFxuICAgICAgICAgICAgKCFvcHRpb25zLmRvdCAmJiBmaWxlW2ZpXS5jaGFyQXQoMCkgPT09ICcuJykpIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIG9rLCBsZXQncyBzZWUgaWYgd2UgY2FuIHN3YWxsb3cgd2hhdGV2ZXIgd2UgY2FuLlxuICAgICAgd2hpbGUgKGZyIDwgZmwpIHtcbiAgICAgICAgdmFyIHN3YWxsb3dlZSA9IGZpbGVbZnJdXG5cbiAgICAgICAgdGhpcy5kZWJ1ZygnXFxuZ2xvYnN0YXIgd2hpbGUnLCBmaWxlLCBmciwgcGF0dGVybiwgcHIsIHN3YWxsb3dlZSlcblxuICAgICAgICAvLyBYWFggcmVtb3ZlIHRoaXMgc2xpY2UuICBKdXN0IHBhc3MgdGhlIHN0YXJ0IGluZGV4LlxuICAgICAgICBpZiAodGhpcy5tYXRjaE9uZShmaWxlLnNsaWNlKGZyKSwgcGF0dGVybi5zbGljZShwciksIHBhcnRpYWwpKSB7XG4gICAgICAgICAgdGhpcy5kZWJ1ZygnZ2xvYnN0YXIgZm91bmQgbWF0Y2ghJywgZnIsIGZsLCBzd2FsbG93ZWUpXG4gICAgICAgICAgLy8gZm91bmQgYSBtYXRjaC5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNhbid0IHN3YWxsb3cgXCIuXCIgb3IgXCIuLlwiIGV2ZXIuXG4gICAgICAgICAgLy8gY2FuIG9ubHkgc3dhbGxvdyBcIi5mb29cIiB3aGVuIGV4cGxpY2l0bHkgYXNrZWQuXG4gICAgICAgICAgaWYgKHN3YWxsb3dlZSA9PT0gJy4nIHx8IHN3YWxsb3dlZSA9PT0gJy4uJyB8fFxuICAgICAgICAgICAgKCFvcHRpb25zLmRvdCAmJiBzd2FsbG93ZWUuY2hhckF0KDApID09PSAnLicpKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdkb3QgZGV0ZWN0ZWQhJywgZmlsZSwgZnIsIHBhdHRlcm4sIHByKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyAqKiBzd2FsbG93cyBhIHNlZ21lbnQsIGFuZCBjb250aW51ZS5cbiAgICAgICAgICB0aGlzLmRlYnVnKCdnbG9ic3RhciBzd2FsbG93IGEgc2VnbWVudCwgYW5kIGNvbnRpbnVlJylcbiAgICAgICAgICBmcisrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gbm8gbWF0Y2ggd2FzIGZvdW5kLlxuICAgICAgLy8gSG93ZXZlciwgaW4gcGFydGlhbCBtb2RlLCB3ZSBjYW4ndCBzYXkgdGhpcyBpcyBuZWNlc3NhcmlseSBvdmVyLlxuICAgICAgLy8gSWYgdGhlcmUncyBtb3JlICpwYXR0ZXJuKiBsZWZ0LCB0aGVuXG4gICAgICBpZiAocGFydGlhbCkge1xuICAgICAgICAvLyByYW4gb3V0IG9mIGZpbGVcbiAgICAgICAgdGhpcy5kZWJ1ZygnXFxuPj4+IG5vIG1hdGNoLCBwYXJ0aWFsPycsIGZpbGUsIGZyLCBwYXR0ZXJuLCBwcilcbiAgICAgICAgaWYgKGZyID09PSBmbCkgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIHNvbWV0aGluZyBvdGhlciB0aGFuICoqXG4gICAgLy8gbm9uLW1hZ2ljIHBhdHRlcm5zIGp1c3QgaGF2ZSB0byBtYXRjaCBleGFjdGx5XG4gICAgLy8gcGF0dGVybnMgd2l0aCBtYWdpYyBoYXZlIGJlZW4gdHVybmVkIGludG8gcmVnZXhwcy5cbiAgICB2YXIgaGl0XG4gICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKG9wdGlvbnMubm9jYXNlKSB7XG4gICAgICAgIGhpdCA9IGYudG9Mb3dlckNhc2UoKSA9PT0gcC50b0xvd2VyQ2FzZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaXQgPSBmID09PSBwXG4gICAgICB9XG4gICAgICB0aGlzLmRlYnVnKCdzdHJpbmcgbWF0Y2gnLCBwLCBmLCBoaXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGhpdCA9IGYubWF0Y2gocClcbiAgICAgIHRoaXMuZGVidWcoJ3BhdHRlcm4gbWF0Y2gnLCBwLCBmLCBoaXQpXG4gICAgfVxuXG4gICAgaWYgKCFoaXQpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gTm90ZTogZW5kaW5nIGluIC8gbWVhbnMgdGhhdCB3ZSdsbCBnZXQgYSBmaW5hbCBcIlwiXG4gIC8vIGF0IHRoZSBlbmQgb2YgdGhlIHBhdHRlcm4uICBUaGlzIGNhbiBvbmx5IG1hdGNoIGFcbiAgLy8gY29ycmVzcG9uZGluZyBcIlwiIGF0IHRoZSBlbmQgb2YgdGhlIGZpbGUuXG4gIC8vIElmIHRoZSBmaWxlIGVuZHMgaW4gLywgdGhlbiBpdCBjYW4gb25seSBtYXRjaCBhXG4gIC8vIGEgcGF0dGVybiB0aGF0IGVuZHMgaW4gLywgdW5sZXNzIHRoZSBwYXR0ZXJuIGp1c3RcbiAgLy8gZG9lc24ndCBoYXZlIGFueSBtb3JlIGZvciBpdC4gQnV0LCBhL2IvIHNob3VsZCAqbm90KlxuICAvLyBtYXRjaCBcImEvYi8qXCIsIGV2ZW4gdGhvdWdoIFwiXCIgbWF0Y2hlcyBhZ2FpbnN0IHRoZVxuICAvLyBbXi9dKj8gcGF0dGVybiwgZXhjZXB0IGluIHBhcnRpYWwgbW9kZSwgd2hlcmUgaXQgbWlnaHRcbiAgLy8gc2ltcGx5IG5vdCBiZSByZWFjaGVkIHlldC5cbiAgLy8gSG93ZXZlciwgYS9iLyBzaG91bGQgc3RpbGwgc2F0aXNmeSBhLypcblxuICAvLyBub3cgZWl0aGVyIHdlIGZlbGwgb2ZmIHRoZSBlbmQgb2YgdGhlIHBhdHRlcm4sIG9yIHdlJ3JlIGRvbmUuXG4gIGlmIChmaSA9PT0gZmwgJiYgcGkgPT09IHBsKSB7XG4gICAgLy8gcmFuIG91dCBvZiBwYXR0ZXJuIGFuZCBmaWxlbmFtZSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgIC8vIGFuIGV4YWN0IGhpdCFcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2UgaWYgKGZpID09PSBmbCkge1xuICAgIC8vIHJhbiBvdXQgb2YgZmlsZSwgYnV0IHN0aWxsIGhhZCBwYXR0ZXJuIGxlZnQuXG4gICAgLy8gdGhpcyBpcyBvayBpZiB3ZSdyZSBkb2luZyB0aGUgbWF0Y2ggYXMgcGFydCBvZlxuICAgIC8vIGEgZ2xvYiBmcyB0cmF2ZXJzYWwuXG4gICAgcmV0dXJuIHBhcnRpYWxcbiAgfSBlbHNlIGlmIChwaSA9PT0gcGwpIHtcbiAgICAvLyByYW4gb3V0IG9mIHBhdHRlcm4sIHN0aWxsIGhhdmUgZmlsZSBsZWZ0LlxuICAgIC8vIHRoaXMgaXMgb25seSBhY2NlcHRhYmxlIGlmIHdlJ3JlIG9uIHRoZSB2ZXJ5IGxhc3RcbiAgICAvLyBlbXB0eSBzZWdtZW50IG9mIGEgZmlsZSB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAgLy8gYS8qIHNob3VsZCBtYXRjaCBhL2IvXG4gICAgdmFyIGVtcHR5RmlsZUVuZCA9IChmaSA9PT0gZmwgLSAxKSAmJiAoZmlsZVtmaV0gPT09ICcnKVxuICAgIHJldHVybiBlbXB0eUZpbGVFbmRcbiAgfVxuXG4gIC8vIHNob3VsZCBiZSB1bnJlYWNoYWJsZS5cbiAgdGhyb3cgbmV3IEVycm9yKCd3dGY/Jylcbn1cblxuLy8gcmVwbGFjZSBzdHVmZiBsaWtlIFxcKiB3aXRoICpcbmZ1bmN0aW9uIGdsb2JVbmVzY2FwZSAocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9cXFxcKC4pL2csICckMScpXG59XG5cbmZ1bmN0aW9uIHJlZ0V4cEVzY2FwZSAocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpXG59XG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG52YXIgc2NyaXB0ID0ge1xuICAgIHByb3BzOiB7XG4gICAgICAgIC8vIGltYWdlcyA9IFt7IG5hbWU6J2ltYWdlMS5qcGcnLCBhbHQ6J1JlZHdvb2RzJywgZmlsdGVyOiduYXR1cmUnIH0sIC4uLl1cbiAgICAgICAgaW1hZ2VzOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFVzZWQgdG8gZGlzcGxheSBhIHN1YnNldCBvZiBwaG90b3MuIElmIHVzZWQsIGltYWdlcyBhcnJheSBtdXN0IGNvbnRhaW4gYSBwcm9wZXJ0eVxuICAgICAgICAvLyB0aXRsZWQgJ2ZpbHRlcicgd2hpY2ggY29udGFpbnMgdGhlIGRlc2lyZWQgZmlsdGVyIHN0cmluZ1xuICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdhbGwnXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFVzZWQgaWYgaW1hZ2VzIGFyZSBsb2NhdGVkIGluIGEgc2VwYXJhdGUgZm9sZGVyIChlLmcuICcvaW1hZ2VzLycpXG4gICAgICAgIGRpcmVjdG9yeToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgLy8gVXNlZCB0byBzZXQgdGhlIGR1cmF0aW9uIGluIG1pbGlzZWNvbmRzIG9mIGtleS9tb3VzZSBpbmFjdGl2aXR5IGJlZm9yZSBjYXB0aW9uXG4gICAgICAgIC8vIGFuZCBhcnJvd3MgZGlzYXBwZWFyXG4gICAgICAgIHRpbWVvdXREdXJhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMzAwMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsICAgICAgICAvLyBMaWdodGJveCBub3QgdmlzaWJsZSBieSBkZWZhdWx0XG4gICAgICAgICAgICBjb250cm9sc1Zpc2libGU6IHRydWUsIC8vIExpZ2h0Ym94IGNvbnRyb2xzIChhcnJvd3MsIGNhcHRpb24sIGNsb3NlIGJ1dHRvbilcbiAgICAgICAgICAgIGluZGV4OiAwLCAgICAgICAgICAgICAgLy8gSW5kZXggaW5kaWNhdGVzIHdoaWNoIHBob3RvIHRvIGRpc3BsYXkuIERlZmF1bHQgdG8gMXN0IHBob3RvXG4gICAgICAgICAgICB0aW1lcjogbnVsbCAgICAgICAgICAvLyBUaW1lciB0byBzaG93L2hpZGUgbGlnaHRib3ggY29udHJvbHMgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xuICAgIH0sXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiBkZXN0cm95ZWQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlFdmVudExpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNob3c6IGZ1bmN0aW9uIHNob3coaW1hZ2VOYW1lKSB7XG4gICAgICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGltYWdlIHBhc3NlZCB0byBMaWdodGJveFxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuZmlsdGVyZWRJbWFnZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMkMS5maWx0ZXJlZEltYWdlc1tpXS5uYW1lID09IGltYWdlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzJDEuaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHt0aGF0LmNvbnRyb2xzVmlzaWJsZSA9IGZhbHNlO30sIHRoYXQudGltZW91dER1cmF0aW9uKTtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZE5leHRJbWFnZSgpO1xuICAgICAgICB9LFxuICAgICAgICBoaWRlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzX25leHQ6IGZ1bmN0aW9uIGhhc19uZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4ICsgMSA8IHRoaXMuZmlsdGVyZWRJbWFnZXMubGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzX3ByZXY6IGZ1bmN0aW9uIGhhc19wcmV2KCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4IC0gMSA+PSAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldjogZnVuY3Rpb24gcHJldigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc19wcmV2KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4IC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNfbmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMucHJlbG9hZE5leHRJbWFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBrZXlFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBrZXlFdmVudExpc3RlbmVyKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHt0aGF0LmNvbnRyb2xzVmlzaWJsZSA9IGZhbHNlO30sIHRoYXQudGltZW91dER1cmF0aW9uKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gVGhpcyBldmVudCBzaG93cyB0aGUgYXJyb3dzIGFuZCBjYXB0aW9uIG9uIHRoZSBsaWdodGJveCB3aGVuIHRoZSBtb3VzZSBpcyBtb3ZlZCBvciBjbGlja2VkLlxuICAgICAgICAvLyBBbHNvIHVzZWQgZm9yIHRvdWNoIGV2ZW50cyBvbiB0b3VjaHNjcmVlbiBkZXZpY2VzLiBUaGUgZWxlbWVudHMgYXJlIHNldCB0byBkaXNhcHBlYXJcbiAgICAgICAgLy8gYWZ0ZXIgYSBnaXZlbiBkdXJhdGlvbiB2aWEgYSB0aW1lci5cbiAgICAgICAgbW91c2VFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBtb3VzZUV2ZW50TGlzdGVuZXIoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3RoYXQuY29udHJvbHNWaXNpYmxlID0gZmFsc2U7fSwgdGhhdC50aW1lb3V0RHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcmVsb2FkTmV4dEltYWdlOiBmdW5jdGlvbiBwcmVsb2FkTmV4dEltYWdlICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc19uZXh0KCkpe1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIF9pbWcuc3JjID0gdGhpcy5kaXJlY3RvcnkgKyB0aGlzLmZpbHRlcmVkSW1hZ2VzW3RoaXMuaW5kZXggKyAxXS5uYW1lO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBmaWx0ZXJlZEltYWdlczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoYXQuZmlsdGVyID09PSAnYWxsJyB8fCAhdGhhdC5maWx0ZXIubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5pbWFnZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5pbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmZpbHRlciA9PT0gdGhhdC5maWx0ZXI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qIHNjcmlwdCAqL1xuICAgICAgICAgICAgdmFyIF9fdnVlX3NjcmlwdF9fID0gc2NyaXB0O1xuICAgICAgICAgICAgXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3JlbmRlcl9fID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzO1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnQ7XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaDtcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJsaWdodGJveC1mYWRlXCIgfSB9LCBbXG4gICAgICAgIF92bS52aXNpYmxlXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpZ2h0Ym94XCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oaWRlKCRldmVudClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0b3VjaGRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGlkZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWdodGJveC1jbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhpZGUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGlkZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIsOXXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpZ2h0Ym94LWFycm93IGxpZ2h0Ym94LWFycm93LWxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByZXYoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmV2KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwibGlnaHRib3gtZmFkZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaGFzX3ByZXYoKSAmJiBfdm0uY29udHJvbHNWaXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJoYXNfcHJldigpICYmIGNvbnRyb2xzVmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWdodGJveC1hcnJvdy1sZWZ0LWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJjaXJjbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4OiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3k6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJyZ2JhKDIwLCAyMCwgMjAsIDAuNClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0xNS40MSAxNi4wOWwtNC41OC00LjU5IDQuNTgtNC41OUwxNCA1LjVsLTYgNiA2IDZ6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGQ6IFwiTTAtLjVoMjR2MjRIMHpcIiwgZmlsbDogXCJub25lXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpZ2h0Ym94LWFycm93IGxpZ2h0Ym94LWFycm93LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uZXh0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmV4dCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImxpZ2h0Ym94LWZhZGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmhhc19uZXh0KCkgJiYgX3ZtLmNvbnRyb2xzVmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGFzX25leHQoKSAmJiBjb250cm9sc1Zpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlnaHRib3gtYXJyb3ctcmlnaHQtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImNpcmNsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3g6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcInJnYmEoMjAsIDIwLCAyMCwgMC40KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTTguNTkgMTYuMzRsNC41OC00LjU5LTQuNTgtNC41OUwxMCA1Ljc1bDYgNi02IDZ6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGQ6IFwiTTAtLjI1aDI0djI0SDB6XCIsIGZpbGw6IFwibm9uZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJsaWdodGJveC1mYWRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb250cm9sc1Zpc2libGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsdGVyZWRJbWFnZXNbX3ZtLmluZGV4XS5hbHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250cm9sc1Zpc2libGUgJiYgZmlsdGVyZWRJbWFnZXNbaW5kZXhdLmFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWdodGJveC1jYXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgdW5zZWxlY3RhYmxlOiBcIm9uXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5maWx0ZXJlZEltYWdlc1tfdm0uaW5kZXhdLmFsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWdodGJveC1tYWluXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGlkZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaGRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oaWRlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlnaHRib3gtaW1hZ2UtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcImxpZ2h0Ym94LXNsaWRlXCIsIG1vZGU6IFwib3V0LWluXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBfdm0uaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWdodGJveC1pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlyZWN0b3J5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsdGVyZWRJbWFnZXNbX3ZtLmluZGV4XS5uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn07XG52YXIgX192dWVfc3RhdGljUmVuZGVyRm5zX18gPSBbXTtcbl9fdnVlX3JlbmRlcl9fLl93aXRoU3RyaXBwZWQgPSB0cnVlO1xuXG4gIC8qIHN0eWxlICovXG4gIHZhciBfX3Z1ZV9pbmplY3Rfc3R5bGVzX18gPSBmdW5jdGlvbiAoaW5qZWN0KSB7XG4gICAgaWYgKCFpbmplY3QpIHsgcmV0dXJuIH1cbiAgICBpbmplY3QoXCJkYXRhLXYtMDg2MWQ2NWVfMFwiLCB7IHNvdXJjZTogXCJcXG4ubGlnaHRib3gge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuOSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMjAwO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcbn1cXG4ubGlnaHRib3gtY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDIxMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubGlnaHRib3gtbWFpbiB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubGlnaHRib3gtYXJyb3cge1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG4ubGlnaHRib3gtYXJyb3ctcmlnaHQgeyByaWdodDogMDtcXG59XFxuLmxpZ2h0Ym94LWFycm93LWxlZnQgeyBsZWZ0OiAwO1xcbn1cXG4ubGlnaHRib3gtaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAtbXMtZmxleDogMTtcXG4gICAgZmxleDogMTtcXG59XFxuLmxpZ2h0Ym94LWltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbn1cXG4ubGlnaHRib3gtY2FwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2IoMjYsIDI2LCAyNik7XFxufVxcbi5saWdodGJveC1jYXB0aW9uIHNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5saWdodGJveC1zbGlkZS1lbnRlci1hY3RpdmUsXFxuLmxpZ2h0Ym94LXNsaWRlLWxlYXZlLWFjdGl2ZSB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxufVxcbi5saWdodGJveC1zbGlkZS1lbnRlciB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5saWdodGJveC1zbGlkZS1sZWF2ZS10byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5saWdodGJveC1mYWRlLWVudGVyLWFjdGl2ZSxcXG4ubGlnaHRib3gtZmFkZS1sZWF2ZS1hY3RpdmUge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbn1cXG4ubGlnaHRib3gtZmFkZS1lbnRlcixcXG4ubGlnaHRib3gtZmFkZS1sZWF2ZS10byB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcblwiLCBtYXA6IHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hbmRyZXcvRG9jdW1lbnRzL0dpdEh1Yi92dWUtaW1hZ2UtbGlnaHRib3gvc3JjL2xpZ2h0Ym94LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ01BO0lBQ0EsZ0JBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLDhCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0lBQ0Esd0JBQUE7SUFDQSxvQkFBQTtJQUNBLGFBQUE7SUFDQSw2QkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0NBQ0E7QUFFQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsY0FBQTtJQUNBLHdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0NBQ0E7QUFFQSx3QkFBQSxTQUFBO0NBQUE7QUFFQSx1QkFBQSxRQUFBO0NBQUE7QUFFQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx5QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHlDQUFBO0NBQ0E7QUFFQTtJQUNBLG9CQUFBO0lBQ0Esb0NBQUE7SUFDQSxrQkFBQTtJQUNBLDBCQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTs7SUFFQSwwQkFBQTtDQUNBO0FBRUE7SUFDQSxxQ0FBQTtJQUNBLGlDQUFBO0lBQ0EsNkJBQUE7SUFDQSxXQUFBO0NBQ0E7QUFFQTtJQUNBLHNDQUFBO0lBQ0Esa0NBQUE7SUFDQSw4QkFBQTtJQUNBLFdBQUE7Q0FDQTtBQUVBOztJQUVBLDBCQUFBO0NBQ0E7QUFFQTs7SUFFQSxXQUFBO0NBQ0FcIixcImZpbGVcIjpcImxpZ2h0Ym94LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJsaWdodGJveC1mYWRlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaWdodGJveFxcXCIgdi1pZj1cXFwidmlzaWJsZVxcXCIgQG1vdXNlZG93bi5zdG9wPVxcXCJoaWRlXFxcIiBAdG91Y2hkb3duLnN0b3A9XFxcImhpZGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlnaHRib3gtY2xvc2VcXFwiIEBtb3VzZWRvd24uc3RvcD1cXFwiaGlkZVxcXCIgQHRvdWNoZG93bi5zdG9wPVxcXCJoaWRlXFxcIj4mdGltZXM7PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaWdodGJveC1hcnJvdyBsaWdodGJveC1hcnJvdy1sZWZ0XFxcIiBAbW91c2Vkb3duLnN0b3AucHJldmVudD1cXFwicHJldlxcXCIgQHRvdWNoZG93bi5zdG9wLnByZXZlbnQ9XFxcInByZXZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XFxcImxpZ2h0Ym94LWZhZGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaWdodGJveC1hcnJvdy1sZWZ0LWljb25cXFwiIHYtc2hvdz1cXFwiaGFzX3ByZXYoKSAmJiBjb250cm9sc1Zpc2libGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHdpZHRoPVxcXCIyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMlxcXCIgZmlsbD1cXFwicmdiYSgyMCwgMjAsIDIwLCAwLjQpXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XFxcIk0xNS40MSAxNi4wOWwtNC41OC00LjU5IDQuNTgtNC41OUwxNCA1LjVsLTYgNiA2IDZ6XFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XFxcIk0wLS41aDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaWdodGJveC1hcnJvdyBsaWdodGJveC1hcnJvdy1yaWdodFxcXCIgQG1vdXNlZG93bi5zdG9wLnByZXZlbnQ9XFxcIm5leHRcXFwiIEB0b3VjaGRvd24uc3RvcC5wcmV2ZW50PVxcXCJuZXh0XFxcIiA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cXFwibGlnaHRib3gtZmFkZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpZ2h0Ym94LWFycm93LXJpZ2h0LWljb25cXFwiIHYtc2hvdz1cXFwiaGFzX25leHQoKSAmJiBjb250cm9sc1Zpc2libGVcXFwiID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB3aWR0aD1cXFwiMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTJcXFwiIGZpbGw9XFxcInJnYmEoMjAsIDIwLCAyMCwgMC40KVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVxcXCJNOC41OSAxNi4zNGw0LjU4LTQuNTktNC41OC00LjU5TDEwIDUuNzVsNiA2LTYgNnpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XFxcIk0wLS4yNWgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cXFwibGlnaHRib3gtZmFkZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlnaHRib3gtY2FwdGlvblxcXCIgdi1zaG93PVxcXCJjb250cm9sc1Zpc2libGUgJiYgZmlsdGVyZWRJbWFnZXNbaW5kZXhdLmFsdFxcXCIgQG1vdXNlZG93bi5zdG9wIEB0b3VjaGRvd24uc3RvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdW5zZWxlY3RhYmxlPVxcXCJvblxcXCI+e3sgZmlsdGVyZWRJbWFnZXNbaW5kZXhdLmFsdCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlnaHRib3gtbWFpblxcXCIgQG1vdXNlZG93bi5zdG9wPVxcXCJoaWRlXFxcIiBAdG91Y2hkb3duLnN0b3A9XFxcImhpZGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlnaHRib3gtaW1hZ2UtY29udGFpbmVyXFxcIiBAbW91c2Vkb3duLnN0b3AgQHRvdWNoZG93bi5zdG9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XFxcImxpZ2h0Ym94LXNsaWRlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaWdodGJveC1pbWFnZVxcXCIgOmtleT1cXFwiaW5kZXhcXFwiIDpzdHlsZT1cXFwieyAnYmFja2dyb3VuZEltYWdlJzondXJsKCcgKyBkaXJlY3RvcnkgKyBmaWx0ZXJlZEltYWdlc1tpbmRleF0ubmFtZSArICcpJ31cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3RyYW5zaXRpb24+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICAvLyBpbWFnZXMgPSBbeyBuYW1lOidpbWFnZTEuanBnJywgYWx0OidSZWR3b29kcycsIGZpbHRlcjonbmF0dXJlJyB9LCAuLi5dXFxuICAgICAgICAgICAgaW1hZ2VzOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgLy8gVXNlZCB0byBkaXNwbGF5IGEgc3Vic2V0IG9mIHBob3Rvcy4gSWYgdXNlZCwgaW1hZ2VzIGFycmF5IG11c3QgY29udGFpbiBhIHByb3BlcnR5XFxuICAgICAgICAgICAgLy8gdGl0bGVkICdmaWx0ZXInIHdoaWNoIGNvbnRhaW5zIHRoZSBkZXNpcmVkIGZpbHRlciBzdHJpbmdcXG4gICAgICAgICAgICBmaWx0ZXI6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnYWxsJ1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgLy8gVXNlZCBpZiBpbWFnZXMgYXJlIGxvY2F0ZWQgaW4gYSBzZXBhcmF0ZSBmb2xkZXIgKGUuZy4gJy9pbWFnZXMvJylcXG4gICAgICAgICAgICBkaXJlY3Rvcnk6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJ1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgLy8gVXNlZCB0byBzZXQgdGhlIGR1cmF0aW9uIGluIG1pbGlzZWNvbmRzIG9mIGtleS9tb3VzZSBpbmFjdGl2aXR5IGJlZm9yZSBjYXB0aW9uXFxuICAgICAgICAgICAgLy8gYW5kIGFycm93cyBkaXNhcHBlYXJcXG4gICAgICAgICAgICB0aW1lb3V0RHVyYXRpb246IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAzMDAwXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGEoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsICAgICAgICAvLyBMaWdodGJveCBub3QgdmlzaWJsZSBieSBkZWZhdWx0XFxuICAgICAgICAgICAgICAgIGNvbnRyb2xzVmlzaWJsZTogdHJ1ZSwgLy8gTGlnaHRib3ggY29udHJvbHMgKGFycm93cywgY2FwdGlvbiwgY2xvc2UgYnV0dG9uKVxcbiAgICAgICAgICAgICAgICBpbmRleDogMCwgICAgICAgICAgICAgIC8vIEluZGV4IGluZGljYXRlcyB3aGljaCBwaG90byB0byBkaXNwbGF5LiBEZWZhdWx0IHRvIDFzdCBwaG90b1xcbiAgICAgICAgICAgICAgICB0aW1lcjogbnVsbCAgICAgICAgICAvLyBUaW1lciB0byBzaG93L2hpZGUgbGlnaHRib3ggY29udHJvbHMgICAgICAgICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlFdmVudExpc3RlbmVyKTtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XFxuICAgICAgICB9LFxcbiAgICAgICAgZGVzdHJveWVkKCkge1xcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlFdmVudExpc3RlbmVyKTtcXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XFxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIHNob3coaW1hZ2VOYW1lKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNWaXNpYmxlID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xcblxcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgaW1hZ2UgcGFzc2VkIHRvIExpZ2h0Ym94XFxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmZpbHRlcmVkSW1hZ2VzLmxlbmd0aDsgaSsrKXtcXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZmlsdGVyZWRJbWFnZXNbaV0ubmFtZSA9PSBpbWFnZU5hbWUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gaTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XFxuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3RoYXQuY29udHJvbHNWaXNpYmxlID0gZmFsc2V9LCB0aGF0LnRpbWVvdXREdXJhdGlvbik7XFxuICAgICAgICAgICAgICAgIHRoaXMucHJlbG9hZE5leHRJbWFnZSgpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgaGlkZSgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBoYXNfbmV4dCgpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4ICsgMSA8IHRoaXMuZmlsdGVyZWRJbWFnZXMubGVuZ3RoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGhhc19wcmV2KCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggLSAxID49IDApO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgcHJldigpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzX3ByZXYoKSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCAtPSAxO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBuZXh0KCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNfbmV4dCgpKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDE7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWxvYWROZXh0SW1hZ2UoKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAga2V5RXZlbnRMaXN0ZW5lcihlKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNWaXNpYmxlID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3RoYXQuY29udHJvbHNWaXNpYmxlID0gZmFsc2V9LCB0aGF0LnRpbWVvdXREdXJhdGlvbik7XFxuXFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXYoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcgJzpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIC8vIFRoaXMgZXZlbnQgc2hvd3MgdGhlIGFycm93cyBhbmQgY2FwdGlvbiBvbiB0aGUgbGlnaHRib3ggd2hlbiB0aGUgbW91c2UgaXMgbW92ZWQgb3IgY2xpY2tlZC5cXG4gICAgICAgICAgICAvLyBBbHNvIHVzZWQgZm9yIHRvdWNoIGV2ZW50cyBvbiB0b3VjaHNjcmVlbiBkZXZpY2VzLiBUaGUgZWxlbWVudHMgYXJlIHNldCB0byBkaXNhcHBlYXJcXG4gICAgICAgICAgICAvLyBhZnRlciBhIGdpdmVuIGR1cmF0aW9uIHZpYSBhIHRpbWVyLlxcbiAgICAgICAgICAgIG1vdXNlRXZlbnRMaXN0ZW5lcihlKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNWaXNpYmxlID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3RoYXQuY29udHJvbHNWaXNpYmxlID0gZmFsc2V9LCB0aGF0LnRpbWVvdXREdXJhdGlvbik7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHByZWxvYWROZXh0SW1hZ2UgKCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNfbmV4dCgpKXtcXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9pbWcgPSBuZXcgSW1hZ2UoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBfaW1nLnNyYyA9IHRoaXMuZGlyZWN0b3J5ICsgdGhpcy5maWx0ZXJlZEltYWdlc1t0aGlzLmluZGV4ICsgMV0ubmFtZTtcXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAgICAgZmlsdGVyZWRJbWFnZXM6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5maWx0ZXIgPT09ICdhbGwnIHx8ICF0aGF0LmZpbHRlci5sZW5ndGgpe1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuaW1hZ2VzO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuaW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmZpbHRlciA9PT0gdGhhdC5maWx0ZXI7XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgICAubGlnaHRib3gge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHotaW5kZXg6IDIwMDtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LWNsb3NlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHotaW5kZXg6IDIxMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgd2lkdGg6IDRyZW07XFxuICAgICAgICBoZWlnaHQ6IDRyZW07XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LW1haW4ge1xcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtYXJyb3cge1xcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtYXJyb3ctcmlnaHQgeyByaWdodDogMDsgfVxcbiAgICBcXG4gICAgLmxpZ2h0Ym94LWFycm93LWxlZnQgeyBsZWZ0OiAwO31cXG5cXG4gICAgLmxpZ2h0Ym94LWltYWdlLWNvbnRhaW5lciB7XFxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgd2lkdGg6IDIwJTtcXG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtaW1hZ2Uge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtY2FwdGlvbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDE1cHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2IoMjYsIDI2LCAyNik7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LWNhcHRpb24gc3BhbiB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XFxuICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LXNsaWRlLWVudGVyLWFjdGl2ZSxcXG4gICAgLmxpZ2h0Ym94LXNsaWRlLWxlYXZlLWFjdGl2ZSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1zbGlkZS1lbnRlciB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1zbGlkZS1sZWF2ZS10byB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1mYWRlLWVudGVyLWFjdGl2ZSxcXG4gICAgLmxpZ2h0Ym94LWZhZGUtbGVhdmUtYWN0aXZlIHtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LWZhZGUtZW50ZXIsXFxuICAgIC5saWdodGJveC1mYWRlLWxlYXZlLXRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgXFxuPC9zdHlsZT5cIl19LCBtZWRpYTogdW5kZWZpbmVkIH0pO1xuXG4gIH07XG4gIC8qIHNjb3BlZCAqL1xuICB2YXIgX192dWVfc2NvcGVfaWRfXyA9IHVuZGVmaW5lZDtcbiAgLyogbW9kdWxlIGlkZW50aWZpZXIgKi9cbiAgdmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSB1bmRlZmluZWQ7XG4gIC8qIGZ1bmN0aW9uYWwgdGVtcGxhdGUgKi9cbiAgdmFyIF9fdnVlX2lzX2Z1bmN0aW9uYWxfdGVtcGxhdGVfXyA9IGZhbHNlO1xuICAvKiBjb21wb25lbnQgbm9ybWFsaXplciAqL1xuICBmdW5jdGlvbiBfX3Z1ZV9ub3JtYWxpemVfXyhcbiAgICB0ZW1wbGF0ZSwgc3R5bGUsIHNjcmlwdCQkMSxcbiAgICBzY29wZSwgZnVuY3Rpb25hbCwgbW9kdWxlSWRlbnRpZmllcixcbiAgICBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1JcbiAgKSB7XG4gICAgdmFyIGNvbXBvbmVudCA9ICh0eXBlb2Ygc2NyaXB0JCQxID09PSAnZnVuY3Rpb24nID8gc2NyaXB0JCQxLm9wdGlvbnMgOiBzY3JpcHQkJDEpIHx8IHt9O1xuXG4gICAgLy8gRm9yIHNlY3VyaXR5IGNvbmNlcm5zLCB3ZSB1c2Ugb25seSBiYXNlIG5hbWUgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgIGNvbXBvbmVudC5fX2ZpbGUgPSBcIi9Vc2Vycy9hbmRyZXcvRG9jdW1lbnRzL0dpdEh1Yi92dWUtaW1hZ2UtbGlnaHRib3gvc3JjL2xpZ2h0Ym94LnZ1ZVwiO1xuXG4gICAgaWYgKCFjb21wb25lbnQucmVuZGVyKSB7XG4gICAgICBjb21wb25lbnQucmVuZGVyID0gdGVtcGxhdGUucmVuZGVyO1xuICAgICAgY29tcG9uZW50LnN0YXRpY1JlbmRlckZucyA9IHRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgIGNvbXBvbmVudC5fY29tcGlsZWQgPSB0cnVlO1xuXG4gICAgICBpZiAoZnVuY3Rpb25hbCkgeyBjb21wb25lbnQuZnVuY3Rpb25hbCA9IHRydWU7IH1cbiAgICB9XG5cbiAgICBjb21wb25lbnQuX3Njb3BlSWQgPSBzY29wZTtcblxuICAgIHtcbiAgICAgIHZhciBob29rO1xuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIGhvb2sgPSBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgICAgc3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3Rvcihjb250ZXh0KSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChob29rICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5mdW5jdGlvbmFsKSB7XG4gICAgICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gY29tcG9uZW50LnJlbmRlcjtcbiAgICAgICAgICBjb21wb25lbnQucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGhvb2suY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgICAgICB2YXIgZXhpc3RpbmcgPSBjb21wb25lbnQuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgIGNvbXBvbmVudC5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50XG4gIH1cbiAgLyogc3R5bGUgaW5qZWN0ICovXG4gIGZ1bmN0aW9uIF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9fKCkge1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIHZhciBzdHlsZXMgPSBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXy5zdHlsZXMgfHwgKF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9fLnN0eWxlcyA9IHt9KTtcbiAgICB2YXIgaXNPbGRJRSA9XG4gICAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgL21zaWUgWzYtOV1cXFxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFkZFN0eWxlKGlkLCBjc3MpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJyArIGlkICsgJ1wiXScpKSB7IHJldHVybiB9IC8vIFNTUiBzdHlsZXMgYXJlIHByZXNlbnQuXG5cbiAgICAgIHZhciBncm91cCA9IGlzT2xkSUUgPyBjc3MubWVkaWEgfHwgJ2RlZmF1bHQnIDogaWQ7XG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZXNbZ3JvdXBdIHx8IChzdHlsZXNbZ3JvdXBdID0geyBpZHM6IFtdLCBwYXJ0czogW10sIGVsZW1lbnQ6IHVuZGVmaW5lZCB9KTtcblxuICAgICAgaWYgKCFzdHlsZS5pZHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgIHZhciBjb2RlID0gY3NzLnNvdXJjZTtcbiAgICAgICAgdmFyIGluZGV4ID0gc3R5bGUuaWRzLmxlbmd0aDtcblxuICAgICAgICBzdHlsZS5pZHMucHVzaChpZCk7XG5cbiAgICAgICAgaWYgKGlzT2xkSUUpIHtcbiAgICAgICAgICBzdHlsZS5lbGVtZW50ID0gc3R5bGUuZWxlbWVudCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLWdyb3VwPScgKyBncm91cCArICddJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0eWxlLmVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgZWwgPSBzdHlsZS5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBlbC50eXBlID0gJ3RleHQvY3NzJztcblxuICAgICAgICAgIGlmIChjc3MubWVkaWEpIHsgZWwuc2V0QXR0cmlidXRlKCdtZWRpYScsIGNzcy5tZWRpYSk7IH1cbiAgICAgICAgICBpZiAoaXNPbGRJRSkge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwJywgZ3JvdXApO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLW5leHQtaW5kZXgnLCAnMCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzT2xkSUUpIHtcbiAgICAgICAgICBpbmRleCA9IHBhcnNlSW50KHN0eWxlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW5leHQtaW5kZXgnKSk7XG4gICAgICAgICAgc3R5bGUuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dC1pbmRleCcsIGluZGV4ICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3R5bGUuZWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgICAgICAgc3R5bGUucGFydHMucHVzaChjb2RlKTtcbiAgICAgICAgICBzdHlsZS5lbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHN0eWxlLnBhcnRzXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAuam9pbignXFxuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29kZSk7XG4gICAgICAgICAgdmFyIG5vZGVzID0gc3R5bGUuZWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICAgIGlmIChub2Rlc1tpbmRleF0pIHsgc3R5bGUuZWxlbWVudC5yZW1vdmVDaGlsZChub2Rlc1tpbmRleF0pOyB9XG4gICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCkgeyBzdHlsZS5lbGVtZW50Lmluc2VydEJlZm9yZSh0ZXh0Tm9kZSwgbm9kZXNbaW5kZXhdKTsgfVxuICAgICAgICAgIGVsc2UgeyBzdHlsZS5lbGVtZW50LmFwcGVuZENoaWxkKHRleHROb2RlKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qIHN0eWxlIGluamVjdCBTU1IgKi9cbiAgXG5cbiAgXG4gIHZhciBMaWdodGJveCA9IF9fdnVlX25vcm1hbGl6ZV9fKFxuICAgIHsgcmVuZGVyOiBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zOiBfX3Z1ZV9zdGF0aWNSZW5kZXJGbnNfXyB9LFxuICAgIF9fdnVlX2luamVjdF9zdHlsZXNfXyxcbiAgICBfX3Z1ZV9zY3JpcHRfXyxcbiAgICBfX3Z1ZV9zY29wZV9pZF9fLFxuICAgIF9fdnVlX2lzX2Z1bmN0aW9uYWxfdGVtcGxhdGVfXyxcbiAgICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fLFxuICAgIF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9fLFxuICAgIHVuZGVmaW5lZFxuICApO1xuXG4vLyBJbXBvcnQgdnVlIGNvbXBvbmVudFxuXG4vLyBEZWNsYXJlIGluc3RhbGwgZnVuY3Rpb24gZXhlY3V0ZWQgYnkgVnVlLnVzZSgpXG5mdW5jdGlvbiBpbnN0YWxsKFZ1ZSkge1xuXHRpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHsgcmV0dXJuOyB9XG5cdGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZTtcblx0VnVlLmNvbXBvbmVudCgnTGlnaHRib3gnLCBMaWdodGJveCk7XG59XG5cbi8vIENyZWF0ZSBtb2R1bGUgZGVmaW5pdGlvbiBmb3IgVnVlLnVzZSgpXG52YXIgcGx1Z2luID0ge1xuXHRpbnN0YWxsOiBpbnN0YWxsLFxufTtcblxuLy8gQXV0by1pbnN0YWxsIHdoZW4gdnVlIGlzIGZvdW5kIChlZy4gaW4gYnJvd3NlciB2aWEgPHNjcmlwdD4gdGFnKVxudmFyIEdsb2JhbFZ1ZSA9IG51bGw7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0R2xvYmFsVnVlID0gd2luZG93LlZ1ZTtcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0R2xvYmFsVnVlID0gZ2xvYmFsLlZ1ZTtcbn1cbmlmIChHbG9iYWxWdWUpIHtcblx0R2xvYmFsVnVlLnVzZShwbHVnaW4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaWdodGJveDtcbmV4cG9ydCB7IGluc3RhbGwgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
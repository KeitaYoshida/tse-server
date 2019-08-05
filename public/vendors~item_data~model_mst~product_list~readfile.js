(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~item_data~model_mst~product_list~readfile"],{

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
 * v1.0.5
 * by Donald <donaldcwl@gmail.com>
 * https://github.com/Donaldcwl/browser-image-compression
 */

function _slicedToArray(e,n){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,n){var r=[],t=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(e){a=!0,i=e}finally{try{t||null==s.return||s.return()}finally{if(a)throw i}}return r}(e,n)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var e="undefined"!=typeof window&&window.cordova&&window.cordova.require("cordova/modulemapper"),CustomFile=e&&e.getOriginalSymbol(window,"File")||File,CustomFileReader=e&&e.getOriginalSymbol(window,"FileReader")||FileReader;function getDataUrlFromFile(e){return new Promise(function(n,r){var t=new CustomFileReader;t.onload=function(){return n(t.result)},t.onerror=function(e){return r(e)},t.readAsDataURL(e)})}function getFilefromDataUrl(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();return new Promise(function(t){for(var a=e.split(","),i=a[0].match(/:(.*?);/)[1],o=atob(a[1]),s=o.length,c=new Uint8Array(s);s--;)c[s]=o.charCodeAt(s);var u=new Blob([c],{type:i});u.name=n,u.lastModified=r,t(u)})}function loadImage(e){return new Promise(function(n,r){var t=new Image;t.onload=function(){return n(t)},t.onerror=function(e){return r(e)},t.src=e})}function drawImageInCanvas(e){var n=_slicedToArray(getNewCanvasAndCtx(e.width,e.height),2),r=n[0];return n[1].drawImage(e,0,0,r.width,r.height),r}function drawFileInCanvas(e){return new Promise(function(n,r){var t,a,i=function $Try_1_Post(){try{return a=drawImageInCanvas(t),n([t,a])}catch(e){return r(e)}},o=function $Try_1_Catch(n){try{return getDataUrlFromFile(e).then(function(e){try{return loadImage(e).then(function(e){try{return t=e,i()}catch(e){return r(e)}},r)}catch(e){return r(e)}},r)}catch(e){return r(e)}};try{return createImageBitmap(e).then(function(e){try{return t=e,i()}catch(e){return o()}},o)}catch(e){o()}})}function canvasToFile(e,n,r,t){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return new Promise(function(i,o){var s;return"function"==typeof OffscreenCanvas&&e instanceof OffscreenCanvas?e.convertToBlob({type:n,quality:a}).then(function(e){try{return(s=e).name=r,s.lastModified=t,$If_4.call(this)}catch(e){return o(e)}}.bind(this),o):getFilefromDataUrl(e.toDataURL(n,a),r,t).then(function(e){try{return s=e,$If_4.call(this)}catch(e){return o(e)}}.bind(this),o);function $If_4(){return i(s)}})}function getExifOrientation(e){return new Promise(function(n,r){var t=new CustomFileReader;t.onload=function(e){var r=new DataView(e.target.result);if(65496!=r.getUint16(0,!1))return n(-2);for(var t=r.byteLength,a=2;a<t;){if(r.getUint16(a+2,!1)<=8)return n(-1);var i=r.getUint16(a,!1);if(a+=2,65505==i){if(1165519206!=r.getUint32(a+=2,!1))return n(-1);var o=18761==r.getUint16(a+=6,!1);a+=r.getUint32(a+4,o);var s=r.getUint16(a,o);a+=2;for(var c=0;c<s;c++)if(274==r.getUint16(a+12*c,o))return n(r.getUint16(a+12*c+8,o))}else{if(65280!=(65280&i))break;a+=r.getUint16(a,!1)}}return n(-1)},t.onerror=function(e){return r(e)},t.readAsArrayBuffer(e)})}function handleMaxWidthOrHeight(e,n){var r,t=e.width,a=e.height,i=n.maxWidthOrHeight,o=e;if(Number.isInteger(i)&&(t>i||a>i)){var s=_slicedToArray(getNewCanvasAndCtx(t,a),2);o=s[0],r=s[1],t>a?(o.width=i,o.height=a/t*i):(o.width=t/a*i,o.height=i),r.drawImage(e,0,0,o.width,o.height)}return o}function followExifOrientation(e,n){var r=e.width,t=e.height,a=_slicedToArray(getNewCanvasAndCtx(r,t),2),i=a[0],o=a[1];switch(4<n&&n<9?(i.width=t,i.height=r):(i.width=r,i.height=t),n){case 2:o.transform(-1,0,0,1,r,0);break;case 3:o.transform(-1,0,0,-1,r,t);break;case 4:o.transform(1,0,0,-1,0,t);break;case 5:o.transform(0,1,1,0,0,0);break;case 6:o.transform(0,1,-1,0,t,0);break;case 7:o.transform(0,-1,-1,0,t,r);break;case 8:o.transform(0,-1,1,0,0,r)}return o.drawImage(e,0,0,r,t),i}function getNewCanvasAndCtx(e,n){var r,t;try{t=(r=new OffscreenCanvas(e,n)).getContext("2d")}catch(e){t=(r=document.createElement("canvas")).getContext("2d")}return r.width=e,r.height=n,[r,t]}function compress(e,n){return new Promise(function(r,t){var a,i,o,s,c,u,l;return a=n.maxIteration||10,i=1024*n.maxSizeMB*1024,drawFileInCanvas(e).then(function(m){try{var f=_slicedToArray(m,2);return o=f[0],s=handleMaxWidthOrHeight(s=f[1],n),new Promise(function(r,t){var a;if(!(a=n.exifOrientation))return getExifOrientation(e).then(function(e){try{return a=e,$If_2.call(this)}catch(e){return t(e)}}.bind(this),t);function $If_2(){return r(a)}return $If_2.call(this)}).then(function(m){try{return n.exifOrientation=m,s=followExifOrientation(s,n.exifOrientation),c=1,canvasToFile(s,e.type,e.name,e.lastModified,c).then(function(n){try{var m,f=function $Loop_3(){if(a--&&l.size>i){var n,r,u,m=_slicedToArray(getNewCanvasAndCtx(n=.9*s.width,r=.9*s.height),2);return u=m[0],m[1].drawImage(o,0,0,n,r),"image/jpeg"===e.type&&(c*=.9),canvasToFile(u,e.type,e.name,e.lastModified,c).then(function(e){try{return l=e,s=u,$Loop_3}catch(e){return t(e)}},t)}return[1]},g=function $Loop_3_exit(){return r(l)};return(u=n).size<=i?r(u):(l=u,(m=function(e){for(;e;){if(e.then)return void e.then(m,t);try{if(e.pop){if(e.length)return e.pop()?g.call(this):e;e=f}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(f))}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)})}var n,r=0;var t=function createWorker(e){return new Worker(URL.createObjectURL(new Blob(["(".concat(e,")()")])))}(function(){var e=!1;self.addEventListener("message",function(n){return new Promise(function(r,t){var a,i,o,s,c=n.data;a=c.file,i=c.id,o=c.imageCompressionLibUrl,s=c.options;var u=function $Try_1_Post(){try{return r()}catch(e){return t(e)}},l=function $Try_1_Catch(e){try{return self.postMessage({error:e.message,id:i}),u()}catch(e){return t(e)}};try{var m;return e||(importScripts(o),e=!0),imageCompression(a,s).then(function(e){try{return m=e,self.postMessage({file:m,id:i}),u()}catch(e){return l(e)}},l)}catch(e){l(e)}})})});function compressOnWebWorker(e,a){return new Promise(function(i,o){return new Promise(function(s,c){n||(n=function createSourceObject(e){return URL.createObjectURL(new Blob([e],{type:"application/javascript"}))}("\n    function imageCompression (){return (".concat(imageCompression,").apply(null, arguments)}\n\n    imageCompression.getDataUrlFromFile = ").concat(imageCompression.getDataUrlFromFile,"\n    imageCompression.getFilefromDataUrl = ").concat(imageCompression.getFilefromDataUrl,"\n    imageCompression.loadImage = ").concat(imageCompression.loadImage,"\n    imageCompression.drawImageInCanvas = ").concat(imageCompression.drawImageInCanvas,"\n    imageCompression.drawFileInCanvas = ").concat(imageCompression.drawFileInCanvas,"\n    imageCompression.canvasToFile = ").concat(imageCompression.canvasToFile,"\n    imageCompression.getExifOrientation = ").concat(imageCompression.getExifOrientation,"\n    imageCompression.handleMaxWidthOrHeight = ").concat(imageCompression.handleMaxWidthOrHeight,"\n    imageCompression.followExifOrientation = ").concat(imageCompression.followExifOrientation,"\n\n    getDataUrlFromFile = imageCompression.getDataUrlFromFile\n    getFilefromDataUrl = imageCompression.getFilefromDataUrl\n    loadImage = imageCompression.loadImage\n    drawImageInCanvas = imageCompression.drawImageInCanvas\n    drawFileInCanvas = imageCompression.drawFileInCanvas\n    canvasToFile = imageCompression.canvasToFile\n    getExifOrientation = imageCompression.getExifOrientation\n    handleMaxWidthOrHeight = imageCompression.handleMaxWidthOrHeight\n    followExifOrientation = imageCompression.followExifOrientation\n\n    getNewCanvasAndCtx = ").concat(getNewCanvasAndCtx,"\n    \n    CustomFileReader = FileReader\n    \n    CustomFile = File\n    \n    function _slicedToArray(arr, n) { return arr }\n\n    function compress (){return (").concat(compress,").apply(null, arguments)}\n    ")));var u=r++;return t.addEventListener("message",function handler(e){e.data.id===u&&(t.removeEventListener("message",handler),e.data.error&&o(e.data.error),i(e.data.file))}),t.postMessage({file:e,id:u,imageCompressionLibUrl:n,options:a}),s()})})}function imageCompression(e,n){return new Promise(function(r,t){var a,i;if(n.maxSizeMB=n.maxSizeMB||Number.POSITIVE_INFINITY,n.useWebWorker="boolean"!=typeof n.useWebWorker||n.useWebWorker,!(e instanceof Blob||e instanceof CustomFile))return t(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return t(new Error("The file given is not an image"));if(i="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,!n.useWebWorker||"function"!=typeof Worker||i)return compress(e,n).then(function(e){try{return a=e,$If_3.call(this)}catch(e){return t(e)}}.bind(this),t);var o=function(){try{return $If_3.call(this)}catch(e){return t(e)}}.bind(this),s=function $Try_1_Catch(r){try{return console.warn("Run compression in web worker failed:",r,", fall back to main thread"),compress(e,n).then(function(e){try{return a=e,o()}catch(e){return t(e)}},t)}catch(e){return t(e)}};try{return compressOnWebWorker(e,n).then(function(e){try{return a=e,o()}catch(e){return s(e)}},s)}catch(e){s(e)}function $If_3(){try{a.name=e.name,a.lastModified=e.lastModified}catch(e){}return r(a)}})}imageCompression.getDataUrlFromFile=getDataUrlFromFile,imageCompression.getFilefromDataUrl=getFilefromDataUrl,imageCompression.loadImage=loadImage,imageCompression.drawImageInCanvas=drawImageInCanvas,imageCompression.drawFileInCanvas=drawFileInCanvas,imageCompression.canvasToFile=canvasToFile,imageCompression.getExifOrientation=getExifOrientation,imageCompression.handleMaxWidthOrHeight=handleMaxWidthOrHeight,imageCompression.followExifOrientation=followExifOrientation;/* harmony default export */ __webpack_exports__["default"] = (imageCompression);
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

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
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

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

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

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFsYW5jZWQtbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JyYWNlLWV4cGFuc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1pbWFnZS1jb21wcmVzc2lvbi9kaXN0L2Jyb3dzZXItaW1hZ2UtY29tcHJlc3Npb24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25jYXQtbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taW5pbWF0Y2gvbWluaW1hdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1teS1waG90b3MvZGlzdC9saWdodGJveC5lc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFEQSxnQkFBZ0IsbUJBQU8sQ0FBQyxzREFBWTtBQUNwQyxlQUFlLG1CQUFPLENBQUMsOERBQWdCOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFD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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLElBQUk7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFLEVBQUUsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7O0FBRUEsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyw2Q0FBNkM7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCOzs7Ozs7Ozs7Ozs7QUMxNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixJQUFJO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyw4QkFBOEI7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL05BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixxREFBcUQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGdDQUFnQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsOEJBQThCO0FBQzlFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsOEJBQThCOztBQUVsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsOEJBQThCO0FBQ2xGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyx3QkFBd0IsRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0Esc0NBQXNDLFNBQVMsd0JBQXdCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLHNDQUFzQyxTQUFTLHdCQUF3QixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTLHdCQUF3QixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGtDQUFrQyxTQUFTLHFCQUFxQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLHlDQUF5QyxFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsaUNBQWlDLHVCQUF1QixzQkFBc0IsYUFBYSxjQUFjLG9DQUFvQyxrQkFBa0IsbUJBQW1CLDJCQUEyQiwyQkFBMkIsNEJBQTRCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixtQ0FBbUMsR0FBRyxtQkFBbUIsc0JBQXNCLG1CQUFtQixlQUFlLGFBQWEsb0JBQW9CLHdCQUF3QixzQkFBc0Isa0JBQWtCLG1CQUFtQixtQkFBbUIsR0FBRyxrQkFBa0IsMkJBQTJCLDJCQUEyQiw0QkFBNEIsb0JBQW9CLGtCQUFrQixtQkFBbUIsR0FBRyxtQkFBbUIsc0JBQXNCLHNCQUFzQiwyQkFBMkIsMkJBQTJCLDRCQUE0QixvQkFBb0IsOEJBQThCLDBCQUEwQix5QkFBeUIsc0JBQXNCLG1CQUFtQixrQkFBa0IsbUJBQW1CLEdBQUcseUJBQXlCLFVBQVUsR0FBRyx3QkFBd0IsU0FBUyxHQUFHLDZCQUE2QiwwQkFBMEIsaUJBQWlCLHNCQUFzQixrQkFBa0IsY0FBYyxHQUFHLG1CQUFtQixrQkFBa0IsbUJBQW1CLCtCQUErQixtQ0FBbUMsbUNBQW1DLEdBQUcscUJBQXFCLHlCQUF5QixtQkFBbUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsK0NBQStDLEdBQUcsMEJBQTBCLDBCQUEwQiwwQ0FBMEMsd0JBQXdCLGdDQUFnQyw2QkFBNkIsNEJBQTRCLHdCQUF3QixHQUFHLCtEQUErRCxnQ0FBZ0MsR0FBRyx5QkFBeUIsMkNBQTJDLHVDQUF1QyxtQ0FBbUMsaUJBQWlCLEdBQUcsNEJBQTRCLDRDQUE0Qyx3Q0FBd0Msb0NBQW9DLGlCQUFpQixHQUFHLDZEQUE2RCxnQ0FBZ0MsR0FBRyxrREFBa0QsaUJBQWlCLEdBQUcsYUFBYSxxSEFBcUgsTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFVBQVUsdVVBQXVVLHEvREFBcS9ELDZCQUE2Qiw0YUFBNGEseUVBQXlFLHdPQUF3TyxrQkFBa0IsNEJBQTRCLHFEQUFxRCw2QkFBNkIsNkVBQTZFLG1NQUFtTSw4RUFBOEUsNkdBQTZHLDJFQUEyRSxxS0FBcUssNkVBQTZFLFdBQVcsbUJBQW1CLHNCQUFzQix3WEFBd1gsV0FBVyxzQkFBc0Isd0VBQXdFLDJFQUEyRSwyRUFBMkUseUVBQXlFLFdBQVcsd0JBQXdCLDJFQUEyRSw4RUFBOEUsOEVBQThFLDRFQUE0RSxXQUFXLHFCQUFxQiwrQkFBK0Isc0NBQXNDLDhDQUE4QyxrQ0FBa0MscUdBQXFHLGdDQUFnQyxNQUFNLG9FQUFvRSx5Q0FBeUMsZ0NBQWdDLHVCQUF1QixtQkFBbUIsMkNBQTJDLHNEQUFzRCw2QkFBNkIsd0JBQXdCLDBDQUEwQyxlQUFlLHVCQUF1Qix1Q0FBdUMsaUNBQWlDLDJDQUEyQyxlQUFlLDJCQUEyQix1RUFBdUUsZUFBZSwyQkFBMkIsK0NBQStDLGVBQWUsdUJBQXVCLHdDQUF3QyxzQ0FBc0MsbUJBQW1CLGVBQWUsdUJBQXVCLHdDQUF3QyxzQ0FBc0MsOENBQThDLG1CQUFtQixlQUFlLG9DQUFvQyxxQ0FBcUMsc0NBQXNDLGtEQUFrRCwrQ0FBK0MsMERBQTBELDZCQUE2Qix3QkFBd0Isd0NBQXdDLHNGQUFzRixvQ0FBb0MscUZBQXFGLG9DQUFvQyx3S0FBd0ssb0NBQW9DLGtGQUFrRixvQ0FBb0MsdUJBQXVCLG1CQUFtQixlQUFlLDJTQUEyUyxxQ0FBcUMsc0NBQXNDLGtEQUFrRCwrQ0FBK0MsMERBQTBELDZCQUE2Qix3QkFBd0IsbUJBQW1CLGVBQWUsb0NBQW9DLHVDQUF1QywyQkFBMkIsaURBQWlELCtGQUErRix1QkFBdUIsWUFBWSxFQUFFLG1CQUFtQixlQUFlLFdBQVcsc0JBQXNCLDJDQUEyQyxrQ0FBa0Msb0VBQW9FLHlDQUF5QyxtQkFBbUIsd0JBQXdCLGlFQUFpRSw2REFBNkQsdUJBQXVCLG9CQUFvQixlQUFlLFdBQVcsT0FBTyx1Q0FBdUMsMEJBQTBCLGlCQUFpQixrQkFBa0Isd0NBQXdDLHNCQUFzQix1QkFBdUIsK0JBQStCLCtCQUErQixnQ0FBZ0Msd0JBQXdCLGtDQUFrQyw4QkFBOEIsdUJBQXVCLHVDQUF1QyxPQUFPLHlCQUF5QiwwQkFBMEIsdUJBQXVCLG1CQUFtQixpQkFBaUIsd0JBQXdCLDRCQUE0QiwwQkFBMEIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyx3QkFBd0IsK0JBQStCLCtCQUErQixnQ0FBZ0Msd0JBQXdCLHNCQUFzQix1QkFBdUIsT0FBTyx5QkFBeUIsMEJBQTBCLDBCQUEwQiwrQkFBK0IsK0JBQStCLGdDQUFnQyx3QkFBd0Isa0NBQWtDLDhCQUE4Qiw2QkFBNkIsMEJBQTBCLHVCQUF1QixzQkFBc0IsdUJBQXVCLE9BQU8sK0JBQStCLFVBQVUsRUFBRSxrQ0FBa0MsVUFBVSxtQ0FBbUMsOEJBQThCLHFCQUFxQiwwQkFBMEIsc0JBQXNCLGtCQUFrQixPQUFPLHlCQUF5QixzQkFBc0IsdUJBQXVCLG1DQUFtQyx1Q0FBdUMsdUNBQXVDLE9BQU8sMkJBQTJCLDZCQUE2Qix1QkFBdUIsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsbURBQW1ELE9BQU8sZ0NBQWdDLDhCQUE4Qiw4Q0FBOEMsNEJBQTRCLG9DQUFvQyxpQ0FBaUMsZ0NBQWdDLDRCQUE0QixPQUFPLHlFQUF5RSxvQ0FBb0MsT0FBTywrQkFBK0IsK0NBQStDLDJDQUEyQyx1Q0FBdUMscUJBQXFCLE9BQU8sa0NBQWtDLGdEQUFnRCw0Q0FBNEMsd0NBQXdDLHFCQUFxQixPQUFPLHVFQUF1RSxvQ0FBb0MsT0FBTyw0REFBNEQscUJBQXFCLE9BQU8sbUJBQW1CLG9CQUFvQjs7QUFFN2llO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsNkJBQTZCO0FBQ3BEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTJFLFNBQVM7O0FBRXBGO0FBQ0EscURBQXFELHlDQUF5Qzs7QUFFOUY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLHFDQUFxQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDZCQUE2Qix5Q0FBeUM7QUFDdEUsNkJBQTZCLG9EQUFvRDtBQUNqRixnQkFBZ0IscUNBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLEtBQUssbUVBQW1FO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHVFQUFRLEVBQUM7QUFDTCIsImZpbGUiOiJ2ZW5kb3Jzfml0ZW1fZGF0YX5tb2RlbF9tc3R+cHJvZHVjdF9saXN0fnJlYWRmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBiYWxhbmNlZDtcbmZ1bmN0aW9uIGJhbGFuY2VkKGEsIGIsIHN0cikge1xuICBpZiAoYSBpbnN0YW5jZW9mIFJlZ0V4cCkgYSA9IG1heWJlTWF0Y2goYSwgc3RyKTtcbiAgaWYgKGIgaW5zdGFuY2VvZiBSZWdFeHApIGIgPSBtYXliZU1hdGNoKGIsIHN0cik7XG5cbiAgdmFyIHIgPSByYW5nZShhLCBiLCBzdHIpO1xuXG4gIHJldHVybiByICYmIHtcbiAgICBzdGFydDogclswXSxcbiAgICBlbmQ6IHJbMV0sXG4gICAgcHJlOiBzdHIuc2xpY2UoMCwgclswXSksXG4gICAgYm9keTogc3RyLnNsaWNlKHJbMF0gKyBhLmxlbmd0aCwgclsxXSksXG4gICAgcG9zdDogc3RyLnNsaWNlKHJbMV0gKyBiLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWF5YmVNYXRjaChyZWcsIHN0cikge1xuICB2YXIgbSA9IHN0ci5tYXRjaChyZWcpO1xuICByZXR1cm4gbSA/IG1bMF0gOiBudWxsO1xufVxuXG5iYWxhbmNlZC5yYW5nZSA9IHJhbmdlO1xuZnVuY3Rpb24gcmFuZ2UoYSwgYiwgc3RyKSB7XG4gIHZhciBiZWdzLCBiZWcsIGxlZnQsIHJpZ2h0LCByZXN1bHQ7XG4gIHZhciBhaSA9IHN0ci5pbmRleE9mKGEpO1xuICB2YXIgYmkgPSBzdHIuaW5kZXhPZihiLCBhaSArIDEpO1xuICB2YXIgaSA9IGFpO1xuXG4gIGlmIChhaSA+PSAwICYmIGJpID4gMCkge1xuICAgIGJlZ3MgPSBbXTtcbiAgICBsZWZ0ID0gc3RyLmxlbmd0aDtcblxuICAgIHdoaWxlIChpID49IDAgJiYgIXJlc3VsdCkge1xuICAgICAgaWYgKGkgPT0gYWkpIHtcbiAgICAgICAgYmVncy5wdXNoKGkpO1xuICAgICAgICBhaSA9IHN0ci5pbmRleE9mKGEsIGkgKyAxKTtcbiAgICAgIH0gZWxzZSBpZiAoYmVncy5sZW5ndGggPT0gMSkge1xuICAgICAgICByZXN1bHQgPSBbIGJlZ3MucG9wKCksIGJpIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiZWcgPSBiZWdzLnBvcCgpO1xuICAgICAgICBpZiAoYmVnIDwgbGVmdCkge1xuICAgICAgICAgIGxlZnQgPSBiZWc7XG4gICAgICAgICAgcmlnaHQgPSBiaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJpID0gc3RyLmluZGV4T2YoYiwgaSArIDEpO1xuICAgICAgfVxuXG4gICAgICBpID0gYWkgPCBiaSAmJiBhaSA+PSAwID8gYWkgOiBiaTtcbiAgICB9XG5cbiAgICBpZiAoYmVncy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IFsgbGVmdCwgcmlnaHQgXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwidmFyIGNvbmNhdE1hcCA9IHJlcXVpcmUoJ2NvbmNhdC1tYXAnKTtcbnZhciBiYWxhbmNlZCA9IHJlcXVpcmUoJ2JhbGFuY2VkLW1hdGNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwYW5kVG9wO1xuXG52YXIgZXNjU2xhc2ggPSAnXFwwU0xBU0gnK01hdGgucmFuZG9tKCkrJ1xcMCc7XG52YXIgZXNjT3BlbiA9ICdcXDBPUEVOJytNYXRoLnJhbmRvbSgpKydcXDAnO1xudmFyIGVzY0Nsb3NlID0gJ1xcMENMT1NFJytNYXRoLnJhbmRvbSgpKydcXDAnO1xudmFyIGVzY0NvbW1hID0gJ1xcMENPTU1BJytNYXRoLnJhbmRvbSgpKydcXDAnO1xudmFyIGVzY1BlcmlvZCA9ICdcXDBQRVJJT0QnK01hdGgucmFuZG9tKCkrJ1xcMCc7XG5cbmZ1bmN0aW9uIG51bWVyaWMoc3RyKSB7XG4gIHJldHVybiBwYXJzZUludChzdHIsIDEwKSA9PSBzdHJcbiAgICA/IHBhcnNlSW50KHN0ciwgMTApXG4gICAgOiBzdHIuY2hhckNvZGVBdCgwKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlQnJhY2VzKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KCdcXFxcXFxcXCcpLmpvaW4oZXNjU2xhc2gpXG4gICAgICAgICAgICAuc3BsaXQoJ1xcXFx7Jykuam9pbihlc2NPcGVuKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxcfScpLmpvaW4oZXNjQ2xvc2UpXG4gICAgICAgICAgICAuc3BsaXQoJ1xcXFwsJykuam9pbihlc2NDb21tYSlcbiAgICAgICAgICAgIC5zcGxpdCgnXFxcXC4nKS5qb2luKGVzY1BlcmlvZCk7XG59XG5cbmZ1bmN0aW9uIHVuZXNjYXBlQnJhY2VzKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KGVzY1NsYXNoKS5qb2luKCdcXFxcJylcbiAgICAgICAgICAgIC5zcGxpdChlc2NPcGVuKS5qb2luKCd7JylcbiAgICAgICAgICAgIC5zcGxpdChlc2NDbG9zZSkuam9pbignfScpXG4gICAgICAgICAgICAuc3BsaXQoZXNjQ29tbWEpLmpvaW4oJywnKVxuICAgICAgICAgICAgLnNwbGl0KGVzY1BlcmlvZCkuam9pbignLicpO1xufVxuXG5cbi8vIEJhc2ljYWxseSBqdXN0IHN0ci5zcGxpdChcIixcIiksIGJ1dCBoYW5kbGluZyBjYXNlc1xuLy8gd2hlcmUgd2UgaGF2ZSBuZXN0ZWQgYnJhY2VkIHNlY3Rpb25zLCB3aGljaCBzaG91bGQgYmVcbi8vIHRyZWF0ZWQgYXMgaW5kaXZpZHVhbCBtZW1iZXJzLCBsaWtlIHthLHtiLGN9LGR9XG5mdW5jdGlvbiBwYXJzZUNvbW1hUGFydHMoc3RyKSB7XG4gIGlmICghc3RyKVxuICAgIHJldHVybiBbJyddO1xuXG4gIHZhciBwYXJ0cyA9IFtdO1xuICB2YXIgbSA9IGJhbGFuY2VkKCd7JywgJ30nLCBzdHIpO1xuXG4gIGlmICghbSlcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcsJyk7XG5cbiAgdmFyIHByZSA9IG0ucHJlO1xuICB2YXIgYm9keSA9IG0uYm9keTtcbiAgdmFyIHBvc3QgPSBtLnBvc3Q7XG4gIHZhciBwID0gcHJlLnNwbGl0KCcsJyk7XG5cbiAgcFtwLmxlbmd0aC0xXSArPSAneycgKyBib2R5ICsgJ30nO1xuICB2YXIgcG9zdFBhcnRzID0gcGFyc2VDb21tYVBhcnRzKHBvc3QpO1xuICBpZiAocG9zdC5sZW5ndGgpIHtcbiAgICBwW3AubGVuZ3RoLTFdICs9IHBvc3RQYXJ0cy5zaGlmdCgpO1xuICAgIHAucHVzaC5hcHBseShwLCBwb3N0UGFydHMpO1xuICB9XG5cbiAgcGFydHMucHVzaC5hcHBseShwYXJ0cywgcCk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiBleHBhbmRUb3Aoc3RyKSB7XG4gIGlmICghc3RyKVxuICAgIHJldHVybiBbXTtcblxuICAvLyBJIGRvbid0IGtub3cgd2h5IEJhc2ggNC4zIGRvZXMgdGhpcywgYnV0IGl0IGRvZXMuXG4gIC8vIEFueXRoaW5nIHN0YXJ0aW5nIHdpdGgge30gd2lsbCBoYXZlIHRoZSBmaXJzdCB0d28gYnl0ZXMgcHJlc2VydmVkXG4gIC8vIGJ1dCAqb25seSogYXQgdGhlIHRvcCBsZXZlbCwgc28ge30sYX1iIHdpbGwgbm90IGV4cGFuZCB0byBhbnl0aGluZyxcbiAgLy8gYnV0IGF7fSxifWMgd2lsbCBiZSBleHBhbmRlZCB0byBbYX1jLGFiY10uXG4gIC8vIE9uZSBjb3VsZCBhcmd1ZSB0aGF0IHRoaXMgaXMgYSBidWcgaW4gQmFzaCwgYnV0IHNpbmNlIHRoZSBnb2FsIG9mXG4gIC8vIHRoaXMgbW9kdWxlIGlzIHRvIG1hdGNoIEJhc2gncyBydWxlcywgd2UgZXNjYXBlIGEgbGVhZGluZyB7fVxuICBpZiAoc3RyLnN1YnN0cigwLCAyKSA9PT0gJ3t9Jykge1xuICAgIHN0ciA9ICdcXFxce1xcXFx9JyArIHN0ci5zdWJzdHIoMik7XG4gIH1cblxuICByZXR1cm4gZXhwYW5kKGVzY2FwZUJyYWNlcyhzdHIpLCB0cnVlKS5tYXAodW5lc2NhcGVCcmFjZXMpO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eShlKSB7XG4gIHJldHVybiBlO1xufVxuXG5mdW5jdGlvbiBlbWJyYWNlKHN0cikge1xuICByZXR1cm4gJ3snICsgc3RyICsgJ30nO1xufVxuZnVuY3Rpb24gaXNQYWRkZWQoZWwpIHtcbiAgcmV0dXJuIC9eLT8wXFxkLy50ZXN0KGVsKTtcbn1cblxuZnVuY3Rpb24gbHRlKGksIHkpIHtcbiAgcmV0dXJuIGkgPD0geTtcbn1cbmZ1bmN0aW9uIGd0ZShpLCB5KSB7XG4gIHJldHVybiBpID49IHk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZChzdHIsIGlzVG9wKSB7XG4gIHZhciBleHBhbnNpb25zID0gW107XG5cbiAgdmFyIG0gPSBiYWxhbmNlZCgneycsICd9Jywgc3RyKTtcbiAgaWYgKCFtIHx8IC9cXCQkLy50ZXN0KG0ucHJlKSkgcmV0dXJuIFtzdHJdO1xuXG4gIHZhciBpc051bWVyaWNTZXF1ZW5jZSA9IC9eLT9cXGQrXFwuXFwuLT9cXGQrKD86XFwuXFwuLT9cXGQrKT8kLy50ZXN0KG0uYm9keSk7XG4gIHZhciBpc0FscGhhU2VxdWVuY2UgPSAvXlthLXpBLVpdXFwuXFwuW2EtekEtWl0oPzpcXC5cXC4tP1xcZCspPyQvLnRlc3QobS5ib2R5KTtcbiAgdmFyIGlzU2VxdWVuY2UgPSBpc051bWVyaWNTZXF1ZW5jZSB8fCBpc0FscGhhU2VxdWVuY2U7XG4gIHZhciBpc09wdGlvbnMgPSBtLmJvZHkuaW5kZXhPZignLCcpID49IDA7XG4gIGlmICghaXNTZXF1ZW5jZSAmJiAhaXNPcHRpb25zKSB7XG4gICAgLy8ge2F9LGJ9XG4gICAgaWYgKG0ucG9zdC5tYXRjaCgvLC4qXFx9LykpIHtcbiAgICAgIHN0ciA9IG0ucHJlICsgJ3snICsgbS5ib2R5ICsgZXNjQ2xvc2UgKyBtLnBvc3Q7XG4gICAgICByZXR1cm4gZXhwYW5kKHN0cik7XG4gICAgfVxuICAgIHJldHVybiBbc3RyXTtcbiAgfVxuXG4gIHZhciBuO1xuICBpZiAoaXNTZXF1ZW5jZSkge1xuICAgIG4gPSBtLmJvZHkuc3BsaXQoL1xcLlxcLi8pO1xuICB9IGVsc2Uge1xuICAgIG4gPSBwYXJzZUNvbW1hUGFydHMobS5ib2R5KTtcbiAgICBpZiAobi5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIHh7e2EsYn19eSA9PT4geHthfXkgeHtifXlcbiAgICAgIG4gPSBleHBhbmQoblswXSwgZmFsc2UpLm1hcChlbWJyYWNlKTtcbiAgICAgIGlmIChuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB2YXIgcG9zdCA9IG0ucG9zdC5sZW5ndGhcbiAgICAgICAgICA/IGV4cGFuZChtLnBvc3QsIGZhbHNlKVxuICAgICAgICAgIDogWycnXTtcbiAgICAgICAgcmV0dXJuIHBvc3QubWFwKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICByZXR1cm4gbS5wcmUgKyBuWzBdICsgcDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYXQgdGhpcyBwb2ludCwgbiBpcyB0aGUgcGFydHMsIGFuZCB3ZSBrbm93IGl0J3Mgbm90IGEgY29tbWEgc2V0XG4gIC8vIHdpdGggYSBzaW5nbGUgZW50cnkuXG5cbiAgLy8gbm8gbmVlZCB0byBleHBhbmQgcHJlLCBzaW5jZSBpdCBpcyBndWFyYW50ZWVkIHRvIGJlIGZyZWUgb2YgYnJhY2Utc2V0c1xuICB2YXIgcHJlID0gbS5wcmU7XG4gIHZhciBwb3N0ID0gbS5wb3N0Lmxlbmd0aFxuICAgID8gZXhwYW5kKG0ucG9zdCwgZmFsc2UpXG4gICAgOiBbJyddO1xuXG4gIHZhciBOO1xuXG4gIGlmIChpc1NlcXVlbmNlKSB7XG4gICAgdmFyIHggPSBudW1lcmljKG5bMF0pO1xuICAgIHZhciB5ID0gbnVtZXJpYyhuWzFdKTtcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1heChuWzBdLmxlbmd0aCwgblsxXS5sZW5ndGgpXG4gICAgdmFyIGluY3IgPSBuLmxlbmd0aCA9PSAzXG4gICAgICA/IE1hdGguYWJzKG51bWVyaWMoblsyXSkpXG4gICAgICA6IDE7XG4gICAgdmFyIHRlc3QgPSBsdGU7XG4gICAgdmFyIHJldmVyc2UgPSB5IDwgeDtcbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgaW5jciAqPSAtMTtcbiAgICAgIHRlc3QgPSBndGU7XG4gICAgfVxuICAgIHZhciBwYWQgPSBuLnNvbWUoaXNQYWRkZWQpO1xuXG4gICAgTiA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IHg7IHRlc3QoaSwgeSk7IGkgKz0gaW5jcikge1xuICAgICAgdmFyIGM7XG4gICAgICBpZiAoaXNBbHBoYVNlcXVlbmNlKSB7XG4gICAgICAgIGMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuICAgICAgICBpZiAoYyA9PT0gJ1xcXFwnKVxuICAgICAgICAgIGMgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGMgPSBTdHJpbmcoaSk7XG4gICAgICAgIGlmIChwYWQpIHtcbiAgICAgICAgICB2YXIgbmVlZCA9IHdpZHRoIC0gYy5sZW5ndGg7XG4gICAgICAgICAgaWYgKG5lZWQgPiAwKSB7XG4gICAgICAgICAgICB2YXIgeiA9IG5ldyBBcnJheShuZWVkICsgMSkuam9pbignMCcpO1xuICAgICAgICAgICAgaWYgKGkgPCAwKVxuICAgICAgICAgICAgICBjID0gJy0nICsgeiArIGMuc2xpY2UoMSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGMgPSB6ICsgYztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIE4ucHVzaChjKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgTiA9IGNvbmNhdE1hcChuLCBmdW5jdGlvbihlbCkgeyByZXR1cm4gZXhwYW5kKGVsLCBmYWxzZSkgfSk7XG4gIH1cblxuICBmb3IgKHZhciBqID0gMDsgaiA8IE4ubGVuZ3RoOyBqKyspIHtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IHBvc3QubGVuZ3RoOyBrKyspIHtcbiAgICAgIHZhciBleHBhbnNpb24gPSBwcmUgKyBOW2pdICsgcG9zdFtrXTtcbiAgICAgIGlmICghaXNUb3AgfHwgaXNTZXF1ZW5jZSB8fCBleHBhbnNpb24pXG4gICAgICAgIGV4cGFuc2lvbnMucHVzaChleHBhbnNpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleHBhbnNpb25zO1xufVxuXG4iLCIvKipcbiAqIEJyb3dzZXIgSW1hZ2UgQ29tcHJlc3Npb25cbiAqIHYxLjAuNVxuICogYnkgRG9uYWxkIDxkb25hbGRjd2xAZ21haWwuY29tPlxuICogaHR0cHM6Ly9naXRodWIuY29tL0RvbmFsZGN3bC9icm93c2VyLWltYWdlLWNvbXByZXNzaW9uXG4gKi9cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoZSxuKXtyZXR1cm4gZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoZSxuKXt2YXIgcj1bXSx0PSEwLGE9ITEsaT12b2lkIDA7dHJ5e2Zvcih2YXIgbyxzPWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEodD0obz1zLm5leHQoKSkuZG9uZSkmJihyLnB1c2goby52YWx1ZSksIW58fHIubGVuZ3RoIT09bik7dD0hMCk7fWNhdGNoKGUpe2E9ITAsaT1lfWZpbmFsbHl7dHJ5e3R8fG51bGw9PXMucmV0dXJufHxzLnJldHVybigpfWZpbmFsbHl7aWYoYSl0aHJvdyBpfX1yZXR1cm4gcn0oZSxuKXx8ZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpfSgpfXZhciBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5jb3Jkb3ZhJiZ3aW5kb3cuY29yZG92YS5yZXF1aXJlKFwiY29yZG92YS9tb2R1bGVtYXBwZXJcIiksQ3VzdG9tRmlsZT1lJiZlLmdldE9yaWdpbmFsU3ltYm9sKHdpbmRvdyxcIkZpbGVcIil8fEZpbGUsQ3VzdG9tRmlsZVJlYWRlcj1lJiZlLmdldE9yaWdpbmFsU3ltYm9sKHdpbmRvdyxcIkZpbGVSZWFkZXJcIil8fEZpbGVSZWFkZXI7ZnVuY3Rpb24gZ2V0RGF0YVVybEZyb21GaWxlKGUpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihuLHIpe3ZhciB0PW5ldyBDdXN0b21GaWxlUmVhZGVyO3Qub25sb2FkPWZ1bmN0aW9uKCl7cmV0dXJuIG4odC5yZXN1bHQpfSx0Lm9uZXJyb3I9ZnVuY3Rpb24oZSl7cmV0dXJuIHIoZSl9LHQucmVhZEFzRGF0YVVSTChlKX0pfWZ1bmN0aW9uIGdldEZpbGVmcm9tRGF0YVVybChlLG4pe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpEYXRlLm5vdygpO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0KXtmb3IodmFyIGE9ZS5zcGxpdChcIixcIiksaT1hWzBdLm1hdGNoKC86KC4qPyk7LylbMV0sbz1hdG9iKGFbMV0pLHM9by5sZW5ndGgsYz1uZXcgVWludDhBcnJheShzKTtzLS07KWNbc109by5jaGFyQ29kZUF0KHMpO3ZhciB1PW5ldyBCbG9iKFtjXSx7dHlwZTppfSk7dS5uYW1lPW4sdS5sYXN0TW9kaWZpZWQ9cix0KHUpfSl9ZnVuY3Rpb24gbG9hZEltYWdlKGUpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihuLHIpe3ZhciB0PW5ldyBJbWFnZTt0Lm9ubG9hZD1mdW5jdGlvbigpe3JldHVybiBuKHQpfSx0Lm9uZXJyb3I9ZnVuY3Rpb24oZSl7cmV0dXJuIHIoZSl9LHQuc3JjPWV9KX1mdW5jdGlvbiBkcmF3SW1hZ2VJbkNhbnZhcyhlKXt2YXIgbj1fc2xpY2VkVG9BcnJheShnZXROZXdDYW52YXNBbmRDdHgoZS53aWR0aCxlLmhlaWdodCksMikscj1uWzBdO3JldHVybiBuWzFdLmRyYXdJbWFnZShlLDAsMCxyLndpZHRoLHIuaGVpZ2h0KSxyfWZ1bmN0aW9uIGRyYXdGaWxlSW5DYW52YXMoZSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4scil7dmFyIHQsYSxpPWZ1bmN0aW9uICRUcnlfMV9Qb3N0KCl7dHJ5e3JldHVybiBhPWRyYXdJbWFnZUluQ2FudmFzKHQpLG4oW3QsYV0pfWNhdGNoKGUpe3JldHVybiByKGUpfX0sbz1mdW5jdGlvbiAkVHJ5XzFfQ2F0Y2gobil7dHJ5e3JldHVybiBnZXREYXRhVXJsRnJvbUZpbGUoZSkudGhlbihmdW5jdGlvbihlKXt0cnl7cmV0dXJuIGxvYWRJbWFnZShlKS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gdD1lLGkoKX1jYXRjaChlKXtyZXR1cm4gcihlKX19LHIpfWNhdGNoKGUpe3JldHVybiByKGUpfX0scil9Y2F0Y2goZSl7cmV0dXJuIHIoZSl9fTt0cnl7cmV0dXJuIGNyZWF0ZUltYWdlQml0bWFwKGUpLnRoZW4oZnVuY3Rpb24oZSl7dHJ5e3JldHVybiB0PWUsaSgpfWNhdGNoKGUpe3JldHVybiBvKCl9fSxvKX1jYXRjaChlKXtvKCl9fSl9ZnVuY3Rpb24gY2FudmFzVG9GaWxlKGUsbixyLHQpe3ZhciBhPWFyZ3VtZW50cy5sZW5ndGg+NCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XToxO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihpLG8pe3ZhciBzO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIE9mZnNjcmVlbkNhbnZhcyYmZSBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcz9lLmNvbnZlcnRUb0Jsb2Ioe3R5cGU6bixxdWFsaXR5OmF9KS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4ocz1lKS5uYW1lPXIscy5sYXN0TW9kaWZpZWQ9dCwkSWZfNC5jYWxsKHRoaXMpfWNhdGNoKGUpe3JldHVybiBvKGUpfX0uYmluZCh0aGlzKSxvKTpnZXRGaWxlZnJvbURhdGFVcmwoZS50b0RhdGFVUkwobixhKSxyLHQpLnRoZW4oZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBzPWUsJElmXzQuY2FsbCh0aGlzKX1jYXRjaChlKXtyZXR1cm4gbyhlKX19LmJpbmQodGhpcyksbyk7ZnVuY3Rpb24gJElmXzQoKXtyZXR1cm4gaShzKX19KX1mdW5jdGlvbiBnZXRFeGlmT3JpZW50YXRpb24oZSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4scil7dmFyIHQ9bmV3IEN1c3RvbUZpbGVSZWFkZXI7dC5vbmxvYWQ9ZnVuY3Rpb24oZSl7dmFyIHI9bmV3IERhdGFWaWV3KGUudGFyZ2V0LnJlc3VsdCk7aWYoNjU0OTYhPXIuZ2V0VWludDE2KDAsITEpKXJldHVybiBuKC0yKTtmb3IodmFyIHQ9ci5ieXRlTGVuZ3RoLGE9MjthPHQ7KXtpZihyLmdldFVpbnQxNihhKzIsITEpPD04KXJldHVybiBuKC0xKTt2YXIgaT1yLmdldFVpbnQxNihhLCExKTtpZihhKz0yLDY1NTA1PT1pKXtpZigxMTY1NTE5MjA2IT1yLmdldFVpbnQzMihhKz0yLCExKSlyZXR1cm4gbigtMSk7dmFyIG89MTg3NjE9PXIuZ2V0VWludDE2KGErPTYsITEpO2ErPXIuZ2V0VWludDMyKGErNCxvKTt2YXIgcz1yLmdldFVpbnQxNihhLG8pO2ErPTI7Zm9yKHZhciBjPTA7YzxzO2MrKylpZigyNzQ9PXIuZ2V0VWludDE2KGErMTIqYyxvKSlyZXR1cm4gbihyLmdldFVpbnQxNihhKzEyKmMrOCxvKSl9ZWxzZXtpZig2NTI4MCE9KDY1MjgwJmkpKWJyZWFrO2ErPXIuZ2V0VWludDE2KGEsITEpfX1yZXR1cm4gbigtMSl9LHQub25lcnJvcj1mdW5jdGlvbihlKXtyZXR1cm4gcihlKX0sdC5yZWFkQXNBcnJheUJ1ZmZlcihlKX0pfWZ1bmN0aW9uIGhhbmRsZU1heFdpZHRoT3JIZWlnaHQoZSxuKXt2YXIgcix0PWUud2lkdGgsYT1lLmhlaWdodCxpPW4ubWF4V2lkdGhPckhlaWdodCxvPWU7aWYoTnVtYmVyLmlzSW50ZWdlcihpKSYmKHQ+aXx8YT5pKSl7dmFyIHM9X3NsaWNlZFRvQXJyYXkoZ2V0TmV3Q2FudmFzQW5kQ3R4KHQsYSksMik7bz1zWzBdLHI9c1sxXSx0PmE/KG8ud2lkdGg9aSxvLmhlaWdodD1hL3QqaSk6KG8ud2lkdGg9dC9hKmksby5oZWlnaHQ9aSksci5kcmF3SW1hZ2UoZSwwLDAsby53aWR0aCxvLmhlaWdodCl9cmV0dXJuIG99ZnVuY3Rpb24gZm9sbG93RXhpZk9yaWVudGF0aW9uKGUsbil7dmFyIHI9ZS53aWR0aCx0PWUuaGVpZ2h0LGE9X3NsaWNlZFRvQXJyYXkoZ2V0TmV3Q2FudmFzQW5kQ3R4KHIsdCksMiksaT1hWzBdLG89YVsxXTtzd2l0Y2goNDxuJiZuPDk/KGkud2lkdGg9dCxpLmhlaWdodD1yKTooaS53aWR0aD1yLGkuaGVpZ2h0PXQpLG4pe2Nhc2UgMjpvLnRyYW5zZm9ybSgtMSwwLDAsMSxyLDApO2JyZWFrO2Nhc2UgMzpvLnRyYW5zZm9ybSgtMSwwLDAsLTEscix0KTticmVhaztjYXNlIDQ6by50cmFuc2Zvcm0oMSwwLDAsLTEsMCx0KTticmVhaztjYXNlIDU6by50cmFuc2Zvcm0oMCwxLDEsMCwwLDApO2JyZWFrO2Nhc2UgNjpvLnRyYW5zZm9ybSgwLDEsLTEsMCx0LDApO2JyZWFrO2Nhc2UgNzpvLnRyYW5zZm9ybSgwLC0xLC0xLDAsdCxyKTticmVhaztjYXNlIDg6by50cmFuc2Zvcm0oMCwtMSwxLDAsMCxyKX1yZXR1cm4gby5kcmF3SW1hZ2UoZSwwLDAscix0KSxpfWZ1bmN0aW9uIGdldE5ld0NhbnZhc0FuZEN0eChlLG4pe3ZhciByLHQ7dHJ5e3Q9KHI9bmV3IE9mZnNjcmVlbkNhbnZhcyhlLG4pKS5nZXRDb250ZXh0KFwiMmRcIil9Y2F0Y2goZSl7dD0ocj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpKS5nZXRDb250ZXh0KFwiMmRcIil9cmV0dXJuIHIud2lkdGg9ZSxyLmhlaWdodD1uLFtyLHRdfWZ1bmN0aW9uIGNvbXByZXNzKGUsbil7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsdCl7dmFyIGEsaSxvLHMsYyx1LGw7cmV0dXJuIGE9bi5tYXhJdGVyYXRpb258fDEwLGk9MTAyNCpuLm1heFNpemVNQioxMDI0LGRyYXdGaWxlSW5DYW52YXMoZSkudGhlbihmdW5jdGlvbihtKXt0cnl7dmFyIGY9X3NsaWNlZFRvQXJyYXkobSwyKTtyZXR1cm4gbz1mWzBdLHM9aGFuZGxlTWF4V2lkdGhPckhlaWdodChzPWZbMV0sbiksbmV3IFByb21pc2UoZnVuY3Rpb24ocix0KXt2YXIgYTtpZighKGE9bi5leGlmT3JpZW50YXRpb24pKXJldHVybiBnZXRFeGlmT3JpZW50YXRpb24oZSkudGhlbihmdW5jdGlvbihlKXt0cnl7cmV0dXJuIGE9ZSwkSWZfMi5jYWxsKHRoaXMpfWNhdGNoKGUpe3JldHVybiB0KGUpfX0uYmluZCh0aGlzKSx0KTtmdW5jdGlvbiAkSWZfMigpe3JldHVybiByKGEpfXJldHVybiAkSWZfMi5jYWxsKHRoaXMpfSkudGhlbihmdW5jdGlvbihtKXt0cnl7cmV0dXJuIG4uZXhpZk9yaWVudGF0aW9uPW0scz1mb2xsb3dFeGlmT3JpZW50YXRpb24ocyxuLmV4aWZPcmllbnRhdGlvbiksYz0xLGNhbnZhc1RvRmlsZShzLGUudHlwZSxlLm5hbWUsZS5sYXN0TW9kaWZpZWQsYykudGhlbihmdW5jdGlvbihuKXt0cnl7dmFyIG0sZj1mdW5jdGlvbiAkTG9vcF8zKCl7aWYoYS0tJiZsLnNpemU+aSl7dmFyIG4scix1LG09X3NsaWNlZFRvQXJyYXkoZ2V0TmV3Q2FudmFzQW5kQ3R4KG49Ljkqcy53aWR0aCxyPS45KnMuaGVpZ2h0KSwyKTtyZXR1cm4gdT1tWzBdLG1bMV0uZHJhd0ltYWdlKG8sMCwwLG4sciksXCJpbWFnZS9qcGVnXCI9PT1lLnR5cGUmJihjKj0uOSksY2FudmFzVG9GaWxlKHUsZS50eXBlLGUubmFtZSxlLmxhc3RNb2RpZmllZCxjKS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gbD1lLHM9dSwkTG9vcF8zfWNhdGNoKGUpe3JldHVybiB0KGUpfX0sdCl9cmV0dXJuWzFdfSxnPWZ1bmN0aW9uICRMb29wXzNfZXhpdCgpe3JldHVybiByKGwpfTtyZXR1cm4odT1uKS5zaXplPD1pP3IodSk6KGw9dSwobT1mdW5jdGlvbihlKXtmb3IoO2U7KXtpZihlLnRoZW4pcmV0dXJuIHZvaWQgZS50aGVuKG0sdCk7dHJ5e2lmKGUucG9wKXtpZihlLmxlbmd0aClyZXR1cm4gZS5wb3AoKT9nLmNhbGwodGhpcyk6ZTtlPWZ9ZWxzZSBlPWUuY2FsbCh0aGlzKX1jYXRjaChlKXtyZXR1cm4gdChlKX19fS5iaW5kKHRoaXMpKShmKSl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9fS5iaW5kKHRoaXMpLHQpfWNhdGNoKGUpe3JldHVybiB0KGUpfX0uYmluZCh0aGlzKSx0KX1jYXRjaChlKXtyZXR1cm4gdChlKX19LmJpbmQodGhpcyksdCl9KX12YXIgbixyPTA7dmFyIHQ9ZnVuY3Rpb24gY3JlYXRlV29ya2VyKGUpe3JldHVybiBuZXcgV29ya2VyKFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW1wiKFwiLmNvbmNhdChlLFwiKSgpXCIpXSkpKX0oZnVuY3Rpb24oKXt2YXIgZT0hMTtzZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZnVuY3Rpb24obil7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsdCl7dmFyIGEsaSxvLHMsYz1uLmRhdGE7YT1jLmZpbGUsaT1jLmlkLG89Yy5pbWFnZUNvbXByZXNzaW9uTGliVXJsLHM9Yy5vcHRpb25zO3ZhciB1PWZ1bmN0aW9uICRUcnlfMV9Qb3N0KCl7dHJ5e3JldHVybiByKCl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9fSxsPWZ1bmN0aW9uICRUcnlfMV9DYXRjaChlKXt0cnl7cmV0dXJuIHNlbGYucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZSxpZDppfSksdSgpfWNhdGNoKGUpe3JldHVybiB0KGUpfX07dHJ5e3ZhciBtO3JldHVybiBlfHwoaW1wb3J0U2NyaXB0cyhvKSxlPSEwKSxpbWFnZUNvbXByZXNzaW9uKGEscykudGhlbihmdW5jdGlvbihlKXt0cnl7cmV0dXJuIG09ZSxzZWxmLnBvc3RNZXNzYWdlKHtmaWxlOm0saWQ6aX0pLHUoKX1jYXRjaChlKXtyZXR1cm4gbChlKX19LGwpfWNhdGNoKGUpe2woZSl9fSl9KX0pO2Z1bmN0aW9uIGNvbXByZXNzT25XZWJXb3JrZXIoZSxhKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaSxvKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocyxjKXtufHwobj1mdW5jdGlvbiBjcmVhdGVTb3VyY2VPYmplY3QoZSl7cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2VdLHt0eXBlOlwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwifSkpfShcIlxcbiAgICBmdW5jdGlvbiBpbWFnZUNvbXByZXNzaW9uICgpe3JldHVybiAoXCIuY29uY2F0KGltYWdlQ29tcHJlc3Npb24sXCIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyl9XFxuXFxuICAgIGltYWdlQ29tcHJlc3Npb24uZ2V0RGF0YVVybEZyb21GaWxlID0gXCIpLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLmdldERhdGFVcmxGcm9tRmlsZSxcIlxcbiAgICBpbWFnZUNvbXByZXNzaW9uLmdldEZpbGVmcm9tRGF0YVVybCA9IFwiKS5jb25jYXQoaW1hZ2VDb21wcmVzc2lvbi5nZXRGaWxlZnJvbURhdGFVcmwsXCJcXG4gICAgaW1hZ2VDb21wcmVzc2lvbi5sb2FkSW1hZ2UgPSBcIikuY29uY2F0KGltYWdlQ29tcHJlc3Npb24ubG9hZEltYWdlLFwiXFxuICAgIGltYWdlQ29tcHJlc3Npb24uZHJhd0ltYWdlSW5DYW52YXMgPSBcIikuY29uY2F0KGltYWdlQ29tcHJlc3Npb24uZHJhd0ltYWdlSW5DYW52YXMsXCJcXG4gICAgaW1hZ2VDb21wcmVzc2lvbi5kcmF3RmlsZUluQ2FudmFzID0gXCIpLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLmRyYXdGaWxlSW5DYW52YXMsXCJcXG4gICAgaW1hZ2VDb21wcmVzc2lvbi5jYW52YXNUb0ZpbGUgPSBcIikuY29uY2F0KGltYWdlQ29tcHJlc3Npb24uY2FudmFzVG9GaWxlLFwiXFxuICAgIGltYWdlQ29tcHJlc3Npb24uZ2V0RXhpZk9yaWVudGF0aW9uID0gXCIpLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLmdldEV4aWZPcmllbnRhdGlvbixcIlxcbiAgICBpbWFnZUNvbXByZXNzaW9uLmhhbmRsZU1heFdpZHRoT3JIZWlnaHQgPSBcIikuY29uY2F0KGltYWdlQ29tcHJlc3Npb24uaGFuZGxlTWF4V2lkdGhPckhlaWdodCxcIlxcbiAgICBpbWFnZUNvbXByZXNzaW9uLmZvbGxvd0V4aWZPcmllbnRhdGlvbiA9IFwiKS5jb25jYXQoaW1hZ2VDb21wcmVzc2lvbi5mb2xsb3dFeGlmT3JpZW50YXRpb24sXCJcXG5cXG4gICAgZ2V0RGF0YVVybEZyb21GaWxlID0gaW1hZ2VDb21wcmVzc2lvbi5nZXREYXRhVXJsRnJvbUZpbGVcXG4gICAgZ2V0RmlsZWZyb21EYXRhVXJsID0gaW1hZ2VDb21wcmVzc2lvbi5nZXRGaWxlZnJvbURhdGFVcmxcXG4gICAgbG9hZEltYWdlID0gaW1hZ2VDb21wcmVzc2lvbi5sb2FkSW1hZ2VcXG4gICAgZHJhd0ltYWdlSW5DYW52YXMgPSBpbWFnZUNvbXByZXNzaW9uLmRyYXdJbWFnZUluQ2FudmFzXFxuICAgIGRyYXdGaWxlSW5DYW52YXMgPSBpbWFnZUNvbXByZXNzaW9uLmRyYXdGaWxlSW5DYW52YXNcXG4gICAgY2FudmFzVG9GaWxlID0gaW1hZ2VDb21wcmVzc2lvbi5jYW52YXNUb0ZpbGVcXG4gICAgZ2V0RXhpZk9yaWVudGF0aW9uID0gaW1hZ2VDb21wcmVzc2lvbi5nZXRFeGlmT3JpZW50YXRpb25cXG4gICAgaGFuZGxlTWF4V2lkdGhPckhlaWdodCA9IGltYWdlQ29tcHJlc3Npb24uaGFuZGxlTWF4V2lkdGhPckhlaWdodFxcbiAgICBmb2xsb3dFeGlmT3JpZW50YXRpb24gPSBpbWFnZUNvbXByZXNzaW9uLmZvbGxvd0V4aWZPcmllbnRhdGlvblxcblxcbiAgICBnZXROZXdDYW52YXNBbmRDdHggPSBcIikuY29uY2F0KGdldE5ld0NhbnZhc0FuZEN0eCxcIlxcbiAgICBcXG4gICAgQ3VzdG9tRmlsZVJlYWRlciA9IEZpbGVSZWFkZXJcXG4gICAgXFxuICAgIEN1c3RvbUZpbGUgPSBGaWxlXFxuICAgIFxcbiAgICBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIG4pIHsgcmV0dXJuIGFyciB9XFxuXFxuICAgIGZ1bmN0aW9uIGNvbXByZXNzICgpe3JldHVybiAoXCIpLmNvbmNhdChjb21wcmVzcyxcIikuYXBwbHkobnVsbCwgYXJndW1lbnRzKX1cXG4gICAgXCIpKSk7dmFyIHU9cisrO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZnVuY3Rpb24gaGFuZGxlcihlKXtlLmRhdGEuaWQ9PT11JiYodC5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGhhbmRsZXIpLGUuZGF0YS5lcnJvciYmbyhlLmRhdGEuZXJyb3IpLGkoZS5kYXRhLmZpbGUpKX0pLHQucG9zdE1lc3NhZ2Uoe2ZpbGU6ZSxpZDp1LGltYWdlQ29tcHJlc3Npb25MaWJVcmw6bixvcHRpb25zOmF9KSxzKCl9KX0pfWZ1bmN0aW9uIGltYWdlQ29tcHJlc3Npb24oZSxuKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocix0KXt2YXIgYSxpO2lmKG4ubWF4U2l6ZU1CPW4ubWF4U2l6ZU1CfHxOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksbi51c2VXZWJXb3JrZXI9XCJib29sZWFuXCIhPXR5cGVvZiBuLnVzZVdlYldvcmtlcnx8bi51c2VXZWJXb3JrZXIsIShlIGluc3RhbmNlb2YgQmxvYnx8ZSBpbnN0YW5jZW9mIEN1c3RvbUZpbGUpKXJldHVybiB0KG5ldyBFcnJvcihcIlRoZSBmaWxlIGdpdmVuIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBCbG9iIG9yIEZpbGVcIikpO2lmKCEvXmltYWdlLy50ZXN0KGUudHlwZSkpcmV0dXJuIHQobmV3IEVycm9yKFwiVGhlIGZpbGUgZ2l2ZW4gaXMgbm90IGFuIGltYWdlXCIpKTtpZihpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSYmc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlLCFuLnVzZVdlYldvcmtlcnx8XCJmdW5jdGlvblwiIT10eXBlb2YgV29ya2VyfHxpKXJldHVybiBjb21wcmVzcyhlLG4pLnRoZW4oZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBhPWUsJElmXzMuY2FsbCh0aGlzKX1jYXRjaChlKXtyZXR1cm4gdChlKX19LmJpbmQodGhpcyksdCk7dmFyIG89ZnVuY3Rpb24oKXt0cnl7cmV0dXJuICRJZl8zLmNhbGwodGhpcyl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9fS5iaW5kKHRoaXMpLHM9ZnVuY3Rpb24gJFRyeV8xX0NhdGNoKHIpe3RyeXtyZXR1cm4gY29uc29sZS53YXJuKFwiUnVuIGNvbXByZXNzaW9uIGluIHdlYiB3b3JrZXIgZmFpbGVkOlwiLHIsXCIsIGZhbGwgYmFjayB0byBtYWluIHRocmVhZFwiKSxjb21wcmVzcyhlLG4pLnRoZW4oZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBhPWUsbygpfWNhdGNoKGUpe3JldHVybiB0KGUpfX0sdCl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9fTt0cnl7cmV0dXJuIGNvbXByZXNzT25XZWJXb3JrZXIoZSxuKS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gYT1lLG8oKX1jYXRjaChlKXtyZXR1cm4gcyhlKX19LHMpfWNhdGNoKGUpe3MoZSl9ZnVuY3Rpb24gJElmXzMoKXt0cnl7YS5uYW1lPWUubmFtZSxhLmxhc3RNb2RpZmllZD1lLmxhc3RNb2RpZmllZH1jYXRjaChlKXt9cmV0dXJuIHIoYSl9fSl9aW1hZ2VDb21wcmVzc2lvbi5nZXREYXRhVXJsRnJvbUZpbGU9Z2V0RGF0YVVybEZyb21GaWxlLGltYWdlQ29tcHJlc3Npb24uZ2V0RmlsZWZyb21EYXRhVXJsPWdldEZpbGVmcm9tRGF0YVVybCxpbWFnZUNvbXByZXNzaW9uLmxvYWRJbWFnZT1sb2FkSW1hZ2UsaW1hZ2VDb21wcmVzc2lvbi5kcmF3SW1hZ2VJbkNhbnZhcz1kcmF3SW1hZ2VJbkNhbnZhcyxpbWFnZUNvbXByZXNzaW9uLmRyYXdGaWxlSW5DYW52YXM9ZHJhd0ZpbGVJbkNhbnZhcyxpbWFnZUNvbXByZXNzaW9uLmNhbnZhc1RvRmlsZT1jYW52YXNUb0ZpbGUsaW1hZ2VDb21wcmVzc2lvbi5nZXRFeGlmT3JpZW50YXRpb249Z2V0RXhpZk9yaWVudGF0aW9uLGltYWdlQ29tcHJlc3Npb24uaGFuZGxlTWF4V2lkdGhPckhlaWdodD1oYW5kbGVNYXhXaWR0aE9ySGVpZ2h0LGltYWdlQ29tcHJlc3Npb24uZm9sbG93RXhpZk9yaWVudGF0aW9uPWZvbGxvd0V4aWZPcmllbnRhdGlvbjtleHBvcnQgZGVmYXVsdCBpbWFnZUNvbXByZXNzaW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1pbWFnZS1jb21wcmVzc2lvbi5tanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4cywgZm4pIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgeCA9IGZuKHhzW2ldLCBpKTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHJlcy5wdXNoLmFwcGx5KHJlcywgeCk7XG4gICAgICAgIGVsc2UgcmVzLnB1c2goeCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBtaW5pbWF0Y2hcbm1pbmltYXRjaC5NaW5pbWF0Y2ggPSBNaW5pbWF0Y2hcblxudmFyIHBhdGggPSB7IHNlcDogJy8nIH1cbnRyeSB7XG4gIHBhdGggPSByZXF1aXJlKCdwYXRoJylcbn0gY2F0Y2ggKGVyKSB7fVxuXG52YXIgR0xPQlNUQVIgPSBtaW5pbWF0Y2guR0xPQlNUQVIgPSBNaW5pbWF0Y2guR0xPQlNUQVIgPSB7fVxudmFyIGV4cGFuZCA9IHJlcXVpcmUoJ2JyYWNlLWV4cGFuc2lvbicpXG5cbnZhciBwbFR5cGVzID0ge1xuICAnISc6IHsgb3BlbjogJyg/Oig/ISg/OicsIGNsb3NlOiAnKSlbXi9dKj8pJ30sXG4gICc/JzogeyBvcGVuOiAnKD86JywgY2xvc2U6ICcpPycgfSxcbiAgJysnOiB7IG9wZW46ICcoPzonLCBjbG9zZTogJykrJyB9LFxuICAnKic6IHsgb3BlbjogJyg/OicsIGNsb3NlOiAnKSonIH0sXG4gICdAJzogeyBvcGVuOiAnKD86JywgY2xvc2U6ICcpJyB9XG59XG5cbi8vIGFueSBzaW5nbGUgdGhpbmcgb3RoZXIgdGhhbiAvXG4vLyBkb24ndCBuZWVkIHRvIGVzY2FwZSAvIHdoZW4gdXNpbmcgbmV3IFJlZ0V4cCgpXG52YXIgcW1hcmsgPSAnW14vXSdcblxuLy8gKiA9PiBhbnkgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbnZhciBzdGFyID0gcW1hcmsgKyAnKj8nXG5cbi8vICoqIHdoZW4gZG90cyBhcmUgYWxsb3dlZC4gIEFueXRoaW5nIGdvZXMsIGV4Y2VwdCAuLiBhbmQgLlxuLy8gbm90ICheIG9yIC8gZm9sbG93ZWQgYnkgb25lIG9yIHR3byBkb3RzIGZvbGxvd2VkIGJ5ICQgb3IgLyksXG4vLyBmb2xsb3dlZCBieSBhbnl0aGluZywgYW55IG51bWJlciBvZiB0aW1lcy5cbnZhciB0d29TdGFyRG90ID0gJyg/Oig/ISg/OlxcXFxcXC98XikoPzpcXFxcLnsxLDJ9KSgkfFxcXFxcXC8pKS4pKj8nXG5cbi8vIG5vdCBhIF4gb3IgLyBmb2xsb3dlZCBieSBhIGRvdCxcbi8vIGZvbGxvd2VkIGJ5IGFueXRoaW5nLCBhbnkgbnVtYmVyIG9mIHRpbWVzLlxudmFyIHR3b1N0YXJOb0RvdCA9ICcoPzooPyEoPzpcXFxcXFwvfF4pXFxcXC4pLikqPydcblxuLy8gY2hhcmFjdGVycyB0aGF0IG5lZWQgdG8gYmUgZXNjYXBlZCBpbiBSZWdFeHAuXG52YXIgcmVTcGVjaWFscyA9IGNoYXJTZXQoJygpLip7fSs/W11eJFxcXFwhJylcblxuLy8gXCJhYmNcIiAtPiB7IGE6dHJ1ZSwgYjp0cnVlLCBjOnRydWUgfVxuZnVuY3Rpb24gY2hhclNldCAocykge1xuICByZXR1cm4gcy5zcGxpdCgnJykucmVkdWNlKGZ1bmN0aW9uIChzZXQsIGMpIHtcbiAgICBzZXRbY10gPSB0cnVlXG4gICAgcmV0dXJuIHNldFxuICB9LCB7fSlcbn1cblxuLy8gbm9ybWFsaXplcyBzbGFzaGVzLlxudmFyIHNsYXNoU3BsaXQgPSAvXFwvKy9cblxubWluaW1hdGNoLmZpbHRlciA9IGZpbHRlclxuZnVuY3Rpb24gZmlsdGVyIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHJldHVybiBmdW5jdGlvbiAocCwgaSwgbGlzdCkge1xuICAgIHJldHVybiBtaW5pbWF0Y2gocCwgcGF0dGVybiwgb3B0aW9ucylcbiAgfVxufVxuXG5mdW5jdGlvbiBleHQgKGEsIGIpIHtcbiAgYSA9IGEgfHwge31cbiAgYiA9IGIgfHwge31cbiAgdmFyIHQgPSB7fVxuICBPYmplY3Qua2V5cyhiKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgdFtrXSA9IGJba11cbiAgfSlcbiAgT2JqZWN0LmtleXMoYSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHRba10gPSBhW2tdXG4gIH0pXG4gIHJldHVybiB0XG59XG5cbm1pbmltYXRjaC5kZWZhdWx0cyA9IGZ1bmN0aW9uIChkZWYpIHtcbiAgaWYgKCFkZWYgfHwgIU9iamVjdC5rZXlzKGRlZikubGVuZ3RoKSByZXR1cm4gbWluaW1hdGNoXG5cbiAgdmFyIG9yaWcgPSBtaW5pbWF0Y2hcblxuICB2YXIgbSA9IGZ1bmN0aW9uIG1pbmltYXRjaCAocCwgcGF0dGVybiwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcmlnLm1pbmltYXRjaChwLCBwYXR0ZXJuLCBleHQoZGVmLCBvcHRpb25zKSlcbiAgfVxuXG4gIG0uTWluaW1hdGNoID0gZnVuY3Rpb24gTWluaW1hdGNoIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBvcmlnLk1pbmltYXRjaChwYXR0ZXJuLCBleHQoZGVmLCBvcHRpb25zKSlcbiAgfVxuXG4gIHJldHVybiBtXG59XG5cbk1pbmltYXRjaC5kZWZhdWx0cyA9IGZ1bmN0aW9uIChkZWYpIHtcbiAgaWYgKCFkZWYgfHwgIU9iamVjdC5rZXlzKGRlZikubGVuZ3RoKSByZXR1cm4gTWluaW1hdGNoXG4gIHJldHVybiBtaW5pbWF0Y2guZGVmYXVsdHMoZGVmKS5NaW5pbWF0Y2hcbn1cblxuZnVuY3Rpb24gbWluaW1hdGNoIChwLCBwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgcGF0dGVybiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdnbG9iIHBhdHRlcm4gc3RyaW5nIHJlcXVpcmVkJylcbiAgfVxuXG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9XG5cbiAgLy8gc2hvcnRjdXQ6IGNvbW1lbnRzIG1hdGNoIG5vdGhpbmcuXG4gIGlmICghb3B0aW9ucy5ub2NvbW1lbnQgJiYgcGF0dGVybi5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gXCJcIiBvbmx5IG1hdGNoZXMgXCJcIlxuICBpZiAocGF0dGVybi50cmltKCkgPT09ICcnKSByZXR1cm4gcCA9PT0gJydcblxuICByZXR1cm4gbmV3IE1pbmltYXRjaChwYXR0ZXJuLCBvcHRpb25zKS5tYXRjaChwKVxufVxuXG5mdW5jdGlvbiBNaW5pbWF0Y2ggKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1pbmltYXRjaCkpIHtcbiAgICByZXR1cm4gbmV3IE1pbmltYXRjaChwYXR0ZXJuLCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXR0ZXJuICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2dsb2IgcGF0dGVybiBzdHJpbmcgcmVxdWlyZWQnKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge31cbiAgcGF0dGVybiA9IHBhdHRlcm4udHJpbSgpXG5cbiAgLy8gd2luZG93cyBzdXBwb3J0OiBuZWVkIHRvIHVzZSAvLCBub3QgXFxcbiAgaWYgKHBhdGguc2VwICE9PSAnLycpIHtcbiAgICBwYXR0ZXJuID0gcGF0dGVybi5zcGxpdChwYXRoLnNlcCkuam9pbignLycpXG4gIH1cblxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMuc2V0ID0gW11cbiAgdGhpcy5wYXR0ZXJuID0gcGF0dGVyblxuICB0aGlzLnJlZ2V4cCA9IG51bGxcbiAgdGhpcy5uZWdhdGUgPSBmYWxzZVxuICB0aGlzLmNvbW1lbnQgPSBmYWxzZVxuICB0aGlzLmVtcHR5ID0gZmFsc2VcblxuICAvLyBtYWtlIHRoZSBzZXQgb2YgcmVnZXhwcyBldGMuXG4gIHRoaXMubWFrZSgpXG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7fVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLm1ha2UgPSBtYWtlXG5mdW5jdGlvbiBtYWtlICgpIHtcbiAgLy8gZG9uJ3QgZG8gaXQgbW9yZSB0aGFuIG9uY2UuXG4gIGlmICh0aGlzLl9tYWRlKSByZXR1cm5cblxuICB2YXIgcGF0dGVybiA9IHRoaXMucGF0dGVyblxuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIC8vIGVtcHR5IHBhdHRlcm5zIGFuZCBjb21tZW50cyBtYXRjaCBub3RoaW5nLlxuICBpZiAoIW9wdGlvbnMubm9jb21tZW50ICYmIHBhdHRlcm4uY2hhckF0KDApID09PSAnIycpIHtcbiAgICB0aGlzLmNvbW1lbnQgPSB0cnVlXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFwYXR0ZXJuKSB7XG4gICAgdGhpcy5lbXB0eSA9IHRydWVcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIHN0ZXAgMTogZmlndXJlIG91dCBuZWdhdGlvbiwgZXRjLlxuICB0aGlzLnBhcnNlTmVnYXRlKClcblxuICAvLyBzdGVwIDI6IGV4cGFuZCBicmFjZXNcbiAgdmFyIHNldCA9IHRoaXMuZ2xvYlNldCA9IHRoaXMuYnJhY2VFeHBhbmQoKVxuXG4gIGlmIChvcHRpb25zLmRlYnVnKSB0aGlzLmRlYnVnID0gY29uc29sZS5lcnJvclxuXG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCBzZXQpXG5cbiAgLy8gc3RlcCAzOiBub3cgd2UgaGF2ZSBhIHNldCwgc28gdHVybiBlYWNoIG9uZSBpbnRvIGEgc2VyaWVzIG9mIHBhdGgtcG9ydGlvblxuICAvLyBtYXRjaGluZyBwYXR0ZXJucy5cbiAgLy8gVGhlc2Ugd2lsbCBiZSByZWdleHBzLCBleGNlcHQgaW4gdGhlIGNhc2Ugb2YgXCIqKlwiLCB3aGljaCBpc1xuICAvLyBzZXQgdG8gdGhlIEdMT0JTVEFSIG9iamVjdCBmb3IgZ2xvYnN0YXIgYmVoYXZpb3IsXG4gIC8vIGFuZCB3aWxsIG5vdCBjb250YWluIGFueSAvIGNoYXJhY3RlcnNcbiAgc2V0ID0gdGhpcy5nbG9iUGFydHMgPSBzZXQubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMuc3BsaXQoc2xhc2hTcGxpdClcbiAgfSlcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIC8vIGdsb2IgLS0+IHJlZ2V4cHNcbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbiAocywgc2ksIHNldCkge1xuICAgIHJldHVybiBzLm1hcCh0aGlzLnBhcnNlLCB0aGlzKVxuICB9LCB0aGlzKVxuXG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCBzZXQpXG5cbiAgLy8gZmlsdGVyIG91dCBldmVyeXRoaW5nIHRoYXQgZGlkbid0IGNvbXBpbGUgcHJvcGVybHkuXG4gIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy5pbmRleE9mKGZhbHNlKSA9PT0gLTFcbiAgfSlcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIHRoaXMuc2V0ID0gc2V0XG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUucGFyc2VOZWdhdGUgPSBwYXJzZU5lZ2F0ZVxuZnVuY3Rpb24gcGFyc2VOZWdhdGUgKCkge1xuICB2YXIgcGF0dGVybiA9IHRoaXMucGF0dGVyblxuICB2YXIgbmVnYXRlID0gZmFsc2VcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcbiAgdmFyIG5lZ2F0ZU9mZnNldCA9IDBcblxuICBpZiAob3B0aW9ucy5ub25lZ2F0ZSkgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXR0ZXJuLmxlbmd0aFxuICAgIDsgaSA8IGwgJiYgcGF0dGVybi5jaGFyQXQoaSkgPT09ICchJ1xuICAgIDsgaSsrKSB7XG4gICAgbmVnYXRlID0gIW5lZ2F0ZVxuICAgIG5lZ2F0ZU9mZnNldCsrXG4gIH1cblxuICBpZiAobmVnYXRlT2Zmc2V0KSB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuLnN1YnN0cihuZWdhdGVPZmZzZXQpXG4gIHRoaXMubmVnYXRlID0gbmVnYXRlXG59XG5cbi8vIEJyYWNlIGV4cGFuc2lvbjpcbi8vIGF7YixjfWQgLT4gYWJkIGFjZFxuLy8gYXtiLH1jIC0+IGFiYyBhY1xuLy8gYXswLi4zfWQgLT4gYTBkIGExZCBhMmQgYTNkXG4vLyBhe2IsY3tkLGV9Zn1nIC0+IGFiZyBhY2RmZyBhY2VmZ1xuLy8gYXtiLGN9ZHtlLGZ9ZyAtPiBhYmRlZyBhY2RlZyBhYmRlZyBhYmRmZ1xuLy9cbi8vIEludmFsaWQgc2V0cyBhcmUgbm90IGV4cGFuZGVkLlxuLy8gYXsyLi59YiAtPiBhezIuLn1iXG4vLyBhe2J9YyAtPiBhe2J9Y1xubWluaW1hdGNoLmJyYWNlRXhwYW5kID0gZnVuY3Rpb24gKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJyYWNlRXhwYW5kKHBhdHRlcm4sIG9wdGlvbnMpXG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUuYnJhY2VFeHBhbmQgPSBicmFjZUV4cGFuZFxuXG5mdW5jdGlvbiBicmFjZUV4cGFuZCAocGF0dGVybiwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE1pbmltYXRjaCkge1xuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG4gIH1cblxuICBwYXR0ZXJuID0gdHlwZW9mIHBhdHRlcm4gPT09ICd1bmRlZmluZWQnXG4gICAgPyB0aGlzLnBhdHRlcm4gOiBwYXR0ZXJuXG5cbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuZGVmaW5lZCBwYXR0ZXJuJylcbiAgfVxuXG4gIGlmIChvcHRpb25zLm5vYnJhY2UgfHxcbiAgICAhcGF0dGVybi5tYXRjaCgvXFx7LipcXH0vKSkge1xuICAgIC8vIHNob3J0Y3V0LiBubyBuZWVkIHRvIGV4cGFuZC5cbiAgICByZXR1cm4gW3BhdHRlcm5dXG4gIH1cblxuICByZXR1cm4gZXhwYW5kKHBhdHRlcm4pXG59XG5cbi8vIHBhcnNlIGEgY29tcG9uZW50IG9mIHRoZSBleHBhbmRlZCBzZXQuXG4vLyBBdCB0aGlzIHBvaW50LCBubyBwYXR0ZXJuIG1heSBjb250YWluIFwiL1wiIGluIGl0XG4vLyBzbyB3ZSdyZSBnb2luZyB0byByZXR1cm4gYSAyZCBhcnJheSwgd2hlcmUgZWFjaCBlbnRyeSBpcyB0aGUgZnVsbFxuLy8gcGF0dGVybiwgc3BsaXQgb24gJy8nLCBhbmQgdGhlbiB0dXJuZWQgaW50byBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbi8vIEEgcmVnZXhwIGlzIG1hZGUgYXQgdGhlIGVuZCB3aGljaCBqb2lucyBlYWNoIGFycmF5IHdpdGggYW5cbi8vIGVzY2FwZWQgLywgYW5kIGFub3RoZXIgZnVsbCBvbmUgd2hpY2ggam9pbnMgZWFjaCByZWdleHAgd2l0aCB8LlxuLy9cbi8vIEZvbGxvd2luZyB0aGUgbGVhZCBvZiBCYXNoIDQuMSwgbm90ZSB0aGF0IFwiKipcIiBvbmx5IGhhcyBzcGVjaWFsIG1lYW5pbmdcbi8vIHdoZW4gaXQgaXMgdGhlICpvbmx5KiB0aGluZyBpbiBhIHBhdGggcG9ydGlvbi4gIE90aGVyd2lzZSwgYW55IHNlcmllc1xuLy8gb2YgKiBpcyBlcXVpdmFsZW50IHRvIGEgc2luZ2xlICouICBHbG9ic3RhciBiZWhhdmlvciBpcyBlbmFibGVkIGJ5XG4vLyBkZWZhdWx0LCBhbmQgY2FuIGJlIGRpc2FibGVkIGJ5IHNldHRpbmcgb3B0aW9ucy5ub2dsb2JzdGFyLlxuTWluaW1hdGNoLnByb3RvdHlwZS5wYXJzZSA9IHBhcnNlXG52YXIgU1VCUEFSU0UgPSB7fVxuZnVuY3Rpb24gcGFyc2UgKHBhdHRlcm4sIGlzU3ViKSB7XG4gIGlmIChwYXR0ZXJuLmxlbmd0aCA+IDEwMjQgKiA2NCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhdHRlcm4gaXMgdG9vIGxvbmcnKVxuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICAvLyBzaG9ydGN1dHNcbiAgaWYgKCFvcHRpb25zLm5vZ2xvYnN0YXIgJiYgcGF0dGVybiA9PT0gJyoqJykgcmV0dXJuIEdMT0JTVEFSXG4gIGlmIChwYXR0ZXJuID09PSAnJykgcmV0dXJuICcnXG5cbiAgdmFyIHJlID0gJydcbiAgdmFyIGhhc01hZ2ljID0gISFvcHRpb25zLm5vY2FzZVxuICB2YXIgZXNjYXBpbmcgPSBmYWxzZVxuICAvLyA/ID0+IG9uZSBzaW5nbGUgY2hhcmFjdGVyXG4gIHZhciBwYXR0ZXJuTGlzdFN0YWNrID0gW11cbiAgdmFyIG5lZ2F0aXZlTGlzdHMgPSBbXVxuICB2YXIgc3RhdGVDaGFyXG4gIHZhciBpbkNsYXNzID0gZmFsc2VcbiAgdmFyIHJlQ2xhc3NTdGFydCA9IC0xXG4gIHZhciBjbGFzc1N0YXJ0ID0gLTFcbiAgLy8gLiBhbmQgLi4gbmV2ZXIgbWF0Y2ggYW55dGhpbmcgdGhhdCBkb2Vzbid0IHN0YXJ0IHdpdGggLixcbiAgLy8gZXZlbiB3aGVuIG9wdGlvbnMuZG90IGlzIHNldC5cbiAgdmFyIHBhdHRlcm5TdGFydCA9IHBhdHRlcm4uY2hhckF0KDApID09PSAnLicgPyAnJyAvLyBhbnl0aGluZ1xuICAvLyBub3QgKHN0YXJ0IG9yIC8gZm9sbG93ZWQgYnkgLiBvciAuLiBmb2xsb3dlZCBieSAvIG9yIGVuZClcbiAgOiBvcHRpb25zLmRvdCA/ICcoPyEoPzpefFxcXFxcXC8pXFxcXC57MSwyfSg/OiR8XFxcXFxcLykpJ1xuICA6ICcoPyFcXFxcLiknXG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGZ1bmN0aW9uIGNsZWFyU3RhdGVDaGFyICgpIHtcbiAgICBpZiAoc3RhdGVDaGFyKSB7XG4gICAgICAvLyB3ZSBoYWQgc29tZSBzdGF0ZS10cmFja2luZyBjaGFyYWN0ZXJcbiAgICAgIC8vIHRoYXQgd2Fzbid0IGNvbnN1bWVkIGJ5IHRoaXMgcGFzcy5cbiAgICAgIHN3aXRjaCAoc3RhdGVDaGFyKSB7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgIHJlICs9IHN0YXJcbiAgICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnPyc6XG4gICAgICAgICAgcmUgKz0gcW1hcmtcbiAgICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZSArPSAnXFxcXCcgKyBzdGF0ZUNoYXJcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHNlbGYuZGVidWcoJ2NsZWFyU3RhdGVDaGFyICVqICVqJywgc3RhdGVDaGFyLCByZSlcbiAgICAgIHN0YXRlQ2hhciA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoLCBjXG4gICAgOyAoaSA8IGxlbikgJiYgKGMgPSBwYXR0ZXJuLmNoYXJBdChpKSlcbiAgICA7IGkrKykge1xuICAgIHRoaXMuZGVidWcoJyVzXFx0JXMgJXMgJWonLCBwYXR0ZXJuLCBpLCByZSwgYylcblxuICAgIC8vIHNraXAgb3ZlciBhbnkgdGhhdCBhcmUgZXNjYXBlZC5cbiAgICBpZiAoZXNjYXBpbmcgJiYgcmVTcGVjaWFsc1tjXSkge1xuICAgICAgcmUgKz0gJ1xcXFwnICsgY1xuICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGMpIHtcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICAvLyBjb21wbGV0ZWx5IG5vdCBhbGxvd2VkLCBldmVuIGVzY2FwZWQuXG4gICAgICAgIC8vIFNob3VsZCBhbHJlYWR5IGJlIHBhdGgtc3BsaXQgYnkgbm93LlxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcbiAgICAgICAgZXNjYXBpbmcgPSB0cnVlXG4gICAgICBjb250aW51ZVxuXG4gICAgICAvLyB0aGUgdmFyaW91cyBzdGF0ZUNoYXIgdmFsdWVzXG4gICAgICAvLyBmb3IgdGhlIFwiZXh0Z2xvYlwiIHN0dWZmLlxuICAgICAgY2FzZSAnPyc6XG4gICAgICBjYXNlICcqJzpcbiAgICAgIGNhc2UgJysnOlxuICAgICAgY2FzZSAnQCc6XG4gICAgICBjYXNlICchJzpcbiAgICAgICAgdGhpcy5kZWJ1ZygnJXNcXHQlcyAlcyAlaiA8LS0gc3RhdGVDaGFyJywgcGF0dGVybiwgaSwgcmUsIGMpXG5cbiAgICAgICAgLy8gYWxsIG9mIHRob3NlIGFyZSBsaXRlcmFscyBpbnNpZGUgYSBjbGFzcywgZXhjZXB0IHRoYXRcbiAgICAgICAgLy8gdGhlIGdsb2IgWyFhXSBtZWFucyBbXmFdIGluIHJlZ2V4cFxuICAgICAgICBpZiAoaW5DbGFzcykge1xuICAgICAgICAgIHRoaXMuZGVidWcoJyAgaW4gY2xhc3MnKVxuICAgICAgICAgIGlmIChjID09PSAnIScgJiYgaSA9PT0gY2xhc3NTdGFydCArIDEpIGMgPSAnXidcbiAgICAgICAgICByZSArPSBjXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHN0YXRlQ2hhciwgdGhlbiBpdCBtZWFuc1xuICAgICAgICAvLyB0aGF0IHRoZXJlIHdhcyBzb21ldGhpbmcgbGlrZSAqKiBvciArPyBpbiB0aGVyZS5cbiAgICAgICAgLy8gSGFuZGxlIHRoZSBzdGF0ZUNoYXIsIHRoZW4gcHJvY2VlZCB3aXRoIHRoaXMgb25lLlxuICAgICAgICBzZWxmLmRlYnVnKCdjYWxsIGNsZWFyU3RhdGVDaGFyICVqJywgc3RhdGVDaGFyKVxuICAgICAgICBjbGVhclN0YXRlQ2hhcigpXG4gICAgICAgIHN0YXRlQ2hhciA9IGNcbiAgICAgICAgLy8gaWYgZXh0Z2xvYiBpcyBkaXNhYmxlZCwgdGhlbiArKGFzZGZ8Zm9vKSBpc24ndCBhIHRoaW5nLlxuICAgICAgICAvLyBqdXN0IGNsZWFyIHRoZSBzdGF0ZWNoYXIgKm5vdyosIHJhdGhlciB0aGFuIGV2ZW4gZGl2aW5nIGludG9cbiAgICAgICAgLy8gdGhlIHBhdHRlcm5MaXN0IHN0dWZmLlxuICAgICAgICBpZiAob3B0aW9ucy5ub2V4dCkgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgY29udGludWVcblxuICAgICAgY2FzZSAnKCc6XG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgcmUgKz0gJygnXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGVDaGFyKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwoJ1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBwYXR0ZXJuTGlzdFN0YWNrLnB1c2goe1xuICAgICAgICAgIHR5cGU6IHN0YXRlQ2hhcixcbiAgICAgICAgICBzdGFydDogaSAtIDEsXG4gICAgICAgICAgcmVTdGFydDogcmUubGVuZ3RoLFxuICAgICAgICAgIG9wZW46IHBsVHlwZXNbc3RhdGVDaGFyXS5vcGVuLFxuICAgICAgICAgIGNsb3NlOiBwbFR5cGVzW3N0YXRlQ2hhcl0uY2xvc2VcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbmVnYXRpb24gaXMgKD86KD8hanMpW14vXSopXG4gICAgICAgIHJlICs9IHN0YXRlQ2hhciA9PT0gJyEnID8gJyg/Oig/ISg/OicgOiAnKD86J1xuICAgICAgICB0aGlzLmRlYnVnKCdwbFR5cGUgJWogJWonLCBzdGF0ZUNoYXIsIHJlKVxuICAgICAgICBzdGF0ZUNoYXIgPSBmYWxzZVxuICAgICAgY29udGludWVcblxuICAgICAgY2FzZSAnKSc6XG4gICAgICAgIGlmIChpbkNsYXNzIHx8ICFwYXR0ZXJuTGlzdFN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHJlICs9ICdcXFxcKSdcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgdmFyIHBsID0gcGF0dGVybkxpc3RTdGFjay5wb3AoKVxuICAgICAgICAvLyBuZWdhdGlvbiBpcyAoPzooPyFqcylbXi9dKilcbiAgICAgICAgLy8gVGhlIG90aGVycyBhcmUgKD86PHBhdHRlcm4+KTx0eXBlPlxuICAgICAgICByZSArPSBwbC5jbG9zZVxuICAgICAgICBpZiAocGwudHlwZSA9PT0gJyEnKSB7XG4gICAgICAgICAgbmVnYXRpdmVMaXN0cy5wdXNoKHBsKVxuICAgICAgICB9XG4gICAgICAgIHBsLnJlRW5kID0gcmUubGVuZ3RoXG4gICAgICBjb250aW51ZVxuXG4gICAgICBjYXNlICd8JzpcbiAgICAgICAgaWYgKGluQ2xhc3MgfHwgIXBhdHRlcm5MaXN0U3RhY2subGVuZ3RoIHx8IGVzY2FwaW5nKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFx8J1xuICAgICAgICAgIGVzY2FwaW5nID0gZmFsc2VcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgICByZSArPSAnfCdcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIC8vIHRoZXNlIGFyZSBtb3N0bHkgdGhlIHNhbWUgaW4gcmVnZXhwIGFuZCBnbG9iXG4gICAgICBjYXNlICdbJzpcbiAgICAgICAgLy8gc3dhbGxvdyBhbnkgc3RhdGUtdHJhY2tpbmcgY2hhciBiZWZvcmUgdGhlIFtcbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuXG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwnICsgY1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpbkNsYXNzID0gdHJ1ZVxuICAgICAgICBjbGFzc1N0YXJ0ID0gaVxuICAgICAgICByZUNsYXNzU3RhcnQgPSByZS5sZW5ndGhcbiAgICAgICAgcmUgKz0gY1xuICAgICAgY29udGludWVcblxuICAgICAgY2FzZSAnXSc6XG4gICAgICAgIC8vICBhIHJpZ2h0IGJyYWNrZXQgc2hhbGwgbG9zZSBpdHMgc3BlY2lhbFxuICAgICAgICAvLyAgbWVhbmluZyBhbmQgcmVwcmVzZW50IGl0c2VsZiBpblxuICAgICAgICAvLyAgYSBicmFja2V0IGV4cHJlc3Npb24gaWYgaXQgb2NjdXJzXG4gICAgICAgIC8vICBmaXJzdCBpbiB0aGUgbGlzdC4gIC0tIFBPU0lYLjIgMi44LjMuMlxuICAgICAgICBpZiAoaSA9PT0gY2xhc3NTdGFydCArIDEgfHwgIWluQ2xhc3MpIHtcbiAgICAgICAgICByZSArPSAnXFxcXCcgKyBjXG4gICAgICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgbGVmdCBhIGNsYXNzIG9wZW4uXG4gICAgICAgIC8vIFwiW3otYV1cIiBpcyB2YWxpZCwgZXF1aXZhbGVudCB0byBcIlxcW3otYVxcXVwiXG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgLy8gc3BsaXQgd2hlcmUgdGhlIGxhc3QgWyB3YXMsIG1ha2Ugc3VyZSB3ZSBkb24ndCBoYXZlXG4gICAgICAgICAgLy8gYW4gaW52YWxpZCByZS4gaWYgc28sIHJlLXdhbGsgdGhlIGNvbnRlbnRzIG9mIHRoZVxuICAgICAgICAgIC8vIHdvdWxkLWJlIGNsYXNzIHRvIHJlLXRyYW5zbGF0ZSBhbnkgY2hhcmFjdGVycyB0aGF0XG4gICAgICAgICAgLy8gd2VyZSBwYXNzZWQgdGhyb3VnaCBhcy1pc1xuICAgICAgICAgIC8vIFRPRE86IEl0IHdvdWxkIHByb2JhYmx5IGJlIGZhc3RlciB0byBkZXRlcm1pbmUgdGhpc1xuICAgICAgICAgIC8vIHdpdGhvdXQgYSB0cnkvY2F0Y2ggYW5kIGEgbmV3IFJlZ0V4cCwgYnV0IGl0J3MgdHJpY2t5XG4gICAgICAgICAgLy8gdG8gZG8gc2FmZWx5LiAgRm9yIG5vdywgdGhpcyBpcyBzYWZlIGFuZCB3b3Jrcy5cbiAgICAgICAgICB2YXIgY3MgPSBwYXR0ZXJuLnN1YnN0cmluZyhjbGFzc1N0YXJ0ICsgMSwgaSlcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgUmVnRXhwKCdbJyArIGNzICsgJ10nKVxuICAgICAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgICAgICAvLyBub3QgYSB2YWxpZCBjbGFzcyFcbiAgICAgICAgICAgIHZhciBzcCA9IHRoaXMucGFyc2UoY3MsIFNVQlBBUlNFKVxuICAgICAgICAgICAgcmUgPSByZS5zdWJzdHIoMCwgcmVDbGFzc1N0YXJ0KSArICdcXFxcWycgKyBzcFswXSArICdcXFxcXSdcbiAgICAgICAgICAgIGhhc01hZ2ljID0gaGFzTWFnaWMgfHwgc3BbMV1cbiAgICAgICAgICAgIGluQ2xhc3MgPSBmYWxzZVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5pc2ggdXAgdGhlIGNsYXNzLlxuICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgaW5DbGFzcyA9IGZhbHNlXG4gICAgICAgIHJlICs9IGNcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHN3YWxsb3cgYW55IHN0YXRlIGNoYXIgdGhhdCB3YXNuJ3QgY29uc3VtZWRcbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuXG4gICAgICAgIGlmIChlc2NhcGluZykge1xuICAgICAgICAgIC8vIG5vIG5lZWRcbiAgICAgICAgICBlc2NhcGluZyA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSBpZiAocmVTcGVjaWFsc1tjXVxuICAgICAgICAgICYmICEoYyA9PT0gJ14nICYmIGluQ2xhc3MpKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwnXG4gICAgICAgIH1cblxuICAgICAgICByZSArPSBjXG5cbiAgICB9IC8vIHN3aXRjaFxuICB9IC8vIGZvclxuXG4gIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB3ZSBsZWZ0IGEgY2xhc3Mgb3Blbi5cbiAgLy8gXCJbYWJjXCIgaXMgdmFsaWQsIGVxdWl2YWxlbnQgdG8gXCJcXFthYmNcIlxuICBpZiAoaW5DbGFzcykge1xuICAgIC8vIHNwbGl0IHdoZXJlIHRoZSBsYXN0IFsgd2FzLCBhbmQgZXNjYXBlIGl0XG4gICAgLy8gdGhpcyBpcyBhIGh1Z2UgcGl0YS4gIFdlIG5vdyBoYXZlIHRvIHJlLXdhbGtcbiAgICAvLyB0aGUgY29udGVudHMgb2YgdGhlIHdvdWxkLWJlIGNsYXNzIHRvIHJlLXRyYW5zbGF0ZVxuICAgIC8vIGFueSBjaGFyYWN0ZXJzIHRoYXQgd2VyZSBwYXNzZWQgdGhyb3VnaCBhcy1pc1xuICAgIGNzID0gcGF0dGVybi5zdWJzdHIoY2xhc3NTdGFydCArIDEpXG4gICAgc3AgPSB0aGlzLnBhcnNlKGNzLCBTVUJQQVJTRSlcbiAgICByZSA9IHJlLnN1YnN0cigwLCByZUNsYXNzU3RhcnQpICsgJ1xcXFxbJyArIHNwWzBdXG4gICAgaGFzTWFnaWMgPSBoYXNNYWdpYyB8fCBzcFsxXVxuICB9XG5cbiAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGhhZCBhICsoIHRoaW5nIGF0IHRoZSAqZW5kKlxuICAvLyBvZiB0aGUgcGF0dGVybi5cbiAgLy8gZWFjaCBwYXR0ZXJuIGxpc3Qgc3RhY2sgYWRkcyAzIGNoYXJzLCBhbmQgd2UgbmVlZCB0byBnbyB0aHJvdWdoXG4gIC8vIGFuZCBlc2NhcGUgYW55IHwgY2hhcnMgdGhhdCB3ZXJlIHBhc3NlZCB0aHJvdWdoIGFzLWlzIGZvciB0aGUgcmVnZXhwLlxuICAvLyBHbyB0aHJvdWdoIGFuZCBlc2NhcGUgdGhlbSwgdGFraW5nIGNhcmUgbm90IHRvIGRvdWJsZS1lc2NhcGUgYW55XG4gIC8vIHwgY2hhcnMgdGhhdCB3ZXJlIGFscmVhZHkgZXNjYXBlZC5cbiAgZm9yIChwbCA9IHBhdHRlcm5MaXN0U3RhY2sucG9wKCk7IHBsOyBwbCA9IHBhdHRlcm5MaXN0U3RhY2sucG9wKCkpIHtcbiAgICB2YXIgdGFpbCA9IHJlLnNsaWNlKHBsLnJlU3RhcnQgKyBwbC5vcGVuLmxlbmd0aClcbiAgICB0aGlzLmRlYnVnKCdzZXR0aW5nIHRhaWwnLCByZSwgcGwpXG4gICAgLy8gbWF5YmUgc29tZSBldmVuIG51bWJlciBvZiBcXCwgdGhlbiBtYXliZSAxIFxcLCBmb2xsb3dlZCBieSBhIHxcbiAgICB0YWlsID0gdGFpbC5yZXBsYWNlKC8oKD86XFxcXHsyfSl7MCw2NH0pKFxcXFw/KVxcfC9nLCBmdW5jdGlvbiAoXywgJDEsICQyKSB7XG4gICAgICBpZiAoISQyKSB7XG4gICAgICAgIC8vIHRoZSB8IGlzbid0IGFscmVhZHkgZXNjYXBlZCwgc28gZXNjYXBlIGl0LlxuICAgICAgICAkMiA9ICdcXFxcJ1xuICAgICAgfVxuXG4gICAgICAvLyBuZWVkIHRvIGVzY2FwZSBhbGwgdGhvc2Ugc2xhc2hlcyAqYWdhaW4qLCB3aXRob3V0IGVzY2FwaW5nIHRoZVxuICAgICAgLy8gb25lIHRoYXQgd2UgbmVlZCBmb3IgZXNjYXBpbmcgdGhlIHwgY2hhcmFjdGVyLiAgQXMgaXQgd29ya3Mgb3V0LFxuICAgICAgLy8gZXNjYXBpbmcgYW4gZXZlbiBudW1iZXIgb2Ygc2xhc2hlcyBjYW4gYmUgZG9uZSBieSBzaW1wbHkgcmVwZWF0aW5nXG4gICAgICAvLyBpdCBleGFjdGx5IGFmdGVyIGl0c2VsZi4gIFRoYXQncyB3aHkgdGhpcyB0cmljayB3b3Jrcy5cbiAgICAgIC8vXG4gICAgICAvLyBJIGFtIHNvcnJ5IHRoYXQgeW91IGhhdmUgdG8gc2VlIHRoaXMuXG4gICAgICByZXR1cm4gJDEgKyAkMSArICQyICsgJ3wnXG4gICAgfSlcblxuICAgIHRoaXMuZGVidWcoJ3RhaWw9JWpcXG4gICAlcycsIHRhaWwsIHRhaWwsIHBsLCByZSlcbiAgICB2YXIgdCA9IHBsLnR5cGUgPT09ICcqJyA/IHN0YXJcbiAgICAgIDogcGwudHlwZSA9PT0gJz8nID8gcW1hcmtcbiAgICAgIDogJ1xcXFwnICsgcGwudHlwZVxuXG4gICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgcmUgPSByZS5zbGljZSgwLCBwbC5yZVN0YXJ0KSArIHQgKyAnXFxcXCgnICsgdGFpbFxuICB9XG5cbiAgLy8gaGFuZGxlIHRyYWlsaW5nIHRoaW5ncyB0aGF0IG9ubHkgbWF0dGVyIGF0IHRoZSB2ZXJ5IGVuZC5cbiAgY2xlYXJTdGF0ZUNoYXIoKVxuICBpZiAoZXNjYXBpbmcpIHtcbiAgICAvLyB0cmFpbGluZyBcXFxcXG4gICAgcmUgKz0gJ1xcXFxcXFxcJ1xuICB9XG5cbiAgLy8gb25seSBuZWVkIHRvIGFwcGx5IHRoZSBub2RvdCBzdGFydCBpZiB0aGUgcmUgc3RhcnRzIHdpdGhcbiAgLy8gc29tZXRoaW5nIHRoYXQgY291bGQgY29uY2VpdmFibHkgY2FwdHVyZSBhIGRvdFxuICB2YXIgYWRkUGF0dGVyblN0YXJ0ID0gZmFsc2VcbiAgc3dpdGNoIChyZS5jaGFyQXQoMCkpIHtcbiAgICBjYXNlICcuJzpcbiAgICBjYXNlICdbJzpcbiAgICBjYXNlICcoJzogYWRkUGF0dGVyblN0YXJ0ID0gdHJ1ZVxuICB9XG5cbiAgLy8gSGFjayB0byB3b3JrIGFyb3VuZCBsYWNrIG9mIG5lZ2F0aXZlIGxvb2tiZWhpbmQgaW4gSlNcbiAgLy8gQSBwYXR0ZXJuIGxpa2U6ICouISh4KS4hKHl8eikgbmVlZHMgdG8gZW5zdXJlIHRoYXQgYSBuYW1lXG4gIC8vIGxpa2UgJ2EueHl6Lnl6JyBkb2Vzbid0IG1hdGNoLiAgU28sIHRoZSBmaXJzdCBuZWdhdGl2ZVxuICAvLyBsb29rYWhlYWQsIGhhcyB0byBsb29rIEFMTCB0aGUgd2F5IGFoZWFkLCB0byB0aGUgZW5kIG9mXG4gIC8vIHRoZSBwYXR0ZXJuLlxuICBmb3IgKHZhciBuID0gbmVnYXRpdmVMaXN0cy5sZW5ndGggLSAxOyBuID4gLTE7IG4tLSkge1xuICAgIHZhciBubCA9IG5lZ2F0aXZlTGlzdHNbbl1cblxuICAgIHZhciBubEJlZm9yZSA9IHJlLnNsaWNlKDAsIG5sLnJlU3RhcnQpXG4gICAgdmFyIG5sRmlyc3QgPSByZS5zbGljZShubC5yZVN0YXJ0LCBubC5yZUVuZCAtIDgpXG4gICAgdmFyIG5sTGFzdCA9IHJlLnNsaWNlKG5sLnJlRW5kIC0gOCwgbmwucmVFbmQpXG4gICAgdmFyIG5sQWZ0ZXIgPSByZS5zbGljZShubC5yZUVuZClcblxuICAgIG5sTGFzdCArPSBubEFmdGVyXG5cbiAgICAvLyBIYW5kbGUgbmVzdGVkIHN0dWZmIGxpa2UgKigqLmpzfCEoKi5qc29uKSksIHdoZXJlIG9wZW4gcGFyZW5zXG4gICAgLy8gbWVhbiB0aGF0IHdlIHNob3VsZCAqbm90KiBpbmNsdWRlIHRoZSApIGluIHRoZSBiaXQgdGhhdCBpcyBjb25zaWRlcmVkXG4gICAgLy8gXCJhZnRlclwiIHRoZSBuZWdhdGVkIHNlY3Rpb24uXG4gICAgdmFyIG9wZW5QYXJlbnNCZWZvcmUgPSBubEJlZm9yZS5zcGxpdCgnKCcpLmxlbmd0aCAtIDFcbiAgICB2YXIgY2xlYW5BZnRlciA9IG5sQWZ0ZXJcbiAgICBmb3IgKGkgPSAwOyBpIDwgb3BlblBhcmVuc0JlZm9yZTsgaSsrKSB7XG4gICAgICBjbGVhbkFmdGVyID0gY2xlYW5BZnRlci5yZXBsYWNlKC9cXClbKyo/XT8vLCAnJylcbiAgICB9XG4gICAgbmxBZnRlciA9IGNsZWFuQWZ0ZXJcblxuICAgIHZhciBkb2xsYXIgPSAnJ1xuICAgIGlmIChubEFmdGVyID09PSAnJyAmJiBpc1N1YiAhPT0gU1VCUEFSU0UpIHtcbiAgICAgIGRvbGxhciA9ICckJ1xuICAgIH1cbiAgICB2YXIgbmV3UmUgPSBubEJlZm9yZSArIG5sRmlyc3QgKyBubEFmdGVyICsgZG9sbGFyICsgbmxMYXN0XG4gICAgcmUgPSBuZXdSZVxuICB9XG5cbiAgLy8gaWYgdGhlIHJlIGlzIG5vdCBcIlwiIGF0IHRoaXMgcG9pbnQsIHRoZW4gd2UgbmVlZCB0byBtYWtlIHN1cmVcbiAgLy8gaXQgZG9lc24ndCBtYXRjaCBhZ2FpbnN0IGFuIGVtcHR5IHBhdGggcGFydC5cbiAgLy8gT3RoZXJ3aXNlIGEvKiB3aWxsIG1hdGNoIGEvLCB3aGljaCBpdCBzaG91bGQgbm90LlxuICBpZiAocmUgIT09ICcnICYmIGhhc01hZ2ljKSB7XG4gICAgcmUgPSAnKD89LiknICsgcmVcbiAgfVxuXG4gIGlmIChhZGRQYXR0ZXJuU3RhcnQpIHtcbiAgICByZSA9IHBhdHRlcm5TdGFydCArIHJlXG4gIH1cblxuICAvLyBwYXJzaW5nIGp1c3QgYSBwaWVjZSBvZiBhIGxhcmdlciBwYXR0ZXJuLlxuICBpZiAoaXNTdWIgPT09IFNVQlBBUlNFKSB7XG4gICAgcmV0dXJuIFtyZSwgaGFzTWFnaWNdXG4gIH1cblxuICAvLyBza2lwIHRoZSByZWdleHAgZm9yIG5vbi1tYWdpY2FsIHBhdHRlcm5zXG4gIC8vIHVuZXNjYXBlIGFueXRoaW5nIGluIGl0LCB0aG91Z2gsIHNvIHRoYXQgaXQnbGwgYmVcbiAgLy8gYW4gZXhhY3QgbWF0Y2ggYWdhaW5zdCBhIGZpbGUgZXRjLlxuICBpZiAoIWhhc01hZ2ljKSB7XG4gICAgcmV0dXJuIGdsb2JVbmVzY2FwZShwYXR0ZXJuKVxuICB9XG5cbiAgdmFyIGZsYWdzID0gb3B0aW9ucy5ub2Nhc2UgPyAnaScgOiAnJ1xuICB0cnkge1xuICAgIHZhciByZWdFeHAgPSBuZXcgUmVnRXhwKCdeJyArIHJlICsgJyQnLCBmbGFncylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICAvLyBJZiBpdCB3YXMgYW4gaW52YWxpZCByZWd1bGFyIGV4cHJlc3Npb24sIHRoZW4gaXQgY2FuJ3QgbWF0Y2hcbiAgICAvLyBhbnl0aGluZy4gIFRoaXMgdHJpY2sgbG9va3MgZm9yIGEgY2hhcmFjdGVyIGFmdGVyIHRoZSBlbmQgb2ZcbiAgICAvLyB0aGUgc3RyaW5nLCB3aGljaCBpcyBvZiBjb3Vyc2UgaW1wb3NzaWJsZSwgZXhjZXB0IGluIG11bHRpLWxpbmVcbiAgICAvLyBtb2RlLCBidXQgaXQncyBub3QgYSAvbSByZWdleC5cbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnJC4nKVxuICB9XG5cbiAgcmVnRXhwLl9nbG9iID0gcGF0dGVyblxuICByZWdFeHAuX3NyYyA9IHJlXG5cbiAgcmV0dXJuIHJlZ0V4cFxufVxuXG5taW5pbWF0Y2gubWFrZVJlID0gZnVuY3Rpb24gKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBNaW5pbWF0Y2gocGF0dGVybiwgb3B0aW9ucyB8fCB7fSkubWFrZVJlKClcbn1cblxuTWluaW1hdGNoLnByb3RvdHlwZS5tYWtlUmUgPSBtYWtlUmVcbmZ1bmN0aW9uIG1ha2VSZSAoKSB7XG4gIGlmICh0aGlzLnJlZ2V4cCB8fCB0aGlzLnJlZ2V4cCA9PT0gZmFsc2UpIHJldHVybiB0aGlzLnJlZ2V4cFxuXG4gIC8vIGF0IHRoaXMgcG9pbnQsIHRoaXMuc2V0IGlzIGEgMmQgYXJyYXkgb2YgcGFydGlhbFxuICAvLyBwYXR0ZXJuIHN0cmluZ3MsIG9yIFwiKipcIi5cbiAgLy9cbiAgLy8gSXQncyBiZXR0ZXIgdG8gdXNlIC5tYXRjaCgpLiAgVGhpcyBmdW5jdGlvbiBzaG91bGRuJ3RcbiAgLy8gYmUgdXNlZCwgcmVhbGx5LCBidXQgaXQncyBwcmV0dHkgY29udmVuaWVudCBzb21ldGltZXMsXG4gIC8vIHdoZW4geW91IGp1c3Qgd2FudCB0byB3b3JrIHdpdGggYSByZWdleC5cbiAgdmFyIHNldCA9IHRoaXMuc2V0XG5cbiAgaWYgKCFzZXQubGVuZ3RoKSB7XG4gICAgdGhpcy5yZWdleHAgPSBmYWxzZVxuICAgIHJldHVybiB0aGlzLnJlZ2V4cFxuICB9XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG5cbiAgdmFyIHR3b1N0YXIgPSBvcHRpb25zLm5vZ2xvYnN0YXIgPyBzdGFyXG4gICAgOiBvcHRpb25zLmRvdCA/IHR3b1N0YXJEb3RcbiAgICA6IHR3b1N0YXJOb0RvdFxuICB2YXIgZmxhZ3MgPSBvcHRpb25zLm5vY2FzZSA/ICdpJyA6ICcnXG5cbiAgdmFyIHJlID0gc2V0Lm1hcChmdW5jdGlvbiAocGF0dGVybikge1xuICAgIHJldHVybiBwYXR0ZXJuLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIChwID09PSBHTE9CU1RBUikgPyB0d29TdGFyXG4gICAgICA6ICh0eXBlb2YgcCA9PT0gJ3N0cmluZycpID8gcmVnRXhwRXNjYXBlKHApXG4gICAgICA6IHAuX3NyY1xuICAgIH0pLmpvaW4oJ1xcXFxcXC8nKVxuICB9KS5qb2luKCd8JylcblxuICAvLyBtdXN0IG1hdGNoIGVudGlyZSBwYXR0ZXJuXG4gIC8vIGVuZGluZyBpbiBhICogb3IgKiogd2lsbCBtYWtlIGl0IGxlc3Mgc3RyaWN0LlxuICByZSA9ICdeKD86JyArIHJlICsgJykkJ1xuXG4gIC8vIGNhbiBtYXRjaCBhbnl0aGluZywgYXMgbG9uZyBhcyBpdCdzIG5vdCB0aGlzLlxuICBpZiAodGhpcy5uZWdhdGUpIHJlID0gJ14oPyEnICsgcmUgKyAnKS4qJCdcblxuICB0cnkge1xuICAgIHRoaXMucmVnZXhwID0gbmV3IFJlZ0V4cChyZSwgZmxhZ3MpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgdGhpcy5yZWdleHAgPSBmYWxzZVxuICB9XG4gIHJldHVybiB0aGlzLnJlZ2V4cFxufVxuXG5taW5pbWF0Y2gubWF0Y2ggPSBmdW5jdGlvbiAobGlzdCwgcGF0dGVybiwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgbW0gPSBuZXcgTWluaW1hdGNoKHBhdHRlcm4sIG9wdGlvbnMpXG4gIGxpc3QgPSBsaXN0LmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBtbS5tYXRjaChmKVxuICB9KVxuICBpZiAobW0ub3B0aW9ucy5ub251bGwgJiYgIWxpc3QubGVuZ3RoKSB7XG4gICAgbGlzdC5wdXNoKHBhdHRlcm4pXG4gIH1cbiAgcmV0dXJuIGxpc3Rcbn1cblxuTWluaW1hdGNoLnByb3RvdHlwZS5tYXRjaCA9IG1hdGNoXG5mdW5jdGlvbiBtYXRjaCAoZiwgcGFydGlhbCkge1xuICB0aGlzLmRlYnVnKCdtYXRjaCcsIGYsIHRoaXMucGF0dGVybilcbiAgLy8gc2hvcnQtY2lyY3VpdCBpbiB0aGUgY2FzZSBvZiBidXN0ZWQgdGhpbmdzLlxuICAvLyBjb21tZW50cywgZXRjLlxuICBpZiAodGhpcy5jb21tZW50KSByZXR1cm4gZmFsc2VcbiAgaWYgKHRoaXMuZW1wdHkpIHJldHVybiBmID09PSAnJ1xuXG4gIGlmIChmID09PSAnLycgJiYgcGFydGlhbCkgcmV0dXJuIHRydWVcblxuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIC8vIHdpbmRvd3M6IG5lZWQgdG8gdXNlIC8sIG5vdCBcXFxuICBpZiAocGF0aC5zZXAgIT09ICcvJykge1xuICAgIGYgPSBmLnNwbGl0KHBhdGguc2VwKS5qb2luKCcvJylcbiAgfVxuXG4gIC8vIHRyZWF0IHRoZSB0ZXN0IHBhdGggYXMgYSBzZXQgb2YgcGF0aHBhcnRzLlxuICBmID0gZi5zcGxpdChzbGFzaFNwbGl0KVxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgJ3NwbGl0JywgZilcblxuICAvLyBqdXN0IE9ORSBvZiB0aGUgcGF0dGVybiBzZXRzIGluIHRoaXMuc2V0IG5lZWRzIHRvIG1hdGNoXG4gIC8vIGluIG9yZGVyIGZvciBpdCB0byBiZSB2YWxpZC4gIElmIG5lZ2F0aW5nLCB0aGVuIGp1c3Qgb25lXG4gIC8vIG1hdGNoIG1lYW5zIHRoYXQgd2UgaGF2ZSBmYWlsZWQuXG4gIC8vIEVpdGhlciB3YXksIHJldHVybiBvbiB0aGUgZmlyc3QgaGl0LlxuXG4gIHZhciBzZXQgPSB0aGlzLnNldFxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgJ3NldCcsIHNldClcblxuICAvLyBGaW5kIHRoZSBiYXNlbmFtZSBvZiB0aGUgcGF0aCBieSBsb29raW5nIGZvciB0aGUgbGFzdCBub24tZW1wdHkgc2VnbWVudFxuICB2YXIgZmlsZW5hbWVcbiAgdmFyIGlcbiAgZm9yIChpID0gZi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGZpbGVuYW1lID0gZltpXVxuICAgIGlmIChmaWxlbmFtZSkgYnJlYWtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGF0dGVybiA9IHNldFtpXVxuICAgIHZhciBmaWxlID0gZlxuICAgIGlmIChvcHRpb25zLm1hdGNoQmFzZSAmJiBwYXR0ZXJuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZmlsZSA9IFtmaWxlbmFtZV1cbiAgICB9XG4gICAgdmFyIGhpdCA9IHRoaXMubWF0Y2hPbmUoZmlsZSwgcGF0dGVybiwgcGFydGlhbClcbiAgICBpZiAoaGl0KSB7XG4gICAgICBpZiAob3B0aW9ucy5mbGlwTmVnYXRlKSByZXR1cm4gdHJ1ZVxuICAgICAgcmV0dXJuICF0aGlzLm5lZ2F0ZVxuICAgIH1cbiAgfVxuXG4gIC8vIGRpZG4ndCBnZXQgYW55IGhpdHMuICB0aGlzIGlzIHN1Y2Nlc3MgaWYgaXQncyBhIG5lZ2F0aXZlXG4gIC8vIHBhdHRlcm4sIGZhaWx1cmUgb3RoZXJ3aXNlLlxuICBpZiAob3B0aW9ucy5mbGlwTmVnYXRlKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHRoaXMubmVnYXRlXG59XG5cbi8vIHNldCBwYXJ0aWFsIHRvIHRydWUgdG8gdGVzdCBpZiwgZm9yIGV4YW1wbGUsXG4vLyBcIi9hL2JcIiBtYXRjaGVzIHRoZSBzdGFydCBvZiBcIi8qL2IvKi9kXCJcbi8vIFBhcnRpYWwgbWVhbnMsIGlmIHlvdSBydW4gb3V0IG9mIGZpbGUgYmVmb3JlIHlvdSBydW5cbi8vIG91dCBvZiBwYXR0ZXJuLCB0aGVuIHRoYXQncyBmaW5lLCBhcyBsb25nIGFzIGFsbFxuLy8gdGhlIHBhcnRzIG1hdGNoLlxuTWluaW1hdGNoLnByb3RvdHlwZS5tYXRjaE9uZSA9IGZ1bmN0aW9uIChmaWxlLCBwYXR0ZXJuLCBwYXJ0aWFsKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG5cbiAgdGhpcy5kZWJ1ZygnbWF0Y2hPbmUnLFxuICAgIHsgJ3RoaXMnOiB0aGlzLCBmaWxlOiBmaWxlLCBwYXR0ZXJuOiBwYXR0ZXJuIH0pXG5cbiAgdGhpcy5kZWJ1ZygnbWF0Y2hPbmUnLCBmaWxlLmxlbmd0aCwgcGF0dGVybi5sZW5ndGgpXG5cbiAgZm9yICh2YXIgZmkgPSAwLFxuICAgICAgcGkgPSAwLFxuICAgICAgZmwgPSBmaWxlLmxlbmd0aCxcbiAgICAgIHBsID0gcGF0dGVybi5sZW5ndGhcbiAgICAgIDsgKGZpIDwgZmwpICYmIChwaSA8IHBsKVxuICAgICAgOyBmaSsrLCBwaSsrKSB7XG4gICAgdGhpcy5kZWJ1ZygnbWF0Y2hPbmUgbG9vcCcpXG4gICAgdmFyIHAgPSBwYXR0ZXJuW3BpXVxuICAgIHZhciBmID0gZmlsZVtmaV1cblxuICAgIHRoaXMuZGVidWcocGF0dGVybiwgcCwgZilcblxuICAgIC8vIHNob3VsZCBiZSBpbXBvc3NpYmxlLlxuICAgIC8vIHNvbWUgaW52YWxpZCByZWdleHAgc3R1ZmYgaW4gdGhlIHNldC5cbiAgICBpZiAocCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZVxuXG4gICAgaWYgKHAgPT09IEdMT0JTVEFSKSB7XG4gICAgICB0aGlzLmRlYnVnKCdHTE9CU1RBUicsIFtwYXR0ZXJuLCBwLCBmXSlcblxuICAgICAgLy8gXCIqKlwiXG4gICAgICAvLyBhLyoqL2IvKiovYyB3b3VsZCBtYXRjaCB0aGUgZm9sbG93aW5nOlxuICAgICAgLy8gYS9iL3gveS96L2NcbiAgICAgIC8vIGEveC95L3ovYi9jXG4gICAgICAvLyBhL2IveC9iL3gvY1xuICAgICAgLy8gYS9iL2NcbiAgICAgIC8vIFRvIGRvIHRoaXMsIHRha2UgdGhlIHJlc3Qgb2YgdGhlIHBhdHRlcm4gYWZ0ZXJcbiAgICAgIC8vIHRoZSAqKiwgYW5kIHNlZSBpZiBpdCB3b3VsZCBtYXRjaCB0aGUgZmlsZSByZW1haW5kZXIuXG4gICAgICAvLyBJZiBzbywgcmV0dXJuIHN1Y2Nlc3MuXG4gICAgICAvLyBJZiBub3QsIHRoZSAqKiBcInN3YWxsb3dzXCIgYSBzZWdtZW50LCBhbmQgdHJ5IGFnYWluLlxuICAgICAgLy8gVGhpcyBpcyByZWN1cnNpdmVseSBhd2Z1bC5cbiAgICAgIC8vXG4gICAgICAvLyBhLyoqL2IvKiovYyBtYXRjaGluZyBhL2IveC95L3ovY1xuICAgICAgLy8gLSBhIG1hdGNoZXMgYVxuICAgICAgLy8gLSBkb3VibGVzdGFyXG4gICAgICAvLyAgIC0gbWF0Y2hPbmUoYi94L3kvei9jLCBiLyoqL2MpXG4gICAgICAvLyAgICAgLSBiIG1hdGNoZXMgYlxuICAgICAgLy8gICAgIC0gZG91Ymxlc3RhclxuICAgICAgLy8gICAgICAgLSBtYXRjaE9uZSh4L3kvei9jLCBjKSAtPiBub1xuICAgICAgLy8gICAgICAgLSBtYXRjaE9uZSh5L3ovYywgYykgLT4gbm9cbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoei9jLCBjKSAtPiBub1xuICAgICAgLy8gICAgICAgLSBtYXRjaE9uZShjLCBjKSB5ZXMsIGhpdFxuICAgICAgdmFyIGZyID0gZmlcbiAgICAgIHZhciBwciA9IHBpICsgMVxuICAgICAgaWYgKHByID09PSBwbCkge1xuICAgICAgICB0aGlzLmRlYnVnKCcqKiBhdCB0aGUgZW5kJylcbiAgICAgICAgLy8gYSAqKiBhdCB0aGUgZW5kIHdpbGwganVzdCBzd2FsbG93IHRoZSByZXN0LlxuICAgICAgICAvLyBXZSBoYXZlIGZvdW5kIGEgbWF0Y2guXG4gICAgICAgIC8vIGhvd2V2ZXIsIGl0IHdpbGwgbm90IHN3YWxsb3cgLy54LCB1bmxlc3NcbiAgICAgICAgLy8gb3B0aW9ucy5kb3QgaXMgc2V0LlxuICAgICAgICAvLyAuIGFuZCAuLiBhcmUgKm5ldmVyKiBtYXRjaGVkIGJ5ICoqLCBmb3IgZXhwbG9zaXZlbHlcbiAgICAgICAgLy8gZXhwb25lbnRpYWwgcmVhc29ucy5cbiAgICAgICAgZm9yICg7IGZpIDwgZmw7IGZpKyspIHtcbiAgICAgICAgICBpZiAoZmlsZVtmaV0gPT09ICcuJyB8fCBmaWxlW2ZpXSA9PT0gJy4uJyB8fFxuICAgICAgICAgICAgKCFvcHRpb25zLmRvdCAmJiBmaWxlW2ZpXS5jaGFyQXQoMCkgPT09ICcuJykpIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIG9rLCBsZXQncyBzZWUgaWYgd2UgY2FuIHN3YWxsb3cgd2hhdGV2ZXIgd2UgY2FuLlxuICAgICAgd2hpbGUgKGZyIDwgZmwpIHtcbiAgICAgICAgdmFyIHN3YWxsb3dlZSA9IGZpbGVbZnJdXG5cbiAgICAgICAgdGhpcy5kZWJ1ZygnXFxuZ2xvYnN0YXIgd2hpbGUnLCBmaWxlLCBmciwgcGF0dGVybiwgcHIsIHN3YWxsb3dlZSlcblxuICAgICAgICAvLyBYWFggcmVtb3ZlIHRoaXMgc2xpY2UuICBKdXN0IHBhc3MgdGhlIHN0YXJ0IGluZGV4LlxuICAgICAgICBpZiAodGhpcy5tYXRjaE9uZShmaWxlLnNsaWNlKGZyKSwgcGF0dGVybi5zbGljZShwciksIHBhcnRpYWwpKSB7XG4gICAgICAgICAgdGhpcy5kZWJ1ZygnZ2xvYnN0YXIgZm91bmQgbWF0Y2ghJywgZnIsIGZsLCBzd2FsbG93ZWUpXG4gICAgICAgICAgLy8gZm91bmQgYSBtYXRjaC5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNhbid0IHN3YWxsb3cgXCIuXCIgb3IgXCIuLlwiIGV2ZXIuXG4gICAgICAgICAgLy8gY2FuIG9ubHkgc3dhbGxvdyBcIi5mb29cIiB3aGVuIGV4cGxpY2l0bHkgYXNrZWQuXG4gICAgICAgICAgaWYgKHN3YWxsb3dlZSA9PT0gJy4nIHx8IHN3YWxsb3dlZSA9PT0gJy4uJyB8fFxuICAgICAgICAgICAgKCFvcHRpb25zLmRvdCAmJiBzd2FsbG93ZWUuY2hhckF0KDApID09PSAnLicpKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdkb3QgZGV0ZWN0ZWQhJywgZmlsZSwgZnIsIHBhdHRlcm4sIHByKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyAqKiBzd2FsbG93cyBhIHNlZ21lbnQsIGFuZCBjb250aW51ZS5cbiAgICAgICAgICB0aGlzLmRlYnVnKCdnbG9ic3RhciBzd2FsbG93IGEgc2VnbWVudCwgYW5kIGNvbnRpbnVlJylcbiAgICAgICAgICBmcisrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gbm8gbWF0Y2ggd2FzIGZvdW5kLlxuICAgICAgLy8gSG93ZXZlciwgaW4gcGFydGlhbCBtb2RlLCB3ZSBjYW4ndCBzYXkgdGhpcyBpcyBuZWNlc3NhcmlseSBvdmVyLlxuICAgICAgLy8gSWYgdGhlcmUncyBtb3JlICpwYXR0ZXJuKiBsZWZ0LCB0aGVuXG4gICAgICBpZiAocGFydGlhbCkge1xuICAgICAgICAvLyByYW4gb3V0IG9mIGZpbGVcbiAgICAgICAgdGhpcy5kZWJ1ZygnXFxuPj4+IG5vIG1hdGNoLCBwYXJ0aWFsPycsIGZpbGUsIGZyLCBwYXR0ZXJuLCBwcilcbiAgICAgICAgaWYgKGZyID09PSBmbCkgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIHNvbWV0aGluZyBvdGhlciB0aGFuICoqXG4gICAgLy8gbm9uLW1hZ2ljIHBhdHRlcm5zIGp1c3QgaGF2ZSB0byBtYXRjaCBleGFjdGx5XG4gICAgLy8gcGF0dGVybnMgd2l0aCBtYWdpYyBoYXZlIGJlZW4gdHVybmVkIGludG8gcmVnZXhwcy5cbiAgICB2YXIgaGl0XG4gICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKG9wdGlvbnMubm9jYXNlKSB7XG4gICAgICAgIGhpdCA9IGYudG9Mb3dlckNhc2UoKSA9PT0gcC50b0xvd2VyQ2FzZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaXQgPSBmID09PSBwXG4gICAgICB9XG4gICAgICB0aGlzLmRlYnVnKCdzdHJpbmcgbWF0Y2gnLCBwLCBmLCBoaXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGhpdCA9IGYubWF0Y2gocClcbiAgICAgIHRoaXMuZGVidWcoJ3BhdHRlcm4gbWF0Y2gnLCBwLCBmLCBoaXQpXG4gICAgfVxuXG4gICAgaWYgKCFoaXQpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gTm90ZTogZW5kaW5nIGluIC8gbWVhbnMgdGhhdCB3ZSdsbCBnZXQgYSBmaW5hbCBcIlwiXG4gIC8vIGF0IHRoZSBlbmQgb2YgdGhlIHBhdHRlcm4uICBUaGlzIGNhbiBvbmx5IG1hdGNoIGFcbiAgLy8gY29ycmVzcG9uZGluZyBcIlwiIGF0IHRoZSBlbmQgb2YgdGhlIGZpbGUuXG4gIC8vIElmIHRoZSBmaWxlIGVuZHMgaW4gLywgdGhlbiBpdCBjYW4gb25seSBtYXRjaCBhXG4gIC8vIGEgcGF0dGVybiB0aGF0IGVuZHMgaW4gLywgdW5sZXNzIHRoZSBwYXR0ZXJuIGp1c3RcbiAgLy8gZG9lc24ndCBoYXZlIGFueSBtb3JlIGZvciBpdC4gQnV0LCBhL2IvIHNob3VsZCAqbm90KlxuICAvLyBtYXRjaCBcImEvYi8qXCIsIGV2ZW4gdGhvdWdoIFwiXCIgbWF0Y2hlcyBhZ2FpbnN0IHRoZVxuICAvLyBbXi9dKj8gcGF0dGVybiwgZXhjZXB0IGluIHBhcnRpYWwgbW9kZSwgd2hlcmUgaXQgbWlnaHRcbiAgLy8gc2ltcGx5IG5vdCBiZSByZWFjaGVkIHlldC5cbiAgLy8gSG93ZXZlciwgYS9iLyBzaG91bGQgc3RpbGwgc2F0aXNmeSBhLypcblxuICAvLyBub3cgZWl0aGVyIHdlIGZlbGwgb2ZmIHRoZSBlbmQgb2YgdGhlIHBhdHRlcm4sIG9yIHdlJ3JlIGRvbmUuXG4gIGlmIChmaSA9PT0gZmwgJiYgcGkgPT09IHBsKSB7XG4gICAgLy8gcmFuIG91dCBvZiBwYXR0ZXJuIGFuZCBmaWxlbmFtZSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgIC8vIGFuIGV4YWN0IGhpdCFcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2UgaWYgKGZpID09PSBmbCkge1xuICAgIC8vIHJhbiBvdXQgb2YgZmlsZSwgYnV0IHN0aWxsIGhhZCBwYXR0ZXJuIGxlZnQuXG4gICAgLy8gdGhpcyBpcyBvayBpZiB3ZSdyZSBkb2luZyB0aGUgbWF0Y2ggYXMgcGFydCBvZlxuICAgIC8vIGEgZ2xvYiBmcyB0cmF2ZXJzYWwuXG4gICAgcmV0dXJuIHBhcnRpYWxcbiAgfSBlbHNlIGlmIChwaSA9PT0gcGwpIHtcbiAgICAvLyByYW4gb3V0IG9mIHBhdHRlcm4sIHN0aWxsIGhhdmUgZmlsZSBsZWZ0LlxuICAgIC8vIHRoaXMgaXMgb25seSBhY2NlcHRhYmxlIGlmIHdlJ3JlIG9uIHRoZSB2ZXJ5IGxhc3RcbiAgICAvLyBlbXB0eSBzZWdtZW50IG9mIGEgZmlsZSB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAgLy8gYS8qIHNob3VsZCBtYXRjaCBhL2IvXG4gICAgdmFyIGVtcHR5RmlsZUVuZCA9IChmaSA9PT0gZmwgLSAxKSAmJiAoZmlsZVtmaV0gPT09ICcnKVxuICAgIHJldHVybiBlbXB0eUZpbGVFbmRcbiAgfVxuXG4gIC8vIHNob3VsZCBiZSB1bnJlYWNoYWJsZS5cbiAgdGhyb3cgbmV3IEVycm9yKCd3dGY/Jylcbn1cblxuLy8gcmVwbGFjZSBzdHVmZiBsaWtlIFxcKiB3aXRoICpcbmZ1bmN0aW9uIGdsb2JVbmVzY2FwZSAocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9cXFxcKC4pL2csICckMScpXG59XG5cbmZ1bmN0aW9uIHJlZ0V4cEVzY2FwZSAocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpXG59XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cbnZhciBzcGxpdFBhdGhSZSA9XG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XG52YXIgc3BsaXRQYXRoID0gZnVuY3Rpb24oZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xufTtcblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgcmVzdWx0ID0gc3BsaXRQYXRoKHBhdGgpLFxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcblxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxuICAgIHJldHVybiAnLic7XG4gIH1cblxuICBpZiAoZGlyKSB7XG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHJldHVybiByb290ICsgZGlyO1xufTtcblxuXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gc3BsaXRQYXRoKHBhdGgpWzJdO1xuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aChwYXRoKVszXTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxudmFyIHNjcmlwdCA9IHtcbiAgICBwcm9wczoge1xuICAgICAgICAvLyBpbWFnZXMgPSBbeyBuYW1lOidpbWFnZTEuanBnJywgYWx0OidSZWR3b29kcycsIGZpbHRlcjonbmF0dXJlJyB9LCAuLi5dXG4gICAgICAgIGltYWdlczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAvLyBVc2VkIHRvIGRpc3BsYXkgYSBzdWJzZXQgb2YgcGhvdG9zLiBJZiB1c2VkLCBpbWFnZXMgYXJyYXkgbXVzdCBjb250YWluIGEgcHJvcGVydHlcbiAgICAgICAgLy8gdGl0bGVkICdmaWx0ZXInIHdoaWNoIGNvbnRhaW5zIHRoZSBkZXNpcmVkIGZpbHRlciBzdHJpbmdcbiAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnYWxsJ1xuICAgICAgICB9LFxuICAgICAgICAvLyBVc2VkIGlmIGltYWdlcyBhcmUgbG9jYXRlZCBpbiBhIHNlcGFyYXRlIGZvbGRlciAoZS5nLiAnL2ltYWdlcy8nKVxuICAgICAgICBkaXJlY3Rvcnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFVzZWQgdG8gc2V0IHRoZSBkdXJhdGlvbiBpbiBtaWxpc2Vjb25kcyBvZiBrZXkvbW91c2UgaW5hY3Rpdml0eSBiZWZvcmUgY2FwdGlvblxuICAgICAgICAvLyBhbmQgYXJyb3dzIGRpc2FwcGVhclxuICAgICAgICB0aW1lb3V0RHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMwMDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLCAgICAgICAgLy8gTGlnaHRib3ggbm90IHZpc2libGUgYnkgZGVmYXVsdFxuICAgICAgICAgICAgY29udHJvbHNWaXNpYmxlOiB0cnVlLCAvLyBMaWdodGJveCBjb250cm9scyAoYXJyb3dzLCBjYXB0aW9uLCBjbG9zZSBidXR0b24pXG4gICAgICAgICAgICBpbmRleDogMCwgICAgICAgICAgICAgIC8vIEluZGV4IGluZGljYXRlcyB3aGljaCBwaG90byB0byBkaXNwbGF5LiBEZWZhdWx0IHRvIDFzdCBwaG90b1xuICAgICAgICAgICAgdGltZXI6IG51bGwgICAgICAgICAgLy8gVGltZXIgdG8gc2hvdy9oaWRlIGxpZ2h0Ym94IGNvbnRyb2xzICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcbiAgICB9LFxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzaG93OiBmdW5jdGlvbiBzaG93KGltYWdlTmFtZSkge1xuICAgICAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBpbWFnZSBwYXNzZWQgdG8gTGlnaHRib3hcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmZpbHRlcmVkSW1hZ2VzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzJDEuZmlsdGVyZWRJbWFnZXNbaV0ubmFtZSA9PSBpbWFnZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcyQxLmluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dGhhdC5jb250cm9sc1Zpc2libGUgPSBmYWxzZTt9LCB0aGF0LnRpbWVvdXREdXJhdGlvbik7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWROZXh0SW1hZ2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc19uZXh0OiBmdW5jdGlvbiBoYXNfbmV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIDEgPCB0aGlzLmZpbHRlcmVkSW1hZ2VzLmxlbmd0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc19wcmV2OiBmdW5jdGlvbiBoYXNfcHJldigpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5pbmRleCAtIDEgPj0gMCk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXY6IGZ1bmN0aW9uIHByZXYoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNfcHJldigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzX25leHQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZWxvYWROZXh0SW1hZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAga2V5RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24ga2V5RXZlbnRMaXN0ZW5lcihlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dGhhdC5jb250cm9sc1Zpc2libGUgPSBmYWxzZTt9LCB0aGF0LnRpbWVvdXREdXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFRoaXMgZXZlbnQgc2hvd3MgdGhlIGFycm93cyBhbmQgY2FwdGlvbiBvbiB0aGUgbGlnaHRib3ggd2hlbiB0aGUgbW91c2UgaXMgbW92ZWQgb3IgY2xpY2tlZC5cbiAgICAgICAgLy8gQWxzbyB1c2VkIGZvciB0b3VjaCBldmVudHMgb24gdG91Y2hzY3JlZW4gZGV2aWNlcy4gVGhlIGVsZW1lbnRzIGFyZSBzZXQgdG8gZGlzYXBwZWFyXG4gICAgICAgIC8vIGFmdGVyIGEgZ2l2ZW4gZHVyYXRpb24gdmlhIGEgdGltZXIuXG4gICAgICAgIG1vdXNlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gbW91c2VFdmVudExpc3RlbmVyKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHt0aGF0LmNvbnRyb2xzVmlzaWJsZSA9IGZhbHNlO30sIHRoYXQudGltZW91dER1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJlbG9hZE5leHRJbWFnZTogZnVuY3Rpb24gcHJlbG9hZE5leHRJbWFnZSAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNfbmV4dCgpKXtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBfaW1nLnNyYyA9IHRoaXMuZGlyZWN0b3J5ICsgdGhpcy5maWx0ZXJlZEltYWdlc1t0aGlzLmluZGV4ICsgMV0ubmFtZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgZmlsdGVyZWRJbWFnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGF0LmZpbHRlciA9PT0gJ2FsbCcgfHwgIXRoYXQuZmlsdGVyLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuaW1hZ2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuaW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5maWx0ZXIgPT09IHRoYXQuZmlsdGVyO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKiBzY3JpcHQgKi9cbiAgICAgICAgICAgIHZhciBfX3Z1ZV9zY3JpcHRfXyA9IHNjcmlwdDtcbiAgICAgICAgICAgIFxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV9yZW5kZXJfXyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpcztcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50O1xuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2g7XG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwibGlnaHRib3gtZmFkZVwiIH0gfSwgW1xuICAgICAgICBfdm0udmlzaWJsZVxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWdodGJveFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGlkZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdG91Y2hkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhpZGUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlnaHRib3gtY2xvc2VcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oaWRlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhpZGUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLDl1wiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWdodGJveC1hcnJvdyBsaWdodGJveC1hcnJvdy1sZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmV2KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJldigkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImxpZ2h0Ym94LWZhZGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmhhc19wcmV2KCkgJiYgX3ZtLmNvbnRyb2xzVmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGFzX3ByZXYoKSAmJiBjb250cm9sc1Zpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlnaHRib3gtYXJyb3ctbGVmdC1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiY2lyY2xlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeDogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5OiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwicmdiYSgyMCwgMjAsIDIwLCAwLjQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNMTUuNDEgMTYuMDlsLTQuNTgtNC41OSA0LjU4LTQuNTlMMTQgNS41bC02IDYgNiA2elwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkOiBcIk0wLS41aDI0djI0SDB6XCIsIGZpbGw6IFwibm9uZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWdodGJveC1hcnJvdyBsaWdodGJveC1hcnJvdy1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmV4dCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaGRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5leHQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJsaWdodGJveC1mYWRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5oYXNfbmV4dCgpICYmIF92bS5jb250cm9sc1Zpc2libGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImhhc19uZXh0KCkgJiYgY29udHJvbHNWaXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpZ2h0Ym94LWFycm93LXJpZ2h0LWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJjaXJjbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4OiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3k6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJyZ2JhKDIwLCAyMCwgMjAsIDAuNClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk04LjU5IDE2LjM0bDQuNTgtNC41OS00LjU4LTQuNTlMMTAgNS43NWw2IDYtNiA2elwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkOiBcIk0wLS4yNWgyNHYyNEgwelwiLCBmaWxsOiBcIm5vbmVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwibGlnaHRib3gtZmFkZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29udHJvbHNWaXNpYmxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbHRlcmVkSW1hZ2VzW192bS5pbmRleF0uYWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udHJvbHNWaXNpYmxlICYmIGZpbHRlcmVkSW1hZ2VzW2luZGV4XS5hbHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlnaHRib3gtY2FwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IHVuc2VsZWN0YWJsZTogXCJvblwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZmlsdGVyZWRJbWFnZXNbX3ZtLmluZGV4XS5hbHQpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlnaHRib3gtbWFpblwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhpZGUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGlkZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpZ2h0Ym94LWltYWdlLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCJsaWdodGJveC1zbGlkZVwiLCBtb2RlOiBcIm91dC1pblwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlnaHRib3gtaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVybChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpcmVjdG9yeSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbHRlcmVkSW1hZ2VzW192bS5pbmRleF0ubmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59O1xudmFyIF9fdnVlX3N0YXRpY1JlbmRlckZuc19fID0gW107XG5fX3Z1ZV9yZW5kZXJfXy5fd2l0aFN0cmlwcGVkID0gdHJ1ZTtcblxuICAvKiBzdHlsZSAqL1xuICB2YXIgX192dWVfaW5qZWN0X3N0eWxlc19fID0gZnVuY3Rpb24gKGluamVjdCkge1xuICAgIGlmICghaW5qZWN0KSB7IHJldHVybiB9XG4gICAgaW5qZWN0KFwiZGF0YS12LTA4NjFkNjVlXzBcIiwgeyBzb3VyY2U6IFwiXFxuLmxpZ2h0Ym94IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDIwMDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcXG59XFxuLmxpZ2h0Ym94LWNsb3NlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAyMTA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmxpZ2h0Ym94LW1haW4ge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmxpZ2h0Ym94LWFycm93IHtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuLmxpZ2h0Ym94LWFycm93LXJpZ2h0IHsgcmlnaHQ6IDA7XFxufVxcbi5saWdodGJveC1hcnJvdy1sZWZ0IHsgbGVmdDogMDtcXG59XFxuLmxpZ2h0Ym94LWltYWdlLWNvbnRhaW5lciB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIC13ZWJraXQtZmxleDogMTtcXG4gICAgLW1zLWZsZXg6IDE7XFxuICAgIGZsZXg6IDE7XFxufVxcbi5saWdodGJveC1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG59XFxuLmxpZ2h0Ym94LWNhcHRpb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggcmdiKDI2LCAyNiwgMjYpO1xcbn1cXG4ubGlnaHRib3gtY2FwdGlvbiBzcGFuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4ubGlnaHRib3gtc2xpZGUtZW50ZXItYWN0aXZlLFxcbi5saWdodGJveC1zbGlkZS1sZWF2ZS1hY3RpdmUge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbn1cXG4ubGlnaHRib3gtc2xpZGUtZW50ZXIge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4ubGlnaHRib3gtc2xpZGUtbGVhdmUtdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4ubGlnaHRib3gtZmFkZS1lbnRlci1hY3RpdmUsXFxuLmxpZ2h0Ym94LWZhZGUtbGVhdmUtYWN0aXZlIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG59XFxuLmxpZ2h0Ym94LWZhZGUtZW50ZXIsXFxuLmxpZ2h0Ym94LWZhZGUtbGVhdmUtdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5cIiwgbWFwOiB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYW5kcmV3L0RvY3VtZW50cy9HaXRIdWIvdnVlLWltYWdlLWxpZ2h0Ym94L3NyYy9saWdodGJveC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdNQTtJQUNBLGdCQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSw4QkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsY0FBQTtJQUNBLHdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtDQUNBO0FBRUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLGNBQUE7SUFDQSx3QkFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtDQUNBO0FBRUEsd0JBQUEsU0FBQTtDQUFBO0FBRUEsdUJBQUEsUUFBQTtDQUFBO0FBRUE7SUFDQSxvQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxRQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EseUJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5Q0FBQTtDQUNBO0FBRUE7SUFDQSxvQkFBQTtJQUNBLG9DQUFBO0lBQ0Esa0JBQUE7SUFDQSwwQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7O0lBRUEsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EscUNBQUE7SUFDQSxpQ0FBQTtJQUNBLDZCQUFBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7SUFDQSxzQ0FBQTtJQUNBLGtDQUFBO0lBQ0EsOEJBQUE7SUFDQSxXQUFBO0NBQ0E7QUFFQTs7SUFFQSwwQkFBQTtDQUNBO0FBRUE7O0lBRUEsV0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJsaWdodGJveC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cXFwibGlnaHRib3gtZmFkZVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlnaHRib3hcXFwiIHYtaWY9XFxcInZpc2libGVcXFwiIEBtb3VzZWRvd24uc3RvcD1cXFwiaGlkZVxcXCIgQHRvdWNoZG93bi5zdG9wPVxcXCJoaWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpZ2h0Ym94LWNsb3NlXFxcIiBAbW91c2Vkb3duLnN0b3A9XFxcImhpZGVcXFwiIEB0b3VjaGRvd24uc3RvcD1cXFwiaGlkZVxcXCI+JnRpbWVzOzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlnaHRib3gtYXJyb3cgbGlnaHRib3gtYXJyb3ctbGVmdFxcXCIgQG1vdXNlZG93bi5zdG9wLnByZXZlbnQ9XFxcInByZXZcXFwiIEB0b3VjaGRvd24uc3RvcC5wcmV2ZW50PVxcXCJwcmV2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJsaWdodGJveC1mYWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlnaHRib3gtYXJyb3ctbGVmdC1pY29uXFxcIiB2LXNob3c9XFxcImhhc19wcmV2KCkgJiYgY29udHJvbHNWaXNpYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB3aWR0aD1cXFwiMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiMTJcXFwiIGN5PVxcXCIxMlxcXCIgcj1cXFwiMTJcXFwiIGZpbGw9XFxcInJnYmEoMjAsIDIwLCAyMCwgMC40KVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVxcXCJNMTUuNDEgMTYuMDlsLTQuNTgtNC41OSA0LjU4LTQuNTlMMTQgNS41bC02IDYgNiA2elxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVxcXCJNMC0uNWgyNHYyNEgwelxcXCIgZmlsbD1cXFwibm9uZVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlnaHRib3gtYXJyb3cgbGlnaHRib3gtYXJyb3ctcmlnaHRcXFwiIEBtb3VzZWRvd24uc3RvcC5wcmV2ZW50PVxcXCJuZXh0XFxcIiBAdG91Y2hkb3duLnN0b3AucHJldmVudD1cXFwibmV4dFxcXCIgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XFxcImxpZ2h0Ym94LWZhZGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaWdodGJveC1hcnJvdy1yaWdodC1pY29uXFxcIiB2LXNob3c9XFxcImhhc19uZXh0KCkgJiYgY29udHJvbHNWaXNpYmxlXFxcIiA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgd2lkdGg9XFxcIjI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEyXFxcIiBmaWxsPVxcXCJyZ2JhKDIwLCAyMCwgMjAsIDAuNClcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cXFwiTTguNTkgMTYuMzRsNC41OC00LjU5LTQuNTgtNC41OUwxMCA1Ljc1bDYgNi02IDZ6XFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVxcXCJNMC0uMjVoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XFxcImxpZ2h0Ym94LWZhZGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpZ2h0Ym94LWNhcHRpb25cXFwiIHYtc2hvdz1cXFwiY29udHJvbHNWaXNpYmxlICYmIGZpbHRlcmVkSW1hZ2VzW2luZGV4XS5hbHRcXFwiIEBtb3VzZWRvd24uc3RvcCBAdG91Y2hkb3duLnN0b3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHVuc2VsZWN0YWJsZT1cXFwib25cXFwiPnt7IGZpbHRlcmVkSW1hZ2VzW2luZGV4XS5hbHQgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpZ2h0Ym94LW1haW5cXFwiIEBtb3VzZWRvd24uc3RvcD1cXFwiaGlkZVxcXCIgQHRvdWNoZG93bi5zdG9wPVxcXCJoaWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpZ2h0Ym94LWltYWdlLWNvbnRhaW5lclxcXCIgQG1vdXNlZG93bi5zdG9wIEB0b3VjaGRvd24uc3RvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJsaWdodGJveC1zbGlkZVxcXCIgbW9kZT1cXFwib3V0LWluXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlnaHRib3gtaW1hZ2VcXFwiIDprZXk9XFxcImluZGV4XFxcIiA6c3R5bGU9XFxcInsgJ2JhY2tncm91bmRJbWFnZSc6J3VybCgnICsgZGlyZWN0b3J5ICsgZmlsdGVyZWRJbWFnZXNbaW5kZXhdLm5hbWUgKyAnKSd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgLy8gaW1hZ2VzID0gW3sgbmFtZTonaW1hZ2UxLmpwZycsIGFsdDonUmVkd29vZHMnLCBmaWx0ZXI6J25hdHVyZScgfSwgLi4uXVxcbiAgICAgICAgICAgIGltYWdlczoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIC8vIFVzZWQgdG8gZGlzcGxheSBhIHN1YnNldCBvZiBwaG90b3MuIElmIHVzZWQsIGltYWdlcyBhcnJheSBtdXN0IGNvbnRhaW4gYSBwcm9wZXJ0eVxcbiAgICAgICAgICAgIC8vIHRpdGxlZCAnZmlsdGVyJyB3aGljaCBjb250YWlucyB0aGUgZGVzaXJlZCBmaWx0ZXIgc3RyaW5nXFxuICAgICAgICAgICAgZmlsdGVyOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2FsbCdcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIC8vIFVzZWQgaWYgaW1hZ2VzIGFyZSBsb2NhdGVkIGluIGEgc2VwYXJhdGUgZm9sZGVyIChlLmcuICcvaW1hZ2VzLycpXFxuICAgICAgICAgICAgZGlyZWN0b3J5OiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIC8vIFVzZWQgdG8gc2V0IHRoZSBkdXJhdGlvbiBpbiBtaWxpc2Vjb25kcyBvZiBrZXkvbW91c2UgaW5hY3Rpdml0eSBiZWZvcmUgY2FwdGlvblxcbiAgICAgICAgICAgIC8vIGFuZCBhcnJvd3MgZGlzYXBwZWFyXFxuICAgICAgICAgICAgdGltZW91dER1cmF0aW9uOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMzAwMFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLCAgICAgICAgLy8gTGlnaHRib3ggbm90IHZpc2libGUgYnkgZGVmYXVsdFxcbiAgICAgICAgICAgICAgICBjb250cm9sc1Zpc2libGU6IHRydWUsIC8vIExpZ2h0Ym94IGNvbnRyb2xzIChhcnJvd3MsIGNhcHRpb24sIGNsb3NlIGJ1dHRvbilcXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsICAgICAgICAgICAgICAvLyBJbmRleCBpbmRpY2F0ZXMgd2hpY2ggcGhvdG8gdG8gZGlzcGxheS4gRGVmYXVsdCB0byAxc3QgcGhvdG9cXG4gICAgICAgICAgICAgICAgdGltZXI6IG51bGwgICAgICAgICAgLy8gVGltZXIgdG8gc2hvdy9oaWRlIGxpZ2h0Ym94IGNvbnRyb2xzICAgICAgICAgICBcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbW91bnRlZCgpIHtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RXZlbnRMaXN0ZW5lcik7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGRlc3Ryb3llZCgpIHtcXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RXZlbnRMaXN0ZW5lcik7XFxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBzaG93KGltYWdlTmFtZSkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzVmlzaWJsZSA9IHRydWU7XFxuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcXG5cXG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGltYWdlIHBhc3NlZCB0byBMaWdodGJveFxcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5maWx0ZXJlZEltYWdlcy5sZW5ndGg7IGkrKyl7XFxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZpbHRlcmVkSW1hZ2VzW2ldLm5hbWUgPT0gaW1hZ2VOYW1lKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IGk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHt0aGF0LmNvbnRyb2xzVmlzaWJsZSA9IGZhbHNlfSwgdGhhdC50aW1lb3V0RHVyYXRpb24pO1xcbiAgICAgICAgICAgICAgICB0aGlzLnByZWxvYWROZXh0SW1hZ2UoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGhpZGUoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgaGFzX25leHQoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIDEgPCB0aGlzLmZpbHRlcmVkSW1hZ2VzLmxlbmd0aCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBoYXNfcHJldigpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4IC0gMSA+PSAwKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHByZXYoKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc19wcmV2KCkpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggLT0gMTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgbmV4dCgpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzX25leHQoKSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSAxO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVsb2FkTmV4dEltYWdlKCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGtleUV2ZW50TGlzdGVuZXIoZSkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzVmlzaWJsZSA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHt0aGF0LmNvbnRyb2xzVmlzaWJsZSA9IGZhbHNlfSwgdGhhdC50aW1lb3V0RHVyYXRpb24pO1xcblxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2KCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnICc6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRXNjYXBlJzpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAvLyBUaGlzIGV2ZW50IHNob3dzIHRoZSBhcnJvd3MgYW5kIGNhcHRpb24gb24gdGhlIGxpZ2h0Ym94IHdoZW4gdGhlIG1vdXNlIGlzIG1vdmVkIG9yIGNsaWNrZWQuXFxuICAgICAgICAgICAgLy8gQWxzbyB1c2VkIGZvciB0b3VjaCBldmVudHMgb24gdG91Y2hzY3JlZW4gZGV2aWNlcy4gVGhlIGVsZW1lbnRzIGFyZSBzZXQgdG8gZGlzYXBwZWFyXFxuICAgICAgICAgICAgLy8gYWZ0ZXIgYSBnaXZlbiBkdXJhdGlvbiB2aWEgYSB0aW1lci5cXG4gICAgICAgICAgICBtb3VzZUV2ZW50TGlzdGVuZXIoZSkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzVmlzaWJsZSA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHt0aGF0LmNvbnRyb2xzVmlzaWJsZSA9IGZhbHNlfSwgdGhhdC50aW1lb3V0RHVyYXRpb24pO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBwcmVsb2FkTmV4dEltYWdlICgpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzX25leHQoKSl7XFxuICAgICAgICAgICAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfaW1nID0gbmV3IEltYWdlKCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgX2ltZy5zcmMgPSB0aGlzLmRpcmVjdG9yeSArIHRoaXMuZmlsdGVyZWRJbWFnZXNbdGhpcy5pbmRleCArIDFdLm5hbWU7XFxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wdXRlZDoge1xcbiAgICAgICAgICAgIGZpbHRlcmVkSW1hZ2VzOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcXG4gICAgICAgICAgICAgICAgaWYgKHRoYXQuZmlsdGVyID09PSAnYWxsJyB8fCAhdGhhdC5maWx0ZXIubGVuZ3RoKXtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LmltYWdlcztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LmltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5maWx0ZXIgPT09IHRoYXQuZmlsdGVyO1xcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgLmxpZ2h0Ym94IHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC45KTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB6LWluZGV4OiAyMDA7XFxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1jbG9zZSB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiAyMTA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHdpZHRoOiA0cmVtO1xcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1tYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LWFycm93IHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LWFycm93LXJpZ2h0IHsgcmlnaHQ6IDA7IH1cXG4gICAgXFxuICAgIC5saWdodGJveC1hcnJvdy1sZWZ0IHsgbGVmdDogMDt9XFxuXFxuICAgIC5saWdodGJveC1pbWFnZS1jb250YWluZXIge1xcbiAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LWltYWdlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LWNhcHRpb24ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAxNXB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggcmdiKDI2LCAyNiwgMjYpO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1jYXB0aW9uIHNwYW4ge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xcbiAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XFxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1zbGlkZS1lbnRlci1hY3RpdmUsXFxuICAgIC5saWdodGJveC1zbGlkZS1sZWF2ZS1hY3RpdmUge1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtc2xpZGUtZW50ZXIge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtc2xpZGUtbGVhdmUtdG8ge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtZmFkZS1lbnRlci1hY3RpdmUsXFxuICAgIC5saWdodGJveC1mYWRlLWxlYXZlLWFjdGl2ZSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1mYWRlLWVudGVyLFxcbiAgICAubGlnaHRib3gtZmFkZS1sZWF2ZS10byB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIFxcbjwvc3R5bGU+XCJdfSwgbWVkaWE6IHVuZGVmaW5lZCB9KTtcblxuICB9O1xuICAvKiBzY29wZWQgKi9cbiAgdmFyIF9fdnVlX3Njb3BlX2lkX18gPSB1bmRlZmluZWQ7XG4gIC8qIG1vZHVsZSBpZGVudGlmaWVyICovXG4gIHZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gdW5kZWZpbmVkO1xuICAvKiBmdW5jdGlvbmFsIHRlbXBsYXRlICovXG4gIHZhciBfX3Z1ZV9pc19mdW5jdGlvbmFsX3RlbXBsYXRlX18gPSBmYWxzZTtcbiAgLyogY29tcG9uZW50IG5vcm1hbGl6ZXIgKi9cbiAgZnVuY3Rpb24gX192dWVfbm9ybWFsaXplX18oXG4gICAgdGVtcGxhdGUsIHN0eWxlLCBzY3JpcHQkJDEsXG4gICAgc2NvcGUsIGZ1bmN0aW9uYWwsIG1vZHVsZUlkZW50aWZpZXIsXG4gICAgY3JlYXRlSW5qZWN0b3IsIGNyZWF0ZUluamVjdG9yU1NSXG4gICkge1xuICAgIHZhciBjb21wb25lbnQgPSAodHlwZW9mIHNjcmlwdCQkMSA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdCQkMS5vcHRpb25zIDogc2NyaXB0JCQxKSB8fCB7fTtcblxuICAgIC8vIEZvciBzZWN1cml0eSBjb25jZXJucywgd2UgdXNlIG9ubHkgYmFzZSBuYW1lIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICBjb21wb25lbnQuX19maWxlID0gXCIvVXNlcnMvYW5kcmV3L0RvY3VtZW50cy9HaXRIdWIvdnVlLWltYWdlLWxpZ2h0Ym94L3NyYy9saWdodGJveC52dWVcIjtcblxuICAgIGlmICghY29tcG9uZW50LnJlbmRlcikge1xuICAgICAgY29tcG9uZW50LnJlbmRlciA9IHRlbXBsYXRlLnJlbmRlcjtcbiAgICAgIGNvbXBvbmVudC5zdGF0aWNSZW5kZXJGbnMgPSB0ZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gICAgICBjb21wb25lbnQuX2NvbXBpbGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKGZ1bmN0aW9uYWwpIHsgY29tcG9uZW50LmZ1bmN0aW9uYWwgPSB0cnVlOyB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50Ll9zY29wZUlkID0gc2NvcGU7XG5cbiAgICB7XG4gICAgICB2YXIgaG9vaztcbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBob29rID0gZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICAgIHN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3IoY29udGV4dCkpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoaG9vayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQuZnVuY3Rpb25hbCkge1xuICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IGNvbXBvbmVudC5yZW5kZXI7XG4gICAgICAgICAgY29tcG9uZW50LnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgdmFyIGV4aXN0aW5nID0gY29tcG9uZW50LmJlZm9yZUNyZWF0ZTtcbiAgICAgICAgICBjb21wb25lbnQuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFxuICB9XG4gIC8qIHN0eWxlIGluamVjdCAqL1xuICBmdW5jdGlvbiBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXygpIHtcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICB2YXIgc3R5bGVzID0gX192dWVfY3JlYXRlX2luamVjdG9yX18uc3R5bGVzIHx8IChfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXy5zdHlsZXMgPSB7fSk7XG4gICAgdmFyIGlzT2xkSUUgPVxuICAgICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIC9tc2llIFs2LTldXFxcXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBhZGRTdHlsZShpZCwgY3NzKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBpZCArICdcIl0nKSkgeyByZXR1cm4gfSAvLyBTU1Igc3R5bGVzIGFyZSBwcmVzZW50LlxuXG4gICAgICB2YXIgZ3JvdXAgPSBpc09sZElFID8gY3NzLm1lZGlhIHx8ICdkZWZhdWx0JyA6IGlkO1xuICAgICAgdmFyIHN0eWxlID0gc3R5bGVzW2dyb3VwXSB8fCAoc3R5bGVzW2dyb3VwXSA9IHsgaWRzOiBbXSwgcGFydHM6IFtdLCBlbGVtZW50OiB1bmRlZmluZWQgfSk7XG5cbiAgICAgIGlmICghc3R5bGUuaWRzLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICB2YXIgY29kZSA9IGNzcy5zb3VyY2U7XG4gICAgICAgIHZhciBpbmRleCA9IHN0eWxlLmlkcy5sZW5ndGg7XG5cbiAgICAgICAgc3R5bGUuaWRzLnB1c2goaWQpO1xuXG4gICAgICAgIGlmIChpc09sZElFKSB7XG4gICAgICAgICAgc3R5bGUuZWxlbWVudCA9IHN0eWxlLmVsZW1lbnQgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS1ncm91cD0nICsgZ3JvdXAgKyAnXScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdHlsZS5lbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGVsID0gc3R5bGUuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgZWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICAgICAgICBpZiAoY3NzLm1lZGlhKSB7IGVsLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBjc3MubWVkaWEpOyB9XG4gICAgICAgICAgaWYgKGlzT2xkSUUpIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1ncm91cCcsIGdyb3VwKTtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JywgJzAnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc09sZElFKSB7XG4gICAgICAgICAgaW5kZXggPSBwYXJzZUludChzdHlsZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JykpO1xuICAgICAgICAgIHN0eWxlLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW5leHQtaW5kZXgnLCBpbmRleCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0eWxlLmVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgICAgICAgIHN0eWxlLnBhcnRzLnB1c2goY29kZSk7XG4gICAgICAgICAgc3R5bGUuZWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBzdHlsZS5wYXJ0c1xuICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgLmpvaW4oJ1xcbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvZGUpO1xuICAgICAgICAgIHZhciBub2RlcyA9IHN0eWxlLmVsZW1lbnQuY2hpbGROb2RlcztcbiAgICAgICAgICBpZiAobm9kZXNbaW5kZXhdKSB7IHN0eWxlLmVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZXNbaW5kZXhdKTsgfVxuICAgICAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHsgc3R5bGUuZWxlbWVudC5pbnNlcnRCZWZvcmUodGV4dE5vZGUsIG5vZGVzW2luZGV4XSk7IH1cbiAgICAgICAgICBlbHNlIHsgc3R5bGUuZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKiBzdHlsZSBpbmplY3QgU1NSICovXG4gIFxuXG4gIFxuICB2YXIgTGlnaHRib3ggPSBfX3Z1ZV9ub3JtYWxpemVfXyhcbiAgICB7IHJlbmRlcjogX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZuczogX192dWVfc3RhdGljUmVuZGVyRm5zX18gfSxcbiAgICBfX3Z1ZV9pbmplY3Rfc3R5bGVzX18sXG4gICAgX192dWVfc2NyaXB0X18sXG4gICAgX192dWVfc2NvcGVfaWRfXyxcbiAgICBfX3Z1ZV9pc19mdW5jdGlvbmFsX3RlbXBsYXRlX18sXG4gICAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyxcbiAgICBfX3Z1ZV9jcmVhdGVfaW5qZWN0b3JfXyxcbiAgICB1bmRlZmluZWRcbiAgKTtcblxuLy8gSW1wb3J0IHZ1ZSBjb21wb25lbnRcblxuLy8gRGVjbGFyZSBpbnN0YWxsIGZ1bmN0aW9uIGV4ZWN1dGVkIGJ5IFZ1ZS51c2UoKVxuZnVuY3Rpb24gaW5zdGFsbChWdWUpIHtcblx0aWYgKGluc3RhbGwuaW5zdGFsbGVkKSB7IHJldHVybjsgfVxuXHRpbnN0YWxsLmluc3RhbGxlZCA9IHRydWU7XG5cdFZ1ZS5jb21wb25lbnQoJ0xpZ2h0Ym94JywgTGlnaHRib3gpO1xufVxuXG4vLyBDcmVhdGUgbW9kdWxlIGRlZmluaXRpb24gZm9yIFZ1ZS51c2UoKVxudmFyIHBsdWdpbiA9IHtcblx0aW5zdGFsbDogaW5zdGFsbCxcbn07XG5cbi8vIEF1dG8taW5zdGFsbCB3aGVuIHZ1ZSBpcyBmb3VuZCAoZWcuIGluIGJyb3dzZXIgdmlhIDxzY3JpcHQ+IHRhZylcbnZhciBHbG9iYWxWdWUgPSBudWxsO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdEdsb2JhbFZ1ZSA9IHdpbmRvdy5WdWU7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdEdsb2JhbFZ1ZSA9IGdsb2JhbC5WdWU7XG59XG5pZiAoR2xvYmFsVnVlKSB7XG5cdEdsb2JhbFZ1ZS51c2UocGx1Z2luKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlnaHRib3g7XG5leHBvcnQgeyBpbnN0YWxsIH07XG4iXSwic291cmNlUm9vdCI6IiJ9
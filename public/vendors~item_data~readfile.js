(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~item_data~readfile"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFsYW5jZWQtbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JyYWNlLWV4cGFuc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1pbWFnZS1jb21wcmVzc2lvbi9kaXN0L2Jyb3dzZXItaW1hZ2UtY29tcHJlc3Npb24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25jYXQtbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taW5pbWF0Y2gvbWluaW1hdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1teS1waG90b3MvZGlzdC9saWdodGJveC5lc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFEQSxnQkFBZ0IsbUJBQU8sQ0FBQyxzREFBWTtBQUNwQyxlQUFlLG1CQUFPLENBQUMsOERBQWdCOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFD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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLElBQUk7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFLEVBQUUsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7O0FBRUEsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyw2Q0FBNkM7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCOzs7Ozs7Ozs7Ozs7QUMxNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixJQUFJO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyw4QkFBOEI7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL05BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixxREFBcUQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGdDQUFnQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsOEJBQThCO0FBQzlFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsOEJBQThCOztBQUVsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsOEJBQThCO0FBQ2xGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RDtBQUNqRixnQkFBZ0IscUNBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLEtBQUssbUVBQW1FO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHVFQUFRLEVBQUM7QUFDTCIsImZpbGUiOiJ2ZW5kb3Jzfml0ZW1fZGF0YX5yZWFkZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gYmFsYW5jZWQ7XG5mdW5jdGlvbiBiYWxhbmNlZChhLCBiLCBzdHIpIHtcbiAgaWYgKGEgaW5zdGFuY2VvZiBSZWdFeHApIGEgPSBtYXliZU1hdGNoKGEsIHN0cik7XG4gIGlmIChiIGluc3RhbmNlb2YgUmVnRXhwKSBiID0gbWF5YmVNYXRjaChiLCBzdHIpO1xuXG4gIHZhciByID0gcmFuZ2UoYSwgYiwgc3RyKTtcblxuICByZXR1cm4gciAmJiB7XG4gICAgc3RhcnQ6IHJbMF0sXG4gICAgZW5kOiByWzFdLFxuICAgIHByZTogc3RyLnNsaWNlKDAsIHJbMF0pLFxuICAgIGJvZHk6IHN0ci5zbGljZShyWzBdICsgYS5sZW5ndGgsIHJbMV0pLFxuICAgIHBvc3Q6IHN0ci5zbGljZShyWzFdICsgYi5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1heWJlTWF0Y2gocmVnLCBzdHIpIHtcbiAgdmFyIG0gPSBzdHIubWF0Y2gocmVnKTtcbiAgcmV0dXJuIG0gPyBtWzBdIDogbnVsbDtcbn1cblxuYmFsYW5jZWQucmFuZ2UgPSByYW5nZTtcbmZ1bmN0aW9uIHJhbmdlKGEsIGIsIHN0cikge1xuICB2YXIgYmVncywgYmVnLCBsZWZ0LCByaWdodCwgcmVzdWx0O1xuICB2YXIgYWkgPSBzdHIuaW5kZXhPZihhKTtcbiAgdmFyIGJpID0gc3RyLmluZGV4T2YoYiwgYWkgKyAxKTtcbiAgdmFyIGkgPSBhaTtcblxuICBpZiAoYWkgPj0gMCAmJiBiaSA+IDApIHtcbiAgICBiZWdzID0gW107XG4gICAgbGVmdCA9IHN0ci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA+PSAwICYmICFyZXN1bHQpIHtcbiAgICAgIGlmIChpID09IGFpKSB7XG4gICAgICAgIGJlZ3MucHVzaChpKTtcbiAgICAgICAgYWkgPSBzdHIuaW5kZXhPZihhLCBpICsgMSk7XG4gICAgICB9IGVsc2UgaWYgKGJlZ3MubGVuZ3RoID09IDEpIHtcbiAgICAgICAgcmVzdWx0ID0gWyBiZWdzLnBvcCgpLCBiaSBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVnID0gYmVncy5wb3AoKTtcbiAgICAgICAgaWYgKGJlZyA8IGxlZnQpIHtcbiAgICAgICAgICBsZWZ0ID0gYmVnO1xuICAgICAgICAgIHJpZ2h0ID0gYmk7XG4gICAgICAgIH1cblxuICAgICAgICBiaSA9IHN0ci5pbmRleE9mKGIsIGkgKyAxKTtcbiAgICAgIH1cblxuICAgICAgaSA9IGFpIDwgYmkgJiYgYWkgPj0gMCA/IGFpIDogYmk7XG4gICAgfVxuXG4gICAgaWYgKGJlZ3MubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBbIGxlZnQsIHJpZ2h0IF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsInZhciBjb25jYXRNYXAgPSByZXF1aXJlKCdjb25jYXQtbWFwJyk7XG52YXIgYmFsYW5jZWQgPSByZXF1aXJlKCdiYWxhbmNlZC1tYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cGFuZFRvcDtcblxudmFyIGVzY1NsYXNoID0gJ1xcMFNMQVNIJytNYXRoLnJhbmRvbSgpKydcXDAnO1xudmFyIGVzY09wZW4gPSAnXFwwT1BFTicrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NDbG9zZSA9ICdcXDBDTE9TRScrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NDb21tYSA9ICdcXDBDT01NQScrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NQZXJpb2QgPSAnXFwwUEVSSU9EJytNYXRoLnJhbmRvbSgpKydcXDAnO1xuXG5mdW5jdGlvbiBudW1lcmljKHN0cikge1xuICByZXR1cm4gcGFyc2VJbnQoc3RyLCAxMCkgPT0gc3RyXG4gICAgPyBwYXJzZUludChzdHIsIDEwKVxuICAgIDogc3RyLmNoYXJDb2RlQXQoMCk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUJyYWNlcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgnXFxcXFxcXFwnKS5qb2luKGVzY1NsYXNoKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxceycpLmpvaW4oZXNjT3BlbilcbiAgICAgICAgICAgIC5zcGxpdCgnXFxcXH0nKS5qb2luKGVzY0Nsb3NlKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxcLCcpLmpvaW4oZXNjQ29tbWEpXG4gICAgICAgICAgICAuc3BsaXQoJ1xcXFwuJykuam9pbihlc2NQZXJpb2QpO1xufVxuXG5mdW5jdGlvbiB1bmVzY2FwZUJyYWNlcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdChlc2NTbGFzaCkuam9pbignXFxcXCcpXG4gICAgICAgICAgICAuc3BsaXQoZXNjT3Blbikuam9pbigneycpXG4gICAgICAgICAgICAuc3BsaXQoZXNjQ2xvc2UpLmpvaW4oJ30nKVxuICAgICAgICAgICAgLnNwbGl0KGVzY0NvbW1hKS5qb2luKCcsJylcbiAgICAgICAgICAgIC5zcGxpdChlc2NQZXJpb2QpLmpvaW4oJy4nKTtcbn1cblxuXG4vLyBCYXNpY2FsbHkganVzdCBzdHIuc3BsaXQoXCIsXCIpLCBidXQgaGFuZGxpbmcgY2FzZXNcbi8vIHdoZXJlIHdlIGhhdmUgbmVzdGVkIGJyYWNlZCBzZWN0aW9ucywgd2hpY2ggc2hvdWxkIGJlXG4vLyB0cmVhdGVkIGFzIGluZGl2aWR1YWwgbWVtYmVycywgbGlrZSB7YSx7YixjfSxkfVxuZnVuY3Rpb24gcGFyc2VDb21tYVBhcnRzKHN0cikge1xuICBpZiAoIXN0cilcbiAgICByZXR1cm4gWycnXTtcblxuICB2YXIgcGFydHMgPSBbXTtcbiAgdmFyIG0gPSBiYWxhbmNlZCgneycsICd9Jywgc3RyKTtcblxuICBpZiAoIW0pXG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnLCcpO1xuXG4gIHZhciBwcmUgPSBtLnByZTtcbiAgdmFyIGJvZHkgPSBtLmJvZHk7XG4gIHZhciBwb3N0ID0gbS5wb3N0O1xuICB2YXIgcCA9IHByZS5zcGxpdCgnLCcpO1xuXG4gIHBbcC5sZW5ndGgtMV0gKz0gJ3snICsgYm9keSArICd9JztcbiAgdmFyIHBvc3RQYXJ0cyA9IHBhcnNlQ29tbWFQYXJ0cyhwb3N0KTtcbiAgaWYgKHBvc3QubGVuZ3RoKSB7XG4gICAgcFtwLmxlbmd0aC0xXSArPSBwb3N0UGFydHMuc2hpZnQoKTtcbiAgICBwLnB1c2guYXBwbHkocCwgcG9zdFBhcnRzKTtcbiAgfVxuXG4gIHBhcnRzLnB1c2guYXBwbHkocGFydHMsIHApO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZnVuY3Rpb24gZXhwYW5kVG9wKHN0cikge1xuICBpZiAoIXN0cilcbiAgICByZXR1cm4gW107XG5cbiAgLy8gSSBkb24ndCBrbm93IHdoeSBCYXNoIDQuMyBkb2VzIHRoaXMsIGJ1dCBpdCBkb2VzLlxuICAvLyBBbnl0aGluZyBzdGFydGluZyB3aXRoIHt9IHdpbGwgaGF2ZSB0aGUgZmlyc3QgdHdvIGJ5dGVzIHByZXNlcnZlZFxuICAvLyBidXQgKm9ubHkqIGF0IHRoZSB0b3AgbGV2ZWwsIHNvIHt9LGF9YiB3aWxsIG5vdCBleHBhbmQgdG8gYW55dGhpbmcsXG4gIC8vIGJ1dCBhe30sYn1jIHdpbGwgYmUgZXhwYW5kZWQgdG8gW2F9YyxhYmNdLlxuICAvLyBPbmUgY291bGQgYXJndWUgdGhhdCB0aGlzIGlzIGEgYnVnIGluIEJhc2gsIGJ1dCBzaW5jZSB0aGUgZ29hbCBvZlxuICAvLyB0aGlzIG1vZHVsZSBpcyB0byBtYXRjaCBCYXNoJ3MgcnVsZXMsIHdlIGVzY2FwZSBhIGxlYWRpbmcge31cbiAgaWYgKHN0ci5zdWJzdHIoMCwgMikgPT09ICd7fScpIHtcbiAgICBzdHIgPSAnXFxcXHtcXFxcfScgKyBzdHIuc3Vic3RyKDIpO1xuICB9XG5cbiAgcmV0dXJuIGV4cGFuZChlc2NhcGVCcmFjZXMoc3RyKSwgdHJ1ZSkubWFwKHVuZXNjYXBlQnJhY2VzKTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkoZSkge1xuICByZXR1cm4gZTtcbn1cblxuZnVuY3Rpb24gZW1icmFjZShzdHIpIHtcbiAgcmV0dXJuICd7JyArIHN0ciArICd9Jztcbn1cbmZ1bmN0aW9uIGlzUGFkZGVkKGVsKSB7XG4gIHJldHVybiAvXi0/MFxcZC8udGVzdChlbCk7XG59XG5cbmZ1bmN0aW9uIGx0ZShpLCB5KSB7XG4gIHJldHVybiBpIDw9IHk7XG59XG5mdW5jdGlvbiBndGUoaSwgeSkge1xuICByZXR1cm4gaSA+PSB5O1xufVxuXG5mdW5jdGlvbiBleHBhbmQoc3RyLCBpc1RvcCkge1xuICB2YXIgZXhwYW5zaW9ucyA9IFtdO1xuXG4gIHZhciBtID0gYmFsYW5jZWQoJ3snLCAnfScsIHN0cik7XG4gIGlmICghbSB8fCAvXFwkJC8udGVzdChtLnByZSkpIHJldHVybiBbc3RyXTtcblxuICB2YXIgaXNOdW1lcmljU2VxdWVuY2UgPSAvXi0/XFxkK1xcLlxcLi0/XFxkKyg/OlxcLlxcLi0/XFxkKyk/JC8udGVzdChtLmJvZHkpO1xuICB2YXIgaXNBbHBoYVNlcXVlbmNlID0gL15bYS16QS1aXVxcLlxcLlthLXpBLVpdKD86XFwuXFwuLT9cXGQrKT8kLy50ZXN0KG0uYm9keSk7XG4gIHZhciBpc1NlcXVlbmNlID0gaXNOdW1lcmljU2VxdWVuY2UgfHwgaXNBbHBoYVNlcXVlbmNlO1xuICB2YXIgaXNPcHRpb25zID0gbS5ib2R5LmluZGV4T2YoJywnKSA+PSAwO1xuICBpZiAoIWlzU2VxdWVuY2UgJiYgIWlzT3B0aW9ucykge1xuICAgIC8vIHthfSxifVxuICAgIGlmIChtLnBvc3QubWF0Y2goLywuKlxcfS8pKSB7XG4gICAgICBzdHIgPSBtLnByZSArICd7JyArIG0uYm9keSArIGVzY0Nsb3NlICsgbS5wb3N0O1xuICAgICAgcmV0dXJuIGV4cGFuZChzdHIpO1xuICAgIH1cbiAgICByZXR1cm4gW3N0cl07XG4gIH1cblxuICB2YXIgbjtcbiAgaWYgKGlzU2VxdWVuY2UpIHtcbiAgICBuID0gbS5ib2R5LnNwbGl0KC9cXC5cXC4vKTtcbiAgfSBlbHNlIHtcbiAgICBuID0gcGFyc2VDb21tYVBhcnRzKG0uYm9keSk7XG4gICAgaWYgKG4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyB4e3thLGJ9fXkgPT0+IHh7YX15IHh7Yn15XG4gICAgICBuID0gZXhwYW5kKG5bMF0sIGZhbHNlKS5tYXAoZW1icmFjZSk7XG4gICAgICBpZiAobi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdmFyIHBvc3QgPSBtLnBvc3QubGVuZ3RoXG4gICAgICAgICAgPyBleHBhbmQobS5wb3N0LCBmYWxzZSlcbiAgICAgICAgICA6IFsnJ107XG4gICAgICAgIHJldHVybiBwb3N0Lm1hcChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgcmV0dXJuIG0ucHJlICsgblswXSArIHA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGF0IHRoaXMgcG9pbnQsIG4gaXMgdGhlIHBhcnRzLCBhbmQgd2Uga25vdyBpdCdzIG5vdCBhIGNvbW1hIHNldFxuICAvLyB3aXRoIGEgc2luZ2xlIGVudHJ5LlxuXG4gIC8vIG5vIG5lZWQgdG8gZXhwYW5kIHByZSwgc2luY2UgaXQgaXMgZ3VhcmFudGVlZCB0byBiZSBmcmVlIG9mIGJyYWNlLXNldHNcbiAgdmFyIHByZSA9IG0ucHJlO1xuICB2YXIgcG9zdCA9IG0ucG9zdC5sZW5ndGhcbiAgICA/IGV4cGFuZChtLnBvc3QsIGZhbHNlKVxuICAgIDogWycnXTtcblxuICB2YXIgTjtcblxuICBpZiAoaXNTZXF1ZW5jZSkge1xuICAgIHZhciB4ID0gbnVtZXJpYyhuWzBdKTtcbiAgICB2YXIgeSA9IG51bWVyaWMoblsxXSk7XG4gICAgdmFyIHdpZHRoID0gTWF0aC5tYXgoblswXS5sZW5ndGgsIG5bMV0ubGVuZ3RoKVxuICAgIHZhciBpbmNyID0gbi5sZW5ndGggPT0gM1xuICAgICAgPyBNYXRoLmFicyhudW1lcmljKG5bMl0pKVxuICAgICAgOiAxO1xuICAgIHZhciB0ZXN0ID0gbHRlO1xuICAgIHZhciByZXZlcnNlID0geSA8IHg7XG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIGluY3IgKj0gLTE7XG4gICAgICB0ZXN0ID0gZ3RlO1xuICAgIH1cbiAgICB2YXIgcGFkID0gbi5zb21lKGlzUGFkZGVkKTtcblxuICAgIE4gPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSB4OyB0ZXN0KGksIHkpOyBpICs9IGluY3IpIHtcbiAgICAgIHZhciBjO1xuICAgICAgaWYgKGlzQWxwaGFTZXF1ZW5jZSkge1xuICAgICAgICBjID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKTtcbiAgICAgICAgaWYgKGMgPT09ICdcXFxcJylcbiAgICAgICAgICBjID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjID0gU3RyaW5nKGkpO1xuICAgICAgICBpZiAocGFkKSB7XG4gICAgICAgICAgdmFyIG5lZWQgPSB3aWR0aCAtIGMubGVuZ3RoO1xuICAgICAgICAgIGlmIChuZWVkID4gMCkge1xuICAgICAgICAgICAgdmFyIHogPSBuZXcgQXJyYXkobmVlZCArIDEpLmpvaW4oJzAnKTtcbiAgICAgICAgICAgIGlmIChpIDwgMClcbiAgICAgICAgICAgICAgYyA9ICctJyArIHogKyBjLnNsaWNlKDEpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBjID0geiArIGM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBOLnB1c2goYyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIE4gPSBjb25jYXRNYXAobiwgZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGV4cGFuZChlbCwgZmFsc2UpIH0pO1xuICB9XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCBOLmxlbmd0aDsgaisrKSB7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBwb3N0Lmxlbmd0aDsgaysrKSB7XG4gICAgICB2YXIgZXhwYW5zaW9uID0gcHJlICsgTltqXSArIHBvc3Rba107XG4gICAgICBpZiAoIWlzVG9wIHx8IGlzU2VxdWVuY2UgfHwgZXhwYW5zaW9uKVxuICAgICAgICBleHBhbnNpb25zLnB1c2goZXhwYW5zaW9uKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXhwYW5zaW9ucztcbn1cblxuIiwiLyoqXG4gKiBCcm93c2VyIEltYWdlIENvbXByZXNzaW9uXG4gKiB2MS4wLjVcbiAqIGJ5IERvbmFsZCA8ZG9uYWxkY3dsQGdtYWlsLmNvbT5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Eb25hbGRjd2wvYnJvd3Nlci1pbWFnZS1jb21wcmVzc2lvblxuICovXG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGUsbil7cmV0dXJuIGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlfShlKXx8ZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGUsbil7dmFyIHI9W10sdD0hMCxhPSExLGk9dm9pZCAwO3RyeXtmb3IodmFyIG8scz1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKHQ9KG89cy5uZXh0KCkpLmRvbmUpJiYoci5wdXNoKG8udmFsdWUpLCFufHxyLmxlbmd0aCE9PW4pO3Q9ITApO31jYXRjaChlKXthPSEwLGk9ZX1maW5hbGx5e3RyeXt0fHxudWxsPT1zLnJldHVybnx8cy5yZXR1cm4oKX1maW5hbGx5e2lmKGEpdGhyb3cgaX19cmV0dXJuIHJ9KGUsbil8fGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKX0oKX12YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuY29yZG92YSYmd2luZG93LmNvcmRvdmEucmVxdWlyZShcImNvcmRvdmEvbW9kdWxlbWFwcGVyXCIpLEN1c3RvbUZpbGU9ZSYmZS5nZXRPcmlnaW5hbFN5bWJvbCh3aW5kb3csXCJGaWxlXCIpfHxGaWxlLEN1c3RvbUZpbGVSZWFkZXI9ZSYmZS5nZXRPcmlnaW5hbFN5bWJvbCh3aW5kb3csXCJGaWxlUmVhZGVyXCIpfHxGaWxlUmVhZGVyO2Z1bmN0aW9uIGdldERhdGFVcmxGcm9tRmlsZShlKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24obixyKXt2YXIgdD1uZXcgQ3VzdG9tRmlsZVJlYWRlcjt0Lm9ubG9hZD1mdW5jdGlvbigpe3JldHVybiBuKHQucmVzdWx0KX0sdC5vbmVycm9yPWZ1bmN0aW9uKGUpe3JldHVybiByKGUpfSx0LnJlYWRBc0RhdGFVUkwoZSl9KX1mdW5jdGlvbiBnZXRGaWxlZnJvbURhdGFVcmwoZSxuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06RGF0ZS5ub3coKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCl7Zm9yKHZhciBhPWUuc3BsaXQoXCIsXCIpLGk9YVswXS5tYXRjaCgvOiguKj8pOy8pWzFdLG89YXRvYihhWzFdKSxzPW8ubGVuZ3RoLGM9bmV3IFVpbnQ4QXJyYXkocyk7cy0tOyljW3NdPW8uY2hhckNvZGVBdChzKTt2YXIgdT1uZXcgQmxvYihbY10se3R5cGU6aX0pO3UubmFtZT1uLHUubGFzdE1vZGlmaWVkPXIsdCh1KX0pfWZ1bmN0aW9uIGxvYWRJbWFnZShlKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24obixyKXt2YXIgdD1uZXcgSW1hZ2U7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtyZXR1cm4gbih0KX0sdC5vbmVycm9yPWZ1bmN0aW9uKGUpe3JldHVybiByKGUpfSx0LnNyYz1lfSl9ZnVuY3Rpb24gZHJhd0ltYWdlSW5DYW52YXMoZSl7dmFyIG49X3NsaWNlZFRvQXJyYXkoZ2V0TmV3Q2FudmFzQW5kQ3R4KGUud2lkdGgsZS5oZWlnaHQpLDIpLHI9blswXTtyZXR1cm4gblsxXS5kcmF3SW1hZ2UoZSwwLDAsci53aWR0aCxyLmhlaWdodCkscn1mdW5jdGlvbiBkcmF3RmlsZUluQ2FudmFzKGUpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihuLHIpe3ZhciB0LGEsaT1mdW5jdGlvbiAkVHJ5XzFfUG9zdCgpe3RyeXtyZXR1cm4gYT1kcmF3SW1hZ2VJbkNhbnZhcyh0KSxuKFt0LGFdKX1jYXRjaChlKXtyZXR1cm4gcihlKX19LG89ZnVuY3Rpb24gJFRyeV8xX0NhdGNoKG4pe3RyeXtyZXR1cm4gZ2V0RGF0YVVybEZyb21GaWxlKGUpLnRoZW4oZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBsb2FkSW1hZ2UoZSkudGhlbihmdW5jdGlvbihlKXt0cnl7cmV0dXJuIHQ9ZSxpKCl9Y2F0Y2goZSl7cmV0dXJuIHIoZSl9fSxyKX1jYXRjaChlKXtyZXR1cm4gcihlKX19LHIpfWNhdGNoKGUpe3JldHVybiByKGUpfX07dHJ5e3JldHVybiBjcmVhdGVJbWFnZUJpdG1hcChlKS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gdD1lLGkoKX1jYXRjaChlKXtyZXR1cm4gbygpfX0sbyl9Y2F0Y2goZSl7bygpfX0pfWZ1bmN0aW9uIGNhbnZhc1RvRmlsZShlLG4scix0KXt2YXIgYT1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaSxvKXt2YXIgcztyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBPZmZzY3JlZW5DYW52YXMmJmUgaW5zdGFuY2VvZiBPZmZzY3JlZW5DYW52YXM/ZS5jb252ZXJ0VG9CbG9iKHt0eXBlOm4scXVhbGl0eTphfSkudGhlbihmdW5jdGlvbihlKXt0cnl7cmV0dXJuKHM9ZSkubmFtZT1yLHMubGFzdE1vZGlmaWVkPXQsJElmXzQuY2FsbCh0aGlzKX1jYXRjaChlKXtyZXR1cm4gbyhlKX19LmJpbmQodGhpcyksbyk6Z2V0RmlsZWZyb21EYXRhVXJsKGUudG9EYXRhVVJMKG4sYSkscix0KS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gcz1lLCRJZl80LmNhbGwodGhpcyl9Y2F0Y2goZSl7cmV0dXJuIG8oZSl9fS5iaW5kKHRoaXMpLG8pO2Z1bmN0aW9uICRJZl80KCl7cmV0dXJuIGkocyl9fSl9ZnVuY3Rpb24gZ2V0RXhpZk9yaWVudGF0aW9uKGUpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihuLHIpe3ZhciB0PW5ldyBDdXN0b21GaWxlUmVhZGVyO3Qub25sb2FkPWZ1bmN0aW9uKGUpe3ZhciByPW5ldyBEYXRhVmlldyhlLnRhcmdldC5yZXN1bHQpO2lmKDY1NDk2IT1yLmdldFVpbnQxNigwLCExKSlyZXR1cm4gbigtMik7Zm9yKHZhciB0PXIuYnl0ZUxlbmd0aCxhPTI7YTx0Oyl7aWYoci5nZXRVaW50MTYoYSsyLCExKTw9OClyZXR1cm4gbigtMSk7dmFyIGk9ci5nZXRVaW50MTYoYSwhMSk7aWYoYSs9Miw2NTUwNT09aSl7aWYoMTE2NTUxOTIwNiE9ci5nZXRVaW50MzIoYSs9MiwhMSkpcmV0dXJuIG4oLTEpO3ZhciBvPTE4NzYxPT1yLmdldFVpbnQxNihhKz02LCExKTthKz1yLmdldFVpbnQzMihhKzQsbyk7dmFyIHM9ci5nZXRVaW50MTYoYSxvKTthKz0yO2Zvcih2YXIgYz0wO2M8cztjKyspaWYoMjc0PT1yLmdldFVpbnQxNihhKzEyKmMsbykpcmV0dXJuIG4oci5nZXRVaW50MTYoYSsxMipjKzgsbykpfWVsc2V7aWYoNjUyODAhPSg2NTI4MCZpKSlicmVhazthKz1yLmdldFVpbnQxNihhLCExKX19cmV0dXJuIG4oLTEpfSx0Lm9uZXJyb3I9ZnVuY3Rpb24oZSl7cmV0dXJuIHIoZSl9LHQucmVhZEFzQXJyYXlCdWZmZXIoZSl9KX1mdW5jdGlvbiBoYW5kbGVNYXhXaWR0aE9ySGVpZ2h0KGUsbil7dmFyIHIsdD1lLndpZHRoLGE9ZS5oZWlnaHQsaT1uLm1heFdpZHRoT3JIZWlnaHQsbz1lO2lmKE51bWJlci5pc0ludGVnZXIoaSkmJih0Pml8fGE+aSkpe3ZhciBzPV9zbGljZWRUb0FycmF5KGdldE5ld0NhbnZhc0FuZEN0eCh0LGEpLDIpO289c1swXSxyPXNbMV0sdD5hPyhvLndpZHRoPWksby5oZWlnaHQ9YS90KmkpOihvLndpZHRoPXQvYSppLG8uaGVpZ2h0PWkpLHIuZHJhd0ltYWdlKGUsMCwwLG8ud2lkdGgsby5oZWlnaHQpfXJldHVybiBvfWZ1bmN0aW9uIGZvbGxvd0V4aWZPcmllbnRhdGlvbihlLG4pe3ZhciByPWUud2lkdGgsdD1lLmhlaWdodCxhPV9zbGljZWRUb0FycmF5KGdldE5ld0NhbnZhc0FuZEN0eChyLHQpLDIpLGk9YVswXSxvPWFbMV07c3dpdGNoKDQ8biYmbjw5PyhpLndpZHRoPXQsaS5oZWlnaHQ9cik6KGkud2lkdGg9cixpLmhlaWdodD10KSxuKXtjYXNlIDI6by50cmFuc2Zvcm0oLTEsMCwwLDEsciwwKTticmVhaztjYXNlIDM6by50cmFuc2Zvcm0oLTEsMCwwLC0xLHIsdCk7YnJlYWs7Y2FzZSA0Om8udHJhbnNmb3JtKDEsMCwwLC0xLDAsdCk7YnJlYWs7Y2FzZSA1Om8udHJhbnNmb3JtKDAsMSwxLDAsMCwwKTticmVhaztjYXNlIDY6by50cmFuc2Zvcm0oMCwxLC0xLDAsdCwwKTticmVhaztjYXNlIDc6by50cmFuc2Zvcm0oMCwtMSwtMSwwLHQscik7YnJlYWs7Y2FzZSA4Om8udHJhbnNmb3JtKDAsLTEsMSwwLDAscil9cmV0dXJuIG8uZHJhd0ltYWdlKGUsMCwwLHIsdCksaX1mdW5jdGlvbiBnZXROZXdDYW52YXNBbmRDdHgoZSxuKXt2YXIgcix0O3RyeXt0PShyPW5ldyBPZmZzY3JlZW5DYW52YXMoZSxuKSkuZ2V0Q29udGV4dChcIjJkXCIpfWNhdGNoKGUpe3Q9KHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSkuZ2V0Q29udGV4dChcIjJkXCIpfXJldHVybiByLndpZHRoPWUsci5oZWlnaHQ9bixbcix0XX1mdW5jdGlvbiBjb21wcmVzcyhlLG4pe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyLHQpe3ZhciBhLGksbyxzLGMsdSxsO3JldHVybiBhPW4ubWF4SXRlcmF0aW9ufHwxMCxpPTEwMjQqbi5tYXhTaXplTUIqMTAyNCxkcmF3RmlsZUluQ2FudmFzKGUpLnRoZW4oZnVuY3Rpb24obSl7dHJ5e3ZhciBmPV9zbGljZWRUb0FycmF5KG0sMik7cmV0dXJuIG89ZlswXSxzPWhhbmRsZU1heFdpZHRoT3JIZWlnaHQocz1mWzFdLG4pLG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsdCl7dmFyIGE7aWYoIShhPW4uZXhpZk9yaWVudGF0aW9uKSlyZXR1cm4gZ2V0RXhpZk9yaWVudGF0aW9uKGUpLnRoZW4oZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBhPWUsJElmXzIuY2FsbCh0aGlzKX1jYXRjaChlKXtyZXR1cm4gdChlKX19LmJpbmQodGhpcyksdCk7ZnVuY3Rpb24gJElmXzIoKXtyZXR1cm4gcihhKX1yZXR1cm4gJElmXzIuY2FsbCh0aGlzKX0pLnRoZW4oZnVuY3Rpb24obSl7dHJ5e3JldHVybiBuLmV4aWZPcmllbnRhdGlvbj1tLHM9Zm9sbG93RXhpZk9yaWVudGF0aW9uKHMsbi5leGlmT3JpZW50YXRpb24pLGM9MSxjYW52YXNUb0ZpbGUocyxlLnR5cGUsZS5uYW1lLGUubGFzdE1vZGlmaWVkLGMpLnRoZW4oZnVuY3Rpb24obil7dHJ5e3ZhciBtLGY9ZnVuY3Rpb24gJExvb3BfMygpe2lmKGEtLSYmbC5zaXplPmkpe3ZhciBuLHIsdSxtPV9zbGljZWRUb0FycmF5KGdldE5ld0NhbnZhc0FuZEN0eChuPS45KnMud2lkdGgscj0uOSpzLmhlaWdodCksMik7cmV0dXJuIHU9bVswXSxtWzFdLmRyYXdJbWFnZShvLDAsMCxuLHIpLFwiaW1hZ2UvanBlZ1wiPT09ZS50eXBlJiYoYyo9LjkpLGNhbnZhc1RvRmlsZSh1LGUudHlwZSxlLm5hbWUsZS5sYXN0TW9kaWZpZWQsYykudGhlbihmdW5jdGlvbihlKXt0cnl7cmV0dXJuIGw9ZSxzPXUsJExvb3BfM31jYXRjaChlKXtyZXR1cm4gdChlKX19LHQpfXJldHVyblsxXX0sZz1mdW5jdGlvbiAkTG9vcF8zX2V4aXQoKXtyZXR1cm4gcihsKX07cmV0dXJuKHU9bikuc2l6ZTw9aT9yKHUpOihsPXUsKG09ZnVuY3Rpb24oZSl7Zm9yKDtlOyl7aWYoZS50aGVuKXJldHVybiB2b2lkIGUudGhlbihtLHQpO3RyeXtpZihlLnBvcCl7aWYoZS5sZW5ndGgpcmV0dXJuIGUucG9wKCk/Zy5jYWxsKHRoaXMpOmU7ZT1mfWVsc2UgZT1lLmNhbGwodGhpcyl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9fX0uYmluZCh0aGlzKSkoZikpfWNhdGNoKGUpe3JldHVybiB0KGUpfX0uYmluZCh0aGlzKSx0KX1jYXRjaChlKXtyZXR1cm4gdChlKX19LmJpbmQodGhpcyksdCl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9fS5iaW5kKHRoaXMpLHQpfSl9dmFyIG4scj0wO3ZhciB0PWZ1bmN0aW9uIGNyZWF0ZVdvcmtlcihlKXtyZXR1cm4gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtcIihcIi5jb25jYXQoZSxcIikoKVwiKV0pKSl9KGZ1bmN0aW9uKCl7dmFyIGU9ITE7c2VsZi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uKG4pe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyLHQpe3ZhciBhLGksbyxzLGM9bi5kYXRhO2E9Yy5maWxlLGk9Yy5pZCxvPWMuaW1hZ2VDb21wcmVzc2lvbkxpYlVybCxzPWMub3B0aW9uczt2YXIgdT1mdW5jdGlvbiAkVHJ5XzFfUG9zdCgpe3RyeXtyZXR1cm4gcigpfWNhdGNoKGUpe3JldHVybiB0KGUpfX0sbD1mdW5jdGlvbiAkVHJ5XzFfQ2F0Y2goZSl7dHJ5e3JldHVybiBzZWxmLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2UsaWQ6aX0pLHUoKX1jYXRjaChlKXtyZXR1cm4gdChlKX19O3RyeXt2YXIgbTtyZXR1cm4gZXx8KGltcG9ydFNjcmlwdHMobyksZT0hMCksaW1hZ2VDb21wcmVzc2lvbihhLHMpLnRoZW4oZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBtPWUsc2VsZi5wb3N0TWVzc2FnZSh7ZmlsZTptLGlkOml9KSx1KCl9Y2F0Y2goZSl7cmV0dXJuIGwoZSl9fSxsKX1jYXRjaChlKXtsKGUpfX0pfSl9KTtmdW5jdGlvbiBjb21wcmVzc09uV2ViV29ya2VyKGUsYSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGksbyl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHMsYyl7bnx8KG49ZnVuY3Rpb24gY3JlYXRlU291cmNlT2JqZWN0KGUpe3JldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtlXSx7dHlwZTpcImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIn0pKX0oXCJcXG4gICAgZnVuY3Rpb24gaW1hZ2VDb21wcmVzc2lvbiAoKXtyZXR1cm4gKFwiLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLFwiKS5hcHBseShudWxsLCBhcmd1bWVudHMpfVxcblxcbiAgICBpbWFnZUNvbXByZXNzaW9uLmdldERhdGFVcmxGcm9tRmlsZSA9IFwiKS5jb25jYXQoaW1hZ2VDb21wcmVzc2lvbi5nZXREYXRhVXJsRnJvbUZpbGUsXCJcXG4gICAgaW1hZ2VDb21wcmVzc2lvbi5nZXRGaWxlZnJvbURhdGFVcmwgPSBcIikuY29uY2F0KGltYWdlQ29tcHJlc3Npb24uZ2V0RmlsZWZyb21EYXRhVXJsLFwiXFxuICAgIGltYWdlQ29tcHJlc3Npb24ubG9hZEltYWdlID0gXCIpLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLmxvYWRJbWFnZSxcIlxcbiAgICBpbWFnZUNvbXByZXNzaW9uLmRyYXdJbWFnZUluQ2FudmFzID0gXCIpLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLmRyYXdJbWFnZUluQ2FudmFzLFwiXFxuICAgIGltYWdlQ29tcHJlc3Npb24uZHJhd0ZpbGVJbkNhbnZhcyA9IFwiKS5jb25jYXQoaW1hZ2VDb21wcmVzc2lvbi5kcmF3RmlsZUluQ2FudmFzLFwiXFxuICAgIGltYWdlQ29tcHJlc3Npb24uY2FudmFzVG9GaWxlID0gXCIpLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLmNhbnZhc1RvRmlsZSxcIlxcbiAgICBpbWFnZUNvbXByZXNzaW9uLmdldEV4aWZPcmllbnRhdGlvbiA9IFwiKS5jb25jYXQoaW1hZ2VDb21wcmVzc2lvbi5nZXRFeGlmT3JpZW50YXRpb24sXCJcXG4gICAgaW1hZ2VDb21wcmVzc2lvbi5oYW5kbGVNYXhXaWR0aE9ySGVpZ2h0ID0gXCIpLmNvbmNhdChpbWFnZUNvbXByZXNzaW9uLmhhbmRsZU1heFdpZHRoT3JIZWlnaHQsXCJcXG4gICAgaW1hZ2VDb21wcmVzc2lvbi5mb2xsb3dFeGlmT3JpZW50YXRpb24gPSBcIikuY29uY2F0KGltYWdlQ29tcHJlc3Npb24uZm9sbG93RXhpZk9yaWVudGF0aW9uLFwiXFxuXFxuICAgIGdldERhdGFVcmxGcm9tRmlsZSA9IGltYWdlQ29tcHJlc3Npb24uZ2V0RGF0YVVybEZyb21GaWxlXFxuICAgIGdldEZpbGVmcm9tRGF0YVVybCA9IGltYWdlQ29tcHJlc3Npb24uZ2V0RmlsZWZyb21EYXRhVXJsXFxuICAgIGxvYWRJbWFnZSA9IGltYWdlQ29tcHJlc3Npb24ubG9hZEltYWdlXFxuICAgIGRyYXdJbWFnZUluQ2FudmFzID0gaW1hZ2VDb21wcmVzc2lvbi5kcmF3SW1hZ2VJbkNhbnZhc1xcbiAgICBkcmF3RmlsZUluQ2FudmFzID0gaW1hZ2VDb21wcmVzc2lvbi5kcmF3RmlsZUluQ2FudmFzXFxuICAgIGNhbnZhc1RvRmlsZSA9IGltYWdlQ29tcHJlc3Npb24uY2FudmFzVG9GaWxlXFxuICAgIGdldEV4aWZPcmllbnRhdGlvbiA9IGltYWdlQ29tcHJlc3Npb24uZ2V0RXhpZk9yaWVudGF0aW9uXFxuICAgIGhhbmRsZU1heFdpZHRoT3JIZWlnaHQgPSBpbWFnZUNvbXByZXNzaW9uLmhhbmRsZU1heFdpZHRoT3JIZWlnaHRcXG4gICAgZm9sbG93RXhpZk9yaWVudGF0aW9uID0gaW1hZ2VDb21wcmVzc2lvbi5mb2xsb3dFeGlmT3JpZW50YXRpb25cXG5cXG4gICAgZ2V0TmV3Q2FudmFzQW5kQ3R4ID0gXCIpLmNvbmNhdChnZXROZXdDYW52YXNBbmRDdHgsXCJcXG4gICAgXFxuICAgIEN1c3RvbUZpbGVSZWFkZXIgPSBGaWxlUmVhZGVyXFxuICAgIFxcbiAgICBDdXN0b21GaWxlID0gRmlsZVxcbiAgICBcXG4gICAgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBuKSB7IHJldHVybiBhcnIgfVxcblxcbiAgICBmdW5jdGlvbiBjb21wcmVzcyAoKXtyZXR1cm4gKFwiKS5jb25jYXQoY29tcHJlc3MsXCIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyl9XFxuICAgIFwiKSkpO3ZhciB1PXIrKztyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uIGhhbmRsZXIoZSl7ZS5kYXRhLmlkPT09dSYmKHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixoYW5kbGVyKSxlLmRhdGEuZXJyb3ImJm8oZS5kYXRhLmVycm9yKSxpKGUuZGF0YS5maWxlKSl9KSx0LnBvc3RNZXNzYWdlKHtmaWxlOmUsaWQ6dSxpbWFnZUNvbXByZXNzaW9uTGliVXJsOm4sb3B0aW9uczphfSkscygpfSl9KX1mdW5jdGlvbiBpbWFnZUNvbXByZXNzaW9uKGUsbil7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsdCl7dmFyIGEsaTtpZihuLm1heFNpemVNQj1uLm1heFNpemVNQnx8TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLG4udXNlV2ViV29ya2VyPVwiYm9vbGVhblwiIT10eXBlb2Ygbi51c2VXZWJXb3JrZXJ8fG4udXNlV2ViV29ya2VyLCEoZSBpbnN0YW5jZW9mIEJsb2J8fGUgaW5zdGFuY2VvZiBDdXN0b21GaWxlKSlyZXR1cm4gdChuZXcgRXJyb3IoXCJUaGUgZmlsZSBnaXZlbiBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgQmxvYiBvciBGaWxlXCIpKTtpZighL15pbWFnZS8udGVzdChlLnR5cGUpKXJldHVybiB0KG5ldyBFcnJvcihcIlRoZSBmaWxlIGdpdmVuIGlzIG5vdCBhbiBpbWFnZVwiKSk7aWYoaT1cInVuZGVmaW5lZFwiIT10eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUmJnNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSwhbi51c2VXZWJXb3JrZXJ8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFdvcmtlcnx8aSlyZXR1cm4gY29tcHJlc3MoZSxuKS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gYT1lLCRJZl8zLmNhbGwodGhpcyl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9fS5iaW5kKHRoaXMpLHQpO3ZhciBvPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiAkSWZfMy5jYWxsKHRoaXMpfWNhdGNoKGUpe3JldHVybiB0KGUpfX0uYmluZCh0aGlzKSxzPWZ1bmN0aW9uICRUcnlfMV9DYXRjaChyKXt0cnl7cmV0dXJuIGNvbnNvbGUud2FybihcIlJ1biBjb21wcmVzc2lvbiBpbiB3ZWIgd29ya2VyIGZhaWxlZDpcIixyLFwiLCBmYWxsIGJhY2sgdG8gbWFpbiB0aHJlYWRcIiksY29tcHJlc3MoZSxuKS50aGVuKGZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gYT1lLG8oKX1jYXRjaChlKXtyZXR1cm4gdChlKX19LHQpfWNhdGNoKGUpe3JldHVybiB0KGUpfX07dHJ5e3JldHVybiBjb21wcmVzc09uV2ViV29ya2VyKGUsbikudGhlbihmdW5jdGlvbihlKXt0cnl7cmV0dXJuIGE9ZSxvKCl9Y2F0Y2goZSl7cmV0dXJuIHMoZSl9fSxzKX1jYXRjaChlKXtzKGUpfWZ1bmN0aW9uICRJZl8zKCl7dHJ5e2EubmFtZT1lLm5hbWUsYS5sYXN0TW9kaWZpZWQ9ZS5sYXN0TW9kaWZpZWR9Y2F0Y2goZSl7fXJldHVybiByKGEpfX0pfWltYWdlQ29tcHJlc3Npb24uZ2V0RGF0YVVybEZyb21GaWxlPWdldERhdGFVcmxGcm9tRmlsZSxpbWFnZUNvbXByZXNzaW9uLmdldEZpbGVmcm9tRGF0YVVybD1nZXRGaWxlZnJvbURhdGFVcmwsaW1hZ2VDb21wcmVzc2lvbi5sb2FkSW1hZ2U9bG9hZEltYWdlLGltYWdlQ29tcHJlc3Npb24uZHJhd0ltYWdlSW5DYW52YXM9ZHJhd0ltYWdlSW5DYW52YXMsaW1hZ2VDb21wcmVzc2lvbi5kcmF3RmlsZUluQ2FudmFzPWRyYXdGaWxlSW5DYW52YXMsaW1hZ2VDb21wcmVzc2lvbi5jYW52YXNUb0ZpbGU9Y2FudmFzVG9GaWxlLGltYWdlQ29tcHJlc3Npb24uZ2V0RXhpZk9yaWVudGF0aW9uPWdldEV4aWZPcmllbnRhdGlvbixpbWFnZUNvbXByZXNzaW9uLmhhbmRsZU1heFdpZHRoT3JIZWlnaHQ9aGFuZGxlTWF4V2lkdGhPckhlaWdodCxpbWFnZUNvbXByZXNzaW9uLmZvbGxvd0V4aWZPcmllbnRhdGlvbj1mb2xsb3dFeGlmT3JpZW50YXRpb247ZXhwb3J0IGRlZmF1bHQgaW1hZ2VDb21wcmVzc2lvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItaW1hZ2UtY29tcHJlc3Npb24ubWpzLm1hcFxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoeHMsIGZuKSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHggPSBmbih4c1tpXSwgaSk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSByZXMucHVzaC5hcHBseShyZXMsIHgpO1xuICAgICAgICBlbHNlIHJlcy5wdXNoKHgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gbWluaW1hdGNoXG5taW5pbWF0Y2guTWluaW1hdGNoID0gTWluaW1hdGNoXG5cbnZhciBwYXRoID0geyBzZXA6ICcvJyB9XG50cnkge1xuICBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG59IGNhdGNoIChlcikge31cblxudmFyIEdMT0JTVEFSID0gbWluaW1hdGNoLkdMT0JTVEFSID0gTWluaW1hdGNoLkdMT0JTVEFSID0ge31cbnZhciBleHBhbmQgPSByZXF1aXJlKCdicmFjZS1leHBhbnNpb24nKVxuXG52YXIgcGxUeXBlcyA9IHtcbiAgJyEnOiB7IG9wZW46ICcoPzooPyEoPzonLCBjbG9zZTogJykpW14vXSo/KSd9LFxuICAnPyc6IHsgb3BlbjogJyg/OicsIGNsb3NlOiAnKT8nIH0sXG4gICcrJzogeyBvcGVuOiAnKD86JywgY2xvc2U6ICcpKycgfSxcbiAgJyonOiB7IG9wZW46ICcoPzonLCBjbG9zZTogJykqJyB9LFxuICAnQCc6IHsgb3BlbjogJyg/OicsIGNsb3NlOiAnKScgfVxufVxuXG4vLyBhbnkgc2luZ2xlIHRoaW5nIG90aGVyIHRoYW4gL1xuLy8gZG9uJ3QgbmVlZCB0byBlc2NhcGUgLyB3aGVuIHVzaW5nIG5ldyBSZWdFeHAoKVxudmFyIHFtYXJrID0gJ1teL10nXG5cbi8vICogPT4gYW55IG51bWJlciBvZiBjaGFyYWN0ZXJzXG52YXIgc3RhciA9IHFtYXJrICsgJyo/J1xuXG4vLyAqKiB3aGVuIGRvdHMgYXJlIGFsbG93ZWQuICBBbnl0aGluZyBnb2VzLCBleGNlcHQgLi4gYW5kIC5cbi8vIG5vdCAoXiBvciAvIGZvbGxvd2VkIGJ5IG9uZSBvciB0d28gZG90cyBmb2xsb3dlZCBieSAkIG9yIC8pLFxuLy8gZm9sbG93ZWQgYnkgYW55dGhpbmcsIGFueSBudW1iZXIgb2YgdGltZXMuXG52YXIgdHdvU3RhckRvdCA9ICcoPzooPyEoPzpcXFxcXFwvfF4pKD86XFxcXC57MSwyfSkoJHxcXFxcXFwvKSkuKSo/J1xuXG4vLyBub3QgYSBeIG9yIC8gZm9sbG93ZWQgYnkgYSBkb3QsXG4vLyBmb2xsb3dlZCBieSBhbnl0aGluZywgYW55IG51bWJlciBvZiB0aW1lcy5cbnZhciB0d29TdGFyTm9Eb3QgPSAnKD86KD8hKD86XFxcXFxcL3xeKVxcXFwuKS4pKj8nXG5cbi8vIGNoYXJhY3RlcnMgdGhhdCBuZWVkIHRvIGJlIGVzY2FwZWQgaW4gUmVnRXhwLlxudmFyIHJlU3BlY2lhbHMgPSBjaGFyU2V0KCcoKS4qe30rP1tdXiRcXFxcIScpXG5cbi8vIFwiYWJjXCIgLT4geyBhOnRydWUsIGI6dHJ1ZSwgYzp0cnVlIH1cbmZ1bmN0aW9uIGNoYXJTZXQgKHMpIHtcbiAgcmV0dXJuIHMuc3BsaXQoJycpLnJlZHVjZShmdW5jdGlvbiAoc2V0LCBjKSB7XG4gICAgc2V0W2NdID0gdHJ1ZVxuICAgIHJldHVybiBzZXRcbiAgfSwge30pXG59XG5cbi8vIG5vcm1hbGl6ZXMgc2xhc2hlcy5cbnZhciBzbGFzaFNwbGl0ID0gL1xcLysvXG5cbm1pbmltYXRjaC5maWx0ZXIgPSBmaWx0ZXJcbmZ1bmN0aW9uIGZpbHRlciAocGF0dGVybiwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICByZXR1cm4gZnVuY3Rpb24gKHAsIGksIGxpc3QpIHtcbiAgICByZXR1cm4gbWluaW1hdGNoKHAsIHBhdHRlcm4sIG9wdGlvbnMpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0IChhLCBiKSB7XG4gIGEgPSBhIHx8IHt9XG4gIGIgPSBiIHx8IHt9XG4gIHZhciB0ID0ge31cbiAgT2JqZWN0LmtleXMoYikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHRba10gPSBiW2tdXG4gIH0pXG4gIE9iamVjdC5rZXlzKGEpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICB0W2tdID0gYVtrXVxuICB9KVxuICByZXR1cm4gdFxufVxuXG5taW5pbWF0Y2guZGVmYXVsdHMgPSBmdW5jdGlvbiAoZGVmKSB7XG4gIGlmICghZGVmIHx8ICFPYmplY3Qua2V5cyhkZWYpLmxlbmd0aCkgcmV0dXJuIG1pbmltYXRjaFxuXG4gIHZhciBvcmlnID0gbWluaW1hdGNoXG5cbiAgdmFyIG0gPSBmdW5jdGlvbiBtaW5pbWF0Y2ggKHAsIHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3JpZy5taW5pbWF0Y2gocCwgcGF0dGVybiwgZXh0KGRlZiwgb3B0aW9ucykpXG4gIH1cblxuICBtLk1pbmltYXRjaCA9IGZ1bmN0aW9uIE1pbmltYXRjaCAocGF0dGVybiwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgb3JpZy5NaW5pbWF0Y2gocGF0dGVybiwgZXh0KGRlZiwgb3B0aW9ucykpXG4gIH1cblxuICByZXR1cm4gbVxufVxuXG5NaW5pbWF0Y2guZGVmYXVsdHMgPSBmdW5jdGlvbiAoZGVmKSB7XG4gIGlmICghZGVmIHx8ICFPYmplY3Qua2V5cyhkZWYpLmxlbmd0aCkgcmV0dXJuIE1pbmltYXRjaFxuICByZXR1cm4gbWluaW1hdGNoLmRlZmF1bHRzKGRlZikuTWluaW1hdGNoXG59XG5cbmZ1bmN0aW9uIG1pbmltYXRjaCAocCwgcGF0dGVybiwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHBhdHRlcm4gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZ2xvYiBwYXR0ZXJuIHN0cmluZyByZXF1aXJlZCcpXG4gIH1cblxuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fVxuXG4gIC8vIHNob3J0Y3V0OiBjb21tZW50cyBtYXRjaCBub3RoaW5nLlxuICBpZiAoIW9wdGlvbnMubm9jb21tZW50ICYmIHBhdHRlcm4uY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFwiXCIgb25seSBtYXRjaGVzIFwiXCJcbiAgaWYgKHBhdHRlcm4udHJpbSgpID09PSAnJykgcmV0dXJuIHAgPT09ICcnXG5cbiAgcmV0dXJuIG5ldyBNaW5pbWF0Y2gocGF0dGVybiwgb3B0aW9ucykubWF0Y2gocClcbn1cblxuZnVuY3Rpb24gTWluaW1hdGNoIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNaW5pbWF0Y2gpKSB7XG4gICAgcmV0dXJuIG5ldyBNaW5pbWF0Y2gocGF0dGVybiwgb3B0aW9ucylcbiAgfVxuXG4gIGlmICh0eXBlb2YgcGF0dGVybiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdnbG9iIHBhdHRlcm4gc3RyaW5nIHJlcXVpcmVkJylcbiAgfVxuXG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9XG4gIHBhdHRlcm4gPSBwYXR0ZXJuLnRyaW0oKVxuXG4gIC8vIHdpbmRvd3Mgc3VwcG9ydDogbmVlZCB0byB1c2UgLywgbm90IFxcXG4gIGlmIChwYXRoLnNlcCAhPT0gJy8nKSB7XG4gICAgcGF0dGVybiA9IHBhdHRlcm4uc3BsaXQocGF0aC5zZXApLmpvaW4oJy8nKVxuICB9XG5cbiAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLnNldCA9IFtdXG4gIHRoaXMucGF0dGVybiA9IHBhdHRlcm5cbiAgdGhpcy5yZWdleHAgPSBudWxsXG4gIHRoaXMubmVnYXRlID0gZmFsc2VcbiAgdGhpcy5jb21tZW50ID0gZmFsc2VcbiAgdGhpcy5lbXB0eSA9IGZhbHNlXG5cbiAgLy8gbWFrZSB0aGUgc2V0IG9mIHJlZ2V4cHMgZXRjLlxuICB0aGlzLm1ha2UoKVxufVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKCkge31cblxuTWluaW1hdGNoLnByb3RvdHlwZS5tYWtlID0gbWFrZVxuZnVuY3Rpb24gbWFrZSAoKSB7XG4gIC8vIGRvbid0IGRvIGl0IG1vcmUgdGhhbiBvbmNlLlxuICBpZiAodGhpcy5fbWFkZSkgcmV0dXJuXG5cbiAgdmFyIHBhdHRlcm4gPSB0aGlzLnBhdHRlcm5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICAvLyBlbXB0eSBwYXR0ZXJucyBhbmQgY29tbWVudHMgbWF0Y2ggbm90aGluZy5cbiAgaWYgKCFvcHRpb25zLm5vY29tbWVudCAmJiBwYXR0ZXJuLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgdGhpcy5jb21tZW50ID0gdHJ1ZVxuICAgIHJldHVyblxuICB9XG4gIGlmICghcGF0dGVybikge1xuICAgIHRoaXMuZW1wdHkgPSB0cnVlXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBzdGVwIDE6IGZpZ3VyZSBvdXQgbmVnYXRpb24sIGV0Yy5cbiAgdGhpcy5wYXJzZU5lZ2F0ZSgpXG5cbiAgLy8gc3RlcCAyOiBleHBhbmQgYnJhY2VzXG4gIHZhciBzZXQgPSB0aGlzLmdsb2JTZXQgPSB0aGlzLmJyYWNlRXhwYW5kKClcblxuICBpZiAob3B0aW9ucy5kZWJ1ZykgdGhpcy5kZWJ1ZyA9IGNvbnNvbGUuZXJyb3JcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIC8vIHN0ZXAgMzogbm93IHdlIGhhdmUgYSBzZXQsIHNvIHR1cm4gZWFjaCBvbmUgaW50byBhIHNlcmllcyBvZiBwYXRoLXBvcnRpb25cbiAgLy8gbWF0Y2hpbmcgcGF0dGVybnMuXG4gIC8vIFRoZXNlIHdpbGwgYmUgcmVnZXhwcywgZXhjZXB0IGluIHRoZSBjYXNlIG9mIFwiKipcIiwgd2hpY2ggaXNcbiAgLy8gc2V0IHRvIHRoZSBHTE9CU1RBUiBvYmplY3QgZm9yIGdsb2JzdGFyIGJlaGF2aW9yLFxuICAvLyBhbmQgd2lsbCBub3QgY29udGFpbiBhbnkgLyBjaGFyYWN0ZXJzXG4gIHNldCA9IHRoaXMuZ2xvYlBhcnRzID0gc2V0Lm1hcChmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnNwbGl0KHNsYXNoU3BsaXQpXG4gIH0pXG5cbiAgdGhpcy5kZWJ1Zyh0aGlzLnBhdHRlcm4sIHNldClcblxuICAvLyBnbG9iIC0tPiByZWdleHBzXG4gIHNldCA9IHNldC5tYXAoZnVuY3Rpb24gKHMsIHNpLCBzZXQpIHtcbiAgICByZXR1cm4gcy5tYXAodGhpcy5wYXJzZSwgdGhpcylcbiAgfSwgdGhpcylcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIC8vIGZpbHRlciBvdXQgZXZlcnl0aGluZyB0aGF0IGRpZG4ndCBjb21waWxlIHByb3Blcmx5LlxuICBzZXQgPSBzZXQuZmlsdGVyKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMuaW5kZXhPZihmYWxzZSkgPT09IC0xXG4gIH0pXG5cbiAgdGhpcy5kZWJ1Zyh0aGlzLnBhdHRlcm4sIHNldClcblxuICB0aGlzLnNldCA9IHNldFxufVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLnBhcnNlTmVnYXRlID0gcGFyc2VOZWdhdGVcbmZ1bmN0aW9uIHBhcnNlTmVnYXRlICgpIHtcbiAgdmFyIHBhdHRlcm4gPSB0aGlzLnBhdHRlcm5cbiAgdmFyIG5lZ2F0ZSA9IGZhbHNlXG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG4gIHZhciBuZWdhdGVPZmZzZXQgPSAwXG5cbiAgaWYgKG9wdGlvbnMubm9uZWdhdGUpIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGF0dGVybi5sZW5ndGhcbiAgICA7IGkgPCBsICYmIHBhdHRlcm4uY2hhckF0KGkpID09PSAnISdcbiAgICA7IGkrKykge1xuICAgIG5lZ2F0ZSA9ICFuZWdhdGVcbiAgICBuZWdhdGVPZmZzZXQrK1xuICB9XG5cbiAgaWYgKG5lZ2F0ZU9mZnNldCkgdGhpcy5wYXR0ZXJuID0gcGF0dGVybi5zdWJzdHIobmVnYXRlT2Zmc2V0KVxuICB0aGlzLm5lZ2F0ZSA9IG5lZ2F0ZVxufVxuXG4vLyBCcmFjZSBleHBhbnNpb246XG4vLyBhe2IsY31kIC0+IGFiZCBhY2Rcbi8vIGF7Yix9YyAtPiBhYmMgYWNcbi8vIGF7MC4uM31kIC0+IGEwZCBhMWQgYTJkIGEzZFxuLy8gYXtiLGN7ZCxlfWZ9ZyAtPiBhYmcgYWNkZmcgYWNlZmdcbi8vIGF7YixjfWR7ZSxmfWcgLT4gYWJkZWcgYWNkZWcgYWJkZWcgYWJkZmdcbi8vXG4vLyBJbnZhbGlkIHNldHMgYXJlIG5vdCBleHBhbmRlZC5cbi8vIGF7Mi4ufWIgLT4gYXsyLi59YlxuLy8gYXtifWMgLT4gYXtifWNcbm1pbmltYXRjaC5icmFjZUV4cGFuZCA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIHJldHVybiBicmFjZUV4cGFuZChwYXR0ZXJuLCBvcHRpb25zKVxufVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLmJyYWNlRXhwYW5kID0gYnJhY2VFeHBhbmRcblxuZnVuY3Rpb24gYnJhY2VFeHBhbmQgKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNaW5pbWF0Y2gpIHtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuICB9XG5cbiAgcGF0dGVybiA9IHR5cGVvZiBwYXR0ZXJuID09PSAndW5kZWZpbmVkJ1xuICAgID8gdGhpcy5wYXR0ZXJuIDogcGF0dGVyblxuXG4gIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmRlZmluZWQgcGF0dGVybicpXG4gIH1cblxuICBpZiAob3B0aW9ucy5ub2JyYWNlIHx8XG4gICAgIXBhdHRlcm4ubWF0Y2goL1xcey4qXFx9LykpIHtcbiAgICAvLyBzaG9ydGN1dC4gbm8gbmVlZCB0byBleHBhbmQuXG4gICAgcmV0dXJuIFtwYXR0ZXJuXVxuICB9XG5cbiAgcmV0dXJuIGV4cGFuZChwYXR0ZXJuKVxufVxuXG4vLyBwYXJzZSBhIGNvbXBvbmVudCBvZiB0aGUgZXhwYW5kZWQgc2V0LlxuLy8gQXQgdGhpcyBwb2ludCwgbm8gcGF0dGVybiBtYXkgY29udGFpbiBcIi9cIiBpbiBpdFxuLy8gc28gd2UncmUgZ29pbmcgdG8gcmV0dXJuIGEgMmQgYXJyYXksIHdoZXJlIGVhY2ggZW50cnkgaXMgdGhlIGZ1bGxcbi8vIHBhdHRlcm4sIHNwbGl0IG9uICcvJywgYW5kIHRoZW4gdHVybmVkIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24uXG4vLyBBIHJlZ2V4cCBpcyBtYWRlIGF0IHRoZSBlbmQgd2hpY2ggam9pbnMgZWFjaCBhcnJheSB3aXRoIGFuXG4vLyBlc2NhcGVkIC8sIGFuZCBhbm90aGVyIGZ1bGwgb25lIHdoaWNoIGpvaW5zIGVhY2ggcmVnZXhwIHdpdGggfC5cbi8vXG4vLyBGb2xsb3dpbmcgdGhlIGxlYWQgb2YgQmFzaCA0LjEsIG5vdGUgdGhhdCBcIioqXCIgb25seSBoYXMgc3BlY2lhbCBtZWFuaW5nXG4vLyB3aGVuIGl0IGlzIHRoZSAqb25seSogdGhpbmcgaW4gYSBwYXRoIHBvcnRpb24uICBPdGhlcndpc2UsIGFueSBzZXJpZXNcbi8vIG9mICogaXMgZXF1aXZhbGVudCB0byBhIHNpbmdsZSAqLiAgR2xvYnN0YXIgYmVoYXZpb3IgaXMgZW5hYmxlZCBieVxuLy8gZGVmYXVsdCwgYW5kIGNhbiBiZSBkaXNhYmxlZCBieSBzZXR0aW5nIG9wdGlvbnMubm9nbG9ic3Rhci5cbk1pbmltYXRjaC5wcm90b3R5cGUucGFyc2UgPSBwYXJzZVxudmFyIFNVQlBBUlNFID0ge31cbmZ1bmN0aW9uIHBhcnNlIChwYXR0ZXJuLCBpc1N1Yikge1xuICBpZiAocGF0dGVybi5sZW5ndGggPiAxMDI0ICogNjQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXR0ZXJuIGlzIHRvbyBsb25nJylcbiAgfVxuXG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG5cbiAgLy8gc2hvcnRjdXRzXG4gIGlmICghb3B0aW9ucy5ub2dsb2JzdGFyICYmIHBhdHRlcm4gPT09ICcqKicpIHJldHVybiBHTE9CU1RBUlxuICBpZiAocGF0dGVybiA9PT0gJycpIHJldHVybiAnJ1xuXG4gIHZhciByZSA9ICcnXG4gIHZhciBoYXNNYWdpYyA9ICEhb3B0aW9ucy5ub2Nhc2VcbiAgdmFyIGVzY2FwaW5nID0gZmFsc2VcbiAgLy8gPyA9PiBvbmUgc2luZ2xlIGNoYXJhY3RlclxuICB2YXIgcGF0dGVybkxpc3RTdGFjayA9IFtdXG4gIHZhciBuZWdhdGl2ZUxpc3RzID0gW11cbiAgdmFyIHN0YXRlQ2hhclxuICB2YXIgaW5DbGFzcyA9IGZhbHNlXG4gIHZhciByZUNsYXNzU3RhcnQgPSAtMVxuICB2YXIgY2xhc3NTdGFydCA9IC0xXG4gIC8vIC4gYW5kIC4uIG5ldmVyIG1hdGNoIGFueXRoaW5nIHRoYXQgZG9lc24ndCBzdGFydCB3aXRoIC4sXG4gIC8vIGV2ZW4gd2hlbiBvcHRpb25zLmRvdCBpcyBzZXQuXG4gIHZhciBwYXR0ZXJuU3RhcnQgPSBwYXR0ZXJuLmNoYXJBdCgwKSA9PT0gJy4nID8gJycgLy8gYW55dGhpbmdcbiAgLy8gbm90IChzdGFydCBvciAvIGZvbGxvd2VkIGJ5IC4gb3IgLi4gZm9sbG93ZWQgYnkgLyBvciBlbmQpXG4gIDogb3B0aW9ucy5kb3QgPyAnKD8hKD86XnxcXFxcXFwvKVxcXFwuezEsMn0oPzokfFxcXFxcXC8pKSdcbiAgOiAnKD8hXFxcXC4pJ1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBmdW5jdGlvbiBjbGVhclN0YXRlQ2hhciAoKSB7XG4gICAgaWYgKHN0YXRlQ2hhcikge1xuICAgICAgLy8gd2UgaGFkIHNvbWUgc3RhdGUtdHJhY2tpbmcgY2hhcmFjdGVyXG4gICAgICAvLyB0aGF0IHdhc24ndCBjb25zdW1lZCBieSB0aGlzIHBhc3MuXG4gICAgICBzd2l0Y2ggKHN0YXRlQ2hhcikge1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICByZSArPSBzdGFyXG4gICAgICAgICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJz8nOlxuICAgICAgICAgIHJlICs9IHFtYXJrXG4gICAgICAgICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmUgKz0gJ1xcXFwnICsgc3RhdGVDaGFyXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBzZWxmLmRlYnVnKCdjbGVhclN0YXRlQ2hhciAlaiAlaicsIHN0YXRlQ2hhciwgcmUpXG4gICAgICBzdGF0ZUNoYXIgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aCwgY1xuICAgIDsgKGkgPCBsZW4pICYmIChjID0gcGF0dGVybi5jaGFyQXQoaSkpXG4gICAgOyBpKyspIHtcbiAgICB0aGlzLmRlYnVnKCclc1xcdCVzICVzICVqJywgcGF0dGVybiwgaSwgcmUsIGMpXG5cbiAgICAvLyBza2lwIG92ZXIgYW55IHRoYXQgYXJlIGVzY2FwZWQuXG4gICAgaWYgKGVzY2FwaW5nICYmIHJlU3BlY2lhbHNbY10pIHtcbiAgICAgIHJlICs9ICdcXFxcJyArIGNcbiAgICAgIGVzY2FwaW5nID0gZmFsc2VcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgc3dpdGNoIChjKSB7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgLy8gY29tcGxldGVseSBub3QgYWxsb3dlZCwgZXZlbiBlc2NhcGVkLlxuICAgICAgICAvLyBTaG91bGQgYWxyZWFkeSBiZSBwYXRoLXNwbGl0IGJ5IG5vdy5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgIGNhc2UgJ1xcXFwnOlxuICAgICAgICBjbGVhclN0YXRlQ2hhcigpXG4gICAgICAgIGVzY2FwaW5nID0gdHJ1ZVxuICAgICAgY29udGludWVcblxuICAgICAgLy8gdGhlIHZhcmlvdXMgc3RhdGVDaGFyIHZhbHVlc1xuICAgICAgLy8gZm9yIHRoZSBcImV4dGdsb2JcIiBzdHVmZi5cbiAgICAgIGNhc2UgJz8nOlxuICAgICAgY2FzZSAnKic6XG4gICAgICBjYXNlICcrJzpcbiAgICAgIGNhc2UgJ0AnOlxuICAgICAgY2FzZSAnISc6XG4gICAgICAgIHRoaXMuZGVidWcoJyVzXFx0JXMgJXMgJWogPC0tIHN0YXRlQ2hhcicsIHBhdHRlcm4sIGksIHJlLCBjKVxuXG4gICAgICAgIC8vIGFsbCBvZiB0aG9zZSBhcmUgbGl0ZXJhbHMgaW5zaWRlIGEgY2xhc3MsIGV4Y2VwdCB0aGF0XG4gICAgICAgIC8vIHRoZSBnbG9iIFshYV0gbWVhbnMgW15hXSBpbiByZWdleHBcbiAgICAgICAgaWYgKGluQ2xhc3MpIHtcbiAgICAgICAgICB0aGlzLmRlYnVnKCcgIGluIGNsYXNzJylcbiAgICAgICAgICBpZiAoYyA9PT0gJyEnICYmIGkgPT09IGNsYXNzU3RhcnQgKyAxKSBjID0gJ14nXG4gICAgICAgICAgcmUgKz0gY1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBzdGF0ZUNoYXIsIHRoZW4gaXQgbWVhbnNcbiAgICAgICAgLy8gdGhhdCB0aGVyZSB3YXMgc29tZXRoaW5nIGxpa2UgKiogb3IgKz8gaW4gdGhlcmUuXG4gICAgICAgIC8vIEhhbmRsZSB0aGUgc3RhdGVDaGFyLCB0aGVuIHByb2NlZWQgd2l0aCB0aGlzIG9uZS5cbiAgICAgICAgc2VsZi5kZWJ1ZygnY2FsbCBjbGVhclN0YXRlQ2hhciAlaicsIHN0YXRlQ2hhcilcbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgICBzdGF0ZUNoYXIgPSBjXG4gICAgICAgIC8vIGlmIGV4dGdsb2IgaXMgZGlzYWJsZWQsIHRoZW4gKyhhc2RmfGZvbykgaXNuJ3QgYSB0aGluZy5cbiAgICAgICAgLy8ganVzdCBjbGVhciB0aGUgc3RhdGVjaGFyICpub3cqLCByYXRoZXIgdGhhbiBldmVuIGRpdmluZyBpbnRvXG4gICAgICAgIC8vIHRoZSBwYXR0ZXJuTGlzdCBzdHVmZi5cbiAgICAgICAgaWYgKG9wdGlvbnMubm9leHQpIGNsZWFyU3RhdGVDaGFyKClcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhc2UgJygnOlxuICAgICAgICBpZiAoaW5DbGFzcykge1xuICAgICAgICAgIHJlICs9ICcoJ1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0YXRlQ2hhcikge1xuICAgICAgICAgIHJlICs9ICdcXFxcKCdcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgcGF0dGVybkxpc3RTdGFjay5wdXNoKHtcbiAgICAgICAgICB0eXBlOiBzdGF0ZUNoYXIsXG4gICAgICAgICAgc3RhcnQ6IGkgLSAxLFxuICAgICAgICAgIHJlU3RhcnQ6IHJlLmxlbmd0aCxcbiAgICAgICAgICBvcGVuOiBwbFR5cGVzW3N0YXRlQ2hhcl0ub3BlbixcbiAgICAgICAgICBjbG9zZTogcGxUeXBlc1tzdGF0ZUNoYXJdLmNsb3NlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG5lZ2F0aW9uIGlzICg/Oig/IWpzKVteL10qKVxuICAgICAgICByZSArPSBzdGF0ZUNoYXIgPT09ICchJyA/ICcoPzooPyEoPzonIDogJyg/OidcbiAgICAgICAgdGhpcy5kZWJ1ZygncGxUeXBlICVqICVqJywgc3RhdGVDaGFyLCByZSlcbiAgICAgICAgc3RhdGVDaGFyID0gZmFsc2VcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhc2UgJyknOlxuICAgICAgICBpZiAoaW5DbGFzcyB8fCAhcGF0dGVybkxpc3RTdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICByZSArPSAnXFxcXCknXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcbiAgICAgICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgICAgIHZhciBwbCA9IHBhdHRlcm5MaXN0U3RhY2sucG9wKClcbiAgICAgICAgLy8gbmVnYXRpb24gaXMgKD86KD8hanMpW14vXSopXG4gICAgICAgIC8vIFRoZSBvdGhlcnMgYXJlICg/OjxwYXR0ZXJuPik8dHlwZT5cbiAgICAgICAgcmUgKz0gcGwuY2xvc2VcbiAgICAgICAgaWYgKHBsLnR5cGUgPT09ICchJykge1xuICAgICAgICAgIG5lZ2F0aXZlTGlzdHMucHVzaChwbClcbiAgICAgICAgfVxuICAgICAgICBwbC5yZUVuZCA9IHJlLmxlbmd0aFxuICAgICAgY29udGludWVcblxuICAgICAgY2FzZSAnfCc6XG4gICAgICAgIGlmIChpbkNsYXNzIHx8ICFwYXR0ZXJuTGlzdFN0YWNrLmxlbmd0aCB8fCBlc2NhcGluZykge1xuICAgICAgICAgIHJlICs9ICdcXFxcfCdcbiAgICAgICAgICBlc2NhcGluZyA9IGZhbHNlXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcbiAgICAgICAgcmUgKz0gJ3wnXG4gICAgICBjb250aW51ZVxuXG4gICAgICAvLyB0aGVzZSBhcmUgbW9zdGx5IHRoZSBzYW1lIGluIHJlZ2V4cCBhbmQgZ2xvYlxuICAgICAgY2FzZSAnWyc6XG4gICAgICAgIC8vIHN3YWxsb3cgYW55IHN0YXRlLXRyYWNraW5nIGNoYXIgYmVmb3JlIHRoZSBbXG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcblxuICAgICAgICBpZiAoaW5DbGFzcykge1xuICAgICAgICAgIHJlICs9ICdcXFxcJyArIGNcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaW5DbGFzcyA9IHRydWVcbiAgICAgICAgY2xhc3NTdGFydCA9IGlcbiAgICAgICAgcmVDbGFzc1N0YXJ0ID0gcmUubGVuZ3RoXG4gICAgICAgIHJlICs9IGNcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhc2UgJ10nOlxuICAgICAgICAvLyAgYSByaWdodCBicmFja2V0IHNoYWxsIGxvc2UgaXRzIHNwZWNpYWxcbiAgICAgICAgLy8gIG1lYW5pbmcgYW5kIHJlcHJlc2VudCBpdHNlbGYgaW5cbiAgICAgICAgLy8gIGEgYnJhY2tldCBleHByZXNzaW9uIGlmIGl0IG9jY3Vyc1xuICAgICAgICAvLyAgZmlyc3QgaW4gdGhlIGxpc3QuICAtLSBQT1NJWC4yIDIuOC4zLjJcbiAgICAgICAgaWYgKGkgPT09IGNsYXNzU3RhcnQgKyAxIHx8ICFpbkNsYXNzKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwnICsgY1xuICAgICAgICAgIGVzY2FwaW5nID0gZmFsc2VcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGxlZnQgYSBjbGFzcyBvcGVuLlxuICAgICAgICAvLyBcIlt6LWFdXCIgaXMgdmFsaWQsIGVxdWl2YWxlbnQgdG8gXCJcXFt6LWFcXF1cIlxuICAgICAgICBpZiAoaW5DbGFzcykge1xuICAgICAgICAgIC8vIHNwbGl0IHdoZXJlIHRoZSBsYXN0IFsgd2FzLCBtYWtlIHN1cmUgd2UgZG9uJ3QgaGF2ZVxuICAgICAgICAgIC8vIGFuIGludmFsaWQgcmUuIGlmIHNvLCByZS13YWxrIHRoZSBjb250ZW50cyBvZiB0aGVcbiAgICAgICAgICAvLyB3b3VsZC1iZSBjbGFzcyB0byByZS10cmFuc2xhdGUgYW55IGNoYXJhY3RlcnMgdGhhdFxuICAgICAgICAgIC8vIHdlcmUgcGFzc2VkIHRocm91Z2ggYXMtaXNcbiAgICAgICAgICAvLyBUT0RPOiBJdCB3b3VsZCBwcm9iYWJseSBiZSBmYXN0ZXIgdG8gZGV0ZXJtaW5lIHRoaXNcbiAgICAgICAgICAvLyB3aXRob3V0IGEgdHJ5L2NhdGNoIGFuZCBhIG5ldyBSZWdFeHAsIGJ1dCBpdCdzIHRyaWNreVxuICAgICAgICAgIC8vIHRvIGRvIHNhZmVseS4gIEZvciBub3csIHRoaXMgaXMgc2FmZSBhbmQgd29ya3MuXG4gICAgICAgICAgdmFyIGNzID0gcGF0dGVybi5zdWJzdHJpbmcoY2xhc3NTdGFydCArIDEsIGkpXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFJlZ0V4cCgnWycgKyBjcyArICddJylcbiAgICAgICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICAgICAgLy8gbm90IGEgdmFsaWQgY2xhc3MhXG4gICAgICAgICAgICB2YXIgc3AgPSB0aGlzLnBhcnNlKGNzLCBTVUJQQVJTRSlcbiAgICAgICAgICAgIHJlID0gcmUuc3Vic3RyKDAsIHJlQ2xhc3NTdGFydCkgKyAnXFxcXFsnICsgc3BbMF0gKyAnXFxcXF0nXG4gICAgICAgICAgICBoYXNNYWdpYyA9IGhhc01hZ2ljIHx8IHNwWzFdXG4gICAgICAgICAgICBpbkNsYXNzID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluaXNoIHVwIHRoZSBjbGFzcy5cbiAgICAgICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgICAgIGluQ2xhc3MgPSBmYWxzZVxuICAgICAgICByZSArPSBjXG4gICAgICBjb250aW51ZVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBzd2FsbG93IGFueSBzdGF0ZSBjaGFyIHRoYXQgd2Fzbid0IGNvbnN1bWVkXG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcblxuICAgICAgICBpZiAoZXNjYXBpbmcpIHtcbiAgICAgICAgICAvLyBubyBuZWVkXG4gICAgICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgICB9IGVsc2UgaWYgKHJlU3BlY2lhbHNbY11cbiAgICAgICAgICAmJiAhKGMgPT09ICdeJyAmJiBpbkNsYXNzKSkge1xuICAgICAgICAgIHJlICs9ICdcXFxcJ1xuICAgICAgICB9XG5cbiAgICAgICAgcmUgKz0gY1xuXG4gICAgfSAvLyBzd2l0Y2hcbiAgfSAvLyBmb3JcblxuICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgbGVmdCBhIGNsYXNzIG9wZW4uXG4gIC8vIFwiW2FiY1wiIGlzIHZhbGlkLCBlcXVpdmFsZW50IHRvIFwiXFxbYWJjXCJcbiAgaWYgKGluQ2xhc3MpIHtcbiAgICAvLyBzcGxpdCB3aGVyZSB0aGUgbGFzdCBbIHdhcywgYW5kIGVzY2FwZSBpdFxuICAgIC8vIHRoaXMgaXMgYSBodWdlIHBpdGEuICBXZSBub3cgaGF2ZSB0byByZS13YWxrXG4gICAgLy8gdGhlIGNvbnRlbnRzIG9mIHRoZSB3b3VsZC1iZSBjbGFzcyB0byByZS10cmFuc2xhdGVcbiAgICAvLyBhbnkgY2hhcmFjdGVycyB0aGF0IHdlcmUgcGFzc2VkIHRocm91Z2ggYXMtaXNcbiAgICBjcyA9IHBhdHRlcm4uc3Vic3RyKGNsYXNzU3RhcnQgKyAxKVxuICAgIHNwID0gdGhpcy5wYXJzZShjcywgU1VCUEFSU0UpXG4gICAgcmUgPSByZS5zdWJzdHIoMCwgcmVDbGFzc1N0YXJ0KSArICdcXFxcWycgKyBzcFswXVxuICAgIGhhc01hZ2ljID0gaGFzTWFnaWMgfHwgc3BbMV1cbiAgfVxuXG4gIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB3ZSBoYWQgYSArKCB0aGluZyBhdCB0aGUgKmVuZCpcbiAgLy8gb2YgdGhlIHBhdHRlcm4uXG4gIC8vIGVhY2ggcGF0dGVybiBsaXN0IHN0YWNrIGFkZHMgMyBjaGFycywgYW5kIHdlIG5lZWQgdG8gZ28gdGhyb3VnaFxuICAvLyBhbmQgZXNjYXBlIGFueSB8IGNoYXJzIHRoYXQgd2VyZSBwYXNzZWQgdGhyb3VnaCBhcy1pcyBmb3IgdGhlIHJlZ2V4cC5cbiAgLy8gR28gdGhyb3VnaCBhbmQgZXNjYXBlIHRoZW0sIHRha2luZyBjYXJlIG5vdCB0byBkb3VibGUtZXNjYXBlIGFueVxuICAvLyB8IGNoYXJzIHRoYXQgd2VyZSBhbHJlYWR5IGVzY2FwZWQuXG4gIGZvciAocGwgPSBwYXR0ZXJuTGlzdFN0YWNrLnBvcCgpOyBwbDsgcGwgPSBwYXR0ZXJuTGlzdFN0YWNrLnBvcCgpKSB7XG4gICAgdmFyIHRhaWwgPSByZS5zbGljZShwbC5yZVN0YXJ0ICsgcGwub3Blbi5sZW5ndGgpXG4gICAgdGhpcy5kZWJ1Zygnc2V0dGluZyB0YWlsJywgcmUsIHBsKVxuICAgIC8vIG1heWJlIHNvbWUgZXZlbiBudW1iZXIgb2YgXFwsIHRoZW4gbWF5YmUgMSBcXCwgZm9sbG93ZWQgYnkgYSB8XG4gICAgdGFpbCA9IHRhaWwucmVwbGFjZSgvKCg/OlxcXFx7Mn0pezAsNjR9KShcXFxcPylcXHwvZywgZnVuY3Rpb24gKF8sICQxLCAkMikge1xuICAgICAgaWYgKCEkMikge1xuICAgICAgICAvLyB0aGUgfCBpc24ndCBhbHJlYWR5IGVzY2FwZWQsIHNvIGVzY2FwZSBpdC5cbiAgICAgICAgJDIgPSAnXFxcXCdcbiAgICAgIH1cblxuICAgICAgLy8gbmVlZCB0byBlc2NhcGUgYWxsIHRob3NlIHNsYXNoZXMgKmFnYWluKiwgd2l0aG91dCBlc2NhcGluZyB0aGVcbiAgICAgIC8vIG9uZSB0aGF0IHdlIG5lZWQgZm9yIGVzY2FwaW5nIHRoZSB8IGNoYXJhY3Rlci4gIEFzIGl0IHdvcmtzIG91dCxcbiAgICAgIC8vIGVzY2FwaW5nIGFuIGV2ZW4gbnVtYmVyIG9mIHNsYXNoZXMgY2FuIGJlIGRvbmUgYnkgc2ltcGx5IHJlcGVhdGluZ1xuICAgICAgLy8gaXQgZXhhY3RseSBhZnRlciBpdHNlbGYuICBUaGF0J3Mgd2h5IHRoaXMgdHJpY2sgd29ya3MuXG4gICAgICAvL1xuICAgICAgLy8gSSBhbSBzb3JyeSB0aGF0IHlvdSBoYXZlIHRvIHNlZSB0aGlzLlxuICAgICAgcmV0dXJuICQxICsgJDEgKyAkMiArICd8J1xuICAgIH0pXG5cbiAgICB0aGlzLmRlYnVnKCd0YWlsPSVqXFxuICAgJXMnLCB0YWlsLCB0YWlsLCBwbCwgcmUpXG4gICAgdmFyIHQgPSBwbC50eXBlID09PSAnKicgPyBzdGFyXG4gICAgICA6IHBsLnR5cGUgPT09ICc/JyA/IHFtYXJrXG4gICAgICA6ICdcXFxcJyArIHBsLnR5cGVcblxuICAgIGhhc01hZ2ljID0gdHJ1ZVxuICAgIHJlID0gcmUuc2xpY2UoMCwgcGwucmVTdGFydCkgKyB0ICsgJ1xcXFwoJyArIHRhaWxcbiAgfVxuXG4gIC8vIGhhbmRsZSB0cmFpbGluZyB0aGluZ3MgdGhhdCBvbmx5IG1hdHRlciBhdCB0aGUgdmVyeSBlbmQuXG4gIGNsZWFyU3RhdGVDaGFyKClcbiAgaWYgKGVzY2FwaW5nKSB7XG4gICAgLy8gdHJhaWxpbmcgXFxcXFxuICAgIHJlICs9ICdcXFxcXFxcXCdcbiAgfVxuXG4gIC8vIG9ubHkgbmVlZCB0byBhcHBseSB0aGUgbm9kb3Qgc3RhcnQgaWYgdGhlIHJlIHN0YXJ0cyB3aXRoXG4gIC8vIHNvbWV0aGluZyB0aGF0IGNvdWxkIGNvbmNlaXZhYmx5IGNhcHR1cmUgYSBkb3RcbiAgdmFyIGFkZFBhdHRlcm5TdGFydCA9IGZhbHNlXG4gIHN3aXRjaCAocmUuY2hhckF0KDApKSB7XG4gICAgY2FzZSAnLic6XG4gICAgY2FzZSAnWyc6XG4gICAgY2FzZSAnKCc6IGFkZFBhdHRlcm5TdGFydCA9IHRydWVcbiAgfVxuXG4gIC8vIEhhY2sgdG8gd29yayBhcm91bmQgbGFjayBvZiBuZWdhdGl2ZSBsb29rYmVoaW5kIGluIEpTXG4gIC8vIEEgcGF0dGVybiBsaWtlOiAqLiEoeCkuISh5fHopIG5lZWRzIHRvIGVuc3VyZSB0aGF0IGEgbmFtZVxuICAvLyBsaWtlICdhLnh5ei55eicgZG9lc24ndCBtYXRjaC4gIFNvLCB0aGUgZmlyc3QgbmVnYXRpdmVcbiAgLy8gbG9va2FoZWFkLCBoYXMgdG8gbG9vayBBTEwgdGhlIHdheSBhaGVhZCwgdG8gdGhlIGVuZCBvZlxuICAvLyB0aGUgcGF0dGVybi5cbiAgZm9yICh2YXIgbiA9IG5lZ2F0aXZlTGlzdHMubGVuZ3RoIC0gMTsgbiA+IC0xOyBuLS0pIHtcbiAgICB2YXIgbmwgPSBuZWdhdGl2ZUxpc3RzW25dXG5cbiAgICB2YXIgbmxCZWZvcmUgPSByZS5zbGljZSgwLCBubC5yZVN0YXJ0KVxuICAgIHZhciBubEZpcnN0ID0gcmUuc2xpY2UobmwucmVTdGFydCwgbmwucmVFbmQgLSA4KVxuICAgIHZhciBubExhc3QgPSByZS5zbGljZShubC5yZUVuZCAtIDgsIG5sLnJlRW5kKVxuICAgIHZhciBubEFmdGVyID0gcmUuc2xpY2UobmwucmVFbmQpXG5cbiAgICBubExhc3QgKz0gbmxBZnRlclxuXG4gICAgLy8gSGFuZGxlIG5lc3RlZCBzdHVmZiBsaWtlICooKi5qc3whKCouanNvbikpLCB3aGVyZSBvcGVuIHBhcmVuc1xuICAgIC8vIG1lYW4gdGhhdCB3ZSBzaG91bGQgKm5vdCogaW5jbHVkZSB0aGUgKSBpbiB0aGUgYml0IHRoYXQgaXMgY29uc2lkZXJlZFxuICAgIC8vIFwiYWZ0ZXJcIiB0aGUgbmVnYXRlZCBzZWN0aW9uLlxuICAgIHZhciBvcGVuUGFyZW5zQmVmb3JlID0gbmxCZWZvcmUuc3BsaXQoJygnKS5sZW5ndGggLSAxXG4gICAgdmFyIGNsZWFuQWZ0ZXIgPSBubEFmdGVyXG4gICAgZm9yIChpID0gMDsgaSA8IG9wZW5QYXJlbnNCZWZvcmU7IGkrKykge1xuICAgICAgY2xlYW5BZnRlciA9IGNsZWFuQWZ0ZXIucmVwbGFjZSgvXFwpWysqP10/LywgJycpXG4gICAgfVxuICAgIG5sQWZ0ZXIgPSBjbGVhbkFmdGVyXG5cbiAgICB2YXIgZG9sbGFyID0gJydcbiAgICBpZiAobmxBZnRlciA9PT0gJycgJiYgaXNTdWIgIT09IFNVQlBBUlNFKSB7XG4gICAgICBkb2xsYXIgPSAnJCdcbiAgICB9XG4gICAgdmFyIG5ld1JlID0gbmxCZWZvcmUgKyBubEZpcnN0ICsgbmxBZnRlciArIGRvbGxhciArIG5sTGFzdFxuICAgIHJlID0gbmV3UmVcbiAgfVxuXG4gIC8vIGlmIHRoZSByZSBpcyBub3QgXCJcIiBhdCB0aGlzIHBvaW50LCB0aGVuIHdlIG5lZWQgdG8gbWFrZSBzdXJlXG4gIC8vIGl0IGRvZXNuJ3QgbWF0Y2ggYWdhaW5zdCBhbiBlbXB0eSBwYXRoIHBhcnQuXG4gIC8vIE90aGVyd2lzZSBhLyogd2lsbCBtYXRjaCBhLywgd2hpY2ggaXQgc2hvdWxkIG5vdC5cbiAgaWYgKHJlICE9PSAnJyAmJiBoYXNNYWdpYykge1xuICAgIHJlID0gJyg/PS4pJyArIHJlXG4gIH1cblxuICBpZiAoYWRkUGF0dGVyblN0YXJ0KSB7XG4gICAgcmUgPSBwYXR0ZXJuU3RhcnQgKyByZVxuICB9XG5cbiAgLy8gcGFyc2luZyBqdXN0IGEgcGllY2Ugb2YgYSBsYXJnZXIgcGF0dGVybi5cbiAgaWYgKGlzU3ViID09PSBTVUJQQVJTRSkge1xuICAgIHJldHVybiBbcmUsIGhhc01hZ2ljXVxuICB9XG5cbiAgLy8gc2tpcCB0aGUgcmVnZXhwIGZvciBub24tbWFnaWNhbCBwYXR0ZXJuc1xuICAvLyB1bmVzY2FwZSBhbnl0aGluZyBpbiBpdCwgdGhvdWdoLCBzbyB0aGF0IGl0J2xsIGJlXG4gIC8vIGFuIGV4YWN0IG1hdGNoIGFnYWluc3QgYSBmaWxlIGV0Yy5cbiAgaWYgKCFoYXNNYWdpYykge1xuICAgIHJldHVybiBnbG9iVW5lc2NhcGUocGF0dGVybilcbiAgfVxuXG4gIHZhciBmbGFncyA9IG9wdGlvbnMubm9jYXNlID8gJ2knIDogJydcbiAgdHJ5IHtcbiAgICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyByZSArICckJywgZmxhZ3MpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgLy8gSWYgaXQgd2FzIGFuIGludmFsaWQgcmVndWxhciBleHByZXNzaW9uLCB0aGVuIGl0IGNhbid0IG1hdGNoXG4gICAgLy8gYW55dGhpbmcuICBUaGlzIHRyaWNrIGxvb2tzIGZvciBhIGNoYXJhY3RlciBhZnRlciB0aGUgZW5kIG9mXG4gICAgLy8gdGhlIHN0cmluZywgd2hpY2ggaXMgb2YgY291cnNlIGltcG9zc2libGUsIGV4Y2VwdCBpbiBtdWx0aS1saW5lXG4gICAgLy8gbW9kZSwgYnV0IGl0J3Mgbm90IGEgL20gcmVnZXguXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyQuJylcbiAgfVxuXG4gIHJlZ0V4cC5fZ2xvYiA9IHBhdHRlcm5cbiAgcmVnRXhwLl9zcmMgPSByZVxuXG4gIHJldHVybiByZWdFeHBcbn1cblxubWluaW1hdGNoLm1ha2VSZSA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgTWluaW1hdGNoKHBhdHRlcm4sIG9wdGlvbnMgfHwge30pLm1ha2VSZSgpXG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUubWFrZVJlID0gbWFrZVJlXG5mdW5jdGlvbiBtYWtlUmUgKCkge1xuICBpZiAodGhpcy5yZWdleHAgfHwgdGhpcy5yZWdleHAgPT09IGZhbHNlKSByZXR1cm4gdGhpcy5yZWdleHBcblxuICAvLyBhdCB0aGlzIHBvaW50LCB0aGlzLnNldCBpcyBhIDJkIGFycmF5IG9mIHBhcnRpYWxcbiAgLy8gcGF0dGVybiBzdHJpbmdzLCBvciBcIioqXCIuXG4gIC8vXG4gIC8vIEl0J3MgYmV0dGVyIHRvIHVzZSAubWF0Y2goKS4gIFRoaXMgZnVuY3Rpb24gc2hvdWxkbid0XG4gIC8vIGJlIHVzZWQsIHJlYWxseSwgYnV0IGl0J3MgcHJldHR5IGNvbnZlbmllbnQgc29tZXRpbWVzLFxuICAvLyB3aGVuIHlvdSBqdXN0IHdhbnQgdG8gd29yayB3aXRoIGEgcmVnZXguXG4gIHZhciBzZXQgPSB0aGlzLnNldFxuXG4gIGlmICghc2V0Lmxlbmd0aCkge1xuICAgIHRoaXMucmVnZXhwID0gZmFsc2VcbiAgICByZXR1cm4gdGhpcy5yZWdleHBcbiAgfVxuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIHZhciB0d29TdGFyID0gb3B0aW9ucy5ub2dsb2JzdGFyID8gc3RhclxuICAgIDogb3B0aW9ucy5kb3QgPyB0d29TdGFyRG90XG4gICAgOiB0d29TdGFyTm9Eb3RcbiAgdmFyIGZsYWdzID0gb3B0aW9ucy5ub2Nhc2UgPyAnaScgOiAnJ1xuXG4gIHZhciByZSA9IHNldC5tYXAoZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gcGF0dGVybi5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAocCA9PT0gR0xPQlNUQVIpID8gdHdvU3RhclxuICAgICAgOiAodHlwZW9mIHAgPT09ICdzdHJpbmcnKSA/IHJlZ0V4cEVzY2FwZShwKVxuICAgICAgOiBwLl9zcmNcbiAgICB9KS5qb2luKCdcXFxcXFwvJylcbiAgfSkuam9pbignfCcpXG5cbiAgLy8gbXVzdCBtYXRjaCBlbnRpcmUgcGF0dGVyblxuICAvLyBlbmRpbmcgaW4gYSAqIG9yICoqIHdpbGwgbWFrZSBpdCBsZXNzIHN0cmljdC5cbiAgcmUgPSAnXig/OicgKyByZSArICcpJCdcblxuICAvLyBjYW4gbWF0Y2ggYW55dGhpbmcsIGFzIGxvbmcgYXMgaXQncyBub3QgdGhpcy5cbiAgaWYgKHRoaXMubmVnYXRlKSByZSA9ICdeKD8hJyArIHJlICsgJykuKiQnXG5cbiAgdHJ5IHtcbiAgICB0aGlzLnJlZ2V4cCA9IG5ldyBSZWdFeHAocmUsIGZsYWdzKVxuICB9IGNhdGNoIChleCkge1xuICAgIHRoaXMucmVnZXhwID0gZmFsc2VcbiAgfVxuICByZXR1cm4gdGhpcy5yZWdleHBcbn1cblxubWluaW1hdGNoLm1hdGNoID0gZnVuY3Rpb24gKGxpc3QsIHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIG1tID0gbmV3IE1pbmltYXRjaChwYXR0ZXJuLCBvcHRpb25zKVxuICBsaXN0ID0gbGlzdC5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gbW0ubWF0Y2goZilcbiAgfSlcbiAgaWYgKG1tLm9wdGlvbnMubm9udWxsICYmICFsaXN0Lmxlbmd0aCkge1xuICAgIGxpc3QucHVzaChwYXR0ZXJuKVxuICB9XG4gIHJldHVybiBsaXN0XG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUubWF0Y2ggPSBtYXRjaFxuZnVuY3Rpb24gbWF0Y2ggKGYsIHBhcnRpYWwpIHtcbiAgdGhpcy5kZWJ1ZygnbWF0Y2gnLCBmLCB0aGlzLnBhdHRlcm4pXG4gIC8vIHNob3J0LWNpcmN1aXQgaW4gdGhlIGNhc2Ugb2YgYnVzdGVkIHRoaW5ncy5cbiAgLy8gY29tbWVudHMsIGV0Yy5cbiAgaWYgKHRoaXMuY29tbWVudCkgcmV0dXJuIGZhbHNlXG4gIGlmICh0aGlzLmVtcHR5KSByZXR1cm4gZiA9PT0gJydcblxuICBpZiAoZiA9PT0gJy8nICYmIHBhcnRpYWwpIHJldHVybiB0cnVlXG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICAvLyB3aW5kb3dzOiBuZWVkIHRvIHVzZSAvLCBub3QgXFxcbiAgaWYgKHBhdGguc2VwICE9PSAnLycpIHtcbiAgICBmID0gZi5zcGxpdChwYXRoLnNlcCkuam9pbignLycpXG4gIH1cblxuICAvLyB0cmVhdCB0aGUgdGVzdCBwYXRoIGFzIGEgc2V0IG9mIHBhdGhwYXJ0cy5cbiAgZiA9IGYuc3BsaXQoc2xhc2hTcGxpdClcbiAgdGhpcy5kZWJ1Zyh0aGlzLnBhdHRlcm4sICdzcGxpdCcsIGYpXG5cbiAgLy8ganVzdCBPTkUgb2YgdGhlIHBhdHRlcm4gc2V0cyBpbiB0aGlzLnNldCBuZWVkcyB0byBtYXRjaFxuICAvLyBpbiBvcmRlciBmb3IgaXQgdG8gYmUgdmFsaWQuICBJZiBuZWdhdGluZywgdGhlbiBqdXN0IG9uZVxuICAvLyBtYXRjaCBtZWFucyB0aGF0IHdlIGhhdmUgZmFpbGVkLlxuICAvLyBFaXRoZXIgd2F5LCByZXR1cm4gb24gdGhlIGZpcnN0IGhpdC5cblxuICB2YXIgc2V0ID0gdGhpcy5zZXRcbiAgdGhpcy5kZWJ1Zyh0aGlzLnBhdHRlcm4sICdzZXQnLCBzZXQpXG5cbiAgLy8gRmluZCB0aGUgYmFzZW5hbWUgb2YgdGhlIHBhdGggYnkgbG9va2luZyBmb3IgdGhlIGxhc3Qgbm9uLWVtcHR5IHNlZ21lbnRcbiAgdmFyIGZpbGVuYW1lXG4gIHZhciBpXG4gIGZvciAoaSA9IGYubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBmaWxlbmFtZSA9IGZbaV1cbiAgICBpZiAoZmlsZW5hbWUpIGJyZWFrXG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhdHRlcm4gPSBzZXRbaV1cbiAgICB2YXIgZmlsZSA9IGZcbiAgICBpZiAob3B0aW9ucy5tYXRjaEJhc2UgJiYgcGF0dGVybi5sZW5ndGggPT09IDEpIHtcbiAgICAgIGZpbGUgPSBbZmlsZW5hbWVdXG4gICAgfVxuICAgIHZhciBoaXQgPSB0aGlzLm1hdGNoT25lKGZpbGUsIHBhdHRlcm4sIHBhcnRpYWwpXG4gICAgaWYgKGhpdCkge1xuICAgICAgaWYgKG9wdGlvbnMuZmxpcE5lZ2F0ZSkgcmV0dXJuIHRydWVcbiAgICAgIHJldHVybiAhdGhpcy5uZWdhdGVcbiAgICB9XG4gIH1cblxuICAvLyBkaWRuJ3QgZ2V0IGFueSBoaXRzLiAgdGhpcyBpcyBzdWNjZXNzIGlmIGl0J3MgYSBuZWdhdGl2ZVxuICAvLyBwYXR0ZXJuLCBmYWlsdXJlIG90aGVyd2lzZS5cbiAgaWYgKG9wdGlvbnMuZmxpcE5lZ2F0ZSkgcmV0dXJuIGZhbHNlXG4gIHJldHVybiB0aGlzLm5lZ2F0ZVxufVxuXG4vLyBzZXQgcGFydGlhbCB0byB0cnVlIHRvIHRlc3QgaWYsIGZvciBleGFtcGxlLFxuLy8gXCIvYS9iXCIgbWF0Y2hlcyB0aGUgc3RhcnQgb2YgXCIvKi9iLyovZFwiXG4vLyBQYXJ0aWFsIG1lYW5zLCBpZiB5b3UgcnVuIG91dCBvZiBmaWxlIGJlZm9yZSB5b3UgcnVuXG4vLyBvdXQgb2YgcGF0dGVybiwgdGhlbiB0aGF0J3MgZmluZSwgYXMgbG9uZyBhcyBhbGxcbi8vIHRoZSBwYXJ0cyBtYXRjaC5cbk1pbmltYXRjaC5wcm90b3R5cGUubWF0Y2hPbmUgPSBmdW5jdGlvbiAoZmlsZSwgcGF0dGVybiwgcGFydGlhbCkge1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIHRoaXMuZGVidWcoJ21hdGNoT25lJyxcbiAgICB7ICd0aGlzJzogdGhpcywgZmlsZTogZmlsZSwgcGF0dGVybjogcGF0dGVybiB9KVxuXG4gIHRoaXMuZGVidWcoJ21hdGNoT25lJywgZmlsZS5sZW5ndGgsIHBhdHRlcm4ubGVuZ3RoKVxuXG4gIGZvciAodmFyIGZpID0gMCxcbiAgICAgIHBpID0gMCxcbiAgICAgIGZsID0gZmlsZS5sZW5ndGgsXG4gICAgICBwbCA9IHBhdHRlcm4ubGVuZ3RoXG4gICAgICA7IChmaSA8IGZsKSAmJiAocGkgPCBwbClcbiAgICAgIDsgZmkrKywgcGkrKykge1xuICAgIHRoaXMuZGVidWcoJ21hdGNoT25lIGxvb3AnKVxuICAgIHZhciBwID0gcGF0dGVybltwaV1cbiAgICB2YXIgZiA9IGZpbGVbZmldXG5cbiAgICB0aGlzLmRlYnVnKHBhdHRlcm4sIHAsIGYpXG5cbiAgICAvLyBzaG91bGQgYmUgaW1wb3NzaWJsZS5cbiAgICAvLyBzb21lIGludmFsaWQgcmVnZXhwIHN0dWZmIGluIHRoZSBzZXQuXG4gICAgaWYgKHAgPT09IGZhbHNlKSByZXR1cm4gZmFsc2VcblxuICAgIGlmIChwID09PSBHTE9CU1RBUikge1xuICAgICAgdGhpcy5kZWJ1ZygnR0xPQlNUQVInLCBbcGF0dGVybiwgcCwgZl0pXG5cbiAgICAgIC8vIFwiKipcIlxuICAgICAgLy8gYS8qKi9iLyoqL2Mgd291bGQgbWF0Y2ggdGhlIGZvbGxvd2luZzpcbiAgICAgIC8vIGEvYi94L3kvei9jXG4gICAgICAvLyBhL3gveS96L2IvY1xuICAgICAgLy8gYS9iL3gvYi94L2NcbiAgICAgIC8vIGEvYi9jXG4gICAgICAvLyBUbyBkbyB0aGlzLCB0YWtlIHRoZSByZXN0IG9mIHRoZSBwYXR0ZXJuIGFmdGVyXG4gICAgICAvLyB0aGUgKiosIGFuZCBzZWUgaWYgaXQgd291bGQgbWF0Y2ggdGhlIGZpbGUgcmVtYWluZGVyLlxuICAgICAgLy8gSWYgc28sIHJldHVybiBzdWNjZXNzLlxuICAgICAgLy8gSWYgbm90LCB0aGUgKiogXCJzd2FsbG93c1wiIGEgc2VnbWVudCwgYW5kIHRyeSBhZ2Fpbi5cbiAgICAgIC8vIFRoaXMgaXMgcmVjdXJzaXZlbHkgYXdmdWwuXG4gICAgICAvL1xuICAgICAgLy8gYS8qKi9iLyoqL2MgbWF0Y2hpbmcgYS9iL3gveS96L2NcbiAgICAgIC8vIC0gYSBtYXRjaGVzIGFcbiAgICAgIC8vIC0gZG91Ymxlc3RhclxuICAgICAgLy8gICAtIG1hdGNoT25lKGIveC95L3ovYywgYi8qKi9jKVxuICAgICAgLy8gICAgIC0gYiBtYXRjaGVzIGJcbiAgICAgIC8vICAgICAtIGRvdWJsZXN0YXJcbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoeC95L3ovYywgYykgLT4gbm9cbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoeS96L2MsIGMpIC0+IG5vXG4gICAgICAvLyAgICAgICAtIG1hdGNoT25lKHovYywgYykgLT4gbm9cbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoYywgYykgeWVzLCBoaXRcbiAgICAgIHZhciBmciA9IGZpXG4gICAgICB2YXIgcHIgPSBwaSArIDFcbiAgICAgIGlmIChwciA9PT0gcGwpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZygnKiogYXQgdGhlIGVuZCcpXG4gICAgICAgIC8vIGEgKiogYXQgdGhlIGVuZCB3aWxsIGp1c3Qgc3dhbGxvdyB0aGUgcmVzdC5cbiAgICAgICAgLy8gV2UgaGF2ZSBmb3VuZCBhIG1hdGNoLlxuICAgICAgICAvLyBob3dldmVyLCBpdCB3aWxsIG5vdCBzd2FsbG93IC8ueCwgdW5sZXNzXG4gICAgICAgIC8vIG9wdGlvbnMuZG90IGlzIHNldC5cbiAgICAgICAgLy8gLiBhbmQgLi4gYXJlICpuZXZlciogbWF0Y2hlZCBieSAqKiwgZm9yIGV4cGxvc2l2ZWx5XG4gICAgICAgIC8vIGV4cG9uZW50aWFsIHJlYXNvbnMuXG4gICAgICAgIGZvciAoOyBmaSA8IGZsOyBmaSsrKSB7XG4gICAgICAgICAgaWYgKGZpbGVbZmldID09PSAnLicgfHwgZmlsZVtmaV0gPT09ICcuLicgfHxcbiAgICAgICAgICAgICghb3B0aW9ucy5kb3QgJiYgZmlsZVtmaV0uY2hhckF0KDApID09PSAnLicpKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICAvLyBvaywgbGV0J3Mgc2VlIGlmIHdlIGNhbiBzd2FsbG93IHdoYXRldmVyIHdlIGNhbi5cbiAgICAgIHdoaWxlIChmciA8IGZsKSB7XG4gICAgICAgIHZhciBzd2FsbG93ZWUgPSBmaWxlW2ZyXVxuXG4gICAgICAgIHRoaXMuZGVidWcoJ1xcbmdsb2JzdGFyIHdoaWxlJywgZmlsZSwgZnIsIHBhdHRlcm4sIHByLCBzd2FsbG93ZWUpXG5cbiAgICAgICAgLy8gWFhYIHJlbW92ZSB0aGlzIHNsaWNlLiAgSnVzdCBwYXNzIHRoZSBzdGFydCBpbmRleC5cbiAgICAgICAgaWYgKHRoaXMubWF0Y2hPbmUoZmlsZS5zbGljZShmciksIHBhdHRlcm4uc2xpY2UocHIpLCBwYXJ0aWFsKSkge1xuICAgICAgICAgIHRoaXMuZGVidWcoJ2dsb2JzdGFyIGZvdW5kIG1hdGNoIScsIGZyLCBmbCwgc3dhbGxvd2VlKVxuICAgICAgICAgIC8vIGZvdW5kIGEgbWF0Y2guXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjYW4ndCBzd2FsbG93IFwiLlwiIG9yIFwiLi5cIiBldmVyLlxuICAgICAgICAgIC8vIGNhbiBvbmx5IHN3YWxsb3cgXCIuZm9vXCIgd2hlbiBleHBsaWNpdGx5IGFza2VkLlxuICAgICAgICAgIGlmIChzd2FsbG93ZWUgPT09ICcuJyB8fCBzd2FsbG93ZWUgPT09ICcuLicgfHxcbiAgICAgICAgICAgICghb3B0aW9ucy5kb3QgJiYgc3dhbGxvd2VlLmNoYXJBdCgwKSA9PT0gJy4nKSkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnZG90IGRldGVjdGVkIScsIGZpbGUsIGZyLCBwYXR0ZXJuLCBwcilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gKiogc3dhbGxvd3MgYSBzZWdtZW50LCBhbmQgY29udGludWUuXG4gICAgICAgICAgdGhpcy5kZWJ1ZygnZ2xvYnN0YXIgc3dhbGxvdyBhIHNlZ21lbnQsIGFuZCBjb250aW51ZScpXG4gICAgICAgICAgZnIrK1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIG5vIG1hdGNoIHdhcyBmb3VuZC5cbiAgICAgIC8vIEhvd2V2ZXIsIGluIHBhcnRpYWwgbW9kZSwgd2UgY2FuJ3Qgc2F5IHRoaXMgaXMgbmVjZXNzYXJpbHkgb3Zlci5cbiAgICAgIC8vIElmIHRoZXJlJ3MgbW9yZSAqcGF0dGVybiogbGVmdCwgdGhlblxuICAgICAgaWYgKHBhcnRpYWwpIHtcbiAgICAgICAgLy8gcmFuIG91dCBvZiBmaWxlXG4gICAgICAgIHRoaXMuZGVidWcoJ1xcbj4+PiBubyBtYXRjaCwgcGFydGlhbD8nLCBmaWxlLCBmciwgcGF0dGVybiwgcHIpXG4gICAgICAgIGlmIChmciA9PT0gZmwpIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBzb21ldGhpbmcgb3RoZXIgdGhhbiAqKlxuICAgIC8vIG5vbi1tYWdpYyBwYXR0ZXJucyBqdXN0IGhhdmUgdG8gbWF0Y2ggZXhhY3RseVxuICAgIC8vIHBhdHRlcm5zIHdpdGggbWFnaWMgaGF2ZSBiZWVuIHR1cm5lZCBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIGhpdFxuICAgIGlmICh0eXBlb2YgcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChvcHRpb25zLm5vY2FzZSkge1xuICAgICAgICBoaXQgPSBmLnRvTG93ZXJDYXNlKCkgPT09IHAudG9Mb3dlckNhc2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGl0ID0gZiA9PT0gcFxuICAgICAgfVxuICAgICAgdGhpcy5kZWJ1Zygnc3RyaW5nIG1hdGNoJywgcCwgZiwgaGl0KVxuICAgIH0gZWxzZSB7XG4gICAgICBoaXQgPSBmLm1hdGNoKHApXG4gICAgICB0aGlzLmRlYnVnKCdwYXR0ZXJuIG1hdGNoJywgcCwgZiwgaGl0KVxuICAgIH1cblxuICAgIGlmICghaGl0KSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIE5vdGU6IGVuZGluZyBpbiAvIG1lYW5zIHRoYXQgd2UnbGwgZ2V0IGEgZmluYWwgXCJcIlxuICAvLyBhdCB0aGUgZW5kIG9mIHRoZSBwYXR0ZXJuLiAgVGhpcyBjYW4gb25seSBtYXRjaCBhXG4gIC8vIGNvcnJlc3BvbmRpbmcgXCJcIiBhdCB0aGUgZW5kIG9mIHRoZSBmaWxlLlxuICAvLyBJZiB0aGUgZmlsZSBlbmRzIGluIC8sIHRoZW4gaXQgY2FuIG9ubHkgbWF0Y2ggYVxuICAvLyBhIHBhdHRlcm4gdGhhdCBlbmRzIGluIC8sIHVubGVzcyB0aGUgcGF0dGVybiBqdXN0XG4gIC8vIGRvZXNuJ3QgaGF2ZSBhbnkgbW9yZSBmb3IgaXQuIEJ1dCwgYS9iLyBzaG91bGQgKm5vdCpcbiAgLy8gbWF0Y2ggXCJhL2IvKlwiLCBldmVuIHRob3VnaCBcIlwiIG1hdGNoZXMgYWdhaW5zdCB0aGVcbiAgLy8gW14vXSo/IHBhdHRlcm4sIGV4Y2VwdCBpbiBwYXJ0aWFsIG1vZGUsIHdoZXJlIGl0IG1pZ2h0XG4gIC8vIHNpbXBseSBub3QgYmUgcmVhY2hlZCB5ZXQuXG4gIC8vIEhvd2V2ZXIsIGEvYi8gc2hvdWxkIHN0aWxsIHNhdGlzZnkgYS8qXG5cbiAgLy8gbm93IGVpdGhlciB3ZSBmZWxsIG9mZiB0aGUgZW5kIG9mIHRoZSBwYXR0ZXJuLCBvciB3ZSdyZSBkb25lLlxuICBpZiAoZmkgPT09IGZsICYmIHBpID09PSBwbCkge1xuICAgIC8vIHJhbiBvdXQgb2YgcGF0dGVybiBhbmQgZmlsZW5hbWUgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAvLyBhbiBleGFjdCBoaXQhXG4gICAgcmV0dXJuIHRydWVcbiAgfSBlbHNlIGlmIChmaSA9PT0gZmwpIHtcbiAgICAvLyByYW4gb3V0IG9mIGZpbGUsIGJ1dCBzdGlsbCBoYWQgcGF0dGVybiBsZWZ0LlxuICAgIC8vIHRoaXMgaXMgb2sgaWYgd2UncmUgZG9pbmcgdGhlIG1hdGNoIGFzIHBhcnQgb2ZcbiAgICAvLyBhIGdsb2IgZnMgdHJhdmVyc2FsLlxuICAgIHJldHVybiBwYXJ0aWFsXG4gIH0gZWxzZSBpZiAocGkgPT09IHBsKSB7XG4gICAgLy8gcmFuIG91dCBvZiBwYXR0ZXJuLCBzdGlsbCBoYXZlIGZpbGUgbGVmdC5cbiAgICAvLyB0aGlzIGlzIG9ubHkgYWNjZXB0YWJsZSBpZiB3ZSdyZSBvbiB0aGUgdmVyeSBsYXN0XG4gICAgLy8gZW1wdHkgc2VnbWVudCBvZiBhIGZpbGUgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLlxuICAgIC8vIGEvKiBzaG91bGQgbWF0Y2ggYS9iL1xuICAgIHZhciBlbXB0eUZpbGVFbmQgPSAoZmkgPT09IGZsIC0gMSkgJiYgKGZpbGVbZmldID09PSAnJylcbiAgICByZXR1cm4gZW1wdHlGaWxlRW5kXG4gIH1cblxuICAvLyBzaG91bGQgYmUgdW5yZWFjaGFibGUuXG4gIHRocm93IG5ldyBFcnJvcignd3RmPycpXG59XG5cbi8vIHJlcGxhY2Ugc3R1ZmYgbGlrZSBcXCogd2l0aCAqXG5mdW5jdGlvbiBnbG9iVW5lc2NhcGUgKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvXFxcXCguKS9nLCAnJDEnKVxufVxuXG5mdW5jdGlvbiByZWdFeHBFc2NhcGUgKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvWy1bXFxde30oKSorPy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKVxufVxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cbi8vICdyb290JyBpcyBqdXN0IGEgc2xhc2gsIG9yIG5vdGhpbmcuXG52YXIgc3BsaXRQYXRoUmUgPVxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xudmFyIHNwbGl0UGF0aCA9IGZ1bmN0aW9uKGZpbGVuYW1lKSB7XG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcbn07XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIHJlc3VsdCA9IHNwbGl0UGF0aChwYXRoKSxcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXG4gICAgICBkaXIgPSByZXN1bHRbMV07XG5cbiAgaWYgKCFyb290ICYmICFkaXIpIHtcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcbiAgICByZXR1cm4gJy4nO1xuICB9XG5cbiAgaWYgKGRpcikge1xuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XG4gIH1cblxuICByZXR1cm4gcm9vdCArIGRpcjtcbn07XG5cblxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IHNwbGl0UGF0aChwYXRoKVsyXTtcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBzcGxpdFBhdGgocGF0aClbM107XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbnZhciBzY3JpcHQgPSB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgLy8gaW1hZ2VzID0gW3sgbmFtZTonaW1hZ2UxLmpwZycsIGFsdDonUmVkd29vZHMnLCBmaWx0ZXI6J25hdHVyZScgfSwgLi4uXVxuICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgLy8gVXNlZCB0byBkaXNwbGF5IGEgc3Vic2V0IG9mIHBob3Rvcy4gSWYgdXNlZCwgaW1hZ2VzIGFycmF5IG11c3QgY29udGFpbiBhIHByb3BlcnR5XG4gICAgICAgIC8vIHRpdGxlZCAnZmlsdGVyJyB3aGljaCBjb250YWlucyB0aGUgZGVzaXJlZCBmaWx0ZXIgc3RyaW5nXG4gICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2FsbCdcbiAgICAgICAgfSxcbiAgICAgICAgLy8gVXNlZCBpZiBpbWFnZXMgYXJlIGxvY2F0ZWQgaW4gYSBzZXBhcmF0ZSBmb2xkZXIgKGUuZy4gJy9pbWFnZXMvJylcbiAgICAgICAgZGlyZWN0b3J5OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICAvLyBVc2VkIHRvIHNldCB0aGUgZHVyYXRpb24gaW4gbWlsaXNlY29uZHMgb2Yga2V5L21vdXNlIGluYWN0aXZpdHkgYmVmb3JlIGNhcHRpb25cbiAgICAgICAgLy8gYW5kIGFycm93cyBkaXNhcHBlYXJcbiAgICAgICAgdGltZW91dER1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAzMDAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSwgICAgICAgIC8vIExpZ2h0Ym94IG5vdCB2aXNpYmxlIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIGNvbnRyb2xzVmlzaWJsZTogdHJ1ZSwgLy8gTGlnaHRib3ggY29udHJvbHMgKGFycm93cywgY2FwdGlvbiwgY2xvc2UgYnV0dG9uKVxuICAgICAgICAgICAgaW5kZXg6IDAsICAgICAgICAgICAgICAvLyBJbmRleCBpbmRpY2F0ZXMgd2hpY2ggcGhvdG8gdG8gZGlzcGxheS4gRGVmYXVsdCB0byAxc3QgcGhvdG9cbiAgICAgICAgICAgIHRpbWVyOiBudWxsICAgICAgICAgIC8vIFRpbWVyIHRvIHNob3cvaGlkZSBsaWdodGJveCBjb250cm9scyAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlFdmVudExpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XG4gICAgfSxcbiAgICBkZXN0cm95ZWQ6IGZ1bmN0aW9uIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gc2hvdyhpbWFnZU5hbWUpIHtcbiAgICAgICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgaW1hZ2UgcGFzc2VkIHRvIExpZ2h0Ym94XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5maWx0ZXJlZEltYWdlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcyQxLmZpbHRlcmVkSW1hZ2VzW2ldLm5hbWUgPT0gaW1hZ2VOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMkMS5pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3RoYXQuY29udHJvbHNWaXNpYmxlID0gZmFsc2U7fSwgdGhhdC50aW1lb3V0RHVyYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5wcmVsb2FkTmV4dEltYWdlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9LFxuICAgICAgICBoYXNfbmV4dDogZnVuY3Rpb24gaGFzX25leHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyAxIDwgdGhpcy5maWx0ZXJlZEltYWdlcy5sZW5ndGgpO1xuICAgICAgICB9LFxuICAgICAgICBoYXNfcHJldjogZnVuY3Rpb24gaGFzX3ByZXYoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggLSAxID49IDApO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2OiBmdW5jdGlvbiBwcmV2KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzX3ByZXYoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc19uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVsb2FkTmV4dEltYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGtleUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGtleUV2ZW50TGlzdGVuZXIoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3RoYXQuY29udHJvbHNWaXNpYmxlID0gZmFsc2U7fSwgdGhhdC50aW1lb3V0RHVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBUaGlzIGV2ZW50IHNob3dzIHRoZSBhcnJvd3MgYW5kIGNhcHRpb24gb24gdGhlIGxpZ2h0Ym94IHdoZW4gdGhlIG1vdXNlIGlzIG1vdmVkIG9yIGNsaWNrZWQuXG4gICAgICAgIC8vIEFsc28gdXNlZCBmb3IgdG91Y2ggZXZlbnRzIG9uIHRvdWNoc2NyZWVuIGRldmljZXMuIFRoZSBlbGVtZW50cyBhcmUgc2V0IHRvIGRpc2FwcGVhclxuICAgICAgICAvLyBhZnRlciBhIGdpdmVuIGR1cmF0aW9uIHZpYSBhIHRpbWVyLlxuICAgICAgICBtb3VzZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIG1vdXNlRXZlbnRMaXN0ZW5lcihlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dGhhdC5jb250cm9sc1Zpc2libGUgPSBmYWxzZTt9LCB0aGF0LnRpbWVvdXREdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByZWxvYWROZXh0SW1hZ2U6IGZ1bmN0aW9uIHByZWxvYWROZXh0SW1hZ2UgKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzX25leHQoKSl7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgX2ltZy5zcmMgPSB0aGlzLmRpcmVjdG9yeSArIHRoaXMuZmlsdGVyZWRJbWFnZXNbdGhpcy5pbmRleCArIDFdLm5hbWU7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGZpbHRlcmVkSW1hZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhhdC5maWx0ZXIgPT09ICdhbGwnIHx8ICF0aGF0LmZpbHRlci5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LmltYWdlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LmltYWdlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZmlsdGVyID09PSB0aGF0LmZpbHRlcjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyogc2NyaXB0ICovXG4gICAgICAgICAgICB2YXIgX192dWVfc2NyaXB0X18gPSBzY3JpcHQ7XG4gICAgICAgICAgICBcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfcmVuZGVyX18gPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXM7XG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudDtcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oO1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImxpZ2h0Ym94LWZhZGVcIiB9IH0sIFtcbiAgICAgICAgX3ZtLnZpc2libGVcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlnaHRib3hcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhpZGUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRvdWNoZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oaWRlKCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpZ2h0Ym94LWNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGlkZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaGRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oaWRlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiw5dcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlnaHRib3gtYXJyb3cgbGlnaHRib3gtYXJyb3ctbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJldigkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaGRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByZXYoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJsaWdodGJveC1mYWRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5oYXNfcHJldigpICYmIF92bS5jb250cm9sc1Zpc2libGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImhhc19wcmV2KCkgJiYgY29udHJvbHNWaXNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpZ2h0Ym94LWFycm93LWxlZnQtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImNpcmNsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3g6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcInJnYmEoMjAsIDIwLCAyMCwgMC40KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTTE1LjQxIDE2LjA5bC00LjU4LTQuNTkgNC41OC00LjU5TDE0IDUuNWwtNiA2IDYgNnpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZDogXCJNMC0uNWgyNHYyNEgwelwiLCBmaWxsOiBcIm5vbmVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlnaHRib3gtYXJyb3cgbGlnaHRib3gtYXJyb3ctcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5leHQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uZXh0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwibGlnaHRib3gtZmFkZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaGFzX25leHQoKSAmJiBfdm0uY29udHJvbHNWaXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJoYXNfbmV4dCgpICYmIGNvbnRyb2xzVmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWdodGJveC1hcnJvdy1yaWdodC1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiY2lyY2xlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeDogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5OiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwicmdiYSgyMCwgMjAsIDIwLCAwLjQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNOC41OSAxNi4zNGw0LjU4LTQuNTktNC41OC00LjU5TDEwIDUuNzVsNiA2LTYgNnpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZDogXCJNMC0uMjVoMjR2MjRIMHpcIiwgZmlsbDogXCJub25lXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImxpZ2h0Ym94LWZhZGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnRyb2xzVmlzaWJsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWx0ZXJlZEltYWdlc1tfdm0uaW5kZXhdLmFsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRyb2xzVmlzaWJsZSAmJiBmaWx0ZXJlZEltYWdlc1tpbmRleF0uYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpZ2h0Ym94LWNhcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyB1bnNlbGVjdGFibGU6IFwib25cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZpbHRlcmVkSW1hZ2VzW192bS5pbmRleF0uYWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpZ2h0Ym94LW1haW5cIixcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oaWRlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhpZGUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWdodGJveC1pbWFnZS1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwibGlnaHRib3gtc2xpZGVcIiwgbW9kZTogXCJvdXQtaW5cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IF92bS5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpZ2h0Ym94LWltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmwoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXJlY3RvcnkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWx0ZXJlZEltYWdlc1tfdm0uaW5kZXhdLm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufTtcbnZhciBfX3Z1ZV9zdGF0aWNSZW5kZXJGbnNfXyA9IFtdO1xuX192dWVfcmVuZGVyX18uX3dpdGhTdHJpcHBlZCA9IHRydWU7XG5cbiAgLyogc3R5bGUgKi9cbiAgdmFyIF9fdnVlX2luamVjdF9zdHlsZXNfXyA9IGZ1bmN0aW9uIChpbmplY3QpIHtcbiAgICBpZiAoIWluamVjdCkgeyByZXR1cm4gfVxuICAgIGluamVjdChcImRhdGEtdi0wODYxZDY1ZV8wXCIsIHsgc291cmNlOiBcIlxcbi5saWdodGJveCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC45KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyMDA7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XFxufVxcbi5saWdodGJveC1jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMjEwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5saWdodGJveC1tYWluIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5saWdodGJveC1hcnJvdyB7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcbi5saWdodGJveC1hcnJvdy1yaWdodCB7IHJpZ2h0OiAwO1xcbn1cXG4ubGlnaHRib3gtYXJyb3ctbGVmdCB7IGxlZnQ6IDA7XFxufVxcbi5saWdodGJveC1pbWFnZS1jb250YWluZXIge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICAtd2Via2l0LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4OiAxO1xcbiAgICBmbGV4OiAxO1xcbn1cXG4ubGlnaHRib3gtaW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxufVxcbi5saWdodGJveC1jYXB0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDE1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYigyNiwgMjYsIDI2KTtcXG59XFxuLmxpZ2h0Ym94LWNhcHRpb24gc3BhbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmxpZ2h0Ym94LXNsaWRlLWVudGVyLWFjdGl2ZSxcXG4ubGlnaHRib3gtc2xpZGUtbGVhdmUtYWN0aXZlIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG59XFxuLmxpZ2h0Ym94LXNsaWRlLWVudGVyIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLmxpZ2h0Ym94LXNsaWRlLWxlYXZlLXRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLmxpZ2h0Ym94LWZhZGUtZW50ZXItYWN0aXZlLFxcbi5saWdodGJveC1mYWRlLWxlYXZlLWFjdGl2ZSB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxufVxcbi5saWdodGJveC1mYWRlLWVudGVyLFxcbi5saWdodGJveC1mYWRlLWxlYXZlLXRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuXCIsIG1hcDoge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FuZHJldy9Eb2N1bWVudHMvR2l0SHViL3Z1ZS1pbWFnZS1saWdodGJveC9zcmMvbGlnaHRib3gudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnTUE7SUFDQSxnQkFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLGNBQUE7SUFDQSx3QkFBQTtJQUNBLG9CQUFBO0lBQ0EsYUFBQTtJQUNBLDZCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7Q0FDQTtBQUVBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0lBQ0Esd0JBQUE7SUFDQSxvQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7Q0FDQTtBQUVBLHdCQUFBLFNBQUE7Q0FBQTtBQUVBLHVCQUFBLFFBQUE7Q0FBQTtBQUVBO0lBQ0Esb0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsUUFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHlCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EseUNBQUE7Q0FDQTtBQUVBO0lBQ0Esb0JBQUE7SUFDQSxvQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsMEJBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBOztJQUVBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLHFDQUFBO0lBQ0EsaUNBQUE7SUFDQSw2QkFBQTtJQUNBLFdBQUE7Q0FDQTtBQUVBO0lBQ0Esc0NBQUE7SUFDQSxrQ0FBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7O0lBRUEsMEJBQUE7Q0FDQTtBQUVBOztJQUVBLFdBQUE7Q0FDQVwiLFwiZmlsZVwiOlwibGlnaHRib3gudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XFxcImxpZ2h0Ym94LWZhZGVcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpZ2h0Ym94XFxcIiB2LWlmPVxcXCJ2aXNpYmxlXFxcIiBAbW91c2Vkb3duLnN0b3A9XFxcImhpZGVcXFwiIEB0b3VjaGRvd24uc3RvcD1cXFwiaGlkZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaWdodGJveC1jbG9zZVxcXCIgQG1vdXNlZG93bi5zdG9wPVxcXCJoaWRlXFxcIiBAdG91Y2hkb3duLnN0b3A9XFxcImhpZGVcXFwiPiZ0aW1lczs8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpZ2h0Ym94LWFycm93IGxpZ2h0Ym94LWFycm93LWxlZnRcXFwiIEBtb3VzZWRvd24uc3RvcC5wcmV2ZW50PVxcXCJwcmV2XFxcIiBAdG91Y2hkb3duLnN0b3AucHJldmVudD1cXFwicHJldlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cXFwibGlnaHRib3gtZmFkZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpZ2h0Ym94LWFycm93LWxlZnQtaWNvblxcXCIgdi1zaG93PVxcXCJoYXNfcHJldigpICYmIGNvbnRyb2xzVmlzaWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgd2lkdGg9XFxcIjI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjEyXFxcIiBjeT1cXFwiMTJcXFwiIHI9XFxcIjEyXFxcIiBmaWxsPVxcXCJyZ2JhKDIwLCAyMCwgMjAsIDAuNClcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cXFwiTTE1LjQxIDE2LjA5bC00LjU4LTQuNTkgNC41OC00LjU5TDE0IDUuNWwtNiA2IDYgNnpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cXFwiTTAtLjVoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpZ2h0Ym94LWFycm93IGxpZ2h0Ym94LWFycm93LXJpZ2h0XFxcIiBAbW91c2Vkb3duLnN0b3AucHJldmVudD1cXFwibmV4dFxcXCIgQHRvdWNoZG93bi5zdG9wLnByZXZlbnQ9XFxcIm5leHRcXFwiID5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJsaWdodGJveC1mYWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlnaHRib3gtYXJyb3ctcmlnaHQtaWNvblxcXCIgdi1zaG93PVxcXCJoYXNfbmV4dCgpICYmIGNvbnRyb2xzVmlzaWJsZVxcXCIgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHdpZHRoPVxcXCIyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMlxcXCIgZmlsbD1cXFwicmdiYSgyMCwgMjAsIDIwLCAwLjQpXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XFxcIk04LjU5IDE2LjM0bDQuNTgtNC41OS00LjU4LTQuNTlMMTAgNS43NWw2IDYtNiA2elxcXCIgZmlsbD1cXFwid2hpdGVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cXFwiTTAtLjI1aDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJsaWdodGJveC1mYWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaWdodGJveC1jYXB0aW9uXFxcIiB2LXNob3c9XFxcImNvbnRyb2xzVmlzaWJsZSAmJiBmaWx0ZXJlZEltYWdlc1tpbmRleF0uYWx0XFxcIiBAbW91c2Vkb3duLnN0b3AgQHRvdWNoZG93bi5zdG9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB1bnNlbGVjdGFibGU9XFxcIm9uXFxcIj57eyBmaWx0ZXJlZEltYWdlc1tpbmRleF0uYWx0IH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaWdodGJveC1tYWluXFxcIiBAbW91c2Vkb3duLnN0b3A9XFxcImhpZGVcXFwiIEB0b3VjaGRvd24uc3RvcD1cXFwiaGlkZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaWdodGJveC1pbWFnZS1jb250YWluZXJcXFwiIEBtb3VzZWRvd24uc3RvcCBAdG91Y2hkb3duLnN0b3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cXFwibGlnaHRib3gtc2xpZGVcXFwiIG1vZGU9XFxcIm91dC1pblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpZ2h0Ym94LWltYWdlXFxcIiA6a2V5PVxcXCJpbmRleFxcXCIgOnN0eWxlPVxcXCJ7ICdiYWNrZ3JvdW5kSW1hZ2UnOid1cmwoJyArIGRpcmVjdG9yeSArIGZpbHRlcmVkSW1hZ2VzW2luZGV4XS5uYW1lICsgJyknfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIC8vIGltYWdlcyA9IFt7IG5hbWU6J2ltYWdlMS5qcGcnLCBhbHQ6J1JlZHdvb2RzJywgZmlsdGVyOiduYXR1cmUnIH0sIC4uLl1cXG4gICAgICAgICAgICBpbWFnZXM6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAvLyBVc2VkIHRvIGRpc3BsYXkgYSBzdWJzZXQgb2YgcGhvdG9zLiBJZiB1c2VkLCBpbWFnZXMgYXJyYXkgbXVzdCBjb250YWluIGEgcHJvcGVydHlcXG4gICAgICAgICAgICAvLyB0aXRsZWQgJ2ZpbHRlcicgd2hpY2ggY29udGFpbnMgdGhlIGRlc2lyZWQgZmlsdGVyIHN0cmluZ1xcbiAgICAgICAgICAgIGZpbHRlcjoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdhbGwnXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAvLyBVc2VkIGlmIGltYWdlcyBhcmUgbG9jYXRlZCBpbiBhIHNlcGFyYXRlIGZvbGRlciAoZS5nLiAnL2ltYWdlcy8nKVxcbiAgICAgICAgICAgIGRpcmVjdG9yeToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAvLyBVc2VkIHRvIHNldCB0aGUgZHVyYXRpb24gaW4gbWlsaXNlY29uZHMgb2Yga2V5L21vdXNlIGluYWN0aXZpdHkgYmVmb3JlIGNhcHRpb25cXG4gICAgICAgICAgICAvLyBhbmQgYXJyb3dzIGRpc2FwcGVhclxcbiAgICAgICAgICAgIHRpbWVvdXREdXJhdGlvbjoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDMwMDBcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YSgpIHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSwgICAgICAgIC8vIExpZ2h0Ym94IG5vdCB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gICAgICAgICAgICAgICAgY29udHJvbHNWaXNpYmxlOiB0cnVlLCAvLyBMaWdodGJveCBjb250cm9scyAoYXJyb3dzLCBjYXB0aW9uLCBjbG9zZSBidXR0b24pXFxuICAgICAgICAgICAgICAgIGluZGV4OiAwLCAgICAgICAgICAgICAgLy8gSW5kZXggaW5kaWNhdGVzIHdoaWNoIHBob3RvIHRvIGRpc3BsYXkuIERlZmF1bHQgdG8gMXN0IHBob3RvXFxuICAgICAgICAgICAgICAgIHRpbWVyOiBudWxsICAgICAgICAgIC8vIFRpbWVyIHRvIHNob3cvaGlkZSBsaWdodGJveCBjb250cm9scyAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleUV2ZW50TGlzdGVuZXIpO1xcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBkZXN0cm95ZWQoKSB7XFxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleUV2ZW50TGlzdGVuZXIpO1xcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJyx0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcik7XFxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLHRoaXMubW91c2VFdmVudExpc3RlbmVyKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgc2hvdyhpbWFnZU5hbWUpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1Zpc2libGUgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XFxuXFxuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBpbWFnZSBwYXNzZWQgdG8gTGlnaHRib3hcXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuZmlsdGVyZWRJbWFnZXMubGVuZ3RoOyBpKyspe1xcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5maWx0ZXJlZEltYWdlc1tpXS5uYW1lID09IGltYWdlTmFtZSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dGhhdC5jb250cm9sc1Zpc2libGUgPSBmYWxzZX0sIHRoYXQudGltZW91dER1cmF0aW9uKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVsb2FkTmV4dEltYWdlKCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBoaWRlKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IDA7XFxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGhhc19uZXh0KCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyAxIDwgdGhpcy5maWx0ZXJlZEltYWdlcy5sZW5ndGgpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgaGFzX3ByZXYoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5pbmRleCAtIDEgPj0gMCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBwcmV2KCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNfcHJldigpKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4IC09IDE7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG5leHQoKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc19uZXh0KCkpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gMTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlbG9hZE5leHRJbWFnZSgpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBrZXlFdmVudExpc3RlbmVyKGUpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1Zpc2libGUgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dGhhdC5jb250cm9sc1Zpc2libGUgPSBmYWxzZX0sIHRoYXQudGltZW91dER1cmF0aW9uKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldigpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0VzY2FwZSc6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgLy8gVGhpcyBldmVudCBzaG93cyB0aGUgYXJyb3dzIGFuZCBjYXB0aW9uIG9uIHRoZSBsaWdodGJveCB3aGVuIHRoZSBtb3VzZSBpcyBtb3ZlZCBvciBjbGlja2VkLlxcbiAgICAgICAgICAgIC8vIEFsc28gdXNlZCBmb3IgdG91Y2ggZXZlbnRzIG9uIHRvdWNoc2NyZWVuIGRldmljZXMuIFRoZSBlbGVtZW50cyBhcmUgc2V0IHRvIGRpc2FwcGVhclxcbiAgICAgICAgICAgIC8vIGFmdGVyIGEgZ2l2ZW4gZHVyYXRpb24gdmlhIGEgdGltZXIuXFxuICAgICAgICAgICAgbW91c2VFdmVudExpc3RlbmVyKGUpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1Zpc2libGUgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dGhhdC5jb250cm9sc1Zpc2libGUgPSBmYWxzZX0sIHRoYXQudGltZW91dER1cmF0aW9uKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgcHJlbG9hZE5leHRJbWFnZSAoKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc19uZXh0KCkpe1xcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2ltZyA9IG5ldyBJbWFnZSgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcuc3JjID0gdGhpcy5kaXJlY3RvcnkgKyB0aGlzLmZpbHRlcmVkSW1hZ2VzW3RoaXMuaW5kZXggKyAxXS5uYW1lO1xcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgICAgICBmaWx0ZXJlZEltYWdlczogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XFxuICAgICAgICAgICAgICAgIGlmICh0aGF0LmZpbHRlciA9PT0gJ2FsbCcgfHwgIXRoYXQuZmlsdGVyLmxlbmd0aCl7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5pbWFnZXM7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5pbWFnZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZmlsdGVyID09PSB0aGF0LmZpbHRlcjtcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuICAgIC5saWdodGJveCB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuOSk7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgei1pbmRleDogMjAwO1xcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtY2xvc2Uge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgei1pbmRleDogMjEwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB3aWR0aDogNHJlbTtcXG4gICAgICAgIGhlaWdodDogNHJlbTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1hcnJvdyB7XFxuICAgICAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgICAgei1pbmRleDogMTAwO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1hcnJvdy1yaWdodCB7IHJpZ2h0OiAwOyB9XFxuICAgIFxcbiAgICAubGlnaHRib3gtYXJyb3ctbGVmdCB7IGxlZnQ6IDA7fVxcblxcbiAgICAubGlnaHRib3gtaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1pbWFnZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgICB9XFxuXFxuICAgIC5saWdodGJveC1jYXB0aW9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMTVweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgei1pbmRleDogMTAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYigyNiwgMjYsIDI2KTtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtY2FwdGlvbiBzcGFuIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcXG4gICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtc2xpZGUtZW50ZXItYWN0aXZlLFxcbiAgICAubGlnaHRib3gtc2xpZGUtbGVhdmUtYWN0aXZlIHtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LXNsaWRlLWVudGVyIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LXNsaWRlLWxlYXZlLXRvIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgLmxpZ2h0Ym94LWZhZGUtZW50ZXItYWN0aXZlLFxcbiAgICAubGlnaHRib3gtZmFkZS1sZWF2ZS1hY3RpdmUge1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG4gICAgfVxcblxcbiAgICAubGlnaHRib3gtZmFkZS1lbnRlcixcXG4gICAgLmxpZ2h0Ym94LWZhZGUtbGVhdmUtdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICBcXG48L3N0eWxlPlwiXX0sIG1lZGlhOiB1bmRlZmluZWQgfSk7XG5cbiAgfTtcbiAgLyogc2NvcGVkICovXG4gIHZhciBfX3Z1ZV9zY29wZV9pZF9fID0gdW5kZWZpbmVkO1xuICAvKiBtb2R1bGUgaWRlbnRpZmllciAqL1xuICB2YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IHVuZGVmaW5lZDtcbiAgLyogZnVuY3Rpb25hbCB0ZW1wbGF0ZSAqL1xuICB2YXIgX192dWVfaXNfZnVuY3Rpb25hbF90ZW1wbGF0ZV9fID0gZmFsc2U7XG4gIC8qIGNvbXBvbmVudCBub3JtYWxpemVyICovXG4gIGZ1bmN0aW9uIF9fdnVlX25vcm1hbGl6ZV9fKFxuICAgIHRlbXBsYXRlLCBzdHlsZSwgc2NyaXB0JCQxLFxuICAgIHNjb3BlLCBmdW5jdGlvbmFsLCBtb2R1bGVJZGVudGlmaWVyLFxuICAgIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUlxuICApIHtcbiAgICB2YXIgY29tcG9uZW50ID0gKHR5cGVvZiBzY3JpcHQkJDEgPT09ICdmdW5jdGlvbicgPyBzY3JpcHQkJDEub3B0aW9ucyA6IHNjcmlwdCQkMSkgfHwge307XG5cbiAgICAvLyBGb3Igc2VjdXJpdHkgY29uY2VybnMsIHdlIHVzZSBvbmx5IGJhc2UgbmFtZSBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgY29tcG9uZW50Ll9fZmlsZSA9IFwiL1VzZXJzL2FuZHJldy9Eb2N1bWVudHMvR2l0SHViL3Z1ZS1pbWFnZS1saWdodGJveC9zcmMvbGlnaHRib3gudnVlXCI7XG5cbiAgICBpZiAoIWNvbXBvbmVudC5yZW5kZXIpIHtcbiAgICAgIGNvbXBvbmVudC5yZW5kZXIgPSB0ZW1wbGF0ZS5yZW5kZXI7XG4gICAgICBjb21wb25lbnQuc3RhdGljUmVuZGVyRm5zID0gdGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgY29tcG9uZW50Ll9jb21waWxlZCA9IHRydWU7XG5cbiAgICAgIGlmIChmdW5jdGlvbmFsKSB7IGNvbXBvbmVudC5mdW5jdGlvbmFsID0gdHJ1ZTsgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudC5fc2NvcGVJZCA9IHNjb3BlO1xuXG4gICAge1xuICAgICAgdmFyIGhvb2s7XG4gICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgICBzdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhvb2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY29tcG9uZW50LmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBjb21wb25lbnQucmVuZGVyO1xuICAgICAgICAgIGNvbXBvbmVudC5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgICAgIHZhciBleGlzdGluZyA9IGNvbXBvbmVudC5iZWZvcmVDcmVhdGU7XG4gICAgICAgICAgY29tcG9uZW50LmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRcbiAgfVxuICAvKiBzdHlsZSBpbmplY3QgKi9cbiAgZnVuY3Rpb24gX192dWVfY3JlYXRlX2luamVjdG9yX18oKSB7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgdmFyIHN0eWxlcyA9IF9fdnVlX2NyZWF0ZV9pbmplY3Rvcl9fLnN0eWxlcyB8fCAoX192dWVfY3JlYXRlX2luamVjdG9yX18uc3R5bGVzID0ge30pO1xuICAgIHZhciBpc09sZElFID1cbiAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAvbXNpZSBbNi05XVxcXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gYWRkU3R5bGUoaWQsIGNzcykge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgaWQgKyAnXCJdJykpIHsgcmV0dXJuIH0gLy8gU1NSIHN0eWxlcyBhcmUgcHJlc2VudC5cblxuICAgICAgdmFyIGdyb3VwID0gaXNPbGRJRSA/IGNzcy5tZWRpYSB8fCAnZGVmYXVsdCcgOiBpZDtcbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlc1tncm91cF0gfHwgKHN0eWxlc1tncm91cF0gPSB7IGlkczogW10sIHBhcnRzOiBbXSwgZWxlbWVudDogdW5kZWZpbmVkIH0pO1xuXG4gICAgICBpZiAoIXN0eWxlLmlkcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgdmFyIGNvZGUgPSBjc3Muc291cmNlO1xuICAgICAgICB2YXIgaW5kZXggPSBzdHlsZS5pZHMubGVuZ3RoO1xuXG4gICAgICAgIHN0eWxlLmlkcy5wdXNoKGlkKTtcblxuICAgICAgICBpZiAoaXNPbGRJRSkge1xuICAgICAgICAgIHN0eWxlLmVsZW1lbnQgPSBzdHlsZS5lbGVtZW50IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtZ3JvdXA9JyArIGdyb3VwICsgJ10nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3R5bGUuZWxlbWVudCkge1xuICAgICAgICAgIHZhciBlbCA9IHN0eWxlLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIGVsLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gICAgICAgICAgaWYgKGNzcy5tZWRpYSkgeyBlbC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgY3NzLm1lZGlhKTsgfVxuICAgICAgICAgIGlmIChpc09sZElFKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnLCBncm91cCk7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dC1pbmRleCcsICcwJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPbGRJRSkge1xuICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoc3R5bGUuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dC1pbmRleCcpKTtcbiAgICAgICAgICBzdHlsZS5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0LWluZGV4JywgaW5kZXggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHlsZS5lbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICBzdHlsZS5wYXJ0cy5wdXNoKGNvZGUpO1xuICAgICAgICAgIHN0eWxlLmVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGUucGFydHNcbiAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb2RlKTtcbiAgICAgICAgICB2YXIgbm9kZXMgPSBzdHlsZS5lbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgICAgICAgaWYgKG5vZGVzW2luZGV4XSkgeyBzdHlsZS5lbGVtZW50LnJlbW92ZUNoaWxkKG5vZGVzW2luZGV4XSk7IH1cbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoKSB7IHN0eWxlLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRleHROb2RlLCBub2Rlc1tpbmRleF0pOyB9XG4gICAgICAgICAgZWxzZSB7IHN0eWxlLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyogc3R5bGUgaW5qZWN0IFNTUiAqL1xuICBcblxuICBcbiAgdmFyIExpZ2h0Ym94ID0gX192dWVfbm9ybWFsaXplX18oXG4gICAgeyByZW5kZXI6IF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnM6IF9fdnVlX3N0YXRpY1JlbmRlckZuc19fIH0sXG4gICAgX192dWVfaW5qZWN0X3N0eWxlc19fLFxuICAgIF9fdnVlX3NjcmlwdF9fLFxuICAgIF9fdnVlX3Njb3BlX2lkX18sXG4gICAgX192dWVfaXNfZnVuY3Rpb25hbF90ZW1wbGF0ZV9fLFxuICAgIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18sXG4gICAgX192dWVfY3JlYXRlX2luamVjdG9yX18sXG4gICAgdW5kZWZpbmVkXG4gICk7XG5cbi8vIEltcG9ydCB2dWUgY29tcG9uZW50XG5cbi8vIERlY2xhcmUgaW5zdGFsbCBmdW5jdGlvbiBleGVjdXRlZCBieSBWdWUudXNlKClcbmZ1bmN0aW9uIGluc3RhbGwoVnVlKSB7XG5cdGlmIChpbnN0YWxsLmluc3RhbGxlZCkgeyByZXR1cm47IH1cblx0aW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlO1xuXHRWdWUuY29tcG9uZW50KCdMaWdodGJveCcsIExpZ2h0Ym94KTtcbn1cblxuLy8gQ3JlYXRlIG1vZHVsZSBkZWZpbml0aW9uIGZvciBWdWUudXNlKClcbnZhciBwbHVnaW4gPSB7XG5cdGluc3RhbGw6IGluc3RhbGwsXG59O1xuXG4vLyBBdXRvLWluc3RhbGwgd2hlbiB2dWUgaXMgZm91bmQgKGVnLiBpbiBicm93c2VyIHZpYSA8c2NyaXB0PiB0YWcpXG52YXIgR2xvYmFsVnVlID0gbnVsbDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRHbG9iYWxWdWUgPSB3aW5kb3cuVnVlO1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuXHRHbG9iYWxWdWUgPSBnbG9iYWwuVnVlO1xufVxuaWYgKEdsb2JhbFZ1ZSkge1xuXHRHbG9iYWxWdWUudXNlKHBsdWdpbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpZ2h0Ym94O1xuZXhwb3J0IHsgaW5zdGFsbCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
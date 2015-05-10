var Geomicons =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var paths = __webpack_require__(34);
	var inject = __webpack_require__(2);
	var toString = __webpack_require__(3);

	module.exports = {
	  paths: paths,
	  inject: inject,
	  toString: toString
	};




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 24 A6 6 0 0 0 12 24 V8 H26 V18 A6 6 0 0 0 18 24 A6 6 0 0 0 30 24 V2 H8 V18 A6 6 0 0 0 0 24'
	].join(' ');



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	var camelCase = __webpack_require__(61);
	var paths = __webpack_require__(34);

	function inject(el, pathdata) {

	  var svg;
	  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

	  if (el.tagName == 'svg') {
	    svg = el.cloneNode(true);
	  } else {
	    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	    for (var i = 0; i < el.attributes.length; i++) {
	      svg.setAttribute(el.attributes[i].name, el.attributes[i].value);
	    }
	  }

	  svg.setAttribute('viewBox', '0 0 32 32');
	  svg.setAttribute('style', 'fill:currentcolor');
	  path.setAttribute('d', pathdata);
	  svg.appendChild(path);

	  el.parentNode.replaceChild(svg, el);

	};

	module.exports = function(elements) {

	  if (!elements.length) elements = [elements];

	  if (typeof document !== 'undefined') {
	    for (var i = 0; i < elements.length; i++) {
	      var key = elements[i].getAttribute('data-icon');
	      key = camelCase(key);
	      var d = paths[key];
	      if (!d) {
	        error(key);
	        return false;
	      }
	      inject(elements[i], d);
	    }
	  } else {
	    console.error('geomicons.inject() only works in a browser context');
	    return false;
	  }

	};



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	var paths = __webpack_require__(34); 
	var camelCase = __webpack_require__(61);
	var error = __webpack_require__(60);

	module.exports = function(key) {

	  var string = '';
	  var d = paths[camelCase(key)] || false;
	  if (!d) {
	    error(key);
	    return false;
	  }

	  string = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="fill:currentcolor">\n' +
	               '<path d="' + d + '"/>\n' +
	               '</svg>';

	  return string;

	};



/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M6 2 L26 2 L26 30',
	  'L16 24 L6 30 Z',
	].join(' ');



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 4 L6 4 L6 2 A2 2 0 0 1 10 2 L10 4 L22 4 L22 2 A2 2 0 0 1 26 2 L26 4 L30 4 L30 10 L2 10 M2 12 L30 12 L30 30 L2 30',
	].join(' ');



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 6 L8 6 L10 2 L22 2 L24 6 L32 6 L32 28 L0 28 z M9 17 A7 7 0 0 0 23 17 A7 7 0 0 0 9 17'
	].join(' ');



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M32 16 A16 12 0 0 0 0 16 A16 12 0 0 0 16 28 L18 28 C20 30 24 32 28 32 C27 31 26 28 26 25.375 L26 25.375 A16 12 0 0 0 32 16'
	].join(' ');



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z'
	].join(' ');



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M1 12 L16 26 L31 12 L27 8 L16 18 L5 8 z'
	].join(' ');



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z'
	].join(' ');



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z'
	].join(' ');



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M1 20 L16 6 L31 20 L27 24 L16 14 L5 24 z'
	].join(' ');



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 28 16 A12 12 0 0 1 16 28 A12 12 0 0 1 4 16 A12 12 0 0 1 16 4 M14 6 L14 17.25 L22 22 L24.25 18.5 L18 14.75 L18 6z'
	].join(' ');



/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z'
	].join(' ');



/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M7 14 A7 7 0 0 0 0 21 A7 7 0 0 0 7 28 H27 A5 5 0 0 0 32 23 A5 5 0 0 0 27 18 A10 10 0 0 0 28 14 A10 10 0 0 0 18 4 A10 10 0 0 0 8 14 A7 7 0 0 0 7 14'
	].join(' ');



/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M14 0 H18 L19 6 L20.707 6.707 L26 3.293 L28.707 6 L25.293 11.293 L26 13 L32 14 V18 L26 19 L25.293 20.707 L28.707 26 L26 28.707 L20.707 25.293 L19 26 L18 32 L14 32 L13 26 L11.293 25.293 L6 28.707 L3.293 26 L6.707 20.707 L6 19 L0 18 L0 14 L6 13 L6.707 11.293 L3.293 6 L6 3.293 L11.293 6.707 L13 6 L14 0 z M16 10 A6 6 0 0 0 16 22 A6 6 0 0 0 16 10'
	].join(' ');



/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 L16 4 L16 8 L8 8 L8 24 L24 24 L24 16 L28 16 L28 28 L4 28 z M26 2 L30 6 L16 20 L12 20 L12 16 z'
	].join(' ');



/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M5 11.5 A12 12 0 0 1 11 5 A46 46 0 0 1 13.5 9.25 A46 46 0 0 1 5 11.5 M15 4 A12 12 0 0 1 21.5 5.25 A46 46 0 0 1 17 7.75 A50 50 0 0 0 15 4 M4 16 A50 50 0 0 0 15 13 A46 46 0 0 1 16 15.5 A26 26 0 0 0 6 22.5 A12 12 0 0 1 4 16 M18.5 11.5 A50 50 0 0 0 25 8 A12 12 0 0 1 28 13.75 A26 26 0 0 0 19.75 14.5 A50 50 0 0 0 18.5 11.5 M17 19.5 A46 46 0 0 1 18 28 A12 12 0 0 1 8.75 25.5 A22 22 0 0 1 17 19.5 M20.75 18.25 A22 22 0 0 1 28 17.75 A12 12 0 0 1 22 26.5 A50 50 0 0 0 20.75 18.25'
	].join(' ');



/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 4 L28 4 L28 16 L24 12 L20 16 L16 12 L20 8z M4 16 L8 20 L12 16 L16 20 L12 24 L16 28 L4 28z'
	].join(' ');



/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 L12 4 L12 8 L8 8 L8 24 L24 24 L24 20 L28 20 L28 28 L4 28 z M16 4 L28 4 L28 16 L24 12 L16 20 L12 16 L20 8z'
	].join(' ');



/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z'
	].join(' ');



/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 2 L4 30 L28 30 L28 10 L20 2 z'
	].join(' ');



/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 4 L0 28 L32 28 L32 8 L16 8 L12 4 z'
	].join(' ');



/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 18 L30 2 L14 30 L14 18z'
	].join(' ');



/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z'
	].join(' ');



/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z'
	].join(' ');



/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 10 C0 6, 3 2, 8 2 C12 2, 15 5, 16 6 C17 5, 20 2, 24 2 C30 2, 32 6, 32 10 C32 18, 18 29, 16 30 C14 29, 0 18, 0 10'
	].join(' ');



/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z'
	].join(' ');



/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6'
	].join(' ');



/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 16 A8 8 0 0 1 8 8 L14 8 A8 8 0 0 1 22 16 L18 16 A4 4 0 0 0 14 12 L8 12 A4 4 0 0 0 4 16 A4 4 0 0 0 8 20 L10 24 L8 24 A8 8 0 0 1 0 16z M22 8 L24 8 A8 8 0 0 1 32 16 A8 8 0 0 1 24 24 L18 24 A8 8 0 0 1 10 16 L14 16 A4 4 0 0 0 18 20 L24 20 A4 4 0 0 0 28 16 A4 4 0 0 0 24 12z'
	].join(' ');



/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M3 8 A3 3 0 0 0 9 8 A3 3 0 0 0 3 8 M12 6 L28 6 L28 10 L12 10z M3 16 A3 3 0 0 0 9 16 A3 3 0 0 0 3 16 M12 14 L28 14 L28 18 L12 18z M3 24 A3 3 0 0 0 9 24 A3 3 0 0 0 3 24 M12 22 L28 22 L28 26 L12 26z'
	].join(' ');



/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M22 16 L22 12 A6 6 0 0 0 10 12 L10 16 z M4 16 L6 16 L6 12 A10 10 0 0 1 26 12 L26 16 L28 16 L28 30 L4 30 z'
	].join(' ');



/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 6 L16 16 L32 6 z M0 9 L0 26 L32 26 L32 9 L16 19 z'
	].join(' ');



/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = {
	  bookmark: __webpack_require__(4),
	  calendar: __webpack_require__(5),
	  calendar: __webpack_require__(5),
	  camera: __webpack_require__(6),
	  chat: __webpack_require__(7),
	  check: __webpack_require__(8),
	  chevronDown: __webpack_require__(9),
	  chevronLeft: __webpack_require__(10),
	  chevronRight: __webpack_require__(11),
	  chevronUp: __webpack_require__(12),
	  clock: __webpack_require__(13),
	  close: __webpack_require__(14),
	  cloud: __webpack_require__(15),
	  cog: __webpack_require__(16),
	  compose: __webpack_require__(17),
	  dribbble: __webpack_require__(18),
	  expand: __webpack_require__(19),
	  external: __webpack_require__(20),
	  facebook: __webpack_require__(21),
	  file: __webpack_require__(22),
	  folder: __webpack_require__(23),
	  geolocation: __webpack_require__(24),
	  github: __webpack_require__(25),
	  grid: __webpack_require__(26),
	  heart: __webpack_require__(27),
	  home: __webpack_require__(28),
	  info: __webpack_require__(29),
	  link: __webpack_require__(30),
	  list: __webpack_require__(31),
	  lock: __webpack_require__(32),
	  mail: __webpack_require__(33),
	  musicNote: __webpack_require__(1),
	  next: __webpack_require__(35),
	  no: __webpack_require__(36),
	  pause: __webpack_require__(37),
	  picture: __webpack_require__(38),
	  pin: __webpack_require__(39),
	  play: __webpack_require__(40),
	  previous: __webpack_require__(41),
	  refresh: __webpack_require__(42),
	  repost: __webpack_require__(43),
	  search: __webpack_require__(44),
	  shoppingCart: __webpack_require__(45),
	  skull: __webpack_require__(46),
	  speakerVolume: __webpack_require__(47),
	  speaker: __webpack_require__(48),
	  star: __webpack_require__(49),
	  tag: __webpack_require__(50),
	  trash: __webpack_require__(51),
	  triangleDown: __webpack_require__(52),
	  triangleLeft: __webpack_require__(53),
	  triangleRight: __webpack_require__(54),
	  triangleUp: __webpack_require__(55),
	  twitter: __webpack_require__(56),
	  user: __webpack_require__(57),
	  video: __webpack_require__(58),
	  warning: __webpack_require__(59),
	};



/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 L24 14 V4 H28 V28 H24 V18 L4 28 z'
	].join(' ');



/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M16 6 A10 10 0 0 1 20.675 7 L7 20.675 A10 10 0 0 1 6 16 A10 10 0 0 1 16 6 M26 16 A10 10 0 0 1 16 26 A10 10 0 0 1 11.325 25 L25 11.325 A10 10 0 0 1 26 16'
	].join(' ');



/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z'
	].join(' ');



/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 4 L0 28 L32 28 L32 4 z M4 24 L10 10 L15 18 L18 14 L24 24z M25 7 A4 4 0 0 1 25 15 A4 4 0 0 1 25 7'
	].join(' ');



/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 12 A12 12 0 0 1 28 12 C28 20, 16 32, 16 32 C16 32, 4 20 4 12 M11 12 A5 5 0 0 0 21 12 A5 5 0 0 0 11 12 Z'
	].join(' ');



/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 L28 16 L4 28 z'
	].join(' ');



/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 H8 V14 L28 4 V28 L8 18 V28 H4 z'
	].join(' ');



/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 2 A14 14 0 0 0 2 16 A14 14 0 0 0 16 30 A14 14 0 0 0 26 26 L 23.25 23 A10 10 0 0 1 16 26 A10 10 0 0 1 6 16 A10 10 0 0 1 16 6 A10 10 0 0 1 23.25 9 L19 13 L30 13 L30 2 L26 6 A14 14 0 0 0 16 2'
	].join(' ');



/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M7 7 L14 14 L9 14 L9 20 L16 20 L16 24 L5 24 L5 14 L0 14 z M16 8 L27 8 L27 18 L32 18 L25 25 L18 18 L23 18 L23 12 L16 12z'
	].join(' ');



/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M12 0 A12 12 0 0 0 0 12 A12 12 0 0 0 12 24 A12 12 0 0 0 18.5 22.25 L28 32 L32 28 L22.25 18.5 A12 12 0 0 0 24 12 A12 12 0 0 0 12 0 M12 4 A8 8 0 0 1 12 20 A8 8 0 0 1 12 4'
	].join(' ');



/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 4 L5 4 L6 8 L30 8 L28 22 L6 22 L3.5 6 L0 6z M10 24 A3 3 0 0 0 10 30 A3 3 0 0 0 10 24 M24 24 A3 3 0 0 0 24 30 A3 3 0 0 0 24 24'
	].join(' ');



/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12'
	].join(' ');



/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 12 L8 12 L16 6 L16 26 L8 20 L2 20 z M32 16 A16 16 0 0 1 27.25 27.375 L25.25 25.25 A13 13 0 0 0 29 16 A13 13 0 0 0 25.25 6.75 L27.25 4.625 A16 16 0 0 1 32 16 M25 16 A9 9 0 0 1 22.375 22.375 L20.25 20.25 A6 6 0 0 0 22 16 A6 6 0 0 0 20.25 11.75 L22.375 9.625 A9 9 0 0 1 25 16'
	].join(' ');



/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 12 L8 12 L16 6 L16 26 L8 20 L2 20 z'
	].join(' ');



/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M16 0 L21 11 L32 12 L23 19 L26 31 L16 25 L6 31 L9 19 L0 12 L11 11'
	].join(' ');



/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 18 L16 2 L29 3 L30 16 L14 32 z M20 9 A3 3 0 0 0 26 9 A3 3 0 0 0 20 9'
	].join(' ');



/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 4 L10 4 L12 2 L20 2 L22 4 L28 4 L29 8 L3 8 z M5 10 L27 10 L26 30 L6 30 z'
	].join(' ');



/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 8 H28 L16 26 z'
	].join(' ');



/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M24 4 V28 L6 16 z'
	].join(' ');



/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M8 4 V28 L26 16 z'
	].join(' ');



/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M4 24 H28 L16 6 z'
	].join(' ');



/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4'
	].join(' ');



/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M10 8 A6 6 0 0 1 22 8 L22 12 A6 6 0 0 1 10 12 z M2 26 C3 23 10 20 14 20 L18 20 C22 20 29 23 30 26 L30 28 L2 28 z'
	].join(' ');



/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M0 6 L0 26 L24 26 L24 19 L32 23 L32 9 L24 13 L24 6 z'
	].join(' ');



/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = [
	  'M15 0 H17 L32 29 L31 30 L1 30 L0 29 z M19 8 L13 8 L14 20 L18 20 z M16 22 A3 3 0 0 0 16 28 A3 3 0 0 0 16 22'
	].join(' ');



/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	
	var paths = __webpack_require__(34);

	module.exports = function(key) {
	  var iconList = Object.keys(paths);
	  iconList = iconList.join();
	  console.error(
	    'No icon found for ' + key + '.\n' +
	    'Geomicons Open includes the following icons: \n' + iconList
	  );
	};



/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var upperCase    = __webpack_require__(62);
	var sentenceCase = __webpack_require__(63);

	/**
	 * Camel case a string.
	 *
	 * @param  {String} string
	 * @param  {String} [locale]
	 * @return {String}
	 */
	module.exports = function (string, locale) {
	  return sentenceCase(string, locale)
	    // Replace periods between numeric entities with an underscore.
	    .replace(/(\d) (?=\d)/g, '$1_')
	    // Replace spaces between words with an upper cased character.
	    .replace(/ (.)/g, function (m, $1) {
	      return upperCase($1, locale);
	    });
	};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Special language-specific overrides.
	 *
	 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
	 *
	 * @type {Object}
	 */
	var LANGUAGES = {
	  tr: {
	    regexp: /[\u0069]/g,
	    map: {
	      '\u0069': '\u0130'
	    }
	  },
	  az: {
	    regexp: /[\u0069]/g,
	    map: {
	      '\u0069': '\u0130'
	    }
	  },
	  lt: {
	    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
	    map: {
	      '\u0069\u0307': '\u0049',
	      '\u006A\u0307': '\u004A',
	      '\u012F\u0307': '\u012E',
	      '\u0069\u0307\u0300': '\u00CC',
	      '\u0069\u0307\u0301': '\u00CD',
	      '\u0069\u0307\u0303': '\u0128'
	    }
	  }
	}

	/**
	 * Upper case a string.
	 *
	 * @param  {String} str
	 * @return {String}
	 */
	module.exports = function (str, locale) {
	  var lang = LANGUAGES[locale]

	  str = str == null ? '' : String(str)

	  if (lang) {
	    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
	  }

	  return str.toUpperCase()
	}


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var lowerCase = __webpack_require__(67)

	var NON_WORD_REGEXP = __webpack_require__(64)
	var CAMEL_CASE_REGEXP = __webpack_require__(65)
	var TRAILING_DIGIT_REGEXP = __webpack_require__(66)

	/**
	 * Sentence case a string.
	 *
	 * @param  {String} str
	 * @param  {String} locale
	 * @param  {String} replacement
	 * @return {String}
	 */
	module.exports = function (str, locale, replacement) {
	  if (str == null) {
	    return ''
	  }

	  replacement = replacement || ' '

	  function replace (match, index, string) {
	    if (index === 0 || index === (string.length - match.length)) {
	      return ''
	    }

	    return replacement
	  }

	  str = String(str)
	    // Support camel case ("camelCase" -> "camel Case").
	    .replace(CAMEL_CASE_REGEXP, '$1 $2')
	    // Support digit groups ("test2012" -> "test 2012").
	    .replace(TRAILING_DIGIT_REGEXP, '$1 $2')
	    // Remove all non-word characters and replace with a single space.
	    .replace(NON_WORD_REGEXP, replace)

	  // Lower case the entire string.
	  return lowerCase(str, locale)
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = /[^\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = /([\u0061-\u007A\u00B5\u00DF-\u00F6\u00F8-\u00FF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0561-\u0587\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7FA\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])([\u0041-\u005A\u00C0-\u00D6\u00D8-\u00DE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA\uFF21-\uFF3A\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])/g


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = /([\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([^\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])/g


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Special language-specific overrides.
	 *
	 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
	 *
	 * @type {Object}
	 */
	var LANGUAGES = {
	  tr: {
	    regexp: /\u0130|\u0049|\u0049\u0307/g,
	    map: {
	      '\u0130': '\u0069',
	      '\u0049': '\u0131',
	      '\u0049\u0307': '\u0069'
	    }
	  },
	  az: {
	    regexp: /[\u0130]/g,
	    map: {
	      '\u0130': '\u0069',
	      '\u0049': '\u0131',
	      '\u0049\u0307': '\u0069'
	    }
	  },
	  lt: {
	    regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
	    map: {
	      '\u0049': '\u0069\u0307',
	      '\u004A': '\u006A\u0307',
	      '\u012E': '\u012F\u0307',
	      '\u00CC': '\u0069\u0307\u0300',
	      '\u00CD': '\u0069\u0307\u0301',
	      '\u0128': '\u0069\u0307\u0303'
	    }
	  }
	}

	/**
	 * Lowercase a string.
	 *
	 * @param  {String} str
	 * @return {String}
	 */
	module.exports = function (str, locale) {
	  var lang = LANGUAGES[locale]

	  str = str == null ? '' : String(str)

	  if (lang) {
	    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
	  }

	  return str.toLowerCase()
	}


/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tests__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__click__ = __webpack_require__(2);
// Write Test for it




class tickTackToe {
  constructor() {
    // this.list = [[0,0,0], [0,0,0], [0,0,0]];
    this.list = [[0, 2, 1], [0, 1, 2], [0, 1, 1]];
    this.canv = document.getElementById('TickTackToeCanvas');
    this.ctx = this.canv.getContext('2d');
  }

  drawX(i, j) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'red';

    this.ctx.moveTo(i - 40, j - 40);
    this.ctx.lineTo(i + 40, j + 40);
    this.ctx.lineWidth = 10;

    this.ctx.moveTo(i + 40, j - 40);
    this.ctx.lineTo(i - 40, j + 40);
    this.ctx.lineWidth = 10;
    this.ctx.stroke();
  }

  drawCircle(i, j) {
    this.ctx.beginPath();
    this.ctx.arc(i, j, 40, 0, 2 * Math.PI, false);
    this.ctx.strokeStyle = 'red';
    this.ctx.lineWidth = 10;
    this.ctx.stroke();
  }

  drawMap() {
    var bcgColor = 'white';
    this.canv.width = 300;
    this.canv.height = 300;
    for (var i = 0; i < this.list.length; i++) {
      for (var j = 0; j < this.list[0].length; j++) {
        if (this.list[i][j] === 1) {
          this.ctx.fillStyle = bcgColor;
          this.ctx.fillRect(j * 100, i * 100, 98, 98);
          this.drawCircle(j * 100 + 50, i * 100 + 50);
        } else if (this.list[i][j] === 2) {
          document.getElementById('text').innerHTML = this.list[i][j];
          this.ctx.fillStyle = bcgColor;
          this.ctx.fillRect(j * 100, i * 100, 98, 98);
          this.drawX(j * 100 + 50, i * 100 + 50);
        }
      }
    }
  }

  newGame() {
    this.list = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    // this.drawMap()
  }
  gameState() {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__tests__["a" /* default */])(this.list, 1)) {
      document.getElementById('text').innerHTML = "End Game: Circle wins.";
      this.newGame();
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__tests__["a" /* default */])(this.list, 2)) {
      document.getElementById('text').innerHTML = "End Game: Cross wins.";
      this.newGame();
    }
  }

};

var game = new tickTackToe();

Object(__WEBPACK_IMPORTED_MODULE_1__click__["a" /* default */])();

game.drawMap();
game.gameState();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = win;
// Check if any chracter wins the game.
function win(list, character) {
  var winAcrossTest = function (list, character) {
    var sumChar;
    for (var i = 0; i < list.length; i++) {
      sumChar = 0;
      for (var j = 0; j < list[0].length; j++) {
        if (list[i][j] === character) {
          sumChar++;
        }
      }
      if (sumChar === 3) {
        console.log("In across test won character: " + character);
        return true;
      } else {
        sumChar = 0;
      }
    }
  };

  var winDownTest = function (list, character) {
    for (var j = 0; j < list[0].length; j++) {
      var sumChar = 0;
      for (var i = 0; i < list.length; i++) {
        if (list[i][j] === character) {
          sumChar++;
        }
      }
      if (sumChar === 3) {
        console.log("In down test won character: " + character);
        return true;
      } else {
        sumChar = 0;
      }
    }
  };

  var winDiagonalTest = function (list, character) {
    if (list[0][0] === character && list[1][1] === character && list[2][2] === character) {
      console.log("In diagonal test won character: " + character);
      return true;
    } else if (list[0][2] === character && list[1][1] === character && list[2][0] === character) {
      console.log("In diagonal test won character: " + character);
      return true;
    };
  };

  if (winAcrossTest(list, character) || winDownTest(list, character) || winDiagonalTest(list, character)) {
    return true;
  } else {
    return false;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = click;
function click(list, character) {
  var x;
  var y;
  var canv = document.getElementById('clickCanvas');
  var ctx = canv.getContext('2d');
  canv.width = 300;
  canv.height = 300;

  canv.onmousemove = function (e) {
    x = Math.floor(e.offsetY / 100);
    y = Math.floor(e.offsetX / 100);

    if (x >= 0 && x <= 300) {
      if (y >= 0 && y <= 300) {
        document.getElementById('info').innerHTML = '<strong>' + x + '</strong>, <strong>' + y + '</strong>';

        // var tmp_x = Math.floor(e.offsetY / mapConfig.tileHeight())
        // var tmp_y = Math.floor(e.offsetX / mapConfig.tileWidth())

        // ctx.fillRect(Math.ceil(tmp_y * mapConfig.tileWidth()), Math.ceil(tmp_x * mapConfig.tileHeight()) , mapConfig.tileWidth(), mapConfig.tileHeight());
      }
    }
  };
}

// element.onclick = function (element) {
//   // whenever you click on Tile it show active tile on map
//   var e = document.getElementById('clickTile')
//   clickTile['x'] = x
//   clickTile['y'] = y
//   e.innerHTML = '<strong>[' + x + '</strong>, <strong>' + y + ']</strong>'
//
//   var canvas = document.getElementById('canvasClick')
//   if (canvas.getContext){
//     canvas.width = mapConfig.mapWidth()
//     canvas.height = mapConfig.mapHeight()
//
//     var ctx = canvas.getContext('2d');
//     ctx.fillStyle = "#ffcc00";
//
//     var tmp_x = JSON.parse(localStorage.getItem('tmp_x'))
//     var tmp_y = JSON.parse(localStorage.getItem('tmp_y'))
//
//     ctx.fillRect(Math.ceil(tmp_y * mapConfig.tileWidth()), Math.ceil(tmp_x * mapConfig.tileHeight()) , mapConfig.tileWidth(), mapConfig.tileHeight());
//   };
//
//   localStorage.setItem('clickTile', JSON.stringify(clickTile));
// };

/***/ })
/******/ ]);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  if ('NodeList' in window && !NodeList.prototype.forEach) {
    // console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  var calc = __webpack_require__(/*! ./parts/calc.js */ "./parts/calc.js"),
      clock = __webpack_require__(/*! ./parts/clock.js */ "./parts/clock.js"),
      contactForm = __webpack_require__(/*! ./parts/contactForm.js */ "./parts/contactForm.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./parts/form.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./parts/modal.js"),
      modalTabs = __webpack_require__(/*! ./parts/modalTabs.js */ "./parts/modalTabs.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./parts/slider.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./parts/tabs.js");

  calc();
  clock();
  contactForm();
  form();
  modal();
  modalTabs();
  slider();
  tabs();
});

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0,
      nValue,
      arrValue;
  totalValue.innerHTML = 0;

  function check(input) {
    return /\d$/.test(input);
  }

  persons.addEventListener('input', function () {
    personsSum = +this.value;

    if (!check(this.value)) {
      this.value = this.value.slice(0, -1);
    }

    if (persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      total = (daysSum + personsSum) * 4000;

      if (restDays.value == '') {
        totalValue.innerHTML = 0;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  restDays.addEventListener('input', function () {
    daysSum = +this.value;

    if (!check(this.value)) {
      this.value = this.value.slice(0, -1);
    }

    if (restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      total = (daysSum + personsSum) * 4000;

      if (persons.value == '') {
        totalValue.innerHTML = 0;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calc;

/***/ }),

/***/ "./parts/clock.js":
/*!************************!*\
  !*** ./parts/clock.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function clock() {
  var deadLine = '2019-04-27';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds, minutes, hours;

    if (Date.parse(new Date()) >= Date.parse(endtime)) {
      seconds = 0;
      minutes = 0;
      hours = 0;
    } else {
      seconds = Math.floor(t / 1000 % 60);
      minutes = Math.floor(t / 1000 / 60 % 60);
      hours = Math.floor(t / (1000 * 60 * 60));
    }

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);

      if (t.hours < 10) {
        hours.textContent = "0" + t.hours;
      } else {
        hours.textContent = t.hours;
      }

      if (t.minutes < 10) {
        minutes.textContent = '0' + t.minutes;
      } else {
        minutes.textContent = t.minutes;
      }

      if (t.seconds < 10) {
        seconds.textContent = '0' + t.seconds;
      } else {
        seconds.textContent = t.seconds;
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('timer', deadLine);
}

module.exports = clock;

/***/ }),

/***/ "./parts/contactForm.js":
/*!******************************!*\
  !*** ./parts/contactForm.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function contactForm() {
  var message = {
    loading: "Loading",
    success: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так..."
  };
  var formContact = document.getElementById("form"),
      inputContact = formContact.getElementsByTagName('input'),
      inputWrapperContact,
      statusMessage = document.createElement('div'),
      arrContact;
  formContact.addEventListener('submit', function (event) {
    inputWrapperContact = inputContact[1].value;
    arrContact = inputWrapperContact.split('');
    event.preventDefault();
    formContact.appendChild(statusMessage);
    var formData = new FormData(formContact);

    function postData(data) {
      return new Promise(function (resolve, reject) {
        var requestSecond = new XMLHttpRequest();
        requestSecond.open('POST', 'server.php');
        requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        requestSecond.addEventListener('readystatechange', function () {
          if (requestSecond.readyState < 4) {
            resolve();
          } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
            resolve();
          } else {
            reject();
          }
        });
        var obj = {};
        formData.forEach(function (value, key) {
          obj[key] = value;
        });
        var json = JSON.stringify(obj);
        requestSecond.send(json);
      });
    } // end postData


    function clearInput() {
      for (var i = 0; i < inputContact.length; i++) {
        inputContact[i].value = '';
      }
    }

    postData(formData).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.success;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(clearInput);
  });
}

module.exports = contactForm;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  var message = {
    loading: "Loading",
    success: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так..."
  };
  var mainForm = document.querySelector(".main-form"),
      input = mainForm.getElementsByTagName('input'),
      statusMessage = document.createElement('div'),
      inputWrapper,
      arr;
  statusMessage.classList.add('status');
  mainForm.addEventListener('submit', function (event) {
    inputWrapper = input[0].value;
    arr = inputWrapper.split('');

    if (!isNaN(+input[0].value) || input[0].value[0] == '+' && !isNaN(+input[0].value.slice(1, input[0].value.length + 1))) {
      var postData = function postData(data) {
        return new Promise(function (resolve, reject) {
          var requestSecond = new XMLHttpRequest();
          requestSecond.open('POST', 'server.php');
          requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
          requestSecond.addEventListener('readystatechange', function () {
            if (requestSecond.readyState < 4) {
              resolve();
            } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
              resolve();
            } else {
              reject();
            }
          });
          var obj = {};
          data.forEach(function (value, key) {
            obj[key] = value;
          });
          var json = JSON.stringify(obj);
          requestSecond.send(json);
        });
      }; // end postData


      var clearInput = function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      };

      event.preventDefault();
      mainForm.appendChild(statusMessage);
      var formData = new FormData(mainForm);
      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        return statusMessage.innerHTML = message.success;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    } else {
      event.preventDefault();
      mainForm.appendChild(statusMessage);
      statusMessage.innerHTML = "Используйте цифры и знак +";
    }
  });
}

module.exports = form;

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');
  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = "hidden";
  });
  close.addEventListener('click', function () {
    overlay.style.display = "none";
    more.classList.remove('more-splash');
    document.body.style.overflow = "";
  });
}

module.exports = modal;

/***/ }),

/***/ "./parts/modalTabs.js":
/*!****************************!*\
  !*** ./parts/modalTabs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalTabs() {
  var btnTabs = document.querySelectorAll('.description-btn'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');
  more = document.querySelector('.more'), btnTabs.forEach(function (item) {
    item.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = "hidden";
    });
    close.addEventListener('click', function () {
      overlay.style.display = "none";
      more.classList.remove('more-splash');
      document.body.style.overflow = "";
    });
  });
}

module.exports = modalTabs;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = "none";
    });
    dots.forEach(function (item) {
      return item.classList.remove("dot-active");
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function curentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        curentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ })

/******/ });
//# sourceMappingURL=bundel.js.map
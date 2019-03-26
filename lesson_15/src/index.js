window.addEventListener('DOMContentLoaded', function() {
    require('formdata-polyfill');
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

    let calc = require('./parts/calc.js'),
        clock = require('./parts/clock.js'),
        contactForm =require('./parts/contactForm.js'),
        form = require('./parts/form.js'),
        modal = require('./parts/modal.js'),
        modalTabs = require('./parts/modalTabs.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js');

        calc();
        clock();
        contactForm();
        form();
        modal();
        modalTabs();
        slider();
        tabs();
});
window.addEventListener('DOMContentLoaded', function() {

    'use strict';

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
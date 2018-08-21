'use strict';
/**
 * App entry point.
 *
 * @module App
 */

/** Import initialized-by-default modules/libs */
import 'jquery';
import './components/Common';
import './components/PublicAPI';
import './components/pole-styles.js';
// import './../../../www/static/js/lightboxgallery.js';

/** Import page controllers */
import Home from './pages/Home';

import { currentPage } from './modules/dev/_helpers';

/**
 * Run appropriate scripts for each page.
 **/
switch (currentPage) {
  /** Home page */
  case 'home': new Home; break;

  /** No page found */
  default: console.warn('Undefined page');
}
console.log('working');
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');

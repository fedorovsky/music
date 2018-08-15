import $ from 'jquery';
import 'css/style.css';
import Subscribe from './modules/subscribe';

$(document).ready(() => {
  new Subscribe().init();
});

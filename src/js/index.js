import $ from 'jquery';
import 'css/style.css';
import MediaQueries from './modules/mediaQueries';
import Subscribe from './modules/subscribe';

const mediaQueries = new MediaQueries();

mediaQueries.change('xs', message => console.log('Responsive ->', message));
mediaQueries.change('sm', message => console.log('Responsive ->', message));
mediaQueries.change('md', message => console.log('Responsive ->', message));
mediaQueries.change('lg', message => console.log('Responsive ->', message));


$(document).ready(() => {
  new Subscribe().init();
});

$(document).ready(() => {
  $('.btn-open').on('click', () => {
    $('.menu-box').addClass('--state-open');
  });

  $('.btn-close').on('click', () => {
    $('.menu-box').removeClass('--state-open');
  });
});

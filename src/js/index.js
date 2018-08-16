import $ from 'jquery';
import MediaQueries from './modules/mediaQueries';
import Subscribe from './modules/subscribe';
import CopyVideo from './modules/copyVideo';
import CopySubscribe from './modules/copySybscribe';
import '../css/style.css';

const mediaQueries = new MediaQueries();

mediaQueries.change('xs', message => console.log('Responsive ->', message));
mediaQueries.change('sm', message => console.log('Responsive ->', message));
mediaQueries.change('md', message => console.log('Responsive ->', message));
mediaQueries.change('lg', message => console.log('Responsive ->', message));


$(document).ready(() => {
  new Subscribe().init();
  new CopyVideo().init();
  new CopySubscribe().init();
});

$(document).ready(() => {
  $('.btn-open').on('click', () => {
    $('.menu-box').addClass('--state-open');
  });

  $('.btn-close').on('click', () => {
    $('.menu-box').removeClass('--state-open');
  });
});

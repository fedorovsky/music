import $ from 'jquery';
import MediaQueries from './modules/mediaQueries';
import SubscribeForm from './modules/subscribeForm';
import CopyVideo from './modules/copyVideo';
import CopySubscribe from './modules/copySybscribe';
import SubscribePopUp from './modules/subscribePopUp';
import '../css/style.css';

const mediaQueries = new MediaQueries();

mediaQueries.change('xs', message => console.log('Responsive ->', message));
mediaQueries.change('sm', message => console.log('Responsive ->', message));
mediaQueries.change('md', message => console.log('Responsive ->', message));
mediaQueries.change('lg', message => console.log('Responsive ->', message));


$(document).ready(() => {
  new SubscribeForm().init();
  new SubscribePopUp().init();
  new CopyVideo().init();
  new CopySubscribe().init();
});

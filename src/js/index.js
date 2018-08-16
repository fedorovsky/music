import $ from 'jquery';
import MediaQueries from './modules/mediaQueries';
import SubscribeForm from './modules/subscribeForm';
import VideoCopy from './modules/copy-blocks/video-copy';
import SubscribeCopy from './modules/copy-blocks/subscribe-copy';
import HeaderCopy from './modules/copy-blocks/header-copy';
import SubscribePopUp from './modules/subscribePopUp';
import SocialCopy from './modules/copy-blocks/social-copy';
import InstagramCopy from './modules/copy-blocks/instagram-copy';
import FooterCopy from './modules/copy-blocks/footer-copy';
import ChordCopy from './modules/copy-blocks/chord-copy';
import '../css/style.css';

const mediaQueries = new MediaQueries();

mediaQueries.change('xs', message => console.log('Responsive ->', message));
mediaQueries.change('sm', message => console.log('Responsive ->', message));
mediaQueries.change('md', message => console.log('Responsive ->', message));
mediaQueries.change('lg', message => console.log('Responsive ->', message));


$(document).ready(() => {
  new SubscribeForm().init();
  new SubscribePopUp().init();

  new VideoCopy().init();
  new SubscribeCopy().init();
  new HeaderCopy().init();
  new SocialCopy().init();
  new InstagramCopy().init();
  new FooterCopy().init();
  new ChordCopy().init();
});

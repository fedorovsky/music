import $ from 'jquery';
import MediaQueries from './modules/media-queries';
import SubscribeForm from './modules/subscribe-form';
import VideoCopy from './modules/copy-blocks/video-copy';
import HeaderCopy from './modules/copy-blocks/header-copy';
import SubscribePopup from './modules/subscribe-popup';
import SocialCopy from './modules/copy-blocks/social-copy';
import InstagramCopy from './modules/copy-blocks/instagram-copy';
import FooterCopy from './modules/copy-blocks/footer-copy';
import ChordCopy from './modules/copy-blocks/chord-copy';
import '../css/style.css';

const mediaQueries = new MediaQueries();

mediaQueries.match('xs', message => console.log('Responsive ->', message));
mediaQueries.match('sm', message => console.log('Responsive ->', message));
mediaQueries.match('md', message => console.log('Responsive ->', message));
mediaQueries.match('lg', message => console.log('Responsive ->', message));


$(document).ready(() => {
  new SubscribeForm().init();
  new SubscribePopup().init();
  /* COPY BLOCKS */
  new VideoCopy().init();
  new HeaderCopy().init();
  new SocialCopy().init();
  new InstagramCopy().init();
  new FooterCopy().init();
  new ChordCopy().init();
});

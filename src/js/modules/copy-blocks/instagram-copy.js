import $ from 'jquery';
import MediaQueries from '../media-queries';

const mediaQueries = new MediaQueries();

class InstagramCopy {
  init() {
    this.instagramSectionMobile = $('#mobile-instagram');
    this.instagramSectionTablet = $('#tablet-instagram');
    this.instagramSectionDesktop = $('#desktop-instagram');
    this.instagramSectionMain = $('#instagram-section');

    this.handlers();
  }

  handlers() {
    mediaQueries.match('xs', () => {
      this.copyInstagramMobile();
    });

    mediaQueries.match('sm', () => {
      this.copyInstagramTablet();
    });

    mediaQueries.match('md', () => {
      this.copyInstagramDesktop();
    });

    mediaQueries.match('lg', () => {
      this.copyInstagramDesktop();
    });
  }

  copyInstagramMobile() {
    this.instagramSectionMobile.append(this.instagramSectionMain);
  }

  copyInstagramTablet() {
    this.instagramSectionTablet.append(this.instagramSectionMain);
  }

  copyInstagramDesktop() {
    this.instagramSectionDesktop.append(this.instagramSectionMain);
  }
}

export default InstagramCopy;

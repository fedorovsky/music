import $ from 'jquery';
import MediaQueries from '../mediaQueries';

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
    mediaQueries.change('xs', () => {
      this.copyInstagramMobile();
    });

    mediaQueries.change('sm', () => {
      this.copyInstagramTablet();
    });

    mediaQueries.change('md', () => {
      this.copyInstagramDesktop();
    });

    mediaQueries.change('lg', () => {
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

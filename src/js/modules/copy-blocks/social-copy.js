import $ from 'jquery';
import MediaQueries from '../media-queries';

const mediaQueries = new MediaQueries();

class SocialCopy {
  init() {
    this.socialSectionMobile = $('#mobile-social');
    this.socialSectionTablet = $('#tablet-social');
    this.socialSectionDesktop = $('#desktop-social');
    this.socialSectionMain = $('#social-section');

    this.handlers();
  }

  handlers() {
    mediaQueries.match('xs', () => {
      this.copySocialMobile();
    });

    mediaQueries.match('sm', () => {
      this.copySocialTablet();
    });

    mediaQueries.match('md', () => {
      this.copySocialDesktop();
    });

    mediaQueries.match('lg', () => {
      this.copySocialDesktop();
    });
  }

  copySocialMobile() {
    this.socialSectionMobile.append(this.socialSectionMain);
  }

  copySocialTablet() {
    this.socialSectionTablet.append(this.socialSectionMain);
  }

  copySocialDesktop() {
    this.socialSectionDesktop.append(this.socialSectionMain);
  }
}

export default SocialCopy;

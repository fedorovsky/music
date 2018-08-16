import $ from 'jquery';
import MediaQueries from '../mediaQueries';

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
    mediaQueries.change('xs', () => {
      this.copySocialMobile();
    });

    mediaQueries.change('sm', () => {
      this.copySocialTablet();
    });

    mediaQueries.change('md', () => {
      this.copySocialDesktop();
    });

    mediaQueries.change('lg', () => {
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

import $ from 'jquery';
import MediaQueries from '../media-queries';

const mediaQueries = new MediaQueries();

class HeaderCopy {
  init() {
    this.headerSectionMobile = $('#mobile-header');
    this.headerSectionTablet = $('#tablet-header');
    this.headerSectionDesktop = $('#desktop-header');
    this.headerSectionMain = $('#header-section');

    this.handlers();
  }

  handlers() {
    mediaQueries.match('xs', () => {
      this.copyHeaderMobile();
    });

    mediaQueries.match('sm', () => {
      this.copyHeaderTablet();
    });

    mediaQueries.match('md', () => {
      this.copyHeaderDesktop();
    });

    mediaQueries.match('lg', () => {
      this.copyHeaderDesktop();
    });
  }

  copyHeaderMobile() {
    this.headerSectionMobile.append(this.headerSectionMain);
  }

  copyHeaderTablet() {
    this.headerSectionTablet.append(this.headerSectionMain);
  }

  copyHeaderDesktop() {
    this.headerSectionDesktop.append(this.headerSectionMain);
  }
}

export default HeaderCopy;

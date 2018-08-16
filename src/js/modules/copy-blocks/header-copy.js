import $ from 'jquery';
import MediaQueries from '../mediaQueries';

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
    mediaQueries.change('xs', () => {
      this.copyHeaderMobile();
    });

    mediaQueries.change('sm', () => {
      this.copyHeaderTablet();
    });

    mediaQueries.change('md', () => {
      this.copyHeaderDesktop();
    });

    mediaQueries.change('lg', () => {
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

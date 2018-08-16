import $ from 'jquery';
import MediaQueries from '../mediaQueries';

const mediaQueries = new MediaQueries();

class FooterCopy {
  init() {
    this.footerSectionMobile = $('#mobile-footer');
    this.footerSectionTablet = $('#tablet-footer');
    this.footerSectionDesktop = $('#desktop-footer');
    this.footerSectionMain = $('#footer-section');

    this.handlers();
  }

  handlers() {
    mediaQueries.change('xs', () => {
      this.copyFooterMobile();
    });

    mediaQueries.change('sm', () => {
      this.copyFooterTablet();
    });

    mediaQueries.change('md', () => {
      this.copyFooterDesktop();
    });

    mediaQueries.change('lg', () => {
      this.copyFooterDesktop();
    });
  }

  copyFooterMobile() {
    this.footerSectionMobile.append(this.footerSectionMain);
  }

  copyFooterTablet() {
    this.footerSectionTablet.append(this.footerSectionMain);
  }

  copyFooterDesktop() {
    this.footerSectionDesktop.append(this.footerSectionMain);
  }
}

export default FooterCopy;

import $ from 'jquery';
import MediaQueries from '../media-queries';

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
    mediaQueries.match('xs', () => {
      this.copyFooterMobile();
    });

    mediaQueries.match('sm', () => {
      this.copyFooterTablet();
    });

    mediaQueries.match('md', () => {
      this.copyFooterDesktop();
    });

    mediaQueries.match('lg', () => {
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

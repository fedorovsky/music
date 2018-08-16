import $ from 'jquery';
import MediaQueries from '../mediaQueries';

const mediaQueries = new MediaQueries();

class SubscribeCopy {
  init() {
    this.subscribeSectionMobile = $('#mobile-subscribe');
    this.subscribeSectionTablet = $('#tablet-subscribe');
    this.subscribeSectionDesktop = $('#desktop-subscribe');
    this.subscribeSectionMain = $('#subscribe-section');

    this.handlers();
  }

  handlers() {
    mediaQueries.change('xs', () => {
      this.copySubscribeMobile();
    });

    mediaQueries.change('sm', () => {
      this.copySubscribeTablet();
    });

    mediaQueries.change('md', () => {
      this.copySubscribeDesktop();
    });

    mediaQueries.change('lg', () => {
      this.copySubscribeDesktop();
    });
  }

  copySubscribeMobile() {
    this.subscribeSectionMobile.append(this.subscribeSectionMain);
  }

  copySubscribeTablet() {
    this.subscribeSectionTablet.append(this.subscribeSectionMain);
  }

  copySubscribeDesktop() {
    this.subscribeSectionDesktop.append(this.subscribeSectionMain);
  }
}

export default SubscribeCopy;

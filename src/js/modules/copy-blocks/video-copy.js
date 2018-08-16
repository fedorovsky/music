import $ from 'jquery';
import MediaQueries from '../mediaQueries';

const mediaQueries = new MediaQueries();

class VideoCopy {
  init() {
    this.videoSectionMobile = $('#mobile-video');
    this.videoSectionTablet = $('#tablet-video');
    this.videoSectionDesktop = $('#desktop-video');
    this.videoSectionMain = $('#video-section');

    this.handlers();
  }

  handlers() {
    mediaQueries.change('xs', () => {
      this.copyVideoMobile();
    });

    mediaQueries.change('sm', () => {
      this.copyVideoTablet();
    });

    mediaQueries.change('md', () => {
      this.copyVideoDesktop();
    });

    mediaQueries.change('lg', () => {
      this.copyVideoDesktop();
    });
  }

  copyVideoMobile() {
    this.videoSectionMobile.append(this.videoSectionMain);
  }

  copyVideoTablet() {
    this.videoSectionTablet.append(this.videoSectionMain);
  }

  copyVideoDesktop() {
    this.videoSectionDesktop.append(this.videoSectionMain);
  }
}

export default VideoCopy;

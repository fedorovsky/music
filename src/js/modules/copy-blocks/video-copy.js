import $ from 'jquery';
import MediaQueries from '../media-queries';

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
    mediaQueries.match('xs', () => {
      this.copyVideoMobile();
    });

    mediaQueries.match('sm', () => {
      this.copyVideoTablet();
    });

    mediaQueries.match('md', () => {
      this.copyVideoDesktop();
    });

    mediaQueries.match('lg', () => {
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

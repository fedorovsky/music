import $ from 'jquery';
import MediaQueries from '../media-queries';

const mediaQueries = new MediaQueries();

class ChordCopy {
  init() {
    this.chordSectionMobile = $('#mobile-chord');
    this.chordSectionTablet = $('#tablet-chord');
    this.chordSectionDesktop = $('#desktop-chord');
    this.chordSectionMain = $('#chord-section');

    this.handlers();
  }

  handlers() {
    mediaQueries.match('xs', () => {
      this.copyChordMobile();
    });

    mediaQueries.match('sm', () => {
      this.copyChordTablet();
    });

    mediaQueries.match('md', () => {
      this.copyChordDesktop();
    });

    mediaQueries.match('lg', () => {
      this.copyChordDesktop();
    });
  }

  copyChordMobile() {
    this.chordSectionMobile.append(this.chordSectionMain);
  }

  copyChordTablet() {
    this.chordSectionTablet.append(this.chordSectionMain);
  }

  copyChordDesktop() {
    this.chordSectionDesktop.append(this.chordSectionMain);
  }
}

export default ChordCopy;

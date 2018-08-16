import $ from 'jquery';
import MediaQueries from '../mediaQueries';

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
    mediaQueries.change('xs', () => {
      this.copyChordMobile();
    });

    mediaQueries.change('sm', () => {
      this.copyChordTablet();
    });

    mediaQueries.change('md', () => {
      this.copyChordDesktop();
    });

    mediaQueries.change('lg', () => {
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

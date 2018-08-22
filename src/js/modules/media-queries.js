class MediaQueries {
  constructor() {
    this.init();
  }

  init() {
    this.xs = window.matchMedia('only screen and (max-width: 767px)');
    this.sm = window.matchMedia('only screen and (min-width: 768px) and (max-width: 1024px)');
    this.md = window.matchMedia('only screen and (min-width: 1025px) and (max-width: 1440px)');
    this.lg = window.matchMedia('only screen and (min-width: 1441px)');
  }

  match(name, callback) {
    switch (name) {
      case 'xs': this.enterXS(callback);
        break;
      case 'sm': this.enterSM(callback);
        break;
      case 'md': this.enterMD(callback);
        break;
      case 'lg': this.enterLG(callback);
        break;
      default: this.enterXS(callback);
    }
  }

  enterXS(callback) {
    this.xs.addListener(e => {
      if (e.matches) {
        callback('xs');
      }
    });
    if (this.xs.matches) {
      callback('xs');
    }
  }

  enterSM(callback) {
    this.sm.addListener(e => {
      if (e.matches) {
        callback('sm');
      }
    });
    if (this.sm.matches) {
      callback('sm');
    }
  }

  enterMD(callback) {
    this.md.addListener(e => {
      if (e.matches) {
        callback('md');
      }
    });
    if (this.md.matches) {
      callback('md');
    }
  }

  enterLG(callback) {
    this.lg.addListener(e => {
      if (e.matches) {
        callback('lg');
      }
    });
    if (this.lg.matches) {
      callback('lg');
    }
  }
}

export default MediaQueries;


import $ from 'jquery';

class SubscribePopup {
  init() {
    this.subscribeBox = $('#js-subscribe-box');
    this.btnOpenSubscribe = $('#subscribe-open');
    this.btnCloseSubscribe = $('#js-subscribe-close');
    this.phrases = $('.js-phrases');
    this.overlay = $('#js-overlay');
    this.handlers();
  }

  handlers() {
    this.btnOpenSubscribe.on('click', this.openPopUp.bind(this));
    this.btnCloseSubscribe.on('click', this.closePopUp.bind(this));

    $(window).on('click', event => {
      event.stopPropagation();
      const isOpenBth = $(event.target).is(this.btnOpenSubscribe);
      const isInside = $(event.target).closest(this.subscribeBox).length;
      if (!isOpenBth && !isInside) {
        console.log('isOutside');
        this.closePopUp();
      }
    });
  }

  openPopUp() {
    this.subscribeBox.addClass('--state-open');
    this.showOverlay();
    this.hideAllPhrases();
    this.showRandomPhrase();
  }

  closePopUp() {
    this.subscribeBox.removeClass('--state-open');
    this.hideOverlay();
  }

  hideAllPhrases() {
    this.phrases.each((i, element) => $(element).hide());
  }

  showOverlay() {
    this.overlay.addClass('--state-open');
  }

  hideOverlay() {
    this.overlay.removeClass('--state-open');
  }

  showRandomPhrase() {
    const countPhrases = this.phrases.length;
    const random = Math.floor(Math.random() * countPhrases);
    this.phrases
      .eq(random)
      .show();
  }
}

export default SubscribePopup;

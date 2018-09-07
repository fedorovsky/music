import $ from 'jquery';
import 'jquery-clickout';

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

    this.subscribeBox.add(this.btnOpenSubscribe).on('clickout', () => {
      this.closePopUp();
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

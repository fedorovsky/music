import $ from 'jquery';

class SubscribePopup {
  init() {
    this.subscribeBox = $('#subscribe-main');
    this.btnOpenSubscribe = $('#subscribe-open');
    this.btnCloseSubscribe = $('#subscribe-close');
    this.phrases = $('.js-phrases');
    this.handlers();
  }

  handlers() {
    this.btnOpenSubscribe.on('click', this.openPopUp.bind(this));
    this.btnCloseSubscribe.on('click', this.closePopUp.bind(this));
  }

  openPopUp() {
    this.subscribeBox.addClass('--state-open');
    this.hideAllPhrases();
    this.showRandomPhrase();
  }

  closePopUp() {
    this.subscribeBox.removeClass('--state-open');
  }

  hideAllPhrases() {
    this.phrases.each((i, element) => $(element).hide());
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

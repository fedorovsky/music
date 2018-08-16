import $ from 'jquery';

class SubscribePopUp {
  init() {
    this.subscribeBox = $('#subscribe-main');
    this.btnOpenSubscribe = $('#subscribe-open');
    this.btnCloseSubscribe = $('#subscribe-close');
    this.phrasesBox = $('#phrases');

    this.handlers();
  }

  handlers() {
    this.btnOpenSubscribe.on('click', this.openSubscribe.bind(this));
    this.btnCloseSubscribe.on('click', this.closeSubscribe.bind(this));
  }

  openSubscribe() {
    this.subscribeBox.addClass('--state-open');
    this.hideAllPhrases();
    this.showRandomPhrase();
  }

  closeSubscribe() {
    this.subscribeBox.removeClass('--state-open');
  }

  hideAllPhrases() {
    this.phrasesBox.children().each((i, element) => {
      $(element).hide();
    });
  }

  showRandomPhrase() {
    const countPhrases = this.phrasesBox.children().length;
    const random = Math.floor(Math.random() * countPhrases);
    this.phrasesBox
      .children()
      .eq(random)
      .show();
  }
}

export default SubscribePopUp;

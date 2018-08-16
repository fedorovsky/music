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
  }

  closeSubscribe() {
    this.subscribeBox.removeClass('--state-open');
    console.log('hello', this.phrasesBox.children().length);
  }
}

export default SubscribePopUp;

import $ from 'jquery';

class SubscribePopUp {
  init() {
    this.subscribeBox = $('.menu-box');
    this.btnOpenSubscribe = $('.btn-open');
    this.btnCloseSubscribe = $('.btn-close');
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
  }
}

export default SubscribePopUp;

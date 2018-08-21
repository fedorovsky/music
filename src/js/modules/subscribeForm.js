import $ from 'jquery';
import 'jquery-validation';

class SubscribeForm {
  init() {
    this.form = $('#subscribe-form');
    this.successMessage = $('#success-message');
    this.initValidator();
    this.handlers();
  }

  handlers() {
    $('#test').on('click', () => {
      this.form.validate().showErrors({
        email: 'Server error',
      });
    });

    $('#copy').on('click', () => {
      $('#one').append(this.form);
    });
  }

  initValidator() {
    const self = this;
    this.form.validate({
      errorClass: '--type-error',
      errorElement: 'span',
      errorPlacement(error, element) {
        error.addClass('b-form__error').insertAfter(element);
      },
      rules: {
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        email: {
          required: 'Обов’язкове поле',
          email: 'Помилка в адресі',
        },
      },
      submitHandler(form, e) {
        e.preventDefault();
        self.sendFrom(form);
      },
    });
  }

  sendFrom = form => {
    const self = this;
    const url = process.env.NODE_ENV === 'development' ?
      '//localhost:3000/api.php?action=subscribe' :
      '//theatomicguns.com/api.php?action=subscribe';
    $.ajax({
      type: 'POST',
      headers: {
        'Target-URL': 'http://theatomicguns.com',
      },
      contentType: 'application/json',
      url,
      data: JSON.stringify({
        email: $(form).find('#email').val(),
      }),
      success(data) {
        console.log(data, self);
        self.showSuccessLabel();
      },
    });
  };

  showSuccessLabel() {
    this.form.hide();
    this.successMessage.show();
  }
}

export default SubscribeForm;

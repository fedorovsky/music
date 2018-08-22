import $ from 'jquery';
import 'jquery-validation';

$.validator.addMethod('email', value => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value), 'Некоректний e-mail');

class SubscribeForm {
  init() {
    this.form = $('#subscribe-form');
    this.successMessage = $('#success-message');
    this.initValidator();
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
          email: 'Некоректний e-mail',
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
      success(response) {
        const data = JSON.parse(response);
        if (data.status === 1) {
          self.showSuccessMessage();
        } else {
          self.form.validate().showErrors({
            email: data.status_message,
          });
        }
      },
    });
  };

  showSuccessMessage() {
    this.form.hide();
    this.successMessage.show();
  }
}

export default SubscribeForm;

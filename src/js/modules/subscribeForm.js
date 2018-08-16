import $ from 'jquery';
import 'jquery-validation';

class SubscribeForm {
  init() {
    this.form = $('#subscribe-form');
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
          required: 'Error Required',
          email: 'Error Email',
        },
      },
      submitHandler(form, e) {
        e.preventDefault();
        self.sendFrom(form);
      },
    });
  }

  sendFrom(form) {
    console.log(form, this);
    $.ajax({
      type: 'POST',
      url: 'http://theatomicguns.com/api.php?action=subscribe',
      data: $(form).serialize(),
      success(data) {
        console.log(data);
      },
    });
  }
}

export default SubscribeForm;

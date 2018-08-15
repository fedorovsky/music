import $ from 'jquery';
import 'jquery-validation';

class Subscribe {
  init() {
    this.form = $('#subscribe');
    this.submit = $('#submit');
    this.initValidator();
    this.handlers();
  }

  handlers() {
    this.submit.on('click', () => {
      console.log('object');
    });

    $('#test').on('click', () => {
      console.log('object');
      this.form.validate().showErrors({
        email: 'Server error',
      });
    });
  }

  initValidator() {
    this.form.validate({
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
      submitHandler(form) {
        console.log('submit', form);
      },
    });
  }
}

export default Subscribe;

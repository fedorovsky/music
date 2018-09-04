import $ from 'jquery';

class YouTubeEmbed {
  init() {
    this.container = $('.js-youtube-container');
    this.handlers();
  }

  handlers() {
    $.each(this.container, (i, elem) => {
      const id = $(elem).data('embed');
      const iframe = this.createIframe(id);

      $(elem).on('click', () => $(elem).append(iframe));
    });
  }

  createIframe = id => $('<iframe/>', {
    attr: {
      'allowfullscreen': 'allowfullscreen',
      'src': `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`,
    },
  })
}

export default YouTubeEmbed;

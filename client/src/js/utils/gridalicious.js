function renderGrid () {
  $('.grida-images').gridalicious({
    width: 300,
    gutter: 40,
    selector: '.item',
    animate: true,
    animationOptions: {
      queue: false,
      speed: 400,
      duration: 400,
      effect: 'fadeInOnAppear'
    }
  });
  $('.image-item').css('display', 'inline-block');
  $(function () {
    $('.image-owner').css('opacity', 1);
  });
}

module.exports = renderGrid;

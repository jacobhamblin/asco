Asco.Views.GridView = Backbone.CompositeView.extend({
  template: JST['images/grid'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  events: {
    'click .grid-icon': 'toggleGridDescription',
    'mouseover .grid-description-arrow': 'toggleArrow'
  },

  toggleGridDescription: function () {
    if ( $('.grid-description').html() === '') {
      $('.grid-description').html("<p>A showcase of exceptional images from around the globe. Download VSCO Cam® to shoot, edit, and share photographs.</p><a href='http://vsco.co/vscocam'>vsco.co/vscocam</a>");
    } else {
      $('.grid-description').html('');
    }
  },

  renderGrid: function () {
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
  },

  toggleArrow: function () {
    $.fn.myToggle = function(duration) {
      return this.animate({opacity: "toggle"}, duration || 1000);
    };

    $('.grid-description-arrow').myToggle('slow');
  },

  render: function () {
    var content = this.template({
      images: this.collection
    });
    this.$el.html(content);
    this.renderGrid();

    return this;
  },

});

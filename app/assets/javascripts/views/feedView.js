Asco.Views.FeedView = Backbone.CompositeView.extend({
  template: JST['images/feed'],
  wide: window.innerWidth,
  tall: window.innerHeight,

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
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
  },

  render: function () {
    var content = this.template({
      images: this.collection,
      renderText: true
    });
    this.$el.html(content);
    this.renderGrid();
    return this;
  }
});

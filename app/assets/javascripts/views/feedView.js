Asco.Views.FeedView = Backbone.CompositeView.extend({
  template: JST['images/feed'],
  className: 'feed-images',
  wide: window.innerWidth,
  tall: window.innerHeight,

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  renderGrid: function () {
    $('.feed-images').gridalicious({
      width: 300,
      selector: '.image-item-a'
    });
    $('.feed-images').gridalicious({
      gutter: 20,
      animate: true,
      animationOptions: {
        queue: true,
        speed: 400,
        duration: 800,
        effect: 'fadeInOnAppear'
      }
    });
  },

  render: function () {
    var content = this.template({
      images: this.collection
    });
    this.$el.html(content);
    this.renderGrid();
    return this;
  }
});

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
        speed: 200,
        duration: 1200,
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

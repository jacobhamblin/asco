Asco.Views.GridView = Backbone.CompositeView.extend({
  template: JST['images/grid'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  renderGrid: function () {
    $('.grid-images').gridalicious({
      width: 300,
      selector: '.image-item-a'
    });
    $('.grid-images').gridalicious({
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
  },

  showImage: function () {

  }
});

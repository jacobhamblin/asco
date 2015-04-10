Asco.Views.ShowView = Backbone.CompositeView.extend({
  template: JST['images/show'],
  className: 'images',

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      images: this.collection,
      image: this.model
    });
    this.$el.html(content);
    return this;
  }
});

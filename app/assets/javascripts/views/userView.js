Asco.Views.UserView = Backbone.CompositeView.extend({
  template: JST['images/userGrid'],
  className: 'images',

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      images: this.collection
    });
    this.$el.html(content);
    return this;
  }
});

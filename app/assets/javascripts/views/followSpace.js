Asco.Views.FollowSpace = Backbone.CompositeView.extend ({
  template: JST['images/followSpace'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})

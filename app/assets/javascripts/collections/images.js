Asco.Collections.Images = Backbone.Collection.extend({
  url: 'api/images',
  model: Asco.Models.Image,

  getOrFetch: function (id) {
    var post = this.get(id);
    that = this;
    if (!post) {
      post = new PostApp.Models.Post({ id: id });
      post.fetch({
        success: function () {
          that.add(post);
        },
      });
    } else {
      post.fetch();
    }
    return post;
  }

});

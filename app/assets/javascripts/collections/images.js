Asco.Collections.Images = Backbone.Collection.extend({
  url: 'api/images',
  model: Asco.Models.Image,

  getOrFetch: function (id) {
    var image = this.get(id);
    images = this;
    if (!image) {
      image = new Asco.Models.Image({ id: id });
      image.fetch({
        success: function () {
          images.add(image);
        },
      });
    } else {
      image.fetch();
    }
    return image;
  },
});

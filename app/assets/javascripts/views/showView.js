Asco.Views.ShowView = Backbone.CompositeView.extend({
  template: JST['images/show'],
  className: 'images',

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "sync", this.render);
  },

  currentIndex: function () {
    return this.collection.indexOf(this.model);
  },

  nextIndex: function () {
    return this.currentIndex() + 1;
  },

  prevIndex: function () {
    if ( this.collection.models[this.currentIndex() - 1] || (this.currentIndex() - 1 === 0) ) {
      return this.currentIndex() - 1;
    }
    return undefined;
  },

  nextIndex: function () {
    if (this.collection.models[this.currentIndex() + 1]) {
      return this.currentIndex() + 1;
    }
    return undefined;
  },

  prevImage: function () {
    if (this.prevIndex() || this.prevIndex() === 0) {
      return this.collection.models[this.prevIndex()];
    }
    return undefined;
  },

  nextImage: function () {
    if (this.nextIndex()) {
      return this.collection.models[this.nextIndex()];
    }
    return undefined;
  },

  render: function () {
    var content = this.template({
      images: this.collection,
      image: this.model,
      prevImage: this.prevImage(),
      nextImage: this.nextImage()
    });
    this.$el.html(content);
    return this;
  }
});

Asco.Views.ShowView = Backbone.CompositeView.extend({
  template: JST['images/show'],
  className: 'image-show',

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "sync add", this.render);
  },

  currentIndex: function () {
    var view = this;
    var index = -1;
    this.collection.each(function (model, i) {
      if (model.id === view.model.id) { index = i; }
    });
    return index;
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

  remove: function () {
    $('.navbar.navbar-default').show();
    Backbone.CompositeView.prototype.remove.call(this);
  },

  render: function () {
    $('.navbar.navbar-default').hide();
    console.log(this.collection.length);
    if (this.collection.length > 0) {
      var content = this.template({
        images: this.collection,
        image: this.model,
        prevImage: this.prevImage(),
        nextImage: this.nextImage()
      });
    }
    this.$el.html(content);
    return this;
  }
});

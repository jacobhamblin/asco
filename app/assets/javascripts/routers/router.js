Asco.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.images = new Asco.Collections.Images();
    this.image = new Asco.Models.Image();
  },

  routes: {
    '': 'feed',
    'feed': 'feed',
    'grid': 'grid',
    'users/:id': 'userGrid',
    'images/:id': 'show'
    // 'search': 'search'
  },

  index: function () {

  },

  feed: function () {
    this.images.fetch({ data: { source: "feed" } });

    var feedView = new Asco.Views.FeedView({
      collection: this.images
    });

    this._swapView(feedView);
  },

  grid: function () {
    this.images.fetch({ data: { source: "grid" } });

    var gridView = new Asco.Views.GridView({
      collection: this.images
    });

    this._swapView(gridView);
  },

  userGrid: function (id) {
    this.images.fetch({ data: { source: id } });

    var userView = new Asco.Views.UserView({
      collection: this.images
    });

    this._swapView(userView);
  },

  show: function (id) {
    var image = this.images.getOrFetch(id);
    this.images.fetch({ data: { source: "img" + id } });

    var showView = new Asco.Views.ShowView({
      model: image,
      collection: this.images
    });

    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});

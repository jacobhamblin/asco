Asco.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.image = new Asco.Models.Image();
  },

  routes: {
    '': 'feed',
    'feed': 'feed',
    'grid': 'grid',
    'users/:id': 'userGrid',
    'images/:id': 'show',
    'search': 'search'
  },

  feed: function () {
    this.images = new Asco.Collections.Images();
    this.images.fetch({ data: { source: "feed" } });

    var feedView = new Asco.Views.FeedView({
      collection: this.images
    });

    this._swapView(feedView);
  },

  grid: function () {
    this.images = new Asco.Collections.Images();
    this.images.fetch({ data: { source: "grid" } });

    var gridView = new Asco.Views.GridView({
      collection: this.images
    });

    this._swapView(gridView);
  },

  userGrid: function (id) {
    this.images = new Asco.Collections.Images();
    this.images.fetch({ data: { source: id } });
    var user = new Asco.Models.User({id: id});
    user.fetch();

    var userView = new Asco.Views.UserView({
      collection: this.images,
      model: user
    });

    this._swapView(userView);
  },

  show: function (id) {
    this.images = new Asco.Collections.Images();
    var image = this.images.getOrFetch(id);
    this.images.fetch({ data: { source: "img" + id } });

    var showView = new Asco.Views.ShowView({
      model: image,
      collection: this.images
    });

    this._swapView(showView);
  },

  search: function () {
    this.images = new Asco.Collections.Images();
    var searchView = new Asco.Views.SearchView({
      collection: this.images
    });

    this._swapView(searchView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});

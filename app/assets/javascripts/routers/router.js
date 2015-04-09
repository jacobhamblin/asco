Asco.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.images = new Asco.Collections.Images();
  },

  routes: {
    '': 'index',
    'feed': 'feed',
    'grid': 'grid',
    'users/:id': 'userGrid',
    // 'search': 'search'
  },

  index: function () {

  },

  feed: function () {
    this.images.fetch({ data: { source: feed } });

    var feedView = new Asco.Views.FeedView({
      collection: this.images
    });

    this._swapView(feedView);
  },

  grid: function () {
    this.images.fetch({ data: { source: grid } });

    var gridView = new Asco.Views.GridView({
      collection: this.images
    });

    this._swapView(gridView);
  },

  userGrid: function (id) {
    this.images.fetch({ data: { source: id } });

    var myGridView = new Asco.Views.MyGridView({
      collection: this.images
    });

    this._swapView(myGridView);
  },

  show: function () {
    this.image.fetch();

    var showView = new Asco.Views.showView({
      model: this.image
    });

    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currenView = view;
    this.$rootEl.html(view.render().$el);
  }
});

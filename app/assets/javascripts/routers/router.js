Asco.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.images = Backbone.Collections.Images();
  },

  routes: {
    '': 'index',
    'feed': 'feed',
    'grid': 'grid',
    'myGrid': 'myGrid',
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

  myGrid: function () {
    this.images.fetch({ data: { source: myGrid } });

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

window.Asco = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Asco.Routers.Router({$rootEl: $('#content')});
    Backbone.history.start();
  }
};

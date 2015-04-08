window.Asco = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    new Asco.Routers.Router({$rootEl: $('#content')});
    Backbone.history.start();
  }
};

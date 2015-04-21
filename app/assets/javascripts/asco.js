window.Asco = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Globals: {userArrow: true, gridArrow: true, showArrow: true},
  initialize: function() {
    new Asco.Routers.Router({$rootEl: $('#content')});
    Backbone.history.start();
  },
};

window.Asco = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Globals: {userArrow: false, gridArrow: false, showArrow: false},
  initialize: function() {
    new Asco.Routers.Router({$rootEl: $('#content')});
    Backbone.history.start();
  },
};

Asco.Views.UserView = Backbone.CompositeView.extend({
  template: JST['images/userGrid'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.model, "change", this.changeButton);
  },

  changeButton: function () {
    if (this.model.get('follow') == 'true') {
      $('.nav-follow-toggle').html("<img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/icon_follow_circle.png' class='nav-follow-icon followed'>");
    } else {
      $('.nav-follow-toggle').html("<img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/icon_follow_plus.png' class='nav-follow-icon follow'>");
    }
  },

  events: {
    'click .nav-follow-icon': 'toggleFollow',
    'click .grid-view-a': 'toggleViewStyle'
  },

  toggleViewStyle: function () {

  },

  toggleFollow: function () {
    if (this.model.get('unfollowable') != 'true') {
      if ($('.follow-space').html()) {
        this.$('.follow-space').html('');
      } else {
        var followSpace = new Asco.Views.FollowSpace({ model: this.model });
        this.$('.follow-space').html(followSpace.render().$el);
      }
    }
  },

  renderGrid: function () {
    $('.grida-images').gridalicious({
      width: 300,
      gutter: 40,
      selector: '.item',
      animate: true,
      animationOptions: {
        queue: false,
        speed: 400,
        duration: 400,
        effect: 'fadeInOnAppear'
      }
    });
    $('.image-item').css('display', 'inline-block');
  },

  remove: function () {
    $('.navbar.navbar-default').show();
    Backbone.View.prototype.remove.call(this);
  },

  render: function () {
    $('.navbar.navbar-default').hide();
    if (this.collection.length > 0) {
      var content = this.template({
        images: this.collection,
        user: this.model
      });
      this.$el.html(content);
      this.renderGrid();
    }
    return this;
  }
});

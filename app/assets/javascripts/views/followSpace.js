Asco.Views.FollowSpace = Backbone.CompositeView.extend ({
  template: JST['images/followSpace'],
  classname: 'follow-button-space',

  inititalize: function () {
    this.listenTo(this.model, "change", this.render);
  },

  events: {
    'click .following-button': 'unfollow',
    'click .follow-button': 'follow'
  },

  unfollow: function (event) {
    event.preventDefault();
    $('.follow-btns').addClass('inter-follow-state'),
    $.ajax({
      url: 'api/follow/' + this.model.escape('id') + '/delete',
      data: {
        authenticity_token: Asco.AUTH_TOKEN,
        recipient_id: this.model.escape('id')
      },
      dataType: 'json',
      method: 'DELETE',
      success: function (response) {
        this.model.set('follow', 'false');
        this.render();
      }.bind(this),
      complete: function () {
        $('.follow-btns').removeClass('inter-follow-state');
      }
    });
  },

  follow: function (event) {
    event.preventDefault();
    $('.follow-btns').addClass('inter-follow-state'),
    $.ajax({
      url: 'api/follow/' + this.model.escape('id') + '/create',
      dataType: 'json',
      data: {
        authenticity_token: Asco.AUTH_TOKEN
      },
      method: 'POST',
      success: function () {
        this.model.set('follow', 'true');
        this.render();
      }.bind(this)
    });
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
});

Asco.Views.FollowSpace = Backbone.CompositeView.extend ({
  template: JST['images/followSpace'],
  classname: 'follow-button-space',

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
        authenticity_token: Asco.AUTH_TOKEN
      },
      dataType: 'json',
      method: 'DELETE',
      success: function () {
        $('.follow-btns').removeClass('inter-follow-state');
        $('.follow-button-space').html('');
        $('.follow-button-space').html(this.template({user: this.model}));
      }.bind(this)
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
        $('.follow-btns').removeClass('inter-follow-state');
        $('.follow-button-space').html('');
        $('.follow-button-space').html(this.template({user: this.model}));
      }.bind(this)
    });
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
});

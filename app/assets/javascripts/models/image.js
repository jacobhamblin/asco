Asco.Models.Image = Backbone.Model.extend ({
  urlRoot: '/api/images',

  owner: function () {
    if (!this._owner) {
      if (!this._owner) {
        this._owner = new Asco.Models.Owner();
      }
    }
    return this._owner;
  },

  parse: function (response) {
    if (response.owner) {
      this.owner().set(response.owner, { parse: true });
      delete response.owner;
    }

    return response;
  }
});

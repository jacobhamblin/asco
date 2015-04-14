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

  tags: function () {
    if (!this._tags) {
      if (!this._tags) {
        this._tags = new Asco.Collections.Tags();
      }
    }
    return this._tags;
  },

  parse: function (response) {
    if (response.owner) {
      this.owner().set(response.owner, { parse: true });
      delete response.owner;
    }
    if (response.tags) {
      this.tags().set(response.tags, { parse: true });
      delete response.tags;
    }

    return response;
  }
});

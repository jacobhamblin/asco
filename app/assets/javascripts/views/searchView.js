Asco.Views.SearchView = Backbone.CompositeView.extend ({
  template: JST['images/search'],
  classname: 'grida-images',

  events: {
    'keyup .search-field': 'handleQuery'
  },

  handleQuery: function(event) {
    event.preventDefault();
    var query = this.$('.search-field').val();
    var inputData = {"query": query};
    this.collection.fetch({ data: inputData });
    this.renderQueryGrid();
  },

  renderQueryGrid: function () {
    var searchViewGrid = new Asco.Views.SearchViewGrid({
      collection: this.collection
    });
    this.$('.search-grid').html(searchViewGrid.render().$el);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});

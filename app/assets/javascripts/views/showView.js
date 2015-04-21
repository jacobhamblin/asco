Asco.Views.ShowView = Backbone.CompositeView.extend({
  template: JST['images/show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "sync add", this.render);
  },

  events: {
    'click .nav.dropdown': 'openDropdownMenu',
    'click .nav.droppeddown.close': 'closeDropdownMenu',
    'click :not(.nav.droppeddown)': 'closeDropdownMenu',
    'click .image-tag': 'searchTag',
    'mouseover .hash-tags-arrow': 'toggleArrow',
  },

  moveArrow: function () {
    window.onload = function() {
      var pos = $('.image-tag').offset();
      $('.hash-tags-arrow').css({top: pos.top - 25, left: pos.left + 20});
      $('.hash-tags-arrow').show();
    };
  },

  toggleArrow: function () {
    $.fn.myToggle = function(duration) {
      return this.animate({opacity: "toggle"}, duration || 1000);
    };

    $('.hash-tags-arrow').myToggle('slow');
    Asco.Globals.showArrow = false;
  },

  openDropdownMenu: function () {
    var view = this;
    setTimeout(function () {
      view.openDropdown = true;
    }, 0);
    $('.nav.droppeddown').show();
  },

  closeDropdownMenu: function () {
    if (this.openDropdown) {
      $('.nav.droppeddown').hide();
      this.openDropdown = false;
    }
  },

  searchTag: function (event) {
    event.preventDefault();
    var id = this.model.owner().id;
    var tag = $(event.target).text().match(/#\w+/g)[0];
    var strippedTag = tag.substring(1, tag.length);
    window.location.href = "#users/" + id + "/" + strippedTag;
  },

  currentIndex: function () {
    var view = this;
    var index = -1;
    this.collection.each(function (model, i) {
      if (model.id === view.model.id) { index = i; }
    });
    return index;
  },

  nextIndex: function () {
    return this.currentIndex() + 1;
  },

  prevIndex: function () {
    if ( this.collection.models[this.currentIndex() - 1] || (this.currentIndex() - 1 === 0) ) {
      return this.currentIndex() - 1;
    }
    return undefined;
  },

  nextIndex: function () {
    if (this.collection.models[this.currentIndex() + 1]) {
      return this.currentIndex() + 1;
    }
    return undefined;
  },

  prevImage: function () {
    if (this.prevIndex() || this.prevIndex() === 0) {
      return this.collection.models[this.prevIndex()];
    }
    return undefined;
  },

  nextImage: function () {
    if (this.nextIndex()) {
      return this.collection.models[this.nextIndex()];
    }
    return undefined;
  },

  remove: function () {
    $('.navbar.navbar-default').show();
    Backbone.CompositeView.prototype.remove.call(this);
  },

  render: function () {
    $('.navbar.navbar-default').hide();
    if (this.collection.length > 0) {
      var content = this.template({
        images: this.collection,
        image: this.model,
        prevImage: this.prevImage(),
        nextImage: this.nextImage()
      });

    }
    this.$el.html(content);
    this.moveArrow();
    return this;
  }
});

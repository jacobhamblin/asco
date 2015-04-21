Asco.Views.UserView = Backbone.CompositeView.extend({
  template: JST['images/userGrid'],

  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.model, "change", this.changeButton);
    this.style = 'grid';
    this.options = options;
  },

  events: {
    'click .nav-follow-icon': 'toggleFollow',
    'click .grid-view-a': 'toggleViewStyle',
    'click .nav.dropdown': 'openDropdownMenu',
    'click .nav.droppeddown.close': 'closeDropdownMenu',
    'click :not(.nav.droppeddown)': 'closeDropdownMenu',
    'click .avatar-usergrid': 'toggleFollow',
    'click .remove-filter': 'removeFilter',
    'click .view-tags-a': 'addOverlay',
    'click .tag-index-overlay': 'hideOverlay',
    'click .tag-list a': 'filterImageListByTag'
  },

  addOverlay: function () {
    $('.tag-index-overlay').show();
    var width = 0;
    $('.tag-list').children('a').each(function(index, a) {
    width += $(a).outerWidth(true) + 1 * $('.tag-list').children('a').length;
    })
    $('.tag-list').width(width);
  },

  filterImageListByTag: function (event) {
    event.preventDefault();
    var tag = event.target.text.match(/\w+/g)[0];
    window.location.href = "#users/" + this.model.id + "/" + tag;
  },

  hideOverlay: function () {
    $('.tag-index-overlay').hide();
  },

  removeFilter: function () {
    window.location.href= "#users/" + this.model.id;
  },

  changeButton: function () {
    if (this.model.get('follow') == 'true') {
      $('.nav-follow-toggle').html("<img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/icon_follow_circle.png' class='nav-follow-icon followed'>");
    } else {
      $('.nav-follow-toggle').html("<img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/icon_follow_plus.png' class='nav-follow-icon follow'>");
    }
  },

  toggleViewStyle: function () {
    if (this.style === 'grid') {
      this.style = 'vert';
      $('.view-toggle').html("<a class='grid-view-a' href='javascript:void(0)'><div class='vert-box'></div></a>");
      $('.grida-images').fadeOut(100, function () {
        $('.vert-images').fadeIn(100);
      });
    } else if (this.style === 'vert') {
      this.style = 'grid';
      $('.view-toggle').html("<a class='grid-view-a' href='javascript:void(0)'><img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/grid_view_icon.svg' class='grid-view'></a>");
      $('.vert-images').fadeOut(100, function () {
        $('.grida-images').fadeIn(100);
      });
    }
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
    // var view = this;
    // var images = this.collection;
    // var newImages = new Asco.Collections.Images();
    // images.each(function (image) {
    //   var tags = [];
    //   image.tags().each( function (tag) {
    //     tags.push(tag.get('title'));
    //   });
    //   if (view.options.activeTag === '' || _.contains(tags, view.options.activeTag)) {
    //     newImages.add(image);
    //   }
    // });
    var allTags = [];
    this.collection.each(function (image) {
      image.tags().each( function (tag) {
        allTags.push(tag.escape('title'));
      });
    });

    $('.navbar.navbar-default').hide();
    if (this.collection.length > 0) {
      var content = this.template({
        images: this.collection,
        user: this.model,
        style: this.style,
        activeTag: this.options.activeTag,
        allTags: _.uniq(allTags)
      });
      this.$el.html(content);
      this.renderGrid();
      $('.vert-images').hide();
      $('.tag-index-overlay').hide();
      $('.galcolumn').each(function(index, col) {
        var count = 0;
        $(col).children('div').each(function(index, div) {
          if ($(div).css('display') == 'block') {
            count += 1;
          }
        });
        if (count === 0) {
          $(col).hide();
        }
      });

    }
    return this;
  }
});

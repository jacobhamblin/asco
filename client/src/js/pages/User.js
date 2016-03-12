import React, { Component } from 'react'
import { HamburgerMenu, GridImages, VerticalImages, ActiveTag, UserHeader, FollowButton, TagIndexOverlay, GridButton } from '../components'

function allTags(images) {
  let tags = {}

  images.map(image => {
    image.tags.map(tag => {
      tags[tag.title] = true
    })
  })

  return Object.keys(tags)
}

function hasTag(image, tagName) {
  let result = false

  image.tags.map(tag => {
    if (tag.title === tagName) result = true
  })

  return result
}

class User extends Component {
  constructor(props) {
    super(props)
    let activeTag = this.presentTag()

    this.removeActiveTag = this.removeActiveTag.bind(this)
    this.setActiveTag = this.setActiveTag.bind(this)
    this.showTags = this.showTags.bind(this)
    this.hideTags = this.hideTags.bind(this)
    this.toggleFollow = this.toggleFollow.bind(this)
    this.toggleVertical = this.toggleVertical.bind(this)
    this.state = {
      images: [],
      userID: props.routeParams.id,
      vertical: false,
      activeTag,
      showTags: false,
      user: null,
      allTags: null
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    $.getJSON('/api/images', {'source': this.state.userID}, (data) => {
      this.setState({
        images: data,
        allTags: allTags(data)
      })
    })
    $.getJSON('/api/users/' + this.state.userID, (data) => {
      this.setState({
        user: data
      })
    })
  }

  removeActiveTag() {
    this.setState({
      activeTag: false
    })
  }

  setActiveTag(e) {
    this.setState({
      activeTag: e.target.innerHTML,
      showTags: false
    })
  }

  showTags() {
    this.setState({
      showTags: true
    })
  }

  hideTags() {
    this.setState({
      showTags: false
    })
  }

  determineImages() {
    let { images, activeTag } = this.state

    if (activeTag) {
      let aggregate = []
      images.map(image => {
        if (hasTag(image, activeTag)) aggregate.push(image)
      })
      images = aggregate
    }

    return images
  }

  presentTag() {
    let split = window.location.hash.split('?')
    if (split.length === 1) {
      return false
    } else {
      return split[1]
    }
  }

  render() {
    let { images, activeTag, userID, user, showTags, allTags, vertical } = this.state
    let gridImages = null, header = null, activeTagEl = null, followButton = null, tagIndexOverlay = null
    if (images.length > 0) {
      if (this.state.vertical) {
        gridImages = <VerticalImages images={this.determineImages()}  size={'600'}/>
      } else {
        gridImages = <GridImages images={this.determineImages()} author={true} size={'262'}/>
      }

      header = <UserHeader user={images[0].owner}/>
    }
    if (activeTag) activeTagEl = <ActiveTag tag={activeTag} removeActiveTag={this.removeActiveTag}/>
    if (user && user.id !== window.CURRENT_USER_ID) {
      followButton = (
        <FollowButton user={user} toggleFollow={this.toggleFollow}/>
      )
    }
    if (showTags && allTags) tagIndexOverlay = (
      <TagIndexOverlay tags={allTags} setActiveTag={this.setActiveTag} hideTags={this.hideTags}/>
    )

    return (
      <div className="user">
        <HamburgerMenu/>
        <div className='nav-usergrid'>
          <div className='view-tags' onClick={this.showTags}>
            <a className='view-tags-a' href='javascript:void(0)'>
              <img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/icon_searchtag%402x.png' className='tag-button'/>
            </a>
          </div>
          {followButton}
          <GridButton toggleVertical={this.toggleVertical} vertical={vertical}/>

        </div>

        {header}
        {activeTagEl}
        {tagIndexOverlay}


        {gridImages}
      </div>
    )
  }

  toggleFollow() {
    const { user } = this.state
    const component = this
    const { follow, username, description, id } = user

    if (user.follow === "true") {
      $('.follow-btns').addClass('inter-follow-state'),
      $.ajax({
        url: 'api/follow/' + component.state.userID + '/delete',
        data: {
          authenticity_token: Asco.AUTH_TOKEN,
          recipient_id: component.state.userID
        },
        dataType: 'json',
        method: 'DELETE',
        success: function(result) {
          component.setState({
            user: {
              follow: "false",
              username,
              description,
              id
            }
          })
        },
        complete: function () {
          $('.follow-btns').removeClass('inter-follow-state');
        }
      });
    } else {
      $('.follow-btns').addClass('inter-follow-state'),
      $.ajax({
        url: 'api/follow/' + component.state.userID + '/create',
        dataType: 'json',
        data: {
          authenticity_token: Asco.AUTH_TOKEN
        },
        method: 'POST',
        success: function () {
          component.setState({
            user: {
              follow: "true",
              username,
              description,
              id
            }
          })
        },
        complete: function () {
          $('.follow-btns').removeClass('inter-follow-state');
        }
      });
    }
  }

  toggleVertical() {
    this.setState({
      vertical: !this.state.vertical
    })
  }
}

export default User


// <div class='nav-usergrid'>
//
//
//   <div class='view-toggle'>
//     <% if ( style === 'grid' ) { %>
//       <a class='grid-view-a' href="javascript:void(0)">
//         <img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/grid_view_icon.svg' class='grid-view'>
//       </a>
//     <% } else if ( style === 'vert' ){ %>
//       <a class='grid-view-a' href='javascript:void(0)'>
//         <div class='vert-box'></div>
//       </a>
//     <% } %>
//   </div>
// </div>
//
// <div class='drop-menu-usergrid'>
//   <img src='https://s3-us-west-1.amazonaws.com/asco-jkh/layout/icon_hamburger%402x.png'>
// </div>
//
//
// <% if (activeTag != '') { %>
//   <div class='selected-tag-space'>
//     <div class='selected-tag'>
//       <%= activeTag %>
//       <span class='remove-filter'>x</span>
//     </div>
//   </div>
// <% } %>
//
// <div class='tag-index-overlay'>
//   <h4>Filter By Tag</h4>
//   <div class='tag-list'>
//     <% _.each(allTags, function (tag) { %>
//       <a href='#users/' + user.id + '/' + 'tag.escape('title')'><%= tag %></a>
//     <% }) %>
//   </div>
// </div>

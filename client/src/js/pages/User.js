import React, { Component } from 'react'
import { HamburgerMenu, GridImages, VerticalImages, ActiveTag, UserHeader, FollowButton, TagIndexOverlay, GridButton } from '../components'
import { connect } from 'react-redux'
import { userFetchImages, setVerticalDisplay, setActiveTag, tagsDisplay, fetchUser, setFollow } from '../actions'

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
    this.removeActiveTag = this.removeActiveTag.bind(this)
    this.setActiveTag = this.setActiveTag.bind(this)
    this.showTags = this.showTags.bind(this)
    this.hideTags = this.hideTags.bind(this)
    this.toggleFollow = this.toggleFollow.bind(this)
    this.toggleVertical = this.toggleVertical.bind(this)
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    const { routeParams, dispatch } = this.props

    dispatch(userFetchImages('source', routeParams.id))
    dispatch(fetchUser(routeParams.id))
  }

  removeActiveTag() {
    const { dispatch } = this.props
    dispatch(setActiveTag(''))
  }

  setActiveTag(e) {
    const { dispatch } = this.props
    dispatch(setActiveTag(e.target.innerHTML))
  }

  showTags() {
    const { dispatch } = this.props
    dispatch(tagsDisplay(true))
  }

  hideTags() {
    const { dispatch } = this.props
    dispatch(tagsDisplay(false))
  }

  determineImages() {
    let { images, activeTag } = this.props

    if (activeTag) {
      let aggregate = []
      images.map(image => {
        if (hasTag(image, activeTag)) aggregate.push(image)
      })
      images = aggregate
    }

    return images
  }

  render() {
    let { images, activeTag, user, showTags, allTags, verticalDisplay } = this.props
    let userID = (user ? user.id : null)
    let gridImages = null, header = null, activeTagEl = null, followButton = null, tagIndexOverlay = null
    if (images.length > 0) {
      if (verticalDisplay) {
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
          <GridButton toggleVertical={this.toggleVertical} vertical={verticalDisplay}/>

        </div>

        {header}
        {activeTagEl}
        {tagIndexOverlay}


        {gridImages}
      </div>
    )
  }

  toggleFollow() {
    const { user, dispatch } = this.props
    let userID = (user ? user.id : null)
    const component = this
    const { follow, username, description, id } = user

    if (user.follow === "true") {
      $('.follow-btns').addClass('inter-follow-state'),
      $.ajax({
        url: 'api/follow/' + userID + '/delete',
        data: {
          authenticity_token: Asco.AUTH_TOKEN,
          recipient_id: userID
        },
        dataType: 'json',
        method: 'DELETE',
        success: function(result) {
          dispatch(setFollow('false'))
        },
        complete: function () {
          $('.follow-btns').removeClass('inter-follow-state');
        }
      });
    } else {
      $('.follow-btns').addClass('inter-follow-state'),
      $.ajax({
        url: 'api/follow/' + userID + '/create',
        dataType: 'json',
        data: {
          authenticity_token: Asco.AUTH_TOKEN
        },
        method: 'POST',
        success: function () {
          dispatch(setFollow('true'))
        },
        complete: function () {
          $('.follow-btns').removeClass('inter-follow-state');
        }
      });
    }
  }

  toggleVertical() {
    const { verticalDisplay, dispatch } = this.props

    dispatch(setVerticalDisplay(!verticalDisplay))
  }
}

function mapStateToProps(state) {
  const { grid, verticalDisplay, user } = state
  const { images, lastUpdated, isFetching } = grid
  const { activeTag, showTags, owner, allTags } = user
  return {
    images,
    lastUpdated,
    isFetching,
    activeTag,
    showTags,
    user: owner,
    allTags,
    verticalDisplay
  }
}

export default connect(mapStateToProps)(User)


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

# Phase 2: Viewing Blogs and Posts

## Rails
### Models

### Controllers
Api::ImagesController (create, destroy, index, show)
Api::GridController (create, destroy, show, update)

### Views
* grid/show.json.jbuilder
* user/show.json.jbuilder

## Backbone
### Models
* Grid (parses nested `images` association)
* Image

### Collections
* Grid
* Images

### Views
* GridForm
* GridShow (composite view, contains ImagesIndex subview)
* ImagesIndex (composite view, contains ImagesIndexItem subviews)
* ImagesIndexItem
* ImageShow

## Gems/Libraries

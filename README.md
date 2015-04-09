# asco

[Live](http://asco.hamblin.cc)

## Minimum Viable Product
asco is a clone of vsco built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create grid
- [ ] Create image show
- [x] Create feed
- [ ] Follow users
- [ ] View a feed of followed user
- [ ] Search for images by title
- [ ] Search for images by user

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, grid start (~1 day)
I will implement user authentication in Rails based on the practices learned at App Academy. By the end of this phase, users will be able to access the asco grid. The most important part of this phase will be pushing the app to Heroku and ensuring that everything works before moving on to phase 2.

[Details][phase-one]

### Phase 2: Viewing images, improve ui/ux (~2 days)
I will add API routes to serve image view data as JSON, then add Backbone models and collections that fetch data from those routes. By the end of this phase, users will be able to select images and view them and backbone will be
involved.

[Details][phase-two]

### Phase 3: Feed (~2 days)
I'll start by adding a `feed` route that uses the `current_user`'s `followed_users` association to serve a list of image posts ordered chronologically. On the Backbone side, I'll make a `FeedShow` view whose `posts` collection fetches from the new route.

[Details][phase-three]

### Phase 4: Searching for Images and Users (~2 days)
I'll need to add `search` routes to both the Users and Images controllers. On the Backbone side, there will be a `SearchResults` composite view has `UsersIndex` and `ImagesIndex` subviews. These views will use plain old `users` and `images` collections, but they will fetch from the new `search` routes.

[Details][phase-four]

### Phase 5: Refine ui/ux (~2 days)
I plan to exert a lot of effort into making it look like the original. I hope to gain valuable front-end knowledge through this exercise.

[Details][phase-five]


### Bonus Features (TBD)
- [ ] Drop down on show page for extra image info
- [ ] Journal MVC
- [ ] Pagination/infinite scroll
- [ ] asco, film, cam, keys navbar and mvc
- [x] User avatars
- [ ] Typeahead search bar
- [ ] Animate guest log-in
- [ ] Automated periodic seed process

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

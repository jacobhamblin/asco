# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({email: 'example@demo.com', password: 'password'})
User.create({email: 'hunter@gmail.com', password: 'hunter2'})
User.create({email: 'marco@polo.com', password: 'password'})

Image.create({owner_id: 1, url: 'http://i.vsco.co/550c6b9f035615340c8b456c?width=800&dpi=1&sw=1312', curated: true})
Image.create({owner_id: 1, url: 'http://i.vsco.co/550c76910b5615cb568b456c?width=730&dpi=1&sw=1327', curated: false})
Image.create({owner_id: 1, url: 'http://i.vsco.co/550b7bd02d56152d028b4589?width=800&dpi=1&sw=1327', curated: false})
Image.create({owner_id: 2, url: 'http://i.vsco.co/550c6a0be95515d90f8b4567?width=800&dpi=1&sw=1327', curated: true})
Image.create({owner_id: 2, url: 'http://i.vsco.co/55260d4ae255156a188b456e?width=729&dpi=1&sw=1327', curated: true})
Image.create({owner_id: 3, url: 'http://i.vsco.co/550c69e0e95515f00c8b4568?width=640&dpi=1&sw=1327', curated: false})
Image.create({owner_id: 3, url: 'http://i.vsco.co/550c6a19045615cd5e8b4579?width=800&dpi=1&sw=1327', curated: true})
Image.create({owner_id: 3, url: 'http://i.vsco.co/550c698803561549778b4575?width=800&dpi=1&sw=1327', curated: false})
Image.create({owner_id: 3, url: 'http://i.vsco.co/550b51962a56159e438b458d?width=579&dpi=1&sw=1327', curated: true})
Image.create({owner_id: 3, url: 'http://i.vsco.co/550b69b105561541428b4596?width=729&dpi=1&sw=1327', curated: false})

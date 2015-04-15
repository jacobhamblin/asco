# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

words = %W(contemporary fashionable popular stylish swank fly in in vogue latest modish now kawai up-to-the-minute voguish with-it à-la-mode A-OK adequate admissible all right average big common cool copacetic decent delightful fair hip hunky-dory kosher large okay passable peachy-keen pleasant pleasing respectable right-on standard sufficient swell tolerable trendy unexceptional unobjectionable welcome)

User.create!({email: 'kyarypamyu@pamyu.jp', password: 'password', avatar: 'http://image.vsco.co/1/5263b65016967110746/54187aa77367084a3a8b4c1f/300x300/ebcce9088d76123b73c2b93ff9df77dd/vsco_091614.jpg'})
User.create!({username: 'hunter', email: 'hunter@gmail.com', password: 'password', avatar: 'http://image.vsco.co/1/54fd1111dd8222556169/5529d729e355150e638b4570/300x300/a632dfd8ab46ad1c96c561bff21b6611/a59f3c17-218b-43ea-87a1-aa0a513c1ff4.jpg'})
User.create!({email: 'marco@polo.com', password: 'password', avatar: 'http://image.vsco.co/1/52da8b5a63812289753/545859047267083f788b4584/210x210/304ebc82574dbd7af585bcfb7dad551a/vsco_110414.jpg'})
User.create!({username: 'eun kim', email: 'eun@kim.io', password: 'password', avatar: 'http://image.vsco.co/1/5217ab36ad5bf70382/545ee02c736708b0258b45e5/300x300/e087a62dca81c99f3b9c9476f39d1bc2/vsco_110814.jpg'})

Following.create!({issuer_id: 1, recipient_id: 2})
Following.create!({issuer_id: 1, recipient_id: 3})
Following.create!({issuer_id: 2, recipient_id: 3})
Following.create!({issuer_id: 2, recipient_id: 4})
Following.create!({issuer_id: 3, recipient_id: 4})
Following.create!({issuer_id: 3, recipient_id: 1})
Following.create!({issuer_id: 4, recipient_id: 1})
Following.create!({issuer_id: 4, recipient_id: 2})

words.length.times { |n| Tag.create!({title: words[n] })}

3.times do
  40.times do |n|
    if ((n + rand(words.length)) % 2 == 0 )
      Tagging.create!({image_id: n, tag_id: rand(words.length + 1) })
    end
  end
end

Image.create!({owner_id: 1, url: 'http://i.vsco.co/550c6b9f035615340c8b456c?width=800&dpi=1&sw=1312', curated: true, description: 'Lorem ipsum dolor sit amet, unum clita usu at, ea minim convenire sed.'})
Image.create!({owner_id: 1, url: 'http://i.vsco.co/550c76910b5615cb568b456c?width=730&dpi=1&sw=1327', curated: false, description: 'Homero persius diceret eum no, homero pertinax usu ne, an graece petentium pro.'})
Image.create!({owner_id: 1, url: 'http://i.vsco.co/550b7bd02d56152d028b4589?width=800&dpi=1&sw=1327', curated: false, description: 'Usu et ancillae intellegam, ex ferri bonorum mandamus mel, amet velit integre no mea.'})
Image.create!({owner_id: 2, url: 'http://i.vsco.co/550c6a0be95515d90f8b4567?width=800&dpi=1&sw=1327', curated: true})
Image.create!({owner_id: 2, url: 'http://i.vsco.co/55260d4ae255156a188b456e?width=729&dpi=1&sw=1327', curated: true, description: 'Lorem ipsum dolor sit amet, unum clita usu at, ea minim convenire sed.'})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/550c69e0e95515f00c8b4568?width=640&dpi=1&sw=1327', curated: false, description: 'Homero persius diceret eum no, homero pertinax usu ne, an graece petentium pro.'})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/550c6a19045615cd5e8b4579?width=800&dpi=1&sw=1327', curated: true, description: 'Usu et ancillae intellegam, ex ferri bonorum mandamus mel, amet velit integre no mea.'})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/550c698803561549778b4575?width=800&dpi=1&sw=1327', curated: false})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/550b51962a56159e438b458d?width=579&dpi=1&sw=1327', curated: true, description: 'Lorem ipsum dolor sit amet, unum clita usu at, ea minim convenire sed.'})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/550b69b105561541428b4596?width=729&dpi=1&sw=1327', curated: false, description: 'Homero persius diceret eum no, homero pertinax usu ne, an graece petentium pro.'})
Image.create!({owner_id: 1, url: 'http://image.vsco.co/1/55094b1004f072730330/5517ef662b5615a20a8b456e/800x800/vsco_032915.jpg', curated: false,  description: 'Usu et ancillae intellegam, ex ferri bonorum mandamus mel, amet velit integre no mea.'})
Image.create!({owner_id: 2, url: 'http://i.vsco.co/550c6ffbe3551532768b4576?width=800&dpi=1&sw=807', curated: true})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/550c8a1c255615be408b4573?width=729&dpi=1&sw=807', curated: true, description: 'Lorem ipsum dolor sit amet, unum clita usu at, ea minim convenire sed.'})
Image.create!({owner_id: 1, url: 'http://i.vsco.co/550c74360c5615724f8b4567?width=729&dpi=1&sw=807', curated: false, description: 'Usu et ancillae intellegam, ex ferri bonorum mandamus mel, amet velit integre no mea.'})
Image.create!({owner_id: 2, url: 'http://i.vsco.co/550c52afe7551537608b4568?width=713&dpi=1&sw=807', curated: true, description: 'Homero persius diceret eum no, homero pertinax usu ne, an graece petentium pro.'})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/550c420ae355155f128b4567?width=800&dpi=1&sw=807', curated: false})
Image.create!({owner_id: 1, url: 'http://i.vsco.co/550caf28285615882d8b4574?width=800&dpi=1&sw=807', curated: true, description: 'Lorem ipsum dolor sit amet, unum clita usu at, ea minim convenire sed.'})
Image.create!({owner_id: 2, url: 'http://i.vsco.co/551ff0d8e555151f088b456e?width=800&dpi=1&sw=807', curated: false, description: 'Usu et ancillae intellegam, ex ferri bonorum mandamus mel, amet velit integre no mea.'})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/551ff004275615f7558b456f?width=800&dpi=1&sw=822', curated: false, description: 'Homero persius diceret eum no, homero pertinax usu ne, an graece petentium pro.'})
Image.create!({owner_id: 1, url: 'http://i.vsco.co/550c195e2d5615692e8b456f?width=729&dpi=1&sw=807', curated: false})
Image.create!({owner_id: 2, url: 'http://i.vsco.co/550c1ab8e755150e188b4581?width=800&dpi=1&sw=807', curated: true, description: 'Lorem ipsum dolor sit amet, unum clita usu at, ea minim convenire sed.'})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/550c1938035615816f8b456a?width=729&dpi=1&sw=807', curated: false, description: 'Usu et ancillae intellegam, ex ferri bonorum mandamus mel, amet velit integre no mea.'})
Image.create!({owner_id: 1, url: 'http://i.vsco.co/550c27b7275615b07b8b456c?width=697&dpi=1&sw=807', curated: true, description: 'Homero persius diceret eum no, homero pertinax usu ne, an graece petentium pro.'})
Image.create!({owner_id: 2, url: 'http://i.vsco.co/550c32c0e55515ee558b4574?width=743&dpi=1&sw=807', curated: false})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/550c464a475615d6758b4569?width=800&dpi=1&sw=807', curated: true, description: 'Lorem ipsum dolor sit amet, unum clita usu at, ea minim convenire sed.'})
Image.create!({owner_id: 1, url: 'http://i.vsco.co/550c463c2b56159a3b8b4568?width=800&dpi=1&sw=807', curated: false, description: 'Usu et ancillae intellegam, ex ferri bonorum mandamus mel, amet velit integre no mea.'})
Image.create!({owner_id: 4, url: 'http://i.vsco.co/550c462747561503658b456c?width=800&dpi=1&sw=807', curated: true, description: 'Homero persius diceret eum no, homero pertinax usu ne, an graece petentium pro.'})
Image.create!({owner_id: 4, url: 'http://i.vsco.co/550c4c0b2556152d098b4568?width=800&dpi=1&sw=807', curated: false, description: 'Usu et ancillae intellegam, ex ferri bonorum mandamus mel, amet velit integre no mea.'})
Image.create!({owner_id: 4, url: 'http://i.vsco.co/550c5bda0a5615246f8b456b?width=800&dpi=1&sw=807', curated: true})
Image.create!({owner_id: 4, url: 'http://i.vsco.co/550c5d6a0b5615e4678b456b?width=697&dpi=1&sw=807', curated: false})
Image.create!({owner_id: 4, url: 'http://i.vsco.co/550bc2cf29561512778b4583?width=800&dpi=1&sw=807', curated: true, description: 'Usu et ancillae intellegam, ex ferri bonorum mandamus mel, amet velit integre no mea.'})
Image.create!({owner_id: 4, url: 'http://i.vsco.co/550c3b77045615471c8b4567?width=800&dpi=1&sw=807', curated: false, description: 'Homero persius diceret eum no, homero pertinax usu ne, an graece petentium pro.'})
Image.create!({owner_id: 4, url: 'http://i.vsco.co/550c872e095615f50a8b4569?width=697&dpi=1&sw=807', curated: true})
Image.create!({owner_id: 1, url: 'http://i.vsco.co/52d719e471670890390000ec?width=800&dpi=1&sw=1856', curated: true})
Image.create!({owner_id: 2, url: 'http://i.vsco.co/5338221e716708eb4b000401?width=749&dpi=1&sw=1871', curated: false})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/5338197f7267084f610001b4?width=800&dpi=1&sw=1856', curated: false})
Image.create!({owner_id: 4, url: 'http://i.vsco.co/54214469756708543a8b49a2?width=800&dpi=1&sw=1856', curated: false})
Image.create!({owner_id: 1, url: 'http://i.vsco.co/52fb0ef7726708ad7300018f?width=749&dpi=1&sw=1856', curated: true})
Image.create!({owner_id: 2, url: 'http://i.vsco.co/538968b073670842138b49dc?width=800&dpi=1&sw=1871', curated: false})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/528cc5855a6808bc5600008f?width=800&dpi=1&sw=1871', curated: false})
Image.create!({owner_id: 4, url: 'http://i.vsco.co/552d8873e755154c3e8b456b?width=800&dpi=1&sw=1871', curated: true})
Image.create!({owner_id: 1, url: 'http://i.vsco.co/552c2dee245615c67f8b4587?width=749&dpi=1&sw=1871', curated: false})
Image.create!({owner_id: 2, url: 'http://i.vsco.co/552cb191255615b9368b457a?width=800&dpi=1&sw=1871', curated: false})
Image.create!({owner_id: 3, url: 'http://i.vsco.co/55285bf0045615cd688b4571?width=800&dpi=1&sw=1856', curated: true})

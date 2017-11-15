# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FISHES = [
  {
    name: 'Pacific Halibut',
    image: 'https://i.istockimg.com/file_thumbview_approve/36248396/5/stock-photo-36248396-blackened-cajun-sea-bass.jpg',
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    price: 1724,
    status: 'available'
  },

  {
    name: 'Lobster',
    image: 'https://i.istockimg.com/file_thumbview_approve/32135274/5/stock-photo-32135274-cooked-lobster.jpg',
    desc: 'These tender, mouth-watering beauties are a fantastic hit at any dinner party.',
    price: 3200,
    status: 'available'
  },

  {
    name: 'Sea Scallops',
    image: 'https://i.istockimg.com/file_thumbview_approve/58624176/5/stock-photo-58624176-scallops-on-black-stone-plate.jpg',
    desc: 'Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound',
    price: 1684,
    status: 'unavailable'
  },

  {
    name: 'Mahi Mahi',
    image: 'https://i.istockimg.com/file_thumbview_approve/12556651/5/stock-photo-12556651-mahimahi.jpg',
    desc: 'Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ',
    price: 1129,
    status: 'available'
  },

  {
    name: 'King Crab',
    image: 'https://i.istockimg.com/file_thumbview_approve/18294110/5/stock-photo-18294110-king-crab-legs.jpg',
    desc: 'Crack these open and enjoy them plain or with one of our cocktail sauces',
    price: 4234,
    status: 'available'
  },

  {
    name: 'Atlantic Salmon',
    image: 'https://i.istockimg.com/file_thumbview_approve/56241842/5/stock-photo-56241842-salmon-fish.jpg',
    desc: 'This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!',
    price: 1453,
    status: 'available'
  },

  {
    name: 'Oysters',
    image: 'https://i.istockimg.com/file_thumbview_approve/58626682/5/stock-photo-58626682-fresh-oysters-on-a-black-stone-plate-top-view.jpg',
    desc: 'A soft plump oyster with a sweet salty flavor and a clean finish.',
    price: 2543,
    status: 'available'
  },

  {
    name: 'Mussels',
    image: 'https://i.istockimg.com/file_thumbview_approve/40450406/5/stock-photo-40450406-steamed-mussels.jpg',
    desc: 'The best mussels from the Pacific Northwest with a full-flavored and complex taste.',
    price: 425,
    status: 'available'
  },

  {
    name: 'Jumbo Prawns',
    image: 'https://i.istockimg.com/file_thumbview_approve/67121439/5/stock-photo-67121439-fresh-tiger-shrimp-on-ice-on-a-black-stone-table.jpg',
    desc: 'With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.',
    price: 2250,
    status: 'available'
  }
]

FISHES.each do |fish_attributes|
  next if Fish.exists?(name: fish_attributes[:name])
  Fish.create!(fish_attributes)
end

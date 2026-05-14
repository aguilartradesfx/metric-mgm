const CLOUDINARY_BASE = 'https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto'

export const cities = [
  {
    slug:       'san-antonio',
    name:       'San Antonio',
    state:      'Texas',
    stateShort: 'TX',
    tagline:    'Where history, culture, and charm meet.',
    cover:      `${CLOUDINARY_BASE}/v1778465841/1111-min_edited_yavhk1.jpg`,
    photo:      `${CLOUDINARY_BASE}/v1778466055/sanantonio-dest-skyline-111506758-min_mna4gv.jpg`,
    description: `San Antonio enchants visitors with its iconic River Walk, historic Alamo, and vibrant cultural festivals. As one of the fastest-growing cities in Texas, it offers a unique blend of heritage and modernity. With warm weather year-round, the city provides endless opportunities for outdoor activities, from exploring the Texas Hill Country to enjoying authentic Tex-Mex cuisine at local markets. San Antonio's affordable housing and family-friendly atmosphere make it a perfect place to settle.`,
  },
  {
    slug:       'dallas',
    name:       'Dallas',
    state:      'Texas',
    stateShort: 'TX',
    tagline:    'A modern metropolis with deep Texas roots.',
    cover:      `${CLOUDINARY_BASE}/v1778466021/Dallas_u6qoid.jpg`,
    photo:      `${CLOUDINARY_BASE}/v1778466059/shutterstock_368414801-scaled-min_vqriyq.jpg`,
    description: `The heart of North Texas, Dallas combines modern sophistication with classic Texan charm. With its vibrant arts district, world-class dining, and rich history, Dallas offers a unique blend of culture and innovation. Whether exploring the Dallas Arboretum, catching a game at AT&T Stadium, or enjoying the skyline from the Reunion Tower, there's something for everyone. Known for its friendly hospitality and thriving economy, Dallas is a hub for business and leisure. Its diverse neighborhoods, affordable cost of living, and renowned shopping make it a prime destination to visit and call home.`,
  },
  {
    slug:       'houston',
    name:       'Houston',
    state:      'Texas',
    stateShort: 'TX',
    tagline:    'The city of opportunity and endless diversity.',
    cover:      `${CLOUDINARY_BASE}/v1778466033/Houston_TX-min_edited_gojcvh.jpg`,
    photo:      `${CLOUDINARY_BASE}/v1778465843/20240913075011239_lfjqyg.jpg`,
    description: `A global city full of opportunity and culture. Houston is known for its space exploration, diverse culinary scene, and thriving arts community. The Museum District, NASA's Johnson Space Center, and the city's vibrant nightlife are just a few highlights. As one of the most diverse cities in the U.S., Houston's neighborhoods offer a mix of affordability and luxury. With its booming economy and welcoming community, Houston is an excellent place to live, work, and explore.`,
  },
  {
    slug:       'austin',
    name:       'Austin',
    state:      'Texas',
    stateShort: 'TX',
    tagline:    'Creativity and innovation in the heart of Texas.',
    cover:      `${CLOUDINARY_BASE}/v1778465842/Austin-min_edited_cgkbdn.jpg`,
    photo:      `${CLOUDINARY_BASE}/v1778465911/Austin_bggyxn.jpg`,
    description: `The Live Music Capital of the World. Austin is the perfect mix of creativity, innovation, and natural beauty. Known for its music festivals like SXSW and Austin City Limits, this city thrives on artistic energy. Enjoy paddleboarding on Lady Bird Lake, exploring the Barton Creek Greenbelt, or savoring the city's famous barbecue and Tex-Mex. Austin's tech-driven economy, paired with its laid-back vibe, makes it an ideal place for entrepreneurs and free spirits alike.`,
  },
  {
    slug:       'phoenix',
    name:       'Phoenix',
    state:      'Arizona',
    stateShort: 'AZ',
    tagline:    'A sun-soaked oasis of adventure and growth.',
    cover:      `${CLOUDINARY_BASE}/v1778466051/Phoenix_AZ_dosc3n.jpg`,
    photo:      `${CLOUDINARY_BASE}/v1778466052/phoenix-arizona_cojtro.jpg`,
    description: `The Valley of the Sun, where urban living meets desert serenity. Phoenix offers endless sunshine, stunning desert landscapes, and a thriving metropolitan lifestyle. Hike Camelback Mountain, visit the Desert Botanical Garden, or enjoy world-class golf courses year-round. With a low cost of living and a growing job market, Phoenix is one of the most livable cities in the U.S. Its vibrant arts scene and proximity to iconic destinations like Sedona and the Grand Canyon make it a haven for adventurers and city lovers alike.`,
  },
  {
    slug:       'daytona',
    name:       'Daytona',
    state:      'Florida',
    stateShort: 'FL',
    tagline:    'Where the beach meets the thrill of speed.',
    cover:      `${CLOUDINARY_BASE}/v1778466024/Daytona_FL_edited_cxnzdr.jpg`,
    photo:      `${CLOUDINARY_BASE}/v1778466043/pexels-mikhail-nilov-9400906-1-scaled_hsoibp.webp`,
    description: `The ultimate destination for sun, surf, and speed. Daytona Beach is famous for its 23 miles of sandy shores and as the birthplace of NASCAR. Whether lounging by the ocean, exploring the Daytona International Speedway, or enjoying the annual Bike Week, the city is full of energy and excitement. With a low cost of living, a family-friendly environment, and year-round activities, Daytona Beach offers a unique coastal lifestyle. Its laid-back charm and access to the Atlantic make it an attractive place to live or visit.`,
  },
] as const

export type City = (typeof cities)[number]

export function getCityNavigation(slug: string) {
  const index = cities.findIndex((c) => c.slug === slug)
  const prev = cities[(index - 1 + cities.length) % cities.length]
  const next = cities[(index + 1) % cities.length]
  return { prev, next }
}

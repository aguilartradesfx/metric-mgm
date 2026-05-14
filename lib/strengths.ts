import { assets } from './assets'

export const strengths = [
  {
    slug:  'collaborative-partnership',
    title: 'Collaborative Partnership',
    shortDescription: 'We establish strong client relationships built on teamwork and mutual understanding, aligning closely with you to define and reach property objectives.',
    heroImage: assets.strengths.collaborative,
    bodyParagraphs: [
      'At the core of every successful property investment is a strong, transparent, and collaborative partnership. We go beyond standard management services to become your strategic ally, ensuring that your objectives align seamlessly with our expertise. By fostering open communication and active collaboration, we work closely with you to set clear goals, develop actionable strategies, and adapt to market shifts.',
      'We believe that teamwork and mutual understanding are essential for long-term success. Whether you\'re expanding your real estate portfolio, optimizing rental performance, or improving operational efficiency, our approach is designed to integrate seamlessly with your vision. Through detailed reporting, regular strategy meetings, and tailored recommendations, we provide the insight and support necessary to drive growth.',
    ],
    keyBenefits: [
      'Transparent and data-driven decision-making',
      'Personalized strategy alignment with your goals',
      'Ongoing communication and strategic support',
      'A results-oriented partnership focused on long-term growth',
    ],
  },
  {
    slug:  'personalized-management',
    title: 'Personalized Management',
    shortDescription: 'Our properties receive hands-on attention, with Managers regularly visiting sites and managing smaller portfolios to ensure a more tailored service experience.',
    heroImage: assets.strengths.personalized,
    bodyParagraphs: [
      'Managing a property is more than just handling logistics — it requires a strategic and personalized approach to ensure long-term success. Our property managers are dedicated to delivering hands-on attention, visiting sites regularly to oversee operations, and maintaining a direct line of communication with tenants and owners. By managing smaller portfolios, we ensure each property receives the level of care and focus it deserves.',
      'Our proactive approach means that we don\'t just react to issues — we anticipate them before they become problems. Whether it\'s ensuring compliance with regulations, optimizing maintenance schedules, or identifying cost-saving opportunities, we tailor our strategies to align with your investment goals. With our expertise, you can rest assured that your property is in capable hands.',
    ],
    keyBenefits: [
      'Regular site visits for hands-on oversight',
      'Personalized property management strategies',
      'Proactive issue resolution and cost optimization',
      'Higher tenant retention and satisfaction',
    ],
  },
  {
    slug:  'proven-performance',
    title: 'Proven Performance',
    shortDescription: 'With advanced reporting and proprietary business intelligence tools, we provide clear financial insights and demonstrate consistent property performance.',
    heroImage: assets.strengths.provenPerformance,
    bodyParagraphs: [
      'Results speak louder than words. Our approach to property management is backed by advanced reporting tools and proprietary business intelligence systems that provide real-time insights into property performance. By utilizing cutting-edge analytics, we deliver clear financial insights, track occupancy trends, and identify revenue opportunities that drive consistent growth.',
      'We believe that data transparency is crucial for making informed investment decisions. Our reports break down key metrics such as rental income, maintenance costs, market trends, and long-term projections. This allows you to not only understand the current state of your property but also plan for future profitability. With a strong focus on operational efficiency, we implement best practices that lead to stable, high-performing real estate investments.',
    ],
    keyBenefits: [
      'Real-time performance tracking with actionable insights',
      'Advanced reporting for financial transparency',
      'Business intelligence tools for strategic decision-making',
      'Increased revenue optimization through data-driven strategies',
    ],
  },
  {
    slug:  'strategic-marketing',
    title: 'Strategic Marketing',
    shortDescription: 'Our marketing solutions are designed to align with your business and financial goals, utilizing targeted strategies that drive occupancy rates, optimize revenue, and elevate property value.',
    heroImage: assets.strengths.strategicMarketing,
    bodyParagraphs: [
      'In today\'s competitive real estate market, effective marketing is key to maximizing property value and driving occupancy rates. Our marketing solutions are tailored to align with your business and financial goals, leveraging cutting-edge digital strategies, targeted advertising, and data-driven insights. We ensure that your property stands out in the marketplace, attracting high-quality tenants and increasing long-term profitability.',
      'We take a comprehensive approach to property marketing, combining digital platforms, social media engagement, SEO-driven content, and paid advertising to optimize exposure. By analyzing market trends, tenant demographics, and competitive landscapes, we craft custom marketing campaigns that enhance property desirability. From professional photography and virtual tours to high-impact online listings, we make sure your property gets the attention it deserves.',
    ],
    keyBenefits: [
      'Data-driven marketing strategies to maximize visibility',
      'Targeted advertising for higher occupancy and tenant quality',
      'Social media and digital campaigns for increased engagement',
      'Market analysis to position your property competitively',
    ],
  },
] as const

export type Strength = (typeof strengths)[number]

export function getStrengthNavigation(slug: string) {
  const index = strengths.findIndex((s) => s.slug === slug)
  if (index === -1) return null
  const prev = strengths[(index - 1 + strengths.length) % strengths.length]
  const next = strengths[(index + 1) % strengths.length]
  return { prev, next }
}

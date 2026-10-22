export const sectors = [
  {
    slug:        'conventional-housing',
    label:       'Conventional Housing',
    description: 'Conventional apartment management that maximizes property value: effective marketing, proactive maintenance and personalized resident services across TX, AZ & FL.',
  },
  {
    slug:        'senior-living',
    label:       'Senior Living',
    description: 'Senior living management built on comfort, care and safety: well-maintained facilities, engaging social activities and responsive support for residents and families.',
  },
  {
    slug:        'student-housing',
    label:       'Student Housing',
    description: 'Student housing management covering daily operations, maintenance, security and resident support, with streamlined leasing and engaging community events.',
  },
] as const

export type Sector = (typeof sectors)[number]

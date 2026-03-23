export type Program = {
  id: string
  name: string
  desc: string
  price: number
  priceDisplay: string
  oldPrice?: string
  priceId: string
  includes: string
  badge?: string
  badgeOutline?: boolean
  featured?: boolean
  icon: string
}

export const programs: Program[] = [
  {
    id: 'full-year',
    name: 'Full-Year Baseball Performance System',
    desc: 'The complete 365-day roadmap to transforming your game. Hitting mechanics, strength programming, and periodized training for athletes who want to compete at the next level.',
    price: 97,
    priceDisplay: '$97',
    priceId: 'price_1TCtCrE0ePNbtD9w8s1Bsovz',
    includes: 'PDF · Video Library · 25% Marucci/Victus',
    badge: 'Best Value',
    featured: true,
    icon: 'layers',
  },
  {
    id: 'in-season',
    name: 'In-Season Training Program',
    desc: 'Stay explosive and consistent when it counts most. Maintain power and mechanics through a full competitive season without burning out.',
    price: 49.99,
    priceDisplay: '$49.99',
    priceId: 'price_1TD5AlE0ePNbtD9wGTBSV6Cw',
    includes: 'PDF · Video Library · 25% Marucci/Victus',
    icon: 'clock',
  },
  {
    id: 'young-slugger',
    name: 'Young Slugger System — 8-Week Program',
    desc: 'Built for youth athletes. 8 weeks of swing mechanics, bat speed development, and athletic movement patterns. Rated 5.0 stars.',
    price: 19.99,
    priceDisplay: '$19.99',
    priceId: 'price_1TD6yHE0ePNbtD9wJcWT2RQH',
    includes: 'PDF · Video Library · 25% Marucci/Victus',
    icon: 'users',
  },
  {
    id: 'female-nutrition',
    name: 'Youth Female Athlete Hormone Nutrition Blueprint',
    desc: 'Hormone-safe nutrition for female athletes 10–18. Support energy, growth, performance, and cycle health with science-backed guidance.',
    price: 20,
    priceDisplay: '$20',
    oldPrice: '$30',
    priceId: 'price_1TD6wCE0ePNbtD9w2eYOULPR',
    includes: 'PDF Guide · 25% Marucci/Victus',
    icon: 'heart',
  },
  {
    id: 'male-nutrition',
    name: 'Youth Male Athlete Hormone Nutrition Blueprint',
    desc: 'A hormone-supportive nutrition guide for young male athletes to build strength and maximize performance. Stop leaving gains on the table.',
    price: 20,
    priceDisplay: '$20',
    oldPrice: '$30',
    priceId: 'price_1TD6xXE0ePNbtD9wyeurbsPv',
    includes: 'PDF Guide · 25% Marucci/Victus',
    icon: 'heart',
  },
  {
    id: 'elite-coaching',
    name: 'Elite Baseball Coaching — Full Access',
    desc: '1-on-1 coaching with Joseph. Weekly programming, swing analysis via video calls, gym planning, and recruiting strategy. For the athlete going all in.',
    price: 500,
    priceDisplay: '$500',
    priceId: 'price_1TD74ME0ePNbtD9wojBjZQre',
    includes: '1-on-1 · Video Calls · Custom Plan · 25% Marucci/Victus',
    badge: 'Premium',
    badgeOutline: true,
    icon: 'star',
  },
]

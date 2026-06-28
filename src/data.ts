import { 
  Sunrise, 
  Sunset, 
  Flame, 
  Swords, 
  Activity, 
  Dumbbell, 
  Trophy, 
  Apple 
} from 'lucide-react';

export interface BatchInfo {
  id: string;
  name: string;
  time: string;
  days: string;
  tag: string;
  iconName: 'sunrise' | 'sunset' | 'moon' | 'star';
}

export interface ServiceInfo {
  id: string;
  number: string;
  name: string;
  description: string;
  iconName: 'boxing' | 'kickboxing' | 'hiit' | 'weight' | 'pt' | 'nutrition';
}

export interface GalleryImage {
  url: string;
  label: string;
}

export interface Testimonial {
  id: string;
  stars: number;
  text: string;
  author: string;
}

export interface CoachInfo {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  signature: string;
  imageUrl: string;
}


export const BATCHES: BatchInfo[] = [
  {
    id: 'monday',
    name: 'MONDAY BATCH',
    time: 'Morning: 5:30 AM – 11 AM\nEvening: 5 PM – 12 AM',
    days: 'MONDAY ONLY',
    tag: 'EARLY RISER MORNING SHIFT',
    iconName: 'sunrise'
  },
  {
    id: 'tuesat',
    name: 'TUE – SAT BATCHES',
    time: 'Morning: 12 AM – 11 AM\nEvening: 5 PM – 12 AM',
    days: 'TUESDAY TO SATURDAY',
    tag: '24-HOUR RADICAL CYCLE',
    iconName: 'sunset'
  },
  {
    id: 'sunday',
    name: 'SUNDAY BATCH',
    time: '12 AM – 10 AM',
    days: 'SUNDAY ONLY',
    tag: 'LIMITED HOURS',
    iconName: 'moon'
  }
];

export const SERVICES: ServiceInfo[] = [
  {
    id: 'boxing',
    number: '01',
    name: 'BOXING',
    iconName: 'boxing',
    description: 'The sweet science and one of the most complete physical workouts in existence. Boxing at Energy Zone covers footwork, combinations, pad work, and bag work in structured sessions that build explosive power, sharp reflexes, and extraordinary cardiovascular endurance. Led by coaches who know the sport. No experience needed to start.'
  },
  {
    id: 'kickboxing',
    number: '02',
    name: 'KICKBOXING',
    iconName: 'kickboxing',
    description: 'A full-body combat discipline that builds cardiovascular fitness, coordination, and functional strength simultaneously. Coached by experienced martial artists who understand both sport and fitness applications. Whether you train for competition or conditioning — you will feel the difference from session one.'
  },
  {
    id: 'hiit',
    number: '03',
    name: 'HIIT CLASSES',
    iconName: 'hiit',
    description: 'High-Intensity Interval Training that alternates explosive effort with controlled rest to maximise calorie burn in minimum time. Scientifically proven to elevate your metabolism for hours after training ends. Sessions are trainer-led, time-efficient, and built to produce real visible change. Expect to be pushed every time.'
  },
  {
    id: 'weight',
    number: '04',
    name: 'WEIGHT TRAINING',
    iconName: 'weight',
    description: 'Build the strength and physique you have always wanted through structured, progressive resistance training coached by people who know exactly what they are doing. Correct form, intelligent progressive overload, and a programme designed specifically for your level — beginner or advanced. Long-term results without injury.'
  },
  {
    id: 'pt',
    number: '05',
    name: 'PERSONAL TRAINING',
    iconName: 'pt',
    description: 'One-on-one coaching where every minute of every session is programmed for your body, your goals, your weak points. Your trainer tracks your progress, adjusts your programme continuously, and holds you accountable in ways group classes cannot. The fastest, most direct route from where you are to where you want to be.'
  },
  {
    id: 'nutrition',
    number: '06',
    name: 'NUTRITION CONSULTING',
    iconName: 'nutrition',
    description: 'Real transformation is 70 percent what you eat. Our consultants build personalised meal plans based on your specific goals, body composition, food preferences, and lifestyle. No generic templates. Whether your goal is fat loss, muscle gain, or performance — you get a plan built around your actual life.'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800',
    label: 'STRENGTH ZONE'
  },
  {
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
    label: 'BOXING RING & BAGS'
  },
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    label: 'HIIT ARENA'
  },
  {
    url: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800',
    label: 'FREE WEIGHTS STATION'
  },
  {
    url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800',
    label: 'CARDIO ZONE'
  },
  {
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
    label: 'PERSONALIZED COACHING'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'featured',
    stars: 5,
    text: 'Would highly recommend. Reasonably priced and a great workout atmosphere.',
    author: 'Google Review'
  },
  {
    id: 'second',
    stars: 5,
    text: 'Reasonable price, good quality machines imported, trainers good.',
    author: 'Google Review'
  },
  {
    id: 'third',
    stars: 5,
    text: 'Well equipped, good instructors, helpful and motivating people.',
    author: 'Google Review'
  }
];

export const COACHES: CoachInfo[] = [
  {
    id: 'vikram',
    name: 'VIKRAM "THE BEAST" RATHORE',
    title: 'EX-SPECIAL FORCES INSTRUCTOR',
    specialty: 'COMBAT & ATHLETIC CONDITIONING',
    experience: '12 YEARS EXPERIENCE',
    signature: 'Pain is a feedback loop. Learn from it.',
    imageUrl: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'sarah',
    name: 'SARAH D\'SOUZA',
    title: 'OLYMPIC WEIGHTLIFTING CONTENDER',
    specialty: 'STRENGTH & INTENSE HIIT TRAINING',
    experience: '8 YEARS EXPERIENCE',
    signature: 'Don\'t count the reps. Make the reps count.',
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'marcus',
    name: 'MARCUS "IRON" STEELE',
    title: 'WBO REGIONAL CHAMPION (RETD.)',
    specialty: 'PRO BOXING & ADVANCED SPARRING',
    experience: '15 YEARS EXPERIENCE',
    signature: 'The fight is won in the dark. The lights just show who did the work.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80'
  }
];


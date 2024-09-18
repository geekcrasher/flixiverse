import { Link } from '@/lib/types';
import {
  Flame,
  House,
  ChartArea,
  CalendarDays,
  Heart,
  Star,
  BookmarkCheck
} from 'lucide-react';

export const menuLinks: Link[] = [
  {
    id: 1,
    path: 'home',
    label: 'Home',
    icon: House
  },
  {
    id: 2,
    path: 'trending',
    label: 'Trending',
    icon: ChartArea
  },
  {
    id: 3,
    path: 'popular',
    label: 'Popular',
    icon: Flame
  },
  {
    id: 4,
    path: 'upcoming',
    label: 'Upcoming',
    icon: CalendarDays
  },
  {
    id: 5,
    path: 'top-rated',
    label: 'Top Rated',
    icon: Star
  },
]


export const libraryLinks: Link[] = [
  {
    id: 1,
    path: 'wishlists',
    label: 'Wishlists',
    icon: Heart
  },
  {
    id: 2,
    path: 'bookmarked',
    label: 'Bookmarked',
    icon: BookmarkCheck
  }
]
import { LucideIcon } from "lucide-react";

export interface routesProps {
  name: string;
  route: string;
  icon: LucideIcon;
}

export interface destinationProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  cover?: string;
  address: string;
  latitude: number;
  longitude: number;
  price: number;
  districtSlu: string;
  categorySlu: string;
  district?: districtProps;
  category?: categoryProps;
  createdAt: string;
  updatedAt: string;
}

export interface districtProps {
  id: string;
  name: string;
  slug: string;
  cover?: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  Destination?: destinationProps[];
  Activity?: activityProps[];
}

export interface activityProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  body: string;
  cover?: string;
  address?: string;
  districtSlug: string;
  createdAt: string;
  updatedAt: string;
  district?: districtProps;
}

export interface categoryProps {
  id: string;
  name: string;
  slug: string;
  cover?: string;
  description: string;
  updatedAt: string;
  createdAt: string;
  Destination?: destinationProps[];
}

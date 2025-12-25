import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./publisher";

export interface Store {
  id: number;
  name: string;
  slug: string;
  domain?: string;
}

export interface GameStore {
  id: number;
  store: Store;
  url?: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  games_count: number;
}

export interface Developer {
  id: number;
  name: string;
  slug: string;
  image_background?: string;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface ESRBRating {
  id: number;
  name: string;
  slug: string;
}

export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  background_image_additional?: string;
  description_raw: string;
  description?: string;
  parent_platforms: { platform: Platform }[];
  platforms?: {
    platform: Platform;
    released_at?: string;
    requirements?: { minimum?: string; recommended?: string };
  }[];
  metacritic: number;
  metacritic_url?: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_count: number;
  added: number;
  playtime: number;
  released: string;
  tba: boolean;
  updated: string;
  genres: Genre[];
  publishers: Publisher[];
  developers?: Developer[];
  tags?: Tag[];
  stores?: GameStore[];
  esrb_rating?: ESRBRating;
  website?: string;
  reddit_url?: string;
  clip?: {
    clip: string;
    preview: string;
  };
  short_screenshots?: { id: number; image: string }[];
}

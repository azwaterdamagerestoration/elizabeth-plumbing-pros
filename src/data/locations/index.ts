import { LocationPageData } from "@/types/location";
import { westfieldLocationData } from "./westfield";
import { unionLocationData } from "./union";
import { cranfordLocationData } from "./cranford";
import { roselleLocationData } from "./roselle";
import { fanwoodLocationData } from "./fanwood";

export const allLocationsData: LocationPageData[] = [
  westfieldLocationData,
  unionLocationData,
  cranfordLocationData,
  roselleLocationData,
  fanwoodLocationData,
];

export function getLocationBySlug(slug: string): LocationPageData | undefined {
  const normalized = slug.replace(/^plumber-/, "").replace(/-nj$/, "");
  return allLocationsData.find(
    (loc) => loc.slug === slug || loc.id === slug || loc.id === normalized
  );
}

export function getAllLocationSlugs(): string[] {
  return allLocationsData.map((loc) => loc.slug);
}

export function getAllLocations(): LocationPageData[] {
  return allLocationsData;
}

export {
  westfieldLocationData,
  unionLocationData,
  cranfordLocationData,
  roselleLocationData,
  fanwoodLocationData,
};


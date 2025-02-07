import { markets } from "./market";

export function getMarketSelectors(countryCode: any) {
  return markets[countryCode];
}


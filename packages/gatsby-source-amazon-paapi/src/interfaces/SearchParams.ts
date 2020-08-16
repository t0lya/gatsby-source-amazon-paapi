export interface SearchParams {
  Actor?: string;
  Artist?: string;
  Author?: string;
  Availability?: string;
  Brand?: string;
  BrowseNodeId?: string;
  Condition?: 'Any' | 'New' | 'Used' | 'Collectible' | 'Refurbished';
  CurrencyOfPreference?: string;
  DeliveryFlag?: (
    | 'AmazonGlobal'
    | 'FreeShipping'
    | 'FulfilledByAmazon'
    | 'Prime'
  )[];
  ItemCount?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  ItemPage?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  Keywords?: string;
  LanguagesOfPreference?: string[];
  Marketplace?: string;
  MaxPrice?: number;
  Merchant?: 'All' | 'Amazon';
  MinPrice?: number;
  MinReviewsRating?: 1 | 2 | 3 | 4 | 5;
  MinSavingPercent?: number;
  OfferCount?: number;
  PartnerTag: string;
  PartnerType: string;
  Properties?: Record<string, string>;
  Resources?: string[];
  SearchIndex?: string;
  SortBy?:
    | 'AvgCustomerReviews'
    | 'Featured'
    | 'Price:HighToLow'
    | 'Price: LowToHigh'
    | 'Relevance';
  Title?: string;
}

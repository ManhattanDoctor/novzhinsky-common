export interface ITimeTariff {
    id: number;
    externalId: number;
    name: string;
    priceFirstHour: number;
    priceSecondHour: number;
    priceThirdHour: number;
    priceOtherHour: number;
    minPrice: number;
    maxPrice: number;
    roundType: string;
    roundStep: number;
    isDefault: boolean;
    updated: Date;
}

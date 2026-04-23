export interface IOutcomeCategory {
    id: number;
    externalGuid: string;
    name: string;
    updated: Date;
}

export interface IOutcome {
    id: number;
    externalGuid: string;
    outcomeDate: string;
    categoryGuid?: string;
    categoryName?: string;
    amount: string;
    comment?: string;
    created: Date;
}

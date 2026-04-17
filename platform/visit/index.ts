export enum PaymentMethod {
    CASH = 'CASH',
    CARD = 'CARD',
    ONLINE = 'ONLINE',
}

export interface IVisit {
    id: number;
    externalId: string;
    visitDate: Date;
    durationMinutes?: number;
    tariffName?: string;
    guestCount: number;
    totalAmount: string;
    paymentMethod?: PaymentMethod;
    created: Date;
}

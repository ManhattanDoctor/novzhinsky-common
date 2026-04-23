export enum PaymentMethod {
    CASH = 'CASH',
    CARD = 'CARD',
    ONLINE = 'ONLINE',
}

export enum DiscountKind {
    NONE = 'NONE',
    LOYALTY_6 = 'LOYALTY_6',
    PROMO_EARLY = 'PROMO_EARLY',
    GUEST_CARD_20 = 'GUEST_CARD_20',
    STAFF_25 = 'STAFF_25',
    MANUAL = 'MANUAL',
    UNKNOWN = 'UNKNOWN',
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

// --------------------------------------------------------------------------
//
//  Detail Card
//
// --------------------------------------------------------------------------

export interface IVisitDetail {
    visit: IVisitDetailBase;
    persons: IVisitDetailPerson[];
    payment: IVisitDetailPayment;
    receipt: IVisitDetailReceipt | null;
    shift: IVisitDetailShift | null;
    alerts: IVisitDetailAlert[];
    fraudScore: IVisitDetailFraudScore;
    tariffCheck: IVisitDetailTariffCheck | null;
    clientHistory: IVisitDetailClientHistory | null;
    duplicateFiscal: IVisitDetailDuplicateFiscal | null;
}

export interface IVisitDetailFraudScore {
    score: number;
    level: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    reasons: string[];
}

export interface IVisitDetailTariffCheck {
    minutes: number;
    actualPaid: string;
    expectedDefault: string;
    expectedCard: string;
    matchedTariff: 'DEFAULT' | 'CARD' | 'NONE';
    hasCard: boolean;
    verdict: 'OK' | 'ZERO_MINUTES' | 'GUEST_TARIFF_NO_CARD' | 'OVERPAY_WITH_CARD' | 'OFF_SCALE';
    diff: string;
}

export interface IVisitDetailClientHistory {
    card: { number: string; phone: string | null };
    totalVisits: number;
    totalSpent: string;
    firstSeen: Date;
    lastSeen: Date;
    averageCheck: string;
    currentPromoNum: number | null;
}

export interface IVisitDetailDuplicateFiscal {
    withinMinute: number;
    withinFiveMinutes: number;
    sameAmountSameMinute: boolean;
}

// --------------------------------------------------------------------------
//
//  Barista Detail Card
//
// --------------------------------------------------------------------------

export interface IBaristaDetail {
    profile: IBaristaProfile;
    metrics: IBaristaMetrics;
    daily: IBaristaDailyPoint[];
    risk: IBaristaRisk;
    shifts: IBaristaShift[];
    suspiciousVisits: IBaristaSuspiciousVisit[];
    comparison: IBaristaComparisonRow[];
}

export interface IBaristaProfile {
    userId: number;
    name: string;
    firstSeen: Date | null;
    lastSeen: Date | null;
    totalShifts: number;
}

export interface IBaristaMetrics {
    visits: number;
    revenue: string;
    averageCheck: string;
    cashRevenue: string;
    cardRevenue: string;
    sbpRevenue: string;
    shareOfTotal: number;
}

export interface IBaristaDailyPoint {
    date: string;
    visits: number;
    revenue: string;
}

export interface IBaristaRisk {
    staffDiscount25: { count: number; totalSaved: string };
    loyalty6Free: { count: number };
    manualPrice: { count: number };
    tariffSubstitution: { count: number; totalGap: string };
    canceledOrders: { count: number; cancelRate: number };
    unsettledShifts: { count: number };
    totalAlerts: number;
    alertsBySeverity: Record<string, number>;
}

export interface IBaristaShift {
    id: number;
    shiftDate: string;
    shiftNum: number;
    startAt: Date | null;
    endAt: Date | null;
    visits: number;
    revenue: string;
    cashStartValue: string;
    cashCheckValue: string;
    alertsCount: number;
}

export interface IBaristaSuspiciousVisit {
    visitId: number;
    visitDate: Date;
    totalAmount: string;
    fraudScore: number;
    fraudLevel: string;
    topReason: string | null;
}

export interface IBaristaComparisonRow {
    userId: number;
    name: string;
    visits: number;
    revenue: string;
    averageCheck: string;
    alerts: number;
}

export interface IVisitDetailBase {
    id: number;
    externalId: string;
    visitDate: Date;
    durationMinutes: number | null;
    guestCount: number;
    totalAmount: string;
    paymentMethod: PaymentMethod | null;
    checkNum: number | null;
    shiftDate: string | null;
    shiftNum: number | null;
    startDateTime: string | null;
    endDateTime: string | null;
    barista: { id: number | null; name: string | null };
}

export interface IVisitDetailPerson {
    name: string | null;
    comment: string | null;
    card: IVisitDetailCard | null;
    totalUsedPoints: number;
    orders: IVisitDetailOrder[];
}

export interface IVisitDetailCard {
    name: string | null;
    surname: string | null;
    phone: string | null;
    number: string | null;
}

export interface IVisitDetailOrder {
    menuItemName: string | null;
    menuTypeName: string | null;
    menuOrderType: string | null;
    itemPrice: string;
    priceWithDiscount: string;
    selfPrice: string;
    expectedPrice: string | null;
    discountPercent: number;
    discountValue: string;
    orderPromoNum: number | null;
    manualPriceWithDiscount: string | null;
    discountKind: DiscountKind;
    usedPoints: number;
    addPoints: number | null;
    supplementText: string | null;
    isDeleted: boolean;
    createdDateTime: string | null;
    completedDateTime: string | null;
    canceledDateTime: string | null;
    createdUserId: number | null;
    margin: { percent: number | null; amount: string };
}

export interface IVisitDetailPayment {
    cash: string;
    credit: string;
    other: string;
    otherTypeKind: 'SBP' | 'OTHER' | null;
    otherTypeSettingsId: number | null;
    otherTypeName: string | null;
}

export interface IVisitDetailReceipt {
    id: number;
    fiscalDriveNumber: string;
    fiscalDocumentNumber: string;
    fiscalSign: string;
    receiptDate: Date;
    kktRegNumber: string | null;
    receiptNumber: number | null;
    shiftNumber: number | null;
    operationType: string;
    isCorrection: boolean;
    operatorName: string | null;
    payment: { cash: string; ecash: string; credit: string; prepaid: string; provision: string };
    totalAmount: string;
    cdateUtc: string | null;
    docDateTime: string | null;
    offlineDelaySeconds: number | null;
    items: Array<{ name: string; quantity: string; price: string; total: string }>;
    match: { score: number; amountDiff: string; timeDiffSeconds: number; isManual: boolean; note: string | null };
}

export interface IVisitDetailShift {
    id: number;
    shiftDate: string;
    shiftNum: number;
    cashStartValue: string;
    cashCheckValue: string;
    creditCheckValue: string;
}

export interface IVisitDetailAlert {
    id: number;
    detector: string;
    severity: string;
    title: string;
    description: string;
    created: Date;
}

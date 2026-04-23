export enum AlertSeverity {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    CRITICAL = 'CRITICAL',
}

export enum AlertStatus {
    CREATED = 'CREATED',
    SENT = 'SENT',
    ACKNOWLEDGED = 'ACKNOWLEDGED',
    RESOLVED = 'RESOLVED',
}

export enum DetectorType {
    LARGE_PAYMENT = 'LARGE_PAYMENT',
    UNPAID_RENT = 'UNPAID_RENT',
    CASH_WITHDRAWAL = 'CASH_WITHDRAWAL',
    PAYMENT_TO_INDIVIDUAL = 'PAYMENT_TO_INDIVIDUAL',
    MARKETPLACE_BLACKLIST = 'MARKETPLACE_BLACKLIST',
    REFUND_SPIKE = 'REFUND_SPIKE',
    TRAFFIC_DROP = 'TRAFFIC_DROP',
    REVENUE_DISCREPANCY = 'REVENUE_DISCREPANCY',
    SOURCE_SILENCE = 'SOURCE_SILENCE',
    UNPUNCHED_SALE = 'UNPUNCHED_SALE',
    UNMATCHED_RECEIPT = 'UNMATCHED_RECEIPT',
    HIGH_DISCOUNT = 'HIGH_DISCOUNT',
    ORDER_CANCEL = 'ORDER_CANCEL',
    SOLD_BELOW_COST = 'SOLD_BELOW_COST',
    CASH_SHORTAGE = 'CASH_SHORTAGE',
    UNDERPRICED_SALE = 'UNDERPRICED_SALE',
    STAFF_DISCOUNT_ABUSE = 'STAFF_DISCOUNT_ABUSE',
    TARIFF_MISMATCH = 'TARIFF_MISMATCH',
    DUPLICATE_RECEIPT = 'DUPLICATE_RECEIPT',
}

export interface IAlert {
    id: number;
    detector: DetectorType;
    severity: AlertSeverity;
    status: AlertStatus;
    title: string;
    description: string;
    context: Record<string, any>;
    referenceType?: string;
    referenceId?: number;
    dedupKey: string;
    telegramMessageId?: string;
    created: Date;
    acknowledgedAt?: Date;
    acknowledgedBy?: string;
    resolvedAt?: Date;
    resolvedBy?: string;
}

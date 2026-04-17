export enum ReconciliationStatus {
    OK = 'OK',
    WARNING = 'WARNING',
    CRITICAL = 'CRITICAL',
    PENDING = 'PENDING',
}

export interface IReconciliation {
    id: number;
    date: string;
    status: ReconciliationStatus;
    ytimesRevenue?: string;
    ofdRevenue?: string;
    bankRevenue?: string;
    ytimesOfdDiff?: string;
    ofdBankDiff?: string;
    ytimesCount?: number;
    ofdCount?: number;
    bankCount?: number;
    notes?: string;
    resolvedBy?: string;
    resolvedAt?: Date;
    created: Date;
    updated: Date;
}

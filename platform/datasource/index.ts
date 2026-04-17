export enum DataSourceType {
    OFD = 'OFD',
    TBANK = 'TBANK',
    YTIMES = 'YTIMES',
}

export enum SyncStatus {
    RUNNING = 'RUNNING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    PARTIAL = 'PARTIAL',
}

export enum SyncType {
    INCREMENTAL = 'INCREMENTAL',
    FULL = 'FULL',
}

export interface ISyncLog {
    id: number;
    source: DataSourceType;
    syncType: SyncType;
    status: SyncStatus;
    startedAt: Date;
    finishedAt?: Date;
    recordsFetched: number;
    recordsCreated: number;
    recordsSkipped: number;
    errorMessage?: string;
    cursor?: string;
}

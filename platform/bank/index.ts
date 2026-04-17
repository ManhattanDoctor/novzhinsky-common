export enum BankOperationDirection {
    DEBIT = 'DEBIT',
    CREDIT = 'CREDIT',
}

export enum BankCategory {
    RENT = 'RENT',
    SALARY = 'SALARY',
    TAX = 'TAX',
    SUPPLIER = 'SUPPLIER',
    ACQUIRER = 'ACQUIRER',
    CASH_WITHDRAWAL = 'CASH_WITHDRAWAL',
    PERSONAL = 'PERSONAL',
    MARKETPLACE = 'MARKETPLACE',
    REFUND = 'REFUND',
    TRANSFER = 'TRANSFER',
    OTHER = 'OTHER',
}

export enum BankClassificationMatchType {
    INN = 'INN',
    PURPOSE_CONTAINS = 'PURPOSE_CONTAINS',
    COUNTERPARTY_CONTAINS = 'COUNTERPARTY_CONTAINS',
    ACCOUNT_PREFIX = 'ACCOUNT_PREFIX',
    MCC = 'MCC',
}

export interface IBankOperation {
    id: number;
    operationId: string;
    account: string;
    date: Date;
    amount: string;
    currency: string;
    direction: BankOperationDirection;
    counterpartyName?: string;
    counterpartyInn?: string;
    counterpartyAccount?: string;
    purpose?: string;
    category?: BankCategory;
    isFlagged: boolean;
    flagReason?: string;
    created: Date;
}

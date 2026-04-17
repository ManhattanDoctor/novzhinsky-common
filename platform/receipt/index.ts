export enum ReceiptOperationType {
    SALE = 'SALE',
    REFUND = 'REFUND',
    CORRECTION = 'CORRECTION',
}

export interface IReceipt {
    id: number;
    fiscalDriveNumber: string;
    fiscalDocumentNumber: string;
    fiscalSign: string;
    receiptDate: Date;
    totalAmount: string;
    cashAmount: string;
    cardAmount: string;
    operationType: ReceiptOperationType;
    operatorName?: string;
    itemsCount: number;
    created: Date;
}

export interface IReceiptItem {
    id: number;
    receiptId: number;
    name: string;
    quantity: string;
    price: string;
    total: string;
    paymentType: number;
}

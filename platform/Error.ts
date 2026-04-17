import { ExtendedError } from '@ts-core/common';
import * as _ from 'lodash';

export class Error<T = void> extends ExtendedError<T, ErrorCode> {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static instanceOf(item: any): item is Error {
        return item instanceof Error || Object.values(ErrorCode).includes(item.code);
    }

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(code: ErrorCode, public details: T, public status: number = ExtendedError.HTTP_CODE_BAD_REQUEST) {
        super('', code, details);
        this.message = this.constructor.name;
    }
}

// User
export class UserUndefinedError extends Error {
    constructor() {
        super(ErrorCode.USER_UNDEFINED);
    }
}
export class UserNotFoundError extends Error<string> {
    constructor(id: string) {
        super(ErrorCode.USER_NOT_FOUND, id);
    }
}
export class UserTokenInvalidError extends Error<string> {
    constructor(token: string) {
        super(ErrorCode.USER_TOKEN_INVALID, token, ExtendedError.HTTP_CODE_UNAUTHORIZED);
    }
}
export class UserForbiddenError extends Error {
    constructor() {
        super(ErrorCode.USER_FORBIDDEN, null, ExtendedError.HTTP_CODE_FORBIDDEN);
    }
}
export class UserStatusForbiddenError extends Error<IInvalidValue<string>> {
    constructor(details: IInvalidValue<string>) {
        super(ErrorCode.USER_STATUS_FORBIDDEN, details);
    }
}

// File
export class FileUndefinedError extends Error {
    constructor() {
        super(ErrorCode.FILE_UNDEFINED);
    }
}
export class FileNotFoundError extends Error {
    constructor() {
        super(ErrorCode.FILE_NOT_FOUND, null, ExtendedError.HTTP_CODE_NOT_FOUND);
    }
}
export class FileForbiddenError extends Error {
    constructor() {
        super(ErrorCode.FILE_FORBIDDEN, null, ExtendedError.HTTP_CODE_FORBIDDEN);
    }
}
export class FileNameInvalidError extends Error {
    constructor() {
        super(ErrorCode.FILE_NAME_INVALID, null, ExtendedError.HTTP_CODE_FORBIDDEN);
    }
}
export class FileMimeInvalidError extends Error {
    constructor() {
        super(ErrorCode.FILE_MIME_INVALID, null, ExtendedError.HTTP_CODE_FORBIDDEN);
    }
}
export class FileSizeInvalidError extends Error {
    constructor() {
        super(ErrorCode.FILE_SIZE_INVALID, null, ExtendedError.HTTP_CODE_FORBIDDEN);
    }
}
export class FileAmountExceedError extends Error {
    constructor() {
        super(ErrorCode.FILE_AMOUNT_EXCEED, null, ExtendedError.HTTP_CODE_FORBIDDEN);
    }
}
export class FileAlreadyExistsError extends Error {
    constructor() {
        super(ErrorCode.FILE_ALREADY_EXISTS, null, ExtendedError.HTTP_CODE_FORBIDDEN);
    }
}

export interface IInvalidValue<T = any> {
    name?: string;
    value: T | Array<T>;
    expected?: T | Array<T>;
}

export enum ErrorCode {
    // User
    USER_UNDEFINED = 'USER_UNDEFINED',
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    USER_FORBIDDEN = 'USER_FORBIDDEN',
    USER_TOKEN_INVALID = 'USER_TOKEN_INVALID',
    USER_STATUS_FORBIDDEN = 'USER_STATUS_FORBIDDEN',
    // File
    FILE_UNDEFINED = 'FILE_UNDEFINED',
    FILE_NOT_FOUND = 'FILE_NOT_FOUND',
    FILE_FORBIDDEN = 'FILE_FORBIDDEN',
    FILE_NAME_INVALID = 'FILE_NAME_INVALID',
    FILE_MIME_INVALID = 'FILE_MIME_INVALID',
    FILE_SIZE_INVALID = 'FILE_SIZE_INVALID',
    FILE_AMOUNT_EXCEED = 'FILE_AMOUNT_EXCEED',
    FILE_ALREADY_EXISTS = 'FILE_ALREADY_EXISTS',
    // Datasource
    SYNC_ALREADY_RUNNING = 'SYNC_ALREADY_RUNNING',
    DATASOURCE_UNAVAILABLE = 'DATASOURCE_UNAVAILABLE',
    // Receipt
    RECEIPT_NOT_FOUND = 'RECEIPT_NOT_FOUND',
    // Bank
    BANK_OPERATION_NOT_FOUND = 'BANK_OPERATION_NOT_FOUND',
    // Visit
    VISIT_NOT_FOUND = 'VISIT_NOT_FOUND',
    // Reconciliation
    RECONCILIATION_NOT_FOUND = 'RECONCILIATION_NOT_FOUND',
    // Alert
    ALERT_NOT_FOUND = 'ALERT_NOT_FOUND',
    DETECTOR_NOT_FOUND = 'DETECTOR_NOT_FOUND',
}

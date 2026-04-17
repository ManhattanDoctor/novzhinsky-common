import { ITraceable } from '@ts-core/common';

export interface ILoginDto extends ITraceable {
    login: string;
    password: string;
}

export interface ILoginDtoResponse {
    sid: string;
}

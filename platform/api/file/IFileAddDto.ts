import { ITraceable } from '@ts-core/common';
import { File, IFileBufferInput } from '../../file';

export interface IFileAddDto extends ITraceable { }

export interface IFileBufferAddDto extends IFileAddDto {
    name: string;
    input: IFileBufferInput;
    tags?: Array<string>;
    companyId?: string;
    signatureId?: number;
}

export type IFileAddDtoResponse = File;

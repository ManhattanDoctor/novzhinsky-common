import { File } from '../../file';
import { IFileAddDto } from './IFileAddDto';

export interface IFileEditDto extends Partial<IFileAddDto>, Partial<File> {
    id: number;
}

export type IFileEditDtoResponse = File;
import { ITraceable } from '@ts-core/common';
import { IUserPreferences, User } from '../../user';

export interface IUserEditDto extends ITraceable {
    preferences?: Partial<IUserPreferences>;
}
export declare type IUserEditDtoResponse = User;

import { ITraceable } from '@ts-core/common';
import { IUserPreferences, User } from '../../user';

export interface IUserEditDto<P extends IUserPreferences> extends ITraceable {
    preferences?: Partial<P>;
}
export declare type IUserEditDtoResponse<P extends IUserPreferences> = User<P>;

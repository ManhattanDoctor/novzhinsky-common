import { IFilterableProperties, IPaginable, IPagination, ITraceable } from '@ts-core/common';
import { IUserPreferences, User } from '../../user';

export interface IUserListDto extends IPaginable<User>, ITraceable {
    preferences?: IFilterableProperties<IUserPreferences>;
}

export interface IUserListDtoResponse extends IPagination<User> { }

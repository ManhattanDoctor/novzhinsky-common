import { IFilterableProperties, IPaginable, IPagination, ITraceable } from '@ts-core/common';
import { IUserPreferences, User } from '../../user';

export interface IUserListDto<P extends IUserPreferences> extends IPaginable<User<P>>, ITraceable {
    preferences?: IFilterableProperties<P>;
}

export interface IUserListDtoResponse<P extends IUserPreferences> extends IPagination<User<P>> { }

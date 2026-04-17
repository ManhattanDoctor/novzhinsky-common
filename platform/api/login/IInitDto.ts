import { ITraceable } from '@ts-core/common';
import { IUserPreferences, User } from '../../user';

export interface IInitDto extends ITraceable { }

export interface IInitDtoResponse<P extends IUserPreferences = IUserPreferences> {
    user: User<P>;
}

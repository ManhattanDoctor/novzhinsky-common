import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional, ApiSchema } from '@ts-core/swagger';
import { File } from '../file';
import { IUserPreferences } from './IUserPreferences';
import * as _ from 'lodash';

@ApiSchema({ description: 'User profile and settings' })
export class UserPreferences implements IUserPreferences {
    @ApiProperty({ description: 'Preference name', example: 'language' })
    public name: string;

    @ApiProperty({ type: Date, description: 'Creation timestamp' })
    @Type(() => Date)
    public created: Date;

    @ApiPropertyOptional()
    public phone?: string;

    @ApiPropertyOptional()
    public email?: string;

    @ApiPropertyOptional()
    public theme?: string;

    @ApiPropertyOptional()
    public language?: string;

    @ApiPropertyOptional({ type: () => File })
    @Type(() => File)
    public avatar?: File;
}

export enum UserRole {
    PLATFORM_EMPLOYEE = 'PLATFORM_EMPLOYEE',
    //
    COMPANY_OTC_MANAGER = 'COMPANY_OTC_MANAGER',
    COMPANY_USER_MANAGER = 'COMPANY_USER_MANAGER',
    COMPANY_COIN_MANAGER = 'COMPANY_COIN_MANAGER',
    COMPANY_CROWDSALE_MANAGER = 'COMPANY_CROWDSALE_MANAGER',
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

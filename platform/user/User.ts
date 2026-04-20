import { Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional, ApiSchema } from '@ts-core/swagger';
import { IUserPreferences } from './IUserPreferences';
import { UserFactory } from './UserFactory';

@ApiSchema({ description: 'System user' })
export class User {
    @ApiProperty({ description: 'Unique user identifier', example: '550e8400-e29b-41d4-a716-446655440000' })
    public id: string;

    @ApiProperty({ description: 'User type', example: 'DEFAULT' })
    public type: string;

    @ApiProperty({ description: 'User login', example: 'admin' })
    public login: string;

    @ApiProperty({ description: 'Current user status', example: 'ACTIVE' })
    public status: string;

    @ApiProperty({ description: 'User preferences (name, email, language, etc.)' })
    @Transform(item => UserFactory.transformPreferences(item), { toClassOnly: true })
    public preferences: IUserPreferences;

    @ApiPropertyOptional({ type: [String], description: 'User roles', example: ['ADMIN'] })
    public roles?: Array<string>;
}

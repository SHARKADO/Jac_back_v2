export class CreateUserDto {
    id: number;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role_id: number;
    is_active: boolean;
    date_of_birth: Date;
}

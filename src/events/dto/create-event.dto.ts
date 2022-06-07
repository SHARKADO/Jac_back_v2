export class CreateEventDto {
    id: number;
    title: string;
    description: string;
    is_open: boolean;
    is_active: boolean;
    places_nb: number;
    admin_id: number;
    date: Date;
}

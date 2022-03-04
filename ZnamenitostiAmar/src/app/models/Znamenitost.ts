export interface Znamenitost{
    id?: number;
    title: string;
    desc: string;
    images: string[];
    coordination: string;
    active: boolean;
    country: string;
    city: string;
    rating: number;
    createdOn?: Date;
    updatedOn?: Date;
}
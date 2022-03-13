export interface Znamenitost{
    id?: number;
    title: string;
    description: string;
    // images: string;
    images: string[];
    coordination: string;
    active: boolean;
    country?: string;
    gradId: number;
    ratings?: number;
    level: number;
    createdOn?: string;
    updatedOn?: string;
}
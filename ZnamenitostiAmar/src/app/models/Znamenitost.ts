export interface Znamenitost{
    id?: number;
    title: string;
    description: string;
    // images: string;
    images: string[];
    coordination: string;
    active: boolean;
    country?: string;
    gradName?: string;
    gradId: number;
    ratings?: any[]
    rating?: number;
    rateBar?: number;
    level: number;
    createdOn?: string;
    updatedOn?: string;
}
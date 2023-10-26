// independent interface for defining types of products.ts, gets implemented by components
export interface Iproducts {
        image: string;
        name: string;
        ingredients?: string;
        price: number;
        category: string;
        availability: boolean;
        qtty: number;
}

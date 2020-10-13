import { Stock } from './stock';

export class Product {
    id: number;
    price: number;
    currency: string;
    description: string;
    sex: string;
    category: string;
    brand: string;
    name: string;
    imageUrl: string;
    stock: Stock[];
}

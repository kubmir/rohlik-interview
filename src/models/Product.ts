interface IPrice {
    full: number;
    currency: string;
}

export interface IProduct {
    name: string;
    id: number;
    image: string;
    price: IPrice;
}
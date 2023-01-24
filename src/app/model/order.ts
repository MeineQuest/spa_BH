import { Customer } from "./customer";

export interface Order {

    id: number;
    items: OrderItems[]
    customerId: number;
    buyerId?: number; 
    paid?: boolean;
    guided?: boolean;

} 
export interface OrderItems {
    name: string; 
    price?: number;
}
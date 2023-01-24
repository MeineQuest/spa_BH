import { Order } from "./order";
import { Person } from "./person";


export interface Customer extends Person {
    orders: Order[];

}
import { IAddress } from "./address";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
}
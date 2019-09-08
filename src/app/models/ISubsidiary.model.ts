import { IStock } from './IStock.model';

export interface ISubsidiary {
    id: string;
    label: string;
    stocks: Array<IStock>;
}
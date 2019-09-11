import { ICity } from './ICity.model';

export interface IState {
    id: number;
    label: string;
    expended: boolean;
    checked: boolean;
    cities: Array<ICity>;
}
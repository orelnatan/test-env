import { ICity } from './ICity.model';

export interface IState {
    id: number;
    label: string;
    expanded: boolean;
    checked: boolean;
    cities: Array<ICity>;
}
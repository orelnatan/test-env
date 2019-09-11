import { IData } from './IData.model';

export interface IResource {
    id: string;
    label: string;
    color: string;
    data: Array<IData>;
}
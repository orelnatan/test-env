import { ISubsidiary } from './ISubsidiary.model';

export interface ICompany {
    id: number;
    label: string;
    subsidiaries: Array<ISubsidiary>;
}
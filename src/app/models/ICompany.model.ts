import { ISubsidiary } from './ISubsidiary.model';

export interface ICompany {
    id: string;
    label: string;
    subsidiaries: Array<ISubsidiary>;
}
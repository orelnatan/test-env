import { Component, Input } from '@angular/core';
import { ICompany } from '../models/ICompany.model';
import { ISubsidiary } from '../models/ISubsidiary.model';

@Component({
  selector: 'stocks-table',
  templateUrl: './stocks-table.component.html',
  styleUrls: ['./stocks-table.component.scss']
})
export class StocksTable {
    @Input() companies: Array<ICompany> = [];

    stocks: Array<string> = [
        "SENMAO", 
        "NETPLAX", 
        "CINASTER", 
        "ADORNICA", 
        "GEEKUS", 
        "FARMEX", 
        "PIVITOL", 
        "SATIANCE", 
        "ASSISTIX", 
        "ISOTRONIC", 
        "CYTREX", 
        "LUNCHPOD", 
        "UNDERTAP", 
        "GEEKOSIS", 
        "CODACT", 
        "KEENGEN", 
        "ISOLOGIX", 
        "THREDZ", 
        "UXMOX", 
        "APPLICA", 
        "DIGINETIC", 
        "ZENTURY", 
        "ZENCO", 
        "COMTRACT", 
        "EARGO", 
        "ZYPLE", 
        "VORTEXACO", 
        "GALLAXIA", 
        "GUSHKOOL", 
        "VERBUS", 
        "BULLZONE", 
        "ISBOL", 
        "DADABASE",
        "QUANTASIS", 
        "REALYSIS", 
        "QIMONK", 
        "BLURRYBUS", 
        "EVENTAGE", 
        "KOZGENE", 
        "PROVIDCO"
    ];

    pageNumber: number = 1;
    itemsPerPage: number = 9;

    getAllSubsidiaries(): Array<ISubsidiary> {
       let allSubsidiaries: Array<ISubsidiary> = [];

       this.companies.map((company: ICompany) => {
            company.subsidiaries.forEach(
                (subsidiary: ISubsidiary) => {
                    allSubsidiaries.push(
                        subsidiary
                    )
            });
        });
        return allSubsidiaries;
    }

    getIndexByPageNumber(index: number): number {   
        return this.pageNumber == 1 ? index : (this.itemsPerPage * (this.pageNumber - 1)) + index;
    }

}

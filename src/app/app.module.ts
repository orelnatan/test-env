import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { isOverflow } from './directives/is-overflow/is-overflow.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home } from './home/home.page';
import { AdultJaw } from './adult-jaw/adult-jaw.component';
import { RangeButton } from './adult-jaw/components/range-button/range-button.component';
import { Tooth } from './adult-jaw/components/tooth/tooth.component';
import { SmearButton } from './adult-jaw/components/smear-button/smear-button.component';
import { AccordionTable } from './accordion-table/accordion-table.component';
import { DocsTable } from './docs-table/docs-table.component';
import { CountriesTable } from './countries-table/countries-table.component';
import { StocksTable } from './stocks-table/stocks-table.component';
import { ResourcesTable } from './resources-table/resources-table.component';
import { ResourcesList } from './resources-list/resources-list.component';
import { Resource } from './resources-list/components/resource/resource.component';
import { StateAccordion } from './resources-table/components/state-accordion/state-accordion.component';
import { InputCheckbox } from './resources-table/components/state-accordion/components/input-checkbox/input-checkbox.component';
import { ResourceAccordion } from './resources-table/components/resource-accordion/resource-accordion.component';
import { GeneralHeader } from './resources-table/components/general-header/general-header.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    AdultJaw,
    RangeButton,
    Tooth,
    InputCheckbox,
    SmearButton,
    AccordionTable,
    DocsTable,
    CountriesTable,
    StocksTable,
    ResourcesTable,
    StateAccordion,
    ResourceAccordion,
    ResourcesList,
    Resource,
    GeneralHeader,
    isOverflow,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

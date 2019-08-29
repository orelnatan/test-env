import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home } from './home/home.page';
import { AdultJaw } from './adult-jaw/adult-jaw.component';
import { RangeButton } from './adult-jaw/components/range-button/range-button.component';
import { Tooth } from './adult-jaw/components/tooth/tooth.component';
import { SmearButton } from './adult-jaw/components/smear-button/smear-button.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    AdultJaw,
    RangeButton,
    Tooth,
    SmearButton
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

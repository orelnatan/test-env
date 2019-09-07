import { NgModule } from '@angular/core';

import {
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatExpansionModule
     
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatProgressSpinnerModule, 
      MatCheckboxModule,
      MatInputModule,
      MatIconModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatChipsModule,
      MatExpansionModule 
  ],
  exports: [
      MatButtonModule,
      MatProgressSpinnerModule, 
      MatCheckboxModule,
      MatInputModule,
      MatIconModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatChipsModule,
      MatExpansionModule 
  ],
})
export class AppMaterialModule { }
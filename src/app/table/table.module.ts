import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TableComponent}
    ])
  ]
})
export default class TableModule { }
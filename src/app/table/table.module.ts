import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatSortModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      {path: '', component: TableComponent}
    ])
  ]
})
export default class TableModule { }

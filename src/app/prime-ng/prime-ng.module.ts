import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNG
import {ButtonModule} from 'primeng/button';
import {BadgeModule} from 'primeng/badge';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';



@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    BadgeModule,
    TableModule,
    ToolbarModule
  ],
  imports: [
    CommonModule
  ]
})
export class PrimeNgModule { }

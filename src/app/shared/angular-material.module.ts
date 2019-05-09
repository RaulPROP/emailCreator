import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    MatFormFieldModule, MatInputModule, MatCheckboxModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, MatCheckboxModule
  ]
})
export class AngularMaterialModule { }

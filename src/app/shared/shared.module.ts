;
import { SspPipe } from './pipes/ssp/ssp.pipe'import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.modules';
import { SspPipe } from './ssp.pipe';
import { Pipe/sspPipe } from './pipe/ssp.pipe';


@NgModule({
  declarations: [		
      SspPipe,
      Pipe/sspPipe
   ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SspPipe
  ]
})
export class SharedModule { }

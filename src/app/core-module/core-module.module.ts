import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { FeatureModuleModule } from '../feature-module/feature-module.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModuleModule,
    FeatureModuleModule
  ]
})
export class CoreModuleModule { }

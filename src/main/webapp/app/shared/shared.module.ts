import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Baucalc2SharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Baucalc2SharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [Baucalc2SharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Baucalc2SharedModule {
  static forRoot() {
    return {
      ngModule: Baucalc2SharedModule
    };
  }
}

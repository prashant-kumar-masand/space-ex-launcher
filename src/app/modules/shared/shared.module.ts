import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ProgramCardComponent } from './program-card/program-card.component';
import { CommonLoaderComponent } from './common-loader/common-loader.component';
import { LazyLoadDirective } from './directives/lazy-load-directive';
import { SuccessfulLandingPipe } from './pipes/successful-landing/successful-landing.pipe';
import { DefaultValuePipe } from './pipes/default-value/default-value.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FilterBarComponent,
    ProgramCardComponent,
    CommonLoaderComponent,
    LazyLoadDirective,
    SuccessfulLandingPipe,
    DefaultValuePipe
  ],
  imports: [CommonModule],
  exports: [
    /** Shared Components  **/
    HeaderComponent,
    FooterComponent,
    FilterBarComponent,
    ProgramCardComponent,
    CommonLoaderComponent,
    /** Shared Directives **/
    LazyLoadDirective,
    /** Shared Pipes **/
    SuccessfulLandingPipe,
    DefaultValuePipe
  ]
})
export class SharedModule {}

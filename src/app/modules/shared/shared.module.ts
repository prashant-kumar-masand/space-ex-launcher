import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ProgramCardComponent } from './program-card/program-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FilterBarComponent,
    ProgramCardComponent
  ],
  imports: [CommonModule],
  exports: [
    /** Shared Components  * */
    HeaderComponent,
    FooterComponent,
    FilterBarComponent,
    ProgramCardComponent
  ]
})
export class SharedModule {}

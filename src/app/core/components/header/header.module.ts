import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoComponent } from "./logo/logo.component";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule {}
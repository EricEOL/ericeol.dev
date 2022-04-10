import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoComponent } from "./logo/logo.component";
import { HeaderComponent } from "./header.component";
import { NavBarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    NavBarComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HeaderModule {}
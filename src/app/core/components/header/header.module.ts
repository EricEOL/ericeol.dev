import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoComponent } from "./logo/logo.component";
import { HeaderComponent } from "./header.component";
import { SocialMediaComponent } from "./socialmedia/socialmedia.component";
import { NavBarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SocialMediaComponent,
    NavBarComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    SocialMediaComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HeaderModule {}
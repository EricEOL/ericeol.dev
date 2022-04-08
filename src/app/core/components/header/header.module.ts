import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoComponent } from "./logo/logo.component";
import { HeaderComponent } from "./header.component";
import { SocialMediaComponent } from "./socialmedia/socialmedia.component";

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SocialMediaComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    SocialMediaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule {}
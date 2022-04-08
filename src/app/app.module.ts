import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './core/components/aboutme/aboutme.component';
import { HeaderModule } from './core/components/header/header.module';
import { HomeComponent } from './core/components/home/home.component';
import { TecnologiesComponent } from './core/components/tecnologies/tecnologies.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'aboutme',
        component: AboutMeComponent,
        pathMatch: 'full'
      },
      {
        path: 'tecnologies',
        component: TecnologiesComponent,
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

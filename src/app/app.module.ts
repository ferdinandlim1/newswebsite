import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http'
import {NewsapiserviceService} from './service/newsapiservice.service';
import { TechComponent } from './tech/tech.component';
import { SportsComponent } from './sports/sports.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SearchModule } from './search/search.module';
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechComponent,
    SportsComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
    SearchModule,
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

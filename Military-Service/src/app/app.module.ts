import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/components/home/home.component';
import { NavComponent } from './common/components/nav/nav.component';
import { HeaderComponent } from './common/components/header/header.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

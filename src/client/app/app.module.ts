import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GalleryModule } from './gallery/gallery.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, GalleryModule, ContactModule, HomeModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }

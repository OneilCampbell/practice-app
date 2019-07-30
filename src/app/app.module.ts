import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app-component/app.component';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';

import { ChatService } from './services/chat/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

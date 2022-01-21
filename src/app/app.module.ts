import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentChatComponent } from './parent-chat/parent-chat.component';

import { ChildChatComponent } from './parent-chat/child-chat/child-chat.component';

@NgModule({
  declarations: [AppComponent, ParentChatComponent, ChildChatComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

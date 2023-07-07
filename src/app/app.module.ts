import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { PostComponent } from './post/post.component';
import { PostBoxComponent } from './post-box/post-box.component';
import { DemoFormsComponent } from './demo-forms/demo-forms.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftSidebarComponent,
    PostComponent,
    PostBoxComponent,
    DemoFormsComponent,
    DirectiveDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

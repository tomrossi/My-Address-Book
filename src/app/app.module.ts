import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FinderComponent } from './finder/finder.component';
import { ButtonComponent } from './button/button.component';
import { ContactListComponent } from './contact-list/contact-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FinderComponent,
    ButtonComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

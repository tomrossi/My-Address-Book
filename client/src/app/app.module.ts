import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FinderComponent } from './form-input/finder.component';
import { ContactListComponent } from './contact-list/contact-list.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FinderComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

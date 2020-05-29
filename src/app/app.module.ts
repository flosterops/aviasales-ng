import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './shared/checkbox/checkbox.component';
import {FormsModule} from '@angular/forms';
import { TabsComponent } from './shared/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

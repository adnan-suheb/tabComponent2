import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './shared/component/tabComponent1/tab1.component';
import { TabComponent2 } from './shared/component/tabComponent2/tab2.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabComponent2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

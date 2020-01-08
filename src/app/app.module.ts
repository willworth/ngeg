import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ReceptivechildComponent } from './receptivechild/receptivechild.component';
import { FormexampleComponent } from './formexample/formexample.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    ReceptivechildComponent,
    FormexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstaOneComponent } from './components/asta-one/asta-one.component';
import { AstaTwoComponent } from './components/asta-two/asta-two.component';

@NgModule({
  declarations: [
    AppComponent,
    AstaOneComponent,
    AstaTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

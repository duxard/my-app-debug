import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstaOneComponent } from './components/asta-one/asta-one.component';
import { AstaTwoComponent } from './components/asta-two/asta-two.component';
import { AstaThreeComponent } from './components/asta-three/asta-three.component';

@NgModule({
  declarations: [
    AppComponent,
    AstaOneComponent,
    AstaTwoComponent,
    AstaThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

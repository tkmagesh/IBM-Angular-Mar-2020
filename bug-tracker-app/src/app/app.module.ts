import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugsComponent } from "./bugs/bugs.component";
import { BugOperationsService } from './bugs/services/bugOperations.service';

@NgModule({
  declarations: [
    AppComponent
    , BugsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

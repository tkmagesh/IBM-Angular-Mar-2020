import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugsComponent } from "./bugs/bugs.component";
import { BugOperationsService } from './bugs/services/bugOperations.service';

import { TrimTextPipe } from './bugs/pipes/trimText.pipe';
import { SortPipe } from './bugs/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent
    , BugsComponent
    , TrimTextPipe
    , SortPipe
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

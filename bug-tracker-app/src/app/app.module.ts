import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugsComponent } from "./bugs/bugs.component";
import { BugOperationsService } from './bugs/services/bugOperations.service';
import { BugStorageService } from './bugs/services/bugStorage.service';

import { TrimTextPipe } from './bugs/pipes/trimText.pipe';
import { SortPipe } from './bugs/pipes/sort.pipe';

import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';

@NgModule({
  declarations: [
    AppComponent
    , BugsComponent
    , ClosedCountPipe
    , TrimTextPipe
    , SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugOperationsService
    , BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

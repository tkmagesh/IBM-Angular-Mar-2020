import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UtilsModule } from './utils/utils.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BugsComponent } from "./bugs/bugs.component";
import { BugOperationsService } from './bugs/services/bugOperations.service';
import { BugStorageService } from './bugs/services/bugStorage.service';
import { BugApiService } from './bugs/services/bugApi.service';

import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { BugStatsComponent } from './bugs/views/bugStats.component';
import { BugEditComponent } from './bugs/views/bugEdit.component';

@NgModule({
  declarations: [
    AppComponent
    , BugsComponent
    , BugStatsComponent
    , BugEditComponent
    , ClosedCountPipe

  ],
  imports: [
    BrowserModule
    , UtilsModule
    , HttpClientModule
  ],
  providers: [
    BugOperationsService
    , BugStorageService
    , BugApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

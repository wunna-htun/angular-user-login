import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [					
    AppComponent,
      TaskCreateComponent,
      TaskUpdateComponent,
      TaskListComponent,
      PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

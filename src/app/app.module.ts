import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { SeeTaskComponent } from './pages/see-task/see-task.component';
import { SeeTasksComponent } from './pages/see-tasks/see-tasks.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTaskComponent,
    SeeTaskComponent,
    SeeTasksComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

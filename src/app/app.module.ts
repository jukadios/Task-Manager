import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulos de angular importados para usar los servicios, para navegar por componentes y para los formularios 
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//Los componentes existentes en el proyecto
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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

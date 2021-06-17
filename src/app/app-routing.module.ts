import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { SeeTaskComponent } from './pages/see-task/see-task.component';
import { SeeTasksComponent } from './pages/see-tasks/see-tasks.component';

/*Rutas de cada componente que se usan para navegar*/
const routes: Routes = [
  {path: 'add', component: AddTaskComponent},
  {path: 'tasks', component: SeeTasksComponent},
  {path: 'see/:id', component: SeeTaskComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'add'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
